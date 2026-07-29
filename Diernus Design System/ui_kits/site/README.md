# UI kit — diernus.com

A recreation of the Diernus one-page studio site (`Diernus/index.html`), rebuilt from the source CSS on top of this system's primitives. `index.html` is a click-through: the top-bar chapter links swap between four views.

| View | File | Source section |
|---|---|---|
| `home` | `Hero.jsx`, `ChapterBand.jsx`, `SketchGallery.jsx` | hero + Capítulo 01 · A ideia |
| `moods` | `ChapterBand.jsx`, `MoodMarquee.jsx` | Capítulo 02 · A conceção |
| `sheet` | `TechnicalSheet.jsx` | Capítulo 03 + ficha técnica + materiais + notas + revisões |
| `contact` | `ContactSection.jsx` | CTA / contact form (submits fake, shows the success banner) |
| `legal` | `LegalPage.jsx` | `/privacidade/` document layout |

Chrome: `TopBar.jsx` (wordmark, chapter links, CTA pill, PT/EN toggle, cobalt scroll rail) and `SiteFooter.jsx`.

**Not reproduced:** the scroll-driven isometric sofa build stage and the interactive 2D↔3D chair viewer. `TechnicalSheet.jsx` renders the L-CH-01 chair elevation statically with its view toggle in the 2D state.

The PT/EN toggle is present and stateful but only the PT strings are wired — the source keeps both in a `dict` object in `index.html`.
