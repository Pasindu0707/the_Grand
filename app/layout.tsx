import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import {
  siteDescription,
  siteName,
  siteOrigin,
  siteTitle,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

/*
 * The site is currently the Gastrobar alone. The other venues live under
 * app/_parked/ - a private folder, so Next does not route them - and the
 * family-wide titles come back when they do.
 */

export const metadata: Metadata = {
  // Origin only; Next adds basePath to asset URLs itself. Without a
  // metadataBase the og: image stays relative and unfurlers drop it.
  metadataBase: new URL(siteOrigin),
  title: {
    default: siteTitle,
    template: "%s · The Grand Gastrobar",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName,
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    locale: "en_LK",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${karla.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
