# Intencionalidad

## Qué es

Portfolio personal de **Jordi Planas, game programmer**. Objetivo: enseñar juegos y proyectos
a estudios/reclutadores y dejar descargar el CV. One-page con secciones a pantalla completa
(hero, about, games, projects, experience, cv) + páginas de listado y fichas detalle bespoke.

## Tono y posicionamiento

- Vende **sistemas, gameply, tools y producción técnica** (no solo "sé programar").
- Iniciativa y cierre de proyectos como diferenciador (ver bullets de Experiencia).
- Editorial/artístico pero legible. Movimiento con gusto, nunca a costa de leer el contenido.

## Diseño

- **Paleta light flat**, un solo acento coral `--accent: #f45d48`. Fondo crema `--bg: #feefe8`.
  `--teal` y `--orange` son **alias** del acento (markup viejo resuelve sin romper). No meter
  colores nuevos sin pasar por `RULES.md`.
- Tipografía: **Cabinet Grotesk** (display) + **General Sans** (body), vía Fontshare CDN. Mono para labels.
- Flat: paneles con fill tenue + hairline (`--line`), sin blur ni sombras pesadas.
- Movimiento: reveal-on-scroll direccional y re-disparable; hero con efecto "typing" de editor;
  carrusel con scale/fade por distancia al centro. Todo respeta `prefers-reduced-motion`.
- Guía de polish para detalles de UI/animación: skill `emil-design-eng`.

## Decisiones tomadas (y por qué)

- **Astro 5 estático + Vercel**: portfolio = contenido casi estático, rápido y barato. Sin SSR.
- **Lenis section-jacking** (>=860px): un gesto avanza una sección entera → sensación "deck".
  En móvil y reduced-motion se cae a scroll nativo.
- **Fichas bespoke** (un `.astro` libre por juego/proyecto) en vez de colección de contenido:
  máxima libertad de layout por ficha. El precio: i18n de fichas hay que duplicarlo a mano.
- **i18n nativo es/en**, `es` sin prefijo. EN **completo**: fichas espejo en `src/pages/en/...`
  (mismo `slug`, copy traducido). Home globea por idioma; el toggle resuelve en ambos sentidos.

## Estado

Estructura ~completa, fondo/tema definitivos. Pendiente: pulido mobile, legibilidad de cards,
contenido real (links, copy de fichas, capturas) y cerrar la i18n. Detalle en `TODO.md`.
