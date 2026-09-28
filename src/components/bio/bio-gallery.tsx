import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { bioGallery } from "@/data/bio";

export function BioGallery() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:px-[120px]">
        <SectionHeading eyebrow="// Archive & Memories">
          Stage &amp; Studio Gallery
        </SectionHeading>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {bioGallery.map((item) => (
            <li
              key={item.slug}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
