import { useState, useCallback, useEffect, useRef } from 'react';
import { CheckCircle, XCircle, Trophy, MousePointer, Keyboard, ArrowLeft } from 'lucide-react';
import { useUnsplashImage } from '../hooks/useUnsplash';
import { useApp } from '../context/AppContext';
import { Confetti } from '../components/Confetti';
import { TopicPicker } from '../components/TopicPicker';
import { getColorSwatch } from '../utils/colorSwatches';
import type { Word } from '../types';
import { getTranslation } from '../utils/getTranslation';

const TOTAL = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getChoices(correct: Word, all: Word[], lang: string): string[] {
  const answer = getTranslation(correct, lang);
  const wrong = shuffle(all.filter(w => w.id !== correct.id)).slice(0, 3)
    .map(w => getTranslation(w, lang));
  return shuffle([answer, ...wrong]);
}

function correctAnswer(word: Word, lang: string) {
  return getTranslation(word, lang);
}

// ─── Multiple-choice card ────────────────────────────────────────────────────
function McCard({ word, choices, lang, onAnswer }: {
  word: Word; choices: string[]; lang: string; onAnswer: (ok: boolean) => void;
}) {
  const colorSwatch = word.category === 'Colors' ? getColorSwatch(word.word) : null;
  const { imageUrl, loading, handleError } = useUnsplashImage(colorSwatch ? '' : word.unsplashQuery);
  const [selected, setSelected] = useState<string | null>(null);
  const correct = correctAnswer(word, lang);
  const { kidsMode, speak } = useApp();

  function pick(c: string) {
    if (selected) return;
    setSelected(c);
    speak(c, lang);
    setTimeout(() => onAnswer(c === correct), 900);
  }

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
      <div className={`rounded-3xl overflow-hidden shadow-md ${kidsMode ? 'aspect-square' : 'aspect-video'}`}
        style={{ background: 'var(--surface2)' }}>
        {colorSwatch ? (
          <div className="w-full h-full" style={{ background: colorSwatch }} />
        ) : loading ? (
          <div className="w-full h-full animate-pulse" style={{ background: 'var(--surface2)' }} />
        ) : (
          <img src={imageUrl} alt="?" className="w-full h-full object-cover" onError={handleError} />
        )}
      </div>
      <p className="text-center text-sm" style={{ color: 'var(--text2)' }}>
        What is this{lang !== 'en' ? ` in ${lang.toUpperCase()}` : ''}?
      </p>
      <div className="grid grid-cols-2 gap-3">
        {choices.map(c => {
          let bg = 'var(--surface)', border = 'var(--border)', color = 'var(--text)';
          if (selected) {
            if (c === correct)       { bg = 'var(--green-bg)'; border = 'var(--green)'; color = 'var(--green)'; }
            else if (c === selected) { bg = 'var(--red-bg)';   border = 'var(--red)';   color = 'var(--red)'; }
            else                     { color = 'var(--text3)'; }
          }
          return (
            <button key={c} onClick={() => pick(c)}
              className={`p-3 rounded-xl border-2 font-semibold transition-all ${kidsMode ? 'text-base py-4' : 'text-sm'}`}
              style={{ background: bg, borderColor: border, color }}>
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Type-the-answer card ───────────────────────────────────────────────────
function TypeCard({ word, lang, onAnswer }: {
  word: Word; lang: string; onAnswer: (ok: boolean) => void;
}) {
  const colorSwatch = word.category === 'Colors' ? getColorSwatch(word.word) : null;
  const { imageUrl, loading, handleError } = useUnsplashImage(colorSwatch ? '' : word.unsplashQuery);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const correct = correctAnswer(word, lang);
  const { speak } = useApp();

  useEffect(() => { inputRef.current?.focus(); }, []);

  function check() {
    if (result) return;
    const ok = input.trim().toLowerCase() === correct.toLowerCase();
    setResult(ok ? 'correct' : 'wrong');
    speak(correct, lang);
    setTimeout(() => onAnswer(ok), 1200);
  }

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
      <div className="aspect-square rounded-3xl overflow-hidden shadow-md" style={{ background: 'var(--surface2)' }}>
        {colorSwatch ? (
          <div className="w-full h-full" style={{ background: colorSwatch }} />
        ) : loading ? (
          <div className="w-full h-full animate-pulse" style={{ background: 'var(--surface2)' }} />
        ) : (
          <img src={imageUrl} alt="?" className="w-full h-full object-cover" onError={handleError} />
        )}
      </div>
      <p className="text-center text-sm" style={{ color: 'var(--text2)' }}>
        Type the word{lang !== 'en' ? ` in ${lang.toUpperCase()}` : ''}
      </p>
      <div className="flex flex-col gap-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && check()}
          disabled={!!result}
          placeholder="Type your answer…"
          className="w-full px-4 py-3 rounded-xl text-lg font-medium text-center focus:outline-none focus:ring-2"
          style={{
            background: result === 'correct' ? 'var(--green-bg)' : result === 'wrong' ? 'var(--red-bg)' : 'var(--surface)',
            border: `2px solid ${result === 'correct' ? 'var(--green)' : result === 'wrong' ? 'var(--red)' : 'var(--border)'}`,
            color: result === 'correct' ? 'var(--green)' : result === 'wrong' ? 'var(--red)' : 'var(--text)',
          }}
        />
        {result === 'wrong' && (
          <p className="text-center text-sm font-medium" style={{ color: 'var(--green)' }}>
            ✓ Correct: <strong>{correct}</strong>
          </p>
        )}
        {!result && (
          <button onClick={check}
            className="w-full py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--accent)' }}>
            Check
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Main Quiz component ─────────────────────────────────────────────────────
export function Quiz() {
  const { targetLang, kidsMode, recordQuizResult } = useApp();

  const [pool, setPool] = useState<Word[]>([]);
  const [started, setStarted] = useState(false);
  const [mode, setMode] = useState<'choice' | 'type'>('choice');
  const [deck, setDeck] = useState<Word[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [choices, setChoices] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  function handleStart(selectedPool: Word[]) {
    setPool(selectedPool);
    setDeck(shuffle(selectedPool));
    setIndex(0);
    setScore(0);
    setDone(false);
    setStarted(true);
  }

  useEffect(() => {
    if (started && index < TOTAL && deck.length > 0)
      setChoices(getChoices(deck[index], pool, targetLang));
  }, [index, deck, targetLang, started]);

  const handleAnswer = useCallback((correct: boolean) => {
    if (correct) { setScore(s => s + 1); if (kidsMode) setShowConfetti(true); }
    setShowConfetti(correct && kidsMode);
    setTimeout(() => setShowConfetti(false), 1500);
    if (index + 1 >= TOTAL) {
      const finalScore = correct ? score + 1 : score;
      recordQuizResult(finalScore, TOTAL);
      if (finalScore >= 7) setShowConfetti(true);
      setDone(true);
    } else {
      setIndex(i => i + 1);
    }
  }, [index, score, kidsMode, recordQuizResult]);

  function restart() { setDeck(shuffle(pool)); setIndex(0); setScore(0); setDone(false); setShowConfetti(false); }

  if (!started) {
    return <TopicPicker mode="quiz" onStart={handleStart} kidsMode={kidsMode} />;
  }

  if (done) {
    const pct = Math.round((score / TOTAL) * 100);
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 gap-6 text-center">
        <Confetti trigger={showConfetti || pct >= 70} />
        <Trophy className={`w-20 h-20 ${pct >= 70 ? 'text-yellow-400' : ''}`}
          style={{ color: pct >= 70 ? '#f59e0b' : 'var(--text3)' }} />
        <div>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>Quiz Complete!</h2>
          <p className="text-sm mt-1" style={{ color: 'var(--text2)' }}>You scored {score} out of {TOTAL}</p>
        </div>
        <div className="w-32 h-32 rounded-full border-8 flex items-center justify-center"
          style={{ borderColor: 'var(--accent-bg)', background: 'var(--surface)' }}>
          <span className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>{pct}%</span>
        </div>
        <p className="font-medium flex items-center gap-1" style={{ color: pct >= 70 ? 'var(--green)' : '#f59e0b' }}>
          {pct >= 70
            ? <><CheckCircle className="w-4 h-4" /> Great job!</>
            : <><XCircle className="w-4 h-4" /> Keep practising!</>}
        </p>
        <div className="flex gap-3">
          <button onClick={() => setStarted(false)}
            className="flex items-center gap-1.5 px-5 py-3 rounded-2xl font-semibold transition-opacity hover:opacity-80"
            style={{ background: 'var(--surface2)', color: 'var(--text2)', border: '1px solid var(--border)' }}>
            <ArrowLeft className="w-4 h-4" /> Change topic
          </button>
          <button onClick={restart}
            className="px-8 py-3 rounded-2xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--accent)' }}>
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center px-4 py-5 gap-5">
      <Confetti trigger={showConfetti} />

      {/* Back + Mode toggle row */}
      <div className="w-full max-w-sm flex items-center gap-2">
        <button onClick={() => setStarted(false)}
          className="flex items-center gap-1 text-sm font-medium px-2 py-1.5 rounded-lg transition-opacity hover:opacity-70"
          style={{ color: 'var(--text3)' }}>
          <ArrowLeft className="w-4 h-4" /> Topics
        </button>
        <div className="flex-1" />
      {!kidsMode && (
        <div className="flex rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
          {(['choice', 'type'] as const).map(m => (
            <button key={m} onClick={() => { setMode(m); restart(); }}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors"
              style={{
                background: mode === m ? 'var(--accent)' : 'var(--surface)',
                color: mode === m ? '#fff' : 'var(--text2)',
              }}>
              {m === 'choice' ? <MousePointer className="w-3.5 h-3.5" /> : <Keyboard className="w-3.5 h-3.5" />}
              {m === 'choice' ? 'Multiple choice' : 'Type answer'}
            </button>
          ))}
        </div>
      )}
      </div>

      {/* Progress */}
      <div className="w-full max-w-sm">
        <div className="flex justify-between text-sm mb-2" style={{ color: 'var(--text2)' }}>
          <span>Question {index + 1} / {TOTAL}</span>
          <span className="font-semibold" style={{ color: 'var(--accent)' }}>Score: {score}</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--surface2)' }}>
          <div className="h-full rounded-full transition-all duration-300"
            style={{ width: `${(index / TOTAL) * 100}%`, background: 'var(--accent)' }} />
        </div>
      </div>

      {choices.length > 0 && (
        mode === 'choice'
          ? <McCard key={`mc-${deck[index].id}`} word={deck[index]} choices={choices} lang={targetLang} onAnswer={handleAnswer} />
          : <TypeCard key={`type-${deck[index].id}`} word={deck[index]} lang={targetLang} onAnswer={handleAnswer} />
      )}
    </div>
  );
}
