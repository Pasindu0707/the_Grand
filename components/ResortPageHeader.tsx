import Image from "next/image";
import type { Photo } from "@/lib/images";

export default function ResortPageHeader({
  eyebrow,
  title,
  photo,
}: {
  eyebrow: string;
  title: string;
  photo: Photo;
}) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden pt-24">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-lagoon-950/85 via-lagoon-950/40 to-lagoon-950/30"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8 sm:pb-16">
        <p className="mb-3 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-brass">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl text-sand sm:text-5xl">{title}</h1>
      </div>
    </section>
  );
}
