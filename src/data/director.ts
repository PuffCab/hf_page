export type StagedProduction = {
  slug: string;
  title: string;
  year: string;
  venue: string;
  image: string;
};

export const stagedProductions: StagedProduction[] = [
  {
    slug: "medea",
    title: "Medea",
    year: "2025",
    venue: "Volksbühne Berlin",
    image: "/images/director-medea.png",
  },
  {
    slug: "waiting-for-godot",
    title: "Waiting for Godot",
    year: "2024",
    venue: "Deutsches Theater",
    image: "/images/director-waiting-for-godot.png",
  },
  {
    slug: "antigone",
    title: "Antigone",
    year: "2023",
    venue: "Residenztheater München",
    image: "/images/director-antigone.png",
  },
  {
    slug: "the-homecoming",
    title: "The Homecoming",
    year: "2022",
    venue: "Thalia Theater Hamburg",
    image: "/images/director-the-homecoming.png",
  },
];

export type RehearsalReel = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const rehearsalReels: RehearsalReel[] = [
  {
    slug: "medea-rehearsal-room",
    title: "Medea: Rehearsal Room Process",
    description:
      "Behind-the-scenes staging discussions and actor work for Medea (2025)",
    image: "/images/director-reel-medea.png",
  },
  {
    slug: "staging-beckett",
    title: "Staging Beckett: Staging Process",
    description:
      "Designing the architectural physical space for Waiting for Godot (2024)",
    image: "/images/director-reel-godot.png",
  },
];
