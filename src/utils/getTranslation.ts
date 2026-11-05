import { LANGUAGES } from '../data/languages';
import type { Word } from '../types';

/** Resolves the correct translation key for a language code (handles pt-BR → pt-br). */
export function resolveKey(langCode: string): string {
  const lang = LANGUAGES.find(l => l.code === langCode);
  return lang?.dataKey ?? langCode;
}

/** True when the word has a real translation in the given language (English always does). */
export function hasTranslation(word: Word, langCode: string): boolean {
  if (langCode === 'en') return true;
  return !!word.translations[resolveKey(langCode)];
}

// A missing translation must never show another language, so fall back to the English word
// (screens that need a translation filter such words out with hasTranslation first).
export function getTranslation(word: Word, langCode: string): string {
  if (langCode === 'en') return word.word;
  const key = resolveKey(langCode);
  return word.translations[key] || word.word;
}

export function getTranslationOrDash(word: Word, langCode: string): string {
  if (langCode === 'en') return word.word;
  const key = resolveKey(langCode);
  return word.translations[key] || '—';
}
