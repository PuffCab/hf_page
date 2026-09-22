import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ActorHero } from "@/components/actor/actor-hero";
import { ProductionGrid } from "@/components/actor/production-grid";
import { PerformanceReels } from "@/components/actor/performance-reels";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Actor — ${siteConfig.name}`,
  description:
    "Selected stage productions from Hendrik Flacke's work as an actor, from Hamlet to Ghosts.",
};

export default function ActorPage() {
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
