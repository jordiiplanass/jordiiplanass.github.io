// Drop images into src/media/<slug>/cover/ or gallery/ and they show up: no code to touch.
const files = import.meta.glob<string>('/src/media/*/*/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const urls = (slug: string, dir: string) =>
  Object.keys(files)
    .filter((path) => path.startsWith(`/src/media/${slug}/${dir}/`))
    .sort()
    .map((path) => files[path]);

/** Cover art, or the first screenshot when there is no cover. */
export const coverFor = (slug: string) => urls(slug, 'cover')[0] ?? urls(slug, 'gallery')[0];

export const galleryFor = (slug: string) => urls(slug, 'gallery');

/** Placeholder for a card with no art: the first letters of the first two words. */
export const initials = (title: string) =>
  title
    .replace(/[^A-Za-zÀ-ÿ ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('');
