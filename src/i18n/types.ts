export type Lang = 'es' | 'en';
export type L = Record<Lang, string>;
/** A plain string is a proper noun, identical in both languages. */
export type T = string | L;

export const tr = (es: string, en: string): L => ({ es, en });
