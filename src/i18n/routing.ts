import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  // German lives at clean URLs (`/actor`), English under `/en` (`/en/actor`).
  localePrefix: "as-needed",
  // `/` always serves German; English is reached via the switcher or `/en`.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
