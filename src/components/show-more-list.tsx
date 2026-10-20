"use client";

import { useTranslations } from "next-intl";
import { useState, type ReactNode } from "react";
import { ArrowRight } from "@/components/icons";
import { cn } from "@/lib/utils";

type ShowMoreListProps = {
  items: ReactNode[];
  initialCount: number;
  listClassName: string;
  /** Translated plural noun for the toggle, e.g. "reels" → "Show 3 more reels". */
  moreLabel: string;
};

/**
 * Renders a capped slice of `items` with a "Show N more" toggle once the
 * list exceeds `initialCount`. Lets content-driven grids (productions,
 * reels, etc.) grow over time without the page growing unbounded.
 */
export function ShowMoreList({
  items,
  initialCount,
  listClassName,
  moreLabel,
}: ShowMoreListProps) {
  const t = useTranslations("Common");
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = items.length - initialCount;
  const visibleItems = expanded ? items : items.slice(0, initialCount);

  return (
    <div className="flex flex-col gap-8">
      <ul className={listClassName}>{visibleItems}</ul>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="group inline-flex w-fit items-center gap-3 font-mono text-sm uppercase tracking-wide text-foreground"
        >
          {expanded
            ? t("showLess")
            : t("showMore", { count: hiddenCount, label: moreLabel })}
          <ArrowRight
            className={cn(
              "size-5 transition-transform",
              expanded ? "-rotate-90" : "rotate-90",
            )}
          />
        </button>
      )}
    </div>
  );
}
