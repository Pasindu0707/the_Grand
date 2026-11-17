import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { facilities } from "@/lib/images";

export default function FacilitiesRow() {
  return (
    <section aria-labelledby="facilities-heading" className="bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal variant="mask" className="mb-12 text-center">
          <p className="mb-3 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-brass">
            On the grounds
          </p>
          <h2 id="facilities-heading" className="font-display text-3xl sm:text-4xl">
            Facilities
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {facilities.map((facility, i) => (
            <Reveal key={facility.label} delay={i * 110}>
              <Link href={facility.href} className="group block text-center">
                <span className="relative block aspect-[3/4] overflow-hidden rounded-t-full">
                  <Image
                    src={facility.photo.src}
                    alt={facility.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </span>
                <span className="mt-5 block text-[0.78rem] font-bold tracking-[0.2em] uppercase text-ink/85 transition-colors group-hover:text-lagoon-700">
                  {facility.label}
                </span>
                <span aria-hidden className="mx-auto mt-3 block h-px w-8 bg-brass" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
