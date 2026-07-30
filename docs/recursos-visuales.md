# Recursos visuales

Esta guía vive en `docs/` y no en `public/media/` a propósito: Astro copia `public/` entero al
build, así que un README ahí dentro acabaría publicado en `/media/README.md`.

Una carpeta por slug, con el mismo nombre que la ficha (`src/pages/games/<slug>.astro`).
Todo lo que hay bajo `public/` se sirve tal cual, sin procesar.

```
media/<slug>/
  cover/           la portada de la card: un archivo, con el nombre que quieras
  gallery/         las capturas de la ficha, en orden de nombre
```

## Soltar los archivos y ya

**La carpeta se llama igual que el slug de la ficha**, no como el juego. Los slugs son los nombres
de archivo en `src/pages/`: `pipo-the-penguin`, `fragments-of-the-abyss`, `chrono-fish`,
`nachito-el-nacho`, `liveops-unity`, `primeros-auxilios-vr`. Una carpeta con otro nombre
(`proyectos/`, `vr/`, `liveOps/`) no la ve nadie.

No hay que tocar código: metes los archivos en esas dos carpetas y aparecen en la card, en la home,
en el listado y en la ficha, **en español y en inglés a la vez**. Un solo archivo sirve para los dos
idiomas.

**Cover** — un `cover/` con una imagen dentro. El nombre da igual (`pipo.png`, `chronofish.png`…);
si hubiera varias se coge la primera por orden alfabético. También vale un archivo `cover.png`
directamente en `media/<slug>/`, sin carpeta.

**Galería** — todas las imágenes de `gallery/` salen en la rejilla, ordenadas por nombre de archivo.
Los nombres con fecha (`2026-07-30---10-10-01-309.png`) ordenan de forma natural. Si quieres otro
orden, renómbralas con un prefijo (`01-`, `02-`…).

Detalles:

- Formatos: `.png`, `.jpg`, `.jpeg`, `.webp`. Lo que no sea imagen se ignora (`.DS_Store` incluido).
- El cover manda sobre el `cover` del `meta` de la ficha, así que sustituye a la miniatura de
  YouTube sin borrar nada.
- Para quitar algo, borra el archivo. La card vuelve al `meta`, y si no hay nada, a las iniciales;
  la galería vuelve al panel de "añade imágenes".
- En `astro dev` basta con recargar la página, no hay que reiniciar el servidor.
- Las URLs llevan un `?v=` con la fecha del archivo, así que al reemplazar una imagen el navegador
  coge la nueva y no se queda con la vieja en caché.

Lo resuelven `coverFor()` y `galleryFor()` en `src/lib/media.ts`, que leen las carpetas en tiempo de
build; los aplican `Carousel.astro` y `Gallery.astro`.

Las **galerías** funcionan igual en juegos y en proyectos. El **cover automático** solo en juegos:
en proyectos, `ProjectList` sigue leyendo el `cover` del `meta` a mano.

## Medidas

| Uso | Componente | Ratio | Tamaño recomendado |
|---|---|---|---|
| cover de juego | `Carousel` (home y `/games`) | **3:4** vertical | 600 × 800 |
| cover de proyecto | `ProjectList` (`/projects`) | **16:10** | 1280 × 800 |
| capturas de `gallery/` | `Gallery` | **16:9** | 1920 × 1080 |

Todo se pinta con `object-fit: cover`: lo que no cuadre con el ratio se recorta por los bordes, así
que no pongas nada importante pegado al borde. Dos sitios donde importa:

- En el carrusel, **el tercio inferior del cover queda tapado** por la barra oscura del título.
- La rejilla de galería fija 16:9 para que las filas queden parejas y no salte el layout mientras
  cargan. Una captura que no sea 16:9 se recorta arriba y abajo.

Comprime antes de commitear — el repo es la fuente del deploy y todo esto viaja en cada clone.
Para capturas de gameplay, un JPG al 80% pesa del orden de diez veces menos que el PNG y a este
tamaño no se nota. Los covers de arte plano sí se benefician del PNG.

## Cover de un proyecto

Los proyectos no tienen el atajo de arriba: hay que ponerlo en el `export const meta` de la ficha,
en la versión ES **y** en la EN, o el toggle de idioma enseñará cosas distintas:

```js
export const meta = { slug: 'liveops-unity', /* … */ cover: '/media/liveops-unity/cover.png' };
```

Ninguno de los dos proyectos tiene `cover` ahora mismo, así que salen con iniciales.

## Galería: describir las capturas

La ficha solo pasa el slug y una etiqueta de idioma:

```astro
<Gallery slug="chrono-fish" label="Captura de Chrono Fish" cols={2} />
```

De ahí sale un `alt` numerado ("Captura de Chrono Fish 1", "… 2"). Cumple, pero no dice **qué** se ve
en cada imagen. Cuando quieras hacerlo bien, pásalas a mano en vez del slug:

```astro
<Gallery cols={2} images={[
  { src: '/media/chrono-fish/gallery/01.png', alt: 'Mazmorra con el temporizador en marcha' },
  { src: '/media/chrono-fish/gallery/02.png', alt: 'Enemigo rana bloqueando el paso' },
]} />
```

Eso hay que hacerlo en la ficha ES y en la EN, con el texto en su idioma.

Los `.gitkeep` son para que git conserve las carpetas vacías; bórralos cuando metas archivos.
