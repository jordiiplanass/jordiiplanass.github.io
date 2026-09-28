# TODO — Listado de acciones

Fuente única de tareas pendientes. Antes de programar, mirar aquí. Al terminar una, borrarla
(el historial vive en git). Lo nuevo entra **antes** de implementarse.

Prioridad: 🔴 alta · 🟡 media · 🔵 baja.

## Deploy

- [ ] 🔴 **Publicar la migración a Vite.** El workflow `.github/workflows/deploy.yml` ya está; falta que el
  contenido de este proyecto sea el del repo `jordiiplanass.github.io` y hacer push a `main`. Source de
  Pages ya está en GitHub Actions.

## Contenido

- [ ] 🟡 **Rellenar el contenido real de las fichas** de Pipo, Fragments y Chrono Fish (rol, equipo, fechas,
  mecánica). Marcado `ponytail:` en cada archivo de `src/content/games/`.
- [ ] 🟡 **Cuadrar rol y fechas de Respira con el CV.** El CV dice *XR Developer Intern · Sep 2025–Ene 2026*;
  la timeline dice *2025 · Lead Developer*. El CV tampoco incluye Espai Casa Sagnier. Decidir qué manda.
  `src/content/home.ts`.
- [ ] 🟡 **Comprimir los assets.** `src/media` pesa 21 MB: covers PNG de 1,2–1,7 MB para pintarse a 300px y
  capturas PNG de hasta 1,9 MB. Capturas a JPG 80 %, covers a ~1200px de ancho. Son las fuentes de Jordi.
- [ ] 🔵 **Título duplicado en las cards.** Los covers de fragments y chrono-fish llevan el título rotulado y
  la card superpone otro. Decidir si se oculta la barra cuando hay cover propio. `Carousel.tsx`.
- [ ] 🔵 **Alt de las capturas.** Van numerados ("Captura de LiveOps Unity 1"). Se podría pasar un alt real por imagen.
- [ ] 🔵 **Vídeo de Primeros Auxilios VR:** sigue el placeholder "Vídeo próximamente". Poner el ID de YouTube
  en su sección `video` o quitarla.
