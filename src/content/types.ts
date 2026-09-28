import type { T } from '../i18n/types';

export type Section =
  | { type: 'text'; title?: T; text: T }
  | { type: 'list'; title?: T; items: T[] }
  | { type: 'cards'; title?: T; cols: number; label?: boolean; numbered?: boolean; items: { title: T; text: T }[] }
  | { type: 'note'; text: T }
  | { type: 'video'; youtube?: string; title: T }
  | { type: 'gallery'; title: T; alt: T; cols: number; featuredFirst?: boolean };

/** One game or project. The slug is the file name; text fields accept `tr(es, en)`. */
export interface Ficha {
  title: T;
  year: number;
  tags: T[];
  summary: T;
  eyebrow?: T;
  lead?: T;
  sections: Section[];
}

export type Entry = Ficha & { slug: string };
