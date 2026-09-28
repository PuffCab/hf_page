import Image from "next/image";
import { bioParagraphs } from "@/data/bio";

export function BioProfile() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:flex-row lg:gap-12 lg:px-[120px]">
      <div className="flex flex-col gap-4 lg:w-[420px] lg:shrink-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/bio-portrait.png"
            alt="Portrait of Hendrik Flacke"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="font-mono text-xs uppercase tracking-wide text-faint">
          Hendrik Flacke &middot; Portrait 2026
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <p className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight text-foreground">
          &ldquo;We build stage architectures out of silence and rigor.&rdquo;
        </p>
        {bioParagraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="text-base leading-[1.7] text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
