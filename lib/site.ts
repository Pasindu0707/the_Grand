/**
 * Where this build will actually be served from.
 *
 * CI passes the Pages URL (see .github/workflows/deploy.yml); point
 * NEXT_PUBLIC_SITE_URL at the real domain once one is attached. The trailing
 * slash is stripped so callers can always append their own.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://pasindu0707.github.io/the_Grand"
).replace(/\/$/, "");

/**
 * Origin only - no path.
 *
 * This is what `metadataBase` must be: Next already prefixes asset URLs
 * (og:image and friends) with `basePath`, so a metadataBase carrying the
 * path too yields /the_Grand/the_Grand/opengraph-image.jpg.
 */
export const siteOrigin = new URL(siteUrl).origin;

export const siteName = "The Grand Gastrobar";

export const siteTitle = "The Grand Gastrobar - Kitchen & Bar, Negombo";

export const siteDescription =
  "The Grand Gastrobar on Colombo Road, Negombo: breakfast through to late plates, a coffee counter that takes its beans seriously, and a bar built for long evenings.";

/**
 * The sub-path this build is served under ("" locally, "/<repo>" on a
 * GitHub Pages project site).
 *
 * Next prefixes its own assets and metadata with basePath automatically, but
 * `next/image` with `unoptimized: true` passes `src` through untouched - so
 * anything we hand to <Image> out of /public has to carry it ourselves.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Absolute-from-root URL for a file in /public. */
export const asset = (path: string) =>
  `${basePath}/${path.replace(/^\//, "")}`;
