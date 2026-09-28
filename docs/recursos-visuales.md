# Recursos visuales

Una carpeta por slug bajo `src/media/`, con el mismo nombre que el archivo de la ficha
(`src/content/games/<slug>.ts`): `pipo-the-penguin`, `fragments-of-the-abyss`, `chrono-fish`,
`nachito-el-nacho`, `liveops-unity`, `primeros-auxilios-vr`.

```
src/media/<slug>/
  cover/           la portada de la card: un archivo, con el nombre que quieras
  gallery/         las capturas de la ficha, en orden de nombre
```

No hay que tocar código: se sueltan los archivos y aparecen en la card, la home, el listado y la
ficha, en español y en inglés. Vite les pone un hash en el nombre, así que reemplazar una imagen
no se queda en caché.

- **Cover**: el primer archivo de `cover/` por orden alfabético. Sin `cover/`, se usa la primera
  imagen de `gallery/`; sin ninguna, salen las iniciales.
- **Galería**: todas las imágenes de `gallery/`, por nombre de archivo. Para otro orden, prefijo `01-`, `02-`…
- Formatos: `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`.
- El `alt` es el de la sección `gallery` de la ficha con el número añadido.

## Medidas

| Uso | Componente | Ratio | Tamaño recomendado |
|---|---|---|---|
| cover de juego | `Carousel` | **3:4** vertical | 600 × 800 |
| cover de proyecto | `ProjectList` | **16:10** | 1280 × 800 |
| capturas | `Gallery` | **16:9** | 1280 × 720 |

La rejilla fija el ratio 16:9 para que la página no salte mientras cargan las imágenes.
