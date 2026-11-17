"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/images";

/**
 * A horizontal, snapping strip of wide photos - the room itself, scrolled
 * through rather than stacked. Native scrolling keeps it keyboard- and
 * touch-friendly; the arrows are an affordance on top, not the only way.
 */
export default function PhotoStrip({
  photos,
  captionEyebrow,
}: {
  photos: Photo[];
  captionEyebrow?: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  /**
   * Scroll to the next slide's own offset rather than by a pixel delta:
   * with `scroll-snap-type: mandatory`, a smooth scroll that lands between
   * snap points gets yanked back to where it started.
   */
  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;

    const trackLeft = el.getBoundingClientRect().left;
    const offsets = Array.from(el.children).map(
      (child) =>
        child.getBoundingClientRect().left - trackLeft + el.scrollLeft,
    );

    const here = el.scrollLeft;
    const next =
      dir === 1
        ? offsets.find((x) => x > here + 8)
        : [...offsets].reverse().find((x) => x < here - 8);

    const left = next ?? (dir === 1 ? el.scrollWidth : 0);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left, behavior: reduced ? "auto" : "smooth" });

    // Backstop: the scroll listener drives the arrows, but re-check once the
    // glide has settled in case no scroll event reaches us.
    window.setTimeout(sync, 600);
  };

  const arrow = (dir: 1 | -1, disabled: boolean) => (
    <button
      type="button"
      onClick={() => nudge(dir)}
      disabled={disabled}
      aria-label={dir === 1 ? "Scroll photos forward" : "Scroll photos back"}
      className="flex size-11 items-center justify-center rounded-full border border-crema/25 text-crema/80 transition hover:border-crema/60 hover:text-crema disabled:pointer-events-none disabled:opacity-25"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d={dir === 1 ? "m6 3 5 5-5 5" : "M10 3 5 8l5 5"}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  return (
    <div>
      <ul
        ref={trackRef}
        onScroll={sync}
        tabIndex={0}
        aria-label="The rooms, in photographs"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 sm:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, i) => (
          <li
            key={photo.src}
            className="relative aspect-[16/10] w-[85vw] shrink-0 snap-start overflow-hidden sm:w-[62vw] lg:w-[46rem]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 46rem, (min-width: 640px) 62vw, 85vw"
              className="object-cover"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent"
            />
            <span className="absolute bottom-5 left-5 flex items-baseline gap-3 pr-5">
              <span className="font-display text-xs text-caramel tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.82rem] leading-snug text-crema/85">
                {photo.alt}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between gap-6">
        {captionEyebrow && (
          <p className="text-[0.68rem] font-bold tracking-[0.26em] uppercase text-crema/40">
            {captionEyebrow}
          </p>
        )}
        <div className="flex gap-3">
          {arrow(-1, atStart)}
          {arrow(1, atEnd)}
        </div>
      </div>
    </div>
  );
}
