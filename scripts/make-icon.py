"""Build the favicon set from the real Grand Gastrobar badge.

The source is a round logo sitting on a white square, so we crop to the badge,
mask it to a circle (killing the white corners and the JPEG fringe), and render
each size down from the full-resolution original.
"""
from PIL import Image, ImageDraw, ImageChops, ImageFilter
import os, sys

SRC = sys.argv[1]
OUT = sys.argv[2]
ESPRESSO = (0x22, 0x12, 0x07)   # --color-espresso-950, for the iOS tile
SS = 4                          # supersample the mask for clean edges


def load_badge():
    im = Image.open(SRC).convert("RGB")

    # Trim the white surround: anything that isn't near-white is the badge.
    grey = im.convert("L")
    mask = grey.point(lambda v: 0 if v > 244 else 255)
    box = mask.getbbox()
    if box:
        im = im.crop(box)

    # Square it off around the centre so the circle stays a circle.
    w, h = im.size
    side = max(w, h)
    square = Image.new("RGB", (side, side), (255, 255, 255))
    square.paste(im, ((side - w) // 2, (side - h) // 2))
    return square


def circular(img, size):
    """Downscale to `size` and clip to a circle with an antialiased edge."""
    big = img.resize((size * SS, size * SS), Image.LANCZOS).convert("RGBA")
    mask = Image.new("L", (size * SS, size * SS), 0)
    # Inset by a hair so no white JPEG fringe survives on the rim.
    pad = max(1, int(size * SS * 0.012))
    ImageDraw.Draw(mask).ellipse(
        [pad, pad, size * SS - 1 - pad, size * SS - 1 - pad], fill=255
    )
    big.putalpha(ImageChops.multiply(big.getchannel("A"), mask))
    out = big.resize((size, size), Image.LANCZOS)

    # Downscaling this much softens the script badly; a little unsharp puts
    # the edge back into the small tiles without crunching the large ones.
    if size <= 48:
        rgb = out.convert("RGB").filter(
            ImageFilter.UnsharpMask(radius=1.1, percent=190, threshold=0)
        )
        rgb.putalpha(out.getchannel("A"))
        out = rgb
    return out


badge = load_badge()
print("badge cropped to:", badge.size)
os.makedirs(OUT, exist_ok=True)

# Tab icon: transparent corners so it reads as a round badge.
ico = [circular(badge, s) for s in (16, 32, 48)]
ico[2].save(os.path.join(OUT, "favicon.ico"), format="ICO",
            sizes=[(16, 16), (32, 32), (48, 48)],
            append_images=ico[:2])
circular(badge, 256).save(os.path.join(OUT, "icon.png"))

# iOS fills the whole tile and rounds it itself, so this one gets a solid
# brand background rather than transparency.
tile = Image.new("RGBA", (180, 180), ESPRESSO + (255,))
disc = circular(badge, 164)
tile.paste(disc, (8, 8), disc)
tile.convert("RGB").save(os.path.join(OUT, "apple-icon.png"))

for n in ("favicon.ico", "icon.png", "apple-icon.png"):
    print("%-16s %6d bytes" % (n, os.path.getsize(os.path.join(OUT, n))))
