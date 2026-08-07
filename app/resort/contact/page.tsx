import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ResortPageHeader from "@/components/ResortPageHeader";
import Reveal from "@/components/Reveal";
import { resortHero } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Grand Holiday Resort — Vanderlan Mawatha, Kolinjadiya, Wennappuwa, Sri Lanka. Phone 031-225 1051, email grandholiday@sltnet.lk.",
};

export default function ResortContactPage() {
  return (
    <main>
      <ResortPageHeader
        eyebrow="Plan a visit or an event"
        title="Contact"
        photo={resortHero[6]}
      />

      <section aria-label="Contact details and form" className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <div className="bg-lagoon-950 p-8 text-sand sm:p-10">
                <h2 className="font-display text-2xl">Grand Holiday Resort</h2>
                <address className="mt-6 space-y-4 text-[0.95rem] leading-relaxed not-italic text-sand/85">
                  <p>
                    Vanderlan Mawatha, Kolinjadiya,
                    <br />
                    Wennappuwa, Sri Lanka
                  </p>
                  <p>
                    <a href="tel:+94312251051" className="block hover:text-brass">
                      031-225 1051
                    </a>
                    <a href="tel:+94312256475" className="block hover:text-brass">
                      031-225 6475
                    </a>
                    <a href="tel:+94312252331" className="block hover:text-brass">
                      031-225 2331
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:grandholiday@sltnet.lk"
                      className="text-brass underline underline-offset-4"
                    >
                      grandholiday@sltnet.lk
                    </a>
                  </p>
                  <p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2.5 hover:text-brass"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V13h2.7v8h3.4Z" />
                      </svg>
                      Grand Holiday Resort on Facebook
                    </Link>
                  </p>
                </address>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="mb-6 font-display text-2xl">Send us a message</h2>
              <ContactForm brand="resort" />
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <iframe
              title="Map showing Grand Holiday Resort in Wennappuwa"
              src="https://maps.google.com/maps?q=7.3537,79.8380&z=15&output=embed"
              className="h-80 w-full border border-ink/15"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
