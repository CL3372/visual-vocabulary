import { useEffect, useState } from 'react';
import type { BadgeDef } from '../data/badges';

interface Props {
  badge: BadgeDef | null;
  onDone: () => void;
}

export function BadgeToast({ badge, onDone }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!badge) return;
    setVisible(true);
    const hide = setTimeout(() => setVisible(false), 3200);
    const done = setTimeout(onDone, 3700);
    return () => { clearTimeout(hide); clearTimeout(done); };
  }, [badge, onDone]);

  if (!badge) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 24,
        left: '50%',
        transform: `translateX(-50%) translateY(${visible ? '0' : '-100px'})`,
        opacity: visible ? 1 : 0,
        transition: 'transform 0.45s cubic-bezier(.34,1.56,.64,1), opacity 0.35s ease',
        zIndex: 9999,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: 'var(--surface)',
        border: '1.5px solid var(--border)',
        borderRadius: 16,
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        padding: '12px 20px',
        minWidth: 240,
        maxWidth: 320,
      }}
    >
      <span style={{ fontSize: 36, lineHeight: 1 }}>{badge.emoji}</span>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: '#f59e0b', textTransform: 'uppercase', marginBottom: 2 }}>
          Badge Unlocked!
        </div>
        <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)', lineHeight: 1.2 }}>{badge.name}</div>
        <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 2 }}>{badge.description}</div>
      </div>
    </div>
  );
}
