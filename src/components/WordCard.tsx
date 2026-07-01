import { memo } from 'react';
import { Heart, Volume2 } from 'lucide-react';
import { useUnsplashImage } from '../hooks/useUnsplash';
import { useApp } from '../context/AppContext';
import { getColorSwatch } from '../utils/colorSwatches';
import { getTranslation } from '../utils/getTranslation';
import type { Word } from '../types';

export type ViewMode = 'grid2' | 'grid3' | 'list';

interface Props {
  word: Word;
  viewMode?: ViewMode;
  onClick?: () => void;
}

const KIDS_PALETTES = [
  { bg: '#fde68a', text: '#92400e' },
  { bg: '#a7f3d0', text: '#065f46' },
  { bg: '#bfdbfe', text: '#1e3a8a' },
  { bg: '#fecaca', text: '#991b1b' },
  { bg: '#ddd6fe', text: '#4c1d95' },
  { bg: '#fed7aa', text: '#7c2d12' },
];

export const WordCard = memo(function WordCard({ word, viewMode = 'grid2', onClick }: Props) {
  const { targetLang, isFavorite, toggleFavorite, speak, kidsMode } = useApp();
  const colorSwatch = word.category === 'Colors' ? getColorSwatch(word.word) : null;
  const { imageUrl, loading, handleError } = useUnsplashImage(colorSwatch ? '' : word.unsplashQuery);
  const translation = getTranslation(word, targetLang);
  const fav = isFavorite(word.id);
  const showTranslation = targetLang !== 'en' && translation && translation !== word.word;

  const kidsPalette = KIDS_PALETTES[parseInt(word.id.replace(/\D/g, '')) % KIDS_PALETTES.length];

  function handleSpeak(e: React.MouseEvent) {
    e.stopPropagation();
    const text = showTranslation ? translation : word.word;
    const lang = showTranslation ? targetLang : 'en';
    speak(text, lang);
  }

  // ── List mode ─────────────────────────────────────────────────────────────
  if (viewMode === 'list') {
    return (
      <div
        onClick={onClick}
        className="flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors active:scale-[0.99]"
        style={{
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden"
          style={{ background: 'var(--surface2)' }}>
          {colorSwatch ? (
            <div className="w-full h-full" style={{ background: colorSwatch }} />
          ) : loading ? (
            <div className="w-full h-full animate-pulse" style={{ background: 'var(--surface2)' }} />
          ) : (
            <img src={imageUrl} alt={word.word} className="w-full h-full object-cover" loading="lazy" onError={handleError} />
          )}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-base leading-tight truncate" style={{ color: 'var(--text)' }}>
            {word.word}
          </p>
          {showTranslation && (
            <p className="text-sm mt-0.5 truncate font-medium" style={{ color: 'var(--accent)' }} dir="auto">
              {translation}
            </p>
          )}
          <span className="inline-block text-[11px] mt-1 px-2 py-0.5 rounded-full"
            style={{ background: 'var(--surface2)', color: 'var(--text3)' }}>
            {word.category}
          </span>
        </div>

        {/* Actions */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <button onClick={handleSpeak} className="p-2 rounded-full transition-colors"
            style={{ background: 'var(--surface2)', color: 'var(--accent)' }}
            aria-label="Pronounce">
            <Volume2 className="w-4 h-4" />
          </button>
          <button
            onClick={e => { e.stopPropagation(); toggleFavorite(word.id); }}
            className="p-2 rounded-full transition-all"
            style={{ background: fav ? '#fee2e2' : 'var(--surface2)', color: fav ? '#ef4444' : 'var(--text3)' }}
            aria-label={fav ? 'Remove favourite' : 'Add favourite'}>
            <Heart className={`w-4 h-4 ${fav ? 'fill-red-400' : ''}`} />
          </button>
        </div>
      </div>
    );
  }

  // ── Grid mode ─────────────────────────────────────────────────────────────
  const isGrid3 = viewMode === 'grid3';

  return (
    <div
      onClick={onClick}
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
      style={{
        background: kidsMode ? kidsPalette.bg : 'var(--surface)',
        border: '1.5px solid var(--border)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
      }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: kidsMode ? '1/1' : (isGrid3 ? '1/1' : '4/3'),
          background: 'var(--surface2)',
        }}
      >
        {colorSwatch ? (
          <div className="w-full h-full" style={{ background: colorSwatch }} />
        ) : loading ? (
          <div className="absolute inset-0 animate-pulse" style={{ background: 'var(--surface2)' }} />
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt={word.word}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={handleError}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'var(--surface2)' }}>
            <span className="text-3xl opacity-30">📷</span>
          </div>
        )}

        {/* Favourite button */}
        <button
          onClick={e => { e.stopPropagation(); toggleFavorite(word.id); }}
          className="absolute top-2 right-2 p-1.5 rounded-full transition-all"
          style={{ background: fav ? 'rgba(239,68,68,0.9)' : 'rgba(0,0,0,0.28)' }}
          aria-label={fav ? 'Remove favourite' : 'Add favourite'}
        >
          <Heart className={`${isGrid3 ? 'w-3 h-3' : 'w-3.5 h-3.5'} ${fav ? 'fill-white text-white' : 'text-white'}`} />
        </button>
      </div>

      {/* Text strip */}
      <div className={`${isGrid3 ? 'px-2 py-2' : 'px-3 py-2.5'}`}
        style={{ background: kidsMode ? kidsPalette.bg : 'var(--surface)' }}>
        {/* Word + speaker */}
        <div className="flex items-center justify-between gap-1">
          <p
            className={`font-bold leading-tight flex-1 min-w-0 truncate ${
              kidsMode ? 'text-lg' : isGrid3 ? 'text-sm' : 'text-[15px]'
            }`}
            style={{ color: kidsMode ? kidsPalette.text : 'var(--text)' }}
          >
            {word.word}
          </p>
          <button
            onClick={handleSpeak}
            className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Pronounce"
          >
            <Volume2 className={`${isGrid3 ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} style={{ color: 'var(--accent)' }} />
          </button>
        </div>

        {/* Translation */}
        {showTranslation && (
          <p
            className={`font-semibold leading-tight truncate mt-0.5 ${
              kidsMode ? 'text-base' : isGrid3 ? 'text-xs' : 'text-[13px]'
            }`}
            style={{ color: 'var(--accent)' }}
            dir="auto"
          >
            {translation}
          </p>
        )}

        {/* Category tag (grid2 only, non-kids) */}
        {!kidsMode && !isGrid3 && (
          <span className="inline-block mt-1.5 text-[10px] px-1.5 py-0.5 rounded-full leading-none"
            style={{ background: 'var(--surface2)', color: 'var(--text3)' }}>
            {word.category}
          </span>
        )}
      </div>
    </div>
  );
});
