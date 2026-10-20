import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { VoiceHero } from "@/components/voice/voice-hero";
import { VoiceRepertoire } from "@/components/voice/voice-repertoire";
import { resolveLocale } from "@/i18n/locale";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/voice">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("voiceTitle", { name: siteConfig.name }),
    description: t("voiceDescription"),
  };
}

export default async function VoicePage({
  params,
}: PageProps<"/[locale]/voice">) {
  await resolveLocale(params);

  return (
    <>
      <SiteHeader />
      <main>
        <VoiceHero />
        <VoiceRepertoire />
      </main>
    </>
  );
}
