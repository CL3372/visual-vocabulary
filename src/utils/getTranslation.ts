import { LANGUAGES } from '../data/languages';
import type { Word } from '../types';

/** Resolves the correct translation key for a language code (handles pt-BR → pt). */
function resolveKey(langCode: string): string {
  const lang = LANGUAGES.find(l => l.code === langCode);
  return lang?.dataKey ?? langCode;
}

export function getTranslation(word: Word, langCode: string): string {
  if (langCode === 'en') return word.word;
  const key = resolveKey(langCode);
  return word.translations[key] ?? word.translations['es'] ?? word.word;
}

export function getTranslationOrDash(word: Word, langCode: string): string {
  if (langCode === 'en') return word.word;
  const key = resolveKey(langCode);
  return word.translations[key] || '—';
}
