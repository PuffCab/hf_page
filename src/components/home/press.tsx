import { SectionHeading } from "@/components/section-heading";
import { press } from "@/data/home";

export function Press() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:px-[120px]">
      <SectionHeading eyebrow="// Reviews & Press">
        Selected Critical Reception
      </SectionHeading>

      <ul className="grid gap-6 md:grid-cols-3">
        {press.map((entry) => (
          <li
            key={entry.source}
            className="flex flex-col gap-4 rounded-2xl border border-line bg-ink p-5"
          >
            <blockquote className="font-serif text-xl leading-normal text-fg">
              &ldquo;{entry.quote}&rdquo;
            </blockquote>
            <div className="mt-auto flex items-center justify-between gap-3">
              <cite className="text-sm font-semibold not-italic text-fg">
                {entry.source}
              </cite>
              <span className="shrink-0 font-mono text-sm uppercase text-faint">
                {entry.date}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
