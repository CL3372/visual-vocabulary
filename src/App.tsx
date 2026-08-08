import { useState, useCallback } from 'react';
import { BookOpen, CreditCard, HelpCircle, BarChart2, Map, Moon, Sun, Baby, Globe, Cloud, LogOut, ArrowLeft, Flame } from 'lucide-react';
import { DailyChallenge } from './pages/DailyChallenge';
import { Badges } from './pages/Badges';
import { StreakModal } from './components/StreakModal';
import { AuthModal } from './components/AuthModal';
import { BadgeToast } from './components/BadgeToast';
import { OfflineBanner } from './components/OfflineBanner';
import { AppProvider, useApp } from './context/AppContext';
import { Browse } from './pages/Browse';
import { Flashcards } from './pages/Flashcards';
import { Quiz } from './pages/Quiz';
import { Progress } from './pages/Progress';
import { MapBrowse } from './pages/MapBrowse';
import { LanguagePicker } from './components/LanguagePicker';
import { Onboarding } from './components/Onboarding';
import { LANGUAGES } from './data/languages';
import type { AppMode } from './types';

function load<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}

const TABS: { id: AppMode; label: string; icon: typeof BookOpen; emoji: string; color: string }[] = [
  { id: 'browse',     label: 'Browse',     icon: BookOpen,   emoji: '🍽️', color: '#f97316' },
  { id: 'map',        label: 'Map',        icon: Map,        emoji: '🗺️', color: '#3b82f6' },
  { id: 'flashcards', label: 'Cards',      icon: CreditCard, emoji: '🃏', color: '#8b5cf6' },
  { id: 'quiz',       label: 'Quiz',       icon: HelpCircle, emoji: '🧠', color: '#10b981' },
  { id: 'progress',   label: 'Progress',   icon: BarChart2,  emoji: '📈', color: '#ef4444' },
  { id: 'badges',     label: 'Badges',     icon: BarChart2,  emoji: '🏅', color: '#f59e0b' },
];

function Inner() {
  const { darkMode, toggleDarkMode, kidsMode, toggleKidsMode, targetLang, setTargetLang, streak, srsDueCount, studiedToday, bestStreak, user, signOut, newBadge, clearNewBadge, earnedBadges } = useApp();
  const handleBadgeDone = useCallback(() => clearNewBadge(), [clearNewBadge]);
  const [mode, setMode] = useState<AppMode>('browse');
  const [showLang, setShowLang] = useState(false);
  const [showStreak, setShowStreak] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showDailyChallenge, setShowDailyChallenge] = useState(false);

  const todayKey = new Date().toISOString().slice(0, 10);
  const dailyDone = !!localStorage.getItem(`vv-daily-${todayKey}`);
  const [onboarded, setOnboarded] = useState(() => load('vv-onboarded', false));
  const [startCategory, setStartCategory] = useState(() => {
    // Support deep-links from SEO landing pages: /?cat=Italian+Cuisine
    const param = new URLSearchParams(window.location.search).get('cat');
    if (param) {
      // Clean the URL without a page reload
      window.history.replaceState({}, '', window.location.pathname);
    }
    return param ?? '';
  });

  if (!onboarded) {
    return (
      <Onboarding
        onComplete={(lang, category) => {
          setTargetLang(lang);
          setStartCategory(category);
          localStorage.setItem('vv-onboarded', 'true');
          setOnboarded(true);
        }}
      />
    );
  }

  const currentLang = LANGUAGES.find(l => l.code === targetLang);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 sticky top-0 z-20"
        style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <button onClick={() => setMode('browse')} className="text-left active:opacity-70 transition-opacity">
          <h1 className="text-lg font-bold leading-none" style={{ color: 'var(--accent)' }}>
            {kidsMode ? '🌈 LexPix' : 'LexPix'}
          </h1>
          <p className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>
            {kidsMode ? 'Learning is fun!' : 'World Gastronomy'}
          </p>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowStreak(true)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all active:scale-95 ${streak > 0 && !studiedToday ? 'animate-pulse' : ''}`}
            style={{
              background: streak === 0 ? 'var(--surface2)' : studiedToday ? '#fff7ed' : '#fef2f2',
              color: streak === 0 ? 'var(--text3)' : studiedToday ? '#ea580c' : '#dc2626',
              border: streak > 0 && !studiedToday ? '1px solid #fca5a5' : '1px solid transparent',
            }}>
            {streak === 0 ? '🔥 0' : `🔥 ${streak}`}
          </button>

          {/* Cloud sync / account */}
          {user ? (
            <button onClick={signOut}
              className="p-2 rounded-xl transition-colors"
              style={{ background: '#f0fdf4', color: '#16a34a' }}
              aria-label="Signed in — tap to sign out"
              title={`Signed in as ${user.email}`}>
              <LogOut className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={() => setShowAuth(true)}
              className="p-2 rounded-xl transition-colors"
              style={{ background: 'var(--surface2)', color: 'var(--text2)' }}
              aria-label="Sign in to sync">
              <Cloud className="w-4 h-4" />
            </button>
          )}

          {/* Kids mode */}
          <button onClick={toggleKidsMode}
            className="p-2 rounded-xl transition-colors"
            style={{ background: kidsMode ? '#fef9c3' : 'var(--surface2)', color: kidsMode ? '#ca8a04' : 'var(--text2)' }}
            aria-label="Toggle kids mode">
            <Baby className="w-4 h-4" />
          </button>

          {/* Dark mode */}
          <button onClick={toggleDarkMode}
            className="p-2 rounded-xl transition-colors"
            style={{ background: 'var(--surface2)', color: 'var(--text2)' }}
            aria-label="Toggle dark mode">
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Language button — shows flag + native name */}
          <button onClick={() => setShowLang(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-sm font-medium transition-all active:scale-95"
            style={{ background: 'var(--accent-bg)', color: 'var(--accent)', border: '1px solid var(--accent)' }}
            aria-label="Change language">
            <span className="text-base leading-none">{currentLang?.flag ?? '🌐'}</span>
            <Globe className="w-3 h-3 opacity-60" />
          </button>
        </div>
      </header>

      {/* Top nav */}
      <nav className="flex" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        {TABS.map(tab => {
          const active = mode === tab.id;
          return (
            <button key={tab.id} onClick={() => setMode(tab.id)}
              className="flex-1 flex flex-col items-center py-3 gap-1.5 transition-all active:scale-95"
              style={{ color: active ? tab.color : 'var(--text3)' }}>
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-3xl transition-all"
                  style={{
                    background: active ? `${tab.color}18` : 'transparent',
                    transform: active ? 'scale(1.12)' : 'scale(1)',
                  }}>
                  {tab.emoji}
                </div>
                {tab.id === 'flashcards' && srsDueCount > 0 && (
                  <div className="absolute -top-1 -right-1 min-w-[16px] h-4 px-0.5 rounded-full text-[10px] font-bold flex items-center justify-center"
                    style={{ background: '#ef4444', color: '#fff' }}>
                    {srsDueCount > 99 ? '99+' : srsDueCount}
                  </div>
                )}
                {tab.id === 'badges' && earnedBadges.length > 0 && (
                  <div className="absolute -top-1 -right-1 min-w-[16px] h-4 px-0.5 rounded-full text-[10px] font-bold flex items-center justify-center"
                    style={{ background: '#f59e0b', color: '#fff' }}>
                    {earnedBadges.length}
                  </div>
                )}
              </div>
              <span className="text-xs font-black tracking-wide">{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Daily Challenge banner */}
      {mode === 'browse' && (
        <button
          onClick={() => setShowDailyChallenge(true)}
          className="mx-4 mt-3 flex items-center gap-3 px-4 py-3 rounded-2xl transition-all active:scale-95"
          style={{
            background: dailyDone ? 'var(--surface2)' : 'linear-gradient(135deg, #f97316, #ef4444)',
            border: dailyDone ? '1.5px solid var(--border)' : 'none',
          }}>
          <Flame className="w-5 h-5 flex-shrink-0" style={{ color: dailyDone ? 'var(--text2)' : '#fff' }} />
          <div className="text-left flex-1">
            <p className="text-sm font-bold" style={{ color: dailyDone ? 'var(--text)' : '#fff' }}>
              Daily Challenge {dailyDone ? '✓' : '🔥'}
            </p>
            <p className="text-xs" style={{ color: dailyDone ? 'var(--text2)' : 'rgba(255,255,255,0.8)' }}>
              {dailyDone ? 'Completed today — come back tomorrow!' : '10 words · new category every day'}
            </p>
          </div>
        </button>
      )}

      {/* Kids mode banner */}
      {kidsMode && (
        <div className="px-4 py-2 text-center text-sm font-semibold"
          style={{ background: '#fef9c3', color: '#854d0e' }}>
          🌟 Kids Mode — simpler words, bigger pictures!
        </div>
      )}

      {/* Page content */}
      <main className="flex-1 flex flex-col overflow-auto">
        {mode !== 'browse' && (
          <button
            onClick={() => setMode('browse')}
            className="flex items-center gap-2 mx-4 mt-4 mb-1 px-5 py-3 rounded-2xl text-base font-bold transition-all active:scale-95 self-start"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </button>
        )}
        {mode === 'browse'     && <Browse initialCategory={startCategory || undefined} />}
        {mode === 'map'        && <MapBrowse />}
        {mode === 'flashcards' && <Flashcards />}
        {mode === 'quiz'       && <Quiz />}
        {mode === 'progress'   && <Progress />}
        {mode === 'badges'     && <Badges />}
      </main>


      {/* Language bottom sheet */}
      {showLang && (
        <LanguagePicker
          value={targetLang}
          onChange={setTargetLang}
          onClose={() => setShowLang(false)}
        />
      )}

      {/* Daily Challenge overlay */}
      {showDailyChallenge && (
        <div className="fixed inset-0 z-50">
          <DailyChallenge onClose={() => setShowDailyChallenge(false)} />
        </div>
      )}

      {/* Auth modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

      {/* Offline banner */}
      <OfflineBanner />

      {/* Badge toast */}
      <BadgeToast badge={newBadge} onDone={handleBadgeDone} />

      {/* Product Hunt badge */}
      <div className="flex justify-center py-3" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <a
          href="https://www.producthunt.com/posts/visual-vocabulary"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#ff6154', color: '#fff',
            borderRadius: 10, padding: '7px 14px',
            fontWeight: 700, fontSize: 13, textDecoration: 'none',
            letterSpacing: 0.1,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 512 512" fill="none">
            <circle cx="256" cy="256" r="256" fill="#ff6154"/>
            <path d="M291 256c19.9-7.2 34-26.4 34-49 0-28.7-23.3-52-52-52h-72v202h32v-72h40l48 72h38l-52-78c-5.2-2.4-10.5-1.3-16-2.7v-.3z" fill="white"/>
            <path d="M233 185h39c11 0 20 9 20 20s-9 20-20 20h-39v-40z" fill="#ff6154"/>
          </svg>
          Featured on Product Hunt
        </a>
      </div>

      {/* Streak modal */}
      {showStreak && (
        <StreakModal
          streak={streak}
          bestStreak={bestStreak}
          studiedToday={studiedToday}
          onClose={() => setShowStreak(false)}
          onStudyNow={() => { setShowStreak(false); setMode('flashcards'); }}
        />
      )}
    </div>
  );
}

export default function App() {
  return <AppProvider><Inner /></AppProvider>;
}
