---
name: portfolio
description: Base de conocimiento del portfolio de Jordi Planas (Astro 5 + Lenis). Estructura, intención de diseño, normas de contribución y el listado vivo de tareas pendientes. Activa SIEMPRE que se trabaje en este repo (web portfolio, juegos, fichas, i18n, mobile, diseño) o cuando se pida el estado / las tareas pendientes del proyecto.
---

# Portfolio — Jordi Planas

Portfolio artístico de game programmer. Astro 5 estático + Lenis (section-jacking scroll).
Light flat theme, un solo acento coral. Deploy Vercel (output estático, sin adapter).

## Archivos de esta skill

| Archivo | Para qué |
|---|---|
| [STRUCTURE.md](STRUCTURE.md) | Mapa de archivos y arquitectura. Dónde vive cada cosa. |
| [INTENT.md](INTENT.md) | Intencionalidad: a quién va dirigido, paleta, decisiones de diseño. |
| [RULES.md](RULES.md) | Normas claras: cómo añadir un juego/proyecto, i18n, paleta, deps. |
| [TODO.md](TODO.md) | **Lo importante.** Listado vivo de tareas pendientes a programar/implementar. |

## Uso con /project-done-checklist

`TODO.md` es la fuente única de tareas pendientes. Flujo:

1. Antes de programar nada, revisar `TODO.md` — es la lista acordada de necesidades.
2. `/project-done-checklist` genera el Definition of Done + QA review contra el estado real
   del repo y este `TODO.md`; lo que falte se vuelca aquí como tareas nuevas.
3. Al completar una tarea: marcar `[x]` en `TODO.md` con una nota de qué se hizo.

Regla de oro: **no se programa una tarea que no esté en `TODO.md`.** Si surge algo nuevo,
primero se añade a la lista, luego se implementa.
