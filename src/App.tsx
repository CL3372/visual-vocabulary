import { useState } from 'react';
import { BookOpen, CreditCard, HelpCircle, BarChart2, Map, Moon, Sun, Baby, Globe, Cloud, LogOut, ArrowLeft } from 'lucide-react';
import { StreakModal } from './components/StreakModal';
import { AuthModal } from './components/AuthModal';
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
];

function Inner() {
  const { darkMode, toggleDarkMode, kidsMode, toggleKidsMode, targetLang, setTargetLang, streak, srsDueCount, studiedToday, bestStreak, user, signOut } = useApp();
  const [mode, setMode] = useState<AppMode>('browse');
  const [showLang, setShowLang] = useState(false);
  const [showStreak, setShowStreak] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
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
            {kidsMode ? '🌈 Visual Vocab' : 'Visual Vocabulary'}
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
              className="flex-1 flex flex-col items-center py-2 gap-1 transition-all active:scale-95"
              style={{ color: active ? tab.color : 'var(--text3)' }}>
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl transition-all"
                  style={{
                    background: active ? `${tab.color}20` : 'transparent',
                    transform: active ? 'scale(1.1)' : 'scale(1)',
                  }}>
                  {tab.emoji}
                </div>
                {tab.id === 'flashcards' && srsDueCount > 0 && (
                  <div className="absolute -top-1 -right-1 min-w-[16px] h-4 px-0.5 rounded-full text-[10px] font-bold flex items-center justify-center"
                    style={{ background: '#ef4444', color: '#fff' }}>
                    {srsDueCount > 99 ? '99+' : srsDueCount}
                  </div>
                )}
              </div>
              <span className="text-[10px] font-semibold">{tab.label}</span>
            </button>
          );
        })}
      </nav>

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
      </main>


      {/* Language bottom sheet */}
      {showLang && (
        <LanguagePicker
          value={targetLang}
          onChange={setTargetLang}
          onClose={() => setShowLang(false)}
        />
      )}

      {/* Auth modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

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
