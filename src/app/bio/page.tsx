import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { BioHero } from "@/components/bio/bio-hero";
import { BioProfile } from "@/components/bio/bio-profile";
import { BioGallery } from "@/components/bio/bio-gallery";
import { BioRecognition } from "@/components/bio/bio-recognition";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Bio — ${siteConfig.name}`,
  description:
    "The man behind the dramaturgy — Hendrik Flacke's biography, recognition, and representation.",
};

export default function BioPage() {
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
