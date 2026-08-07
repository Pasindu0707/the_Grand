"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/lib/images";

export default function GalleryGrid({
  photos,
  columns = 4,
  frameClassName = "",
}: {
  photos: Photo[];
  columns?: 3 | 4;
  frameClassName?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const count = photos.length;

  const step = useCallback(
    (delta: number) =>
      setOpen((i) => (i === null ? i : (i + delta + count) % count)),
    [count],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  return (
    <>
      <div
        className={`grid grid-cols-2 gap-3 sm:gap-4 ${
          columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {photos.map((photo, i) => (
          <button
            key={`${photo.src}-${i}`}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`View photo: ${photo.alt}`}
            className={`group relative aspect-[4/3] overflow-hidden ${frameClassName}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25"
            />
            <span
              aria-hidden
              className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 transition duration-500 group-hover:opacity-100"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1v11M1 6.5h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[open].alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-950/95 p-4 sm:p-10"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative h-full max-h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[open].src}
              alt={photos[open].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <p className="absolute bottom-6 left-1/2 w-full max-w-xl -translate-x-1/2 px-6 text-center text-sm text-crema/80">
            {photos[open].alt} · {open + 1} of {count}
          </p>

          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setOpen(null)}
            className="absolute top-5 right-5 flex size-11 items-center justify-center rounded-full border border-white/25 text-white/85 transition hover:bg-white/15"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
              <path d="m2 2 11 11M13 2 2 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white/85 transition hover:bg-white/15 sm:left-6"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white/85 transition hover:bg-white/15 sm:right-6"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
