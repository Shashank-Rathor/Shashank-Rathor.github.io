# CLAUDE.md — Portfolio

React + Vite static portfolio for a Growth / Performance Marketing job
search, deployed to GitHub Pages. It already exists and already builds.
Do not rebuild or restructure it.

## Rules

- All copy lives in `src/content/*.js`. Never hardcode text into JSX.
- All colour lives in `src/styles/tokens.css`. Never hardcode a hex anywhere
  else.
- HashRouter is deliberate (GitHub Pages 404s on refresh with BrowserRouter).
  Don't change it.
- The Projects section is intentionally flat — no pin, no tilt, no paper.
  It has no adoption metrics and must not look like the case studies.
- Card tilt is removed under 720px and under `prefers-reduced-motion`.
  Keep that.
- Design language: cream wall, white paper sheets with red pins, yellow
  sticky notes, deep green accent `#1F6B4E`, Caveat for handwritten bits.
- Mobile-first. Recruiters open this on a phone.
- Run `npm run build` before telling the user anything works.
- Make one change at a time and show the diff. Don't batch edits across
  many files without asking.

## Placeholders

Anything in [SQUARE BRACKETS] in `src/content/` is unwritten copy awaiting
the owner. Never invent metrics, dates, company facts, post titles or URLs
to fill one in — ask instead. Every number on this site has to be true.
