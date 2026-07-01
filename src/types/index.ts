export interface Word {
  id: string;
  word: string;
  translations: Record<string, string>;
  category: string;
  unsplashQuery: string;
  sentence?: string;
  description?: string;
}

export interface Language {
  code: string;
  label: string;
  nativeName: string;
  flag: string;
  /** If set, use this key to look up word.translations instead of code */
  dataKey?: string;
}

export type AppMode = 'browse' | 'flashcards' | 'quiz' | 'progress' | 'map';

export interface SRSCard {
  ef: number;       // ease factor ≥ 1.3, starts 2.5
  interval: number; // days until next review
  reps: number;     // consecutive successful recalls
  due: number;      // Unix ms timestamp
}
