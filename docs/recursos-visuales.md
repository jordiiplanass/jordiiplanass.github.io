# Recursos visuales

Esta guía vive en `docs/` y no en `public/media/` a propósito: Astro copia `public/` entero al
build, así que un README ahí dentro acabaría publicado en `/media/README.md`.

Una carpeta por slug, con el mismo nombre que la ficha (`src/pages/games/<slug>.astro`).
Todo lo que hay bajo `public/` se sirve tal cual, sin procesar: `public/media/chrono-fish/cover.jpg`
→ `/media/chrono-fish/cover.jpg`.

```
media/<slug>/
  cover.png        portada de la card — se coge sola, no hay que tocar código
  gallery/         capturas de la ficha
```

## Cover de un juego: soltar el archivo y ya

Metes `cover.png` en `public/media/<slug>/` y esa imagen aparece en la card, en la home y en
`/games`, en español y en inglés. **No hay que editar ninguna ficha.**

- Vale `.png`, `.jpg`, `.jpeg` o `.webp`. Si hubiera varios gana el PNG.
- Da igual mayúsculas: `Cover.PNG` también sirve.
- El nombre tiene que ser exactamente `cover`. `portada.png` o `cover-final.png` no los ve.
- Manda sobre el `cover` que tenga la ficha en su `meta`, así que sustituye a la miniatura de
  YouTube sin borrar nada.
- Para quitarlo, borra el archivo: la card vuelve a lo que diga `meta`, y si no hay nada, a las
  iniciales.
- En `astro dev` basta con recargar; no hace falta reiniciar el servidor.

Si reemplazas la imagen por otra, la URL lleva un `?v=` con la fecha del archivo, así que el
navegador coge la nueva y no se queda con la vieja en caché.

Lo resuelve `coverFor()` en `src/lib/media.ts`, que mira la carpeta en tiempo de build, y lo aplica
`Carousel.astro`. **Solo funciona para juegos**: los proyectos (`ProjectList`) siguen leyendo el
`cover` del `meta` a mano.

## Medidas

| Uso | Componente | Ratio | Tamaño recomendado |
|---|---|---|---|
| `cover` de juego | `Carousel` (home y `/games`) | **3:4** vertical | 600 × 800 |
| `cover` de proyecto | `ProjectList` (`/projects`) | **16:10** | 1280 × 800 |
| capturas de `gallery/` | `Gallery` | libre | ancho ≥ 1200 |

Los covers llevan `object-fit: cover`: lo que no cuadre con el ratio se recorta por los bordes,
así que no pongas nada importante pegado al borde. En el carrusel el tercio inferior queda tapado
por la barra oscura del título.

Comprime antes de commitear — el repo es la fuente del deploy y todo esto viaja en cada clone.
Los PNG de arte plano pesan poco; para capturas con mucho detalle, JPG suele quedar más ligero.

## Cover de un proyecto

Los proyectos no tienen el atajo de arriba: hay que ponerlo en el `export const meta` de la ficha,
en la versión ES **y** en la EN, o el toggle de idioma enseñará cosas distintas:

```js
export const meta = { slug: 'liveops-unity', /* … */ cover: '/media/liveops-unity/cover.png' };
```

Ninguno de los dos proyectos tiene `cover` ahora mismo, así que salen con iniciales.

## Galería

En el cuerpo de la ficha:

```astro
<Gallery cols={2} images={[
  { src: '/media/chrono-fish/gallery/01.jpg', alt: 'Combate por turnos' },
  { src: '/media/chrono-fish/gallery/02.jpg', alt: 'Mapa de mazmorra' },
]} />
```

`Gallery` no lee la carpeta sola: hay que listar las imágenes. El `alt` es texto visible para
lectores de pantalla, describe la captura (no lo dejes vacío ni pongas "captura").

Los `.gitkeep` son para que git conserve las carpetas vacías; bórralos cuando metas archivos.
