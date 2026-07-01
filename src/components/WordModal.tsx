import { useState } from 'react';
import { X, Volume2, Heart, Share2, Check, Loader2, Lock } from 'lucide-react';
import type { Word } from '../types';
import { useUnsplashImage } from '../hooks/useUnsplash';
import { LANGUAGES } from '../data/languages';
import { useApp } from '../context/AppContext';
import { getColorSwatch } from '../utils/colorSwatches';
import { shareWord } from '../utils/shareCard';
import { getTranslation, getTranslationOrDash } from '../utils/getTranslation';
import { UpgradeModal } from './UpgradeModal';

interface Props { word: Word; onClose: () => void }

export function WordModal({ word, onClose }: Props) {
  const colorSwatch = word.category === 'Colors' ? getColorSwatch(word.word) : null;
  const { imageUrl, loading, handleError } = useUnsplashImage(colorSwatch ? '' : word.unsplashQuery);
  const { speak, targetLang, isFavorite, toggleFavorite, isPro } = useApp();
  const [shareState, setShareState] = useState<'idle' | 'loading' | 'done'>('idle');
  const [showUpgrade, setShowUpgrade] = useState(false);

  const lang = LANGUAGES.find(l => l.code === targetLang) ?? LANGUAGES[1];
  const translation = getTranslation(word, targetLang);

  async function handleShare() {
    if (!isPro) { setShowUpgrade(true); return; }
    if (shareState !== 'idle') return;
    setShareState('loading');
    await shareWord({
      word: word.word,
      translation,
      category: word.category,
      langFlag: lang.flag,
      langName: lang.nativeName,
      imageUrl: imageUrl || undefined,
    });
    setShareState('done');
    setTimeout(() => setShareState('idle'), 2000);
  }
  const fav = isFavorite(word.id);

  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)' }} onClick={onClose}>
      <div className="rounded-3xl overflow-hidden w-full max-w-sm shadow-2xl slide-up"
        style={{ background: 'var(--surface)' }} onClick={e => e.stopPropagation()}>

        <div className="aspect-video relative">
          {colorSwatch ? (
            <div className="w-full h-full" style={{ background: colorSwatch }} />
          ) : loading ? (
            <div className="w-full h-full animate-pulse" style={{ background: 'var(--surface2)' }} />
          ) : (
            <img src={imageUrl} alt={word.word} className="w-full h-full object-cover" onError={handleError} />
          )}
          <button onClick={onClose}
            className="absolute top-3 right-3 text-white rounded-full p-1.5 transition-colors"
            style={{ background: 'rgba(0,0,0,0.35)' }}>
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>{word.word}</h2>
              <span className="inline-block text-xs px-2 py-0.5 rounded-full mt-1"
                style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}>
                {word.category}
              </span>
            </div>
            <div className="flex gap-2 mt-1">
              <button onClick={() => speak(word.word, 'en')}
                className="p-2 rounded-full transition-colors"
                style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
                aria-label="Pronounce English">
                <Volume2 className="w-5 h-5" />
              </button>
              <button onClick={() => toggleFavorite(word.id)}
                className="p-2 rounded-full transition-colors"
                style={{ background: fav ? '#fee2e2' : 'var(--surface2)', color: fav ? '#ef4444' : 'var(--text2)' }}
                aria-label={fav ? 'Remove favourite' : 'Save favourite'}>
                <Heart className={`w-5 h-5 ${fav ? 'fill-red-400' : ''}`} />
              </button>
              <button onClick={handleShare}
                className="p-2 rounded-full transition-all relative"
                style={{
                  background: shareState === 'done' ? '#f0fdf4' : 'var(--surface2)',
                  color: shareState === 'done' ? '#16a34a' : 'var(--text2)',
                }}
                aria-label="Share this word">
                {shareState === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> :
                 shareState === 'done'    ? <Check className="w-5 h-5" /> :
                                            <Share2 className="w-5 h-5" />}
                {!isPro && <Lock className="w-2.5 h-2.5 absolute -top-0.5 -right-0.5" style={{ color: '#f59e0b' }} />}
              </button>
            </div>
          </div>

          {word.description && (
            <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--text2)' }}>
              {word.description}
            </p>
          )}

          <div className="grid grid-cols-2 gap-2 mt-4">
            {LANGUAGES.filter(l => l.code !== 'en').map(lang => (
              <button key={lang.code}
                onClick={() => speak(getTranslation(word, lang.code), lang.code)}
                className="p-2.5 rounded-xl text-left transition-all hover:opacity-80 active:scale-95"
                style={{
                  background: lang.code === targetLang ? 'var(--accent-bg)' : 'var(--surface2)',
                  border: lang.code === targetLang ? '1px solid var(--accent)' : '1px solid transparent',
                }}>
                <p className="text-xs" style={{ color: 'var(--text2)' }}>{lang.flag} {lang.label}</p>
                <p className="font-semibold text-sm mt-0.5 flex items-center gap-1" style={{ color: 'var(--text)' }} dir="auto">
                  {getTranslationOrDash(word, lang.code)}
                  <Volume2 className="w-3 h-3 opacity-40" />
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

    {showUpgrade && (
      <UpgradeModal reason="Share beautiful word cards with friends" onClose={() => setShowUpgrade(false)} />
    )}
    </>
  );
}
