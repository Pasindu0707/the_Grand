"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Brand = "espresso" | "resort";

const brandStyles: Record<
  Brand,
  { solid: string; accent: string; underline: string }
> = {
  espresso: {
    solid: "bg-espresso-950/95 backdrop-blur-sm shadow-lg shadow-espresso-950/30",
    accent: "text-caramel",
    underline: "after:bg-caramel",
  },
  resort: {
    solid: "bg-lagoon-950/95 backdrop-blur-sm shadow-lg shadow-lagoon-950/30",
    accent: "text-brass",
    underline: "after:bg-brass",
  },
};

export default function SiteNav({
  brand,
  homeHref,
  wordmark,
  place,
  links,
  transparentAtTop = false,
}: {
  brand: Brand;
  homeHref: string;
  wordmark: string;
  place: string;
  links: { href: string; label: string }[];
  transparentAtTop?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const styles = brandStyles[brand];
  const solid = scrolled || !transparentAtTop || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    !href.includes("#") &&
    (href === pathname || (href !== homeHref && pathname.startsWith(href)));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-crema transition-all duration-500 ${
        solid ? styles.solid : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <div className="flex items-center gap-3.5">
          <Link
            href="/"
            aria-label="Back to The Grand — all locations"
            title="Back to The Grand"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-crema/80 transition hover:border-white/50 hover:text-crema"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M14 8H2m0 0 4.5-4.5M2 8l4.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href={homeHref} className="group flex items-baseline gap-2.5">
            <span className="font-display text-xl tracking-tight">{wordmark}</span>
            <span
              className={`hidden text-[0.62rem] font-bold tracking-[0.22em] uppercase lg:inline ${styles.accent}`}
            >
              {place}
            </span>
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative pb-1 text-[0.78rem] font-bold tracking-[0.18em] uppercase transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300 ${styles.underline} ${
                isActive(link.href)
                  ? `${styles.accent} after:w-full`
                  : "text-crema/85 after:w-0 hover:text-crema hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex size-10 items-center justify-center md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            {menuOpen ? (
              <path d="m4 4 12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Primary mobile"
          className="border-t border-white/10 px-5 pt-2 pb-6 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`block py-3 text-sm font-bold tracking-[0.18em] uppercase ${
                isActive(link.href) ? styles.accent : "text-crema/85"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block border-t border-white/10 py-3 text-sm font-bold tracking-[0.18em] uppercase text-crema/60"
          >
            ← The Grand · All locations
          </Link>
        </nav>
      )}
    </header>
  );
}
