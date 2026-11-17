/**
 * A slow ticker band of short phrases - the one piece of motion between
 * the hero and the editorial sections. Duplicated once so the loop is seamless,
 * and frozen entirely under prefers-reduced-motion (see globals.css).
 */
export default function Marquee({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const run = (key: string) => (
    <ul
      key={key}
      aria-hidden={key === "b"}
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
      data-marquee-run
    >
      {words.map((word) => (
        <li
          key={word}
          className="flex shrink-0 items-center gap-10 text-[0.72rem] font-bold tracking-[0.26em] whitespace-nowrap uppercase sm:gap-14"
        >
          {word}
          <span aria-hidden className="text-caramel">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`group flex overflow-hidden border-y border-white/10 py-4 ${className}`}
      data-marquee
    >
      {run("a")}
      {run("b")}
    </div>
  );
}
