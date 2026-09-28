import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { VoiceHero } from "@/components/voice/voice-hero";
import { VoiceRepertoire } from "@/components/voice/voice-repertoire";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Voice — ${siteConfig.name}`,
  description:
    "Hendrik Flacke's voice work across narration, commercials, audiobooks and dubbing.",
};

export default function VoicePage() {
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
