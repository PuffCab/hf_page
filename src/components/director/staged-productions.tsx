import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/section-heading";
import { stagedProductions } from "@/data/director";

export function StagedProductions() {
  const t = useTranslations("Director");

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:px-[120px]">
      <SectionHeading eyebrow={t("productionsEyebrow")}>
        {t("productionsHeading")}
      </SectionHeading>

      <ul className="grid gap-6 md:grid-cols-2">
        {stagedProductions.map((production) => (
          <li
            key={production.slug}
            className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={production.image}
                alt={t("productionStillAlt", { title: production.title })}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-3xl font-semibold text-foreground">
                  {production.title}
                </h3>
                <span className="shrink-0 font-mono text-sm text-muted-foreground">
                  {production.year}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("stagedAt")}{" "}
                <span className="font-semibold text-foreground">
                  {production.venue}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
