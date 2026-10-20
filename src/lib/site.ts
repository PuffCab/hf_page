export const siteConfig = {
  name: "Hendrik Flacke",
  locations: "Berlin",
  inquiries: ["representation@flacke.de", "direct@hendrikflacke.com"],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
} as const;

/** `labelKey` resolves against the `Nav` namespace in `messages/*.json`. */
export const navLinks = [
  { labelKey: "home", href: "/" },
  { labelKey: "actor", href: "/actor" },
  { labelKey: "director", href: "/director" },
  { labelKey: "voice", href: "/voice" },
  { labelKey: "bio", href: "/bio" },
] as const;
