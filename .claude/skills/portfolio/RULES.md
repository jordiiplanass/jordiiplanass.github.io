# Normas

## Contenido

- **Añadir un juego/proyecto**: `src/content/games/<slug>.ts` (o `projects/`), `export default {...} satisfies Ficha`.
  Un solo archivo sirve ES y EN. Sin espejo ni rutas que tocar.
- Todo texto que cambia de idioma va con `tr('español', 'english')`. Un string suelto es un nombre propio
  (Unity, Three.js, títulos de juego). El tipado impide olvidar un idioma.
- HTML inline (`<strong>`, `<em>`) permitido en `tr()` de listas, puntos de experiencia y títulos: se
  renderiza con `Rich`. Solo contenido propio, nunca entrada de usuario.
- **Recursos visuales**: `src/media/<slug>/cover/` y `gallery/`. Convención, no config (ver `docs/recursos-visuales.md`).
  Ratios: cover de juego 3:4, cover de proyecto 16:10, capturas 16:9.

## i18n

- Strings cortos de UI → `src/i18n/ui.ts`. Contenido de la home → `src/content/home.ts`.
- Enlaces internos siempre con `to('/ruta')` de `useI18n()` para llevar el prefijo `/en`. No hardcodear `/games`.
- `es` sin prefijo, `en` bajo `/en`.

## Diseño / CSS

- CSS Modules junto a cada componente. Globales solo `tokens.css` y `base.css` (`.wrap`, `.eyebrow`, `.sec-title`).
- **Siempre variables CSS** de `tokens.css` (`--accent`, `--ink`, `--mute`, `--line`, `--panel`, `--bg`,
  `--head`, `--on-accent`). No hardcodear hex. Un solo acento.
- Sin efectos de scroll. `prefers-reduced-motion` ya lo cubre `base.css`; no hace falta media query por componente.
- Breakpoints en uso: `860px` (hero a 1 col) y `760px` (grids a 1 col); el Nav colapsa a `720px`.

## Dependencias

- Stack mínimo: `react`, `react-dom`, `react-router`. **No añadir dependencias** para lo que resuelven
  unas líneas o una feature nativa de la plataforma.

## Código

- TypeScript estricto. `npm run build` incluye `tsc --noEmit`: tiene que pasar.
- Un componente por archivo, con su `.module.css`. Lo que se reutiliza entre páginas vive en `components/`.
- Sin comentarios que expliquen lo obvio. Los atajos con techo conocido se marcan `ponytail:` (qué es y cuándo mejorarlo).
