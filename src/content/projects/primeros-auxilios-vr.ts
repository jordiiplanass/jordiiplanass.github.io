import { tr } from '../../i18n/types';
import type { Ficha } from '../types';

// ponytail: sin vídeo todavía; poner el ID de YouTube en la sección `video` o quitarla.
export default {
  title: tr('Primeros Auxilios (VR)', 'First Aid (VR)'),
  year: 2024,
  tags: ['Unity 6', 'Meta Quest 3', 'C#', 'XR', 'ESP32'],
  summary: tr(
    'Simulación en Meta Quest 3 para practicar un torniquete bajo estrés agudo. Prácticas en Proyecto Respira.',
    'A Meta Quest 3 simulation for practising a tourniquet under acute stress. Internship at Proyecto Respira.',
  ),
  eyebrow: tr('Prácticas · Proyecto Respira', 'Internship · Proyecto Respira'),
  lead: tr(
    'Proyecto Respira da formación presencial en primeros auxilios. Querían que sus alumnos pudieran practicar la colocación de un torniquete con la presión de una urgencia de verdad, así que montamos la escena en Meta Quest 3. Fue la primera vez que la empresa se metía en XR.',
    "Proyecto Respira runs in-person first aid training. They wanted their students to be able to practise applying a tourniquet with the pressure of a real emergency, so we built the scene on Meta Quest 3. It was the company's first move into XR.",
  ),
  sections: [
    { type: 'video', title: tr('Demo VR de Primeros Auxilios', 'First Aid VR demo') },
    {
      type: 'cards',
      cols: 4,
      label: true,
      items: [
        { title: tr('Dispositivo', 'Device'), text: 'Meta Quest 3' },
        { title: tr('Motor', 'Engine'), text: tr('Unity 6 · SDK de Meta', 'Unity 6 · Meta SDK') },
        { title: tr('Equipo', 'Team'), text: tr('2 programadores, 2 artistas', '2 programmers, 2 artists') },
        { title: tr('Dedicación', 'Time'), text: tr('300 h en remoto', '300 h, remote') },
      ],
    },
    {
      type: 'text',
      title: tr('Qué pasa dentro', 'What happens inside'),
      text: tr(
        'Empiezas en una biblioteca de centro comercial recreada con arte original del equipo. Nada te avisa. A los pocos segundos arrancan los estímulos.',
        'You start in a shopping centre library, rebuilt with original art by the team. Nothing warns you. A few seconds in, the stimuli kick off.',
      ),
    },
    {
      type: 'list',
      items: [
        tr(
          'Gente corriendo, luces parpadeando, humo. Un sistema de eventos temporizados suelta cada estímulo en su momento, así la tensión sube de forma progresiva en vez de golpe.',
          'People running, lights flickering, smoke. A timed event system releases each stimulus at its own moment, so the tension climbs gradually instead of all at once.',
        ),
        tr(
          'Los NPC son agentes sobre una NavMesh ajustada a la geometría de la tienda. Cada uno lleva un nivel de estrés que decide su velocidad: los alterados corren, los tranquilos se quedan quietos o caminan despacio. Varían también de escala, con la velocidad proporcional al tamaño y todo gestionado desde un control centralizado.',
          'The NPCs are agents on a NavMesh fitted to the shop geometry. Each carries a stress level that sets its speed: the agitated ones run, the calm ones stand still or walk slowly. They vary in scale too, with speed proportional to size, all driven from one central controller.',
        ),
        tr(
          'Las manos se resuelven con un modelo de cinemática inversa propio, para que el cuerpo cuadre tanto al mirar hacia abajo como al manipular el torniquete.',
          'Hands run on a custom inverse kinematics model, so the body lines up both when you look down and when you handle the tourniquet.',
        ),
        tr(
          'El detector de input distingue mover el mando de mover el brazo. No es el mismo gesto cuando lo que estás evaluando es una maniobra médica.',
          "The input detector tells moving the controller apart from moving your arm. Those aren't the same gesture when what you're assessing is a medical manoeuvre.",
        ),
        tr(
          'Al recibir el ataque del asaltante, las gafas pasan a passthrough unos segundos y después entra una viñeta que va oscureciendo la visión, imitando el desvanecimiento por pérdida de sangre.',
          'When the assailant strikes, the headset cuts to passthrough for a few seconds and then a vignette closes in, mimicking fainting from blood loss.',
        ),
        tr(
          'La Quest 3 va justa de cómputo, así que el wifi y el Bluetooth viven en hilos secundarios. El hilo de render no se toca.',
          'The Quest 3 is tight on compute, so wifi and Bluetooth live on secondary threads. The render thread stays untouched.',
        ),
      ],
    },
    {
      type: 'text',
      title: tr('Mi parte', 'My part'),
      text: tr(
        'La aplicación de monitorización la programé yo solo, y también me encargué del manager general de eventos del aplicativo, que es lo que ejecuta esas órdenes del lado de las gafas.',
        "I wrote the monitoring application on my own, and I also owned the app's general event manager, which is what carries out those commands on the headset side.",
      ),
    },
    {
      type: 'list',
      items: [
        tr(
          'Se conecta por wifi al puerto de comunicación de las gafas y muestra en tiempo real lo que está viendo el alumno.',
          "It connects over wifi to the headset's communication port and shows in real time what the student is seeing.",
        ),
        tr(
          'El instructor pausa, reanuda o reinicia la simulación desde su panel, sin tocar el visor.',
          'The instructor pauses, resumes or restarts the simulation from their panel, without touching the headset.',
        ),
        tr('Registro de eventos para depurar durante las sesiones.', 'An event log for debugging during sessions.'),
      ],
    },
    {
      type: 'text',
      title: tr('El prototipo háptico', 'The haptic prototype'),
      text: tr(
        'Un ESP32-C6 hace de receptor, conectado a las gafas por BLE, y reparte la señal por ESP-NOW a varios ESP32-C3 repartidos por las extremidades. La idea era que el golpe se notara físicamente en el brazo correspondiente. La comunicación entre nodos quedó funcionando; la respuesta háptica en la extremidad se dejó para la siguiente iteración.',
        'An ESP32-C6 acts as the receiver, connected to the headset over BLE, and forwards the signal via ESP-NOW to several ESP32-C3 modules placed on the limbs. The idea was for the hit to register physically on the matching arm. Communication between nodes ended up working; the haptic response on the limb was left for the next iteration.',
      ),
    },
    {
      type: 'note',
      text: tr(
        'El resultado fue un prototipo ejecutable que cumplía los objetivos formativos, pero no llegó a versión final dentro del periodo de prácticas. La empresa siguió el desarrollo después.',
        "The outcome was a working prototype that met the training goals, though it didn't reach a final version within the internship. The company carried the development on afterwards.",
      ),
    },
    {
      type: 'gallery',
      title: tr('Galería', 'Gallery'),
      alt: tr('Captura de Primeros Auxilios VR', 'First Aid VR screenshot'),
      cols: 2,
    },
  ],
} satisfies Ficha;
