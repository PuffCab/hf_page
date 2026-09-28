export const bioParagraphs: string[] = [
  "Born and raised in Germany, Hendrik Flacke trained at the Ernst Busch Academy of Dramatic Arts in Berlin. He began his stage career as an ensemble member at the Deutsches Theater Berlin, developing a severe, physical acting style defined by psychological rigor and intellectual depth.",
  "As a playwright, his original texts deal in institutional and domestic silence—stripping away theatrical artifice to expose raw, often challenging existential crises. His plays have premiered at major houses across Germany, including the Kammerspiele Munich and the Thalia Theater Hamburg.",
  "Now working internationally, Hendrik balances stage and screen roles with active playwriting and a prominent voice acting schedule for national commercial campaigns and prestigious classical audiobooks. His philosophy remains grounded in uncompromising discipline, the pursuit of theatrical truth, and the structural command of space.",
];

export type BioAward = {
  year: string;
  title: string;
  presenter: string;
};

export const bioAwards: BioAward[] = [
  {
    year: "2025",
    title: "Best New Playwright Nomination",
    presenter: "Theater Heute Critics Poll",
  },
  {
    year: "2024",
    title: "Theatrical Actor of the Year",
    presenter: "German Stage Association",
  },
  {
    year: "2022",
    title: "Kulturpreis Berlin for Dramatic Arts",
    presenter: "State of Berlin",
  },
];

export type GalleryImage = {
  slug: string;
  image: string;
  alt: string;
};

export const bioGallery: GalleryImage[] = [
  {
    slug: "gallery-1",
    image: "/images/bio-gallery-1.png",
    alt: "Hendrik Flacke on stage during a dramatic performance",
  },
  {
    slug: "gallery-2",
    image: "/images/bio-gallery-2.png",
    alt: "Hendrik Flacke in a rehearsal room studying a script",
  },
  {
    slug: "gallery-3",
    image: "/images/bio-gallery-3.png",
    alt: "Hendrik Flacke recording narration in a voice studio",
  },
  {
    slug: "gallery-4",
    image: "/images/bio-gallery-4.png",
    alt: "Hendrik Flacke directing actors on a bare stage",
  },
  {
    slug: "gallery-5",
    image: "/images/bio-gallery-5.png",
    alt: "Hendrik Flacke backstage before a performance",
  },
  {
    slug: "gallery-6",
    image: "/images/bio-gallery-6.png",
    alt: "Hendrik Flacke taking a curtain call",
  },
];

export const bioRepresentation = {
  agencyLabel: "Agency Representative",
  agencyName: "Künstleragentur Schröder",
  agencyEmail: "schroeder@agentur-schroeder.de",
  directLabel: "Direct Contact",
  directEmail: "direct@hendrikflacke.com",
} as const;
