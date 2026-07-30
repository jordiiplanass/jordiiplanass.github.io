# Portfolio — Jordi Planas

Portfolio de game programmer. Sitio estático en **Astro 5**, bilingüe (ES / EN), con scroll
"section-jacking" vía **Lenis**.

Publicado en **https://jordiiplanass.github.io**

## Stack

- [Astro 5](https://astro.build) — output estático, sin adapter ni framework de UI.
- [Lenis](https://lenis.darkroom.engineering) — scroll programático suave.
- Tipografías: Cabinet Grotesk + General Sans (Fontshare CDN).

Sin más dependencias, a propósito.

## Comandos

```bash
npm install      # dependencias
npm run dev      # servidor de desarrollo en localhost:4321
npm run build    # build estático a dist/
npm run preview  # sirve dist/ localmente
```

## Estructura

```
src/
  layouts/Base.astro      html/head, Nav + Footer, Lenis + reveal-on-scroll
  components/             Home (one-page), Nav, Footer, Carousel, ProjectList, VideoBlock, Gallery
  pages/
    index.astro           home ES
    games/, projects/     listados + una ficha por slug
    en/                   espejo EN completo
    404.astro             página de error (Pages la sirve como /404.html)
  i18n/                   diccionario es/en + helpers de idioma
  styles/global.css       variables de paleta, reset, utilidades
public/                   cv.pdf, icon.png, icons/, illustrations/, textures/
  media/<slug>/           recursos visuales por ficha: cover.jpg + gallery/
docs/recursos-visuales.md ratios, tamaños y cómo enchufar covers y galerías
```

Ojo: **todo lo que hay en `public/` se copia al build y queda público**. La documentación va en
`docs/`, no ahí dentro.

### Añadir un juego o proyecto

Crear `src/pages/games/<slug>.astro` exportando:

```js
export const meta = { slug, title, year, tags, summary, cover };
```

Los índices y la home hacen glob de esos archivos, así que la card aparece sola. **Crear también
el espejo en `src/pages/en/games/<slug>.astro`** o el toggle de idioma dará 404.

## Deploy

Push a `main` → GitHub Actions (`.github/workflows/deploy.yml`) construye y publica en Pages.

Es un *user site* (repo `jordiiplanass.github.io`), servido en la raíz del dominio, por eso
`astro.config.mjs` no lleva `base`. Si el sitio se mueve a un repo de proyecto habrá que añadir
`base` **y** reescribir todos los enlaces absolutos (`/games`, `/cv.pdf`, `/en/...`) más
`toggleLangHref` en `src/i18n/utils.ts`.
