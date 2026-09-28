import { SectionHeading } from "@/components/section-heading";
import { WaveformPlayer } from "@/components/voice/waveform-player";
import { voiceCategories } from "@/data/voice";

export function VoiceRepertoire() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:px-[120px]">
      <SectionHeading eyebrow="// VO Work Repertoire">
        Acoustic Craft across Genres
      </SectionHeading>

      <ul className="grid gap-6 md:grid-cols-2">
        {voiceCategories.map((category) => (
          <li
            key={category.slug}
            className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="font-serif text-3xl font-semibold text-foreground">
              {category.title}
            </h3>

            <ul className="flex flex-col gap-8">
              {category.samples.map((sample) => (
                <li key={sample.slug} className="flex flex-col gap-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-xl font-semibold text-foreground">
                      {sample.title}
                    </p>
                    <span className="shrink-0 font-mono text-base text-faint">
                      {sample.year}
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Client: {sample.client}
                  </p>
                  <WaveformPlayer sample={sample} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
