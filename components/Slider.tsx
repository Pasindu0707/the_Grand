"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/lib/images";

export default function Slider({
  slides,
  interval = 6000,
  overlayClassName = "bg-gradient-to-t from-black/70 via-black/35 to-black/25",
  className = "",
  children,
}: {
  slides: Photo[];
  interval?: number;
  overlayClassName?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count],
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(timer);
  }, [count, interval, index]);

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== index}
          // Only the slide on screen drifts; toggling the attribute restarts
          // the push-in each time a slide comes back around.
          data-drift={i === index ? "true" : undefined}
          className={`absolute inset-0 overflow-hidden transition-opacity duration-[1400ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden />

      <div className="relative z-10 h-full">{children}</div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute top-1/2 left-3 z-20 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:bg-white/15 hover:text-white sm:flex"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute top-1/2 right-3 z-20 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:bg-white/15 hover:text-white sm:flex"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-7 bg-white" : "w-1.5 bg-white/45 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
