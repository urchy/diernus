# INDEX — Diernus Design System

Quick navigation. For the full brand bible, read [`readme.md`](./readme.md). For agent use, read [`SKILL.md`](./SKILL.md).

## Entry points

| If you want to… | Start here |
|---|---|
| Understand the brand in 10 minutes | [`readme.md`](./readme.md) |
| Wire this skill into an agent | [`SKILL.md`](./SKILL.md) |
| Consume the system in HTML | [`styles.css`](./styles.css) → 7 token files |
| Consume the system in React/JSX | `components/**/*.jsx` |
| Copy an email signature | `templates/email/diernus-email.html` |
| Render a full technical drawing sheet | `templates/technical-sheet/TechnicalSheet.dc.html` |
| Recreate the marketing site | `ui_kits/site/index.html` (entry) + 9 `*.jsx` sections |
| See the visual system as a tile | [`thumbnail.html`](./thumbnail.html) |

## Tokens (the source of truth for all colour, type, spacing, etc.)

- [`tokens/colors.css`](./tokens/colors.css) — palette + semantic aliases
- [`tokens/typography.css`](./tokens/typography.css) — families, weights, scale, tracking
- [`tokens/fonts.css`](./tokens/fonts.css) — Google Fonts `@import`
- [`tokens/spacing.css`](./tokens/spacing.css) — gutter, scale, measures
- [`tokens/radius.css`](./tokens/radius.css) — radii (mostly 0)
- [`tokens/elevation.css`](./tokens/elevation.css) — paper shadows
- [`tokens/motion.css`](./tokens/motion.css) — easings, durations

## Components (22 primitives, grouped)

- **core/** — [`Button`](./components/core/Button.jsx) · [`Chip`](./components/core/Chip.jsx) · [`Wordmark`](./components/core/Wordmark.jsx) · [`Eyebrow`](./components/core/Eyebrow.jsx) · [`Stamp`](./components/core/Stamp.jsx) · [`HandNote`](./components/core/HandNote.jsx) · [`StatusDot`](./components/core/StatusDot.jsx) · [`LangToggle`](./components/core/LangToggle.jsx)
- **sheet/** — [`SectionHead`](./components/sheet/SectionHead.jsx) · [`SpecGrid`](./components/sheet/SpecGrid.jsx) · [`SpecCell`](./components/sheet/SpecCell.jsx) · [`TitleBlock`](./components/sheet/TitleBlock.jsx) · [`Checklist`](./components/sheet/Checklist.jsx) · [`RevisionItem`](./components/sheet/RevisionItem.jsx) · [`NoteCard`](./components/sheet/NoteCard.jsx) · [`MaterialCard`](./components/sheet/MaterialCard.jsx)
- **media/** — [`SketchCard`](./components/media/SketchCard.jsx) · [`MoodFigure`](./components/media/MoodFigure.jsx)
- **forms/** — [`Field`](./components/forms/Field.jsx) · [`SubmitButton`](./components/forms/SubmitButton.jsx) · [`FormFeedback`](./components/forms/FormFeedback.jsx) · [`TrustList`](./components/forms/TrustList.jsx)

Each component ships with a sibling `.d.ts` (props) and `.prompt.md` (when to use it, when not to). Each group has a `*.card.html` showing live states.

## Guidelines (20 specimen cards)

Type, colour, spacing, brand:
- `type-display.html` · `type-body.html` · `type-hand.html` · `type-mono.html` · `type-stat.html`
- `color-surfaces.html` · `color-blueprint.html` · `color-accents.html` · `color-neutral-scale.html` · `color-wood.html` · `color-materials.html`
- `spacing-scale.html` · `spacing-gutter.html` · `spacing-rules.html`
- `brand-elevation.html` · `brand-grid.html` · `brand-imagery.html` · `brand-motion.html` · `brand-radius.html` · `brand-wordmark.html`

## Templates (standalone, runnable)

- `templates/email/` — diernus-email.html (send-ready transactional email). **Has its own README explaining the webfont → system-font swap.**
- `templates/technical-sheet/` — full drawing sheet (title block, specs, materials, notes, stamp). `TechnicalSheet.dc.html` is the design component; `support.js` carries the runtime.

## UI kit (`ui_kits/site/`)

A full static-site recreation of `diernus.com` using the system:
- `index.html` (entry) + 9 `*.jsx` sections: `Hero`, `ChapterBand`, `SketchGallery`, `MoodMarquee`, `TechnicalSheet`, `ContactSection`, `SiteFooter`, `TopBar`, `LegalPage`.

## Assets (12 files, ~1.6 MB)

`assets/` mirrors the live site's media folder:
- 4 hand-sketch scans (`sketch-*.jpg`)
- 8 moodboard photos (`mood-*.jpg`)
- 1 OG image (`og-image.png`, 1200×669)

## What this folder is NOT

- **Not a npm package.** No `package.json`, no build. Drop the `styles.css` `@import` block into any HTML file and you're done.
- **Not a Figma file.** Components are real CSS + React + HTML, not design tokens in a tool.
- **Not the source of the live site.** `Diernus/index.html` is. This folder is the **portable, version-controlled distillation** of it.
