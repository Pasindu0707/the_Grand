import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Photo } from "@/lib/images";

/* Three photos; the center one carries the resort's arch motif. */
export default function ArchPhotoRow({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid grid-cols-3 items-end gap-3 sm:gap-5">
      {photos.map((photo, i) => (
        <Reveal key={photo.src} delay={i * 90}>
          <div
            className={`group relative overflow-hidden ${
              i === 1 ? "aspect-[3/4] rounded-t-full" : "aspect-[3/3.4]"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 33vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
