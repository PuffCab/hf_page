"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  /** Render at a smaller size, e.g. inside a shrunk sticky header. */
  compact?: boolean;
};

export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const t = useTranslations("Language");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "flex items-center font-mono uppercase transition-all duration-300 ease-out",
        compact ? "gap-2 text-xs" : "gap-3 text-sm",
      )}
    >
      {routing.locales.map((code) => {
        const active = code === locale;

        return (
          <Link
            key={code}
            href={pathname}
            locale={code}
            lang={code}
            aria-label={t("switchTo", { language: t(code) })}
            aria-current={active ? "true" : undefined}
            className={cn(
              "transition-colors",
              active
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
}
