import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { LANGUAGES } from '../data/languages';

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

interface Props {
  onComplete: (lang: string, startCategory: string) => void;
}

export function Onboarding({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [lang, setLang] = useState('es');

  // ── Step 0: Welcome ──────────────────────────────────────────────────────

  if (step === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 text-center"
        style={{ background: 'var(--bg)' }}>

        <div />

        <div className="flex flex-col items-center gap-6">
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
              Learn words through photos
            </p>
            <p className="text-base leading-relaxed max-w-xs" style={{ color: 'var(--text2)' }}>
              3,000+ words across 15 languages — food, animals, travel, home and more. Free forever.
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            {[
              { value: '3,422', label: 'words' },
              { value: '15', label: 'languages' },
              { value: '100+', label: 'categories' },
            ].map(s => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-xl font-black" style={{ color: 'var(--accent)' }}>{s.value}</span>
                <span className="text-xs" style={{ color: 'var(--text2)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <Dots total={2} current={0} />
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

  return (
    <div className="min-h-screen flex flex-col px-5 py-10" style={{ background: 'var(--bg)' }}>
      <div className="mb-6">
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
              onClick={() => {
                setLang(l.code);
                setTimeout(() => onComplete(l.code, ''), 200);
              }}
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
        <Dots total={2} current={1} />
      </div>
    </div>
  );
}
