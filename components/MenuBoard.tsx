"use client";

import Image from "next/image";
import { useState } from "react";
import type { MenuSection } from "@/lib/gastrobar";

/**
 * The menu as a board rather than a PDF: categories across the top, the
 * chosen course set in a classic dotted-leader list beside its photograph.
 */
export default function MenuBoard({ sections }: { sections: MenuSection[] }) {
  const [activeId, setActiveId] = useState(sections[0].id);
  const active = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Menu courses"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {sections.map((section) => {
          const selected = section.id === active.id;
          return (
            <button
              key={section.id}
              role="tab"
              type="button"
              id={`menu-tab-${section.id}`}
              aria-selected={selected}
              aria-controls={`menu-panel-${section.id}`}
              onClick={() => setActiveId(section.id)}
              className={`shrink-0 border px-5 py-2.5 text-[0.72rem] font-bold tracking-[0.2em] whitespace-nowrap uppercase transition ${
                selected
                  ? "border-caramel bg-caramel text-espresso-950"
                  : "border-crema/20 text-crema/70 hover:border-crema/50 hover:text-crema"
              }`}
            >
              {section.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`menu-panel-${active.id}`}
        aria-labelledby={`menu-tab-${active.id}`}
        className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-16"
      >
        <div>
          <p className="mb-8 text-[0.72rem] font-bold tracking-[0.24em] uppercase text-caramel">
            {active.kicker}
          </p>

          <ul className="space-y-7">
            {active.items.map((item) => (
              <li key={item.name}>
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-xl text-crema sm:text-[1.4rem]">
                    {item.name}
                  </h3>
                  {item.signature && (
                    <span className="shrink-0 border border-caramel/60 px-2 py-0.5 text-[0.55rem] font-bold tracking-[0.2em] uppercase text-caramel">
                      Signature
                    </span>
                  )}
                  <span
                    aria-hidden
                    className="mx-1 h-px min-w-6 flex-1 self-end border-b border-dotted border-crema/35 pb-1"
                  />
                  <span className="shrink-0 font-display text-lg text-crema/90 tabular-nums">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1.5 max-w-xl text-[0.92rem] leading-relaxed text-crema/55">
                  {item.note}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-[0.78rem] text-crema/40">
            Prices in Sri Lankan rupees, subject to government taxes.
          </p>
        </div>

        <div className="relative hidden aspect-[3/4] overflow-hidden lg:block">
          <Image
            key={active.photo.src}
            src={active.photo.src}
            alt={active.photo.alt}
            fill
            sizes="22rem"
            className="object-cover"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 to-transparent"
          />
          <p className="absolute right-5 bottom-5 left-5 text-[0.8rem] leading-snug text-crema/80">
            {active.photo.alt}
          </p>
        </div>
      </div>
    </div>
  );
}
