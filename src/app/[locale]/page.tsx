import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/home/hero";
import { Disciplines } from "@/components/home/disciplines";
import { AboutExcerpt } from "@/components/home/about-excerpt";
import { Press } from "@/components/home/press";
import { resolveLocale } from "@/i18n/locale";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  await resolveLocale(params);

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
