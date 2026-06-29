import { useState, useMemo } from 'react';
import { X, Share2, Loader2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ALL_WORDS } from '../data/words';
import { LANGUAGES } from '../data/languages';
import { shareWrapped } from '../utils/shareWrapped';

interface Props { onClose: () => void }

function getTopCuisine(seenWords: Set<string>): { name: string; flag: string } {
  const counts: Record<string, number> = {};
  for (const word of ALL_WORDS) {
    if (seenWords.has(word.id) && word.category.includes('Cuisine')) {
      counts[word.category] = (counts[word.category] ?? 0) + 1;
    }
  }
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  if (!top) return { name: 'World Cuisine', flag: '🌍' };

  const name = top[0].replace(' Cuisine', '');
  const flagMap: Record<string, string> = {
    Italian: '🇮🇹', Japanese: '🇯🇵', Mexican: '🇲🇽', French: '🇫🇷', Indian: '🇮🇳',
    Chinese: '🇨🇳', Thai: '🇹🇭', Korean: '🇰🇷', Spanish: '🇪🇸', Greek: '🇬🇷',
    Moroccan: '🇲🇦', Vietnamese: '🇻🇳', Lebanese: '🇱🇧', Turkish: '🇹🇷', Brazilian: '🇧🇷',
    Peruvian: '🇵🇪', German: '🇩🇪', Indonesian: '🇮🇩', Portuguese: '🇵🇹', British: '🇬🇧',
    American: '🇺🇸', Canadian: '🇨🇦', Australian: '🇦🇺',
  };
  return { name, flag: flagMap[name] ?? '🌍' };
}

export function WrappedStats({ onClose }: Props) {
  const { seenWords, quizHistory, bestStreak, srsData, targetLang } = useApp();
  const [sharing, setSharing] = useState(false);
  const [shared, setShared] = useState(false);

  const year = new Date().getFullYear();
  const lang = LANGUAGES.find(l => l.code === targetLang) ?? LANGUAGES[1];

  const stats = useMemo(() => {
    const topCuisine = getTopCuisine(seenWords);
    const wordsMastered = Object.values(srsData).filter(c => c.interval >= 21).length;
    const pct = Math.round((seenWords.size / ALL_WORDS.length) * 100);
    return { topCuisine, wordsMastered, pct };
  }, [seenWords, srsData]);

  async function handleShare() {
    if (sharing) return;
    setSharing(true);
    try {
      await shareWrapped({
        year,
        wordsDiscovered: seenWords.size,
        totalWords: ALL_WORDS.length,
        topCuisine: stats.topCuisine.name,
        topCuisineFlag: stats.topCuisine.flag,
        quizzesTaken: quizHistory.length,
        bestStreak,
        wordsMastered: stats.wordsMastered,
        langName: lang.nativeName,
        langFlag: lang.flag,
      });
      setShared(true);
      setTimeout(() => setShared(false), 3000);
    } finally {
      setSharing(false);
    }
  }

  const statCards = [
    { emoji: '🔍', value: seenWords.size.toLocaleString(), label: 'words discovered', sub: `${stats.pct}% of the full library`, color: '#818cf8' },
    { emoji: stats.topCuisine.flag, value: stats.topCuisine.name, label: 'favourite cuisine', sub: 'most explored', color: '#f472b6' },
    { emoji: '🔥', value: `${bestStreak}`, label: 'day best streak', sub: 'consecutive days', color: '#fb923c' },
    { emoji: '🎯', value: `${quizHistory.length}`, label: 'quizzes completed', sub: quizHistory.length > 0 ? `avg ${Math.round(quizHistory.reduce((s, r) => s + (r.score / r.total) * 100, 0) / quizHistory.length)}%` : 'start quizzing!', color: '#34d399' },
    { emoji: '🧠', value: `${stats.wordsMastered}`, label: 'words mastered', sub: '21+ day review interval', color: '#60a5fa' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto" style={{ background: '#0f172a' }}>

      {/* Decorative background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #4f46e5, transparent)' }} />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4 relative">
        <div />
        <button onClick={onClose} className="p-2 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 pb-10 relative">

        {/* Title */}
        <div className="mb-8">
          <p className="text-sm font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{year}</p>
          <h1 className="text-5xl font-black text-white leading-tight">
            Your Food<br />Year in<br />
            <span style={{ background: 'linear-gradient(135deg, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Review
            </span>
          </h1>
          <p className="text-sm mt-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Learning in {lang.flag} {lang.nativeName}
          </p>
        </div>

        {/* Stat cards */}
        <div className="flex flex-col gap-3 mb-8">
          {statCards.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-4 py-4 rounded-2xl"
              style={{
                background: `${s.color}1a`,
                border: `1px solid ${s.color}44`,
              }}
            >
              <span className="text-4xl leading-none flex-shrink-0">{s.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-2xl font-black leading-tight truncate" style={{ color: s.color }}>{s.value}</p>
                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.label}</p>
              </div>
              <p className="text-xs text-right flex-shrink-0 max-w-[100px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Encouragement message */}
        <div className="rounded-2xl px-5 py-4 mb-6 text-center"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-white font-semibold text-lg mb-1">
            {seenWords.size === 0
              ? 'Start your journey! 🌱'
              : seenWords.size < 50
              ? 'Off to a great start! 🌟'
              : seenWords.size < 200
              ? 'You\'re building real knowledge! 📚'
              : seenWords.size < 500
              ? 'Impressive dedication! 🏆'
              : 'World-class food vocabulary! 👑'}
          </p>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Keep exploring — {ALL_WORDS.length - seenWords.size} words still waiting to be discovered.
          </p>
        </div>

        {/* Share button */}
        <button
          onClick={handleShare}
          disabled={sharing}
          className="w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-95"
          style={{
            background: shared ? '#16a34a' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: '#fff',
          }}
        >
          {sharing ? <Loader2 className="w-5 h-5 animate-spin" /> :
           shared   ? '✓ Shared!' :
                      <><Share2 className="w-5 h-5" /> Share my {year} Wrapped</>}
        </button>

        <p className="text-center text-xs mt-3" style={{ color: 'rgba(255,255,255,0.25)' }}>
          Generates a shareable image card
        </p>
      </div>
    </div>
  );
}
