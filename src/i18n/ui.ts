export const defaultLang = 'es';

export const ui = {
  es: {
    // Nav
    'nav.games': 'Juegos',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    // Hero
    'hero.lead': 'Programo sistemas para videojuegos y me gusta tomar la iniciativa: del prototipo al cierre del proyecto, cuidando el equipo y que las cosas salgan.',
    'hero.cta.games': 'Ver mis juegos',
    'hero.cta.cv': 'Descargar CV ↓',
    // About
    'about.headline': 'Diseño y programo los sistemas que dan forma a las experiencias, cuidando toda la pipeline de desarrollo.',
    'about.p1': 'Desarrollador con foco en videojuegos. Me implico en cada proyecto en el que entro y me meto donde haga falta: gameplay, sistemas, herramientas internas o lo que toque para sacarlo adelante.',
    'about.p2': 'Me implico a fondo: me importa terminar lo que empiezo, que el resultado salga bien y que el equipo trabaje en buen ambiente. Disfruto programando, pero también coordinando y desbloqueando a los demás.',
    // Games teaser
    'games.all': 'Todos →',
    // Projects teaser
    'projects.all': 'Todos →',
    // Experiencia laboral: vive en el array `ui.experience` de Home.astro (por idioma).
    // CV
    'cv.headline': '¿Quieres el detalle?',
    'cv.body': 'Descarga el currículum completo en PDF.',
    'cv.btn': 'Descargar CV ↓',
    // Games page
    'gamespage.h1': 'Juegos',
    'gamespage.intro': 'Proyectos de videojuego en los que he programado los sistemas.',
    // Projects page
    'projectspage.h1': 'Proyectos',
    'projectspage.intro': 'Otros proyectos: VR, herramientas y desarrollo más allá de los juegos.',
    // Base titles
    'title.home': 'Jordi Planas - Game Programmer',
    'title.games': 'Juegos - Jordi Planas',
    'title.projects': 'Proyectos - Jordi Planas',
  },
  en: {
    // Nav
    'nav.games': 'Games',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    // Hero
    'hero.lead': 'I build game systems and like to take initiative: from prototype to ship, caring for the team and making things happen.',
    'hero.cta.games': 'See my games',
    'hero.cta.cv': 'Download CV ↓',
    // About
    'about.headline': 'I design and build the systems that give experiences their shape, owning the whole development pipeline.',
    'about.p1': "Developer with a focus on games. I get properly involved in every project I join and dig in wherever I'm needed: gameplay, systems, internal tools, or whatever it takes to get the thing shipped.",
    'about.p2': "I'm fully invested: I care about finishing what I start, shipping something good, and keeping the team in a good place. I enjoy coding, but also coordinating and unblocking people.",
    // Games teaser
    'games.all': 'All →',
    // Projects teaser
    'projects.all': 'All →',
    // Work experience lives in the `ui.experience` array in Home.astro (per language).
    // CV
    'cv.headline': 'Want the details?',
    'cv.body': 'Download the full résumé as PDF.',
    'cv.btn': 'Download CV ↓',
    // Games page
    'gamespage.h1': 'Games',
    'gamespage.intro': 'Game projects where I programmed the systems.',
    // Projects page
    'projectspage.h1': 'Projects',
    'projectspage.intro': 'Other projects: VR, tools, and development beyond games.',
    // Base titles
    'title.home': 'Jordi Planas - Game Programmer',
    'title.games': 'Games - Jordi Planas',
    'title.projects': 'Projects - Jordi Planas',
  },
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof typeof ui[typeof defaultLang];
