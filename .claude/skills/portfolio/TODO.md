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
- [x] 🟡 **Carpetas de recursos visuales creadas**: `public/media/<slug>/{cover.jpg,gallery/}` para
  los 4 juegos, con `.gitkeep` (git no versiona carpetas vacías) y `docs/recursos-visuales.md` con
  ratios y ejemplos de uso. La guía va en `docs/`, no en `public/`: todo `public/` se copia al build
  y se publicaría en `/media/README.md`.
- [x] 🟡 **Override de cover por convención.** `coverFor()` en `src/lib/media.ts` lee
  `public/media/<slug>/cover.{png,jpg,jpeg,webp}` (PNG primero, case-insensitive) en tiempo de build;
  `Carousel.astro` lo antepone a `meta.cover`. Soltar el archivo basta: sirve home + `/games`, ES y
  EN, sin tocar código ni las dos fichas. URL con `?v=<mtime>` para evitar caché rancia.
  Verificado con PNG reales y comprobado el fallback al borrarlos.
- [x] 🟡 **Arte real puesto** (por Jordi): covers 3:4 exactos (2064×2752) en `cover/` y capturas en
  `gallery/` para pipo (4), fragments (8) y chrono-fish (4). `nachito-el-nacho` sigue sin nada.
- [x] 🔴 **`coverFor()` adaptado a la estructura real**: los covers llegaron como
  `media/<slug>/cover/<nombre>.png` (carpeta, nombre libre), no como `cover.png`. Ahora acepta las
  dos formas. Filtra por extensión para no servir un `.DS_Store` como `<img>`.
- [x] 🟡 **Galerías auto-enganchadas**: `galleryFor()` + `<Gallery slug label>`. Las 6 llamadas que
  estaban vacías ya tiran de carpeta, y se añadió la sección Galería a `chrono-fish` ES/EN, que tenía
  4 capturas y ninguna sección donde salir.
- [x] 🔴 **Rejilla de galería a `aspect-ratio: 16/9`.** Sin tamaño intrínseco las imágenes lazy
  colapsaban a **2px de alto** hasta cargar y la página saltaba. `Gallery.astro`.
- [ ] 🟡 **Comprimir los assets.** `public/media` pesa **17 MB**: covers PNG de 1,2–1,6 MB para
  pintarse a 300px, y capturas PNG de hasta 1,9 MB. La home se lleva ~4 MB solo en covers. Pasar las
  capturas a JPG 80% y bajar los covers a ~1200px de ancho. Decisión de Jordi, son sus fuentes.
- [ ] 🔵 **Título duplicado en las cards.** Los covers de fragments y chrono-fish llevan el título
  rotulado en el arte, y la card superpone otra vez el título en la barra inferior. Decidir si se
  oculta la barra cuando hay cover propio.
- [ ] 🔵 **Iniciales de `nachito-el-nacho` dan "Ne"** (primeras letras de "Nachito el"), que se lee
  raro. Coger iniciales de palabras significativas, o saltarse artículos. `Carousel.astro`.
- [ ] 🔵 **Extender `coverFor()` a `ProjectList`** si los proyectos van a llevar cover 16:10. Es una
  línea, pero hoy `liveops-unity` y `primeros-auxilios-vr` no tienen `cover` y siguen dependiendo de
  `meta` a mano (con el riesgo de ES/EN desalineados). Faltan también sus carpetas en `public/media/`.

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

- [x] 🔴 **CV real puesto** en `public/cv.pdf` (1 pág., 78 KB) sustituyendo el placeholder de 725 bytes.
  Los 3 enlaces (`Nav.astro`, `Home.astro` ×2) pasan de `download` a `download="Jordi_Planas_CV.pdf"`
  para que el archivo guardado no se llame `cv.pdf`.
- [x] 🔴 **Typo "Respida" → "Respira"** en el array `exp` de `Home.astro` (ES y EN). De paso, el
  bloque EN decía "Proyecto Respida" con "Proyecto" sin traducir → ahora "Respira Project".
- [ ] 🟡 **Cuadrar rol y fechas de Respira con el CV.** El CV dice *XR Developer Intern ·
  Sep 2025–Ene 2026*; la timeline dice *2025 · Lead Developer / Desarrollador principal*. Además el
  CV no incluye Espai Casa Sagnier, que sí sale en la web. Decidir qué versión manda. `Home.astro`.
- [ ] 🟡 **`public/textures/*.jpg` no se referencian desde `src`** (7 archivos). Borrar o usar.

## Limpieza

- [x] 🔵 **`ogl` quitado** de `package.json` + lockfile reconciliado (0 imports).
- [x] 🔵 **Handoff obsoleto borrado** (`.claude/handoffs/2026-06-17-*.md`).

---

## Hechas

_(vacío — mover aquí al marcar `[x]`)_
