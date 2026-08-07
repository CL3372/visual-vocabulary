import { useState, useEffect } from 'react';
import { Flame, ArrowLeft, Star } from 'lucide-react';
import { WORDS } from '../data/words';
import { useApp } from '../context/AppContext';
import { Confetti } from '../components/Confetti';
import { useUnsplashImage } from '../hooks/useUnsplash';
import { getColorSwatch } from '../utils/colorSwatches';
import { getTranslation } from '../utils/getTranslation';
import type { Word } from '../types';

const TOTAL = 10;

const DAILY_CATEGORIES = [
  'Animals', 'Fruits', 'Vegetables', 'Colors', 'Body', 'Clothes', 'Home',
  'Nature', 'Sports', 'Transport', 'Weather', 'Family', 'Food', 'School',
  'Kitchen', 'Drinks', 'Emotions', 'Seasons', 'Occupations', 'Travel Essentials',
];

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function seedRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function getDailyWords(): { words: Word[]; category: string } {
  const today = getTodayKey();
  const seed = today.split('-').reduce((a, b) => a * 100 + parseInt(b), 0);
  const rng = seedRandom(seed);

  const catIndex = Math.floor(rng() * DAILY_CATEGORIES.length);
  const category = DAILY_CATEGORIES[catIndex];

  const pool = WORDS.filter(w => w.category === category);
  const shuffled = [...pool].sort(() => rng() - 0.5);
  return { words: shuffled.slice(0, TOTAL), category };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getChoices(correct: Word, all: Word[], lang: string): string[] {
  const answer = getTranslation(correct, lang);
  const wrong = all
    .filter(w => w.id !== correct.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(w => getTranslation(w, lang));
  return shuffle([answer, ...wrong], Math.random);
}

function QuizCard({ word, choices, lang, onAnswer }: {
  word: Word; choices: string[]; lang: string; onAnswer: (ok: boolean) => void;
}) {
  const colorSwatch = word.category === 'Colors' ? getColorSwatch(word.word) : null;
  const { imageUrl, loading, handleError } = useUnsplashImage(colorSwatch ? '' : word.unsplashQuery);
  const [selected, setSelected] = useState<string | null>(null);
  const correct = getTranslation(word, lang);
  const { speak } = useApp();

  useEffect(() => {
    const t = setTimeout(() => speak(word.word, 'en', word.id), 400);
    return () => clearTimeout(t);
  }, [word.id]);

  function pick(c: string) {
    if (selected) return;
    setSelected(c);
    speak(c, lang, word.id);
    setTimeout(() => onAnswer(c === correct), 900);
  }

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
      <div className="rounded-3xl overflow-hidden shadow-md aspect-video" style={{ background: 'var(--surface2)' }}>
        {colorSwatch ? (
          <div className="w-full h-full" style={{ background: colorSwatch }} />
        ) : loading ? (
          <div className="w-full h-full animate-pulse" style={{ background: 'var(--surface2)' }} />
        ) : (
          <img src={imageUrl} alt="?" className="w-full h-full object-cover" onError={handleError} />
        )}
      </div>
      <p className="text-center text-sm" style={{ color: 'var(--text2)' }}>
        What is this in {lang.toUpperCase()}?
      </p>
      <div className="grid grid-cols-2 gap-3">
        {choices.map(c => {
          let bg = 'var(--surface2)', border = '1.5px solid var(--border)', color = 'var(--text)';
          if (selected) {
            if (c === correct) { bg = '#dcfce7'; border = '1.5px solid #16a34a'; color = '#15803d'; }
            else if (c === selected) { bg = '#fee2e2'; border = '1.5px solid #dc2626'; color = '#dc2626'; }
          }
          return (
            <button key={c} onClick={() => pick(c)}
              className="p-3 rounded-2xl text-sm font-semibold transition-all active:scale-95 text-center"
              style={{ background: bg, border, color }} dir="auto">
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CompletionScreen({ score, total, category, onClose }: {
  score: number; total: number; category: string; onClose: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const perfect = score === total;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
      style={{ background: 'var(--bg)' }}>
      {perfect && <Confetti trigger={true} />}
      <div className="text-7xl mb-4">{perfect ? '🏆' : score >= 7 ? '⭐' : '💪'}</div>
      <h2 className="text-3xl font-black mb-2" style={{ color: 'var(--text)' }}>
        {perfect ? 'Perfect Score!' : score >= 7 ? 'Great Job!' : 'Keep Practising!'}
      </h2>
      <p className="text-lg mb-1" style={{ color: 'var(--text2)' }}>
        Today's challenge: <span className="font-bold" style={{ color: 'var(--accent)' }}>{category}</span>
      </p>
      <div className="flex items-center gap-2 mt-4 mb-6">
        <div className="text-5xl font-black" style={{ color: 'var(--accent)' }}>{score}</div>
        <div className="text-2xl" style={{ color: 'var(--text2)' }}>/ {total}</div>
      </div>
      <div className="w-full max-w-xs bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
        <div className="h-3 rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: perfect ? '#16a34a' : 'var(--accent)' }} />
      </div>
      <p className="text-sm mb-8" style={{ color: 'var(--text2)' }}>
        Come back tomorrow for a new challenge!
      </p>
      <button onClick={onClose}
        className="w-full max-w-xs py-4 rounded-2xl font-bold text-base transition-all active:scale-95"
        style={{ background: 'var(--accent)', color: '#fff' }}>
        Back to Home
      </button>
    </div>
  );
}

interface Props { onClose: () => void }

export function DailyChallenge({ onClose }: Props) {
  const { targetLang, checkBadges, badgeStats } = useApp();
  const todayKey = getTodayKey();
  const completedKey = `vv-daily-${todayKey}`;

  const [{ words, category }] = useState(() => getDailyWords());
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const choices = words[index] ? getChoices(words[index], words, targetLang) : [];

  function handleAnswer(ok: boolean) {
    const next = score + (ok ? 1 : 0);
    if (index + 1 >= TOTAL) {
      setScore(next);
      localStorage.setItem(completedKey, String(next));
      setDone(true);
      // Count completed daily challenges and check badges
      let count = 0;
      const today = new Date();
      for (let i = 0; i < 365; i++) {
        const d = new Date(today); d.setDate(d.getDate() - i);
        const key = d.toISOString().split('T')[0].replace(/-/g, '');
        if (localStorage.getItem(`vv-daily-${key}`)) count++;
      }
      checkBadges({ ...badgeStats, dailyChallengeCount: count + 1 });
    } else {
      setScore(next);
      setIndex(i => i + 1);
    }
  }

  if (done) {
    return <CompletionScreen score={score} total={TOTAL} category={category} onClose={onClose} />;
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 sticky top-0 z-10"
        style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <button onClick={onClose} className="p-1.5 rounded-xl transition-colors"
          style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4" style={{ color: '#f97316' }} />
            <span className="font-black text-sm" style={{ color: 'var(--text)' }}>Daily Challenge</span>
          </div>
          <p className="text-xs" style={{ color: 'var(--text2)' }}>{category} · {index + 1} of {TOTAL}</p>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4" style={{ color: '#f59e0b' }} />
          <span className="font-bold text-sm" style={{ color: 'var(--text)' }}>{score}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full" style={{ background: 'var(--border)' }}>
        <div className="h-1.5 transition-all duration-300"
          style={{ width: `${((index) / TOTAL) * 100}%`, background: '#f97316' }} />
      </div>

      {/* Quiz */}
      <div className="flex-1 flex flex-col justify-center px-4 py-6">
        {words[index] && (
          <QuizCard
            key={index}
            word={words[index]}
            choices={choices}
            lang={targetLang}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
}
