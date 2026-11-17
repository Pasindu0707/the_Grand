import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import ResortPageHeader from "@/components/ResortPageHeader";
import Reveal from "@/components/Reveal";
import { resortGallery, resortHero } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of Grand Holiday Resort - banquet halls, the pool, restaurant, rooms, and gardens in Wennappuwa, Sri Lanka.",
};

export default function ResortGalleryPage() {
  return (
    <main>
      <ResortPageHeader
        eyebrow="Around the resort"
        title="Gallery"
        photo={resortHero[4]}
      />

      <section aria-label="Resort photo gallery" className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal className="mb-10 max-w-2xl">
            <p className="leading-relaxed text-ink/75">
              Banquet halls, the pool, the open restaurant, rooms, and the
              gardens along the canal. Select any photo to view it larger.
            </p>
          </Reveal>
          <Reveal>
            <GalleryGrid photos={resortGallery} columns={4} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
