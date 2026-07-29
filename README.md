# Diernus — Site promocional

Página estática (SPA de página única) para promover o estúdio de design de mobiliário **Diernus**: desenho técnico, modelação 3D e ficheiros CNC.

## Design system

A portable, version-controlled distillation of the live site's brand, components and guidelines lives in [`Diernus Design System/`](./Diernus%20Design%20System/). Start at its [`INDEX.md`](./Diernus%20Design%20System/INDEX.md) — the full brand bible is in [`readme.md`](./Diernus%20Design%20System/readme.md). Use [`SKILL.md`](./Diernus%20Design%20System/SKILL.md) to wire it into an agent.

## Ficheiros

- `index.html` — o site completo (HTML + CSS + JS num só ficheiro; sem build, sem dependências além do Google Fonts).
- `l-se-01.html` — página-showcase "Da ideia à peça", em 4 capítulos de scroll:
  1. **A ideia** — colagem de esboços à mão (vitrine + cama A/B) com parallax;
  2. **A conceção** — moodboards em marquee contínuo (2 filas em sentidos opostos, aceleram com o scroll);
  3. **O desenho técnico** — ficha técnica, materiais, notas e revisões da folha L-SE-01;
  4. **A peça** — o sofá isométrico explode e volta a montar-se, preso ao scroll, com carimbo R3 no fim.
  Mesma linguagem visual e toggle PT/EN do site (partilha o `localStorage` `diernus-lang`). Um só ficheiro sem dependências + imagens em `assets/`.
  - O nome do cliente/projeto foi removido da página (aparece só como "projeto de hotelaria · confidencial"). Antes de publicar, confirmar na mesma que os esboços/moodboards podem ser mostrados como portefólio.
  - Falta: link de entrada a partir do `index.html` (ex.: um cartão "Ver o processo completo" na secção das pranchas).
- `assets/` — esboços (`sketch-*.jpg`) e moodboards (`mood-*.jpg`) usados na galeria (~1,6 MB no total).

## Ver localmente

Abrir `index.html` no browser, ou:

```bash
cd Diernus && python3 -m http.server 8080
# → http://localhost:8080
```

## Idiomas

- Português por omissão; toggle PT/EN no canto superior direito.
- A escolha fica guardada em `localStorage` (`diernus-lang`).
- Todos os textos vivem no dicionário `dict` no `<script>` no fim do `index.html` — editar lá.

## Antes de publicar (placeholders a substituir)

- [ ] **Email**: `estudio@diernus.com` está em 4 sítios (2 botões, 1 link, JSON-LD e no dicionário `_mailto`). Trocar pelo email real.
- [ ] **Pranchas**: os 4 desenhos são amostras ilustrativas (Cadeira Alva, Aparador Vau, Mesa Lote, Estante Sela). Substituir por desenhos/projetos reais quando existirem.
- [ ] **og:image**: criar uma imagem 1200×630 e adicionar `<meta property="og:image" content="https://diernus.com/og.png">`.
- [ ] **Nome do designer**: o texto nunca menciona o nome do irmão — adicionar se ele quiser aparecer.

## Publicar (opções, da mais simples à mais completa)

1. **Netlify Drop** — arrastar a pasta para https://app.netlify.com/drop. Grátis, 30 segundos.
2. **GitHub Pages** — repo `urchy/diernus` (usar o alias `github.com-urchy`!), Settings → Pages.
3. **Cloudflare Pages** — grátis, e é também um bom sítio para gerir o DNS de `diernus.com`.

Depois de publicado, apontar o domínio `diernus.com` para o host escolhido.
