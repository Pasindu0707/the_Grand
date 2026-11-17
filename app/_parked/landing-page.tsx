import Image from "next/image";
import Link from "next/link";
import { landing, locations } from "@/lib/images";

function Seal({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`flex shrink-0 flex-col items-center justify-center rounded-full bg-paper text-center text-ink shadow-2xl ${className}`}
    >
      <span className="flex size-[86%] flex-col items-center justify-center rounded-full border border-ink/25">
        <span className="text-[0.44rem] font-bold tracking-[0.3em] uppercase sm:text-[0.5rem]">
          The
        </span>
        <span className="font-display text-2xl italic sm:text-3xl">Grand</span>
        <span className="text-[0.4rem] font-bold tracking-[0.22em] uppercase text-ink/60 sm:text-[0.44rem]">
          Sri Lanka
        </span>
      </span>
    </span>
  );
}

/**
 * The landing is a single screen from `md` up: a compact masthead over the
 * four places, so every door is visible on arrival without scrolling.
 * Below `md` the cards stack and the page scrolls as usual.
 */
export default function LandingPage() {
  return (
    <main className="flex min-h-svh flex-col bg-espresso-950 text-crema">
      {/* ------------------------------- Masthead ------------------------------ */}
      <header className="relative shrink-0 overflow-hidden">
        <Image
          src={landing.gastrobar.src}
          alt={landing.gastrobar.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-espresso-950/80 via-espresso-950/70 to-espresso-950"
        />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-9 text-center sm:px-8 md:flex-row md:gap-8 md:py-8 md:text-left">
          <Seal className="size-24 sm:size-[6.5rem]" />

          <div className="md:flex-1">
            <h1 className="font-display text-[1.75rem] leading-[1.1] text-crema sm:text-4xl lg:text-[2.6rem]">
              Four doors of welcome on{" "}
              <em className="text-caramel">Sri Lanka&rsquo;s west coast</em>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-[0.9rem] leading-relaxed text-crema/65 md:mx-0 lg:text-[0.95rem]">
              One family, four houses - a gastrobar in Negombo, two coffee rooms
              along the coast road, and a resort beside the Dutch canal in
              Wennappuwa.
            </p>
          </div>

          <p className="hidden shrink-0 text-right text-[0.6rem] font-bold tracking-[0.24em] uppercase text-crema/40 lg:block">
            South to north
            <span className="mt-1 block text-crema/25">
              along the coast road
            </span>
          </p>
        </div>
      </header>

      {/* -------------------------------- Places ------------------------------- */}
      <h2 className="sr-only">Our places</h2>
      <ul className="grid gap-3 p-3 sm:gap-4 sm:p-4 md:min-h-0 md:flex-1 md:grid-cols-2 lg:grid-cols-4">
        {/* No scroll-reveal here: every card is above the fold, so none of
            them should wait on an observer to become visible. */}
        {locations.map((place) => (
          <li key={place.name} className="min-h-0">
            <Link
              href={place.href}
              className="group relative flex h-full min-h-[15rem] flex-col justify-end overflow-hidden md:min-h-0"
            >
              <Image
                src={place.photo.src}
                alt={place.photo.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-1000 ease-out group-hover:scale-105"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/45 to-espresso-950/5 transition duration-700 group-hover:via-espresso-950/60"
              />

              <span className="relative z-10 block p-5 sm:p-6">
                <span className="block text-[0.58rem] font-bold tracking-[0.24em] uppercase text-caramel">
                  {place.town} <span className="text-crema/45">-</span>{" "}
                  <span className="text-crema/60">{place.tagline}</span>
                </span>
                <span className="mt-2.5 block font-display text-2xl leading-tight text-crema lg:text-[1.6rem] xl:text-3xl">
                  {place.name}
                </span>

                <span className="mt-4 inline-flex items-center gap-2.5 text-[0.62rem] font-bold tracking-[0.22em] uppercase text-crema/80">
                  Enter
                  <svg
                    width="22"
                    height="9"
                    viewBox="0 0 26 10"
                    fill="none"
                    aria-hidden
                    className="transition-transform duration-500 group-hover:translate-x-2"
                  >
                    <path
                      d="M0 5h24M20 1l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* -------------------------------- Footer ------------------------------- */}
      <footer className="shrink-0 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-4 text-center sm:px-8 md:flex-row md:justify-between md:gap-6 md:text-left">
          <p className="text-[0.62rem] font-bold tracking-[0.24em] uppercase text-crema/45">
            Negombo · Katuneriya · Wennappuwa
          </p>
          <p className="text-[0.7rem] text-crema/40">
            © Grand {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
