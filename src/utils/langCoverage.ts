import { ALL_WORDS } from '../data/words';
import { hasTranslation, resolveKey } from './getTranslation';
import { getExtra, hasExtraFile, subscribeExtra, EXTRA_WORD_COUNT } from '../data/extraTranslations';
import type { Word } from '../types';

const wordCache = new Map<string, Word[]>();

// A newly loaded extra file changes which words exist, so forget the cached lists.
subscribeExtra(() => wordCache.clear());

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
  const key = resolveKey(langCode);
  // Languages with an extra file are counted from the stored total until the file is loaded.
  const have = hasExtraFile(key) && !getExtra(key)
    ? EXTRA_WORD_COUNT[key] ?? translatedWords(langCode).length
    : translatedWords(langCode).length;
  const pct = Math.round((have / total) * 100);
  return { have, total, pct, complete: pct >= 90 };
}
