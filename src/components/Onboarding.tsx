import { useState, useEffect } from 'react';
import { Check, ChevronRight, Volume2 } from 'lucide-react';
import { LANGUAGES } from '../data/languages';
import { useUnsplashImage } from '../hooks/useUnsplash';
import { getTranslation } from '../utils/getTranslation';
import type { Word } from '../types';

// Three universally recognisable demo words
const DEMO_WORDS: Word[] = [
  {
    id: 'ob_cat',
    word: 'Cat',
    translations: {
      es: 'Gato', pt: 'Gato', 'pt-br': 'Gato', fr: 'Chat', de: 'Katze',
      it: 'Gatto', ja: '猫', zh: '猫', ko: '고양이', ar: 'قطة',
      hi: 'बिल्ली', ru: 'Кошка', tr: 'Kedi', nl: 'Kat', pl: 'Kot',
      cs: 'Kočka', ro: 'Pisică',
    },
    category: 'Animals',
    unsplashQuery: 'cat portrait face closeup tabby whiskers',
  },
  {
    id: 'ob_apple',
    word: 'Apple',
    translations: {
      es: 'Manzana', pt: 'Maçã', 'pt-br': 'Maçã', fr: 'Pomme', de: 'Apfel',
      it: 'Mela', ja: 'りんご', zh: '苹果', ko: '사과', ar: 'تفاحة',
      hi: 'सेब', ru: 'Яблоко', tr: 'Elma', nl: 'Appel', pl: 'Jabłko',
      cs: 'Jablko', ro: 'Măr',
    },
    category: 'Fruits',
    unsplashQuery: 'red apple fruit macro shiny white background',
  },
  {
    id: 'ob_sun',
    word: 'Sun',
    translations: {
      es: 'Sol', pt: 'Sol', 'pt-br': 'Sol', fr: 'Soleil', de: 'Sonne',
      it: 'Sole', ja: '太陽', zh: '太阳', ko: '태양', ar: 'شمس',
      hi: 'सूरज', ru: 'Солнце', tr: 'Güneş', nl: 'Zon', pl: 'Słońce',
      cs: 'Slunce', ro: 'Soare',
    },
    category: 'Nature',
    unsplashQuery: 'golden sunset sun rays sky dramatic warm glow',
  },
];

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

// ── Demo card shown in step 2 ─────────────────────────────────────────────────
function DemoCard({ word, lang, active }: { word: Word; lang: string; active: boolean }) {
  const { imageUrl, loading, handleError } = useUnsplashImage(word.unsplashQuery);
  const [flipped, setFlipped] = useState(false);
  const translation = getTranslation(word, lang);

  // Auto-flip after 1.4s when active
  useEffect(() => {
    if (!active) { setFlipped(false); return; }
    const t = setTimeout(() => setFlipped(true), 1400);
    return () => clearTimeout(t);
  }, [active, word.id]);

  // Auto-speak via GCS (no Web Speech during onboarding to keep it simple)
  useEffect(() => {
    if (!active) return;
    const url = `https://storage.googleapis.com/vv-audio/en/${word.id}.mp3`;
    const audio = new Audio(url);
    audio.play().catch(() => {});
    return () => { audio.pause(); };
  }, [active, word.id]);

  // Speak translation when flipped
  useEffect(() => {
    if (!flipped || !active) return;
    const gcsLang = lang === 'pt-BR' ? 'pt-br' : lang.toLowerCase();
    const url = `https://storage.googleapis.com/vv-audio/${gcsLang}/${word.id}.mp3`;
    const audio = new Audio(url);
    audio.play().catch(() => {
      if (window.speechSynthesis) {
        const u = new SpeechSynthesisUtterance(translation);
        u.rate = 0.85;
        window.speechSynthesis.speak(u);
      }
    });
  }, [flipped, active]);

  return (
    <div
      className="w-full cursor-pointer select-none"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(f => !f)}
    >
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          aspectRatio: '3/4',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-3xl shadow-lg overflow-hidden flex flex-col"
          style={{ backfaceVisibility: 'hidden', background: 'var(--surface)' }}
        >
          <div className="flex-1 relative overflow-hidden" style={{ background: 'var(--surface2)' }}>
            {loading ? (
              <div className="absolute inset-0 animate-pulse" style={{ background: 'var(--surface2)' }} />
            ) : (
              <img src={imageUrl} alt={word.word} className="w-full h-full object-cover" onError={handleError} />
            )}
          </div>
          <div className="p-5 text-center">
            <p className="font-bold text-2xl" style={{ color: 'var(--text)' }}>{word.word}</p>
            <p className="text-sm mt-1 flex items-center justify-center gap-1" style={{ color: 'var(--text2)' }}>
              <Volume2 className="w-3.5 h-3.5" /> Tap to reveal
            </p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-3xl shadow-lg flex flex-col items-center justify-center p-8"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'var(--accent)' }}
        >
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">Translation</p>
          <p className="font-bold text-white text-center text-4xl" dir="auto">{translation}</p>
          <p className="text-white/50 text-sm mt-6">Tap to flip back</p>
        </div>
      </div>
    </div>
  );
}

interface Props {
  onComplete: (lang: string, startCategory: string) => void;
}

export function Onboarding({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [lang, setLang] = useState('es');
  const [demoIndex, setDemoIndex] = useState(0);

  function finish() {
    onComplete(lang, '');
  }

  // ── Step 0: Welcome ──────────────────────────────────────────────────────
  if (step === 0) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-between px-6 py-12 text-center"
        style={{ background: 'var(--bg)' }}
      >
        <div />

        <div className="flex flex-col items-center gap-7">
          <div className="relative">
            <div
              className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl shadow-lg"
              style={{ background: 'var(--accent)' }}
            >
              🌍
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-black mb-3" style={{ color: 'var(--text)' }}>
              Visual Vocabulary
            </h1>
            <p className="text-lg font-semibold mb-2" style={{ color: 'var(--accent)' }}>
              Learn words through photos
            </p>
            <p className="text-base leading-relaxed max-w-xs" style={{ color: 'var(--text2)' }}>
              3,500+ words, 19 languages, native speaker audio. Free forever.
            </p>
          </div>

          <div className="flex gap-6 justify-center">
            {[
              { value: '3,500+', label: 'words' },
              { value: '19', label: 'languages' },
              { value: '🎙️', label: 'WaveNet audio' },
            ].map(s => (
              <div key={s.label} className="flex flex-col items-center gap-0.5">
                <span className="text-xl font-black" style={{ color: 'var(--accent)' }}>{s.value}</span>
                <span className="text-xs" style={{ color: 'var(--text2)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <Dots total={4} current={0} />
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

  // ── Step 1: Language picker ───────────────────────────────────────────────
  if (step === 1) {
    // Exclude English (you learn English words, not learn IN English here)
    const learnable = LANGUAGES.filter(l => l.code !== 'en');
    return (
      <div className="min-h-screen flex flex-col px-5 py-10" style={{ background: 'var(--bg)' }}>
        <div className="mb-5">
          <h2 className="text-2xl font-black mb-1" style={{ color: 'var(--text)' }}>
            What do you want to learn?
          </h2>
          <p className="text-sm" style={{ color: 'var(--text2)' }}>
            You can change this any time.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 flex-1 overflow-y-auto">
          {learnable.map(l => {
            const active = l.code === lang;
            return (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
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

        <div className="mt-5 flex flex-col items-center gap-3">
          <Dots total={4} current={1} />
          <button
            onClick={() => setStep(2)}
            className="w-full max-w-xs py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-95"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Continue <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // ── Step 2: Demo – try 3 cards ────────────────────────────────────────────
  if (step === 2) {
    const word = DEMO_WORDS[demoIndex];
    const isLast = demoIndex === DEMO_WORDS.length - 1;
    const langLabel = LANGUAGES.find(l => l.code === lang)?.label ?? lang;

    return (
      <div
        className="min-h-screen flex flex-col items-center px-5 py-8"
        style={{ background: 'var(--bg)' }}
      >
        <div className="w-full max-w-xs mb-4 text-center">
          <p className="text-sm font-semibold" style={{ color: 'var(--text2)' }}>
            Try it — audio plays automatically
          </p>
          <p className="text-xs mt-0.5" style={{ color: 'var(--text3)' }}>
            Learning {langLabel} · word {demoIndex + 1} of {DEMO_WORDS.length}
          </p>
        </div>

        {/* Progress dots for cards */}
        <div className="flex gap-2 mb-5">
          {DEMO_WORDS.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === demoIndex ? 20 : 8,
                height: 8,
                background: i < demoIndex ? 'var(--accent)' : i === demoIndex ? 'var(--accent)' : 'var(--border)',
                opacity: i < demoIndex ? 0.4 : 1,
              }}
            />
          ))}
        </div>

        <div className="w-full max-w-xs flex-1 flex flex-col justify-center">
          <DemoCard key={word.id} word={word} lang={lang} active={true} />
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 w-full max-w-xs">
          <Dots total={4} current={2} />
          <button
            onClick={() => {
              if (isLast) setStep(3);
              else setDemoIndex(i => i + 1);
            }}
            className="w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-95"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            {isLast ? 'Finish' : 'Next word'} <ChevronRight className="w-5 h-5" />
          </button>
          {step === 2 && (
            <button
              onClick={finish}
              className="text-sm"
              style={{ color: 'var(--text3)' }}
            >
              Skip demo
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Step 3: You're set ────────────────────────────────────────────────────
  const langObj = LANGUAGES.find(l => l.code === lang);
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between px-6 py-12 text-center"
      style={{ background: 'var(--bg)' }}
    >
      <div />

      <div className="flex flex-col items-center gap-6">
        <div className="text-7xl">🎉</div>
        <div>
          <h2 className="text-3xl font-black mb-2" style={{ color: 'var(--text)' }}>
            You're all set!
          </h2>
          <p className="text-base leading-relaxed max-w-xs" style={{ color: 'var(--text2)' }}>
            You're learning <span className="font-bold" style={{ color: 'var(--accent)' }}>
              {langObj?.label ?? lang}
            </span>. Come back every day and build your streak.
          </p>
        </div>

        <div
          className="w-full max-w-xs rounded-2xl p-5 text-left"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          {[
            { icon: '🃏', text: 'Flashcards — drill words with photos' },
            { icon: '🧠', text: 'Quiz — test yourself in multiple ways' },
            { icon: '🔥', text: 'Daily Challenge — 10 words every day' },
            { icon: '🎙️', text: 'Native speaker audio on every word' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-3 py-2">
              <span className="text-xl">{icon}</span>
              <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 w-full max-w-xs">
        <Dots total={4} current={3} />
        <button
          onClick={finish}
          className="w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-95"
          style={{ background: 'var(--accent)', color: '#fff' }}
        >
          Start learning {langObj?.flag}
        </button>
      </div>
    </div>
  );
}
