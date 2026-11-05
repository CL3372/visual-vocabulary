import { LANGUAGES } from '../data/languages';
import { getExtra } from '../data/extraTranslations';
import type { Word } from '../types';

/** Resolves the correct translation key for a language code (handles pt-BR → pt-br). */
export function resolveKey(langCode: string): string {
  const lang = LANGUAGES.find(l => l.code === langCode);
  return lang?.dataKey ?? langCode;
}

/** Looks up the value stored for a word in the extra translation files (if any). */
function extraTranslation(word: Word, key: string): string | undefined {
  return getExtra(key)?.[word.category]?.[word.word];
}

/** The stored translation for a word, or an empty string when there is none. */
function stored(word: Word, key: string): string {
  return extraTranslation(word, key) || word.translations[key] || '';
}

/** True when the word has a real translation in the given language (English always does). */
export function hasTranslation(word: Word, langCode: string): boolean {
  if (langCode === 'en') return true;
  return !!stored(word, resolveKey(langCode));
}

// A missing translation must never show another language, so fall back to the English word
// (screens that need a translation filter such words out with hasTranslation first).
export function getTranslation(word: Word, langCode: string): string {
  if (langCode === 'en') return word.word;
  const key = resolveKey(langCode);
  return stored(word, key) || word.word;
}

export function getTranslationOrDash(word: Word, langCode: string): string {
  if (langCode === 'en') return word.word;
  const key = resolveKey(langCode);
  return stored(word, key) || '—';
}
