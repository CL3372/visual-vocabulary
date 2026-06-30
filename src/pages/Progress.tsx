import { useState } from 'react';
import { Flame, BookOpen, Heart, Trophy, BarChart2, Star, Brain, Gift, Zap, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ALL_WORDS } from '../data/words';
import { WrappedStats } from '../components/WrappedStats';
import { UpgradeModal } from '../components/UpgradeModal';

const TOTAL_WORDS = ALL_WORDS.length;

// ── Milestone badge definitions ───────────────────────────────────────────────
interface Badge {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  unlocked: (s: Stats) => boolean;
}

interface Stats {
  streak: number;
  totalSeen: number;
  favCount: number;
  quizCount: number;
  bestPct: number;
  avgPct: number;
}

const BADGES: Badge[] = [
  { id: 'first',    emoji: '🌱', title: 'First Steps',    desc: 'Complete your first quiz',           unlocked: s => s.quizCount >= 1   },
  { id: 'curious',  emoji: '👀', title: 'Curious',        desc: 'See 10 words',                       unlocked: s => s.totalSeen >= 10   },
  { id: 'bookworm', emoji: '📖', title: 'Bookworm',       desc: 'See 50 words',                       unlocked: s => s.totalSeen >= 50   },
  { id: 'linguist', emoji: '🌍', title: 'Linguist',       desc: 'See 150 words',                      unlocked: s => s.totalSeen >= 150  },
  { id: 'scholar',  emoji: '🎓', title: 'Scholar',        desc: `See half the library (${Math.floor(TOTAL_WORDS / 2)}+ words)`, unlocked: s => s.totalSeen >= Math.floor(TOTAL_WORDS / 2) },
  { id: 'roll',     emoji: '🔥', title: 'On a Roll',      desc: '3-day streak',                       unlocked: s => s.streak >= 3       },
  { id: 'warrior',  emoji: '⚡', title: 'Week Warrior',   desc: '7-day streak',                       unlocked: s => s.streak >= 7       },
  { id: 'legend',   emoji: '👑', title: 'Legend',         desc: '30-day streak',                      unlocked: s => s.streak >= 30      },
  { id: 'collector',emoji: '❤️', title: 'Collector',      desc: 'Save 10 favourites',                 unlocked: s => s.favCount >= 10    },
  { id: 'hoarder',  emoji: '💝', title: 'Hoarder',        desc: 'Save 50 favourites',                 unlocked: s => s.favCount >= 50    },
  { id: 'sharp',    emoji: '🎯', title: 'Sharp',          desc: 'Complete 5 quizzes',                 unlocked: s => s.quizCount >= 5    },
  { id: 'dedicated',emoji: '💪', title: 'Dedicated',      desc: 'Complete 20 quizzes',                unlocked: s => s.quizCount >= 20   },
  { id: 'perfect',  emoji: '🏆', title: 'Perfectionist',  desc: 'Score 100% on a quiz',              unlocked: s => s.bestPct >= 100    },
  { id: 'consistent',emoji:'⭐', title: 'Consistent',     desc: 'Average score above 70%',            unlocked: s => s.avgPct >= 70 && s.quizCount >= 3 },
];

export function Progress() {
  const [showWrapped, setShowWrapped] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const { streak, totalSeen, favorites, quizHistory, srsData, seenWords, isPro, xp, level, levelName, xpIntoLevel, xpForNextLevel } = useApp();

  // SRS stats
  const now = Date.now();
  const srsEntries = Object.values(srsData);
  const srsDue = srsEntries.filter(c => c.due <= now).length;
  const srsMastered = srsEntries.filter(c => c.interval >= 21).length; // 3+ weeks interval = "known"
  const srsLearning = srsEntries.length - srsMastered;
  const srsNew = seenWords.size - srsEntries.length; // seen but never reviewed

  const quizCount = quizHistory.length;
  const bestPct = quizCount ? Math.max(...quizHistory.map(r => Math.round((r.score / r.total) * 100))) : 0;
  const avgPct  = quizCount ? Math.round(quizHistory.reduce((s, r) => s + (r.score / r.total) * 100, 0) / quizCount) : 0;

  const stats: Stats = { streak, totalSeen, favCount: favorites.size, quizCount, bestPct, avgPct };

  const unlockedBadges = BADGES.filter(b => b.unlocked(stats));
  const lockedBadges   = BADGES.filter(b => !b.unlocked(stats));

  // ── Weekly activity strip (last 7 days) ───────────────────────────────────
  const activeDates = new Set(quizHistory.map(r => r.date));
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(Date.now() - (6 - i) * 86400000);
    const iso = d.toISOString().split('T')[0];
    return {
      label: d.toLocaleDateString('en', { weekday: 'short' }).slice(0, 1),
      active: activeDates.has(iso),
      today: i === 6,
    };
  });

  // ── Seen progress bar ─────────────────────────────────────────────────────
  const seenPct = Math.min(100, Math.round((totalSeen / TOTAL_WORDS) * 100));

  if (showWrapped) return <WrappedStats onClose={() => setShowWrapped(false)} />;

  return (
    <>
    <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-5 max-w-lg mx-auto w-full">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-0.5" style={{ color: 'var(--text)' }}>Your Progress</h2>
          <p className="text-sm" style={{ color: 'var(--text2)' }}>Keep learning every day!</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={() => isPro ? setShowWrapped(true) : setShowUpgrade(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all active:scale-95 relative"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff' }}
          >
            <Gift className="w-4 h-4" />
            {new Date().getFullYear()} Wrapped
            {!isPro && <Lock className="w-3 h-3 ml-0.5 opacity-75" />}
          </button>
          {!isPro && (
            <button
              onClick={() => setShowUpgrade(true)}
              className="flex items-center gap-1 text-xs font-semibold transition-all active:scale-95"
              style={{ color: '#6366f1' }}
            >
              <Zap className="w-3 h-3" /> Upgrade to Pro
            </button>
          )}
        </div>
      </div>

      {/* XP / Level card */}
      <div className="rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #6366f111, #8b5cf611)', border: '1.5px solid #6366f133' }}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">
              {['🧑‍🍳','🥄','🍳','👨‍🍳','🎖️','⭐','⭐⭐⭐'][level - 1]}
            </span>
            <div>
              <p className="font-bold text-sm leading-none" style={{ color: 'var(--text)' }}>{levelName}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>Level {level}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold" style={{ color: '#6366f1' }}>{xp.toLocaleString()} XP</p>
            <p className="text-xs" style={{ color: 'var(--text2)' }}>{xpForNextLevel - xpIntoLevel} to next level</p>
          </div>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'var(--surface2)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${Math.min(100, Math.round((xpIntoLevel / xpForNextLevel) * 100))}%`,
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
            }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <p className="text-xs" style={{ color: 'var(--text3)' }}>Flashcard: +2–5 XP · Quiz answer: +10 XP · New word: +1 XP</p>
        </div>
      </div>

      {/* Streak banner */}
      {streak > 0 ? (
        <div className="rounded-2xl p-4 flex items-center gap-3"
          style={{ background: 'linear-gradient(135deg, #f59e0b22, #ef444422)', border: '1.5px solid #f59e0b55' }}>
          <span className="text-4xl">🔥</span>
          <div>
            <p className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
              {streak} day{streak !== 1 ? 's' : ''} streak!
            </p>
            <p className="text-sm" style={{ color: 'var(--text2)' }}>
              {streak >= 7 ? 'You\'re unstoppable 🚀' : 'Come back tomorrow to keep it going'}
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl p-4 flex items-center gap-3"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <span className="text-3xl">🎯</span>
          <div>
            <p className="font-semibold" style={{ color: 'var(--text)' }}>Start your streak today</p>
            <p className="text-sm" style={{ color: 'var(--text2)' }}>Complete a quiz to begin</p>
          </div>
        </div>
      )}

      {/* Weekly activity */}
      <div className="rounded-2xl p-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text)' }}>This week</p>
        <div className="flex justify-between gap-1">
          {weekDays.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
              <div
                className="w-full aspect-square rounded-lg transition-all"
                style={{
                  background: d.active ? 'var(--accent)' : 'var(--surface2)',
                  border: d.today ? '2px solid var(--accent)' : '2px solid transparent',
                  opacity: d.active ? 1 : 0.5,
                }}
              />
              <span className="text-xs" style={{ color: d.today ? 'var(--accent)' : 'var(--text3)', fontWeight: d.today ? 700 : 400 }}>
                {d.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Flame,    label: 'Day streak',   value: streak,           color: '#f59e0b', bg: '#fffbeb' },
          { icon: Trophy,   label: 'Best score',   value: `${bestPct}%`,    color: '#10b981', bg: '#f0fdf4' },
          { icon: BookOpen, label: 'Words seen',   value: totalSeen,        color: 'var(--accent)', bg: 'var(--accent-bg)' },
          { icon: Heart,    label: 'Favourites',   value: favorites.size,   color: '#ef4444', bg: '#fef2f2' },
        ].map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label} className="rounded-2xl p-4 flex flex-col gap-2"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: bg }}>
              <Icon className="w-5 h-5" style={{ color }} />
            </div>
            <p className="text-2xl font-bold" style={{ color: 'var(--text)' }}>{value}</p>
            <p className="text-xs" style={{ color: 'var(--text2)' }}>{label}</p>
          </div>
        ))}
      </div>

      {/* SRS deck stats */}
      {seenWords.size > 0 && (
        <div className="rounded-2xl p-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-4 h-4" style={{ color: 'var(--accent)' }} />
            <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Your SRS deck</p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { label: 'Due now', value: srsDue, color: srsDue > 0 ? '#ef4444' : 'var(--text2)', bg: srsDue > 0 ? '#fef2f2' : 'var(--surface2)' },
              { label: 'Learning', value: srsLearning + srsNew, color: '#d97706', bg: '#fffbeb' },
              { label: 'Mastered', value: srsMastered, color: '#16a34a', bg: '#f0fdf4' },
            ].map(({ label, value, color, bg }) => (
              <div key={label} className="rounded-xl py-3" style={{ background: bg }}>
                <p className="text-xl font-bold" style={{ color }}>{value}</p>
                <p className="text-xs mt-0.5" style={{ color }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Library progress bar */}
      <div className="rounded-2xl p-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <div className="flex justify-between items-baseline mb-2">
          <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Library explored</p>
          <p className="text-sm font-bold" style={{ color: 'var(--accent)' }}>{totalSeen} / {TOTAL_WORDS}</p>
        </div>
        <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--surface2)' }}>
          <div className="h-full rounded-full transition-all duration-700"
            style={{ width: `${seenPct}%`, background: 'var(--accent)' }} />
        </div>
        <p className="text-xs mt-1.5" style={{ color: 'var(--text3)' }}>
          {seenPct}% of all words discovered
        </p>
      </div>

      {/* Badges */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-4 h-4" style={{ color: 'var(--accent)' }} />
          <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
            Badges — {unlockedBadges.length}/{BADGES.length} unlocked
          </p>
        </div>

        {unlockedBadges.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-2">
            {unlockedBadges.map(badge => (
              <div key={badge.id}
                className="flex items-center gap-3 rounded-xl p-3"
                style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent)' }}>
                <span className="text-2xl leading-none">{badge.emoji}</span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: 'var(--text)' }}>{badge.title}</p>
                  <p className="text-xs truncate" style={{ color: 'var(--text2)' }}>{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {lockedBadges.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {lockedBadges.map(badge => (
              <div key={badge.id}
                className="flex items-center gap-3 rounded-xl p-3"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', opacity: 0.5 }}>
                <span className="text-2xl leading-none grayscale">🔒</span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: 'var(--text)' }}>{badge.title}</p>
                  <p className="text-xs truncate" style={{ color: 'var(--text2)' }}>{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quiz history */}
      {quizHistory.length > 0 && (
        <div className="rounded-2xl p-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between mb-4">
            <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Quiz history</p>
            <div className="flex items-center gap-1.5">
              <BarChart2 className="w-4 h-4" style={{ color: 'var(--text2)' }} />
              <span className="text-sm" style={{ color: 'var(--text2)' }}>avg {avgPct}%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {quizHistory.slice(0, 10).map((r, i) => {
              const pct = Math.round((r.score / r.total) * 100);
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs w-16 flex-shrink-0" style={{ color: 'var(--text3)' }}>
                    {new Date(r.date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}
                  </span>
                  <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'var(--surface2)' }}>
                    <div className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, background: pct >= 70 ? 'var(--green)' : '#f59e0b' }} />
                  </div>
                  <span className="text-xs font-semibold w-10 text-right" style={{ color: 'var(--text)' }}>
                    {r.score}/{r.total}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {quizHistory.length === 0 && (
        <div className="text-center py-8" style={{ color: 'var(--text2)' }}>
          <p className="text-4xl mb-3">🎯</p>
          <p className="font-medium" style={{ color: 'var(--text)' }}>No quizzes yet</p>
          <p className="text-sm mt-1">Complete a quiz to see your history here</p>
        </div>
      )}

    </div>

    {showUpgrade && (
      <UpgradeModal reason="Unlock Wrapped stats, all languages & unlimited SRS" onClose={() => setShowUpgrade(false)} />
    )}
    </>
  );
}
