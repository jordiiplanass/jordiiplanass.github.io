# Portfolio Jordi Planas — Game Programmer

Portfolio bilingüe (ES por defecto, EN bajo `/en`) en React. Reconstrucción del sitio Astro original (`D:\Repos\jordiiplanass.github.io`) a partir de un blueprint que ya se borró; el contenido vive ahora en `src/data/`.

## Comandos
- `npm run dev` — servidor de desarrollo (Vite). Para el navegador integrado: `.claude/launch.json` → config `dev`.
- `npm run build` — build a `dist/`. Debe pasar limpio tras cada cambio.
- `npm run preview` — sirve `dist/`.

## Stack
Vite 7 + React 19 + react-router-dom 7 (BrowserRouter). JS plano (`.jsx`), sin TypeScript, sin librerías de estilos, animación ni estado. Un solo `src/styles.css` (tokens en `:root` + clases reutilizables). No añadir dependencias sin motivo claro.

## Estructura
```
src/
  App.jsx            rutas: mismas rutas en '' y '/en' + '*' → NotFound
  i18n.js            idioma desde la URL y textos de UI (ver API abajo)
  styles.css         todo el CSS (tokens, componentes, home, detalle)
  data/
    index.js         punto único de import: export { projects } from './projects.js'
    projects.js      6 proyectos (4 juegos + 2 proyectos) con contenido ES/EN; su comentario inicial es el contrato de datos
    home.js          contenido de la home por idioma (hero: role, lead, contactCta, tabs; about, stats, herramientas, experiencia, contact) + `email` y `social` (sección de contacto y footer)
  lib/
    media.js         getCover(slug), getGallery(slug) — imágenes de src/media vía import.meta.glob
    projects.js      ofKind('game'|'project') — filtrado y orden por año desc (estable)
    bold.jsx         bold('a **b**') → <strong> en los segmentos marcados
  components/        Layout (skip link, Nav, main, Footer, scroll y reveal), Nav, Footer,
                     SectionTitle {title:[normal, coral], more?, to?, as?}, ProjectList {items, lang, capped?},
                     Carousel {items, lang} (coverflow infinito de juegos: home y /games),
                     Deck {items:[{slug,title,year,cover,href}], lang} (mazo deslizable del hero; pestañas Games / App Development en Home)
  pages/             Home, Listing {kind}, Detail {kind}, NotFound
  media/<slug>/      cover/ (primera imagen = portada) y gallery/ (orden por nombre)
public/              cv.pdf, icon.png, icons/ (logos herramientas), illustrations/hamster.svg
```

## Cómo hacer cambios habituales
- **Textos de un proyecto** → `src/data/projects.js` (`es`/`en`). `**x**` = negrita.
- **Nuevo proyecto/juego** → añadir objeto en `projects.js` (slug, kind, year, tags, cardTags, next, layout, es/en) y su carpeta `src/media/<slug>/{cover,gallery}/`. Las rutas, listados, carrusel y toggle de idioma lo recogen solos. En juegos, encadenar `next` del anterior.
- **Imágenes de galería** → soltar archivos en `src/media/<slug>/gallery/`; cada imagen usa el alt de `gallery.alts[i]`, así que añade alts a la vez.
- **Home** → `src/data/home.js`; textos de UI (nav, botones, aria-labels) → `src/i18n.js`.
- **Páginas de detalle**: `Detail.jsx` es un único renderizador por bloques (`intro, heading, text, list, tags, panels, note, video, gallery, columns, stats`) y `layout` (`default | sidebar | centered`). Nunca condicionar por slug: si una página necesita algo distinto, añadirlo como dato.

## API de i18n (`src/i18n.js`)
`langOf(pathname)`, `useLang()`, `localePath(lang, '/games')` → `/en/games`, `togglePath(pathname)` (misma página en el otro idioma; slugs/rutas desconocidas → home del otro idioma), `useTitle(title)`, `ui(lang)`.

## Diseño (resumen)
Colores: acento `#f45d48`, fondo `#feefe8`, tinta `#222525`, títulos `#232323`, mute `#6c6f6f`, línea `#e7d6cc`, panel `#fffffe`. Fuentes Fontshare: Cabinet Grotesk (títulos) y General Sans (texto). Contenedor 1100px con 24px de padding. Breakpoints: 480 / 640 / 720 (menú hamburguesa) / 760 / 860.

## Decisiones deliberadas (`ponytail:` en el código)
- Snap vertical de la home con CSS `scroll-snap` nativo (≥860px) en lugar de Lenis.
- Coverflow sin librería: la lista se repite hasta ≥8 cartas para que el salto de un lado a otro ocurra fuera de la vista (±2 visibles).
- Mazo del hero sin librería: pointer events + transforms; sin física, solo umbral del 30% del ancho.
- Formulario de contacto (#contact, al final de la home) por `mailto:`: abre la app de correo del visitante; sin backend ni servicio externo. Cambiar el `onSubmit` por un servicio (Formspree, Web3Forms, Worker + Resend) si hace falta enviar sin app de correo.
- Imágenes cargadas con glob eager (~35 archivos); revisar si crecen a cientos.
- Animaciones de reveal desactivadas con `prefers-reduced-motion`.

## Pendiente / a confirmar
- **Despliegue**: no configurado. GitHub Pages necesita `base` en Vite si no es la raíz del dominio y un fallback SPA (copiar `index.html` a `404.html`) o cambiar a HashRouter.
- **LinkedIn**: se usa `jordi-planas-martinez-9b390232b`; el repo original actual usa `jordiplanasdev`. Confirmar cuál vale.
- Resúmenes de juegos (tarjetas) derivados del texto de cada página, no del original.
- "← Games"/"← Projects" se quedan en inglés en las páginas ES (fiel al original).

## Forma de trabajar del usuario
- Estilo de código "ponytail": la solución más simple que funcione, reutilizar, sin abstracciones ni dependencias innecesarias.
- En tareas grandes: Opus orquesta y verifica; el código lo escriben agentes Sonnet.
- Verificar siempre con `npm run build` y en el navegador (escritorio 1440 y móvil 375).
