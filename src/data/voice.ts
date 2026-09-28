export type VoiceSample = {
  slug: string;
  title: string;
  year: string;
  client: string;
  duration: string;
  /** Path under `public/` to the audio file; omit until the sample is delivered. */
  audio?: string;
};

export type VoiceCategory = {
  slug: string;
  title: string;
  samples: VoiceSample[];
};

export const voiceCategories: VoiceCategory[] = [
  {
    slug: "narration",
    title: "Narration",
    samples: [
      {
        slug: "rise-and-fall-of-empires",
        title: "The Rise and Fall of Empires",
        year: "2025",
        client: "Audible Original",
        duration: "0:45",
      },
      {
        slug: "german-romanticism-documentary",
        title: "German Romanticism Documentary",
        year: "2024",
        client: "ZDF Kultur",
        duration: "0:45",
      },
    ],
  },
  {
    slug: "commercials",
    title: "Commercials",
    samples: [
      {
        slug: "national-brand-campaign",
        title: "National Brand Campaign",
        year: "2025",
        client: "BMW Germany",
        duration: "0:45",
      },
      {
        slug: "precision-watch-series",
        title: "The Precision Watch Series",
        year: "2024",
        client: "A. Lange & Söhne",
        duration: "0:45",
      },
    ],
  },
  {
    slug: "audiobooks",
    title: "Audiobooks",
    samples: [
      {
        slug: "the-magic-mountain",
        title: "The Magic Mountain (Thomas Mann)",
        year: "2025",
        client: "S. Fischer Verlag",
        duration: "0:45",
      },
      {
        slug: "the-trial",
        title: "The Trial (Franz Kafka)",
        year: "2023",
        client: "Der Audio Verlag",
        duration: "0:45",
      },
    ],
  },
  {
    slug: "dubbing",
    title: "Dubbing",
    samples: [
      {
        slug: "the-dark-knight",
        title: "The Dark Knight (German Release)",
        year: "2024",
        client: "Warner Bros. DE",
        duration: "0:45",
      },
      {
        slug: "macbeth-feature-dub",
        title: "Macbeth (Feature Film Dub)",
        year: "2023",
        client: "Universal Pictures",
        duration: "0:45",
      },
    ],
  },
];

/** Decorative waveform bar heights (px), from the Figma `AudioBar` layer. */
export const waveformBars = [
  6, 12, 9, 15, 6, 18, 12, 6, 15, 9, 12, 18, 6, 12, 9, 15, 6, 18, 12, 6, 15, 9,
  12, 18, 6, 12, 9, 15, 6,
];
