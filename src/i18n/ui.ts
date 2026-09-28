import { tr, type T } from './types';

export const ui = {
  'nav.games': tr('Juegos', 'Games'),
  'nav.projects': tr('Proyectos', 'Projects'),
  'nav.experience': tr('Experiencia', 'Experience'),
  'nav.menu': tr('Menú', 'Menu'),

  'hero.eyebrow': 'Game Programmer',
  'hero.lead': tr(
    'Programo sistemas para videojuegos y me gusta tomar la iniciativa: del prototipo al cierre del proyecto, cuidando el equipo y que las cosas salgan.',
    'I build game systems and like to take initiative: from prototype to ship, caring for the team and making things happen.',
  ),
  'hero.cta.games': tr('Ver mis juegos', 'See my games'),
  'hero.cta.cv': tr('Descargar CV ↓', 'Download CV ↓'),

  'about.title': tr('Sobre <em>mí</em>', 'About <em>me</em>'),
  'about.headline': tr(
    'Diseño y programo los sistemas que dan forma a las experiencias, cuidando toda la pipeline de desarrollo.',
    'I design and build the systems that give experiences their shape, owning the whole development pipeline.',
  ),
  'about.p1': tr(
    'Desarrollador con foco en videojuegos. Me implico en cada proyecto en el que entro y me meto donde haga falta: gameplay, sistemas, herramientas internas o lo que toque para sacarlo adelante.',
    "Developer with a focus on games. I get properly involved in every project I join and dig in wherever I'm needed: gameplay, systems, internal tools, or whatever it takes to get the thing shipped.",
  ),
  'about.focus': tr('Lo que hago', 'What I do'),
  'about.tools': tr('Herramientas', 'Tools'),

  'games.title': tr('Mis <em>juegos</em>', 'My <em>Games</em>'),
  'games.intro': tr(
    'Proyectos de videojuego en los que he programado los sistemas.',
    'Game projects where I programmed the systems.',
  ),
  'projects.title': tr('Otros <em>proyectos</em>', 'Other <em>Projects</em>'),
  'projects.intro': tr(
    'Otros proyectos: VR, herramientas y desarrollo más allá de los juegos.',
    'Other projects: VR, tools, and development beyond games.',
  ),
  'experience.title': tr('<em>Experiencia</em>', '<em>Experience</em>'),

  'cv.title': tr('Mi <em>CV</em>', 'My <em>CV</em>'),
  'cv.headline': tr('¿Quieres el detalle?', 'Want the details?'),
  'cv.body': tr('Descarga el currículum completo en PDF.', 'Download the full résumé as PDF.'),
  'cv.btn': tr('Descargar CV ↓', 'Download CV ↓'),

  'all': tr('Todos →', 'All →'),
  'viewProject': tr('Ver proyecto', 'View project'),
  'prev': tr('Anterior', 'Previous'),
  'next': tr('Siguiente', 'Next'),
  'play': tr('Reproducir', 'Play'),
  'video.soon': tr('Vídeo próximamente', 'Video coming soon'),
  'detail.next': tr('Siguiente:', 'Next:'),
  'detail.back': tr('← Volver a', '← Back to'),

  '404.eyebrow': 'Error 404',
  '404.title': tr('Esta página no <em>existe</em>', "This page doesn't <em>exist</em>"),
  '404.body': tr(
    'El enlace está roto o la página se movió.',
    'The link is broken or the page has moved.',
  ),
  '404.home': tr('Ir al inicio', 'Go home'),

  'title.home': 'Jordi Planas - Game Programmer',
  'title.games': tr('Juegos - Jordi Planas', 'Games - Jordi Planas'),
  'title.projects': tr('Proyectos - Jordi Planas', 'Projects - Jordi Planas'),
} satisfies Record<string, T>;

export type UiKey = keyof typeof ui;
