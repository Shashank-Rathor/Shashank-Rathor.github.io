# Portfolio — Shashank

React + Vite, static build, deployed to GitHub Pages. No CMS, no backend,
no analytics dependency at build time.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the built output
```

## Before you deploy — 5 things

1. **`vite.config.js` → `base`.** Currently `'/portfolio/'`.
   - Project repo (`github.com/you/portfolio`) → `'/portfolio/'`
   - User site (`you.github.io`) → `'/'`
   Get this wrong and the CSS and JS 404 on the deployed site.
2. **`src/content/site.js`** — email, LinkedIn, GitHub, and `url` (the deployed
   address, used for OG tags).
3. **`public/documents/`** — drop your resume PDF in as `shashank-resume.pdf`,
   plus any case-study PRDs referenced in `caseStudies.js`.
4. **`public/og.png`** — 1200×630. This is the LinkedIn link preview image.
5. **Search for `[` in `src/content/`** — every remaining placeholder is in
   square brackets. Case study 02 is mostly unwritten.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds and publishes.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions.**

## How it's put together

```
src/
  content/      ← all copy lives here, as plain JS objects. Edit these, not JSX.
    site.js           name, links, stats, nav, stack
    caseStudies.js    both case studies + prev/next helpers
    capabilities.js   the three columns
    projects.js       projects.js / posts.js / certifications.js
  components/   ← presentational; they read props, never content files
                  (exceptions: Nav, Footer, Hero and StatStrip read site.js)
  pages/        Home, CaseStudyPage, NotFound
  styles/       tokens.css (the design system) + global.css
  lib/asset.js  prefixes public/ paths with the Vite base
```

**Adding a case study:** append an object to `caseStudies.js` with a new `slug`.
It appears on the home page and gets its own route at `/#/case-study/<slug>`
automatically. Prev/next follow array order.

**Changing the palette:** `src/styles/tokens.css`. `--accent` is deep green
(`#1F6B4E`); `--wall`, `--paper`, `--ink` and `--sticky` define the rest.
Nothing hardcodes a colour outside that file except a few rgba shadows.

## Decisions worth knowing

- **HashRouter, not BrowserRouter.** GitHub Pages serves static files, so a
  refresh on `/case-study/acquisition` would 404. URLs are `/#/case-study/...`.
- **Meta tags are set at runtime** by `components/Meta.jsx`. LinkedIn, Slack and
  Twitter execute JS when scraping, so previews work — but if you want
  guaranteed previews, pre-render with `vite-plugin-ssg` or paste static OG tags
  for the home page into `index.html`. The home page tags in `index.html` are
  already static for that reason.
- **Tilted cards are removed under 720px and under `prefers-reduced-motion`.**
  Rotation at phone widths causes horizontal overflow.
- **Projects are deliberately styled flat** — no pin, no tilt, no paper. They
  have no adoption metrics, and shouldn't look like the case studies.
- **Inline styles for layout, CSS file for the system.** Components stay
  self-contained so a design pass can be dropped on any one of them without
  hunting through a stylesheet.
