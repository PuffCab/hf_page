import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { ActorHero } from "@/components/actor/actor-hero";
import { ProductionGrid } from "@/components/actor/production-grid";
import { PerformanceReels } from "@/components/actor/performance-reels";
import { resolveLocale } from "@/i18n/locale";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/actor">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("actorTitle", { name: siteConfig.name }),
    description: t("actorDescription"),
  };
}

export default async function ActorPage({
  params,
}: PageProps<"/[locale]/actor">) {
  await resolveLocale(params);

  return (
    <>
      <SiteHeader />
      <main>
        <ActorHero />
        <ProductionGrid />
        <PerformanceReels />
      </main>
    </>
  );
}
