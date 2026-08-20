# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # next dev — http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # bare `eslint` (eslint-config-next core-web-vitals)
```

There is no test suite and no test runner configured. `playwright` and `sharp`
are devDependencies left over from the Figma/visual-QA tooling described below.

## Stack constraints

- **Next.js 16 App Router, plain JavaScript — no TypeScript.** `jsconfig.json`
  maps `@/*` → `./src/*`.
- **Bootstrap 5 CSS** is imported in `src/app/layout.js` and used for its grid
  and utility classes. `react-bootstrap` components are used only where they
  earn it — currently `Table responsive`, which is what makes the package
  sheets scroll horizontally without any hand-written JS.
- **One `.module.css` per component**, colocated. No global stylesheet other
  than `src/app/globals.css`.
- Animation via `motion/react`; sliders via `swiper/react`; icons via
  `react-icons`. All images go through `next/image` — there are no raw `<img>`
  tags and new code should keep it that way.

## Architecture

### Routes

| Route | File | Composition |
| --- | --- | --- |
| `/` | [src/app/page.js](src/app/page.js) | ~18 section components stacked in order |
| `/packages` | [src/app/packages/page.js](src/app/packages/page.js) | `PackageHero` + `PackagesTableSection`, then `Footer` — the frame has nothing else |
| `/packages/[slug]` | [src/app/packages/[slug]/page.js](src/app/packages/[slug]/page.js) | `SinglePackageHero` + `SinglePackageSection`, then `Footer` — prerendered via `generateStaticParams` |

Pages are server components that export `metadata`; nearly every section
component is `"use client"`. `TopBar`/`Header`/`FinalCta`/`Footer` are repeated
per-page rather than hoisted into a shared layout — a new page must include
them itself.

### Content lives in data, not markup

[src/data/site.js](src/data/site.js) (~980 lines) exports one named const per
home-page section (`heroSlides`, `coreServices`, `caseStudies`, `whatWeDo`,
`toolTabs`, `processSteps`, `testimonials`, `faqs`, `footer`, …) plus contact
details in `site` and the full navigation tree in `navItems`. **Copy changes
belong here, not in components.**

`navItems` is built with local helpers at the top of the file — `lines()` splits
a newline string into link labels, `group(heading, items)` makes a mega-menu
column, `tab()` makes a tabbed mega-menu panel and attaches its image from the
`megaImages` map. Follow those helpers when adding menu entries.

A menu line is `"Label"` or `"Label|/href"`; `lines()` splits it into
`{ label, href }` and everything without an explicit href stays a `#`
placeholder. The Packages menu is currently the only one wired to real routes.

[src/components/Header.js](src/components/Header.js) renders that tree. Despite
what the README says, desktop mega-menus open on **click** of the chevron
button, not on hover. Mega-menu column counts are hardcoded per top-level label
in `getColumnCount()` — adding a nav item with a different column layout means
editing that function.

### Packages

All package content lives in [src/data/packages.json](src/data/packages.json) —
a deliberately API-shaped document (16 packages, their plan prices, and a
section/row feature matrix each) so the backend can replace it wholesale.
Nothing imports it directly except [src/lib/packages.js](src/lib/packages.js),
which is the only module to change when the real API lands.

Cell shorthand inside a matrix row: `"c"` = green check, `"x"` = red cross,
`"startNow"` = the per-plan CTA, anything else prints as-is. Each section also
carries one `custom` string, rendered once as a badge with `rowSpan` down the
Custom column the way the design merges it.

The two sheets are styled differently on purpose, each to its own frame. The
overview (`PackagesOverview`) is a ruled grid on white with a grey Services
column; the single-package sheet (`PackageMatrix`) has **no rules at all** —
rows alternate `#f0f0f2` / `#ffffff`, each section opens with a full-width red
band spanning all eight columns, and idle control tabs are solid `#0c0c0c`
rather than grey (`PackageControls` takes `tone="dark"` for this).

**The single-package frame shows no prices** — its header is just the plan
names — so `PackageMatrix` takes no pricing options. The billing and currency
tabs on that page therefore have nothing to drive; they are in the frame, so
they are on the page.

Prices are stored **once**, as a base monthly INR figure per plan.
`computePrice` in `src/lib/packages.js` derives everything shown from the
billing period (months x a discount) and the currency (an FX rate plus
`roundToNice`, which snaps converted values so they read as quoted prices
rather than conversion artefacts). Add a currency or a billing period by adding
a row to the JSON — no component changes.

**Startup / Corporate / Enterprises are not filters.** They are `planGroups` in
the JSON: column-group headers that span the plan columns they name (3 / 3 / 1),
matching the frame, where the "Startup Business" slab sits exactly over the
Starter–Accelerator header group. Only billing period and currency are
selectable.

`usePackageOptions` holds the billing/currency pair; both `PackagesOverview`
(all packages x all plans) and `PackageMatrix` (one package in full) take it
verbatim.

Both tables set `table-layout: fixed`, which takes column widths from the first
row — and the first row is the spanning group row. Widths therefore live in a
`<colgroup>`; putting them back on the `<th>` classes silently collapses the
first column.

Below 992px an 8-column sheet cannot be made readable by scrolling, so both
tables re-project the same data as one plan at a time behind a plan picker.
Above it, `Table responsive` scrolls horizontally with the first column pinned
via `position: sticky`.

`PackageControls` is inset from the left by the Services column width because
the frame starts the billing/currency bars at the plan columns they price, not
at the table's left edge. On `/packages` the service name is the link through
to `/packages/[slug]`.

### Design tokens and layout

All brand colours, neutrals, radii and the type scale are CSS custom properties
on `:root` in [src/app/globals.css](src/app/globals.css) (`--red`, `--ink`,
`--fs-h2`, `--radius-pill`, …). Use the variables rather than literal hex.

`globals.css` also **overrides Bootstrap's `.container`** to `max-width: 1630px`
with 55px side padding (16px under 576px). The README's mention of 1720px refers
to `--container`, which is now only a token. Layout breakpoints in use: 1300
(nav → drawer), 1200, 992 (package sheets → plan picker), 768, 576.

Bootstrap's `.table > :not(caption) > * > *` sets cell padding and borders at
the same specificity as a CSS-module class, so the package tables scope their
cell rules under a doubled class (`.table.table .cell`) to win without
`!important`.

The package pages add their own token block at the bottom of `globals.css`.
Every size there is fluid, with the `vw` term set so it equals the Figma px at
the container via `--pkg-u` (one Figma pixel expressed in our 1520px content
width, against the design's 1717px) — that is how the 1920 artboard is scaled
to the ~1324px working width. The table scale deliberately runs ~12% under the
artboard: 24px cell copy reads oversized once the sheet is in the page.

Two global rules apply to everything: a `prefers-reduced-motion` block that
flattens all animation/transition durations, and a universal
`transition: all .3s` + red `:focus-visible` outline on `a, button, input,
textarea, select`.

The horizontal-overflow guard sits on `<html>` only. Putting `overflow-x` on
`<body>` as well makes body its own scrollport and silently disables
`position: sticky` for every descendant. Per-component button animations build on the shared keyframes
at the bottom of `globals.css` (`buttonHoverLift`, `iconBounce`, `shimmer`, …);
[BUTTON_ANIMATIONS_SUMMARY.md](BUTTON_ANIMATIONS_SUMMARY.md) inventories which
component uses which.

### Shared primitives (`src/components/ui/`)

- `Reveal.js` — the standard fade-and-rise on scroll (`motion/react`,
  `whileInView`, `once: true`). Used by ~18 sections; reach for this by default.
- `SectionTitle.js` (`ruled` adds the red bars either side, `onDark` flips
  them), `SectionLabel.js`, `ArrowButton.js`, `Marquee.js` (renders children
  twice, duplicate `aria-hidden`, for the infinite logo strips).

`src/components/ScrollReveal/` is a second, IntersectionObserver-based reveal
with named animation variants. It is only consumed by
`GrowthEcosystemSection.js`, which is **not imported anywhere** — the live venn
diagram is `Ecosystem.js` (whose default export is also named
`GrowthEcosystem`, imported under that alias in `page.js`). Don't confuse the
two.

## Figma provenance

The design is a Figma file (node `585:1982`, 1920px desktop) and comments
throughout the CSS reference it. Several section backgrounds are exported as
saturated source art and re-tinted with gradient overlays in the relevant
`.module.css` — those overlays are marked with comments and are deliberate, not
mistakes.

`README.md` documents a `scripts/*.mjs` toolchain (`figma-fetch`, `figma-text`,
`figma-assets`, `shoot`, `overflow`, …) that **no longer exists in the repo**;
only the `FIGMA_TOKEN` in `.env.local` remains. Treat that README section as
historical unless the scripts are restored. Shipped assets are pre-optimised
WebP in `public/images/` (plus emoji-named PNGs under `public/icons/`).

## Known-unwired

`FinalCta`'s contact form calls `preventDefault()` and posts nowhere. Nav links,
blog post links and pricing CTAs are `#` placeholders.
