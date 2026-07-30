import { existsSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Files under public/ are copied verbatim and never enter the Vite module graph,
// so we can't import them. We look them up on disk instead — this runs at build
// time (and per request in dev), never in the browser.
const MEDIA_DIR = fileURLToPath(new URL('../../public/media/', import.meta.url));

// PNG first: dropping a cover.png is the documented way to override whatever the
// ficha's `meta.cover` points at (today, a YouTube thumbnail).
const EXTS = ['png', 'jpg', 'jpeg', 'webp'];

/**
 * URL of the cover art dropped into `public/media/<slug>/`, or undefined if there
 * is none. Carries a `?v=` stamp of the file's mtime so replacing the image busts
 * any cached copy instead of leaving the old one on screen.
 *
 * The directory is read on every call rather than cached at module scope, so a
 * file added while `astro dev` is running shows up without restarting it.
 */
export function coverFor(slug: string): string | undefined {
  const dir = MEDIA_DIR + slug;
  if (!existsSync(dir)) return undefined;

  const files = readdirSync(dir);
  for (const ext of EXTS) {
    // Case-insensitive: exports often land as Cover.PNG.
    const name = files.find((f) => f.toLowerCase() === `cover.${ext}`);
    if (name) {
      const v = Math.round(statSync(`${dir}/${name}`).mtimeMs);
      return `/media/${slug}/${name}?v=${v}`;
    }
  }
  return undefined;
}
