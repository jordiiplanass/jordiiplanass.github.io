import { tr } from '../../i18n/types';
import type { Ficha } from '../types';

// ponytail: describir la mecánica real.
export default {
  title: 'Chrono Fish',
  year: 2023,
  tags: ['Unity', 'C#', 'Time Mechanic', 'Puzzle'],
  summary: tr(
    'Un pez y el tiempo. Mecánica temporal como eje del puzzle.',
    'A fish and time. A time mechanic at the core of the puzzle.',
  ),
  lead: tr(
    'Puzzle construido alrededor de una mecánica de tiempo: el jugador manipula el flujo temporal para avanzar.',
    'A puzzle built around a time mechanic: the player manipulates the flow of time to progress.',
  ),
  sections: [
    {
      type: 'cards',
      cols: 4,
      label: true,
      items: [
        { title: tr('Año', 'Year'), text: '2023' },
        { title: tr('Motor', 'Engine'), text: 'Unity' },
        { title: tr('Género', 'Genre'), text: tr('Puzzle temporal', 'Time puzzle') },
        { title: tr('Rol', 'Role'), text: tr('Programación', 'Programming') },
      ],
    },
    { type: 'video', youtube: 'g6t-Ix3g1V0', title: 'Chrono Fish — gameplay' },
    {
      type: 'gallery',
      title: tr('Galería', 'Gallery'),
      alt: tr('Captura de Chrono Fish', 'Chrono Fish screenshot'),
      cols: 2,
    },
  ],
} satisfies Ficha;
