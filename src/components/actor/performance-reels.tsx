import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { PlayIcon } from "@/components/icons";
import { performanceReels } from "@/data/actor";

export function PerformanceReels() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:px-[120px]">
        <SectionHeading eyebrow="// Documentation">Performance Reels</SectionHeading>

        <ul className="grid gap-6 md:grid-cols-2">
          {performanceReels.map((reel) => (
            <li key={reel.slug} className="flex flex-col gap-3">
              <div className="group relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-2xl border border-border">
                <Image
                  src={reel.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative flex size-14 items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-md transition-transform group-hover:scale-105">
                  <PlayIcon className="size-[18px] translate-x-px text-white" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {reel.title}
                </h3>
                <p className="text-sm text-muted-foreground">{reel.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
