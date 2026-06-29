import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { LANGUAGES } from '../data/languages';

const STARTER_CUISINES = [
  { category: 'Italian Cuisine',  flag: '🇮🇹', label: 'Italian'  },
  { category: 'Japanese Cuisine', flag: '🇯🇵', label: 'Japanese' },
  { category: 'Mexican Cuisine',  flag: '🇲🇽', label: 'Mexican'  },
  { category: 'French Cuisine',   flag: '🇫🇷', label: 'French'   },
  { category: 'Indian Cuisine',   flag: '🇮🇳', label: 'Indian'   },
  { category: 'Chinese Cuisine',  flag: '🇨🇳', label: 'Chinese'  },
  { category: 'Thai Cuisine',     flag: '🇹🇭', label: 'Thai'     },
  { category: 'Greek Cuisine',    flag: '🇬🇷', label: 'Greek'    },
  { category: 'Spanish Cuisine',  flag: '🇪🇸', label: 'Spanish'  },
  { category: 'Korean Cuisine',   flag: '🇰🇷', label: 'Korean'   },
];

// ── Demo card for the tip screen ──────────────────────────────────────────────

function DemoCard({ targetLang }: { targetLang: string }) {
  const [flipped, setFlipped] = useState(false);

  const demos: Record<string, string> = {
    es: 'Carbonara', fr: 'Carbonara', de: 'Carbonara',
    it: 'Carbonara', pt: 'Carbonara', ja: 'カルボナーラ',
    zh: '意大利培根蛋面', en: 'Carbonara',
  };
  const translation = demos[targetLang] ?? 'Carbonara';

  return (
    <div className="w-full max-w-[220px] mx-auto">
      <div
        className="relative rounded-2xl overflow-hidden cursor-pointer select-none transition-all duration-300 active:scale-95"
        style={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          border: '1.5px solid var(--border)',
        }}
        onClick={() => setFlipped(f => !f)}
      >
        {/* Image */}
        <div
          className="w-full aspect-[4/3] flex items-center justify-center text-6xl"
          style={{ background: flipped ? 'var(--accent)' : '#f1f5f9' }}
        >
          {flipped ? (
            <p className="text-xl font-bold text-white px-3 text-center">{translation}</p>
          ) : (
            <span>🍝</span>
          )}
        </div>

        {/* Label */}
        <div className="px-4 py-3" style={{ background: 'var(--surface)' }}>
          <p className="font-semibold text-sm text-center" style={{ color: 'var(--text)' }}>
            {flipped ? 'Tap to flip back' : 'Spaghetti Carbonara'}
          </p>
        </div>
      </div>

      {!flipped && (
        <p className="text-center text-sm mt-3 font-medium animate-pulse" style={{ color: 'var(--accent)' }}>
          Tap the card ↑
        </p>
      )}
      {flipped && (
        <p className="text-center text-sm mt-3 font-medium" style={{ color: 'var(--text2)' }}>
          The translation appears in {LANGUAGES.find(l => l.code === targetLang)?.nativeName ?? targetLang}
        </p>
      )}
    </div>
  );
}

// ── Dot indicators ────────────────────────────────────────────────────────────

function Dots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex gap-1.5 justify-center">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className="rounded-full transition-all duration-300"
          style={{
            width: i === current ? 20 : 8,
            height: 8,
            background: i === current ? 'var(--accent)' : 'var(--border)',
          }}
        />
      ))}
    </div>
  );
}

// ── Main Onboarding component ─────────────────────────────────────────────────

interface Props {
  onComplete: (lang: string, startCategory: string) => void;
}

export function Onboarding({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [lang, setLang] = useState('es');
  const [cuisine, setCuisine] = useState('');

  const TOTAL = 4;

  // ── Step 0: Welcome ──────────────────────────────────────────────────────

  if (step === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 text-center"
        style={{ background: 'var(--bg)' }}>

        <div />

        <div className="flex flex-col items-center gap-6">
          {/* Hero emoji row */}
          <div className="flex gap-3 text-5xl">
            <span className="animate-bounce" style={{ animationDelay: '0ms'   }}>🍜</span>
            <span className="animate-bounce" style={{ animationDelay: '150ms' }}>🥘</span>
            <span className="animate-bounce" style={{ animationDelay: '300ms' }}>🍣</span>
          </div>

          <div>
            <h1 className="text-4xl font-black mb-2" style={{ color: 'var(--accent)' }}>
              Visual Vocabulary
            </h1>
            <p className="text-lg font-medium mb-3" style={{ color: 'var(--text)' }}>
              World Gastronomy
            </p>
            <p className="text-base leading-relaxed max-w-xs" style={{ color: 'var(--text2)' }}>
              Learn food words from 8 languages through the dishes that define every culture.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <Dots total={TOTAL} current={0} />
          <button
            onClick={() => setStep(1)}
            className="w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-95"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Get started <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // ── Step 1: Language ─────────────────────────────────────────────────────

  if (step === 1) {
    return (
      <div className="min-h-screen flex flex-col px-5 py-10" style={{ background: 'var(--bg)' }}>
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--accent)' }}>
            Step 1 of 3
          </p>
          <h2 className="text-2xl font-black mb-1" style={{ color: 'var(--text)' }}>
            What language do you want to learn?
          </h2>
          <p className="text-sm" style={{ color: 'var(--text2)' }}>
            You can change this any time from the header.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 flex-1">
          {LANGUAGES.map(l => {
            const active = l.code === lang;
            return (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setTimeout(() => setStep(2), 200); }}
                className="flex items-center gap-3 p-4 rounded-2xl text-left transition-all active:scale-95"
                style={{
                  background: active ? 'var(--accent-bg)' : 'var(--surface)',
                  border: `1.5px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                }}
              >
                <span className="text-3xl leading-none">{l.flag}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate" style={{ color: active ? 'var(--accent)' : 'var(--text)' }}>
                    {l.nativeName}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>{l.label}</p>
                </div>
                {active && <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent)' }} />}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3">
          <Dots total={TOTAL} current={1} />
        </div>
      </div>
    );
  }

  // ── Step 2: Cuisine ──────────────────────────────────────────────────────

  if (step === 2) {
    return (
      <div className="min-h-screen flex flex-col px-5 py-10" style={{ background: 'var(--bg)' }}>
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--accent)' }}>
            Step 2 of 3
          </p>
          <h2 className="text-2xl font-black mb-1" style={{ color: 'var(--text)' }}>
            Pick a cuisine to start with
          </h2>
          <p className="text-sm" style={{ color: 'var(--text2)' }}>
            We'll open your library on this cuisine. You can explore everything later.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 flex-1 content-start">
          {STARTER_CUISINES.map(c => {
            const active = c.category === cuisine;
            return (
              <button
                key={c.category}
                onClick={() => setCuisine(c.category)}
                className="flex items-center gap-3 p-4 rounded-2xl text-left transition-all active:scale-95"
                style={{
                  background: active ? 'var(--accent-bg)' : 'var(--surface)',
                  border: `1.5px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                }}
              >
                <span className="text-3xl leading-none">{c.flag}</span>
                <p className="font-bold text-sm flex-1 min-w-0 truncate"
                  style={{ color: active ? 'var(--accent)' : 'var(--text)' }}>
                  {c.label}
                </p>
                {active && <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent)' }} />}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3">
          <Dots total={TOTAL} current={2} />
          <button
            onClick={() => { if (cuisine) setStep(3); }}
            disabled={!cuisine}
            className="w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-40"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Continue <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // ── Step 3: Quick tip ────────────────────────────────────────────────────

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 text-center"
      style={{ background: 'var(--bg)' }}>

      <div className="w-full">
        <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--accent)' }}>
          Step 3 of 3
        </p>
        <h2 className="text-2xl font-black mb-2" style={{ color: 'var(--text)' }}>
          Tap to reveal the translation
        </h2>
        <p className="text-sm mb-8" style={{ color: 'var(--text2)' }}>
          Cards show the dish name. Tap to flip and hear the translation in{' '}
          <strong>{LANGUAGES.find(l => l.code === lang)?.nativeName}</strong>.
        </p>
        <DemoCard targetLang={lang} />
      </div>

      <div className="flex flex-col items-center gap-4 w-full max-w-xs">
        <div className="rounded-2xl p-4 text-left w-full" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text2)' }}>Quick tips</p>
          {[
            '❤️  Heart a word to save it to favourites',
            '🧠  Review with spaced repetition to actually remember',
            '🗺️  Browse the map to explore by region',
          ].map(tip => (
            <p key={tip} className="text-sm mb-1 last:mb-0" style={{ color: 'var(--text)' }}>{tip}</p>
          ))}
        </div>

        <Dots total={TOTAL} current={3} />
        <button
          onClick={() => onComplete(lang, cuisine)}
          className="w-full py-4 rounded-2xl font-bold text-base transition-all active:scale-95"
          style={{ background: 'var(--accent)', color: '#fff' }}
        >
          Start exploring 🚀
        </button>
      </div>
    </div>
  );
}
