import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle, Volume2, ArrowLeft, Brain } from 'lucide-react';
import { useUnsplashImage } from '../hooks/useUnsplash';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/getTranslation';
import { TopicPicker } from '../components/TopicPicker';
import { SRSReview } from '../components/SRSReview';
import { getColorSwatch } from '../utils/colorSwatches';
import type { Word } from '../types';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function FlashCard({ word }: { word: Word }) {
  const { targetLang, speak, kidsMode, markWordSeen } = useApp();
  const [flipped, setFlipped] = useState(false);
  const colorSwatch = word.category === 'Colors' ? getColorSwatch(word.word) : null;
  const { imageUrl, loading, handleError } = useUnsplashImage(colorSwatch ? '' : word.unsplashQuery);
  const translation = getTranslation(word, targetLang);

  return (
    <div className="w-full max-w-sm mx-auto cursor-pointer" style={{ perspective: '1000px' }}
      onClick={() => {
        if (!flipped) { speak(translation, targetLang); markWordSeen(word.id); }
        setFlipped(f => !f);
      }}>
      <div className="relative w-full transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', aspectRatio: '3/4' }}>

        {/* Front */}
        <div className="absolute inset-0 rounded-3xl shadow-lg overflow-hidden flex flex-col"
          style={{ backfaceVisibility: 'hidden', background: 'var(--surface)' }}>
          <div className="flex-1 relative overflow-hidden" style={{ background: 'var(--surface2)' }}>
            {colorSwatch ? (
              <div className="w-full h-full" style={{ background: colorSwatch }} />
            ) : loading ? (
              <div className="absolute inset-0 animate-pulse" style={{ background: 'var(--surface2)' }} />
            ) : (
              <img src={imageUrl} alt={word.word} className="w-full h-full object-cover" onError={handleError} />
            )}
          </div>
          <div className="p-6 text-center">
            <p className={`font-bold ${kidsMode ? 'text-3xl' : 'text-2xl'}`} style={{ color: 'var(--text)' }}>
              {word.word}
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <button onClick={e => { e.stopPropagation(); speak(word.word, 'en'); }}
                className="p-1.5 rounded-full transition-opacity hover:opacity-70"
                style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}>
                <Volume2 className="w-4 h-4" />
              </button>
              <p className="text-sm" style={{ color: 'var(--text2)' }}>Tap to reveal</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-3xl shadow-lg flex flex-col items-center justify-center p-8"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'var(--accent)' }}>
          <p className="text-white/60 text-sm mb-4 uppercase tracking-widest">Translation</p>
          <p className={`font-bold text-white text-center ${kidsMode ? 'text-5xl' : 'text-4xl'}`} dir="auto">
            {translation}
          </p>
          <button onClick={e => { e.stopPropagation(); speak(translation, targetLang); }}
            className="mt-4 p-2.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
            <Volume2 className="w-5 h-5 text-white" />
          </button>
          <span className="mt-4 inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full">
            {word.category}
          </span>
          <p className="text-white/50 text-sm mt-8">Tap to flip back</p>
        </div>
      </div>
    </div>
  );
}

export function Flashcards() {
  const { kidsMode, srsDueCount } = useApp();
  const [pool, setPool] = useState<Word[]>([]);
  const [started, setStarted] = useState(false);
  const [srsMode, setSrsMode] = useState(false);
  const [deck, setDeck] = useState<Word[]>([]);
  const [index, setIndex] = useState(0);

  if (srsMode) return <SRSReview onBack={() => setSrsMode(false)} />;

  function handleStart(selectedPool: Word[]) {
    setPool(selectedPool);
    setDeck(shuffle(selectedPool));
    setIndex(0);
    setStarted(true);
  }

  const next = useCallback(() => setIndex(i => Math.min(i + 1, deck.length - 1)), [deck.length]);
  const prev = useCallback(() => setIndex(i => Math.max(i - 1, 0)), []);
  const reshuffle = useCallback(() => { setDeck(shuffle(pool)); setIndex(0); }, [pool]);

  if (!started) {
    return (
      <div className="flex flex-col flex-1">
        {/* SRS review banner */}
        <button
          onClick={() => setSrsMode(true)}
          className="mx-4 mt-4 mb-1 flex items-center gap-3 p-4 rounded-2xl text-left transition-all active:scale-[0.98]"
          style={{
            background: srsDueCount > 0 ? 'var(--accent)' : 'var(--surface)',
            border: srsDueCount > 0 ? 'none' : '1px solid var(--border)',
          }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: srsDueCount > 0 ? 'rgba(255,255,255,0.2)' : 'var(--accent-bg)' }}>
            <Brain className="w-5 h-5" style={{ color: srsDueCount > 0 ? '#fff' : 'var(--accent)' }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm leading-tight"
              style={{ color: srsDueCount > 0 ? '#fff' : 'var(--text)' }}>
              {srsDueCount > 0 ? `${srsDueCount} card${srsDueCount !== 1 ? 's' : ''} due for review` : 'Spaced repetition review'}
            </p>
            <p className="text-xs mt-0.5"
              style={{ color: srsDueCount > 0 ? 'rgba(255,255,255,0.75)' : 'var(--text2)' }}>
              {srsDueCount > 0 ? 'Tap to review now — keeps words in memory' : 'No cards due right now. Browse to add words.'}
            </p>
          </div>
          {srsDueCount > 0 && (
            <div className="px-2.5 py-1 rounded-full text-xs font-bold flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.25)', color: '#fff' }}>
              {srsDueCount}
            </div>
          )}
        </button>

        <div className="mx-4 my-2 flex items-center gap-2">
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          <span className="text-xs font-medium px-2" style={{ color: 'var(--text3)' }}>or browse by topic</span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>

        <TopicPicker mode="flashcards" onStart={handleStart} kidsMode={kidsMode} />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center px-4 py-6 gap-6">
      <div className="w-full max-w-sm">
        <div className="flex justify-between text-sm mb-2" style={{ color: 'var(--text2)' }}>
          <button onClick={() => setStarted(false)}
            className="flex items-center gap-1 font-medium transition-opacity hover:opacity-70"
            style={{ color: 'var(--text3)' }}>
            <ArrowLeft className="w-3.5 h-3.5" /> Topics
          </button>
          <span style={{ color: 'var(--text2)' }}>Card {index + 1} of {deck.length}</span>
          <button onClick={reshuffle} className="flex items-center gap-1 font-medium"
            style={{ color: 'var(--accent)' }}>
            <Shuffle className="w-3.5 h-3.5" /> Shuffle
          </button>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--surface2)' }}>
          <div className="h-full rounded-full transition-all duration-300"
            style={{ width: `${((index + 1) / deck.length) * 100}%`, background: 'var(--accent)' }} />
        </div>
      </div>

      <FlashCard key={deck[index].id} word={deck[index]} />

      <div className="flex items-center gap-4">
        {([
          { onClick: prev, disabled: index === 0, Icon: ChevronLeft },
          { onClick: reshuffle, disabled: false, Icon: RotateCcw },
          { onClick: next, disabled: index === deck.length - 1, Icon: ChevronRight },
        ] as const).map(({ onClick, disabled, Icon }, i) => (
          <button key={i} onClick={onClick} disabled={disabled}
            className="p-3 rounded-full transition-colors disabled:opacity-30"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <Icon className="w-5 h-5" style={{ color: 'var(--text)' }} />
          </button>
        ))}
      </div>
    </div>
  );
}
