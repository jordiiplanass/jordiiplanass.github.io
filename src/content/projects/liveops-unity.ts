import { tr } from '../../i18n/types';
import type { Ficha } from '../types';

export default {
  title: 'LiveOps Unity',
  year: 2026,
  tags: ['React 19', 'TypeScript', 'Firebase', 'Unity 6', 'C#', 'LiveOps'],
  summary: tr(
    'Herramienta de LiveOps para proyectos pequeños: panel en React, Firebase Realtime Database y un cliente de Unity que aplica los cambios sin recompilar.',
    'A LiveOps tool for small projects: a React panel, Firebase Realtime Database and a Unity client that picks up changes without recompiling.',
  ),
  eyebrow: tr('Proyecto aplicado', 'Applied project'),
  lead: tr(
    'Las herramientas de LiveOps del mercado te sobran de funciones o te atan a una plataforma cerrada, y en un proyecto pequeño eso se paga en integración y en factura. Esto va al revés: un panel web propio, Firebase Realtime Database como capa de datos y un cliente de Unity que recoge los cambios en caliente.',
    'Off-the-shelf LiveOps tools either give you far more than you need or lock you into a closed platform, and on a small project you pay for that in integration work and in invoices. This one goes the other way: a panel I own, Firebase Realtime Database as the data layer, and a Unity client that picks up changes while the game is running.',
  ),
  sections: [
    {
      type: 'cards',
      title: tr('Cómo está montado', "How it's put together"),
      cols: 3,
      numbered: true,
      items: [
        {
          title: tr('Panel web', 'Web panel'),
          text: tr(
            'React 19 con TypeScript y Vite, shadcn/ui sobre Tailwind. Cinco secciones: economías, flags, Battle Pass, Daily Reward y jugadores.',
            'React 19 with TypeScript and Vite, shadcn/ui over Tailwind. Five sections: economies, flags, Battle Pass, Daily Reward and players.',
          ),
        },
        {
          title: 'Firebase',
          text: tr(
            'Un árbol JSON con tres ramas. El panel escribe la configuración, Unity escribe el estado del jugador, y ninguno toca la rama del otro.',
            "A JSON tree with three branches. The panel writes the configuration, Unity writes player state, and neither touches the other's branch.",
          ),
        },
        {
          title: tr('Cliente Unity', 'Unity client'),
          text: tr(
            'Unity 6 con el SDK de Firebase. Lee la configuración al iniciar sesión y se queda escuchando por WebSocket. Sin polling.',
            'Unity 6 with the Firebase SDK. It reads the configuration on sign-in and keeps listening over WebSocket. No polling.',
          ),
        },
      ],
    },
    {
      type: 'list',
      title: tr('Lo que se toca sin recompilar', 'What you change without recompiling'),
      items: [
        tr(
          'Monedas: límite de saldo, formato de visualización, si es estacional, y un bitfield de propiedades (blanda, dura, premium, intercambiable, ganada por anuncios).',
          "Currencies: balance cap, display format, whether it's seasonal, and a bitfield of properties (soft, hard, premium, tradable, earned through ads).",
        ),
        tr(
          'Catálogo de objetos, con tipo, rareza, tamaño de pila y si es consumible o intercambiable.',
          "The item catalogue, with type, rarity, stack size and whether it's consumable or tradable.",
        ),
        tr('Tipos de experiencia y su multiplicador.', 'Experience types and their multiplier.'),
        tr(
          'Battle Pass: cuántos niveles, cuánta XP cuesta cada uno, la recompensa por nivel en vía gratuita y premium, y las fechas de la temporada.',
          'Battle Pass: how many tiers, how much XP each one costs, the reward per tier on the free and premium tracks, and the season dates.',
        ),
        tr(
          'Daily Reward: la tabla de recompensas por día de racha y qué ocurre al pasar del último día, reiniciar o mantener.',
          'Daily Reward: the reward table per streak day, and what happens past the last day, reset or hold.',
        ),
        tr(
          'Feature flags para encender y apagar funcionalidades en remoto.',
          'Feature flags to switch functionality on and off remotely.',
        ),
      ],
    },
    {
      type: 'text',
      text: tr(
        'Cualquiera de esos cambios llega a las sesiones activas en el momento en que se guarda.',
        "Any of those changes reaches live sessions the moment it's saved.",
      ),
    },
    {
      type: 'list',
      title: tr('Decisiones', 'Decisions'),
      items: [
        tr(
          '<strong>Realtime Database antes que Firestore.</strong> Firestore consulta mejor, pero aquí lo que pesaba era la latencia de propagación, y Realtime Database la resuelve con una conexión WebSocket persistente.',
          '<strong>Realtime Database over Firestore.</strong> Firestore queries better, but what mattered here was propagation latency, and Realtime Database handles it with a persistent WebSocket connection.',
        ),
        tr(
          '<strong>Sin backend propio.</strong> Montarlo competía en tiempo con el desarrollo del juego, que es justo lo que esta herramienta pretende no robar.',
          '<strong>No backend of my own.</strong> Building one competed for time with the game itself, which is exactly what this tool is meant not to steal.',
        ),
        tr(
          '<strong>Sin gestor de estado global en React.</strong> El estado de cada sección es local y se sincroniza con Firebase por su cuenta. Redux o Zustand habrían sumado complejidad sin ganar nada.',
          "<strong>No global state manager in React.</strong> Each section's state is local and syncs with Firebase on its own. Redux or Zustand would have added complexity for nothing.",
        ),
        tr(
          '<strong>Configuración y jugadores en ramas separadas.</strong> Esta no la planifiqué: salió de que, compartiendo estructura, las reglas de seguridad de Firebase se volvían imposibles de razonar. Separar quién escribe qué simplificó las reglas y la lógica del cliente a la vez.',
          "<strong>Config and players on separate branches.</strong> I didn't plan this one. It came out of the fact that, sharing a structure, Firebase's security rules became impossible to reason about. Splitting who writes what simplified the rules and the client logic at once.",
        ),
      ],
    },
    {
      type: 'text',
      title: tr('Lo que más me costó', 'The hardest part'),
      text: tr(
        'El ciclo de vida de los listeners. Apoyarse en ellos para propagar cualquier cambio suena sencillo, hasta que dejas uno vivo sobre un objeto de Unity ya destruido y empiezan a saltar excepciones en el hilo principal del motor que no es evidente de dónde vienen. Cancelar las suscripciones en OnDestroy es de esas cosas que no salen en los tutoriales y que separan un prototipo de algo que aguanta.',
        "Listener lifetimes. Leaning on them to propagate any change sounds simple, right up until you leave one alive on a Unity object that's already been destroyed and exceptions start firing on the engine's main thread with no obvious origin. Cancelling subscriptions in OnDestroy is one of those things the tutorials skip, and it's what separates a prototype from something that holds up.",
      ),
    },
    {
      type: 'list',
      title: tr('Test de usabilidad', 'Usability test'),
      items: [
        tr(
          'Cinco participantes con perfil de desarrollador o diseñador de videojuegos, y cinco tareas que recorren el flujo completo: configurar el evento en el panel y verificar su efecto en Unity.',
          'Five participants working as game developers or designers, and five tasks covering the whole flow: configure the event in the panel, then verify its effect in Unity.',
        ),
        tr(
          'Los cinco completaron las cinco tareas sin ayuda, con una dificultad percibida media de 5,88 sobre 7.',
          'All five finished all five tasks unaided, with a mean perceived difficulty of 5.88 out of 7.',
        ),
        tr(
          'El punto flojo salió señalado: localizar las herramientas de consulta dentro de Unity. Esa tarea acumuló 4,87 veces más pasos que el camino óptimo y la peor nota de dificultad, 4,4. El problema es dónde vive el menú, no lo que hace.',
          'The weak spot came through clearly: finding the inspection tools inside Unity. That task racked up 4.87 times more steps than the optimal path and the worst difficulty score, 4.4. The problem is where the menu lives, not what it does.',
        ),
      ],
    },
    {
      type: 'note',
      text: tr(
        'Los participantes que venían de PlayFab o Unity Gaming Services comentaron que aquí hacen falta menos pasos para configurar un evento simple, a cambio de cubrir bastante menos terreno. Con cinco personas eso es una orientación, no un benchmark.',
        "Participants coming from PlayFab or Unity Gaming Services said this takes fewer steps to configure a simple event, in exchange for covering considerably less ground. With five people that's a pointer, not a benchmark.",
      ),
    },
    {
      type: 'gallery',
      title: tr('Capturas', 'Screenshots'),
      alt: tr('Captura de LiveOps Unity', 'LiveOps Unity screenshot'),
      cols: 2,
    },
  ],
} satisfies Ficha;
