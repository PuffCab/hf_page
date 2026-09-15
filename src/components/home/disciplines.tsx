import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { disciplines } from "@/data/home";

export function Disciplines() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:px-[120px]">
      <SectionHeading eyebrow="// Disciplines">
        The Craft in Four Registers
      </SectionHeading>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {disciplines.map((discipline) => (
          <li
            key={discipline.slug}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4"
          >
            <div className="relative aspect-[25/22] w-full overflow-hidden rounded-xl">
              <Image
                src={discipline.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                {discipline.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {discipline.blurb}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
