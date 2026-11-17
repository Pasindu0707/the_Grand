"use client";

import { useEffect, useRef, useState } from "react";

export type RevealVariant = "rise" | "mask" | "curtain" | "slide" | "slide-right";

/**
 * Plays a block in as it enters view. The motion itself lives in globals.css
 * under [data-reveal]; this only decides *when* to flip data-shown.
 *
 * Hidden content is the dangerous state here: a block starts at opacity 0, so
 * anything that stops it being marked shown leaves it invisible for good. A
 * lone IntersectionObserver turned out not to be reliable enough - fast
 * scrolling and throttled/background tabs both drop callbacks - so this uses
 * three independent routes to the same latch, and the first one wins:
 *
 *   1. a synchronous measurement on mount, for anything already on screen
 *   2. the observer, for the normal case
 *   3. a passive scroll/resize check
 *   4. a slow timer that re-measures, which needs no events at all
 *
 * Route 4 is the one that makes this safe: a throttled or non-painting tab
 * delivers neither observer callbacks nor scroll events, and without it the
 * page keeps whole sections invisible.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
  stagger = false,
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
  as?: "div" | "section" | "li" | "ul" | "dl";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let settled = false;
    let observer: IntersectionObserver | null = null;
    let poll: ReturnType<typeof setInterval> | null = null;

    const cleanup = () => {
      observer?.disconnect();
      observer = null;
      if (poll !== null) clearInterval(poll);
      poll = null;
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };

    const reveal = () => {
      if (settled) return;
      settled = true;
      setShown(true);
      cleanup();
    };

    function check() {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Count it once its top edge reaches the lower eighth of the screen.
      // Deliberately no lower bound: a block scrolled *past* - which is what
      // you get landing on #menu, or restoring a scroll position - has had
      // its moment and must not stay hidden above the reader.
      if (rect.top < vh * 0.88) reveal();
    }

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) reveal();
        },
        { threshold: 0, rootMargin: "0px 0px -8% 0px" },
      );
      observer.observe(el);
    }

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    // Cheap enough to be invisible (one rect read), and it stops the moment
    // the block is shown.
    poll = setInterval(check, 400);
    check();

    return cleanup;
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal
      data-variant={variant}
      data-shown={shown}
      data-stagger={stagger === true ? "true" : stagger || undefined}
      className={className}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
