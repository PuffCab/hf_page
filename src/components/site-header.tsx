"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-8 md:px-16 lg:flex-row lg:items-center lg:justify-between lg:px-[120px]">
        <Link href="/" className="flex flex-col gap-1.5 whitespace-nowrap">
          <span className="font-serif text-3xl font-bold leading-none md:text-4xl lg:text-[3.5rem]">
            {siteConfig.name.toUpperCase()}
          </span>
          <span className="font-mono text-xs uppercase tracking-wide text-muted md:text-sm">
            {siteConfig.role}
          </span>
        </Link>

        <nav className="flex flex-wrap gap-x-6 gap-y-3">
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
                  "flex flex-col items-start gap-2 text-lg transition-colors",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "h-1 w-4 bg-fg transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
