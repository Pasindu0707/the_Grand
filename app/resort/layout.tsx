import type { Metadata } from "next";
import Footer from "@/components/Footer";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: {
    default: "Grand Holiday Resort — Wennappuwa",
    template: "%s · Grand Holiday Resort",
  },
  description:
    "Grand Holiday Resort in Wennappuwa, Sri Lanka — banquets, weddings, an open restaurant, wet bar, pool, and rooms beside a Dutch canal.",
};

const navLinks = [
  { href: "/resort", label: "Home" },
  { href: "/resort/banquets", label: "Banquets" },
  { href: "/resort/restaurant", label: "Restaurant" },
  { href: "/resort/gallery", label: "Gallery" },
  { href: "/resort/contact", label: "Contact" },
];

export default function ResortLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-sand">
      <SiteNav
        brand="resort"
        homeHref="/resort"
        wordmark="Grand Holiday Resort"
        place="Wennappuwa"
        links={navLinks}
        transparentAtTop
      />
      {children}
      <Footer
        brand="resort"
        name="Grand Holiday Resort"
        facebookPages={["Grand Holiday Resort"]}
      />
    </div>
  );
}
