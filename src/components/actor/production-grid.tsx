import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { productions } from "@/data/actor";

export function ProductionGrid() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:px-[120px]">
      <SectionHeading eyebrow="// Theatre Credit Summary">
        Core Stage Performances
      </SectionHeading>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productions.map((production) => (
          <li
            key={production.slug}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4"
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
              <Image
                src={production.image}
                alt={`${production.title} production still`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {production.title}
                </h3>
                <span className="shrink-0 font-mono text-sm text-muted-foreground">
                  {production.year}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Role: <span className="font-semibold text-foreground">{production.role}</span>
              </p>
              <p className="text-sm text-faint">{production.venue}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
