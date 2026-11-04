# Maxim Tokinlo — Portfolio

Personal portfolio of **Maxim Tokinlo**, full-stack developer based in Benin and founder of Ghost.Technologies.
Available in **French, English and Finnish**, with **light and dark** themes.

## Stack

- [Astro](https://astro.build) 7 — static site, zero JavaScript by default
- TypeScript (strictest mode), checked on every build
- Content collections with Zod schemas for projects (one Markdown file per project and per language)
- Self-hosted fonts: Geist and Instrument Serif
- Optimised images (WebP, responsive sizes) through `astro:assets`

## Features

- **Three languages** under `/fr/`, `/en/`, `/fi/`. The root page picks the visitor’s language
  (previous choice, then browser languages, then French). Switching language keeps the visitor on the
  same section of the page, and the choice is remembered.
- **Light and dark themes**: follows the system setting until the visitor chooses, applied before the
  first paint (no flash), remembered across visits.
- **Refined motion**: line-by-line title reveal, self-drawing constellation, scroll-driven reveals
  (CSS only, with a small IntersectionObserver fallback), native cross-page transitions.
  Everything is disabled when the visitor asks for reduced motion.
- **Accessibility**: skip link, keyboard focus styles, labelled controls, 44 px touch targets,
  contrast checked in both themes.
- **SEO**: canonical and `hreflang` links, sitemap, Open Graph tags.

## Getting started

Requires Node.js 22.23.4 or later.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check, then build to dist/
npm run preview   # serve the built site
```

## Project structure

```
src/
├── components/          # Header, theme toggle, project cards, constellation…
├── content/projects/    # fr/, en/, fi/ — one Markdown file per project
├── i18n/                # languages, interface strings, helpers
├── layouts/Base.astro   # <head>, theme bootstrap, reveal fallback
├── pages/
│   ├── index.astro      # language detection
│   └── [lang]/          # localised pages
└── styles/global.css    # design tokens (light/dark), base styles, motion
```

## Adding or translating content

- **Interface text**: `src/i18n/ui.ts`. French is the source; English and Finnish must define exactly
  the same keys, or `npm run build` fails.
- **A project**: add `src/content/projects/<lang>/<slug>.md` for each language. A missing translation
  falls back to French and prints a warning during the build.

## Deployment

Static output, deployable as is on Vercel, Netlify or GitHub Pages.
Update `SITE_URL` in `astro.config.mjs` once the custom domain is live.

---

Designed and built by Maxim Tokinlo · [LinkedIn](https://www.linkedin.com/in/maxim-tokinlo-098915247) · [GitHub](https://github.com/maximghost)
