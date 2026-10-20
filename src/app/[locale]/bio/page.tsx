import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { BioHero } from "@/components/bio/bio-hero";
import { BioProfile } from "@/components/bio/bio-profile";
import { BioGallery } from "@/components/bio/bio-gallery";
import { BioRecognition } from "@/components/bio/bio-recognition";
import { resolveLocale } from "@/i18n/locale";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/bio">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("bioTitle", { name: siteConfig.name }),
    description: t("bioDescription"),
  };
}

export default async function BioPage({ params }: PageProps<"/[locale]/bio">) {
  await resolveLocale(params);

  return (
    <>
      <SiteHeader />
      <main>
        <BioHero />
        <BioProfile />
        <BioGallery />
        <BioRecognition />
      </main>
    </>
  );
}
