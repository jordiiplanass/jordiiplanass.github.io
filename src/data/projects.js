/*
 * Project detail data (6 pages x 2 languages). Source: portfolio_blueprint P005-P010 / P013-P018.
 * Text is verbatim; `**x**` means bold (renderer converts). Images come from disk; only alt texts live here.
 *
 * TOP LEVEL (per project)
 *   slug, kind ('game'|'project'), year (number), next (slug of next game | null)
 *   tags      page-header tags (same in both languages unless es.tags / en.tags is present; use `lang.tags ?? tags`)
 *   cardTags  tags shown on listing/home cards (carousel shows 3, project rows show all)
 *   layout    'default' | 'sidebar' | 'centered'   (renderer must key on this, never on slug)
 *
 * PER LANGUAGE (es / en)
 *   title      card/listing title and <title>
 *   summary    card summary (games: no card text exists in the blueprint, derived from page copy; projects: verbatim row text)
 *   backLabel  text of the back link ('← Games' / '← Projects', verbatim; the blueprint leaves it English on ES pages)
 *   nextLabel  label of the button linking to `next` (games with next != null)
 *   endLabel   (Nachito only) label of the final button that links back to the games list (used when next === null)
 *   header     { h1?, accent?, titleLines?, eyebrow?, subtitle?, lead?, showYear?, showTags? }
 *       h1          heading text if different from title (Primeros Auxilios VR / First Aid VR)
 *       accent      only this word is coral, rest of the h1 stays #232323; absent => whole h1 coral
 *       titleLines  render h1 as these lines separated by <br> (Chrono Fish)
 *       eyebrow     small uppercase label above the h1 (.eyebrow)
 *       subtitle    muted line under the h1 (Nachito)
 *       lead        muted paragraph under the h1 (LiveOps, Primeros)
 *       showYear    show `year` next to the tags (Pipo; Cabinet Grotesk 800 20px #6c6f6f)
 *       showTags    show the header tag pills
 *   blocks     ordered body blocks:
 *     { type:'intro', text, aside?:{ label, text } }           big paragraph; aside = .panel (role box) in a 1.6fr/1fr split
 *     { type:'heading', text }                                  h2.sec
 *     { type:'text', text, variant?:'body'|'lead' }             body = 17px/1.6 #6c6f6f max 68ch; lead = centered 18/20/24px #6c6f6f max 60ch
 *     { type:'list', items }                                    coral-dot bullets, max 68ch, gap 12px; items may contain **bold**
 *     { type:'tags', items }                                    row of .tag pills
 *     { type:'panels', cols:2|3|4, items:[{ num?, label?, title?, text }] }
 *           num (+title+text)  => 'feature' card  (num 22px/800 coral, h4 18px, text 14px)
 *           title+text only    => 'ability' card  (h4 18px coral, text 15px #6c6f6f)
 *           label+text         => 'spec' card     (h4 12px uppercase .14em coral, value #6c6f6f)
 *     { type:'note', text, variant:'bordered'|'centered' }
 *           bordered = 2px left border #e7d6cc, padding-left 16px, 15px; centered = 15px, max 52ch, mt 20px
 *     { type:'video', youtube:'ID', title, ariaLabel }          click-to-load facade (play button aria-label = ariaLabel)
 *     { type:'video', placeholder:'text' }                      16:9 .panel with grey play glyph + text
 *     { type:'gallery', variant:'cols-2'|'cols-3'|'featured', heading?, alts:[...] }   one <img> per alt (index order)
 *           featured = first image spans all columns, remaining in 2 columns
 *     { type:'columns', items:[{ title, text?, list?, tags? }] } 2 equal columns (gap 36px), title = h2 22px, text #6c6f6f
 *     { type:'stats', items:[{ label, value }] }                 sidebar definition list (layout 'sidebar' only)
 */

const shots = (prefix, n, sep = ' ') => Array.from({ length: n }, (_, i) => `${prefix}${sep}${i + 1}`)

export const projects = [
  {
    slug: 'pipo-the-penguin', kind: 'game', year: 2026,
    tags: ['Unity', 'C#', 'Gameplay', '3D Platformer'],
    cardTags: ['Unity', 'C#', 'Gameplay'],
    next: 'fragments-of-the-abyss', layout: 'default',
    es: {
      title: 'Pipo the Penguin',
      summary: 'Plataformas 3D protagonizadas por Pipo, un pingüino que se desliza sobre el hielo.',
      backLabel: '← Games', nextLabel: 'Siguiente: Fragments of the Abyss →',
      header: { showYear: true, showTags: true },
      blocks: [
        { type: 'intro',
          text: 'Plataformas 3D protagonizadas por Pipo, un pingüino que se desliza sobre el hielo. El reto fue un sistema de movimiento que se sintiera resbaladizo pero controlable.',
          aside: { label: 'Mi rol', text: 'Programación de gameplay y sistemas de movimiento.' } },
        { type: 'video', youtube: 'HsIRSft30w8', title: 'Gameplay de Pipo the Penguin', ariaLabel: 'Reproducir Gameplay de Pipo the Penguin' },
        { type: 'gallery', variant: 'cols-2', heading: 'Capturas', alts: shots('Captura de Pipo the Penguin', 4) },
      ],
    },
    en: {
      title: 'Pipo the Penguin',
      summary: 'A 3D platformer starring Pipo, a penguin who slides across the ice.',
      backLabel: '← Games', nextLabel: 'Next: Fragments of the Abyss →',
      header: { showYear: true, showTags: true },
      blocks: [
        { type: 'intro',
          text: 'A 3D platformer starring Pipo, a penguin who slides across the ice. The challenge was a movement system that felt slippery yet controllable.',
          aside: { label: 'My role', text: 'Gameplay programming and movement systems.' } },
        { type: 'video', youtube: 'HsIRSft30w8', title: 'Pipo the Penguin gameplay', ariaLabel: 'Play Pipo the Penguin gameplay' },
        { type: 'gallery', variant: 'cols-2', heading: 'Screenshots', alts: shots('Pipo the Penguin screenshot', 4, '') },
      ],
    },
  },

  {
    slug: 'fragments-of-the-abyss', kind: 'game', year: 2024,
    tags: ['Unity', 'C#', 'Atmospheric', 'Systems'],
    cardTags: ['Unity', 'C#', 'Atmospheric'],
    next: 'chrono-fish', layout: 'default',
    es: {
      title: 'Fragments of the Abyss',
      summary: 'Aventura atmosférica de exploración en las profundidades.',
      backLabel: '← Games', nextLabel: 'Siguiente: Chrono Fish →',
      header: { eyebrow: '2024 · Game' },
      blocks: [
        { type: 'video', youtube: 'Xc5Z1nYzrCE', title: 'Tráiler de Fragments of the Abyss', ariaLabel: 'Reproducir Tráiler de Fragments of the Abyss' },
        { type: 'columns', items: [
          { title: 'Sobre el juego', text: 'Aventura atmosférica de exploración en las profundidades. El foco estuvo en la ambientación y en los sistemas que sostienen la sensación de descenso al abismo.' },
          { title: 'Lo que hice', list: ['Sistemas de gameplay', 'Integración de mecánicas', 'Ajuste de la experiencia'], tags: ['Unity', 'C#', 'Atmospheric', 'Systems'] },
        ] },
        { type: 'gallery', variant: 'cols-3', heading: 'Galería', alts: shots('Captura de Fragments of the Abyss', 8) },
      ],
    },
    en: {
      title: 'Fragments of the Abyss',
      summary: 'An atmospheric exploration adventure into the deep.',
      backLabel: '← Games', nextLabel: 'Next: Chrono Fish →',
      header: { eyebrow: '2024 · Game' },
      blocks: [
        { type: 'video', youtube: 'Xc5Z1nYzrCE', title: 'Fragments of the Abyss trailer', ariaLabel: 'Play Fragments of the Abyss trailer' },
        { type: 'columns', items: [
          { title: 'About the game', text: 'An atmospheric exploration adventure into the deep. The focus was on the mood and the systems that sustain the feeling of descending into the abyss.' },
          { title: 'What I did', list: ['Gameplay systems', 'Mechanics integration', 'Experience tuning'], tags: ['Unity', 'C#', 'Atmospheric', 'Systems'] },
        ] },
        { type: 'gallery', variant: 'cols-3', heading: 'Gallery', alts: shots('Fragments of the Abyss screenshot', 8, '') },
      ],
    },
  },

  {
    slug: 'chrono-fish', kind: 'game', year: 2023,
    tags: ['Unity', 'C#', 'Time Mechanic', 'Puzzle'],
    cardTags: ['Unity', 'C#', 'Time Mechanic'],
    next: 'nachito-el-nacho', layout: 'sidebar',
    es: {
      title: 'Chrono Fish',
      summary: 'Puzzle construido alrededor de una mecánica de tiempo: el jugador manipula el flujo temporal para avanzar.',
      backLabel: '← Games', nextLabel: 'Siguiente: Nachito el Nacho →',
      header: { titleLines: ['Chrono', 'Fish'] },
      blocks: [
        { type: 'stats', items: [
          { label: 'Año', value: '2023' }, { label: 'Motor', value: 'Unity' },
          { label: 'Género', value: 'Puzzle temporal' }, { label: 'Rol', value: 'Programación' } ] },
        { type: 'intro', text: 'Puzzle construido alrededor de una mecánica de tiempo: el jugador manipula el flujo temporal para avanzar.' },
        { type: 'video', youtube: 'g6t-Ix3g1V0', title: 'Chrono Fish — gameplay', ariaLabel: 'Reproducir Chrono Fish — gameplay' },
        { type: 'tags', items: ['Unity', 'C#', 'Time Mechanic', 'Puzzle'] },
        { type: 'gallery', variant: 'cols-2', heading: 'Galería', alts: shots('Captura de Chrono Fish', 4) },
      ],
    },
    en: {
      title: 'Chrono Fish',
      summary: 'A puzzle built around a time mechanic: the player manipulates the flow of time to progress.',
      backLabel: '← Games', nextLabel: 'Next: Nachito el Nacho →',
      header: { titleLines: ['Chrono', 'Fish'] },
      blocks: [
        { type: 'stats', items: [
          { label: 'Year', value: '2023' }, { label: 'Engine', value: 'Unity' },
          { label: 'Genre', value: 'Time puzzle' }, { label: 'Role', value: 'Programming' } ] },
        { type: 'intro', text: 'A puzzle built around a time mechanic: the player manipulates the flow of time to progress.' },
        { type: 'video', youtube: 'g6t-Ix3g1V0', title: 'Chrono Fish — gameplay', ariaLabel: 'Play Chrono Fish — gameplay' },
        { type: 'tags', items: ['Unity', 'C#', 'Time Mechanic', 'Puzzle'] },
        { type: 'gallery', variant: 'cols-2', heading: 'Gallery', alts: shots('Chrono Fish screenshot', 4, '') },
      ],
    },
  },

  {
    slug: 'nachito-el-nacho', kind: 'game', year: 2023,
    tags: ['Unity', 'C#', '2D Platformer', 'Movimiento'],
    cardTags: ['Unity', 'C#', '2D Platformer'],
    next: null, layout: 'centered',
    es: {
      title: 'Nachito el Nacho',
      summary: 'Plataformas 2D caricaturesco. Nachito se ha transformado en un nacho y la meta es volver a ser humano.',
      backLabel: '← Games', endLabel: '← Volver a Games',
      header: { subtitle: 'Plataformas 2D · 2023', showTags: true },
      blocks: [
        { type: 'text', variant: 'lead', text: 'Plataformas 2D caricaturesco. Nachito se ha transformado en un nacho, y la única forma de moverse por el nivel es usar las habilidades de los condimentos que lleva encima. La meta es volver a ser humano.' },
        { type: 'gallery', variant: 'featured', heading: 'Capturas', alts: shots('Captura de Nachito el Nacho', 5) },
        { type: 'heading', text: 'Los condimentos' },
        { type: 'panels', cols: 2, items: [
          { title: 'Guacamole', text: 'Dash: un impulso seco para cruzar huecos y salir de un apuro.' },
          { title: 'Queso', text: 'Gancho: se engancha al escenario y te lanza donde no llegas de un salto.' } ] },
        { type: 'note', variant: 'centered', text: 'Hay más condimentos, y cada uno cambia cómo te desplazas. Encadenarlos es el juego.' },
      ],
    },
    en: {
      title: 'Nachito el Nacho',
      summary: 'A cartoonish 2D platformer. Nachito has been turned into a nacho and the goal is to become human again.',
      tags: ['Unity', 'C#', '2D Platformer', 'Movement'],
      backLabel: '← Games', endLabel: '← Back to Games',
      header: { subtitle: '2D platformer · 2023', showTags: true },
      blocks: [
        { type: 'text', variant: 'lead', text: 'A cartoonish 2D platformer. Nachito has been turned into a nacho, and the only way to get around a level is to use the abilities of the condiments he carries. The goal is to become human again.' },
        { type: 'gallery', variant: 'featured', heading: 'Screenshots', alts: shots('Nachito el Nacho screenshot', 5, '') },
        { type: 'heading', text: 'The condiments' },
        { type: 'panels', cols: 2, items: [
          { title: 'Guacamole', text: 'Dash: a sharp burst to clear gaps and get out of trouble.' },
          { title: 'Cheese', text: "Grapple: latches onto the level and swings you where a jump won't reach." } ] },
        { type: 'note', variant: 'centered', text: 'There are more condiments, each changing how you move. Chaining them is the game.' },
      ],
    },
  },

  {
    slug: 'liveops-unity', kind: 'project', year: 2026,
    tags: ['React 19', 'TypeScript', 'Firebase', 'Unity 6', 'C#', 'LiveOps'],
    cardTags: ['React 19', 'TypeScript', 'Firebase', 'Unity 6', 'C#', 'LiveOps'],
    next: null, layout: 'default',
    es: {
      title: 'LiveOps Unity',
      summary: 'Herramienta de LiveOps para proyectos pequeños: panel en React, Firebase Realtime Database y un cliente de Unity que aplica los cambios sin recompilar.',
      backLabel: '← Projects',
      header: {
        eyebrow: 'Proyecto aplicado · 2026', accent: 'Unity',
        lead: 'Las herramientas de LiveOps del mercado te sobran de funciones o te atan a una plataforma cerrada, y en un proyecto pequeño eso se paga en integración y en factura. Esto va al revés: un panel web propio, Firebase Realtime Database como capa de datos y un cliente de Unity que recoge los cambios en caliente.' },
      blocks: [
        { type: 'heading', text: 'Cómo está montado' },
        { type: 'panels', cols: 3, items: [
          { num: '01', title: 'Panel web', text: 'React 19 con TypeScript y Vite, shadcn/ui sobre Tailwind. Cinco secciones: economías, flags, Battle Pass, Daily Reward y jugadores.' },
          { num: '02', title: 'Firebase', text: 'Un árbol JSON con tres ramas. El panel escribe la configuración, Unity escribe el estado del jugador, y ninguno toca la rama del otro.' },
          { num: '03', title: 'Cliente Unity', text: 'Unity 6 con el SDK de Firebase. Lee la configuración al iniciar sesión y se queda escuchando por WebSocket. Sin polling.' } ] },
        { type: 'heading', text: 'Lo que se toca sin recompilar' },
        { type: 'list', items: [
          'Monedas: límite de saldo, formato de visualización, si es estacional, y un bitfield de propiedades (blanda, dura, premium, intercambiable, ganada por anuncios).',
          'Catálogo de objetos, con tipo, rareza, tamaño de pila y si es consumible o intercambiable.',
          'Tipos de experiencia y su multiplicador.',
          'Battle Pass: cuántos niveles, cuánta XP cuesta cada uno, la recompensa por nivel en vía gratuita y premium, y las fechas de la temporada.',
          'Daily Reward: la tabla de recompensas por día de racha y qué ocurre al pasar del último día, reiniciar o mantener.',
          'Feature flags para encender y apagar funcionalidades en remoto.' ] },
        { type: 'text', text: 'Cualquiera de esos cambios llega a las sesiones activas en el momento en que se guarda.' },
        { type: 'heading', text: 'Decisiones' },
        { type: 'list', items: [
          '**Realtime Database antes que Firestore.** Firestore consulta mejor, pero aquí lo que pesaba era la latencia de propagación, y Realtime Database la resuelve con una conexión WebSocket persistente.',
          '**Sin backend propio.** Montarlo competía en tiempo con el desarrollo del juego, que es justo lo que esta herramienta pretende no robar.',
          '**Sin gestor de estado global en React.** El estado de cada sección es local y se sincroniza con Firebase por su cuenta. Redux o Zustand habrían sumado complejidad sin ganar nada.',
          '**Configuración y jugadores en ramas separadas.** Esta no la planifiqué: salió de que, compartiendo estructura, las reglas de seguridad de Firebase se volvían imposibles de razonar. Separar quién escribe qué simplificó las reglas y la lógica del cliente a la vez.' ] },
        { type: 'heading', text: 'Lo que más me costó' },
        { type: 'text', text: 'El ciclo de vida de los listeners. Apoyarse en ellos para propagar cualquier cambio suena sencillo, hasta que dejas uno vivo sobre un objeto de Unity ya destruido y empiezan a saltar excepciones en el hilo principal del motor que no es evidente de dónde vienen. Cancelar las suscripciones en OnDestroy es de esas cosas que no salen en los tutoriales y que separan un prototipo de algo que aguanta.' },
        { type: 'heading', text: 'Test de usabilidad' },
        { type: 'list', items: [
          'Cinco participantes con perfil de desarrollador o diseñador de videojuegos, y cinco tareas que recorren el flujo completo: configurar el evento en el panel y verificar su efecto en Unity.',
          'Los cinco completaron las cinco tareas sin ayuda, con una dificultad percibida media de 5,88 sobre 7.',
          'El punto flojo salió señalado: localizar las herramientas de consulta dentro de Unity. Esa tarea acumuló 4,87 veces más pasos que el camino óptimo y la peor nota de dificultad, 4,4. El problema es dónde vive el menú, no lo que hace.' ] },
        { type: 'note', variant: 'bordered', text: 'Los participantes que venían de PlayFab o Unity Gaming Services comentaron que aquí hacen falta menos pasos para configurar un evento simple, a cambio de cubrir bastante menos terreno. Con cinco personas eso es una orientación, no un benchmark.' },
        { type: 'heading', text: 'Stack' },
        { type: 'tags', items: ['React 19', 'TypeScript', 'Firebase', 'Unity 6', 'C#', 'LiveOps'] },
        { type: 'gallery', variant: 'cols-2', heading: 'Capturas', alts: shots('Captura de LiveOps Unity', 3) },
      ],
    },
    en: {
      title: 'LiveOps Unity',
      summary: 'A LiveOps tool for small projects: a React panel, Firebase Realtime Database and a Unity client that picks up changes without recompiling.',
      backLabel: '← Projects',
      header: {
        eyebrow: 'Applied project · 2026', accent: 'Unity',
        lead: 'Off-the-shelf LiveOps tools either give you far more than you need or lock you into a closed platform, and on a small project you pay for that in integration work and in invoices. This one goes the other way: a panel I own, Firebase Realtime Database as the data layer, and a Unity client that picks up changes while the game is running.' },
      blocks: [
        { type: 'heading', text: "How it's put together" },
        { type: 'panels', cols: 3, items: [
          { num: '01', title: 'Web panel', text: 'React 19 with TypeScript and Vite, shadcn/ui over Tailwind. Five sections: economies, flags, Battle Pass, Daily Reward and players.' },
          { num: '02', title: 'Firebase', text: "A JSON tree with three branches. The panel writes the configuration, Unity writes player state, and neither touches the other's branch." },
          { num: '03', title: 'Unity client', text: 'Unity 6 with the Firebase SDK. It reads the configuration on sign-in and keeps listening over WebSocket. No polling.' } ] },
        { type: 'heading', text: 'What you change without recompiling' },
        { type: 'list', items: [
          "Currencies: balance cap, display format, whether it's seasonal, and a bitfield of properties (soft, hard, premium, tradable, earned through ads).",
          "The item catalogue, with type, rarity, stack size and whether it's consumable or tradable.",
          'Experience types and their multiplier.',
          'Battle Pass: how many tiers, how much XP each one costs, the reward per tier on the free and premium tracks, and the season dates.',
          'Daily Reward: the reward table per streak day, and what happens past the last day, reset or hold.',
          'Feature flags to switch functionality on and off remotely.' ] },
        { type: 'text', text: "Any of those changes reaches live sessions the moment it's saved." },
        { type: 'heading', text: 'Decisions' },
        { type: 'list', items: [
          '**Realtime Database over Firestore.** Firestore queries better, but what mattered here was propagation latency, and Realtime Database handles it with a persistent WebSocket connection.',
          '**No backend of my own.** Building one competed for time with the game itself, which is exactly what this tool is meant not to steal.',
          "**No global state manager in React.** Each section's state is local and syncs with Firebase on its own. Redux or Zustand would have added complexity for nothing.",
          "**Config and players on separate branches.** I didn't plan this one. It came out of the fact that, sharing a structure, Firebase's security rules became impossible to reason about. Splitting who writes what simplified the rules and the client logic at once." ] },
        { type: 'heading', text: 'The hardest part' },
        { type: 'text', text: "Listener lifetimes. Leaning on them to propagate any change sounds simple, right up until you leave one alive on a Unity object that's already been destroyed and exceptions start firing on the engine's main thread with no obvious origin. Cancelling subscriptions in OnDestroy is one of those things the tutorials skip, and it's what separates a prototype from something that holds up." },
        { type: 'heading', text: 'Usability test' },
        { type: 'list', items: [
          'Five participants working as game developers or designers, and five tasks covering the whole flow: configure the event in the panel, then verify its effect in Unity.',
          'All five finished all five tasks unaided, with a mean perceived difficulty of 5.88 out of 7.',
          'The weak spot came through clearly: finding the inspection tools inside Unity. That task racked up 4.87 times more steps than the optimal path and the worst difficulty score, 4.4. The problem is where the menu lives, not what it does.' ] },
        { type: 'note', variant: 'bordered', text: "Participants coming from PlayFab or Unity Gaming Services said this takes fewer steps to configure a simple event, in exchange for covering considerably less ground. With five people that's a pointer, not a benchmark." },
        { type: 'heading', text: 'Stack' },
        { type: 'tags', items: ['React 19', 'TypeScript', 'Firebase', 'Unity 6', 'C#', 'LiveOps'] },
        { type: 'gallery', variant: 'cols-2', heading: 'Screenshots', alts: shots('LiveOps Unity screenshot', 3, '') },
      ],
    },
  },

  {
    slug: 'primeros-auxilios-vr', kind: 'project', year: 2024,
    tags: ['Unity 6', 'Meta Quest 3', 'C#', 'XR', 'ESP32'],
    cardTags: ['Unity 6', 'Meta Quest 3', 'C#', 'XR', 'ESP32'],
    next: null, layout: 'default',
    es: {
      title: 'Primeros Auxilios (VR)',
      summary: 'Simulación en Meta Quest 3 para practicar un torniquete bajo estrés agudo. Prácticas en Proyecto Respira.',
      backLabel: '← Projects',
      header: {
        h1: 'Primeros Auxilios VR', accent: 'VR', eyebrow: 'Prácticas · Proyecto Respira',
        lead: 'Proyecto Respira da formación presencial en primeros auxilios. Querían que sus alumnos pudieran practicar la colocación de un torniquete con la presión de una urgencia de verdad, así que montamos la escena en Meta Quest 3. Fue la primera vez que la empresa se metía en XR.' },
      blocks: [
        { type: 'video', placeholder: 'Vídeo próximamente — Demo VR de Primeros Auxilios' },
        { type: 'panels', cols: 4, items: [
          { label: 'Dispositivo', text: 'Meta Quest 3' },
          { label: 'Motor', text: 'Unity 6 · SDK de Meta' },
          { label: 'Equipo', text: '2 programadores, 2 artistas' },
          { label: 'Dedicación', text: '300 h en remoto' } ] },
        { type: 'heading', text: 'Qué pasa dentro' },
        { type: 'text', text: 'Empiezas en una biblioteca de centro comercial recreada con arte original del equipo. Nada te avisa. A los pocos segundos arrancan los estímulos.' },
        { type: 'list', items: [
          'Gente corriendo, luces parpadeando, humo. Un sistema de eventos temporizados suelta cada estímulo en su momento, así la tensión sube de forma progresiva en vez de golpe.',
          'Los NPC son agentes sobre una NavMesh ajustada a la geometría de la tienda. Cada uno lleva un nivel de estrés que decide su velocidad: los alterados corren, los tranquilos se quedan quietos o caminan despacio. Varían también de escala, con la velocidad proporcional al tamaño y todo gestionado desde un control centralizado.',
          'Las manos se resuelven con un modelo de cinemática inversa propio, para que el cuerpo cuadre tanto al mirar hacia abajo como al manipular el torniquete.',
          'El detector de input distingue mover el mando de mover el brazo. No es el mismo gesto cuando lo que estás evaluando es una maniobra médica.',
          'Al recibir el ataque del asaltante, las gafas pasan a passthrough unos segundos y después entra una viñeta que va oscureciendo la visión, imitando el desvanecimiento por pérdida de sangre.',
          'La Quest 3 va justa de cómputo, así que el wifi y el Bluetooth viven en hilos secundarios. El hilo de render no se toca.' ] },
        { type: 'heading', text: 'Mi parte' },
        { type: 'text', text: 'La aplicación de monitorización la programé yo solo, y también me encargué del manager general de eventos del aplicativo, que es lo que ejecuta esas órdenes del lado de las gafas.' },
        { type: 'list', items: [
          'Se conecta por wifi al puerto de comunicación de las gafas y muestra en tiempo real lo que está viendo el alumno.',
          'El instructor pausa, reanuda o reinicia la simulación desde su panel, sin tocar el visor.',
          'Registro de eventos para depurar durante las sesiones.' ] },
        { type: 'heading', text: 'El prototipo háptico' },
        { type: 'text', text: 'Un ESP32-C6 hace de receptor, conectado a las gafas por BLE, y reparte la señal por ESP-NOW a varios ESP32-C3 repartidos por las extremidades. La idea era que el golpe se notara físicamente en el brazo correspondiente. La comunicación entre nodos quedó funcionando; la respuesta háptica en la extremidad se dejó para la siguiente iteración.' },
        { type: 'note', variant: 'bordered', text: 'El resultado fue un prototipo ejecutable que cumplía los objetivos formativos, pero no llegó a versión final dentro del periodo de prácticas. La empresa siguió el desarrollo después.' },
        { type: 'gallery', variant: 'cols-2', heading: 'Galería', alts: shots('Captura de Primeros Auxilios VR', 4) },
      ],
    },
    en: {
      title: 'First Aid (VR)',
      summary: 'A Meta Quest 3 simulation for practising a tourniquet under acute stress. Internship at Proyecto Respira.',
      backLabel: '← Projects',
      header: {
        h1: 'First Aid VR', accent: 'VR', eyebrow: 'Internship · Proyecto Respira',
        lead: "Proyecto Respira runs in-person first aid training. They wanted their students to be able to practise applying a tourniquet with the pressure of a real emergency, so we built the scene on Meta Quest 3. It was the company's first move into XR." },
      blocks: [
        { type: 'video', placeholder: 'Video coming soon — First Aid VR demo' },
        { type: 'panels', cols: 4, items: [
          { label: 'Device', text: 'Meta Quest 3' },
          { label: 'Engine', text: 'Unity 6 · Meta SDK' },
          { label: 'Team', text: '2 programmers, 2 artists' },
          { label: 'Time', text: '300 h, remote' } ] },
        { type: 'heading', text: 'What happens inside' },
        { type: 'text', text: 'You start in a shopping centre library, rebuilt with original art by the team. Nothing warns you. A few seconds in, the stimuli kick off.' },
        { type: 'list', items: [
          'People running, lights flickering, smoke. A timed event system releases each stimulus at its own moment, so the tension climbs gradually instead of all at once.',
          'The NPCs are agents on a NavMesh fitted to the shop geometry. Each carries a stress level that sets its speed: the agitated ones run, the calm ones stand still or walk slowly. They vary in scale too, with speed proportional to size, all driven from one central controller.',
          'Hands run on a custom inverse kinematics model, so the body lines up both when you look down and when you handle the tourniquet.',
          "The input detector tells moving the controller apart from moving your arm. Those aren't the same gesture when what you're assessing is a medical manoeuvre.",
          'When the assailant strikes, the headset cuts to passthrough for a few seconds and then a vignette closes in, mimicking fainting from blood loss.',
          'The Quest 3 is tight on compute, so wifi and Bluetooth live on secondary threads. The render thread stays untouched.' ] },
        { type: 'heading', text: 'My part' },
        { type: 'text', text: "I wrote the monitoring application on my own, and I also owned the app's general event manager, which is what carries out those commands on the headset side." },
        { type: 'list', items: [
          "It connects over wifi to the headset's communication port and shows in real time what the student is seeing.",
          'The instructor pauses, resumes or restarts the simulation from their panel, without touching the headset.',
          'An event log for debugging during sessions.' ] },
        { type: 'heading', text: 'The haptic prototype' },
        { type: 'text', text: 'An ESP32-C6 acts as the receiver, connected to the headset over BLE, and forwards the signal via ESP-NOW to several ESP32-C3 modules placed on the limbs. The idea was for the hit to register physically on the matching arm. Communication between nodes ended up working; the haptic response on the limb was left for the next iteration.' },
        { type: 'note', variant: 'bordered', text: "The outcome was a working prototype that met the training goals, though it didn't reach a final version within the internship. The company carried the development on afterwards." },
        { type: 'gallery', variant: 'cols-2', heading: 'Gallery', alts: shots('First Aid VR screenshot', 4, '') },
      ],
    },
  },
]
