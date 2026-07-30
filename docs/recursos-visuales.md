# Recursos visuales

Esta guía vive en `docs/` y no en `public/media/` a propósito: Astro copia `public/` entero al
build, así que un README ahí dentro acabaría publicado en `/media/README.md`.

Una carpeta por slug, con el mismo nombre que la ficha (`src/pages/games/<slug>.astro`).
Todo lo que hay bajo `public/` se sirve tal cual, sin procesar: `public/media/chrono-fish/cover.jpg`
→ `/media/chrono-fish/cover.jpg`.

```
media/<slug>/
  cover.jpg        portada de la card
  gallery/         capturas de la ficha
```

## Medidas

| Uso | Componente | Ratio | Tamaño recomendado |
|---|---|---|---|
| `cover` de juego | `Carousel` (home y `/games`) | **3:4** vertical | 600 × 800 |
| `cover` de proyecto | `ProjectList` (`/projects`) | **16:10** | 1280 × 800 |
| capturas de `gallery/` | `Gallery` | libre | ancho ≥ 1200 |

Los covers llevan `object-fit: cover`: lo que no cuadre con el ratio se recorta por los bordes,
así que no pongas nada importante pegado al borde. En el carrusel el tercio inferior queda tapado
por la barra oscura del título.

Formato: JPG para capturas y arte, PNG solo si hace falta transparencia. Comprime antes de
commitear — el repo es la fuente del deploy y todo esto viaja en cada clone.

## Enchufarlo

**Cover** — en el `export const meta` de la ficha, en la versión ES **y** en la EN:

```js
export const meta = { slug: 'chrono-fish', /* … */ cover: '/media/chrono-fish/cover.jpg' };
```

Sin `cover` la card muestra las iniciales. Ahora mismo Pipo, Fragments y ChronoFish usan la
miniatura de YouTube (`https://img.youtube.com/vi/<id>/hqdefault.jpg`), que es 16:9 y el carrusel
la recorta a 3:4. Un cover propio en vertical se ve bastante mejor.

**Galería** — en el cuerpo de la ficha:

```astro
<Gallery cols={2} images={[
  { src: '/media/chrono-fish/gallery/01.jpg', alt: 'Combate por turnos' },
  { src: '/media/chrono-fish/gallery/02.jpg', alt: 'Mapa de mazmorra' },
]} />
```

`Gallery` no lee la carpeta sola: hay que listar las imágenes. El `alt` es texto visible para
lectores de pantalla, describe la captura (no lo dejes vacío ni pongas "captura").

Los `.gitkeep` son para que git conserve las carpetas vacías; bórralos cuando metas archivos.
