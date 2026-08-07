import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import Slider from "@/components/Slider";
import type { Photo } from "@/lib/images";
import type { Venue } from "@/lib/venues";

function ServiceBadge({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        aria-hidden
        className="flex size-14 items-center justify-center rounded-full border border-caramel/60 text-caramel"
      >
        {children}
      </span>
      <span className="text-[0.78rem] font-bold tracking-[0.2em] uppercase text-ink/85">
        {label}
      </span>
    </div>
  );
}

export default function VenuePage({
  venue,
  gallery,
}: {
  venue: Venue;
  gallery: Photo[];
}) {
  const navLinks = [
    { href: `${venue.slug}#home`, label: "Home" },
    { href: `${venue.slug}#about`, label: "About Us" },
    { href: `${venue.slug}#gallery`, label: "Gallery" },
    { href: `${venue.slug}#contact`, label: "Contact" },
  ];

  return (
    <>
      <SiteNav
        brand="espresso"
        homeHref={venue.slug}
        wordmark={venue.wordmark}
        place={venue.place}
        links={navLinks}
        transparentAtTop
      />

      <main>
        {/* Hero */}
        <div id="home">
          <Slider
            slides={venue.hero}
            className="h-svh min-h-[560px]"
            overlayClassName="bg-gradient-to-t from-espresso-950/85 via-espresso-950/40 to-espresso-950/30"
          >
            <div className="mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-5 pb-28 sm:px-8 sm:pb-32">
              <p className="mb-4 text-[0.68rem] font-bold tracking-[0.3em] uppercase text-caramel">
                {venue.heroEyebrow}
              </p>
              <h1 className="max-w-3xl font-display text-5xl leading-[1.02] text-crema sm:text-6xl lg:text-7xl">
                Welcome to <em className="text-caramel">{venue.heroName}</em>
              </h1>
              <p className="mt-5 max-w-md text-crema/80">{venue.heroBlurb}</p>
            </div>
          </Slider>
        </div>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-16 bg-paper"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Reveal>
              <p className="mb-3 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-caramel">
                About us
              </p>
              <h2
                id="about-heading"
                className="font-display text-3xl leading-snug sm:text-4xl"
              >
                {venue.aboutHeading} <em>{venue.aboutHeadingEm}</em>
              </h2>
              <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-ink/75">
                {venue.aboutParas.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>

              <div className="mt-10 border-l-2 border-caramel bg-crema p-6 sm:p-8">
                <h3 className="font-display text-xl">{venue.callout.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/75">
                  {venue.callout.body}
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
                <ServiceBadge label="Free Parking">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="3" y="3" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M8.5 15.5v-9h3.2a2.8 2.8 0 1 1 0 5.6H8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </ServiceBadge>
                <ServiceBadge label="Free WiFi">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M3 8.5a12 12 0 0 1 16 0M5.8 11.8a8 8 0 0 1 10.4 0M8.6 15a4 4 0 0 1 4.8 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <circle cx="11" cy="17.6" r="1.1" fill="currentColor" />
                  </svg>
                </ServiceBadge>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative self-start lg:mt-8">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={venue.aboutPhoto.src}
                  alt={venue.aboutPhoto.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <span
                aria-hidden
                className="absolute -right-3 -bottom-3 -z-10 hidden h-full w-full border border-caramel sm:block"
              />
            </Reveal>
          </div>
        </section>

        {/* Gallery — the evening band */}
        <section
          id="gallery"
          aria-labelledby="gallery-heading"
          className="scroll-mt-16 bg-espresso-950 text-crema"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-3 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-caramel">
                  {venue.galleryEyebrow}
                </p>
                <h2 id="gallery-heading" className="font-display text-3xl sm:text-4xl">
                  Gallery
                </h2>
              </div>
              <p className="max-w-xs text-sm text-crema/60">
                Select any photo to view it larger.
              </p>
            </Reveal>
            <Reveal>
              <GalleryGrid photos={gallery} columns={4} />
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-16 bg-paper"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal className="mb-12">
              <p className="mb-3 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-caramel">
                Write to us
              </p>
              <h2 id="contact-heading" className="font-display text-3xl sm:text-4xl">
                Contact
              </h2>
            </Reveal>

            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              <Reveal>
                <ContactForm brand="espresso" withSubject />
              </Reveal>

              <Reveal delay={120}>
                <div className="bg-espresso-950 p-8 text-crema sm:p-10">
                  <h3 className="font-display text-2xl">{venue.legalName}</h3>
                  <address className="mt-6 space-y-4 text-[0.95rem] leading-relaxed not-italic text-crema/85">
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
                          className="block hover:text-caramel"
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
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-14">
              <iframe
                title={venue.mapTitle}
                src={venue.mapSrc}
                className="h-80 w-full border border-ink/15"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
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
