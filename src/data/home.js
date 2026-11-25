// Home content per language. Titles are [plain, coral]; `**x**` in points marks <strong>.
// Tools band under the hero: [name, file in public/icons].
export const stack = [
  ['Unity', 'unity'], ['C#', 'csharp'], ['Flutter', 'flutter'], ['C++', 'cplusplus'], ['Unreal Engine', 'unreal'],
  ['Rider', 'rider'], ['Android Studio', 'androidstudio'], ['Git', 'git'], ['Jira', 'jira'],
]

// Tag → file in public/icons, for the tool chips on app cards (tags without a logo show as text only).
export const toolIcons = { Unity: 'unity', 'Unity 6': 'unity', 'C#': 'csharp', Flutter: 'flutter', 'C++': 'cplusplus', Rider: 'rider', Git: 'git', Jira: 'jira', 'Unreal Engine': 'unreal' }

// SVG path data for the line icons (24x24 viewBox).
export const icons = {
  file: ['M14 3 6 3 6 21 18 21 18 7 14 3Z', 'M14 3 14 7 18 7', 'M12 10 12 16', 'M9 13 12 16 15 13'],
  // github / linkedin: Lucide icons (ISC licence, lucide.dev)
  github: ['M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4', 'M9 18c-4.51 2-5-2-7-2'],
  linkedin: ['M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z', 'M2 9h4v12H2z', 'M2 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0'],
}

export const email = 'jordiiplanass@gmail.com'
// Web3Forms access key: se lee de .env (local, ignorado por git) o del secret VITE_FORM_KEY en GitHub Actions.
export const formKey = import.meta.env.VITE_FORM_KEY

// Contact links (contact section + footer): [label, href, icon key].
export const social = [
  ['GitHub', 'https://github.com/jordiiplanass', 'github'],
  ['LinkedIn', 'https://www.linkedin.com/in/jordi-planas-martinez-9b390232b/', 'linkedin'],
  ['Email', 'mailto:' + email],
]

export const home = {
  es: {
    doc: 'Jordi Planas - Programador de software',
    role: 'Programador de software',
    lead: [ // hero paragraphs; **x** = bold
      'Soy **desarrollador de software** especializado en **videojuegos y UI/UX**. Me gusta **trabajar en equipo** y formar parte de un proyecto de desarrollo, ya sea un videojuego o software para varios dispositivos.',
      'Actualmente trabajo con **Unity, C# y Flutter**, pero **me adapto con facilidad** a otros entornos.',
    ],
    contactCta: 'Contactar',
    tabs: ['Juegos', 'Aplicaciones'], // hero deck: games / apps
    stackLabel: 'Herramientas',
    experience: ['', 'Experiencia'],
    exp: [
      { year: '2026–act.', title: 'Espai Casa Sagnier', role: 'Profesor de Unity',
        points: [
          'Imparto un taller extraescolar de **Unity** a alumnos de 12 a 17 años.',
          'Enseño el **desarrollo de videojuegos desde cero** con **Unity** y **C#**: assets, programación y ciclo completo de producción.',
          'Guío a cada alumno a diseñar y publicar **su propio juego jugable**.',
        ],
      },
      { year: '2025–26', title: 'Proyecto Respira', role: 'Desarrollador Unity',
        points: [
          'Lideré el desarrollo en **Unity** como **dev principal** junto a otro programador.',
          '**Diseñé e implementé** en **C#** la **interconexión** entre los distintos sistemas del proyecto.',
          '**Definí la arquitectura** de los módulos principales y su integración.',
          '**Aseguré la entrega** del proyecto cumpliendo los plazos.',
        ],
      },
      { year: '2021–22', title: 'Alioth', role: 'Web Developer',
        points: [
          '**Desarrollé interfaces web** sobre un framework propio basado en **Three.js**.',
          '**Implementé** experiencias 3D / WebGL interactivas en el navegador.',
          '**Optimicé** el **rendimiento** de render en tiempo real.',
        ],
      },
    ],
    contact: {
      title: ['', '¿Hablamos?'],
      intro: 'Encuéntrame aquí o escríbeme directamente.',
      form: 'Escríbeme directamente',
      reason: 'Motivo',
      reasons: ['Oferta de trabajo', 'Colaboración técnica', 'Networking', 'Otro'],
      message: 'Mensaje',
      placeholder: 'Cuéntame en qué estás pensando…',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      ok: '¡Mensaje enviado! Te responderé pronto.',
      err: 'No se pudo enviar. Inténtalo de nuevo o escríbeme directamente.',
      note: '¿Prefieres el correo? Escríbeme a',
    },
  },
  en: {
    doc: 'Jordi Planas - Software Developer',
    role: 'Software Developer',
    lead: [
      "I'm a **software developer** specialising in **games and UI/UX**. I enjoy **working in a team** and being part of a development project, whether it's a game or software for multiple devices.",
      'I currently work with **Unity, C# and Flutter**, but I **adapt easily** to other environments.',
    ],
    contactCta: 'Contact',
    tabs: ['Games', 'Applications'],
    stackLabel: 'Tools',
    experience: ['', 'Experience'],
    exp: [
      { year: '2026–now', title: 'Espai Casa Sagnier', role: 'Unity Instructor',
        points: [
          'Run an after-school **Unity** workshop for students aged 12 to 17.',
          'Teach **game development from scratch** with **Unity** and **C#**: assets, programming and the full production cycle.',
          'Guide each student to design and ship **their own playable game**.',
        ],
      },
      { year: '2025–26', title: 'Respira Project', role: 'Unity Developer',
        points: [
          'Led development in **Unity** as **lead dev** alongside another programmer.',
          '**Designed and implemented**, in **C#**, the **interconnection** between the different project systems.',
          '**Defined the architecture** of the main modules and their integration.',
          '**Ensured the delivery** of the project meeting all deadlines.',
        ],
      },
      { year: '2021–22', title: 'Alioth', role: 'Web Developer',
        points: [
          '**Built web interfaces** on a custom framework based on **Three.js**.',
          '**Implemented** interactive 3D / WebGL experiences in the browser.',
          '**Optimised** real-time **render performance**.',
        ],
      },
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
      sending: 'Sending…',
      ok: 'Message sent! I will get back to you soon.',
      err: 'Could not send. Try again or write to me directly.',
      note: 'Prefer email? Write to me at',
    },
  },
}
