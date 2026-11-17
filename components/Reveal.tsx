"use client";

import { useEffect, useRef, useState } from "react";

export type RevealVariant =
  | "rise"
  | "mask"
  | "curtain"
  | "slide"
  | "slide-right";

/**
 * Plays a block in as it enters view. The motion itself lives in globals.css
 * under [data-reveal]; this only decides *when* to flip data-shown.
 *
 * Never wrap above-the-fold content in this - it starts at opacity 0 and
 * would leave the first screen blank until the observer fires.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
  stagger = false,
  threshold = 0.15,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  /**
   * Cascade children instead of moving the block as one piece.
   * `true` cascades direct children; "deep" reaches one level further, for
   * components that render their own grid wrapper.
   */
  stagger?: boolean | "deep";
  threshold?: number;
  as?: "div" | "section" | "li" | "ul" | "dl";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the browser can't observe, show it rather than hide it forever.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      // A little bottom margin so a block starts moving just before it lands.
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal
      data-variant={variant}
      data-shown={shown}
      data-stagger={stagger === true ? "true" : stagger || undefined}
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
