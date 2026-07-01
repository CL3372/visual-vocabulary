import { useState, useEffect, useCallback } from 'react';
import { X, Volume2, Heart, Share2, Check, Loader2, Download, ChevronLeft } from 'lucide-react';
import type { Word } from '../types';
import { useUnsplashImage } from '../hooks/useUnsplash';
import { LANGUAGES } from '../data/languages';
import { useApp } from '../context/AppContext';
import { getColorSwatch } from '../utils/colorSwatches';
import { generateShareCard, shareWord } from '../utils/shareCard';
import { getTranslation, getTranslationOrDash } from '../utils/getTranslation';

interface Props { word: Word; onClose: () => void }

// Pick 3 display languages for the comparison row (excluding current lang and en)
const COMPARE_LANGS = ['es', 'fr', 'ja', 'de', 'ar', 'hi', 'ru', 'zh', 'ko', 'it', 'pt', 'tr'];

export function WordModal({ word, onClose }: Props) {
  const colorSwatch = word.category === 'Colors' ? getColorSwatch(word.word) : null;
  const { imageUrl, loading, handleError } = useUnsplashImage(colorSwatch ? '' : word.unsplashQuery);
  const { speak, targetLang, isFavorite, toggleFavorite } = useApp();

  const [view, setView] = useState<'detail' | 'share'>('detail');
  const [shareDataUrl, setShareDataUrl] = useState<string | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [shareState, setShareState] = useState<'idle' | 'loading' | 'done'>('idle');

  const lang = LANGUAGES.find(l => l.code === targetLang) ?? LANGUAGES[1];
  const translation = getTranslation(word, targetLang);

  // Extra languages for the comparison row
  const extras = COMPARE_LANGS
    .filter(c => c !== targetLang && c !== 'en')
    .slice(0, 4)
    .map(c => {
      const l = LANGUAGES.find(x => x.code === c)!;
      return { flag: l.flag, label: l.label.split(' ')[0], text: getTranslation(word, c) };
    })
    .filter(e => e.text !== word.word); // drop if falls back to English

  const buildCard = useCallback(async () => {
    setPreviewLoading(true);
    try {
      const dataUrl = await generateShareCard({
        word: word.word,
        translation,
        sentence: word.sentence,
        category: word.category,
        langFlag: lang.flag,
        langName: lang.nativeName,
        imageUrl: imageUrl || undefined,
        extras: extras.slice(0, 4),
      });
      setShareDataUrl(dataUrl);
    } finally {
      setPreviewLoading(false);
    }
  }, [word, translation, lang, imageUrl, extras]);

  // Pre-generate card when switching to share view
  useEffect(() => {
    if (view === 'share' && !shareDataUrl && !previewLoading) {
      buildCard();
    }
  }, [view, shareDataUrl, previewLoading, buildCard]);

  // Re-generate if image loads after we opened share view
  useEffect(() => {
    if (view === 'share' && imageUrl && !previewLoading) {
      setShareDataUrl(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl]);

  async function handleShare() {
    if (!shareDataUrl || shareState !== 'idle') return;
    setShareState('loading');
    await shareWord(
      { word: word.word, translation, category: word.category, langFlag: lang.flag, langName: lang.nativeName },
      shareDataUrl,
    );
    setShareState('done');
    setTimeout(() => setShareState('idle'), 2000);
  }

  function handleDownload() {
    if (!shareDataUrl) return;
    const a = document.createElement('a');
    a.href = shareDataUrl;
    a.download = `${word.word.replace(/\s+/g, '-')}-visual-vocab.png`;
    a.click();
  }

  const fav = isFavorite(word.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)' }} onClick={onClose}>
      <div className="rounded-3xl overflow-hidden w-full max-w-sm shadow-2xl slide-up"
        style={{ background: 'var(--surface)' }} onClick={e => e.stopPropagation()}>

        {/* ── Detail view ────────────────────────────────────────────── */}
        {view === 'detail' && (
          <>
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
                  <button
                    onClick={() => setView('share')}
                    className="p-2 rounded-full transition-all"
                    style={{ background: 'var(--surface2)', color: 'var(--text2)' }}
                    aria-label="Share this word">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {word.sentence && (
                <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--text2)' }}>
                  {word.sentence}
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
          </>
        )}

        {/* ── Share card preview view ─────────────────────────────────── */}
        {view === 'share' && (
          <div className="flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
              <button onClick={() => setView('detail')}
                className="p-1.5 rounded-lg transition-colors"
                style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-semibold text-sm flex-1" style={{ color: 'var(--text)' }}>Share Word Card</span>
              <button onClick={onClose}
                className="p-1.5 rounded-lg transition-colors"
                style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Card preview */}
            <div className="px-4 pt-4 pb-2">
              <div className="rounded-2xl overflow-hidden aspect-square w-full relative"
                style={{ background: 'var(--surface2)' }}>
                {previewLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin" style={{ color: 'var(--accent)' }} />
                  </div>
                )}
                {shareDataUrl && (
                  <img src={shareDataUrl} alt="Share card preview" className="w-full h-full object-cover" />
                )}
              </div>
            </div>

            {/* Word summary */}
            <div className="px-4 py-2 text-center">
              <p className="text-xs" style={{ color: 'var(--text2)' }}>
                {word.word} · {lang.flag} {lang.nativeName} · {word.category}
              </p>
            </div>

            {/* Action buttons */}
            <div className="px-4 pb-5 flex gap-3">
              {/* Download */}
              <button
                onClick={handleDownload}
                disabled={!shareDataUrl}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm transition-all active:scale-95 disabled:opacity-40"
                style={{ background: 'var(--surface2)', color: 'var(--text)' }}>
                <Download className="w-4 h-4" />
                Save
              </button>

              {/* Share */}
              <button
                onClick={handleShare}
                disabled={!shareDataUrl || shareState !== 'idle'}
                className="flex-[2] flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm transition-all active:scale-95 disabled:opacity-40"
                style={{
                  background: shareState === 'done' ? '#16a34a' : 'var(--accent)',
                  color: '#fff',
                }}>
                {shareState === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : shareState === 'done' ? (
                  <><Check className="w-4 h-4" /> Shared!</>
                ) : (
                  <><Share2 className="w-4 h-4" /> Share</>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
