import { defineConfig } from 'astro/config';

// Static site, deployed to GitHub Pages via .github/workflows/deploy.yml.
// User site (repo `jordiiplanass.github.io`) => served at the domain root, so NO `base`.
// If this ever moves to a project repo, set `base` here AND rewrite every absolute
// href ("/games", "/cv.pdf", "/en/...") plus toggleLangHref in src/i18n/utils.ts.
// ponytail: no adapter, static output covers a portfolio. Add one only if you need SSR/edge.
export default defineConfig({
  site: 'https://jordiiplanass.github.io',
  // The floating Astro toolbar at the bottom of the screen. Dev-only (never in the
  // build), but it overlaps the footer while working. Off.
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
