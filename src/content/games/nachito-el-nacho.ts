import { tr } from '../../i18n/types';
import type { Ficha } from '../types';

export default {
  title: 'Nachito el Nacho',
  year: 2023,
  tags: ['Unity', 'C#', '2D Platformer', tr('Movimiento', 'Movement')],
  summary: tr(
    'Plataformas 2D: Nachito se ha vuelto un nacho y se mueve con las habilidades de sus condimentos.',
    '2D platformer: Nachito has turned into a nacho and moves using his condiments’ abilities.',
  ),
  eyebrow: tr('Plataformas 2D', '2D platformer'),
  lead: tr(
    'Plataformas 2D caricaturesco. Nachito se ha transformado en un nacho, y la única forma de moverse por el nivel es usar las habilidades de los condimentos que lleva encima. La meta es volver a ser humano.',
    'A cartoonish 2D platformer. Nachito has been turned into a nacho, and the only way to get around a level is to use the abilities of the condiments he carries. The goal is to become human again.',
  ),
  sections: [
    {
      type: 'gallery',
      title: tr('Capturas', 'Screenshots'),
      alt: tr('Captura de Nachito el Nacho', 'Nachito el Nacho screenshot'),
      cols: 2,
      featuredFirst: true,
    },
    {
      type: 'cards',
      title: tr('Los condimentos', 'The condiments'),
      cols: 2,
      items: [
        {
          title: 'Guacamole',
          text: tr(
            'Dash: un impulso seco para cruzar huecos y salir de un apuro.',
            'Dash: a sharp burst to clear gaps and get out of trouble.',
          ),
        },
        {
          title: tr('Queso', 'Cheese'),
          text: tr(
            'Gancho: se engancha al escenario y te lanza donde no llegas de un salto.',
            "Grapple: latches onto the level and swings you where a jump won't reach.",
          ),
        },
      ],
    },
    {
      type: 'note',
      text: tr(
        'Hay más condimentos, y cada uno cambia cómo te desplazas. Encadenarlos es el juego.',
        'There are more condiments, each changing how you move. Chaining them is the game.',
      ),
    },
  ],
} satisfies Ficha;
