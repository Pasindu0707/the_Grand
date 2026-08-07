import Image from "next/image";
import Link from "next/link";
import { landing, locations } from "@/lib/images";

const byName = (name: string) => locations.find((l) => l.name === name)!;

/* Panels run south to north along the coast road: Negombo → Katuneriya → Wennappuwa. */
const panels = [
  {
    ...byName("Grand Espresso Bar"),
    href: "/espresso",
    photo: landing.espresso,
    blurb: "The perfect cuppa, bakery delights, and a lounge of coziness.",
    overlay:
      "bg-gradient-to-t from-espresso-950/95 via-espresso-950/60 to-espresso-900/40",
    accent: "text-caramel",
  },
  {
    ...byName("The Grand Gastrobar"),
    blurb: "Plates and pours, served late into the Negombo evening.",
    overlay:
      "bg-gradient-to-t from-espresso-950/95 via-espresso-950/60 to-espresso-900/40",
    accent: "text-caramel",
  },
  {
    ...byName("Grand Cafe"),
    blurb: "A friendly stop on the coast road through Katuneriya.",
    overlay:
      "bg-gradient-to-t from-espresso-950/95 via-espresso-950/60 to-espresso-900/40",
    accent: "text-caramel",
  },
  {
    ...byName("The Grand Coffee Lounge"),
    blurb: "Coffee and quiet corners in the heart of Wennappuwa.",
    overlay:
      "bg-gradient-to-t from-espresso-950/95 via-espresso-950/60 to-espresso-900/40",
    accent: "text-caramel",
  },
  {
    ...byName("Grand Holiday Resort"),
    href: "/resort",
    photo: landing.resort,
    blurb: "Weddings, garden functions, and rest beside a Dutch canal.",
    overlay:
      "bg-gradient-to-t from-lagoon-950/95 via-lagoon-950/60 to-lagoon-900/40",
    accent: "text-brass",
  },
];

function PanelContent({
  panel,
}: {
  panel: (typeof panels)[number];
}) {
  return (
    <>
      <Image
        src={panel.photo.src}
        alt={panel.photo.alt}
        fill
        priority
        sizes="(min-width: 768px) 40vw, 100vw"
        className="object-cover transition duration-1000 ease-out group-hover:scale-[1.04]"
      />
      <span aria-hidden className={`absolute inset-0 ${panel.overlay}`} />

      <span className="relative z-10 block w-full p-6 pb-12 sm:p-8 md:p-7 md:pb-16">
        <span
          className={`mb-2.5 block text-[0.62rem] font-bold tracking-[0.26em] uppercase ${panel.accent}`}
        >
          {panel.town}
        </span>
        <span className="block font-display text-3xl leading-[1.08] text-white sm:text-4xl md:text-[1.7rem] lg:text-3xl xl:text-4xl">
          {panel.name}
        </span>
        <span className="mt-3 block max-w-sm text-sm text-white/75 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
          {panel.blurb}
        </span>
        {panel.href && (
          <span className="mt-5 inline-flex items-center gap-3 text-[0.7rem] font-bold tracking-[0.24em] uppercase text-white">
            Enter
            <svg
              width="26"
              height="10"
              viewBox="0 0 26 10"
              fill="none"
              aria-hidden
              className="transition-transform duration-500 group-hover:translate-x-2"
            >
              <path d="M0 5h24M20 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </span>
        )}
      </span>
    </>
  );
}

export default function LandingPage() {
  return (
    <main>
      <h1 className="sr-only">The Grand — choose a location</h1>

      <section
        aria-label="Our locations, south to north along the coast road"
        className="relative flex min-h-svh flex-col md:flex-row"
      >
        <p className="absolute inset-x-0 top-7 z-20 px-6 text-center text-[0.68rem] font-bold tracking-[0.3em] uppercase text-white/85">
          Five doors of welcome on Sri Lanka&rsquo;s west coast
        </p>

        {panels.map((panel) => {
          const panelClass =
            "group relative flex min-h-[46svh] flex-1 items-end overflow-hidden transition-all duration-700 ease-in-out md:min-h-svh md:hover:flex-[2] md:focus-visible:flex-[2]";
          return panel.href ? (
            <Link key={panel.name} href={panel.href} className={panelClass}>
              <PanelContent panel={panel} />
            </Link>
          ) : (
            <div key={panel.name} tabIndex={0} className={panelClass}>
              <PanelContent panel={panel} />
            </div>
          );
        })}

        {/* Central seal — the family wordmark over the row of doors */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 z-20 flex size-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-paper text-center text-ink shadow-2xl sm:size-36"
        >
          <div className="flex size-[86%] flex-col items-center justify-center rounded-full border border-ink/25">
            <span className="text-[0.55rem] font-bold tracking-[0.34em] uppercase">
              The
            </span>
            <span className="font-display text-3xl italic sm:text-4xl">Grand</span>
            <span className="mt-1 text-[0.48rem] font-bold tracking-[0.26em] uppercase text-ink/60">
              Sri Lanka
            </span>
          </div>
        </div>

        <footer className="absolute inset-x-0 bottom-3 z-20 text-center text-[0.65rem] tracking-[0.2em] text-white/60 uppercase">
          © Grand {new Date().getFullYear()}
        </footer>
      </section>
    </main>
  );
}
