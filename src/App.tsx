import { useState } from 'react';
import { BookOpen, CreditCard, HelpCircle, BarChart2, Map, Moon, Sun, Baby, Globe } from 'lucide-react';
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

const TABS: { id: AppMode; label: string; icon: typeof BookOpen }[] = [
  { id: 'browse',     label: 'Browse',     icon: BookOpen   },
  { id: 'map',        label: 'Map',        icon: Map        },
  { id: 'flashcards', label: 'Flashcards', icon: CreditCard },
  { id: 'quiz',       label: 'Quiz',       icon: HelpCircle },
  { id: 'progress',   label: 'Progress',   icon: BarChart2  },
];

function Inner() {
  const { darkMode, toggleDarkMode, kidsMode, toggleKidsMode, targetLang, setTargetLang, streak, srsDueCount } = useApp();
  const [mode, setMode] = useState<AppMode>('browse');
  const [showLang, setShowLang] = useState(false);
  const [onboarded, setOnboarded] = useState(() => load('vv-onboarded', false));
  const [startCategory, setStartCategory] = useState('');

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
        <div>
          <h1 className="text-lg font-bold leading-none" style={{ color: 'var(--accent)' }}>
            {kidsMode ? '🌈 Visual Vocab' : 'Visual Vocabulary'}
          </h1>
          <p className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>
            {kidsMode ? 'Learning is fun!' : 'World Gastronomy'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {streak > 0 && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold"
              style={{ background: '#fff7ed', color: '#ea580c' }}>
              🔥 {streak}
            </div>
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

      {/* Kids mode banner */}
      {kidsMode && (
        <div className="px-4 py-2 text-center text-sm font-semibold"
          style={{ background: '#fef9c3', color: '#854d0e' }}>
          🌟 Kids Mode — simpler words, bigger pictures!
        </div>
      )}

      {/* Page content */}
      <main className="flex-1 flex flex-col overflow-auto">
        {mode === 'browse'     && <Browse initialCategory={startCategory || undefined} />}
        {mode === 'map'        && <MapBrowse />}
        {mode === 'flashcards' && <Flashcards />}
        {mode === 'quiz'       && <Quiz />}
        {mode === 'progress'   && <Progress />}
      </main>

      {/* Bottom nav */}
      <nav className="flex" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        {TABS.map(tab => {
          const Icon = tab.icon;
          const active = mode === tab.id;
          return (
            <button key={tab.id} onClick={() => setMode(tab.id)}
              className="flex-1 flex flex-col items-center py-3 gap-1 relative transition-colors"
              style={{ color: active ? 'var(--accent)' : 'var(--text3)' }}>
              {active && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ background: 'var(--accent)' }} />
              )}
              <div className="relative">
                <Icon className="w-5 h-5" />
                {tab.id === 'flashcards' && srsDueCount > 0 && (
                  <div className="absolute -top-1.5 -right-1.5 min-w-[16px] h-4 px-0.5 rounded-full text-[10px] font-bold flex items-center justify-center"
                    style={{ background: '#ef4444', color: '#fff' }}>
                    {srsDueCount > 99 ? '99+' : srsDueCount}
                  </div>
                )}
              </div>
              <span className={`text-xs ${active ? 'font-semibold' : 'font-medium'}`}>{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Language bottom sheet */}
      {showLang && (
        <LanguagePicker
          value={targetLang}
          onChange={setTargetLang}
          onClose={() => setShowLang(false)}
        />
      )}
    </div>
  );
}

export default function App() {
  return <AppProvider><Inner /></AppProvider>;
}
