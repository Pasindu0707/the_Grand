import Link from "next/link";
import FacilitiesRow from "@/components/FacilitiesRow";
import Reveal from "@/components/Reveal";
import Slider from "@/components/Slider";
import { resortHero } from "@/lib/images";

const features = [
  {
    name: "Grand Stand Banquets",
    blurb:
      "Creating picture-perfect weddings in an ambiance that displays an ancestral flavor of seating.",
    href: "/resort/banquets",
    icon: (
      // Pavilion arch
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
        <path d="M4 26V14a11 11 0 0 1 22 0v12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 26V15.5a6 6 0 0 1 12 0V26M2 26h26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Pavilion Lounge",
    blurb: "Ideal for small weddings, functions, and corporate meetings.",
    href: "/resort/banquets",
    icon: (
      // Lounge chair
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
        <path d="M6 6v10m18-4v4M4 20a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v2H4v-2Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 16h18M6 22v3m18-3v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Wet Bar",
    blurb:
      "Corporate getaways and garden functions come alive facing the swimming pool.",
    href: "/resort/restaurant",
    icon: (
      // Cocktail glass
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
        <path d="M5 5h20L15 16 5 5Zm10 11v9m-6 0h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9.5h12" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export default function ResortHomePage() {
  return (
    <main>
      {/* Hero */}
      <Slider
        slides={resortHero}
        className="h-svh min-h-[560px]"
        overlayClassName="bg-gradient-to-t from-lagoon-950/85 via-lagoon-950/40 to-lagoon-950/30"
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-5 pb-28 sm:px-8 sm:pb-32">
          <p className="mb-4 text-[0.68rem] font-bold tracking-[0.3em] uppercase text-brass">
            Wennappuwa · Along a Dutch canal
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.02] text-sand sm:text-6xl lg:text-7xl">
            &ldquo;Those looking for <em className="text-brass">rest &amp; relaxation!</em>&rdquo;
          </h1>
          <p className="mt-5 max-w-md text-sand/80">
            A holiday resort, banquet house, and garden venue on open, breezy
            land — an hour up the coast from Colombo.
          </p>
        </div>
      </Slider>

      {/* Feature cards */}
      <section aria-label="Venues" className="bg-sand">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.name} delay={i * 90}>
              <Link
                href={feature.href}
                className="group flex h-full flex-col border border-ink/10 bg-paper p-8 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-lagoon-950/10"
              >
                <span className="mb-6 text-lagoon-700">{feature.icon}</span>
                <h2 className="font-display text-2xl">{feature.name}</h2>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/70">
                  {feature.blurb}
                </p>
                <span className="mt-6 inline-flex items-center gap-2.5 text-[0.72rem] font-bold tracking-[0.22em] uppercase text-lagoon-700">
                  Explore
                  <svg width="22" height="8" viewBox="0 0 22 8" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">
                    <path d="M0 4h20M17 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About band */}
      <section aria-labelledby="resort-about" className="bg-lagoon-950 text-sand">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <p className="mb-3 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-brass">
              About Grand Resort
            </p>
            <h2 id="resort-about" className="font-display text-3xl leading-snug sm:text-4xl">
              Classically designed <em>for perfection</em>
            </h2>
            <span aria-hidden className="mx-auto mt-6 block h-px w-12 bg-brass" />
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-sand/80">
              Grand Holiday Resort is situated in Wennappuwa amid convenient and
              tranquil surroundings on open land, with a breezy setting along a
              Dutch canal — creating a relaxing, rich environment for holidays,
              weddings, and gatherings of every size.
            </p>
            <Link
              href="/resort/gallery"
              className="mt-9 inline-block border border-brass px-8 py-3.5 text-[0.72rem] font-bold tracking-[0.22em] uppercase text-brass transition-colors hover:bg-brass hover:text-lagoon-950"
            >
              Read more
            </Link>
          </Reveal>
        </div>
      </section>

      <FacilitiesRow />

      {/* Closing banner */}
      <section aria-label="A welcome from the resort" className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <p className="font-display text-2xl leading-snug text-ink/85 sm:text-3xl">
              Grand Holiday Resort welcomes you with arms open wide&hellip;
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 font-display text-3xl leading-snug sm:text-5xl">
              Be our guest — <em className="text-lagoon-700">make yourself at home.</em>{" "}
              We&rsquo;re glad you&rsquo;re here&hellip;
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 font-display text-2xl italic leading-snug text-brass sm:text-3xl">
              Love, laughter, happily ever after&hellip;
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
