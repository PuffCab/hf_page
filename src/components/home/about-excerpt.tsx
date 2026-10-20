import { useTranslations } from "next-intl";
import { ArrowRight } from "@/components/icons";
import { Link } from "@/i18n/navigation";

export function AboutExcerpt() {
  const t = useTranslations("Home");

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:flex-row lg:items-center lg:gap-16 lg:px-[120px]">
        <p className="font-serif text-[clamp(2.5rem,6vw,6rem)] font-medium leading-tight text-foreground lg:w-[640px] lg:shrink-0">
          {t("aboutQuote")}
        </p>

        <div className="flex flex-col gap-6">
          <p className="text-lg leading-[1.7] text-muted-foreground">
            {t("aboutBody")}
          </p>

          <Link
            href="/bio"
            className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-wide text-foreground"
          >
            {t("aboutCta")}
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
