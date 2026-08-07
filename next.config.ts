import type { NextConfig } from "next";

/**
 * GitHub Pages serves a project site from /<repo>, so the CI build sets
 * NEXT_PUBLIC_BASE_PATH. Locally it is empty and `next dev` stays at /.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    // Pages is a static host — no Next image optimizer runs there.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
