import type { Entry, Ficha } from './types';

type Modules = Record<string, { default: Ficha }>;

// Adding a game or project = adding a file: the cards and the detail page appear on their own.
const load = (modules: Modules): Entry[] =>
  Object.entries(modules)
    .map(([path, m]) => ({ ...m.default, slug: path.split('/').pop()!.replace('.ts', '') }))
    .sort((a, b) => b.year - a.year);

export const games = load(import.meta.glob<{ default: Ficha }>('./games/*.ts', { eager: true }));
export const projects = load(import.meta.glob<{ default: Ficha }>('./projects/*.ts', { eager: true }));
