import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/home/hero";
import { Disciplines } from "@/components/home/disciplines";
import { AboutExcerpt } from "@/components/home/about-excerpt";
import { Press } from "@/components/home/press";

export default function HomePage() {
  return (
    <>
      {/* On the landing page the hero runs full-bleed above the nav, per the
          Figma `landing-home` frame. Inner pages will render <SiteHeader /> first. */}
      <Hero />
      <SiteHeader />
      <main>
        <Disciplines />
        <AboutExcerpt />
        <Press />
      </main>
    </>
  );
}
