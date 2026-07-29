# Email template — Diernus

`diernus-email.html` is a **send-ready, fully self-contained HTML email**. Open it, copy the whole file, paste it into Resend / Mailchimp / your ESP. Nothing to build, nothing to link.

It is a plain `.html`, not a `.dc.html`, on purpose: a Design Component loads a runtime script and external stylesheets, and neither survives an email client. This file must stay standalone.

## What it is
A **"folha validada"** notification — the revision-approved email a client gets when a drawing sheet is signed off. Sections, top to bottom:

1. Hidden preheader (~85 chars) — previews next to the subject line.
2. Blueprint header bar — `DIERNUS` wordmark (amber) + status label.
3. **Title block** — Folha / Escala / Revisão / Data, ruled, mono.
4. Kicker + uppercase headline + italic lede.
5. Three-cell **spec row** (ruled, not gapped).
6. **List of materials** — 34px CSS colour swatches + code + name.
7. A **production note** in the 2px graphite outline box.
8. Bulletproof cobalt CTA + italic micro-copy.
9. The **R3 · VALIDADO** stamp, right-aligned.
10. Blueprint footer — contact, postal address, unsubscribe.

## Rules it follows
- 600px centred wrapper, nested `role="presentation"` tables, single column.
- Every style inlined. The `<head>` `<style>` carries only the mobile media query.
- No images, no JavaScript, no external CSS. Every visual is a coloured table cell, border or type — so nothing breaks when images are blocked and there is nothing to host.
- `mso-line-height-rule:exactly` on every text block; explicit widths on every cell.
- `color-scheme: light dark`; no pure black or pure white grounds.

## Font substitution ⚠
Email clients cannot load webfonts, so the brand faces are swapped for the nearest email-safe stacks:

| Brand | In email |
|---|---|
| Figtree (display + body) | `Arial, Helvetica, sans-serif` bold |
| IBM Plex Mono (annotation) | `'Courier New', Courier, monospace` |
| Caveat (handwriting) | **omitted** — no safe fallback, so the hand-note is dropped rather than faked |

Letterspacing is hand-tuned in px to keep the mono voice reading right in Courier.

## Swapping the content
Everything is literal text — edit in place. The parts most likely to change per send: the header status label, the four title-block values, the headline, the spec row, the material rows, the note, the CTA href, and the stamp. Keep `·` as the separator and keep all mono strings uppercase.
