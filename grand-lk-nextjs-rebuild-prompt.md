# Claude Code Prompt: Rebuild grand.lk in Next.js

Copy everything below into Claude Code as your starting instruction.

---

## Project brief

Rebuild the website network for **Grand** (a Sri Lankan hospitality group based in Negombo/Wennappuwa) from scratch as a modern Next.js site. The original site (grand.lk, built 2018) is a dated PHP/jQuery site. Recreate its content and structure with a contemporary design.

**Tech stack:**
- Next.js 14+ (App Router), TypeScript
- Tailwind CSS for styling
- No backend — the contact forms are UI-only (no email sending, no API routes). On submit, just show a success message client-side.
- Use `next/image` for all images
- Fully responsive (mobile-first)

**Brand structure — this is one small group with two properties, each needing its own site/section:**
1. **Grand Espresso** (aka "The Grand Coffee Lounge") — a coffee shop/bakery in Negombo
2. **Grand Holiday Resort** — a resort/banquet/wedding venue in Wennappuwa

Build this as a single Next.js project with a landing/splash page that lets the visitor pick between the two brands (matching the original's structure), then two separate sections/route groups: `/espresso` and `/resort`.

---

## Site map

```
/                      → Landing splash page (pick a brand)
/espresso              → Grand Espresso home (single page w/ anchor sections)
/resort                → Grand Holiday Resort home
/resort/banquets       → Banquets page
/resort/restaurant     → Restaurant & Wet Bar page
/resort/gallery        → Gallery page
/resort/contact        → Contact page
```

---

## Page 1: Landing splash (`/`)

Simple centered page:
- "The Grand" logo/wordmark
- Tagline (write something short and welcoming — the original had none beyond the name)
- Two large clickable cards/tiles:
  - **Grand Espresso** → links to `/espresso`
  - **Grand Holiday Resort** → links to `/resort`
- Footer: `© Grand [current year]`

---

## Page 2: Grand Espresso (`/espresso`)

Single page with sticky nav and anchor-linked sections: Home / About Us / Gallery / Contact.

### Hero
- Full-width image slider/carousel (4 slides, autoplay, dots or arrows)
- Overlay text: "Welcome to **Grand Espresso**"

### About Us section
Use this real copy (lightly polish grammar, keep the meaning):
> Coffee is grand when it's ground and comes from the cup to your lips. Enjoy the perfect cuppa with family and friends. Pastries and short eats, our bakery delights, and a wide variety of cakes in all their glory for any occasion — served to you in a blissful platter. A lounge of coziness and friendliness, where drinks and eats come in leaps and bounds. The joy of a gathering here is truly in the grand style.

Include a callout box titled **"Private Coffee Lounge"**:
> The Grand Coffee Lounge is where privacy remains solely yours. Reserve a room and enjoy the coziness and comfort that comes with it.

Include a supporting photo next to this section (see image list below).

### Services
Two simple badges/icons: **Free Parking**, **Free WiFi**

### Gallery section
8-photo grid (2x4 or 4x2), click to open in lightbox. Use bakery/cafe imagery (see image list).

### Contact section
- Left: contact form (Name, Email, Subject, Message, Send button). On submit → show "Your message was successfully sent!" (no actual sending)
- Right: Contact Info card:
  - **Grand Espresso (Pvt) Ltd.**
  - No. 2C/2D, Saunders Road, Negombo, Sri Lanka
  - +94-31-222 7027 / +94-31-223 6005
  - +94-777 393 684
  - info@grand.lk
- Below: embedded Google Map (use an iframe embed centered on Negombo, Sri Lanka — coordinates approx **7.2173, 79.8462**)

### Footer
- Facebook links (as text/icons, non-functional or linking to `#`):
  - The Grand
  - The Grand Coffee Lounge
  - The Grand Cafe Katuneriya
- Copyright line

---

## Page 3: Grand Holiday Resort — Home (`/resort`)

### Nav
Home / Banquets / Restaurant / Gallery / Contact (persistent top nav across all `/resort/*` pages)

### Hero
Full-width slider, 7 slides, autoplay. Overlay quote:
> "Those Looking For Rest & Relaxation!"

### Three feature cards (with icon/logo + short blurb):
1. **Grand Stand Banquets** — "Creating picture-perfect weddings in an ambiance that displays an ancestral flavor of seating."
2. **Pavilion Lounge** — "Ideal for small weddings, functions, and corporate meetings."
3. **Wet Bar** — "Corporate getaways and garden functions come alive facing the swimming pool."

### About Grand Resort
> Grand Holiday Resort is classically designed for perfection, situated in Wennappuwa amid convenient and tranquil surroundings on open land, with a breezy setting along a Dutch canal — creating a relaxing, rich environment.

Include a "Read more" button (can link to `/resort` itself or just be decorative).

### Facilities (4-icon row)
Pavilion / Swimming Pool / Restaurant / Rooms — each with a small icon/photo and label.

### Closing banner section
Large stacked headlines (like a hero closer):
- "Grand Holiday Resort welcomes you with arms open wide..."
- "Be Our Guest — make yourself at home. We're glad you're here..."
- "Grand Holiday Resort... Love, laughter, happily ever after..."

### Footer
Facebook link (Grand Holiday Resort) + copyright.

---

## Page 4: Banquets (`/resort/banquets`)

Two banquet halls, each with a heading, description, and a 3-photo row:

**Grandstand Banquet Hall**
> Set in an ambiance that creates a picture of a perfect wedding with an ancestral flavor that will win the hearts of the bride, groom, and all attendees.
> Seating style: 400 pax. Theatre style: 600 pax.

**Grand Pavilion Lounge**
> Ideally set up for corporate meetings, events, and functions. Even weddings with limited attendees can be accommodated with ease.
> Seating style: 100 pax. Theatre style: 150 pax.

Reuse the "Facilities" 4-icon row from the home page at the bottom.

---

## Page 5: Restaurant (`/resort/restaurant`)

**An Open Restaurant**
> Set in a soothing environment where the buffet is laid out. Grand Holiday Resort has built a reputation for authentic culinary experiences, expertly prepared by experienced chefs serving Western, Eastern, Indian, and Sri Lankan dishes of the highest quality.

3-photo row (restaurant/buffet imagery).

**Wet Bar**
> The veranda bar lounge is a pleasant setting for a relaxing drink.

3-photo row (poolside bar imagery).

Reuse the "Facilities" row at the bottom.

---

## Page 6: Gallery (`/resort/gallery`)

Grid gallery (12+ images) covering: banquet halls, pool, restaurant, rooms, gardens/exterior. Lightbox on click. Reuse similar layout style to the Espresso gallery for consistency.

---

## Page 7: Contact (`/resort/contact`)

- **Grand Holiday Resort**
  Vanderlan Mawatha, Kolinjadiya, Wennappuwa, Sri Lanka
- grandholiday@sltnet.lk
- 031-225 1051 / 031-225 6475 / 031-225 2331
- Facebook link
- Contact form (Name/Email/Message + Send Message button, UI only — same success-message pattern as Espresso)
- Embedded Google Map centered on Wennappuwa, Sri Lanka — coordinates approx **7.3537, 79.8380**

---

## Images — use free stock photos (Unsplash/Pexels via next/image with remote URLs)

Since we don't have the original photography, source realistic stock images per section using these search themes:

| Section | Search terms to use |
|---|---|
| Espresso hero slider | "coffee shop interior", "latte art cup", "cafe pastries counter" |
| Espresso about photo | "cozy cafe corner seating" |
| Espresso gallery (8) | "cappuccino coffee cup", "chocolate cake slice", "bakery pastries display", "iced coffee drink", "cafe interior wood tables", "croissant bakery", "coffee beans close up", "wedding cake bakery" |
| Resort hero slider | "tropical resort exterior", "Sri Lanka resort pool", "garden wedding venue", "resort pavilion architecture" |
| Resort facilities icons (4) | "wedding pavilion venue", "resort swimming pool", "open air restaurant", "hotel room tropical" |
| Banquets photos (6) | "wedding banquet hall decorated", "wedding reception hall chairs", "corporate meeting hall setup" |
| Restaurant photos (3) | "hotel buffet restaurant", "resort dining outdoor" |
| Wet Bar photos (3) | "poolside bar lounge", "resort veranda bar" |
| Resort gallery (12+) | mix of the above themes plus "tropical garden resort", "hotel room interior", "wedding decoration reception" |

Use Next.js `<Image>` with `unoptimized` or a configured remote pattern if pulling directly from Unsplash source URLs (e.g. `images.unsplash.com`). Add `next.config.js` remotePatterns for `images.unsplash.com` and `images.pexels.com`.

---

## Design direction

- Warm, upscale hospitality feel — not generic corporate. Think: warm neutrals/creams, a deep coffee-brown or espresso accent for the coffee shop side, and a richer gold/teal accent for the resort side (to visually distinguish the two brands while sharing a "Grand" family look).
- Real typography choice (a serif for headings like Playfair Display or Fraunlein-style + clean sans body font), not default system fonts.
- Smooth slider transitions, subtle hover states on gallery images and nav links, and a lightbox modal for gallery clicks (build with plain React state, no heavy carousel library needed unless you want to add `embla-carousel-react` for the sliders).
- Sticky/transparent-to-solid nav on scroll for the Espresso and Resort home pages.

---

## Build order

1. Scaffold Next.js + Tailwind project, set up fonts and color tokens
2. Landing page (`/`)
3. Shared components: Navbar (brand-aware), Footer, ImageSlider, Lightbox Gallery, ContactForm (UI-only)
4. Grand Espresso page (`/espresso`) — all sections
5. Grand Holiday Resort — Home, then Banquets, Restaurant, Gallery, Contact
6. Responsive pass + polish (mobile nav menu, image aspect ratios, form validation states)

Ask me before starting if anything about brand names, contact details, or page scope needs clarifying — otherwise build the full scope above.
