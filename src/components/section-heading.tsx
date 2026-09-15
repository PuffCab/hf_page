import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  children: ReactNode;
};

export function SectionHeading({ eyebrow, children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.05] text-foreground">
        {children}
      </h2>
    </div>
  );
}
