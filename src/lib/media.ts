import { existsSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Files under public/ are copied verbatim and never enter the Vite module graph,
// so we can't import them. We look them up on disk instead — this runs at build
// time (and per request in dev), never in the browser.
const MEDIA_DIR = fileURLToPath(new URL('../../public/media/', import.meta.url));

const IMG = /\.(png|jpe?g|webp|avif)$/i;

/** Image files in a directory, sorted by name. Empty if it doesn't exist. */
function imagesIn(dir: string): string[] {
  if (!existsSync(dir)) return [];
  // Filter by extension so .DS_Store and friends never become an <img src>.
  return readdirSync(dir).filter((f) => IMG.test(f)).sort();
}

/** `?v=` stamp of the file's mtime, so replacing an image busts cached copies. */
function stamp(diskPath: string, url: string): string {
  return `${url}?v=${Math.round(statSync(diskPath).mtimeMs)}`;
}

/**
 * Cover art for a game, or undefined if there is none. Two layouts work:
 *
 *   media/<slug>/cover/whatever.png   a cover/ folder holding one image
 *   media/<slug>/cover.png            a file named cover.<ext>
 *
 * The folder form wins, and inside it the first image by name — so the export
 * keeps whatever filename it came out with. Directories are read on every call
 * rather than cached, so a file added while `astro dev` is running shows up on
 * reload.
 */
export function coverFor(slug: string): string | undefined {
  const base = MEDIA_DIR + slug;

  const inFolder = imagesIn(`${base}/cover`);
  if (inFolder.length > 0) {
    return stamp(`${base}/cover/${inFolder[0]}`, `/media/${slug}/cover/${inFolder[0]}`);
  }

  // PNG first: a cover.png is meant to override whatever meta.cover points at.
  const flat = imagesIn(base).filter((f) => /^cover\.[a-z0-9]+$/i.test(f));
  const pick = flat.find((f) => f.toLowerCase().endsWith('.png')) ?? flat[0];
  if (pick) return stamp(`${base}/${pick}`, `/media/${slug}/${pick}`);

  return undefined;
}

/**
 * Screenshots in `media/<slug>/gallery/`, in filename order. `label` is the
 * caller's language-appropriate description ("Captura de Chrono Fish"), which
 * gets an index appended so each alt is distinct.
 */
export function galleryFor(slug: string, label = ''): { src: string; alt: string }[] {
  const dir = `${MEDIA_DIR}${slug}/gallery`;
  return imagesIn(dir).map((f, i) => ({
    src: stamp(`${dir}/${f}`, `/media/${slug}/gallery/${f}`),
    alt: label ? `${label} ${i + 1}` : '',
  }));
}
