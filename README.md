# Portfolio — Jordi Planas

Portfolio de game programmer. SPA en **Vite + React 19 + TypeScript**, bilingüe (ES / EN), scroll nativo.

Publicado en **https://jordiiplanass.github.io**

## Comandos

```bash
npm install     # dependencias
npm run dev     # servidor de desarrollo en localhost:5173
npm run build   # typecheck + build a dist/ (+ dist/404.html para las rutas profundas)
npm run preview # sirve dist/ localmente
```

`npm run build` incluye `tsc --noEmit`: si falta una traducción o una sección mal tipada, no compila.

## Estructura

```
src/
  content/    types.ts, home.ts, index.ts, games/*.ts, projects/*.ts   (todo el contenido, como datos)
  i18n/       types.ts (tr, L, T), ui.ts (strings de UI), useI18n.ts   (idioma según la URL)
  components/ Nav, Footer, Btn, Panel, TagList, SectionHead, Block, Carousel, ProjectList,
              Gallery, VideoBlock, Icon, Rich, detail/ (Detail + una pieza por tipo de sección)
  pages/      home/ (Hero, About, ...), Listing, DetailPage, NotFound
  hooks/      useTyping
  lib/        media.ts (covers y galerías por carpeta), cx.ts, motion.ts
  media/<slug>/cover/, gallery/   recursos visuales (se sueltan y aparecen)
  styles/     tokens.css, base.css
public/       cv.pdf, icon.png, icons/, illustrations/
```

## Añadir un juego o proyecto

Crear `src/content/games/<slug>.ts` (o `projects/`) con `export default {...} satisfies Ficha`.
El nombre del archivo es el slug. La card, el listado y la ficha aparecen solos, en ES y EN.
Cada texto que cambia de idioma va con `tr('español', 'english')`; un string suelto es un nombre propio.
Las imágenes van en `src/media/<slug>/cover/` (portada) y `gallery/` (capturas).

## Deploy

Push a `main` → GitHub Actions (`.github/workflows/deploy.yml`) construye y publica en Pages.
En Settings → Pages, Source = **GitHub Actions**.

Es un *user site* (repo `jordiiplanass.github.io`), servido en la raíz: `vite.config.ts` no lleva `base`.
GitHub Pages sirve `404.html` (copia de `index.html`) para cualquier ruta que no exista como archivo,
así que `/games/pipo-the-penguin` carga la SPA y el router resuelve la ruta.
