import { bioAwards, bioRepresentation } from "@/data/bio";

/**
 * Compact eyebrow + heading for this section's two narrow columns. The
 * shared `SectionHeading` scales off viewport width (for full-bleed
 * sections) and overflows a ~420px card, so this caps out at a fixed size.
 */
function SubsectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-6xl">
        {children}
      </h2>
    </div>
  );
}

export function BioRecognition() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-16 md:px-16 lg:flex-row lg:px-[120px]">
      <div className="flex flex-1 flex-col gap-8">
        <SubsectionHeading eyebrow="// Awards">Recognition</SubsectionHeading>

        <ul className="flex flex-col gap-4">
          {bioAwards.map((award) => (
            <li
              key={award.year}
              className="flex items-center gap-6 rounded-2xl border border-border bg-card p-6"
            >
              <span className="w-16 shrink-0 font-mono text-sm text-muted-foreground">
                {award.year}
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-serif text-xl font-semibold text-foreground">
                  {award.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {award.presenter}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-8 lg:w-[420px] lg:shrink-0">
        <SubsectionHeading eyebrow="// Get in Touch">
          Representation
        </SubsectionHeading>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-wide text-faint">
            {bioRepresentation.agencyLabel}
          </p>
          <p className="text-base font-semibold text-foreground">
            {bioRepresentation.agencyName}
          </p>
          <a
            href={`mailto:${bioRepresentation.agencyEmail}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {bioRepresentation.agencyEmail}
          </a>
        </div>

        <div className="border-t border-border" />

        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-wide text-faint">
            {bioRepresentation.directLabel}
          </p>
          <a
            href={`mailto:${bioRepresentation.directEmail}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {bioRepresentation.directEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
