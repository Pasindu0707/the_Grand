import type { Metadata } from "next";
import VenuePage from "@/components/VenuePage";
import { venueGalleries, venues } from "@/lib/venues";

export const metadata: Metadata = {
  title: venues.gastrobar.metaTitle,
  description: venues.gastrobar.metaDescription,
};

export default function GastrobarPage() {
  return (
    <VenuePage venue={venues.gastrobar} gallery={venueGalleries.gastrobar} />
  );
}
