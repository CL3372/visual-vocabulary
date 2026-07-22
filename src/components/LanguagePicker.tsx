import { useState } from 'react';
import { X, Check, Lock, Zap } from 'lucide-react';
import { LANGUAGES } from '../data/languages';
import { useApp } from '../context/AppContext';
import { FREE_LANGS } from '../context/AppContext';
import { UpgradeModal } from './UpgradeModal';

interface Props {
  value: string;
  onChange: (code: string) => void;
  onClose: () => void;
}

export function LanguagePicker({ value, onChange, onClose }: Props) {
  const { isPro } = useApp();
  const [showUpgrade, setShowUpgrade] = useState(false);

  function handleSelect(code: string) {
    if (!isPro && !FREE_LANGS.has(code)) { setShowUpgrade(true); return; }
    onChange(code);
    setTimeout(onClose, 150);
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 flex flex-col justify-end"
        style={{ background: 'rgba(0,0,0,0.5)' }}
        onClick={onClose}
      >
        {/* Sheet */}
        <div
          className="rounded-t-3xl w-full max-w-lg mx-auto slide-up flex flex-col"
          style={{ background: 'var(--surface)', maxHeight: '85vh' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Handle bar */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full" style={{ background: 'var(--border)' }} />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3">
            <div>
              <h2 className="font-bold text-lg leading-none" style={{ color: 'var(--text)' }}>
                Learning language
              </h2>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>
                {isPro ? 'All languages unlocked' : 'Portuguese & French free · Pro unlocks all 18'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full transition-colors"
              style={{ background: 'var(--surface2)', color: 'var(--text2)' }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Language grid */}
          <div className="grid grid-cols-2 gap-2 px-4 pb-4 pt-1 overflow-y-auto">
            {LANGUAGES.map(lang => {
              const active  = lang.code === value;
              const locked  = !isPro && !FREE_LANGS.has(lang.code);
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className="flex items-center gap-3 p-3 rounded-2xl text-left transition-all active:scale-95 relative"
                  style={{
                    background: active ? 'var(--accent-bg)' : locked ? 'var(--surface2)' : 'var(--surface2)',
                    border: `1.5px solid ${active ? 'var(--accent)' : 'transparent'}`,
                    opacity: locked ? 0.7 : 1,
                  }}
                >
                  <span className="text-3xl leading-none">{lang.flag}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm leading-tight truncate" style={{ color: active ? 'var(--accent)' : 'var(--text)' }}>
                      {lang.nativeName}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>
                      {lang.label}
                    </p>
                  </div>
                  {active  && <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent)' }} />}
                  {locked  && <Lock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--text3)' }} />}
                </button>
              );
            })}
          </div>

          {/* Pro upsell strip */}
          {!isPro && (
            <button
              onClick={() => setShowUpgrade(true)}
              className="mx-4 mb-6 w-[calc(100%-2rem)] py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold text-sm transition-all active:scale-95"
              style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: '#fff' }}
            >
              <Zap className="w-4 h-4" />
              Unlock all 18 languages with Pro
            </button>
          )}
        </div>
      </div>

      {showUpgrade && (
        <UpgradeModal
          reason="Unlock all 18 languages including Spanish, Arabic, Japanese, Polish & more"
          onClose={() => setShowUpgrade(false)}
        />
      )}
    </>
  );
}
