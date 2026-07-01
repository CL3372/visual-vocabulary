import { Volume2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ALL_WORDS } from '../data/words';
import { useUnsplashImage } from '../hooks/useUnsplash';
import { LANGUAGES } from '../data/languages';
import { getTranslation } from '../utils/getTranslation';

function getTodayWord() {
  const day = Math.floor(Date.now() / 86400000);
  return ALL_WORDS[day % ALL_WORDS.length];
}

export function WordOfDay() {
  const { targetLang, speak } = useApp();
  const word = getTodayWord();
  const { imageUrl, loading, handleError } = useUnsplashImage(word.unsplashQuery);
  const translation = getTranslation(word, targetLang);
  const langLabel = LANGUAGES.find(l => l.code === targetLang)?.flag ?? '';

  return (
    <div className="mx-4 mt-4 rounded-2xl overflow-hidden flex gap-0 shadow-sm slide-up"
      style={{ background: 'var(--accent-bg)', border: '1.5px solid var(--accent)' }}>
      <div className="w-24 h-24 flex-shrink-0 relative">
        {loading
          ? <div className="absolute inset-0 animate-pulse" style={{ background: 'var(--surface2)' }} />
          : <img src={imageUrl} alt={word.word} className="w-full h-full object-cover" onError={handleError} />}
      </div>
      <div className="flex-1 p-3 flex flex-col justify-center min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>
          ✨ Word of the day
        </p>
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold" style={{ color: 'var(--text)' }}>{word.word}</p>
          <button
            onClick={() => speak(word.word, 'en')}
            className="p-1 rounded-full transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent)' }}
            aria-label="Pronounce"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
        {translation && targetLang !== 'en' && (
          <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent-text)' }}>
            {langLabel} {translation}
          </p>
        )}
        <p className="text-xs mt-1" style={{ color: 'var(--text2)' }}>{word.category}</p>
      </div>
    </div>
  );
}
