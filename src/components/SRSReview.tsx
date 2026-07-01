import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { ArrowLeft, Brain, Bell, BellOff } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ALL_WORDS } from '../data/words';
import { useUnsplashImage } from '../hooks/useUnsplash';
import { useNotifications } from '../hooks/useNotifications';
import type { Word } from '../types';
import { getTranslation } from '../utils/getTranslation';

const NEW_CARDS_PER_SESSION = 20;
const SWIPE_THRESHOLD = 80; // px to trigger a swipe action

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Single review card ────────────────────────────────────────────────────────

interface CardProps {
  word: Word;
  onRate: (grade: 1 | 4 | 5) => void;
}

function ReviewCard({ word, onRate }: CardProps) {
  const { targetLang, speak } = useApp();
  const { imageUrl } = useUnsplashImage(word.unsplashQuery);
  const [revealed, setRevealed] = useState(false);
  const translation = getTranslation(word, targetLang);

  // Swipe state
  const [drag, setDrag] = useState({ x: 0, y: 0, active: false });
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const reveal = useCallback(() => {
    speak(translation, targetLang);
    setRevealed(true);
  }, [translation, targetLang, speak]);

  // Swipe direction label + color
  const swipeAction = (() => {
    if (!revealed || !drag.active) return null;
    const { x, y } = drag;
    if (y < -SWIPE_THRESHOLD && Math.abs(y) > Math.abs(x)) return 'easy';
    if (x < -SWIPE_THRESHOLD) return 'again';
    if (x > SWIPE_THRESHOLD) return 'good';
    return null;
  })();

  const overlayStyle = swipeAction === 'again' ? { background: 'rgba(239,68,68,0.35)' }
                     : swipeAction === 'good'  ? { background: 'rgba(34,197,94,0.35)' }
                     : swipeAction === 'easy'  ? { background: 'rgba(99,102,241,0.35)' }
                     : null;

  const cardTransform = drag.active
    ? `translate(${drag.x}px, ${drag.y}px) rotate(${drag.x * 0.04}deg)`
    : 'translate(0,0) rotate(0deg)';

  function onTouchStart(e: React.TouchEvent) {
    if (!revealed) return;
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    setDrag({ x: 0, y: 0, active: true });
  }
  function onTouchMove(e: React.TouchEvent) {
    if (!touchStart.current || !revealed) return;
    setDrag({
      x: e.touches[0].clientX - touchStart.current.x,
      y: e.touches[0].clientY - touchStart.current.y,
      active: true,
    });
  }
  function onTouchEnd() {
    if (!revealed) return;
    const action = swipeAction;
    setDrag({ x: 0, y: 0, active: false });
    touchStart.current = null;
    if (action === 'again') onRate(1);
    else if (action === 'good') onRate(4);
    else if (action === 'easy') onRate(5);
  }

  // Mouse drag (desktop)
  function onMouseDown(e: React.MouseEvent) {
    if (!revealed) return;
    touchStart.current = { x: e.clientX, y: e.clientY };
    setDrag({ x: 0, y: 0, active: true });
    const onMove = (ev: MouseEvent) => {
      if (!touchStart.current) return;
      setDrag({ x: ev.clientX - touchStart.current.x, y: ev.clientY - touchStart.current.y, active: true });
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      // read latest drag via ref pattern — use a small timeout so state is current
      setTimeout(() => {
        setDrag(prev => {
          const action = (() => {
            if (prev.y < -SWIPE_THRESHOLD && Math.abs(prev.y) > Math.abs(prev.x)) return 'easy';
            if (prev.x < -SWIPE_THRESHOLD) return 'again';
            if (prev.x > SWIPE_THRESHOLD) return 'good';
            return null;
          })();
          if (action === 'again') onRate(1);
          else if (action === 'good') onRate(4);
          else if (action === 'easy') onRate(5);
          return { x: 0, y: 0, active: false };
        });
        touchStart.current = null;
      }, 0);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto select-none">

      {/* Swipe hint labels */}
      {revealed && (
        <div className="flex justify-between w-full px-2 text-xs font-semibold pointer-events-none"
          style={{ color: 'var(--text3)' }}>
          <span style={{ opacity: drag.x < -20 ? 1 : 0.3 }}>← Again</span>
          <span style={{ opacity: drag.y < -20 ? 1 : 0.3 }}>↑ Easy</span>
          <span style={{ opacity: drag.x > 20 ? 1 : 0.3 }}>Good →</span>
        </div>
      )}

      {/* Card face */}
      <div
        ref={cardRef}
        className="w-full rounded-3xl overflow-hidden relative cursor-grab active:cursor-grabbing"
        style={{
          background: 'var(--surface)',
          border: '1.5px solid var(--border)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          transform: cardTransform,
          transition: drag.active ? 'none' : 'transform 0.35s cubic-bezier(.34,1.56,.64,1)',
          userSelect: 'none',
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
      >
        {/* Image */}
        <div className="w-full aspect-[4/3] bg-gray-100 relative">
          {imageUrl ? (
            <img src={imageUrl} alt={word.word} className="w-full h-full object-cover" draggable={false} />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-5xl">🍽️</div>
          )}
          {/* Swipe colour overlay */}
          {overlayStyle && (
            <div className="absolute inset-0 flex items-center justify-center transition-all" style={overlayStyle}>
              <span className="text-white text-4xl font-black drop-shadow-lg">
                {swipeAction === 'again' ? '😰' : swipeAction === 'good' ? '🙂' : '😄'}
              </span>
            </div>
          )}
        </div>

        {/* Word */}
        <div className="p-5 text-center">
          <p className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>{word.word}</p>
          {word.description && (
            <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text2)' }}>
              {word.description}
            </p>
          )}
          {(word as any).sentence && !revealed && (
            <p className="text-xs italic mb-3" style={{ color: 'var(--text3)' }}>
              "{(word as any).sentence}"
            </p>
          )}

          {/* Translation reveal */}
          {revealed ? (
            <div className="mt-3 py-3 rounded-2xl" style={{ background: 'var(--accent-bg)' }}>
              <p className="text-2xl font-bold" style={{ color: 'var(--accent)' }} dir="auto">{translation}</p>
              {(word as any).sentence && (
                <p className="text-xs mt-2 italic" style={{ color: 'var(--text2)' }}>
                  "{(word as any).sentence}"
                </p>
              )}
            </div>
          ) : (
            <button
              onClick={reveal}
              onMouseDown={e => e.stopPropagation()}
              className="mt-3 w-full py-3 rounded-2xl font-semibold text-sm transition-all active:scale-95"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Show translation
            </button>
          )}
        </div>
      </div>

      {/* Rating buttons — only shown after reveal */}
      {revealed && (
        <div className="flex gap-3 w-full">
          <button
            onClick={() => onRate(1)}
            className="flex-1 py-3.5 rounded-2xl font-semibold text-sm flex flex-col items-center gap-0.5 transition-all active:scale-95"
            style={{ background: '#fef2f2', color: '#ef4444', border: '1.5px solid #fca5a5' }}
          >
            <span className="text-xl">😰</span>
            <span>Again</span>
          </button>
          <button
            onClick={() => onRate(4)}
            className="flex-1 py-3.5 rounded-2xl font-semibold text-sm flex flex-col items-center gap-0.5 transition-all active:scale-95"
            style={{ background: '#fffbeb', color: '#d97706', border: '1.5px solid #fcd34d' }}
          >
            <span className="text-xl">🙂</span>
            <span>Good</span>
          </button>
          <button
            onClick={() => onRate(5)}
            className="flex-1 py-3.5 rounded-2xl font-semibold text-sm flex flex-col items-center gap-0.5 transition-all active:scale-95"
            style={{ background: '#f0fdf4', color: '#16a34a', border: '1.5px solid #86efac' }}
          >
            <span className="text-xl">😄</span>
            <span>Easy</span>
          </button>
        </div>
      )}
    </div>
  );
}

// ── Session complete screen ───────────────────────────────────────────────────

function SessionComplete({ reviewed, again, onBack }: { reviewed: number; again: number; onBack: () => void }) {
  const { permission, requestPermission, scheduleReminder } = useNotifications();
  const [notifState, setNotifState] = useState<'idle' | 'asking' | 'done'>(
    permission === 'granted' ? 'done' : 'idle'
  );

  // Auto-schedule a reminder once permission is already granted
  useEffect(() => {
    if (permission === 'granted') scheduleReminder();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleEnableNotifs() {
    setNotifState('asking');
    const granted = await requestPermission();
    if (granted) { scheduleReminder(); setNotifState('done'); }
    else setNotifState('idle');
  }

  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6 text-center">
      <div className="text-7xl">🎉</div>
      <div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text)' }}>Session done!</h2>
        <p className="text-sm" style={{ color: 'var(--text2)' }}>
          You reviewed <span className="font-semibold">{reviewed}</span> card{reviewed !== 1 ? 's' : ''}.
          {again > 0 && ` ${again} card${again !== 1 ? 's' : ''} will come back sooner.`}
        </p>
      </div>

      {/* Notification prompt — only when not yet granted */}
      {permission !== 'denied' && notifState !== 'done' && (
        <div className="w-full max-w-xs rounded-2xl p-4 text-left"
          style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent)' }}>
          <div className="flex items-start gap-3">
            <Bell className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
            <div className="flex-1">
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text)' }}>
                Never miss a review
              </p>
              <p className="text-xs mb-3" style={{ color: 'var(--text2)' }}>
                Get a reminder tomorrow if you haven't practised. Keeps your streak alive.
              </p>
              <button
                onClick={handleEnableNotifs}
                disabled={notifState === 'asking'}
                className="w-full py-2 rounded-xl text-sm font-semibold transition-all active:scale-95"
                style={{ background: 'var(--accent)', color: '#fff', opacity: notifState === 'asking' ? 0.7 : 1 }}
              >
                {notifState === 'asking' ? 'Requesting…' : 'Enable reminders'}
              </button>
            </div>
          </div>
        </div>
      )}

      {notifState === 'done' && (
        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text2)' }}>
          <Bell className="w-4 h-4" style={{ color: '#16a34a' }} />
          Reminder scheduled for tomorrow
        </div>
      )}

      {permission === 'denied' && (
        <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text3)' }}>
          <BellOff className="w-3.5 h-3.5" />
          Notifications blocked — enable in browser settings to get reminders
        </div>
      )}

      <div className="w-full max-w-xs rounded-2xl p-4 text-left" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text2)' }}>How it works</p>
        <p className="text-sm" style={{ color: 'var(--text)' }}>
          Cards rated <strong>Easy</strong> come back in days or weeks. <strong>Again</strong> cards appear
          again tomorrow. Each correct review grows the gap — that's spaced repetition.
        </p>
      </div>
      <button
        onClick={onBack}
        className="px-8 py-3 rounded-2xl font-semibold transition-all active:scale-95"
        style={{ background: 'var(--accent)', color: '#fff' }}
      >
        Back to Flashcards
      </button>
    </div>
  );
}

// ── Main SRS review component ─────────────────────────────────────────────────

interface Props { onBack: () => void }

export function SRSReview({ onBack }: Props) {
  const { srsData, seenWords, rateCard } = useApp();

  // Build the session queue once on mount
  const initialQueue = useMemo(() => {
    const now = Date.now();
    const due: Word[] = [];
    const newCards: Word[] = [];

    for (const word of ALL_WORDS) {
      if (!seenWords.has(word.id)) continue;
      const card = srsData[word.id];
      if (!card) newCards.push(word);
      else if (card.due <= now) due.push(word);
    }

    return [...shuffle(due), ...shuffle(newCards).slice(0, NEW_CARDS_PER_SESSION)];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally computed once per session

  const [queue, setQueue] = useState<Word[]>(initialQueue);
  const [reviewedCount, setReviewedCount] = useState(0);
  const [againCount, setAgainCount] = useState(0);
  const [done, setDone] = useState(false);

  const current = queue[0];

  const handleRate = useCallback((grade: 1 | 4 | 5) => {
    if (!current) return;
    rateCard(current.id, grade);
    setReviewedCount(c => c + 1);

    setQueue(prev => {
      const rest = prev.slice(1);
      if (grade === 1) {
        // "Again" — put at the back of today's queue with a short delay marker
        return [...rest, current];
      }
      if (rest.length === 0) setDone(true);
      return rest;
    });

    if (grade === 1) setAgainCount(c => c + 1);
  }, [current, rateCard]);

  // Edge case: nothing due and no new cards
  if (initialQueue.length === 0) {
    return (
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-3 px-4 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
          <button onClick={onBack} className="p-2 rounded-xl" style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="font-bold text-lg" style={{ color: 'var(--text)' }}>SRS Review</h2>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-4 px-6 text-center">
          <span className="text-6xl">✅</span>
          <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>All caught up!</h3>
          <p style={{ color: 'var(--text2)' }}>
            No cards are due right now. Browse more words to add them to your review queue, or come back later.
          </p>
          <button onClick={onBack} className="px-8 py-3 rounded-2xl font-semibold" style={{ background: 'var(--accent)', color: '#fff' }}>
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
        <button onClick={onBack} className="p-2 rounded-xl" style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h2 className="font-bold text-lg leading-none" style={{ color: 'var(--text)' }}>SRS Review</h2>
          {!done && (
            <p className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>
              {queue.length} card{queue.length !== 1 ? 's' : ''} remaining
            </p>
          )}
        </div>
        <Brain className="w-5 h-5" style={{ color: 'var(--accent)' }} />
      </div>

      {/* Progress bar */}
      {!done && (
        <div className="h-1.5" style={{ background: 'var(--surface2)' }}>
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${Math.round((reviewedCount / (reviewedCount + queue.length)) * 100)}%`,
              background: 'var(--accent)',
            }}
          />
        </div>
      )}

      <div className="flex-1 overflow-y-auto px-4 py-6">
        {done ? (
          <SessionComplete reviewed={reviewedCount} again={againCount} onBack={onBack} />
        ) : current ? (
          <ReviewCard key={current.id + reviewedCount} word={current} onRate={handleRate} />
        ) : null}
      </div>
    </div>
  );
}
