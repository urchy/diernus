# Diernus Design System

**Diernus** is a small furniture-drawing studio in Gandra, Portugal. It does not make furniture — it draws it: hand sketches, moodboards, 3D models, dimensioned technical sheets and CNC-ready cut files, for hospitality, residential and retail clients. Deliverables are dimensioned PDF, DXF, STEP, cut files and renders. Materials it works in daily: carvalho (oak), nogueira (walnut), birch ply, MDF, Valchromat.

The brand's whole visual argument is *the drawing sheet*: bone paper, graphite ink, cobalt dimension lines, mono annotations, a red approval stamp. Everything in this system exists to make a page look like something that came off a drafting table.

## Sources

Everything here was read from the mounted local codebase:

- `Diernus/index.html` — the live one-page site (HTML + CSS + JS in one file, no build). **Canonical source of truth** for colour, type, components and copy.
- `Diernus/index.legacy.html` — an earlier version of the same site. Different type stack (Archivo / Newsreader / IBM Plex Mono) and extra sections (services, drawing-sheet grid, studio, deliverables chips). Used for the `Button` ghost/primary spec, the title-block strip and the deliverable chips.
- `Diernus/privacidade|termos|cookies|aviso-legal/index.html` — four RGPD legal pages sharing a lighter document layout.
- `Diernus/assets/` — 4 hand-sketch scans, 8 moodboard photos, 1 OG image. All copied into `assets/`.
- `Diernus/README.md` — studio notes, publishing checklist, i18n conventions.
- Public site: `https://diernus.com` · contact `estudio@diernus.com` · client portal `https://portal.diernus.com`

No Figma file, no design-token file and no component library existed. The component inventory below was reverse-engineered from the CSS classes actually present in those pages.

---

## Content fundamentals

**Language.** Portuguese (pt-PT) first, English second, always both. Every string on every surface exists in a `dict` with `pt` and `en` keys; the choice persists in `localStorage` under `diernus-lang`. Never ship a Diernus surface that can't be flipped to EN.

**Person.** Second-person singular, informal — *tu*, not *você*. "Tens uma peça na cabeça?", "O teu espaço podia estar neste carrossel.", "Vamos falar do teu próximo projeto." The studio speaks as *nós*: "Nós pomo-la no papel.", "Lemos tudo · respondemos por email." (The legal pages switch to formal *o senhor / os seus dados* — that register is for legal text only.)

**Register.** Confident, dry, workshop-plain. Short declaratives. No adjectives where a number will do. The recurring rhetorical shape is *X, zero Y*:

> "Três materiais, zero ambiguidade."
> "Três revisões, zero adivinhas."
> "Desenhado ao milímetro, pesado ao quilo."

**Headings** are written sentence-case in source and uppercased by CSS. Keep them under ~6 words: "A folha decide", "A ideia começa num traço", "O que a oficina lê antes de cortar".

**Ledes** are always italic, one or two sentences, and always concrete: "Cotas, materiais e notas de produção num desenho que a oficina lê à primeira."

**Mono labels** are ALL CAPS with `·` as the separator: `CAPÍTULO 03`, `NOTA · MONTAGEM`, `L-SE-01 · SOFA AT LOWER SEATING AREAS`, `762 × 2032 × 762 MM · ESC 1:20`. The middle dot is the brand's punctuation mark — use it instead of an em dash, slash or bullet in mono strings.

**Numbers are the copy.** Millimetres, kilos, densities, revision numbers, scales. `Ø254`, `CMHR 40–45 KG/M³`, `ESC 1:5`, `R3`. Never round them for prettiness; never write "large" when you can write 2032 MM.

**Arrows, not icons.** CTA labels end in `→`: "Falar com o estúdio →", "Enviar mensagem →". `↻` is used once, for the re-spin control.

**No emoji. Ever.** There is not one in the entire codebase, and there should not be. Likewise no exclamation marks.

**Handwriting is the only warmth.** Exactly one Caveat line per page ("olá, vamos falar"), lowercase, tilted. It is the human aside beside an otherwise technical page.

**Legal/technical copy** cites its authority: "RGPD · ART. 13.º/14.º", "art. 6.º, n.º 1, al. b)". Placeholders that still need filling are bracketed uppercase: `[NIPC]`, `[MORADA COMPLETA, PORTUGAL]`.

---

## Visual foundations

### Colour
Two grounds, three accents, one ink.

- **Bone** `#EDEAE3` is the page. `#E4E0D6` alternates adjacent sections. White `#FFFFFF` appears *only* as photo mount stock.
- **Blueprint** `#12235B` / `#0B163E` is the inverse ground — used for the build stage, revision control, the contact panel and the footer. Type on it is **ink** `#EAF0FF`.
- **Graphite** `#23211C` is the only neutral ink. There is no grey scale — the neutrals are graphite at 60% (muted text), 35% (rules) and 15% (hairlines). That's the whole system.
- **Cobalt** `#2C49C7` = action + dimension lines. Hover `#3A58E0`, press `#1F38A6`.
- **Amber** `#E69658` = handwriting, warnings, form errors, trust bullets, footer link hover. Warm counterweight to cobalt.
- **Stamp red** `#B3232E` = approvals, revision numbers, production-note kickers, the "hot" chip. **Never** an error colour — errors are amber.
- **Wood ramp** (`#DCBC82 → #8F6C41`) shades isometric timber faces only.

### Type
Three faces, hard-separated by job.

- **Figtree** (300–900, variable) is both display and body. Display: 800–900, UPPERCASE, leading `.88–.95`, tracking `-.01em`. It is the only thing on the page allowed to be big.
- **IBM Plex Mono** is the annotation voice: every eyebrow, label, caption, chip, wordmark, sheet code and figure unit. Always uppercase, tracking `.10em–.22em`, sizes `.60–.80rem`.
- **Caveat** appears once per page, in amber, tilted.
- Body copy is 17px / 1.6. Ledes are italic. Muted body is graphite-60.

### Spacing & layout
One fluid gutter — `--pad: clamp(1.25rem, 4vw, 4rem)` — sets every page edge. Sections are `clamp(4rem,9vw,8rem)` tall vertically. Measures are capped in `em`: ledes 36em, prose 34em, headings 14em, legal documents 760px.

**Grids are ruled, not gutter'd.** The spec table and revision log use `gap: 1px` over a hairline background, so the "gaps" render as drawn rules. Never widen them.

### Backgrounds
Three, and only three:
1. Flat bone / bone-2.
2. **72px graph paper** — two 1px linear-gradients, faded out with `radial-gradient(120% 90% at 50% 10%, transparent 30%, var(--bone) 78%)`. Hero only.
3. **Blueprint gradient** `linear-gradient(180deg, #12235B, #0B163E)` for the build stage, with soft off-canvas amber and cobalt radial glows on the contact section.

No gradient is ever decorative-only, and there are no purple/violet gradients anywhere.

### Imagery
Warm, lamp-lit, slightly desaturated interior photography and pencil-on-paper sketch scans. **Never full-bleed, never filtered, never cropped to a shape.** Every image is *mounted*: white paper padding, 1px hairline border, a mono caption inside the mount, a paper shadow, and 0.4–1.4° of rotation. Sketch mounts get a translucent masking-tape strip across the top edge (amber or sage). Moodboards run in two opposing marquee rows that accelerate with scroll.

### Elevation
Paper, not material. `0 2px 6px rgba(35,33,28,.08), 0 26px 50px -26px rgba(35,33,28,.38)` — a tight contact shadow plus a long, soft cast. Cobalt buttons carry a coloured cast (`--shadow-blue`). The blueprint form panel uses a deep drop plus a 1px inner ink highlight.

### Borders & radii
Sheets, grids and tables are square (radius 0). Only these round: inputs `.3rem`, cards / note cards / submit button `.35rem`, stamp `.4rem`, contact panel `.6rem`, and pills (buttons, chips, lang toggle) `999px`. Checkbox squares are `2px`. Nothing else.

Note cards are the outlier: **1.5px solid graphite, no shadow** — they read as stamped annotations, not surfaces.

### Motion
Drafting, never bouncing.

- **Lines draw on**: `stroke-dasharray/offset` animated over `1.3s cubic-bezier(.6,0,.2,1)`, staggered `.11s` per element. The hero elevation takes `2.4s`.
- **Blocks reveal**: `opacity 0→1` + `translateY(18px)→0` over `.7s cubic-bezier(.2,.6,.2,1)`.
- **Assembly**: `.9s cubic-bezier(.55,0,.15,1)`.
- Nothing overshoots. No spring, no bounce, no scale-in from 0. Every animation is disabled under `prefers-reduced-motion`.

### Interaction states
- **Buttons**: hover lifts `-2px` and darkens cobalt to `#3A58E0`; press returns to `0` (or `+1px` for the submit). No scale.
- **Chips / nav links**: hairline border darkens to graphite, or picks up a cobalt underline. No fill change.
- **Paper cards**: hover straightens the rotation to 0°, lifts 8px, scales 1.015 and deepens the cast shadow. Moodboard tiles scale 1.04.
- **Inputs**: focus turns the border and a 2px bottom border cobalt and darkens the field background. Errors turn both amber.
- **Focus-visible** is a global `2px solid var(--cobalt)` at `3px` offset.

### Transparency & blur
Sparingly, and only on fixed/floating chrome: the top bar is `color-mix(in srgb, var(--bone) 88%, transparent)` + `blur(8px)`; the contact form panel is `4%` ink over blueprint + `blur(6px)`. Body content is never translucent.

### Fixed elements
The top bar is fixed/sticky with a 2px cobalt progress rail along its bottom edge that fills as the page scrolls and turns stamp-red at 100%. It carries the wordmark, chapter links, one compact CTA pill and the PT/EN toggle — always in that order.

---

## Iconography

**Diernus has essentially no icon set, and that is deliberate.** In the entire codebase there are three drawn glyphs, all hand-written inline SVG paths, all stroke-only in cobalt or graphite:

1. A **double chevron** (`M2 3 L7 9 L12 3 M2 12 L7 18 L12 12`) — the scroll cue.
2. A **checkmark** rendered as the text character `✓` inside a 2px-radius box, not an SVG.
3. A **rotate glyph** rendered as the Unicode character `↻` in a circular button.

Everything else that would be an icon elsewhere is instead **type**: `→` for forward actions, `·` as separator, `Ø` for diameter, `×` for dimensions, `↻` for reset. There is no icon font, no sprite sheet, no Lucide/Heroicons dependency, and **no emoji anywhere**.

The real "iconography" of the brand is **technical linework**: elevation drawings with dimension arrows, extension lines, dashed centrelines, hatched ground lines and mono part labels (`01 · ENCOSTO`, `CAVILHA Ø8`). Strokes are `2px` for outlines, `1px` for detail, `1px` dashed at 50% opacity for hidden edges, and `1.2px` cobalt at 90% for dimensions. Arrowheads are two short crossing strokes, not filled triangles. `vector-effect: non-scaling-stroke` throughout.

**When you need an icon in a Diernus design:** first ask whether a mono word will do (it usually will). If you genuinely need a glyph, draw it as stroke-only linework at 1–2px in the same drafting language — never a filled, rounded UI icon.

There is **no logo file**. The mark is the wordmark `DIERNUS` set in uppercase mono at `.14em` tracking — cobalt on bone, amber on blueprint. The only shipped brand image is `assets/og-image.png` (1200×669, wordmark on a dark blueprint ground with a technical chair drawing) and a favicon defined inline as a data-URI: a cobalt `#2C49C7` rounded square with a bone monospace **D**. Do not draw a symbol; set the name.

---

## Components

Twenty-two primitives, grouped by concern. Each has a sibling `.d.ts` (props) and `.prompt.md` (usage), and each directory has one `@dsCard` HTML showing its states.

**`components/core/`** — Button · Chip · Wordmark · Eyebrow · Stamp · HandNote · StatusDot · LangToggle

**`components/sheet/`** — SectionHead · SpecGrid · SpecCell · TitleBlock · Checklist · RevisionItem · NoteCard · MaterialCard

**`components/media/`** — SketchCard · MoodFigure

**`components/forms/`** — Field · SubmitButton · FormFeedback · TrustList

### Intentional additions
- **`TitleBlock`** — the ruled sheet-number/scale/revision strip. It exists as `.sheetbar` in `index.legacy.html` but was dropped from the current site; kept because it is the single most Diernus-specific layout device.
- **`Wordmark`** — not a component in the source (it is a bare `<a class="wordmark">`), promoted so consumers cannot accidentally invent a logo.

Everything else has a one-to-one counterpart in the source CSS.

---

## Index

```
styles.css              → @import list only; the single entry consumers link
thumbnail.html          → homepage tile
readme.md               → this file
SKILL.md                → Agent Skills wrapper

tokens/
  fonts.css             @import of Figtree + Caveat + IBM Plex Mono (Google Fonts)
  colors.css            base palette + semantic aliases
  typography.css        families, weights, fluid scale, tracking
  spacing.css           --pad gutter, scale, section rhythm, measures
  radius.css            radii (mostly 0)
  elevation.css         paper shadows, blurs
  motion.css            easings and durations

components/core|sheet|media|forms/
  <Name>.jsx  <Name>.d.ts  <Name>.prompt.md  + one *.card.html per directory

guidelines/             20 specimen cards — Colors, Type, Spacing, Brand

templates/
  technical-sheet/      Design Component — a full drawing sheet (title block, specs,
                        materials, notes, stamp), tweakable sheet no./scale/rev/date
  email/                diernus-email.html — send-ready HTML email ("folha validada"
                        notification). Standalone by design; see its README

ui_kits/site/           diernus.com recreation (index.html + 9 JSX screens/sections)

assets/                 4 sketch scans, 8 moodboards, og-image.png
```

## Caveats

- **Fonts load from Google Fonts, not local files.** The source site does the same, so there are no binaries to ship. If you need self-hosted webfont files, they must be added.
- **IBM Plex Mono is a partial substitution.** The live `index.html` declares `--mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace` (system mono); the legal pages declare `"IBM Plex Mono"` but never load it. This system loads IBM Plex Mono so the declared intent actually renders — if the studio prefers system mono, change `--font-mono` in `tokens/typography.css`.
- **The email template swaps the brand faces.** Email clients can't load webfonts, so Figtree → Arial/Helvetica and IBM Plex Mono → Courier New; Caveat is dropped entirely rather than faked. Details in `templates/email/README.md`.
- The isometric sofa build-stage animation and the 2D↔3D chair viewer in the source are large bespoke scripts. The UI kit reproduces the 2D technical drawing and the view toggle statically; it does not reimplement the 3D CSS-transform scene.
