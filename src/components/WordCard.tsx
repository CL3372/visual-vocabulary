import { Heart, Volume2 } from 'lucide-react';
import { useUnsplashImage } from '../hooks/useUnsplash';
import { useApp } from '../context/AppContext';
import { getColorSwatch } from '../utils/colorSwatches';
import type { Word } from '../types';

interface Props {
  word: Word;
  onClick?: () => void;
}

export function WordCard({ word, onClick }: Props) {
  const { targetLang, isFavorite, toggleFavorite, speak, kidsMode } = useApp();
  const colorSwatch = word.category === 'Colors' ? getColorSwatch(word.word) : null;
  const { imageUrl, loading, handleError } = useUnsplashImage(colorSwatch ? '' : word.unsplashQuery);
  const translation = word.translations[targetLang];
  const fav = isFavorite(word.id);

  const KIDS_COLORS = ['#fde68a','#a7f3d0','#bfdbfe','#fecaca','#ddd6fe','#fed7aa'];
  const kidsBg = KIDS_COLORS[parseInt(word.id.replace('g','')) % KIDS_COLORS.length];

  return (
    <div
      onClick={onClick}
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 active:scale-95"
      style={{
        background: kidsMode ? kidsBg : 'var(--surface)',
        border: '1.5px solid var(--border)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}
    >
      <div className="relative overflow-hidden aspect-square" style={{ background: 'var(--surface2)' }}>
        {colorSwatch ? (
          <div className="w-full h-full" style={{ background: colorSwatch }} />
        ) : loading ? (
          <div className="absolute inset-0 animate-pulse" style={{ background: 'var(--surface2)' }} />
        ) : (
          <img src={imageUrl} alt={word.word} className="w-full h-full object-cover" loading="lazy" onError={handleError} />
        )}
        <button
          onClick={e => { e.stopPropagation(); toggleFavorite(word.id); }}
          className="absolute top-1.5 right-1.5 p-1.5 rounded-full transition-all"
          style={{ background: 'rgba(0,0,0,0.25)' }}
          aria-label={fav ? 'Remove favourite' : 'Add favourite'}
        >
          <Heart className={`w-3.5 h-3.5 ${fav ? 'fill-red-400 text-red-400' : 'text-white'}`} />
        </button>
      </div>

      <div className={`p-2.5 text-center ${kidsMode ? 'pb-3' : ''}`}>
        <div className="flex items-center justify-center gap-1">
          <p className={`font-bold leading-tight ${kidsMode ? 'text-xl' : 'text-base'}`}
            style={{ color: 'var(--text)' }}>
            {word.word}
          </p>
          <button
            onClick={e => {
              e.stopPropagation();
              const text = targetLang !== 'en' && translation ? translation : word.word;
              const lang = targetLang !== 'en' && translation ? targetLang : 'en';
              speak(text, lang);
            }}
            className="opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Pronounce"
          >
            <Volume2 className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
          </button>
        </div>
        {translation && targetLang !== 'en' && (
          <button
            onClick={e => { e.stopPropagation(); speak(translation, targetLang); }}
            className={`font-medium mt-0.5 transition-opacity hover:opacity-70 ${kidsMode ? 'text-base' : 'text-xs'}`}
            style={{ color: 'var(--accent)' }}>
            {translation}
          </button>
        )}
        {!kidsMode && (
          <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full"
            style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
            {word.category}
          </span>
        )}
      </div>
    </div>
  );
}
