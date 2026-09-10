export type Discipline = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
};

export const disciplines: Discipline[] = [
  {
    slug: "acting",
    title: "Acting",
    blurb:
      "Intense physical characterization from classic Shakespeare to visceral contemporary text.",
    image: "/images/discipline-acting.png",
  },
  {
    slug: "playwriting",
    title: "Playwriting",
    blurb:
      "Developing sharp, challenging modern plays that test the boundaries of human agency.",
    image: "/images/discipline-playwriting.png",
  },
  {
    slug: "directing",
    title: "Directing",
    blurb:
      "Curating precise, minimalist visual architectures and raw spatial choreography.",
    image: "/images/discipline-directing.png",
  },
  {
    slug: "voice",
    title: "Voice",
    blurb:
      "Commanding audiobooks, cinematic narration, and commercials with resonant gravitas.",
    image: "/images/discipline-voice.png",
  },
];

export type PressQuote = {
  quote: string;
  source: string;
  date: string;
};

export const press: PressQuote[] = [
  {
    quote:
      "Flacke holds the stage with a severe, electrifying restraint. His Hamlet is not just mad; he is mathematically precise.",
    source: "Der Tagesspiegel",
    date: "Nov 2025",
  },
  {
    quote:
      "In his dual role as director and playwright for 'The Threshold', Flacke demonstrates an uncompromising grasp of space and silence.",
    source: "Frankfurter Allgemeine Zeitung",
    date: "Jul 2024",
  },
  {
    quote:
      "A vocal instrument of exceptional grit and luxury. Flacke's reading of the prose brings an unsettling depth.",
    source: "Süddeutsche Zeitung",
    date: "Feb 2024",
  },
];
