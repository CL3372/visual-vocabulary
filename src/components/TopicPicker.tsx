import { useState } from 'react';
import { ALL_WORDS, CATEGORY_GROUPS } from '../data/words';
import type { CategoryGroup } from '../data/words';

const KIDS_CATEGORIES = ['Animals', 'Food', 'Nature', 'Colors', 'Home'];

const GROUP_TABS: { key: CategoryGroup; emoji: string; label: string }[] = [
  { key: 'All',         emoji: '🌐', label: 'All'         },
  { key: 'Cuisines',    emoji: '🍽', label: 'Cuisines'    },
  { key: 'Ingredients', emoji: '🥕', label: 'Ingredients' },
  { key: 'General',     emoji: '📖', label: 'General'     },
  { key: 'Wine',        emoji: '🍷', label: 'Wine'        },
];

interface Props {
  mode: 'quiz' | 'flashcards';
  onStart: (pool: typeof ALL_WORDS) => void;
  kidsMode?: boolean;
}

export function TopicPicker({ mode, onStart, kidsMode }: Props) {
  const [group, setGroup] = useState<CategoryGroup>('All');
  const [cat, setCat] = useState('All');

  if (kidsMode) {
    const pool = ALL_WORDS.filter(w => KIDS_CATEGORIES.includes(w.category));
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center">
        <p className="text-6xl">🌈</p>
        <h2 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
          {mode === 'quiz' ? 'Quick Quiz' : 'Flashcards'}
        </h2>
        <p className="text-sm" style={{ color: 'var(--text2)' }}>
          {pool.length} fun words to learn!
        </p>
        <button onClick={() => onStart(pool)}
          className="px-10 py-4 rounded-2xl text-white font-bold text-lg"
          style={{ background: 'var(--accent)' }}>
          Start!
        </button>
      </div>
    );
  }

  const subCats = CATEGORY_GROUPS[group];
  const pool = ALL_WORDS.filter(w => {
    if (group !== 'All' && !CATEGORY_GROUPS[group].includes(w.category)) return false;
    if (cat !== 'All' && w.category !== cat) return false;
    return true;
  });

  function changeGroup(g: CategoryGroup) {
    setGroup(g);
    setCat('All');
  }

  return (
    <div className="flex-1 flex flex-col px-4 py-6 gap-5 max-w-md mx-auto w-full">
      <div className="text-center">
        <p className="text-4xl mb-2">{mode === 'quiz' ? '🧠' : '🃏'}</p>
        <h2 className="text-xl font-bold" style={{ color: 'var(--text)' }}>
          {mode === 'quiz' ? 'Choose a topic to quiz on' : 'Choose a topic to study'}
        </h2>
      </div>

      {/* Group tabs */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text3)' }}>Category group</p>
        <div className="flex flex-wrap gap-2">
          {GROUP_TABS.map(({ key, emoji, label }) => {
            const active = group === key;
            return (
              <button key={key} onClick={() => changeGroup(key)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: active ? 'var(--accent)' : 'var(--surface2)',
                  color: active ? '#fff' : 'var(--text2)',
                  border: active ? '1px solid var(--accent)' : '1px solid var(--border)',
                }}>
                <span>{emoji}</span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-category */}
      {group !== 'All' && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text3)' }}>
            Narrow by category
          </p>
          <div className="flex flex-wrap gap-2 max-h-44 overflow-y-auto">
            {['All', ...subCats].map(c => {
              const active = cat === c;
              return (
                <button key={c} onClick={() => setCat(c)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                  style={{
                    background: active ? 'var(--accent)' : 'var(--surface2)',
                    color: active ? '#fff' : 'var(--text2)',
                    border: active ? '1px solid var(--accent)' : '1px solid transparent',
                  }}>
                  {c === 'All' ? `All ${group}` : c}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Pool size + Start */}
      <div className="mt-auto flex flex-col items-center gap-3">
        <p className="text-sm" style={{ color: 'var(--text2)' }}>
          <span className="font-bold text-base" style={{ color: 'var(--accent)' }}>{pool.length}</span>
          {' '}words in this set
        </p>
        <button
          onClick={() => onStart(pool)}
          disabled={pool.length < 4}
          className="w-full py-4 rounded-2xl text-white font-bold text-base transition-opacity disabled:opacity-40"
          style={{ background: 'var(--accent)' }}>
          {mode === 'quiz' ? 'Start Quiz →' : 'Start Studying →'}
        </button>
        {pool.length < 4 && (
          <p className="text-xs" style={{ color: 'var(--text3)' }}>Need at least 4 words for a quiz</p>
        )}
      </div>
    </div>
  );
}
