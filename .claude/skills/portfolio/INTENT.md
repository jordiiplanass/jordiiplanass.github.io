# Intencionalidad

## Qué es

Portfolio personal de **Jordi Planas, game programmer**. Objetivo: enseñar juegos y proyectos a
estudios/reclutadores y dejar descargar el CV. Home de una página (hero, about, games, projects,
experience, cv) + listados y fichas de detalle.

## Tono

- Vende **sistemas, gameplay, tools y producción técnica**, no solo "sé programar".
- Iniciativa y cierre de proyectos como diferenciador (ver Experiencia).
- Editorial y legible. El movimiento nunca va a costa de leer el contenido.

## Diseño

- **Paleta light flat**, un solo acento coral `--accent: #f45d48`, fondo crema `--bg: #feefe8`.
- Tipografía: **Cabinet Grotesk** (display) + **General Sans** (body), Fontshare CDN. Mono para labels.
- Flat: paneles con fill tenue + hairline (`--line`), sin blur ni sombras pesadas.
- Movimiento: solo el "typing" del hero y los hovers. **Sin efectos de scroll** (ni section-jacking,
  ni reveal, ni parallax): scroll nativo. `prefers-reduced-motion` lo apaga todo en `base.css`.

## Decisiones tomadas (y por qué)

- **Vite + React SPA** en vez de Astro: el sitio se reescribió para simplificar el código y compartir
  componentes entre páginas. A cambio no hay HTML por ruta; `404.html` (copia de `index.html`) hace
  que GitHub Pages resuelva las rutas profundas.
- **Contenido como datos**: cada juego/proyecto es un archivo `.ts` con `tr(es, en)` y secciones tipadas,
  pintado por una sola plantilla (`Detail`). Sustituye a las fichas bespoke y a su espejo EN duplicado.
- **URLs con idioma**: `es` sin prefijo, `en` bajo `/en`. El idioma sale de la URL.
- **Carrusel nativo** (`scroll-snap`): sin bucle infinito, drag ni scale/fade.
- **Sin dependencias extra**: `react`, `react-dom`, `react-router`.
