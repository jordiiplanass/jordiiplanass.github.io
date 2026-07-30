# Normas

Reglas claras para no romper la coherencia del proyecto.

## Contenido

- **Añadir un juego**: crear `src/pages/games/<slug>.astro` con `export const meta = { slug, title,
  year, tags, summary, cover }`. `slug` = nombre del archivo. La card aparece sola en home + listado.
  **Crear también el espejo EN** `src/pages/en/games/<slug>.astro` (mismo `slug`, copy traducido,
  `lang="en"`, links `/en/...`) o el toggle dará 404. Igual para proyectos.
- `cover` puede ser URL (p.ej. thumb de YouTube) o ruta en `public/`. Sin `cover` se muestran iniciales.
- Vídeo en ficha: `<VideoBlock youtube="ID" title="..." />`. Capturas: `<Gallery cols={2} />`.
- **Recursos visuales**: una carpeta por slug en `public/media/<slug>/` (`cover.*` + `gallery/`).
  **Cover de juego = convención, no config**: `coverFor()` (`src/lib/media.ts`) busca
  `cover.{png,jpg,jpeg,webp}` en la carpeta y `Carousel.astro` lo antepone a `meta.cover`; un solo
  archivo sirve ES y EN. Los proyectos (`ProjectList`) siguen a mano vía `meta`.
  Ratios: cover de juego **3:4**, cover de proyecto **16:10**. Detalle en `docs/recursos-visuales.md`
  (fuera de `public/`, que se publica entero tal cual).
  `Gallery` no globea la carpeta: hay que listar las imágenes en `images`, con `alt` descriptivo.

## i18n

- Todo string visible va por idioma. Strings cortos de UI → `src/i18n/ui.ts` (claves `es` y `en`
  en paralelo; si falta una, cae al `es`). Bloques largos por idioma → objeto `ui` inline en el componente.
- **Nombres propios no se traducen** (Unity, Three.js, títulos de juego).
- `es` no lleva prefijo de ruta; `en` va bajo `/en`. Enlaces internos usan el prefijo `L`/`base`
  según idioma — al crear links nuevos, respetarlo (no hardcodear `/games`).
- Si una página existe en un idioma pero no en el otro, **no dejar el toggle apuntando a un 404**.

## Diseño / CSS

- Usar **siempre variables CSS** de `global.css` (`--accent`, `--ink`, `--mute`, `--line`,
  `--panel`, `--bg`, `--head`). No hardcodear hex. No introducir un color nuevo sin justificarlo aquí.
- Un solo acento. `--teal`/`--orange` son alias → no tratarlos como colores distintos.
- Toda animación bajo `@media (prefers-reduced-motion: reduce)` debe degradar a estático.
- Breakpoints en uso: `860px` (section-jacking off, hero a 1 col) y `760px` (grids a 1 col).
  Mantener esos cortes; el mobile real es `<=560px` para el Nav.
- Polish de micro-interacciones: seguir `emil-design-eng`.

## Dependencias

- Stack mínimo: `astro`, `lenis`. **No añadir dependencias** para lo que resuelven unas líneas
  o una feature nativa de plataforma (ponytail). Quitar las que no se importen.

## Convenciones de código

- Atajos deliberados se marcan con comentario `ponytail:` (qué es y cuándo mejorarlo).
- Astro estático, sin frameworks de UI. Scripts vanilla en `<script>` con guardas de
  `astro:page-load` (View Transitions) para no doble-inicializar.
