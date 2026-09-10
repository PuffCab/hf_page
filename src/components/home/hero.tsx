import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-14 md:px-16 md:pb-24 lg:px-[120px]">
      <Image
        src="/images/hero.png"
        alt="Portrait of Hendrick Flacke"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative flex flex-col gap-6 text-fg md:gap-10">
        <h1 className="font-serif text-[clamp(3rem,15vw,15rem)] font-bold uppercase leading-[0.9]">
          {siteConfig.name}
        </h1>
        <p className="font-mono text-[clamp(0.8rem,2.4vw,2.4rem)] font-medium uppercase [text-wrap:balance]">
          Actor · Playwright · Director · Voice Artist
        </p>
      </div>
    </section>
  );
}
