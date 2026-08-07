import type { Metadata } from "next";
import ArchPhotoRow from "@/components/ArchPhotoRow";
import FacilitiesRow from "@/components/FacilitiesRow";
import ResortPageHeader from "@/components/ResortPageHeader";
import Reveal from "@/components/Reveal";
import { grandstandPhotos, pavilionPhotos, resortHero } from "@/lib/images";

export const metadata: Metadata = {
  title: "Banquets",
  description:
    "Grandstand Banquet Hall (up to 600 guests) and the Grand Pavilion Lounge (up to 150 guests) at Grand Holiday Resort, Wennappuwa.",
};

function PaxStats({
  seating,
  theatre,
}: {
  seating: number;
  theatre: number;
}) {
  return (
    <dl className="mt-8 flex gap-10 border-t border-ink/15 pt-6">
      <div>
        <dd className="font-display text-4xl text-lagoon-700">{seating}</dd>
        <dt className="mt-1 text-[0.65rem] font-bold tracking-[0.22em] uppercase text-ink/60">
          Seating style · pax
        </dt>
      </div>
      <div>
        <dd className="font-display text-4xl text-lagoon-700">{theatre}</dd>
        <dt className="mt-1 text-[0.65rem] font-bold tracking-[0.22em] uppercase text-ink/60">
          Theatre style · pax
        </dt>
      </div>
    </dl>
  );
}

export default function BanquetsPage() {
  return (
    <main>
      <ResortPageHeader
        eyebrow="Weddings · Functions · Meetings"
        title="Banquets"
        photo={resortHero[2]}
      />

      {/* Grandstand */}
      <section aria-labelledby="grandstand" className="bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-3 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-brass">
              The main hall
            </p>
            <h2 id="grandstand" className="font-display text-3xl sm:text-4xl">
              Grandstand Banquet Hall
            </h2>
            <p className="mt-5 leading-relaxed text-ink/75">
              Set in an ambiance that creates a picture of a perfect wedding,
              with an ancestral flavor that will win the hearts of the bride,
              the groom, and all who attend.
            </p>
            <PaxStats seating={400} theatre={600} />
          </Reveal>
          <ArchPhotoRow photos={grandstandPhotos} />
        </div>
      </section>

      {/* Pavilion */}
      <section aria-labelledby="pavilion" className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <Reveal>
              <p className="mb-3 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-brass">
                The smaller room
              </p>
              <h2 id="pavilion" className="font-display text-3xl sm:text-4xl">
                Grand Pavilion Lounge
              </h2>
              <p className="mt-5 leading-relaxed text-ink/75">
                Ideally set up for corporate meetings, events, and functions.
                Even weddings with a limited guest list can be accommodated with
                ease.
              </p>
              <PaxStats seating={100} theatre={150} />
            </Reveal>
          </div>
          <div className="lg:order-1">
            <ArchPhotoRow photos={pavilionPhotos} />
          </div>
        </div>
      </section>

      <FacilitiesRow />
    </main>
  );
}
