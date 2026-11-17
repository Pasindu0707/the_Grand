import type { Metadata } from "next";
import VenuePage from "@/components/VenuePage";
import { venueGalleries, venues } from "@/lib/venues";

export const metadata: Metadata = {
  title: venues.coffeeLounge.metaTitle,
  description: venues.coffeeLounge.metaDescription,
};

export default function CoffeeLoungePage() {
  return (
    <VenuePage
      venue={venues.coffeeLounge}
      gallery={venueGalleries.coffeeLounge}
    />
  );
}
