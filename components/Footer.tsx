import Link from "next/link";

type Brand = "espresso" | "resort";

const styles: Record<Brand, { bg: string; accent: string }> = {
  espresso: { bg: "bg-espresso-950 text-crema", accent: "text-caramel" },
  resort: { bg: "bg-lagoon-950 text-sand", accent: "text-brass" },
};

function FacebookIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V13h2.7v8h3.4Z" />
    </svg>
  );
}

export default function Footer({
  brand,
  name,
  facebookPages,
}: {
  brand: Brand;
  name: string;
  facebookPages: string[];
}) {
  const s = styles[brand];
  return (
    <footer className={s.bg}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl">{name}</p>
          <p className={`mt-1 text-[0.65rem] font-bold tracking-[0.24em] uppercase ${s.accent}`}>
            Part of The Grand · Sri Lanka
          </p>
        </div>

        <div>
          <p className="mb-3 text-[0.65rem] font-bold tracking-[0.24em] uppercase opacity-60">
            Find us on Facebook
          </p>
          <ul className="space-y-2">
            {facebookPages.map((page) => (
              <li key={page}>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2.5 text-sm opacity-85 transition-opacity hover:opacity-100"
                >
                  <FacebookIcon />
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs opacity-60 sm:px-8">
          © Grand {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
