import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { DirectorHero } from "@/components/director/director-hero";
import { StagedProductions } from "@/components/director/staged-productions";
import { RehearsalFootage } from "@/components/director/rehearsal-footage";
import { resolveLocale } from "@/i18n/locale";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/director">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("directorTitle", { name: siteConfig.name }),
    description: t("directorDescription"),
  };
}

export default async function DirectorPage({
  params,
}: PageProps<"/[locale]/director">) {
  await resolveLocale(params);

  return (
    <>
      <SiteHeader />
      <main>
        <DirectorHero />
        <StagedProductions />
        <RehearsalFootage />
      </main>
    </>
  );
}
