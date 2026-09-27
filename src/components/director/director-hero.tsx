import Image from "next/image";

export function DirectorHero() {
  return (
    <section className="relative isolate flex min-h-[320px] flex-col justify-end overflow-hidden px-6 pb-10 md:px-16 md:pb-14 lg:min-h-[420px] lg:px-[120px]">
      <Image
        src="/images/director-header.png"
        alt="A director watching a solo actor rehearse on a bare stage"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Text sits on a fixed dark scrim over the photo, not the page
          background, so it stays a fixed light color in both themes. */}
      <div className="relative flex flex-col gap-3 text-white">
        <h1 className="font-serif text-[clamp(3rem,9vw,6rem)] font-bold leading-[0.9]">
          Director
        </h1>
        <p className="font-mono text-sm uppercase tracking-wide text-white/70 md:text-base">
          Theatrical Choreography &amp; Staging
        </p>
      </div>
    </section>
  );
}
