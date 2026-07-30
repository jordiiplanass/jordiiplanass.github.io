# Estructura

Astro 5, output estático. i18n nativo (`astro.config.mjs`): `es` por defecto (sin prefijo),
`en` bajo `/en`. Scroll = Lenis con "section-jacking" (un gesto = una sección) en `Base.astro`.

## Mapa

```
src/
  layouts/
    Base.astro          # html/head, fuentes Fontshare, Nav+Footer, ClientRouter (View Transitions),
                        # script global: Lenis section-jacking + reveal-on-scroll (IntersectionObserver)
  components/
    Nav.astro           # barra fija, links + toggle de idioma (toggleLangHref)
    Footer.astro        # copyright + redes (placeholders)
    Home.astro          # TODA la home one-page: hero, about, games, projects, experience, cv.
                        #   Strings UI por idioma en objeto `ui` inline + i18n/ui.ts
    Carousel.astro      # carrusel infinito de juegos (cards portrait, scale/fade por distancia)
    ProjectList.astro   # filas editoriales de proyectos (art panel + body, lados alternan)
    VideoBlock.astro    # embed YouTube para fichas
    Gallery.astro       # grid de capturas para fichas
  pages/
    index.astro                 # home ES -> <Home lang="es">
    games/
      index.astro               # listado juegos ES (glob de *.astro)
      <slug>.astro              # ficha bespoke por juego, exporta `meta`
    projects/
      index.astro               # listado proyectos ES
      <slug>.astro              # ficha bespoke por proyecto, exporta `meta`
    en/                         # espejo EN completo (mismo slug que ES, copy traducido)
      index.astro               # home EN -> <Home lang="en">
      games/index.astro + <slug>.astro     # listado + fichas juegos EN
      projects/index.astro + <slug>.astro  # listado + fichas proyectos EN
  i18n/
    ui.ts               # diccionario es/en (claves planas) + tipos
    utils.ts            # getLangFromUrl, useTranslations, toggleLangHref
  styles/
    global.css          # variables CSS (paleta), reset, .btn .panel .tag .sec-* .eyebrow, reveal
public/
  cv.pdf, icon.png
  icons/                # logos de stack (unity, csharp, cplusplus, unreal, androidstudio, git)
  illustrations/        # hamster.svg
  textures/             # jpgs (no referenciados desde src actualmente)
```

## Inventario de contenido

- **Juegos** (`pages/games/`): pipo-the-penguin (2026), fragments-of-the-abyss, chrono-fish (2023), nachito-el-nacho.
- **Proyectos** (`pages/projects/`): liveops-unity (2026), primeros-auxilios-vr.
- **Experiencia** (array `exp` por idioma en `Home.astro`): Espai Casa Sagnier (2026–act., Unity
  Instructor), Respira (2025, Lead Developer), Alioth (2021–22, Web Developer).

## Convención clave: cards autogeneradas

Cada ficha `<slug>.astro` exporta `export const meta = { slug, title, year, tags, summary, cover }`.
Los índices y la home hacen `import.meta.glob('.../*.astro', { eager:true })`, leen `m.meta`,
filtran y ordenan por `year` desc. Añadir una ficha = crear el archivo; la card aparece sola.
