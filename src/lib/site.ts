export const siteConfig = {
  name: "Hendrick Flacke",
  role: "Theatre & Voice",
  tagline:
    "A theatrical operator crafting high-stakes narratives across the physical stage, the written page, and the microphone.",
  locations: "Berlin · Hamburg · London",
  inquiries: ["representation@flacke.de", "direct@hendrickflacke.com"],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Actor", href: "/actor" },
  { label: "Playwright", href: "/playwright" },
  { label: "Director", href: "/director" },
  { label: "Voice", href: "/voice" },
  { label: "Bio", href: "/bio" },
] as const;
