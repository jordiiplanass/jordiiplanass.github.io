// Home content per language. Titles are [plain, coral]; `**x**` in points marks <strong>.
export const stack = [
  ['Unity', 'unity'], ['C#', 'csharp'], ['C++', 'cplusplus'],
  ['Unreal Engine', 'unreal'], ['Android Studio', 'androidstudio'], ['Git', 'git'],
]

// SVG path data for the line icons (24x24 viewBox).
export const icons = {
  systems: ['M12 3 21 8 12 13 3 8 12 3Z', 'M3 13 12 18 21 13'],
  tools: ['M8 8 4 12 8 16', 'M16 8 20 12 16 16', 'M13 6 11 18'],
  lead: ['M5 21 5 4', 'M5 5 16 5 14 8.5 16 12 5 12'],
  file: ['M14 3 6 3 6 21 18 21 18 7 14 3Z', 'M14 3 14 7 18 7', 'M12 10 12 16', 'M9 13 12 16 15 13'],
  // github / linkedin: Lucide icons (ISC licence, lucide.dev)
  github: ['M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4', 'M9 18c-4.51 2-5-2-7-2'],
  linkedin: ['M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z', 'M2 9h4v12H2z', 'M2 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0'],
}

export const email = 'jordiiplanass@gmail.com'

// Contact links (contact section + footer): [label, href, icon key].
export const social = [
  ['GitHub', 'https://github.com/jordiiplanass', 'github'],
  ['LinkedIn', 'https://www.linkedin.com/in/jordi-planas-martinez-9b390232b/', 'linkedin'],
  ['Email', 'mailto:' + email],
]

export const home = {
  es: {
    doc: 'Jordi Planas - Game Programmer',
    role: 'Programador de videojuegos',
    lead: 'Desarrollo videojuegos de principio a fin en Unity y C#: gameplay, sistemas y, sobre todo, interfaces y UX que se sienten bien al jugar. Ahora también enseño Unity en Espai Jove Sagnier.',
    contactCta: 'Contactar',
    tabs: ['Games', 'App Development'], // hero deck: games / personal projects
    about: ['Sobre ', 'mí'],
    headline: 'Diseño y programo los sistemas que dan forma a las experiencias, cuidando toda la pipeline de desarrollo.',
    p1: 'Desarrollador con foco en videojuegos. Me implico en cada proyecto en el que entro y me meto donde haga falta: gameplay, sistemas, herramientas internas o lo que toque para sacarlo adelante.',
    stats: [['4', 'Juegos'], ['2', 'Proyectos'], ['5', 'Años']],
    focusLabel: 'Lo que hago',
    focus: [
      ['systems', 'Sistemas y gameplay', 'Mecánicas, arquitectura y el código que sostiene la experiencia.'],
      ['tools', 'Herramientas y pipeline', 'Tooling y flujos que aceleran a todo el equipo.'],
      ['lead', 'Producción técnica', 'Tomo la iniciativa y llevo el proyecto al final.'],
    ],
    stackLabel: 'Herramientas',
    experience: ['', 'Experiencia'],
    exp: [
      { year: '2026–act.', title: 'Espai Casa Sagnier', role: 'Profesor de Unity',
        points: [
          'Imparto un **taller extraescolar de Unity** a alumnos de 12 a 17 años.',
          'Enseño el desarrollo de videojuegos **desde cero**: assets, programación y ciclo completo de producción.',
          'Guío a cada alumno a diseñar y publicar su propio **juego jugable**.',
        ],
        tags: ['Unity', 'C#', 'Docencia', 'Game Design'] },
      { year: '2025', title: 'Proyecto Respira', role: 'Desarrollador principal',
        points: [
          'Lideré el desarrollo como **dev principal** junto a otro programador.',
          'Diseñé e implementé la **interconexión** entre los distintos sistemas del proyecto.',
          'Definí la **arquitectura** de los módulos principales y su integración.',
          'Aseguré el **cierre y entrega** del proyecto cumpliendo los plazos.',
        ],
        tags: ['Arquitectura', 'Sistemas', 'Unity', 'C#'] },
      { year: '2021–22', title: 'Alioth', role: 'Web Developer',
        points: [
          'Desarrollé interfaces web sobre un framework propio basado en **Three.js**.',
          'Implementé experiencias **3D / WebGL** interactivas en el navegador.',
          'Optimicé el **rendimiento** de render en tiempo real.',
        ],
        tags: ['Three.js', 'WebGL', '3D', 'Rendimiento'] },
    ],
    contact: {
      title: ['¿', 'Hablamos?'],
      intro: 'Encuéntrame aquí o escríbeme directamente.',
      form: 'Escríbeme directamente',
      reason: 'Motivo',
      reasons: ['Oferta de trabajo', 'Colaboración técnica', 'Networking', 'Otro'],
      message: 'Mensaje',
      placeholder: 'Cuéntame en qué estás pensando…',
      send: 'Enviar mensaje',
      note: 'Se abrirá tu app de correo con el mensaje listo. ¿No se abre? Escríbeme a',
    },
  },
  en: {
    doc: 'Jordi Planas - Game Programmer',
    role: 'Game Programmer',
    lead: 'I build games end to end in Unity and C#: gameplay, systems and, above all, UI and UX that feel good to play. I also teach Unity at Espai Jove.',
    contactCta: 'Contact',
    tabs: ['Games', 'App Development'],
    about: ['About ', 'me'],
    headline: 'I design and build the systems that give experiences their shape, owning the whole development pipeline.',
    p1: "Developer with a focus on games. I get properly involved in every project I join and dig in wherever I'm needed: gameplay, systems, internal tools, or whatever it takes to get the thing shipped.",
    stats: [['4', 'Games'], ['2', 'Projects'], ['5', 'Years']],
    focusLabel: 'What I do',
    focus: [
      ['systems', 'Systems & gameplay', 'Mechanics, architecture and the code that holds the experience together.'],
      ['tools', 'Tools & pipeline', 'Tooling and flows that speed the whole team up.'],
      ['lead', 'Technical production', 'I take initiative and carry the project to the finish.'],
    ],
    stackLabel: 'Tools',
    experience: ['', 'Experience'],
    exp: [
      { year: '2026–now', title: 'Espai Casa Sagnier', role: 'Unity Instructor',
        points: [
          'Run an **after-school Unity workshop** for students aged 12 to 17.',
          'Teach game development **from scratch** assets, programming and the full production cycle.',
          'Guide each student to design and ship their own **playable game**.',
        ],
        tags: ['Unity', 'C#', 'Teaching', 'Game Design'] },
      { year: '2025', title: 'Respira Project', role: 'Lead Developer',
        points: [
          'Led development as **lead dev** alongside another programmer.',
          'Designed and implemented the **interconnection** between the different project systems.',
          'Defined the **architecture** of the main modules and their integration.',
          'Ensured the **closure and delivery** of the project meeting all deadlines.',
        ],
        tags: ['Architecture', 'Systems', 'Unity', 'C#'] },
      { year: '2021–22', title: 'Alioth', role: 'Web Developer',
        points: [
          'Built web interfaces on a custom framework based on **Three.js**.',
          'Implemented interactive **3D / WebGL** experiences in the browser.',
          'Optimised real-time **render performance**.',
        ],
        tags: ['Three.js', 'WebGL', '3D', 'Performance'] },
    ],
    contact: {
      title: ['Let’s ', 'talk'],
      intro: 'Find me here or write to me directly.',
      form: 'Write to me directly',
      reason: 'Reason',
      reasons: ['Job opportunity', 'Technical collab', 'Networking', 'Other'],
      message: 'Message',
      placeholder: 'Tell me what you have in mind…',
      send: 'Send message',
      note: 'Your email app will open with the message ready. Nothing opens? Write to me at',
    },
  },
}
