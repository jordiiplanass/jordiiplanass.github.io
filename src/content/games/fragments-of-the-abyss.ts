import { tr } from '../../i18n/types';
import type { Ficha } from '../types';

export default {
  title: 'Fragments of the Abyss',
  year: 2024,
  tags: ['Unity', 'C#', 'Atmospheric', 'Systems'],
  summary: tr(
    'Exploración atmosférica en las profundidades. Sistemas y ambientación oscura.',
    'Atmospheric deep-sea exploration. Systems and a dark mood.',
  ),
  eyebrow: tr('Juego', 'Game'),
  sections: [
    {
      type: 'video',
      youtube: 'Xc5Z1nYzrCE',
      title: tr('Tráiler de Fragments of the Abyss', 'Fragments of the Abyss trailer'),
    },
    {
      // ponytail: ampliar con la descripción real.
      type: 'text',
      title: tr('Sobre el juego', 'About the game'),
      text: tr(
        'Aventura atmosférica de exploración en las profundidades. El foco estuvo en la ambientación y en los sistemas que sostienen la sensación de descenso al abismo.',
        'An atmospheric exploration adventure into the deep. The focus was on the mood and the systems that sustain the feeling of descending into the abyss.',
      ),
    },
    {
      type: 'list',
      title: tr('Lo que hice', 'What I did'),
      items: [
        tr('Sistemas de gameplay', 'Gameplay systems'),
        tr('Integración de mecánicas', 'Mechanics integration'),
        tr('Ajuste de la experiencia', 'Experience tuning'),
      ],
    },
    {
      type: 'gallery',
      title: tr('Galería', 'Gallery'),
      alt: tr('Captura de Fragments of the Abyss', 'Fragments of the Abyss screenshot'),
      cols: 3,
    },
  ],
} satisfies Ficha;
