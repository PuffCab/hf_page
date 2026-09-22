export type Production = {
  slug: string;
  title: string;
  year: string;
  role: string;
  venue: string;
  image: string;
};

export const productions: Production[] = [
  {
    slug: "hamlet",
    title: "Hamlet",
    year: "2025",
    role: "Hamlet",
    venue: "Volksbühne Berlin",
    image: "/images/actor-hamlet.png",
  },
  {
    slug: "the-father",
    title: "The Father",
    year: "2024",
    role: "The Captain",
    venue: "Deutsches Theater",
    image: "/images/actor-the-father.png",
  },
  {
    slug: "richard-iii",
    title: "Richard III",
    year: "2023",
    role: "Richard III",
    venue: "Schaubühne Berlin",
    image: "/images/actor-richard-iii.png",
  },
  {
    slug: "woyzeck",
    title: "Woyzeck",
    year: "2022",
    role: "Woyzeck",
    venue: "Thalia Theater Hamburg",
    image: "/images/actor-woyzeck.png",
  },
  {
    slug: "the-crucible",
    title: "The Crucible",
    year: "2021",
    role: "John Proctor",
    venue: "Residenztheater München",
    image: "/images/actor-the-crucible.png",
  },
  {
    slug: "ghosts",
    title: "Ghosts",
    year: "2020",
    role: "Oswald Alving",
    venue: "Burgtheater Wien",
    image: "/images/actor-ghosts.png",
  },
];

export type PerformanceReel = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const performanceReels: PerformanceReel[] = [
  {
    slug: "drama-classical",
    title: "Drama & Classical Reel",
    description: "Highlights from Hamlet, Richard III, and Woyzeck (2021-2025)",
    image: "/images/actor-reel-drama.png",
  },
  {
    slug: "contemporary-stage",
    title: "Contemporary Stage Reel",
    description:
      "Monologues and physical performance highlights from modern dramatic plays",
    image: "/images/actor-reel-contemporary.png",
  },
];
