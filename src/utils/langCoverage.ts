import { ALL_WORDS } from '../data/words';
import { hasTranslation } from './getTranslation';
import type { Word } from '../types';

const wordCache = new Map<string, Word[]>();

/** Every word that has a real translation in the given language (cached per language). */
export function translatedWords(langCode: string): Word[] {
  let list = wordCache.get(langCode);
  if (!list) {
    list = langCode === 'en' ? ALL_WORDS : ALL_WORDS.filter(w => hasTranslation(w, langCode));
    wordCache.set(langCode, list);
  }
  return list;
}

export interface Coverage { have: number; total: number; pct: number; complete: boolean }

/** How much of the library exists in a language. "complete" allows for small gaps (90%+). */
export function languageCoverage(langCode: string): Coverage {
  const total = ALL_WORDS.length;
  const have = translatedWords(langCode).length;
  const pct = Math.round((have / total) * 100);
  return { have, total, pct, complete: pct >= 90 };
}
