"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

/** How far past the point where the header sticks it must scroll before shrinking. */
const COMPACT_SCROLL_THRESHOLD = 48;

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // A sticky element's offsetTop reflects its normal-flow position, i.e.
    // exactly the scrollY at which it becomes pinned to the top.
    let stickyOffset = header.offsetTop;
    let ticking = false;

    const evaluate = () => {
      ticking = false;
      setCompact(window.scrollY > stickyOffset + COMPACT_SCROLL_THRESHOLD);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(evaluate);
    };

    const onResize = () => {
      stickyOffset = header.offsetTop;
      evaluate();
    };

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-border bg-background"
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1440px] flex-col gap-6 px-6 transition-[padding] duration-300 ease-out md:px-16 lg:flex-row lg:items-center lg:justify-between lg:px-[120px]",
          compact ? "py-3" : "py-8",
        )}
      >
        <Link href="/" className="flex flex-col gap-1.5 whitespace-nowrap">
          <span
            className={cn(
              "font-serif font-bold leading-none transition-all duration-300 ease-out",
              compact
                ? "text-xl md:text-2xl lg:text-3xl"
                : "text-3xl md:text-4xl lg:text-[3.5rem]",
            )}
          >
            {siteConfig.name.toUpperCase()}
          </span>
          <span
            className={cn(
              "overflow-hidden font-mono uppercase tracking-wide text-muted-foreground transition-all duration-300 ease-out",
              compact
                ? "max-h-0 text-xs opacity-0"
                : "max-h-6 text-xs opacity-100 md:text-sm",
            )}
          >
            {siteConfig.role}
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <nav
            className={cn(
              "flex flex-wrap transition-all duration-300 ease-out",
              compact ? "gap-x-4 gap-y-2" : "gap-x-6 gap-y-3",
            )}
          >
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative flex flex-col items-start transition-all duration-300 ease-out",
                    compact ? "gap-1 text-sm" : "gap-2 text-lg",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bg-foreground transition-all duration-300 ease-out",
                      compact ? "-bottom-1.5 h-0.5 w-3" : "-bottom-3 h-1 w-4",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <ThemeToggle compact={compact} />
        </div>
      </div>
    </header>
  );
}
