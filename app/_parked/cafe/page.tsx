import type { Metadata } from "next";
import VenuePage from "@/components/VenuePage";
import { venueGalleries, venues } from "@/lib/venues";

export const metadata: Metadata = {
  title: venues.cafe.metaTitle,
  description: venues.cafe.metaDescription,
};

export default function CafePage() {
  return <VenuePage venue={venues.cafe} gallery={venueGalleries.cafe} />;
}
