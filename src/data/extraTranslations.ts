import { NL } from './extra/nl';

/**
 * Extra translations that fill gaps in the per-category word files.
 * Shape: language data key -> category -> English word -> translation.
 * An entry here wins over the value stored in the word file, so it can also replace
 * English placeholders. (Word ids are not unique, so category + word is the key.)
 */
export const EXTRA_TRANSLATIONS: Record<string, Record<string, Record<string, string>>> = {
  nl: NL,
};
