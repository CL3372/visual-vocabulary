import { useState, useTransition, useMemo, useCallback } from 'react';
import { Search, Heart } from 'lucide-react';
import { ALL_WORDS, CATEGORY_GROUPS } from '../data/words';
import type { CategoryGroup } from '../data/words';
import { WordCard } from '../components/WordCard';
import { WordModal } from '../components/WordModal';
import { WordOfDay } from '../components/WordOfDay';
import { CuisineOfTheWeek } from '../components/CuisineOfTheWeek';
import { useApp } from '../context/AppContext';
import type { Word } from '../types';

const KIDS_CATEGORIES = ['Animals', 'Fruits', 'Vegetables', 'Dairy & Eggs', 'Desserts', 'Nature', 'Colors', 'Home'];

const GROUP_TABS: { key: CategoryGroup; label: string; emoji: string }[] = [
  { key: 'All',         label: 'All',         emoji: '🌐' },
  { key: 'Cuisines',    label: 'Cuisines',    emoji: '🍽' },
  { key: 'Ingredients', label: 'Ingredients', emoji: '🥕' },
  { key: 'General',     label: 'General',     emoji: '📖' },
  { key: 'Wine',        label: 'Wine',        emoji: '🍷' },
];

export function Browse({ initialCategory }: { initialCategory?: string }) {
  const { kidsMode, favorites, markWordSeen } = useApp();
  const [, startTransition] = useTransition();
  const [search, setSearch] = useState('');
  const [activeGroup, setActiveGroup] = useState<CategoryGroup>(initialCategory ? 'Cuisines' : 'All');
  const [activeCategory, setActiveCategory] = useState(initialCategory ?? 'All');
  const [showFavs, setShowFavs] = useState(false);
  const [selected, setSelected] = useState<Word | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  // Switch category: clear grid immediately so browser paints fast (INP fix),
  // then render cards after two animation frames.
  const switchCategory = useCallback((cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(0);
    requestAnimationFrame(() => requestAnimationFrame(() =>
      startTransition(() => setVisibleCount(24))
    ));
  }, [startTransition]);

  const switchGroup = useCallback((group: CategoryGroup) => {
    setActiveGroup(group);
    setActiveCategory('All');
    setVisibleCount(0);
    requestAnimationFrame(() => requestAnimationFrame(() =>
      startTransition(() => setVisibleCount(24))
    ));
  }, [startTransition]);

  const subCategories = kidsMode
    ? KIDS_CATEGORIES
    : CATEGORY_GROUPS[activeGroup];

  // Memoised so filter only re-runs when inputs actually change (not on visibleCount changes)
  const filtered = useMemo(() => ALL_WORDS.filter(w => {
    if (kidsMode && !KIDS_CATEGORIES.includes(w.category)) return false;
    if (showFavs && !favorites.has(w.id)) return false;
    if (activeGroup !== 'All' && !CATEGORY_GROUPS[activeGroup].includes(w.category)) return false;
    const matchCat = activeCategory === 'All' || w.category === activeCategory;
    const q = search.toLowerCase().trim();
    if (!q) return matchCat;
    return matchCat && (
      w.word.toLowerCase().includes(q) ||
      w.category.toLowerCase().includes(q) ||
      Object.values(w.translations).some(t => t.toLowerCase().includes(q))
    );
  }), [kidsMode, showFavs, favorites, activeGroup, activeCategory, search]);

  const handleSelect = useCallback((word: Word) => {
    markWordSeen(word.id);
    setSelected(word);
  }, [markWordSeen]);

  return (
    <div className="flex-1 flex flex-col">
      <WordOfDay />

      {/* Cuisine of the week */}
      {!kidsMode && !search && activeGroup === 'All' && activeCategory === 'All' && !showFavs && (
        <CuisineOfTheWeek
          onExplore={(category, group) => {
            setActiveGroup(group);
            setActiveCategory(category);
          }}
        />
      )}

      {/* Search + filters */}
      <div className="px-4 py-3 sticky top-0 z-10" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        {/* Search bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text3)' }} />
          <input
            type="text"
            placeholder="Search in any language…"
            value={search}
            onChange={e => { const v = e.target.value; setSearch(v); setVisibleCount(0); requestAnimationFrame(() => requestAnimationFrame(() => startTransition(() => setVisibleCount(24)))); }}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2"
            style={{
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              '--tw-ring-color': 'var(--accent)',
            } as React.CSSProperties}
          />
        </div>

        {/* Group tabs */}
        {!kidsMode && (
          <div className="flex gap-1.5 mt-3">
            {GROUP_TABS.map(({ key, label, emoji }) => {
              const isActive = activeGroup === key;
              return (
                <button
                  key={key}
                  onClick={() => switchGroup(key)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                  style={{
                    background: isActive ? 'var(--accent)' : 'var(--surface2)',
                    color: isActive ? '#fff' : 'var(--text2)',
                    border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
                  }}>
                  <span>{emoji}</span>
                  <span className="hidden sm:inline">{label}</span>
                </button>
              );
            })}
            <div className="flex-1" />
            {/* Favourites toggle stays right-aligned */}
            <button
              onClick={() => setShowFavs(f => !f)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
              style={{
                background: showFavs ? '#fee2e2' : 'var(--surface2)',
                color: showFavs ? '#dc2626' : 'var(--text2)',
                border: showFavs ? '1px solid #fca5a5' : '1px solid var(--border)',
              }}>
              <Heart className={`w-3.5 h-3.5 ${showFavs ? 'fill-red-500' : ''}`} />
              <span className="hidden sm:inline">Favourites</span>
            </button>
          </div>
        )}

        {/* Sub-category chips */}
        <div className="flex gap-2 mt-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {kidsMode && (
            <button
              onClick={() => setShowFavs(f => !f)}
              className="flex-shrink-0 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all"
              style={{
                background: showFavs ? '#fee2e2' : 'var(--surface2)',
                color: showFavs ? '#dc2626' : 'var(--text2)',
                border: showFavs ? '1px solid #fca5a5' : '1px solid var(--border)',
              }}>
              <Heart className={`w-3 h-3 ${showFavs ? 'fill-red-500' : ''}`} />
              Favourites
            </button>
          )}

          {['All', ...subCategories].map(cat => (
            <button
              key={cat}
              onClick={() => switchCategory(cat)}
              className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all"
              style={{
                background: activeCategory === cat ? 'var(--accent)' : 'var(--surface2)',
                color: activeCategory === cat ? '#fff' : 'var(--text2)',
                border: activeCategory === cat ? '1px solid var(--accent)' : '1px solid transparent',
              }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Count indicator */}
      {!kidsMode && (
        <div className="px-4 pt-2 pb-0">
          <p className="text-xs" style={{ color: 'var(--text3)' }}>
            {filtered.length.toLocaleString()} {filtered.length === 1 ? 'entry' : 'entries'}
            {activeGroup !== 'All' && ` · ${activeGroup}`}
            {activeCategory !== 'All' && ` · ${activeCategory}`}
          </p>
        </div>
      )}

      {/* Grid */}
      <div className="flex-1 p-4">
        <div className={`grid gap-3 ${kidsMode ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'} max-w-5xl mx-auto`}>
          {filtered.slice(0, visibleCount).map(word => (
            <WordCard key={word.id} word={word} onClick={() => handleSelect(word)} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: 'var(--text2)' }}>
            <p className="text-4xl mb-3">{showFavs ? '💔' : '🔍'}</p>
            <p className="font-medium" style={{ color: 'var(--text)' }}>
              {showFavs ? 'No favourites yet' : 'No words found'}
            </p>
            <p className="text-sm mt-1">
              {showFavs ? 'Tap the heart on any word card' : 'Try a different search or category'}
            </p>
          </div>
        )}
        {filtered.length > visibleCount && (
          <div className="text-center mt-6 mb-4">
            <button
              onClick={() => startTransition(() => setVisibleCount(c => c + 24))}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95"
              style={{ background: 'var(--accent)', color: '#fff' }}>
              Load more ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>

      {selected && <WordModal word={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
