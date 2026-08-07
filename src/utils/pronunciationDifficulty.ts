export type Difficulty = 'easy' | 'medium' | 'hard';

const DIFFICULTY: Record<string, Difficulty> = {
  es: 'easy',
  fr: 'easy',
  it: 'easy',
  pt: 'easy',
  'pt-BR': 'easy',
  nl: 'easy',
  ro: 'easy',
  de: 'medium',
  ru: 'medium',
  pl: 'medium',
  cs: 'medium',
  tr: 'medium',
  hi: 'medium',
  ar: 'hard',
  zh: 'hard',
  ja: 'hard',
  ko: 'hard',
};

export function getPronunciationDifficulty(lang: string): Difficulty | null {
  if (lang === 'en') return null;
  return DIFFICULTY[lang] ?? 'medium';
}

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  easy:   'Easy pronunciation',
  medium: 'Moderate pronunciation',
  hard:   'Challenging pronunciation',
};

export const DIFFICULTY_COLOR: Record<Difficulty, { bg: string; text: string; dot: string }> = {
  easy:   { bg: 'rgba(22,163,74,0.15)',  text: '#16a34a', dot: '#16a34a' },
  medium: { bg: 'rgba(234,179,8,0.15)',  text: '#a16207', dot: '#ca8a04' },
  hard:   { bg: 'rgba(220,38,38,0.15)',  text: '#dc2626', dot: '#dc2626' },
};
