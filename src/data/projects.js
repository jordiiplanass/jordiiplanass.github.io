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
 *   meta       (games) { role, about } shown under the carousel title
 *   summary    card summary (games: no card text exists in the blueprint, derived from page copy; projects: verbatim row text)
 *   backLabel  text of the back link ('← Games' / '← Aplicaciones' / '← Applications')
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
 *   CASE STUDY BLOCKS
 *     heading gains kicker?:'01'     mono number + short line above the h2; chapter look (top border, extra space)
 *     text    now renders **bold**
 *     { type:'facts', items:[{ label, value }] }                 horizontal definition strip (3 cols, 2 ≤640)
 *     { type:'skills', groups:[{ label, items }] }               panel of labelled .tools chips; logo when toolIcons (home.js) has the name
 *     { type:'metrics', items:[{ value, label, context }] }      4 big numbers (2 cols <=760px), reveal on scroll
 *     { type:'layers', caption, rows:[{ label, items:[{ code, name, sub }] }],   architecture figure, rows top->bottom
 *           side:{ label, items:[{ code, name, sub }] },         dashed column spanning all rows (below on mobile)
 *           channels:{ label, items:[{ name, text }] } }         strip under the diagram
 *     { type:'system', kicker, title, problem, solution, points:[**bold** ok], patterns:[tags],
 *           metric?:{ value, label }, media:{ file?, alt, placeholder, source?:{ text, link, href }, contain?:bool (chart: no crop) }, flip?:bool,
 *           labels:{ problem, solution } }                       media.file = path in src/media/<slug>/ (e.g. 'systems/x.png');
 *                                                                missing file => dashed placeholder showing media.placeholder; flip = media right
 *     { type:'catalog', items:[{ code, name, systems:[...] }] }  3-col cards (2 <=860, 1 <=640) with code badge + system list
 *     { type:'table', columns:[...], rows:[[...]], caption? }    scrolls horizontally inside its own wrapper (min 640px)
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
      meta: { about: '¡Domina las habilidades de Pipo para superar nivel tras nivel en este plataformas 3D!', role: 'Programador de sistemas y UI' },
      backLabel: '← Games', nextLabel: 'Siguiente: Fragments of the Abyss →',
      header: { showYear: true },
      blocks: [
        { type: 'intro',
          text: 'Plataformas 3D de velocidad protagonizado por Pipo, un pingüino que se desliza sobre el hielo. Diseñé la arquitectura y programé los sistemas que sostienen el juego: del pooling y el guardado a la cámara, la interfaz y la analítica de los playtests.',
          aside: { label: 'Mi rol', text: 'Systems Programmer. Toda la capa de sistemas e interfaces; el controlador del personaje y las mecánicas de entorno son de otros dos programadores del equipo.' } },
        { type: 'facts', items: [
          { label: 'Rol', value: 'Systems Programmer' },
          { label: 'Equipo', value: 'Hellframe Studios · 5 personas' },
          { label: 'Motor', value: 'Unity 6 LTS · URP' },
          { label: 'Plataforma', value: 'PC · Steam Deck' },
          { label: 'Contexto', value: 'Trabajo de Fin de Grado · ENTI-UB' },
          { label: 'Reconocimiento', value: '3 nominaciones · Mejor tráiler' },
        ] },
        { type: 'skills', groups: [
          { label: 'Motor y lenguaje', items: ['Unity 6', 'URP', 'C#'] },
          { label: 'Herramientas', items: ['Rider', 'Git', 'Jira', 'Unity Profiler', 'Lizard'] },
          { label: 'Competencias', items: ['Arquitectura de sistemas', 'Patrones de diseño', 'Programación de UI', 'Sistemas de cámara', 'Optimización', 'Herramientas de editor', 'Analítica'] },
        ] },
        { type: 'video', youtube: 'HsIRSft30w8', title: 'Gameplay de Pipo the Penguin', ariaLabel: 'Reproducir Gameplay de Pipo the Penguin' },

        { type: 'heading', kicker: '01', text: 'En cifras' },
        { type: 'text', text: 'Cada objetivo técnico se fijó al inicio con un umbral medible y se validó al final con herramientas: Lizard para la calidad del código y Unity Profiler sobre Steam Deck para el rendimiento.' },
        { type: 'metrics', items: [
          { value: '99,2 %', label: 'métodos con complejidad ≤ 10', context: 'Lizard · Boss Room: 98,9 %' },
          { value: '0 B', label: 'basura generada por el pooling', context: 'antes: 4.800 B por fotograma' },
          { value: '0,05 ms', label: 'coste de los sistemas por fotograma', context: 'p99: 0,20 ms · límite: 2 ms' },
          { value: '90–147', label: 'FPS medios en Steam Deck', context: 'objetivo: 60 FPS' },
        ] },

        { type: 'heading', kicker: '02', text: 'Arquitectura' },
        { type: 'text', text: 'Lo difícil no era cada sistema por separado, sino mantenerlos **desacoplados cuando tenían que hablar entre sí**: si un cambio se propaga en cadena, el proyecto deja de escalar. La regla fue usar siempre el mecanismo menos acoplado que resolviera el problema, sin pagar por un desacoplamiento que un equipo de cinco no necesitaba.' },
        { type: 'layers',
          caption: 'Seis familias de sistemas organizadas en capas. Las superiores escuchan a las inferiores; las inferiores no conocen a quien las consume.',
          rows: [
            { label: 'Presentación', items: [
              { code: 'C', name: 'Interfaz', sub: 'HUD · Menús · Tienda · Diálogos' },
              { code: 'D', name: 'Cámara y VFX', sub: 'FollowerCamera · Efectos' },
              { code: 'E', name: 'Audio', sub: 'SFX · Música' },
            ] },
            { label: 'Gameplay', items: [{ code: 'B', name: 'Soporte de gameplay', sub: 'Guardado · Economía · Interacción · Personalización' }] },
            { label: 'Núcleo', items: [{ code: 'A', name: 'Infraestructura', sub: 'Pooling · Escenas · Niveles · Input' }] },
          ],
          side: { label: 'Transversal', items: [{ code: 'F', name: 'Herramientas', sub: 'Analítica · Localización · Debug · Editor' }] },
          channels: { label: '4 vías de comunicación', items: [
            { name: 'Singleton', text: 'Solo para los gestores globales.' },
            { name: 'Eventos (Observer)', text: 'Reaccionar sin conocer al emisor.' },
            { name: 'ScriptableObjects', text: 'Datos editables sin tocar código.' },
            { name: 'Referencia directa', text: 'Componentes que ya viven juntos.' },
          ] } },

        { type: 'heading', kicker: '03', text: 'Sistemas destacados' },
        { type: 'system', labels: { problem: 'El reto', solution: 'La solución' },
          kicker: 'Familia D · Cámara', title: 'Una cámara por zonas pensada para diseñadores',
          problem: 'En un plataformas de velocidad el encuadre cambia en cada tramo: rampas, persecuciones hacia la cámara, cañones. Resolverlo con código, o repartido entre varias cámaras virtuales, ataba el diseño de niveles a la programación.',
          solution: 'Una FollowerCamera propia que compone módulos independientes: seguimiento con zona muerta, anticipación del movimiento, temblor y transición. El diseñador coloca volúmenes en el editor; cada uno guarda la configuración de su zona y la cámara transita suavemente hacia ella cuando entra el jugador.',
          points: [
            '**Overrides selectivos**: una zona puede cambiar solo la anticipación y dejar intacto el resto.',
            'Límites de seguimiento **por eje**, algo que Cinemachine no permite de forma equivalente.',
            'Validada con un **test A/B frente a Cinemachine** en tres zonas reales del juego.',
          ],
          patterns: ['Composición', 'ScriptableObjects', 'Herramientas de editor'],
          metric: { value: '1 componente', label: 'por zona, frente a cámara virtual, trigger y tres módulos en Cinemachine' },
          media: { file: 'systems/camera.gif', alt: 'Transición de la cámara al entrar en una nueva zona', placeholder: 'GIF: transición de cámara en la primera rampa del onboarding, junto al volumen de zona en el editor' } },
        { type: 'system', flip: true, labels: { problem: 'El reto', solution: 'La solución' },
          kicker: 'Familia A · Núcleo', title: 'Pooling sin recolector de basura',
          problem: 'Monedas que salen de un cofre, pisadas en la nieve, balas de cañón, partículas de recompensa: el juego crea y destruye objetos sin parar. Con Instantiate y Destroy, cada destrucción termina en un pico del recolector que el jugador percibe como un tirón.',
          solution: 'Un PoolManager central con una API mínima, Spawn y Return por identificador, que precarga cada reserva al cargar la escena. Los sistemas piden y devuelven objetos sin saber cómo se gestionan; el audio reutiliza la misma idea con su reserva de fuentes de sonido.',
          points: [
            '**0 bytes** asignados y **0 recolecciones** durante la ráfaga de prueba.',
            'Fotogramas por encima de 20 ms: de **110 a 37**.',
            'Frame time en el percentil 99: de 23,7 a **21,9 ms**.',
          ],
          patterns: ['Object Pool', 'Singleton', 'Unity Profiler'],
          metric: { value: '4.800 → 0 B', label: 'memoria asignada por fotograma durante una ráfaga' },
          media: { file: 'systems/pooling.svg', alt: 'Gráfica de memoria asignada por fotograma: 4.800 B con Instantiate frente a 0 B con Object Pool', source: { text: 'Fuente: TFG, tabla 21 (apartado 8.2). Datos: Anexo 3, pool-benchmark-20260612 (600 fotogramas, Steam Deck).', link: 'Repositorio de datos', href: 'https://drive.google.com/drive/folders/1W3dqOHFEdEphT22Dhh1SATX_TDIlAT9-?usp=sharing' }, placeholder: 'Captura: Unity Profiler comparando Instantiate directo frente al pool (memoria asignada por fotograma)' } },
        { type: 'system', labels: { problem: 'El reto', solution: 'La solución' },
          kicker: 'Familia C · Interfaz', title: 'Una interfaz que solo escucha',
          problem: 'Menús, pausa, HUD, ajustes, resultados, tienda y diálogos: muchas pantallas que cambian durante toda la producción. Si la interfaz contiene lógica de juego, cada ajuste de diseño rompe algo en otra parte.',
          solution: 'La interfaz no decide nada: escucha los eventos del sistema que representa y se limita a mostrarlos. La navegación usa una pila de pantallas que funciona con mando desde el primer fotograma, y los ajustes siguen el patrón Strategy: añadir un control nuevo es implementar una interfaz, sin tocar el gestor.',
          points: [
            '**Vista previa de nivel** sobre cada pozo del hub, con el mejor tiempo, las monedas y la medalla.',
            '**Tienda de cosméticos** con el pingüino renderizado en vivo.',
            '**Diálogos** en ScriptableObjects que cambian de idioma en mitad de la conversación.',
            '**Resultados con medallas** por umbrales de tiempo, inspirados en Mail Mole.',
          ],
          patterns: ['Observer', 'State', 'Strategy'],
          metric: { value: '0 líneas', label: 'de código para añadir un diálogo: un ScriptableObject y un trigger' },
          media: { file: 'systems/ui.gif', alt: 'Recorrido por el menú principal, los ajustes y la tienda', placeholder: 'GIF: recorrido por menú principal, ajustes y tienda con la vista previa del pingüino' } },
        { type: 'system', flip: true, labels: { problem: 'El reto', solution: 'La solución' },
          kicker: 'Familia F · Herramientas', title: 'Analítica para decidir con datos',
          problem: 'Para ajustar la dificultad y la duración hacían falta datos reales: dónde muere el jugador, cuántos intentos necesita y qué monedas de oro se quedan sin recoger.',
          solution: 'Tres capas independientes: obtenedores por tipo de evento que cada sistema llama con una línea, paquetes serializables con una cabecera común (usuario, sesión, build y plataforma) y un gestor que los escribe en CSV. Añadir un dato nuevo no exige tocar el almacenamiento.',
          points: [
            'Midió las **13 sesiones** de playtest externo: **15 minutos** de media, dentro del objetivo de 10 a 20.',
            'Mostró que **7 de 13** jugadores no terminaban: el problema apuntaba a la dificultad, no a la duración.',
            'Campos opcionales declarados con una **máscara de bits** en cada paquete.',
          ],
          patterns: ['DTO', 'Singleton', 'CSV'],
          media: { file: 'systems/analytics.png', alt: 'Distribución del tiempo de sesión en los playtests', contain: true, source: { text: 'Fuente: TFG, figura 31 (apartado 7.2). Datos: Anexo 4, telemetría de las 13 sesiones de playtest (CSV).', link: 'Repositorio de datos', href: 'https://drive.google.com/drive/folders/1W3dqOHFEdEphT22Dhh1SATX_TDIlAT9-?usp=sharing' }, placeholder: 'Gráfico: distribución del tiempo de sesión de los playtests o mapa de muertes por nivel' } },

        { type: 'heading', kicker: '04', text: 'Catálogo completo' },
        { type: 'text', text: 'Todo lo que programé, agrupado por familia.' },
        { type: 'catalog', items: [
          { code: 'A', name: 'Núcleo', systems: ['Gestores globales', 'PoolManager', 'SceneManager con carga asíncrona', 'Ciclo de vida del nivel', 'Capa de input'] },
          { code: 'B', name: 'Soporte de gameplay', systems: ['Guardado de progreso', 'Checkpoints', 'Economía de monedas', 'Tiempo con triggers', 'Interacción', 'Personalización'] },
          { code: 'C', name: 'Interfaz', systems: ['HUD y cuenta atrás', 'Menú principal y pausa', 'Ajustes', 'Transiciones de pantalla', 'Resultados', 'Vista previa de nivel', 'Tienda', 'Diálogos'] },
          { code: 'D', name: 'Cámara y VFX', systems: ['FollowerCamera', 'Volúmenes de zona', 'Agua y boyas', 'Sombras y see-through', 'Partículas y boids'] },
          { code: 'E', name: 'Audio', systems: ['AudioPlayer con pool de fuentes', 'MusicPlayer con crossfade'] },
          { code: 'F', name: 'Herramientas', systems: ['Analítica a CSV', 'Localización ES/EN', 'Debug', 'Utilidades', 'Herramientas de editor'] },
        ] },

        { type: 'heading', kicker: '05', text: 'Decisiones técnicas' },
        { type: 'text', text: 'Cada patrón respondió a un problema concreto. Cuando la alternativa más formal no compensaba su coste para el tamaño del proyecto, la descarté.' },
        { type: 'table', columns: ['Patrón', 'Dónde', 'Alternativa descartada', 'Motivo'], rows: [
          ['Singleton', 'Gestores globales', 'Inyección de dependencias (VContainer)', 'Coste de infraestructura excesivo para el alcance'],
          ['Observer', 'Economía, tiempo, interacción, UI', 'Referencias directas', 'Evita el acoplamiento en cadena'],
          ['Object Pool', 'PoolManager, fuentes de audio', 'Instantiate / Destroy', 'Elimina los picos del recolector'],
          ['Facade', 'Gestión de escenas', 'Llamadas directas a la API de Unity', 'Aísla a cada cliente de la carga asíncrona'],
          ['State', 'Flujo de pantallas, ciclo del nivel', 'Transiciones dentro de cada pantalla', 'Reordenar pantallas sin tocar las demás'],
          ['Strategy', 'Controles de ajustes', 'Comprobar tipos en el gestor', 'Añadir un control sin modificar el gestor'],
        ] },

        { type: 'heading', kicker: '06', text: 'Límites y siguientes pasos' },
        { type: 'text', text: 'Los 10 avisos de complejidad que quedan están todos en herramientas de editor; ninguno en código que se ejecute durante la partida. Lo que cambiaría si el proyecto creciera:' },
        { type: 'list', items: [
          '**Inyección de dependencias**: sustituir los Singletons por un contenedor como VContainer para probar sistemas de forma aislada.',
          '**Colisión de cámara**: el sistema propio no resuelve la oclusión con la geometría, algo que Cinemachine trae de serie.',
          '**Deuda de nomenclatura** en la cámara, heredada de su primera versión basada en raíles.',
        ] },

        { type: 'gallery', variant: 'cols-2', heading: 'Capturas', alts: shots('Captura de Pipo the Penguin', 4) },
      ],
    },
    en: {
      title: 'Pipo the Penguin',
      summary: 'A 3D platformer starring Pipo, a penguin who slides across the ice.',
      meta: { about: "Master Pipo's abilities to beat level after level in this 3D platformer!", role: 'Systems and UI programmer' },
      backLabel: '← Games', nextLabel: 'Next: Fragments of the Abyss →',
      header: { showYear: true },
      blocks: [
        { type: 'intro',
          text: 'A speed-focused 3D platformer starring Pipo, a penguin who slides across the ice. I designed the architecture and programmed the systems that hold the game together: from pooling and saving to the camera, the interface and the playtest analytics.',
          aside: { label: 'My role', text: 'Systems Programmer. The whole systems and interface layer; the character controller and environment mechanics belong to two other programmers on the team.' } },
        { type: 'facts', items: [
          { label: 'Role', value: 'Systems Programmer' },
          { label: 'Team', value: 'Hellframe Studios · 5 people' },
          { label: 'Engine', value: 'Unity 6 LTS · URP' },
          { label: 'Platform', value: 'PC · Steam Deck' },
          { label: 'Context', value: 'Final degree project · ENTI-UB' },
          { label: 'Recognition', value: '3 nominations · Best trailer' },
        ] },
        { type: 'skills', groups: [
          { label: 'Engine & language', items: ['Unity 6', 'URP', 'C#'] },
          { label: 'Tools', items: ['Rider', 'Git', 'Jira', 'Unity Profiler', 'Lizard'] },
          { label: 'Skills', items: ['Systems architecture', 'Design patterns', 'UI programming', 'Camera systems', 'Optimisation', 'Editor tooling', 'Analytics'] },
        ] },
        { type: 'video', youtube: 'HsIRSft30w8', title: 'Pipo the Penguin gameplay', ariaLabel: 'Play Pipo the Penguin gameplay' },

        { type: 'heading', kicker: '01', text: 'By the numbers' },
        { type: 'text', text: 'Every technical goal was set up front with a measurable threshold and validated at the end with tools: Lizard for code quality and Unity Profiler on Steam Deck for performance.' },
        { type: 'metrics', items: [
          { value: '99.2%', label: 'methods at complexity ≤ 10', context: 'Lizard · Boss Room: 98.9%' },
          { value: '0 B', label: 'garbage generated by pooling', context: 'before: 4,800 B per frame' },
          { value: '0.05 ms', label: 'system cost per frame', context: 'p99: 0.20 ms · budget: 2 ms' },
          { value: '90–147', label: 'average FPS on Steam Deck', context: 'target: 60 FPS' },
        ] },

        { type: 'heading', kicker: '02', text: 'Architecture' },
        { type: 'text', text: 'The hard part was not each system on its own but **keeping them decoupled when they had to talk to each other**: once a change ripples through the codebase, the project stops scaling. The rule was to always use the least coupled mechanism that solved the problem, without paying for decoupling a team of five did not need.' },
        { type: 'layers',
          caption: 'Six system families arranged in layers. Upper layers listen to lower ones; lower layers never know who consumes them.',
          rows: [
            { label: 'Presentation', items: [
              { code: 'C', name: 'Interface', sub: 'HUD · Menus · Shop · Dialogues' },
              { code: 'D', name: 'Camera & VFX', sub: 'FollowerCamera · Effects' },
              { code: 'E', name: 'Audio', sub: 'SFX · Music' },
            ] },
            { label: 'Gameplay', items: [{ code: 'B', name: 'Supporting gameplay', sub: 'Saving · Economy · Interaction · Customisation' }] },
            { label: 'Core', items: [{ code: 'A', name: 'Infrastructure', sub: 'Pooling · Scenes · Levels · Input' }] },
          ],
          side: { label: 'Cross-cutting', items: [{ code: 'F', name: 'Tools', sub: 'Analytics · Localisation · Debug · Editor' }] },
          channels: { label: '4 communication channels', items: [
            { name: 'Singleton', text: 'Global managers only.' },
            { name: 'Events (Observer)', text: 'React without knowing the sender.' },
            { name: 'ScriptableObjects', text: 'Data editable without code.' },
            { name: 'Direct reference', text: 'Components that already live together.' },
          ] } },

        { type: 'heading', kicker: '03', text: 'Featured systems' },
        { type: 'system', labels: { problem: 'The challenge', solution: 'The solution' },
          kicker: 'Family D · Camera', title: 'A zone-based camera built for designers',
          problem: 'In a speed platformer the framing changes on every stretch: ramps, chases towards the camera, cannons. Solving it in code, or spread across several virtual cameras, tied level design to programming.',
          solution: 'A custom FollowerCamera composed of independent modules: dead-zone follow, movement look-ahead, shake and transitions. Designers place volumes in the editor; each one stores its zone settings and the camera blends smoothly into them when the player enters.',
          points: [
            '**Selective overrides**: a zone can change only the look-ahead and leave everything else untouched.',
            '**Per-axis** follow limits, which Cinemachine does not offer in an equivalent way.',
            'Validated with an **A/B test against Cinemachine** in three real zones of the game.',
          ],
          patterns: ['Composition', 'ScriptableObjects', 'Editor tooling'],
          metric: { value: '1 component', label: 'per zone, versus a virtual camera, a trigger and three modules in Cinemachine' },
          media: { file: 'systems/camera.gif', alt: 'Camera transition when entering a new zone', placeholder: 'GIF: camera transition on the first onboarding ramp, next to the zone volume in the editor' } },
        { type: 'system', flip: true, labels: { problem: 'The challenge', solution: 'The solution' },
          kicker: 'Family A · Core', title: 'Pooling with zero garbage collection',
          problem: 'Coins bursting out of chests, footprints in the snow, cannonballs, reward particles: the game creates and destroys objects constantly. With Instantiate and Destroy, every destruction ends up as a garbage collector spike the player feels as a hitch.',
          solution: 'A central PoolManager with a minimal API, Spawn and Return by identifier, that preloads every pool when the scene loads. Systems request and return objects without knowing how they are managed; audio reuses the same idea with its pool of sound sources.',
          points: [
            '**0 bytes** allocated and **0 collections** during the stress burst.',
            'Frames above 20 ms: from **110 to 37**.',
            '99th-percentile frame time: from 23.7 to **21.9 ms**.',
          ],
          patterns: ['Object Pool', 'Singleton', 'Unity Profiler'],
          metric: { value: '4,800 → 0 B', label: 'memory allocated per frame during a burst' },
          media: { file: 'systems/pooling.svg', alt: 'Chart of memory allocated per frame: 4,800 B with Instantiate versus 0 B with Object Pool', source: { text: 'Source: thesis, table 21 (section 8.2). Data: Annex 3, pool-benchmark-20260612 (600 frames, Steam Deck).', link: 'Data repository', href: 'https://drive.google.com/drive/folders/1W3dqOHFEdEphT22Dhh1SATX_TDIlAT9-?usp=sharing' }, placeholder: 'Screenshot: Unity Profiler comparing direct Instantiate against the pool (memory allocated per frame)' } },
        { type: 'system', labels: { problem: 'The challenge', solution: 'The solution' },
          kicker: 'Family C · Interface', title: 'An interface that only listens',
          problem: 'Menus, pause, HUD, settings, results, shop and dialogues: many screens that keep changing throughout production. If the interface holds game logic, every design tweak breaks something elsewhere.',
          solution: 'The interface decides nothing: it listens to the events of the system it represents and just displays them. Navigation uses a screen stack that works with a gamepad from the first frame, and settings follow the Strategy pattern: adding a new control means implementing an interface, without touching the manager.',
          points: [
            '**Level preview** above each well in the hub, with best time, coins and medal.',
            '**Cosmetics shop** with the penguin rendered live.',
            '**Dialogues** in ScriptableObjects that switch language mid-conversation.',
            '**Results with medals** by time thresholds, inspired by Mail Mole.',
          ],
          patterns: ['Observer', 'State', 'Strategy'],
          metric: { value: '0 lines', label: 'of code to add a dialogue: one ScriptableObject and a trigger' },
          media: { file: 'systems/ui.gif', alt: 'Walkthrough of the main menu, settings and shop', placeholder: 'GIF: walkthrough of the main menu, settings and shop with the penguin preview' } },
        { type: 'system', flip: true, labels: { problem: 'The challenge', solution: 'The solution' },
          kicker: 'Family F · Tools', title: 'Analytics to decide with data',
          problem: 'Tuning difficulty and length needed real data: where players die, how many attempts they need and which gold coins are left behind.',
          solution: 'Three independent layers: one obtainer per event type that each system calls in a single line, serialisable packets with a shared header (user, session, build and platform) and a manager that writes them to CSV. Adding a new data point never touches storage.',
          points: [
            'Measured the **13 external playtest sessions**: **15 minutes** on average, within the 10–20 target.',
            'Revealed that **7 of 13** players did not finish: the issue pointed to difficulty, not length.',
            'Optional fields declared with a **bit mask** on each packet.',
          ],
          patterns: ['DTO', 'Singleton', 'CSV'],
          media: { file: 'systems/analytics.png', alt: 'Session length distribution across playtests', contain: true, source: { text: 'Source: thesis, figure 31 (section 7.2). Data: Annex 4, telemetry of the 13 playtest sessions (CSV).', link: 'Data repository', href: 'https://drive.google.com/drive/folders/1W3dqOHFEdEphT22Dhh1SATX_TDIlAT9-?usp=sharing' }, placeholder: 'Chart: playtest session length distribution or death map per level' } },

        { type: 'heading', kicker: '04', text: 'Full catalogue' },
        { type: 'text', text: 'Everything I programmed, grouped by family.' },
        { type: 'catalog', items: [
          { code: 'A', name: 'Core', systems: ['Global managers', 'PoolManager', 'SceneManager with async loading', 'Level lifecycle', 'Input layer'] },
          { code: 'B', name: 'Supporting gameplay', systems: ['Progress saving', 'Checkpoints', 'Coin economy', 'Timed triggers', 'Interaction', 'Customisation'] },
          { code: 'C', name: 'Interface', systems: ['HUD and countdown', 'Main and pause menus', 'Settings', 'Screen transitions', 'Results', 'Level preview', 'Shop', 'Dialogues'] },
          { code: 'D', name: 'Camera & VFX', systems: ['FollowerCamera', 'Zone volumes', 'Water and buoys', 'Shadows and see-through', 'Particles and boids'] },
          { code: 'E', name: 'Audio', systems: ['AudioPlayer with source pool', 'MusicPlayer with crossfade'] },
          { code: 'F', name: 'Tools', systems: ['CSV analytics', 'ES/EN localisation', 'Debug', 'Utilities', 'Editor tools'] },
        ] },

        { type: 'heading', kicker: '05', text: 'Technical decisions' },
        { type: 'text', text: 'Each pattern answered a concrete problem. When the more formal alternative did not pay off for the size of the project, I dropped it.' },
        { type: 'table', columns: ['Pattern', 'Where', 'Discarded alternative', 'Reason'], rows: [
          ['Singleton', 'Global managers', 'Dependency injection (VContainer)', 'Too much infrastructure for the scope'],
          ['Observer', 'Economy, time, interaction, UI', 'Direct references', 'Avoids chain coupling'],
          ['Object Pool', 'PoolManager, audio sources', 'Instantiate / Destroy', 'Removes garbage collector spikes'],
          ['Facade', 'Scene management', 'Direct Unity API calls', 'Shields clients from async loading'],
          ['State', 'Screen flow, level lifecycle', 'Transitions inside each screen', 'Reorder screens without touching the rest'],
          ['Strategy', 'Settings controls', 'Type checks in the manager', 'Add a control without changing the manager'],
        ] },

        { type: 'heading', kicker: '06', text: 'Limits and next steps' },
        { type: 'text', text: 'The 10 remaining complexity warnings all live in editor tools; none in code that runs during gameplay. What I would change if the project grew:' },
        { type: 'list', items: [
          '**Dependency injection**: replace the Singletons with a container such as VContainer to test systems in isolation.',
          '**Camera collision**: the custom system does not handle occlusion with geometry, which Cinemachine provides out of the box.',
          '**Naming debt** in the camera, inherited from its first rail-based version.',
        ] },
        { type: 'gallery', variant: 'cols-2', heading: 'Screenshots', alts: shots('Pipo the Penguin screenshot', 4, '') },
      ],
    },
  },

  {
    slug: 'fragments-of-the-abyss', kind: 'game', year: 2025,
    tags: ['Unity', 'C#', 'Atmospheric', 'Systems'],
    cardTags: ['Unity', 'C#', 'Atmospheric'],
    next: 'chrono-fish', layout: 'default',
    es: {
      title: 'Fragments of the Abyss',
      summary: 'Aventura atmosférica de exploración en las profundidades.',
      meta: { about: 'Survival horror de puzzles: resuelve enigmas y defiéndete con tu linterna y tu cámara.', role: 'Programador de gameplay y sistemas' },
      backLabel: '← Games', nextLabel: 'Siguiente: Chrono Fish →',
      header: { eyebrow: '2025 · Game' },
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
      meta: { about: 'Puzzle survival horror: solve riddles and fend off the dark with your flashlight and camera.', role: 'Gameplay and systems programmer' },
      backLabel: '← Games', nextLabel: 'Next: Chrono Fish →',
      header: { eyebrow: '2025 · Game' },
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
    slug: 'chrono-fish', kind: 'game', year: 2024,
    tags: ['Unity', 'C#', 'Time Mechanic', 'Puzzle'],
    cardTags: ['Unity', 'C#', 'Time Mechanic'],
    next: 'nachito-el-nacho', layout: 'sidebar',
    es: {
      title: 'Chrono Fish',
      summary: 'Puzzle construido alrededor de una mecánica de tiempo: el jugador manipula el flujo temporal para avanzar.',
      meta: { about: 'Dungeon crawler 2D de parrys.', role: 'Programador de gameplay' },
      backLabel: '← Games', nextLabel: 'Siguiente: Nachito el Nacho →',
      header: { titleLines: ['Chrono', 'Fish'] },
      blocks: [
        { type: 'stats', items: [
          { label: 'Año', value: '2024' }, { label: 'Motor', value: 'Unity' },
          { label: 'Género', value: 'Puzzle temporal' }, { label: 'Rol', value: 'Programación' } ] },
        { type: 'intro', text: 'Puzzle construido alrededor de una mecánica de tiempo: el jugador manipula el flujo temporal para avanzar.' },
        { type: 'video', youtube: 'g6t-Ix3g1V0', title: 'Chrono Fish: gameplay', ariaLabel: 'Reproducir Chrono Fish: gameplay' },
        { type: 'tags', items: ['Unity', 'C#', 'Time Mechanic', 'Puzzle'] },
        { type: 'gallery', variant: 'cols-2', heading: 'Galería', alts: shots('Captura de Chrono Fish', 4) },
      ],
    },
    en: {
      title: 'Chrono Fish',
      summary: 'A puzzle built around a time mechanic: the player manipulates the flow of time to progress.',
      meta: { about: 'A 2D dungeon crawler built on parries.', role: 'Gameplay programmer' },
      backLabel: '← Games', nextLabel: 'Next: Nachito el Nacho →',
      header: { titleLines: ['Chrono', 'Fish'] },
      blocks: [
        { type: 'stats', items: [
          { label: 'Year', value: '2024' }, { label: 'Engine', value: 'Unity' },
          { label: 'Genre', value: 'Time puzzle' }, { label: 'Role', value: 'Programming' } ] },
        { type: 'intro', text: 'A puzzle built around a time mechanic: the player manipulates the flow of time to progress.' },
        { type: 'video', youtube: 'g6t-Ix3g1V0', title: 'Chrono Fish: gameplay', ariaLabel: 'Play Chrono Fish: gameplay' },
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
      meta: { about: 'Plataformas 2D caricaturesco: un nacho que se mueve con las habilidades de sus condimentos.', role: 'Programador y diseñador' },
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
      meta: { about: 'A cartoonish 2D platformer: a nacho that moves using its condiments’ abilities.', role: 'Programmer and designer' },
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
      backLabel: '← Aplicaciones',
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
      backLabel: '← Applications',
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
      backLabel: '← Aplicaciones',
      header: {
        h1: 'Primeros Auxilios VR', accent: 'VR', eyebrow: 'Prácticas · Proyecto Respira',
        lead: 'Proyecto Respira da formación presencial en primeros auxilios. Querían que sus alumnos pudieran practicar la colocación de un torniquete con la presión de una urgencia de verdad, así que montamos la escena en Meta Quest 3. Fue la primera vez que la empresa se metía en XR.' },
      blocks: [
        { type: 'video', placeholder: 'Vídeo próximamente: Demo VR de Primeros Auxilios' },
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
      backLabel: '← Applications',
      header: {
        h1: 'First Aid VR', accent: 'VR', eyebrow: 'Internship · Proyecto Respira',
        lead: "Proyecto Respira runs in-person first aid training. They wanted their students to be able to practise applying a tourniquet with the pressure of a real emergency, so we built the scene on Meta Quest 3. It was the company's first move into XR." },
      blocks: [
        { type: 'video', placeholder: 'Video coming soon: First Aid VR demo' },
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
