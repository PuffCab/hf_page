import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export function AboutExcerpt() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 lg:flex-row lg:items-center lg:gap-16 lg:px-[120px]">
        <p className="font-serif text-[clamp(2.5rem,6vw,6rem)] font-medium leading-tight text-fg lg:w-[640px] lg:shrink-0">
          &ldquo;The playbill is a map of commitments.&rdquo;
        </p>

        <div className="flex flex-col gap-6">
          <p className="text-lg leading-[1.7] text-muted">
            For over two decades, Hendrick Flacke has operated at the structural
            heart of German and international theatre. His approach integrates the
            physical rigor of acting with the architectural demands of directing
            and script authorship&mdash;building singular theatrical worlds defined
            by intellectual challenge and raw, unvarnished human truth.
          </p>

          <Link
            href="/bio"
            className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-wide text-fg"
          >
            Read Biography
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
