# VD Infotech

Home page built from the Figma design
[VD Infotech UI](https://www.figma.com/design/j6HaUxa67pcegiQ8FcU22Z/VD-Infotech-UI?node-id=585-1982)
(frame `585:1982`, 1920px desktop).

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router), **JavaScript** — no TypeScript |
| Layout / grid | Bootstrap 5 (CSS only) |
| Component styles | CSS Modules, one `.module.css` per component |
| Sliders | Swiper |
| Animation | Motion (`motion/react`) |
| Icons | react-icons |

Design tokens (brand reds, neutrals, type scale, container width) live as CSS
custom properties in [`src/app/globals.css`](src/app/globals.css). All page copy
lives in [`src/data/site.js`](src/data/site.js) so text edits never touch markup.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Page structure

Sections render in [`src/app/page.js`](src/app/page.js), each one a component in
[`src/components/`](src/components/):

`TopBar` → `Header` → `Hero` → `CoreServices` → `CaseStudies` → `Industries` →
`Consultation` → `StatsBar` → `WhatWeDo` → `Ecosystem` → `Tools` → `Process` →
`Experts` → `Clients` → `Testimonials` → `Pricing` → `Blog` → `Faq` →
`FinalCta` → `Footer`

Interactive pieces:

- **Hero** — 4-slide Swiper (cross-fade), each slide its own Figma frame with
  its own artwork, headline runs, feature pills and primary CTA
- **Case studies** — Swiper with custom prev/next arrows
- **What We Do** — 10 tabs driving one panel, with dot navigation
- **Tools** — 5 category tabs swapping the logo grid
- **Core services** — two states per card: dark scrimmed default, and a light
  hover revealing the description and service chips. `@media (hover: none)`
  makes the hover state the default on touch devices
- **Industries / Trusted by clients** — infinite CSS marquee
  ([`ui/Marquee.js`](src/components/ui/Marquee.js)), paused on hover, degrading
  to a plain scroller under `prefers-reduced-motion`
- **Process** — the dashed connector draws itself leg by leg in step order
  (01→04, down, back, 05→07) using clip-path reveals, so the dash pattern never
  stretches the way a scale transform would
- **Testimonials** — autoplaying Swiper carousel
- **FAQ** — accordion, one panel open at a time
- **Header** — hover dropdowns on desktop, slide-in drawer under 1300px

Animation is deliberately restrained: the Figma file carries no prototype
interactions, so every section uses the same fade-and-rise on scroll
([`src/components/ui/Reveal.js`](src/components/ui/Reveal.js)), and it is
disabled under `prefers-reduced-motion`.

## Responsive

Bootstrap's breakpoints, with the container max-width overridden to 1720px to
match the design's content width. Layout collapses at 1300 (nav → drawer), 1200,
992, 768 and 576. Verified free of horizontal overflow at 390 / 768 / 1200 /
1366 / 1440.

## Working with the Figma file

The design lives on a free Figma plan, so assets and values come from the REST
API rather than Dev Mode. Put your credentials in `.env.local` (git-ignored):

```bash
cp .env.local.example .env.local   # then fill in FIGMA_TOKEN
```

Token: Figma → *Settings → Security → Personal access tokens*, scope
**File content: read**.

### Scripts

```bash
# pull the design
node scripts/figma-fetch.mjs node 585-1982     # frame JSON  -> .figma/
node scripts/figma-fetch.mjs render 585-1982   # frame PNG   -> .figma/renders/
node scripts/figma-fetch.mjs images            # image fills -> .figma/images/

# inspect it
node scripts/figma-outline.mjs .figma/node-585-1982.json 1   # layer tree
node scripts/figma-tokens.mjs  .figma/node-585-1982.json     # colours + type
node scripts/figma-imagemap.mjs .figma/node-585-1982.json    # imageRef -> layer
node scripts/figma-text.mjs 1130-1123,647-1090               # copy, in order

# build the shippable asset set (public/images/*.webp)
node scripts/figma-assets.mjs .figma/node-585-1982.json

# visual QA
node scripts/slice.mjs .figma/renders/585-1982.png   # slice a tall PNG
node scripts/shoot.mjs http://localhost:3000 1600    # screenshot + slice the site
node scripts/overflow.mjs http://localhost:3000 390  # find horizontal overflow
```

`figma-text.mjs` is the workhorse for lifting copy — it prints every text layer
in document order with its size and weight, and costs one cheap `/nodes` call.
Prefer it over `render`: the image endpoint rate-limits hard and stays limited
for a while, so batch ids (`render a,b,c`) and expect to wait.

`figma-assets.mjs` is the one that matters for the repo: it takes the raw
`.figma/images` dump (~480 MB of PNGs), trims the transparent padding off logos,
resizes each asset to 2× the size its layer is actually displayed at, and writes
WebP into `public/images` — **1.7 MB total**. Re-run it if the design's imagery
changes; `.figma/` itself is git-ignored scratch space and safe to delete.

### Notes on fidelity

A few section backgrounds are exported from Figma as saturated source art that
the design then blends (the industries globe is blue in the export and red in
the design; the "what we do" network is blue and washed to near-white; the tools
backdrop is bright red and darkened). Those blends are reproduced as gradient
overlays in the relevant `.module.css`, each marked with a comment.

The growth-ecosystem venn diagram is built in CSS rather than exported as an
image, so it stays sharp and reflows into stacked cards under 992px.

## Packages

Both package screens are their Figma frames and nothing more — hero, table,
footer. `/packages` prices every package across every plan; clicking a service
name opens `/packages/[slug]`, that package's full feature sheet. All 16 slugs
are prerendered. Both read
[`src/data/packages.json`](src/data/packages.json) through
[`src/lib/packages.js`](src/lib/packages.js) — the JSON is shaped like the API
response that will eventually replace it, so swapping in a real backend is a
change to that one module.

Billing period and currency are live on `/packages`: prices are stored once as
a base monthly INR figure per plan and everything on screen is derived from it.
The single-package frame carries no prices, so those tabs are inert there.
Startup / Corporate / Enterprises are not controls on either screen — they are
headers spanning the plan columns they name, and the Custom column under
Enterprises is quoted rather than priced.

Only the SEO sheet carries real content lifted from the Figma frame; the other
fifteen matrices are plausible placeholder data in the same shape, ready to be
replaced row by row.

## Not wired up

The contact form in `FinalCta` prevents its default submit — point it at your
endpoint or form service. Blog posts, pricing CTAs and every nav link outside
the Packages menu are `#` placeholders pending the rest of the site.

The `scripts/*.mjs` Figma toolchain described above is not currently in the
repo; only `FIGMA_TOKEN` in `.env.local` remains.
