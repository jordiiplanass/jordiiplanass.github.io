import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from './data/index.js'

// Language lives in the URL: /en/... = en, anything else = es.
export const langOf = (pathname) => (/^\/en(\/|$)/.test(pathname) ? 'en' : 'es')
export const useLang = () => langOf(useLocation().pathname)

// localePath('en', '/games') -> '/en/games'; localePath('es', '/#experience') -> '/#experience'
export const localePath = (lang, p = '/') => (lang === 'en' ? '/en' + p : p)

const known = /^(\/en)?(\/(games|projects)(\/[^/]+)?)?\/?$/

// Same page in the other language; unknown paths (404) go to the other home.
export function togglePath(pathname) {
  const to = langOf(pathname) === 'es' ? 'en' : 'es'
  const m = pathname.match(/^(?:\/en)?\/(games|projects)\/([^/]+)\/?$/)
  const kind = m && (m[1] === 'games' ? 'game' : 'project')
  if (!known.test(pathname) || (m && !projects.some((p) => p.slug === m[2] && p.kind === kind))) return localePath(to)
  return to === 'en' ? '/en' + (pathname === '/' ? '' : pathname) : pathname.replace(/^\/en/, '') || '/'
}

export const useTitle = (title) => useEffect(() => { document.title = title }, [title])

const UI = {
  es: {
    nav: { games: 'Juegos', projects: 'Proyectos', experience: 'Experiencia' },
    menu: 'Menú', toggle: 'EN', cv: 'CV ↓',
    all: 'Todos →', view: 'Ver proyecto', prev: 'Anterior', next: 'Siguiente', skip: 'Saltar al contenido',
    games: { title: ['Mis ', 'juegos'], intro: 'Proyectos de videojuego en los que he programado los sistemas.', doc: 'Juegos - Jordi Planas' },
    projects: { title: ['Otros ', 'proyectos'], intro: 'Otros proyectos: VR, herramientas y desarrollo más allá de los juegos.', doc: 'Proyectos - Jordi Planas' },
  },
  en: {
    nav: { games: 'Games', projects: 'Projects', experience: 'Experience' },
    menu: 'Menu', toggle: 'ES', cv: 'CV ↓',
    all: 'All →', view: 'View project', prev: 'Previous', next: 'Next', skip: 'Skip to content',
    games: { title: ['My ', 'Games'], intro: 'Game projects where I programmed the systems.', doc: 'Games - Jordi Planas' },
    projects: { title: ['Other ', 'Projects'], intro: 'Other projects: VR, tools, and development beyond games.', doc: 'Projects - Jordi Planas' },
  },
}
export const ui = (lang) => UI[lang]
