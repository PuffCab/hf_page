@AGENTS.md

# CLAUDE.md — hf-page

Portfolio website for **Hendrick Flacke** — a theatre and voice artist (actor · playwright · director · voice artist).
This project is standalone and unrelated to the Luzterra codebase.

---

## Design source

- **Figma file:** `HF_page` — file key `hBVb1ciDdbQgqvz31Qmtm4`
  (`https://www.figma.com/design/hBVb1ciDdbQgqvz31Qmtm4/HF_page`)
- One page ("Page 1", node `0:1`) with 6 full-page frames:

  | Node ID | Frame | Route (planned) | Content |
  |---------|-------|-----------------|---------|
  | `3:9`   | `landing-home` | `/`          | Hero: full-bleed B/W portrait, stacked serif "HENDRICK FLACKE", tagline |
  | `3:102` | `actor`        | `/actor`     | Selected stage productions — credit cards (Hamlet 2025, The Father 2024, Richard III 2023) |
  | `3:216` | `playwright`   | `/playwright`| Original texts & dramaturgy — published works (The Threshold 2025, Silencer 2023) |
  | `3:316` | `director`     | `/director`  | Theatrical choreography & staging — directorial résumé |
  | `3:410` | `voice-actor`  | `/voice`     | Narration, audiobooks & commercials — repertoire cards with waveform players |
  | `3:773` | `bio`          | `/bio`       | "The man behind the dramaturgy" — pull quote, portrait |

- Nav (inner pages): Home · Actor · Playwright · Director · Voice · Bio
- The file defines **no Figma variables/tokens** — colors and type are raw values on layers.
  Pull exact values per frame with the Figma MCP `get_design_context` before building each page.

---

## Visual direction

- Dark, editorial, high-contrast. Near-black backgrounds, off-white text.
- Large **serif display** typeface for headings; **monospace** eyebrow labels (e.g. `// THEATRE CREDIT SUMMARY`).
- Cinematic black-and-white photography.
- Restrained motion; content-first.

---

## Tech stack

| Concern    | Choice                              |
|------------|-------------------------------------|
| Framework  | Next.js 16 (App Router) + TypeScript |
| Styling    | Tailwind CSS v4 (PostCSS)           |
| Package mgr| pnpm                               |
| Linting    | ESLint (`eslint-config-next`)       |

> Next.js 16 has breaking changes vs. older versions — see `@AGENTS.md` and
> `node_modules/next/dist/docs/` before writing framework code.

---

## Commands

```bash
pnpm dev      # dev server at localhost:3000
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # ESLint
```

---

## Structure

- `src/app/` — App Router pages and layouts; `globals.css` holds the Tailwind import + `@theme` design tokens
- `src/components/` — shared components (`site-header`, `site-footer`, `section-heading`, `icons`)
- `src/components/<page>/` — sections specific to one page (e.g. `src/components/home/`)
- `src/data/` — typed content modules (`home.ts`: disciplines, press)
- `src/lib/` — `utils.ts` (`cn()`), `site.ts` (nav links + site config)
- `public/images/` — Figma-exported raster assets; `public/` root for favicon etc.

Design tokens (Tailwind utilities): `bg-ink` `bg-surface` `border-line` `text-fg` `text-muted` `text-faint`;
fonts `font-serif` (Cormorant Garamond) `font-sans` (Geist) `font-mono` (Geist Mono).

The site-wide `<SiteFooter />` lives in the root layout. `<SiteHeader />` is rendered per-page
(the landing page runs the hero full-bleed above it; inner pages put it first).

---

## Conventions

- Server Components by default; add `"use client"` only for interactivity (waveform players, nav menu).
- Files: `kebab-case.tsx`. Components: `PascalCase`.
- Compose classes with a `cn()` helper; no string concatenation.
- Content (credits, works, VO reel) lives in typed data modules, not inline JSX.
