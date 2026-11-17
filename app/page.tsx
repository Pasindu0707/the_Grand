import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import Marquee from "@/components/Marquee";
import MenuBoard from "@/components/MenuBoard";
import PhotoStrip from "@/components/PhotoStrip";
import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import Slider from "@/components/Slider";
import { marqueeWords, menuSections, storyStats } from "@/lib/gastrobar";
import { gastrobarGallery, gastrobarKitchen, gastrobarRooms } from "@/lib/images";
import { venues } from "@/lib/venues";

const venue = venues.gastrobar;

/* A booking tap goes to WhatsApp where we have a number for it, and falls
   back to dialling the outlet where we don't. */
const bookingHref = venue.whatsapp
  ? `https://wa.me/${venue.whatsapp.number}?text=${encodeURIComponent(
      `Hello ${venue.wordmark}, I would like to book a table.`,
    )}`
  : `tel:${venue.phones[0].tel}`;

export const metadata: Metadata = {
  title: venue.metaTitle,
  description: venue.metaDescription,
};

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "The Room" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

function SectionHeading({
  eyebrow,
  title,
  em,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  em?: string;
  tone?: "dark" | "light";
}) {
  return (
    <>
      <p className="mb-3 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-caramel">
        {eyebrow}
      </p>
      {/* Draws itself across as the section arrives */}
      <span aria-hidden data-rule className="mb-5 text-caramel" />
      <h2
        className={`font-display text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${
          tone === "dark" ? "text-crema" : "text-ink"
        }`}
      >
        {title} {em && <em className="text-caramel">{em}</em>}
      </h2>
    </>
  );
}

export default function GastrobarPage() {
  return (
    <>
      <SiteNav
        brand="espresso"
        homeHref="/"
        wordmark={venue.wordmark}
        place={venue.place}
        links={navLinks}
        transparentAtTop
      />

      <main className="bg-espresso-950">
        {/* ------------------------------- Hero ------------------------------- */}
        <div id="home">
          <Slider
            slides={gastrobarRooms}
            className="h-svh min-h-[600px]"
            overlayClassName="bg-gradient-to-b from-espresso-950/80 via-espresso-950/45 to-espresso-950"
          >
            <div className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-5 text-center sm:px-8">
              <p className="text-[0.68rem] font-bold tracking-[0.34em] uppercase text-caramel">
                {venue.heroEyebrow}
              </p>
              <span
                aria-hidden
                className="my-7 block h-10 w-px bg-gradient-to-b from-caramel to-transparent"
              />
              <h1 className="font-display text-[2.9rem] leading-[0.98] text-crema sm:text-7xl lg:text-[5.5rem]">
                The Grand
                <em className="block text-caramel">Gastrobar</em>
              </h1>
              <p className="mt-8 max-w-lg text-[1.02rem] leading-relaxed text-crema/75">
                {venue.heroBlurb}
              </p>

              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:gap-4">
                <a
                  href="#menu"
                  className="bg-caramel px-9 py-4 text-[0.72rem] font-bold tracking-[0.24em] uppercase text-espresso-950 transition hover:bg-crema"
                >
                  See the menu
                </a>
                <a
                  href={bookingHref}
                  target={venue.whatsapp ? "_blank" : undefined}
                  rel={venue.whatsapp ? "noopener noreferrer" : undefined}
                  className="border border-crema/35 px-9 py-4 text-[0.72rem] font-bold tracking-[0.24em] uppercase text-crema transition hover:border-crema"
                >
                  Book a table
                </a>
              </div>
            </div>
          </Slider>
        </div>

        <Marquee words={marqueeWords} className="bg-espresso-900 text-crema/70" />

        {/* ------------------------------- Story ------------------------------ */}
        <section
          id="story"
          aria-labelledby="story-heading"
          className="scroll-mt-16 bg-paper text-ink"
        >
          <div className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,32rem)_1fr] lg:items-center lg:gap-16 xl:gap-24">
              <Reveal variant="slide" className="order-2 lg:order-1">
                <div id="story-heading">
                  <SectionHeading
                    eyebrow="The room"
                    title={venue.aboutHeading}
                    em={venue.aboutHeadingEm}
                    tone="light"
                  />
                </div>
                <div className="mt-7 space-y-5 text-[1rem] leading-relaxed text-ink/70">
                  {venue.aboutParas.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>

                <div className="mt-10 border-l-2 border-caramel bg-crema p-6 sm:p-8">
                  <h3 className="font-display text-xl">{venue.callout.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
                    {venue.callout.body}
                  </p>
                </div>
              </Reveal>

              {/* Offset photo pair - the overhead plate over the room */}
              <Reveal variant="curtain" delay={120} className="order-1 lg:order-2">
                <div className="grid grid-cols-5 gap-4 sm:gap-5">
                  <div className="relative col-span-5 aspect-[4/5] overflow-hidden sm:col-span-3">
                    <Image
                      src={venue.aboutPhoto.src}
                      alt={venue.aboutPhoto.alt}
                      fill
                      sizes="(min-width: 1024px) 34vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-5 grid grid-cols-2 gap-4 sm:col-span-2 sm:grid-cols-1 sm:grid-rows-2 sm:gap-5">
                    <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto">
                      <Image
                        src={gastrobarRooms[3].src}
                        alt={gastrobarRooms[3].alt}
                        fill
                        sizes="(min-width: 1024px) 22vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto">
                      <Image
                        src={gastrobarRooms[1].src}
                        alt={gastrobarRooms[1].alt}
                        fill
                        sizes="(min-width: 1024px) 22vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Stat rail */}
            <Reveal
              as="dl"
              stagger
              className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink/15 pt-12 lg:grid-cols-4"
            >
              {storyStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-4xl text-caramel sm:text-5xl">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-[0.68rem] font-bold tracking-[0.22em] uppercase text-ink/55">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* -------------------------------- Menu ------------------------------ */}
        <section
          id="menu"
          aria-labelledby="menu-heading"
          className="scroll-mt-16 bg-espresso-950"
        >
          <div className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 sm:py-28">
            <Reveal variant="mask" className="mb-12 max-w-2xl">
              <div id="menu-heading">
                <SectionHeading
                  eyebrow="What we serve"
                  title="The menu,"
                  em="course by course."
                />
              </div>
              <p className="mt-6 text-[0.98rem] leading-relaxed text-crema/55">
                Three kitchens on one card. Choose a course to read it - the
                signature plates are marked.
              </p>
            </Reveal>

            <Reveal variant="rise" delay={80}>
              <MenuBoard sections={menuSections} />
            </Reveal>
          </div>
        </section>

        {/* ------------------------------ The rooms --------------------------- */}
        <section
          aria-labelledby="rooms-heading"
          className="bg-espresso-900 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
            <Reveal variant="mask" className="mb-12 max-w-xl">
              <div id="rooms-heading">
                <SectionHeading
                  eyebrow="Inside"
                  title="Four corners of"
                  em="one long room."
                />
              </div>
            </Reveal>
          </div>
          <div className="pl-5 sm:pl-8 lg:pl-[max(2rem,calc((100vw-72rem)/2))]">
            <Reveal stagger="deep">
              <PhotoStrip
                photos={gastrobarRooms}
                captionEyebrow="Scroll or use the arrows"
              />
            </Reveal>
          </div>
        </section>

        {/* ------------------------------- Gallery ---------------------------- */}
        <section
          id="gallery"
          aria-labelledby="gallery-heading"
          className="scroll-mt-16 bg-espresso-950"
        >
          <div className="mx-auto max-w-[84rem] px-5 pt-20 sm:px-8 sm:pt-28">
            <Reveal variant="mask" className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div id="gallery-heading">
                <SectionHeading eyebrow={venue.galleryEyebrow} title="Gallery" />
              </div>
              <p className="max-w-xs text-sm text-crema/50">
                Select any photo to view it larger.
              </p>
            </Reveal>
          </div>

          <div className="px-3 pb-20 sm:px-4 sm:pb-28">
            <Reveal stagger="deep">
              <GalleryGrid photos={gastrobarGallery} columns={6} />
            </Reveal>
          </div>
        </section>

        {/* -------------------------------- Visit ----------------------------- */}
        <section
          id="visit"
          aria-labelledby="visit-heading"
          className="scroll-mt-16 bg-paper text-ink"
        >
          <div className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 sm:py-28">
            <Reveal variant="mask" className="mb-14 max-w-xl">
              <div id="visit-heading">
                <SectionHeading
                  eyebrow="Find us"
                  title="361 Colombo Road,"
                  em="Negombo."
                  tone="light"
                />
              </div>
            </Reveal>

            <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
              {/* Hours */}
              <Reveal stagger className="bg-espresso-950 p-8 text-crema sm:p-9">
                <h3 className="font-display text-2xl">Opening hours</h3>
                <dl className="mt-7 space-y-4">
                  {venue.hours.map((row) => (
                    <div key={row.days}>
                      <dt className="text-[0.66rem] font-bold tracking-[0.2em] uppercase text-caramel">
                        {row.days}
                      </dt>
                      <dd className="mt-1 text-[0.98rem] text-crema/85">
                        {row.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              {/* Address + phones */}
              <Reveal variant="rise" delay={100} className="border border-ink/15 p-8 sm:p-9">
                <h3 className="font-display text-2xl">{venue.legalName}</h3>
                <address className="mt-7 space-y-5 text-[0.98rem] leading-relaxed not-italic text-ink/70">
                  <p>
                    {venue.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p>
                    {venue.phones.map((phone) => (
                      <a
                        key={phone.tel}
                        href={`tel:${phone.tel}`}
                        className="block transition hover:text-caramel"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </p>
                  <p>
                    <a
                      href={`mailto:${venue.email}`}
                      className="text-caramel underline underline-offset-4"
                    >
                      {venue.email}
                    </a>
                  </p>
                </address>

                {venue.whatsapp && (
                  <a
                    href={bookingHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2.5 rounded-sm bg-[#25D366] px-5 py-3 text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[#07301c] transition hover:bg-[#1eb455]"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
                    </svg>
                    Message us on WhatsApp
                  </a>
                )}
              </Reveal>

              {/* Teaser photo */}
              <Reveal variant="curtain" delay={200} className="relative hidden min-h-72 overflow-hidden lg:block">
                <Image
                  src={gastrobarKitchen[1].src}
                  alt={gastrobarKitchen[1].alt}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </Reveal>
            </div>

            <Reveal variant="curtain" className="mt-10">
              <iframe
                title={venue.mapTitle}
                src={venue.mapSrc}
                className="h-80 w-full border border-ink/15 lg:h-[26rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>

            <div className="mt-20 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
              <Reveal variant="slide">
                <p className="mb-4 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-caramel">
                  Write to us
                </p>
                <h3 className="mb-8 font-display text-3xl">
                  Reserve, or ask us anything
                </h3>
                <ContactForm
                  brand="espresso"
                  withSubject
                  whatsapp={
                    venue.whatsapp && {
                      ...venue.whatsapp,
                      venueName: venue.wordmark,
                    }
                  }
                />
              </Reveal>

              <Reveal variant="curtain" delay={120} className="relative min-h-80 overflow-hidden lg:min-h-full">
                <Image
                  src={gastrobarRooms[2].src}
                  alt={gastrobarRooms[2].alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer
        brand="espresso"
        name={venue.wordmark}
        facebookPages={venue.facebookPages}
      />
    </>
  );
}
