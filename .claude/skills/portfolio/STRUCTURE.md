# Estructura

Vite + React 19 + TypeScript. Rutas con React Router (`App.tsx`): `/en?` hace el prefijo opcional,
un solo árbol sirve ES y EN.

```
src/
  main.tsx App.tsx           # entrada; rutas, <html lang>, scroll al cambiar de página
  content/
    types.ts                 # Section, Ficha, Entry
    index.ts                 # games, projects: glob de games/*.ts y projects/*.ts, orden por año desc
    home.ts                  # stack, focus, experience
    games/*.ts projects/*.ts # una ficha por archivo; el nombre del archivo es el slug
  i18n/
    types.ts                 # Lang, L, T, tr(es, en)
    ui.ts                    # strings de UI, todas con tr()
    useI18n.ts               # lang, l(), t(), to(), alt (el idioma sale de la URL)
  components/                # Nav Footer Btn Panel TagList SectionHead Block Carousel ProjectList
                             # Gallery VideoBlock Icon Rich; cada uno con su .module.css
    detail/                  # Detail, Section (switch por tipo), List, Cards
  pages/
    home/                    # Home, Hero, About, GamesSection, ProjectsSection, Experience, Cv
    Listing.tsx              # /games y /projects
    DetailPage.tsx           # /games/:slug y /projects/:slug
    NotFound.tsx
  hooks/useTyping.ts
  lib/                       # media.ts (covers y galerías), cx.ts, motion.ts
  media/<slug>/cover|gallery # recursos visuales
  styles/                    # tokens.css (variables), base.css (reset y utilidades globales)
public/                      # cv.pdf, icon.png, icons/, illustrations/
```

## Convención clave: fichas y cards autogeneradas

Cada ficha exporta por defecto un `Ficha` (`title, year, tags, summary, eyebrow?, lead?, sections[]`).
`content/index.ts` las carga con `import.meta.glob`. Añadir una = crear el archivo: aparecen la card en
la home y el listado, y la ficha en `/games/<slug>` y `/en/games/<slug>`. El botón "siguiente" de cada
ficha es la siguiente del listado.

Tipos de sección: `text`, `list`, `cards` (`label` para specs, `numbered` para pasos), `note`,
`video` (sin `youtube` muestra el placeholder), `gallery`.
