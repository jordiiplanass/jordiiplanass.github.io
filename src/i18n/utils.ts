import { ui, defaultLang, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in ui) return seg as Lang;
  return defaultLang as Lang;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey): string =>
    (ui[lang][key] ?? ui[defaultLang as Lang][key]) as string;
}

/** /en/foo → /foo, /foo → /en/foo */
export function toggleLangHref(url: URL): string {
  const { pathname } = url;
  if (pathname.startsWith('/en')) {
    const stripped = pathname.replace(/^\/en/, '') || '/';
    return stripped;
  }
  return `/en${pathname === '/' ? '' : pathname}`;
}
