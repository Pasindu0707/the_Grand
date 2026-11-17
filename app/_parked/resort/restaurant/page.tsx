import type { Metadata } from "next";
import ArchPhotoRow from "@/components/ArchPhotoRow";
import FacilitiesRow from "@/components/FacilitiesRow";
import ResortPageHeader from "@/components/ResortPageHeader";
import Reveal from "@/components/Reveal";
import { restaurantPhotos, wetBarPhotos, resortHero } from "@/lib/images";

export const metadata: Metadata = {
  title: "Restaurant & Wet Bar",
  description:
    "The open restaurant at Grand Holiday Resort serves Western, Eastern, Indian, and Sri Lankan cuisine; the veranda wet bar faces the swimming pool.",
};

export default function RestaurantPage() {
  return (
    <main>
      <ResortPageHeader
        eyebrow="Dining at the resort"
        title="Restaurant & Wet Bar"
        photo={restaurantPhotos[0]}
      />

      {/* Open restaurant */}
      <section aria-labelledby="open-restaurant" className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-3 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-brass">
              The buffet, laid out
            </p>
            <h2 id="open-restaurant" className="font-display text-3xl sm:text-4xl">
              An Open Restaurant
            </h2>
            <p className="mt-5 leading-relaxed text-ink/75">
              Set in a soothing environment where the buffet is laid out, Grand
              Holiday Resort has built a reputation for authentic culinary
              experiences - expertly prepared by experienced chefs serving
              Western, Eastern, Indian, and Sri Lankan dishes of the highest
              quality.
            </p>
          </Reveal>
          <ArchPhotoRow photos={restaurantPhotos} />
        </div>
      </section>

      {/* Wet bar */}
      <section aria-labelledby="wet-bar" className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-3 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-brass">
              Facing the pool
            </p>
            <h2 id="wet-bar" className="font-display text-3xl sm:text-4xl">
              Wet Bar
            </h2>
            <p className="mt-5 leading-relaxed text-ink/75">
              The veranda bar lounge is a pleasant setting for a relaxing drink
              - before dinner, after a swim, or while the garden fills for an
              evening function.
            </p>
          </Reveal>
          <ArchPhotoRow photos={wetBarPhotos} />
        </div>
      </section>

      <FacilitiesRow />
    </main>
  );
}
