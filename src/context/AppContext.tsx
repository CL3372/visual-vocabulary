import { createContext, useContext, useState, useEffect, useCallback, useMemo, type ReactNode } from 'react';
import type { SRSCard } from '../types';

const LANG_LOCALES: Record<string, string> = {
  en: 'en-US', es: 'es-ES', pt: 'pt-PT', fr: 'fr-FR',
  de: 'de-DE', it: 'it-IT', ja: 'ja-JP', zh: 'zh-CN',
  ko: 'ko-KR', ar: 'ar-SA',
};

export const RTL_LANGS = new Set(['ar']);

interface QuizResult { date: string; score: number; total: number }

// Languages available on the free tier
export const FREE_LANGS = new Set(['es', 'pt', 'fr']);

interface AppContextType {
  targetLang: string;
  setTargetLang: (l: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  kidsMode: boolean;
  toggleKidsMode: () => void;
  favorites: Set<string>;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  speak: (text: string, lang?: string) => void;
  streak: number;
  bestStreak: number;
  totalSeen: number;
  seenWords: Set<string>;
  quizHistory: QuizResult[];
  recordQuizResult: (score: number, total: number) => void;
  markWordSeen: (id: string) => void;
  // SRS
  srsData: Record<string, SRSCard>;
  rateCard: (wordId: string, grade: 1 | 4 | 5) => void;
  srsDueCount: number;
  // Pro
  isPro: boolean;
  activatePro: (token: string) => void;
  // Streak
  lastPlayDate: string;
  studiedToday: boolean;
}

const AppContext = createContext<AppContextType | null>(null);

function load<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}
function save(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

// SM-2 algorithm
function sm2(card: SRSCard, grade: 1 | 4 | 5): SRSCard {
  let { ef, interval, reps } = card;

  if (grade === 1) {
    // Forgot — reset
    reps = 0;
    interval = 1;
  } else {
    // Remembered
    if (reps === 0)      interval = 1;
    else if (reps === 1) interval = 6;
    else                 interval = Math.round(interval * ef);

    ef = Math.max(1.3, ef + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)));
    reps++;
  }

  return { ef, interval, reps, due: Date.now() + interval * 864e5 };
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [isPro, setIsPro] = useState(() => load('vv-pro', false));

  const activatePro = useCallback((token: string) => {
    save('vv-pro', true);
    save('vv-pro-token', token);
    setIsPro(true);
  }, []);

  // Detect Stripe success redirect (?pro_success=true in URL)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('pro_success') === 'true') {
      activatePro(params.get('session_id') ?? 'stripe_redirect');
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [activatePro]);

  const [targetLang, setTargetLangRaw] = useState(() => load('vv-lang', 'es'));
  const [darkMode, setDarkMode] = useState(() => load('vv-dark', false));
  const [kidsMode, setKidsMode] = useState(() => load('vv-kids', false));
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set(load<string[]>('vv-favs', [])));
  const [seenWords, setSeenWords] = useState<Set<string>>(() => new Set(load<string[]>('vv-seen', [])));
  const [quizHistory, setQuizHistory] = useState<QuizResult[]>(() => load('vv-history', []));
  const [streak, setStreak] = useState(() => load('vv-streak', 0));
  const [bestStreak, setBestStreak] = useState(() => load('vv-best-streak', 0));
  const [lastPlayDate, setLastPlayDate] = useState(() => load('vv-lastplay', ''));
  const [srsData, setSrsData] = useState<Record<string, SRSCard>>(() => load('vv-srs', {}));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const setTargetLang = useCallback((l: string) => {
    setTargetLangRaw(l); save('vv-lang', l);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(d => { save('vv-dark', !d); return !d; });
  }, []);

  const toggleKidsMode = useCallback(() => {
    setKidsMode(k => { save('vv-kids', !k); return !k; });
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      save('vv-favs', [...next]);
      return next;
    });
  }, []);

  const isFavorite = useCallback((id: string) => favorites.has(id), [favorites]);

  const speak = useCallback((text: string, lang = 'en') => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LANG_LOCALES[lang] || 'en-US';
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }, []);

  const markWordSeen = useCallback((id: string) => {
    setSeenWords(prev => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      save('vv-seen', [...next]);
      return next;
    });
  }, []);

  const rateCard = useCallback((wordId: string, grade: 1 | 4 | 5) => {
    setSrsData(prev => {
      const existing = prev[wordId] ?? { ef: 2.5, interval: 0, reps: 0, due: Date.now() };
      const updated = sm2(existing, grade);
      const next = { ...prev, [wordId]: updated };
      save('vv-srs', next);
      return next;
    });
  }, []);

  const srsDueCount = useMemo(() => {
    const now = Date.now();
    return Object.values(srsData).filter(c => c.due <= now).length;
  }, [srsData]);

  const recordQuizResult = useCallback((score: number, total: number) => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    setStreak(prev => {
      let newStreak = prev;
      if (lastPlayDate === yesterday) newStreak = prev + 1;
      else if (lastPlayDate !== today) newStreak = 1;
      save('vv-streak', newStreak);
      setBestStreak(best => {
        const next = Math.max(best, newStreak);
        save('vv-best-streak', next);
        return next;
      });
      return newStreak;
    });
    setLastPlayDate(today);
    save('vv-lastplay', today);

    setQuizHistory(prev => {
      const next = [{ date: today, score, total }, ...prev].slice(0, 30);
      save('vv-history', next);
      return next;
    });
  }, [lastPlayDate]);

  return (
    <AppContext.Provider value={{
      targetLang, setTargetLang,
      darkMode, toggleDarkMode,
      kidsMode, toggleKidsMode,
      favorites, toggleFavorite, isFavorite,
      speak,
      streak, bestStreak, totalSeen: seenWords.size, seenWords, quizHistory,
      recordQuizResult, markWordSeen,
      srsData, rateCard, srsDueCount,
      isPro, activatePro,
      lastPlayDate,
      studiedToday: lastPlayDate === new Date().toISOString().split('T')[0],
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
