# TODO — Listado de acciones

Fuente única de tareas pendientes. Cada línea es una acción a ejecutar. Antes de programar,
mirar aquí. Al terminar una, marcar `[x]` con nota de qué se hizo. Lo nuevo entra **antes** de
implementarse.

Prioridad: 🔴 alta · 🟡 media · 🔵 baja/limpieza.

---

## Mobile

- [x] 🔴 **Rediseñar el Nav para `<=560px`.** Menú colapsable nativo `<details>` (☰/✕, 0 JS),
  links en dropdown bajo la barra. `src/components/Nav.astro`
- [x] 🟡 **Ocultar `.about-illu` (hámster) en mobile.** `display:none` + grid-areas sin "illu".
  `src/components/Home.astro`
- [x] 🟡 **Other Projects alineación.** Causa raíz: `<ol>/<ul>` heredaban `padding-left:40px` del
  navegador. Fix global `:where(ul[class],ol[class]){padding:0}` en `global.css` (arregla además
  focus-cards/stats/tags). Respeta la lista de prosa sin clase de fragments.
- [x] 🔴 **Timeline en mobile respira:** año arriba, sin spine ni nodo, card a todo el ancho.
  `src/components/Home.astro`. Desktop (spine + nodos) verificado intacto a 1280px.

## General / diseño

- [x] 🔴 **Título de sección oculto tras el header.** Secciones más altas que el viewport
  fijan su top a y=0 (section-jacking), y el `padding-top` de `.block` (`clamp(40px,6vh,88px)`)
  caía por debajo del nav fijo de 64px → título tapado. Suelo del pad top subido a
  `clamp(88px,8vh,104px)`. Verificado: título de "Otros proyectos" a 88px. `src/components/Home.astro`
- [x] 🟡 **Experiencia data-driven.** Timeline hardcodeada + 16 claves `exp.*` en `ui.ts` →
  un solo array `ui.exp` por idioma (patrón de `focus`/`stack`/`stats`; clave `exp`, no `experience`,
  que ya es el título de sección). Añadir experiencia = añadir un objeto
  `{ year, title, role, points[], tags[] }` en ES y su espejo EN. `src/components/Home.astro`, `src/i18n/ui.ts`.
- [x] 🟡 **Añadida experiencia "Espai Casa Sagnier" (2026–act.)** — profesor de Unity, taller
  extraescolar 12–17. ES + EN. Al ser 3 entradas ya no cabían en el snap 100vh en una columna:
  **timeline a 2 columnas en ≥860px** (spine/nodos fuera ahí), cards más densas. Verificado que
  cabe con aire a 720px (14px) y 800px (75px). Bajo 860px sigue el spine vertical.
  `src/components/Home.astro`. Ceiling: ~5-6 experiencias llenarán 3 filas; entonces paginar o
  reducir a home-teaser (2 últimas) + página `/experience` propia.

- [x] 🔴 **Cards de juego legibles:** barra frosted lower-third (dark + blur) tras el texto, título
  en blanco (antes heredaba `--head` oscuro → ilegible), tags claras. `src/components/Carousel.astro`
- [x] 🟡 **Quitados los 3 ticks de My CV** (`.cv-list` + data `cvList` + CSS). `src/components/Home.astro`

## i18n

- [x] 🔴 **i18n completa: generadas las 6 fichas EN** (`src/pages/en/games/*`, `src/pages/en/projects/*`)
  con copy traducido y links `/en`. El toggle resuelve en ambos sentidos (no más 404).
- [x] 🟡 **Listados + home EN enlazan a fichas EN.** Listados globean fichas EN + `base="/en/..."`.
  Home globea por idioma (`pick()`) y usa `base={\`${L}/...\`}`. `ProjectList` ahora acepta `base`.
- [x] 🟡 **Tags de Experiencia traducidas:** movidas a `ui.expTags` por idioma. `src/components/Home.astro`

## Contenido / placeholders

- [x] 🟡 **Links del Footer reales** (GitHub/LinkedIn de Jordi). `src/components/Footer.astro`
- [ ] 🟡 **Rellenar el contenido real de las fichas** (copy, rol, equipo, fechas, capturas; solo Pipo
  tiene vídeo). Recordar: editar la ficha ES **y su espejo EN**. Marcado `ponytail:` en cada ficha.
  `src/pages/games|projects/<slug>.astro` + `src/pages/en/...`

## Deploy — GitHub Pages

- [x] 🔴 **Migrado de Vercel a GitHub Pages.** Repo de usuario `jordiiplanass.github.io`
  → sirve en la raíz, así que **sin `base`** y sin tocar los ~26 hrefs absolutos ni `toggleLangHref`.
  `site: 'https://jordiiplanass.github.io'` en `astro.config.mjs`.
- [x] 🔴 **Workflow `.github/workflows/deploy.yml`** (`withastro/action@v3` + `actions/deploy-pages@v4`),
  push a `main`. En Settings → Pages hay que poner Source = **GitHub Actions** (paso manual, una vez).
- [x] 🟡 **Dev toolbar de Astro desactivado** (`devToolbar: { enabled: false }`). Era la barra flotante
  de abajo; solo salía en `astro dev`, nunca en el build. Verificado que ya no aparece.
- [x] 🟡 **`public/.nojekyll`** para que Pages no se coma `_astro/` si algún día se sirve desde rama.
- [x] 🟡 **Higiene de repo:** `.gitignore` con `J-Icon-2.af` (4,6 MB binario Affinity),
  `font-preview.html`, `**/.DS_Store` y `.claude/settings.local.json`; `.DS_Store` borrados.
- [x] 🔵 **README.md** con stack, comandos, estructura y cómo se despliega.
- [x] 🔵 **Página 404** (`src/pages/404.astro` → `dist/404.html`). Bilingüe en un solo archivo:
  la ruta rota no tiene locale del que tirar. Verificada en dev.

## Contenido — bloqueantes para publicar

- [ ] 🔴 **`public/cv.pdf` es un placeholder** (725 bytes, texto "CV placeholder - reemplaza este
  archivo"). Está enlazado desde el Nav y dos veces en la home. Sustituir por el CV real antes de
  compartir la URL.
- [ ] 🟡 **`public/textures/*.jpg` no se referencian desde `src`** (7 archivos). Borrar o usar.

## Limpieza

- [x] 🔵 **`ogl` quitado** de `package.json` + lockfile reconciliado (0 imports).
- [x] 🔵 **Handoff obsoleto borrado** (`.claude/handoffs/2026-06-17-*.md`).

---

## Hechas

_(vacío — mover aquí al marcar `[x]`)_
