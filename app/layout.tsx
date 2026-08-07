import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "The Grand — Negombo & Wennappuwa, Sri Lanka",
    template: "%s · The Grand",
  },
  description:
    "One family, two houses of welcome: Grand Espresso coffee lounge in Negombo and Grand Holiday Resort in Wennappuwa, Sri Lanka.",
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
