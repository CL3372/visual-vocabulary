import { useState, useTransition, useMemo, useCallback } from 'react';
import { Search, Heart, LayoutGrid, Grid3x3, List } from 'lucide-react';
import { ALL_WORDS, CATEGORY_GROUPS } from '../data/words';
import type { CategoryGroup } from '../data/words';
import { WordCard } from '../components/WordCard';
import type { ViewMode } from '../components/WordCard';
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

const GROUP_COLORS: Record<CategoryGroup, { bg: string; text: string; accent: string }> = {
  All:         { bg: 'var(--surface2)',  text: 'var(--text)',  accent: 'var(--accent)' },
  Cuisines:    { bg: '#fef3c7',          text: '#78350f',      accent: '#f59e0b' },
  Ingredients: { bg: '#d1fae5',          text: '#064e3b',      accent: '#10b981' },
  General:     { bg: '#e0e7ff',          text: '#3730a3',      accent: '#6366f1' },
  Wine:        { bg: '#ede9fe',          text: '#4c1d95',      accent: '#7c3aed' },
};

const CATEGORY_EMOJIS: Record<string, string> = {
  // General
  Animals: '🐾', Fruits: '🍎', Vegetables: '🥦', Colors: '🎨', Numbers: '🔢',
  Shapes: '🔷', Family: '👨‍👩‍👧', Emotions: '😊', Verbs: '🏃', Adjectives: '✨',
  Occupations: '👷', Weather: '☀️', Technology: '📱', Nature: '🌿', Home: '🏠',
  'Dairy & Eggs': '🥚', Desserts: '🍰', Clothes: '👕', Transport: '🚗',
  Seafood: '🐟', Body: '🫀', Sports: '⚽', School: '📚', Meat: '🥩',
  'Herbs & Spices': '🌿', Condiments: '🧴', 'Nuts & Legumes': '🥜',
  Drinks: '🥤', Dishes: '🍽️', Kitchen: '🍳', 'Bread & Grains': '🍞',
  Holidays: '🎉', Days: '📅', Months: '📆', Seasons: '🍂', Time: '⏰',
  Concepts: '💡',
  // Drinks subcategories
  Wine: '🍷', Beer: '🍺', Spirits: '🥃', Cocktails: '🍸',
  // Cuisines — country flags
  'Italian Cuisine': '🇮🇹', 'Japanese Cuisine': '🇯🇵', 'French Cuisine': '🇫🇷',
  'Mexican Cuisine': '🇲🇽', 'Indian Cuisine': '🇮🇳', 'Chinese Cuisine': '🇨🇳',
  'Spanish Cuisine': '🇪🇸', 'Thai Cuisine': '🇹🇭', 'Greek Cuisine': '🇬🇷',
  'American Cuisine': '🇺🇸', 'Middle Eastern Cuisine': '🌍', 'Vietnamese Cuisine': '🇻🇳',
  'Korean Cuisine': '🇰🇷', 'Turkish Cuisine': '🇹🇷', 'Peruvian Cuisine': '🇵🇪',
  'Ethiopian Cuisine': '🇪🇹', 'Brazilian Cuisine': '🇧🇷', 'Portuguese Cuisine': '🇵🇹',
  'German Cuisine': '🇩🇪', 'Moroccan Cuisine': '🇲🇦', 'Lebanese Cuisine': '🇱🇧',
  'Irish Cuisine': '🇮🇪', 'Scottish Cuisine': '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'English Cuisine': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'Welsh Cuisine': '🏴󠁧󠁢󠁷󠁬󠁳󠁿', 'Russian Cuisine': '🇷🇺', 'Pakistani Cuisine': '🇵🇰',
  'Indonesian Cuisine': '🇮🇩', 'Malaysian Cuisine': '🇲🇾', 'Filipino Cuisine': '🇵🇭',
  'Singaporean Cuisine': '🇸🇬', 'Sri Lankan Cuisine': '🇱🇰', 'Taiwanese Cuisine': '🇹🇼',
  'Cambodian Cuisine': '🇰🇭', 'Burmese Cuisine': '🇲🇲', 'Iranian Cuisine': '🇮🇷',
  'Israeli Cuisine': '🇮🇱', 'Saudi Cuisine': '🇸🇦', 'Egyptian Cuisine': '🇪🇬',
  'Nigerian Cuisine': '🇳🇬', 'Ghanaian Cuisine': '🇬🇭', 'Senegalese Cuisine': '🇸🇳',
  'East African Cuisine': '🌍', 'South African Cuisine': '🇿🇦',
  'Argentine Cuisine': '🇦🇷', 'Colombian Cuisine': '🇨🇴', 'Cuban Cuisine': '🇨🇺',
  'Jamaican Cuisine': '🇯🇲', 'Hawaiian Cuisine': '🌺', 'Alaskan Cuisine': '🏔️',
  'Australian Cuisine': '🇦🇺', 'New Zealand Cuisine': '🇳🇿', 'Ukrainian Cuisine': '🇺🇦',
  'Polish Cuisine': '🇵🇱', 'Hungarian Cuisine': '🇭🇺', 'Romanian Cuisine': '🇷🇴',
  'Bulgarian Cuisine': '🇧🇬', 'Czech Cuisine': '🇨🇿', 'Austrian Cuisine': '🇦🇹',
  'Swiss Cuisine': '🇨🇭', 'Belgian Cuisine': '🇧🇪', 'Dutch Cuisine': '🇳🇱',
  'Danish Cuisine': '🇩🇰', 'Swedish Cuisine': '🇸🇪', 'Norwegian Cuisine': '🇳🇴',
  'Finnish Cuisine': '🇫🇮', 'Icelandic Cuisine': '🇮🇸', 'Balkan Cuisine': '🌍',
  'Baltic Cuisine': '🌍', 'Georgian Cuisine': '🇬🇪', 'Armenian Cuisine': '🇦🇲',
  'Tunisian Cuisine': '🇹🇳', 'Algerian Cuisine': '🇩🇿', 'Ivorian Cuisine': '🇨🇮',
  'Chilean Cuisine': '🇨🇱', 'Venezuelan Cuisine': '🇻🇪', 'Bolivian Cuisine': '🇧🇴',
  'Ecuadorian Cuisine': '🇪🇨', 'Paraguayan Cuisine': '🇵🇾', 'Uruguayan Cuisine': '🇺🇾',
  'Guatemalan Cuisine': '🇬🇹', 'Costa Rican Cuisine': '🇨🇷', 'Honduran Cuisine': '🇭🇳',
  'Nicaraguan Cuisine': '🇳🇮', 'Salvadoran Cuisine': '🇸🇻', 'Panamanian Cuisine': '🇵🇦',
  'Dominican Cuisine': '🇩🇴', 'Puerto Rican Cuisine': '🇵🇷', 'Haitian Cuisine': '🇭🇹',
  'Trinidadian Cuisine': '🇹🇹', 'Barbadian Cuisine': '🇧🇧',
  'Mongolian Cuisine': '🇲🇳', 'Nepalese Cuisine': '🇳🇵', 'Iraqi Cuisine': '🇮🇶',
  'Jordanian Cuisine': '🇯🇴', 'Palestinian Cuisine': '🇵🇸', 'Omani Cuisine': '🇴🇲',
  'Yemeni Cuisine': '🇾🇪', 'Mauritanian Cuisine': '🇲🇷', 'Mozambican Cuisine': '🇲🇿',
  'Cape Verdean Cuisine': '🇨🇻', 'Angolan Cuisine': '🇦🇴', 'Mauritian Cuisine': '🇲🇺',
  'Seychellois Cuisine': '🇸🇨', 'Réunion Cuisine': '🇷🇪', 'Fijian Cuisine': '🇫🇯',
  'Samoan Cuisine': '🇼🇸', 'Polynesian Cuisine': '🌺', 'Vanuatu Cuisine': '🇻🇺',
  'Faroese Cuisine': '🇫🇴', 'Greenlandic Cuisine': '🇬🇱', 'Maltese Cuisine': '🇲🇹',
  'Cypriot Cuisine': '🇨🇾', 'Moldovan Cuisine': '🇲🇩', 'Belarusian Cuisine': '🇧🇾',
};

function getCategoryEmoji(cat: string) {
  return CATEGORY_EMOJIS[cat] ?? '📂';
}

function getCategoryGroup(cat: string): CategoryGroup {
  for (const [group, cats] of Object.entries(CATEGORY_GROUPS)) {
    if ((cats as string[]).includes(cat)) return group as CategoryGroup;
  }
  return 'All';
}

export function Browse({ initialCategory }: { initialCategory?: string }) {
  const { kidsMode, favorites, markWordSeen } = useApp();
  const [, startTransition] = useTransition();
  const [search, setSearch] = useState('');
  const [activeGroup, setActiveGroup] = useState<CategoryGroup>(initialCategory ? 'Cuisines' : 'All');
  const [activeCategory, setActiveCategory] = useState(initialCategory ?? 'All');
  const [showFavs, setShowFavs] = useState(false);
  const [selected, setSelected] = useState<Word | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    try { return (localStorage.getItem('browse-view') as ViewMode) ?? 'grid2'; } catch { return 'grid2'; }
  });

  function changeView(mode: ViewMode) {
    setViewMode(mode);
    try { localStorage.setItem('browse-view', mode); } catch { /* noop */ }
  }

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

  const subCategories = kidsMode ? KIDS_CATEGORIES : CATEGORY_GROUPS[activeGroup];

  // Count per category (for chip badges)
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    ALL_WORDS.forEach(w => {
      if (kidsMode && !KIDS_CATEGORIES.includes(w.category)) return;
      counts[w.category] = (counts[w.category] || 0) + 1;
    });
    return counts;
  }, [kidsMode]);

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

  // Derive group from active category for the header color
  const activeCategoryGroup = activeCategory === 'All' ? activeGroup : getCategoryGroup(activeCategory);
  const groupColor = GROUP_COLORS[activeCategoryGroup] ?? GROUP_COLORS.All;

  // Grid class
  const gridClass = useMemo(() => {
    if (viewMode === 'list') return '';
    if (viewMode === 'grid3') return 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2';
    // grid2 (default)
    return kidsMode
      ? 'grid grid-cols-2 gap-3'
      : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3';
  }, [viewMode, kidsMode]);

  return (
    <div className="flex-1 flex flex-col">
      <WordOfDay />

      {!kidsMode && !search && activeGroup === 'All' && activeCategory === 'All' && !showFavs && (
        <CuisineOfTheWeek
          onExplore={(category, group) => {
            setActiveGroup(group);
            setActiveCategory(category);
          }}
        />
      )}

      {/* ── Sticky filters ─────────────────────────────────────────────────── */}
      <div className="px-4 py-3 sticky top-0 z-10" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        {/* Search bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text3)' }} />
          <input
            type="text"
            placeholder="Search in any language…"
            value={search}
            onChange={e => {
              const v = e.target.value;
              setSearch(v);
              setVisibleCount(0);
              requestAnimationFrame(() => requestAnimationFrame(() => startTransition(() => setVisibleCount(24))));
            }}
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

          {['All', ...subCategories].map(cat => {
            const isActive = activeCategory === cat;
            const count = cat === 'All' ? null : categoryCounts[cat];
            return (
              <button
                key={cat}
                onClick={() => switchCategory(cat)}
                className="flex-shrink-0 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap"
                style={{
                  background: isActive ? 'var(--accent)' : 'var(--surface2)',
                  color: isActive ? '#fff' : 'var(--text2)',
                  border: isActive ? '1px solid var(--accent)' : '1px solid transparent',
                }}>
                {cat !== 'All' && <span>{getCategoryEmoji(cat)}</span>}
                {cat}
                {count != null && (
                  <span className="ml-0.5 opacity-70 font-normal">
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Category header ─────────────────────────────────────────────────── */}
      {activeCategory !== 'All' && !search && (
        <div className="px-4 py-3 flex items-center gap-3"
          style={{ background: groupColor.bg, borderBottom: '1px solid var(--border)' }}>
          <span className="text-2xl">{getCategoryEmoji(activeCategory)}</span>
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-base leading-tight" style={{ color: groupColor.text }}>
              {activeCategory}
            </h2>
            <p className="text-xs mt-0.5" style={{ color: groupColor.accent }}>
              {filtered.length} {filtered.length === 1 ? 'word' : 'words'}
            </p>
          </div>
          {/* View toggle (inside category header so it stays prominent) */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {(['grid2', 'grid3', 'list'] as ViewMode[]).map((mode) => {
              const Icon = mode === 'list' ? List : mode === 'grid3' ? Grid3x3 : LayoutGrid;
              return (
                <button
                  key={mode}
                  onClick={() => changeView(mode)}
                  className="p-1.5 rounded-lg transition-all"
                  style={{
                    background: viewMode === mode ? groupColor.accent : 'rgba(0,0,0,0.08)',
                    color: viewMode === mode ? '#fff' : groupColor.text,
                  }}>
                  <Icon className="w-3.5 h-3.5" />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Count + view toggle (when no category header) ──────────────────── */}
      {(activeCategory === 'All' || search) && (
        <div className="px-4 pt-2 pb-1 flex items-center justify-between">
          <p className="text-xs" style={{ color: 'var(--text3)' }}>
            {filtered.length.toLocaleString()} {filtered.length === 1 ? 'entry' : 'entries'}
            {search && <span> matching <em>"{search}"</em></span>}
            {!search && activeGroup !== 'All' && ` · ${activeGroup}`}
          </p>
          {!kidsMode && (
            <div className="flex items-center gap-1">
              {(['grid2', 'grid3', 'list'] as ViewMode[]).map((mode) => {
                const Icon = mode === 'list' ? List : mode === 'grid3' ? Grid3x3 : LayoutGrid;
                return (
                  <button
                    key={mode}
                    onClick={() => changeView(mode)}
                    className="p-1.5 rounded-lg transition-all"
                    style={{
                      background: viewMode === mode ? 'var(--accent)' : 'var(--surface2)',
                      color: viewMode === mode ? '#fff' : 'var(--text3)',
                    }}>
                  <Icon className="w-3.5 h-3.5" />
                </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── Word grid / list ───────────────────────────────────────────────── */}
      <div className={`flex-1 ${viewMode === 'list' ? '' : 'p-4'}`}>
        {viewMode === 'list' ? (
          <div className="max-w-2xl mx-auto" style={{ borderTop: '1px solid var(--border)' }}>
            {filtered.slice(0, visibleCount).map(word => (
              <WordCard key={word.id} word={word} viewMode="list" onClick={() => handleSelect(word)} />
            ))}
          </div>
        ) : (
          <div className={`${gridClass} max-w-5xl mx-auto`}>
            {filtered.slice(0, visibleCount).map(word => (
              <WordCard key={word.id} word={word} viewMode={kidsMode ? 'grid2' : viewMode} onClick={() => handleSelect(word)} />
            ))}
          </div>
        )}

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
