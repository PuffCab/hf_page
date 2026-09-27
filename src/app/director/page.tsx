import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { DirectorHero } from "@/components/director/director-hero";
import { StagedProductions } from "@/components/director/staged-productions";
import { RehearsalFootage } from "@/components/director/rehearsal-footage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Director — ${siteConfig.name}`,
  description:
    "Directorial résumé from Hendrik Flacke's work staging Medea, Waiting for Godot, and other productions.",
};

export default function DirectorPage() {
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
