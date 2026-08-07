import type { Metadata } from "next";
import VenuePage from "@/components/VenuePage";
import { venueGalleries, venues } from "@/lib/venues";

export const metadata: Metadata = {
  title: venues.espresso.metaTitle,
  description: venues.espresso.metaDescription,
};

export default function EspressoPage() {
  return <VenuePage venue={venues.espresso} gallery={venueGalleries.espresso} />;
}
