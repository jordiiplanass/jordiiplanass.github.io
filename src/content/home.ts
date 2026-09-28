import { tr, type T } from '../i18n/types';

export const stack = [
  { name: 'Unity', icon: '/icons/unity.svg' },
  { name: 'C#', icon: '/icons/csharp.svg' },
  { name: 'C++', icon: '/icons/cplusplus.svg' },
  { name: 'Unreal Engine', icon: '/icons/unreal.svg' },
  { name: 'Android Studio', icon: '/icons/androidstudio.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
];

export const focus = [
  {
    icon: 'systems',
    title: tr('Sistemas y gameplay', 'Systems & gameplay'),
    text: tr(
      'Mecánicas, arquitectura y el código que sostiene la experiencia.',
      'Mechanics, architecture and the code that holds the experience together.',
    ),
  },
  {
    icon: 'tools',
    title: tr('Herramientas y pipeline', 'Tools & pipeline'),
    text: tr('Tooling y flujos que aceleran a todo el equipo.', 'Tooling and flows that speed the whole team up.'),
  },
  {
    icon: 'lead',
    title: tr('Producción técnica', 'Technical production'),
    text: tr('Tomo la iniciativa y llevo el proyecto al final.', 'I take initiative and carry the project to the finish.'),
  },
] as const;

export const yearsOfExperience = 5;

interface Job {
  year: T;
  title: T;
  role: T;
  points: T[];
  tags: T[];
}

// Newest first. Points accept <strong>.
export const experience: Job[] = [
  {
    year: tr('2026–act.', '2026–now'),
    title: 'Espai Casa Sagnier',
    role: tr('Profesor de Unity', 'Unity Instructor'),
    points: [
      tr(
        'Imparto un <strong>taller extraescolar de Unity</strong> a alumnos de 12 a 17 años.',
        'Run an <strong>after-school Unity workshop</strong> for students aged 12 to 17.',
      ),
      tr(
        'Enseño el desarrollo de videojuegos <strong>desde cero</strong>: assets, programación y ciclo completo de producción.',
        'Teach game development <strong>from scratch</strong> assets, programming and the full production cycle.',
      ),
      tr(
        'Guío a cada alumno a diseñar y publicar su propio <strong>juego jugable</strong>.',
        'Guide each student to design and ship their own <strong>playable game</strong>.',
      ),
    ],
    tags: ['Unity', 'C#', tr('Docencia', 'Teaching'), 'Game Design'],
  },
  {
    year: '2025',
    title: tr('Proyecto Respira', 'Respira Project'),
    role: tr('Desarrollador principal', 'Lead Developer'),
    points: [
      tr(
        'Lideré el desarrollo como <strong>dev principal</strong> junto a otro programador.',
        'Led development as <strong>lead dev</strong> alongside another programmer.',
      ),
      tr(
        'Diseñé e implementé la <strong>interconexión</strong> entre los distintos sistemas del proyecto.',
        'Designed and implemented the <strong>interconnection</strong> between the different project systems.',
      ),
      tr(
        'Definí la <strong>arquitectura</strong> de los módulos principales y su integración.',
        'Defined the <strong>architecture</strong> of the main modules and their integration.',
      ),
      tr(
        'Aseguré el <strong>cierre y entrega</strong> del proyecto cumpliendo los plazos.',
        'Ensured the <strong>closure and delivery</strong> of the project meeting all deadlines.',
      ),
    ],
    tags: [tr('Arquitectura', 'Architecture'), tr('Sistemas', 'Systems'), 'Unity', 'C#'],
  },
  {
    year: '2021–22',
    title: 'Alioth',
    role: 'Web Developer',
    points: [
      tr(
        'Desarrollé interfaces web sobre un framework propio basado en <strong>Three.js</strong>.',
        'Built web interfaces on a custom framework based on <strong>Three.js</strong>.',
      ),
      tr(
        'Implementé experiencias <strong>3D / WebGL</strong> interactivas en el navegador.',
        'Implemented interactive <strong>3D / WebGL</strong> experiences in the browser.',
      ),
      tr(
        'Optimicé el <strong>rendimiento</strong> de render en tiempo real.',
        'Optimised real-time <strong>render performance</strong>.',
      ),
    ],
    tags: ['Three.js', 'WebGL', '3D', tr('Rendimiento', 'Performance')],
  },
];
