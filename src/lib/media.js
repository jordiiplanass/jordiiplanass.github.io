// ponytail: eager glob bundles every image up front; fine for ~35 files, revisit past a few hundred.
const files = import.meta.glob('/src/media/**/*.{png,jpg,jpeg,webp,gif,svg}', { eager: true, import: 'default' })
const entries = Object.entries(files).sort(([a], [b]) => a.localeCompare(b))
const inFolder = (slug, folder) => entries.filter(([p]) => p.startsWith(`/src/media/${slug}/${folder}/`)).map(([, url]) => url)

export const getFile = (slug, path) => files[`/src/media/${slug}/${path}`] ?? null
export const getGallery= (slug) => inFolder(slug, 'gallery')
export const getCover = (slug) => inFolder(slug, 'cover')[0] ?? getGallery(slug)[0] ?? null
