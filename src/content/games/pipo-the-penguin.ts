import { tr } from '../../i18n/types';
import type { Ficha } from '../types';

// ponytail: rellenar rol, equipo, herramientas y fechas reales.
export default {
  title: 'Pipo the Penguin',
  year: 2026,
  tags: ['Unity', 'C#', 'Gameplay', '3D Platformer'],
  summary: tr(
    'Un pingüino, hielo y física resbaladiza. Plataformas 3D con foco en movimiento.',
    'A penguin, ice and slippery physics. A 3D platformer focused on movement.',
  ),
  lead: tr(
    'Plataformas 3D protagonizadas por Pipo, un pingüino que se desliza sobre el hielo. El reto fue un sistema de movimiento que se sintiera resbaladizo pero controlable.',
    'A 3D platformer starring Pipo, a penguin who slides across the ice. The challenge was a movement system that felt slippery yet controllable.',
  ),
  sections: [
    {
      type: 'cards',
      cols: 1,
      label: true,
      items: [
        {
          title: tr('Mi rol', 'My role'),
          text: tr('Programación de gameplay y sistemas de movimiento.', 'Gameplay programming and movement systems.'),
        },
      ],
    },
    { type: 'video', youtube: 'HsIRSft30w8', title: tr('Gameplay de Pipo the Penguin', 'Pipo the Penguin gameplay') },
    {
      type: 'gallery',
      title: tr('Capturas', 'Screenshots'),
      alt: tr('Captura de Pipo the Penguin', 'Pipo the Penguin screenshot'),
      cols: 2,
    },
  ],
} satisfies Ficha;
