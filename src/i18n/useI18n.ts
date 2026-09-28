import { useLocation } from 'react-router';
import type { Lang, T } from './types';
import { ui, type UiKey } from './ui';

/** The language lives in the URL: `/en/...` is English, everything else Spanish. */
export function useI18n() {
  const { pathname } = useLocation();
  const lang: Lang = /^\/en(\/|$)/.test(pathname) ? 'en' : 'es';
  const l = (value: T) => (typeof value === 'string' ? value : value[lang]);

  return {
    lang,
    l,
    t: (key: UiKey) => l(ui[key]),
    /** Prefix an internal path with the current language. */
    to: (path: string) => (lang === 'en' ? '/en' : '') + path,
    /** The same page in the other language. */
    alt: lang === 'en' ? pathname.replace(/^\/en/, '') || '/' : `/en${pathname === '/' ? '' : pathname}`,
  };
}
