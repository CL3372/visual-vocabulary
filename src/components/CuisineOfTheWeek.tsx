import type { CategoryGroup } from '../data/words';

interface FeaturedCuisine {
  category: string;
  group: CategoryGroup;
  flag: string;
  name: string;
  tagline: string;
  color: string; // gradient start
  color2: string; // gradient end
  highlights: string[]; // 3 dish names to show as chips
}

const FEATURED: FeaturedCuisine[] = [
  { category: 'Italian Cuisine',      group: 'Cuisines', flag: '🇮🇹', name: 'Italian',      tagline: 'Centuries of pasta, risotto & the art of simplicity.', color: '#16a34a', color2: '#059669', highlights: ['Carbonara', 'Risotto', 'Tiramisu'] },
  { category: 'Japanese Cuisine',     group: 'Cuisines', flag: '🇯🇵', name: 'Japanese',     tagline: 'Precision, umami, and the beauty of minimalism.', color: '#dc2626', color2: '#b91c1c', highlights: ['Ramen', 'Sushi', 'Tempura'] },
  { category: 'Mexican Cuisine',      group: 'Cuisines', flag: '🇲🇽', name: 'Mexican',      tagline: 'Bold spices, ancient grains, and vibrant colour.', color: '#d97706', color2: '#b45309', highlights: ['Tacos', 'Mole', 'Tamales'] },
  { category: 'French Cuisine',       group: 'Cuisines', flag: '🇫🇷', name: 'French',       tagline: 'The foundation of Western fine dining.', color: '#2563eb', color2: '#1d4ed8', highlights: ['Croissant', 'Bouillabaisse', 'Crème Brûlée'] },
  { category: 'Indian Cuisine',       group: 'Cuisines', flag: '🇮🇳', name: 'Indian',       tagline: 'A symphony of spices across a subcontinent.', color: '#ea580c', color2: '#c2410c', highlights: ['Biryani', 'Tikka Masala', 'Naan'] },
  { category: 'Chinese Cuisine',      group: 'Cuisines', flag: '🇨🇳', name: 'Chinese',      tagline: 'Eight regional traditions, infinite flavour.', color: '#dc2626', color2: '#7f1d1d', highlights: ['Dim Sum', 'Peking Duck', 'Hot Pot'] },
  { category: 'Thai Cuisine',         group: 'Cuisines', flag: '🇹🇭', name: 'Thai',         tagline: 'The perfect balance of sweet, sour, salty, spicy.', color: '#7c3aed', color2: '#5b21b6', highlights: ['Pad Thai', 'Tom Yum', 'Green Curry'] },
  { category: 'Korean Cuisine',       group: 'Cuisines', flag: '🇰🇷', name: 'Korean',       tagline: 'Fermented, grilled, and fiercely communal.', color: '#be123c', color2: '#9f1239', highlights: ['Bibimbap', 'Kimchi', 'Bulgogi'] },
  { category: 'Spanish Cuisine',      group: 'Cuisines', flag: '🇪🇸', name: 'Spanish',      tagline: 'Paella, jamón, and the culture of tapas.', color: '#ca8a04', color2: '#a16207', highlights: ['Paella', 'Gazpacho', 'Jamón'] },
  { category: 'Greek Cuisine',        group: 'Cuisines', flag: '🇬🇷', name: 'Greek',        tagline: 'Mediterranean sun on every plate.', color: '#0284c7', color2: '#0369a1', highlights: ['Moussaka', 'Souvlaki', 'Baklava'] },
  { category: 'Moroccan Cuisine',     group: 'Cuisines', flag: '🇲🇦', name: 'Moroccan',     tagline: 'Aromatic tagines and the spice route legacy.', color: '#c2410c', color2: '#9a3412', highlights: ['Tagine', 'Couscous', 'Harira'] },
  { category: 'Vietnamese Cuisine',   group: 'Cuisines', flag: '🇻🇳', name: 'Vietnamese',   tagline: 'Fresh herbs, broth, and elegant contrasts.', color: '#15803d', color2: '#166534', highlights: ['Pho', 'Banh Mi', 'Spring Rolls'] },
  { category: 'Lebanese Cuisine',     group: 'Cuisines', flag: '🇱🇧', name: 'Lebanese',     tagline: 'The birthplace of mezze and shared table culture.', color: '#16a34a', color2: '#166534', highlights: ['Hummus', 'Falafel', 'Tabbouleh'] },
  { category: 'Turkish Cuisine',      group: 'Cuisines', flag: '🇹🇷', name: 'Turkish',      tagline: 'The crossroads of East and West on a plate.', color: '#dc2626', color2: '#991b1b', highlights: ['Kebab', 'Baklava', 'Pide'] },
  { category: 'Brazilian Cuisine',    group: 'Cuisines', flag: '🇧🇷', name: 'Brazilian',    tagline: 'Carnival on the plate — tropical and bold.', color: '#16a34a', color2: '#ca8a04', highlights: ['Churrasco', 'Feijoada', 'Pão de Queijo'] },
  { category: 'Peruvian Cuisine',     group: 'Cuisines', flag: '🇵🇪', name: 'Peruvian',     tagline: 'The world\'s most biodiverse larder, expertly used.', color: '#dc2626', color2: '#b45309', highlights: ['Ceviche', 'Lomo Saltado', 'Anticuchos'] },
  { category: 'German Cuisine',       group: 'Cuisines', flag: '🇩🇪', name: 'German',       tagline: 'Hearty, precise, and deeply comforting.', color: '#1d4ed8', color2: '#1e3a5f', highlights: ['Bratwurst', 'Schnitzel', 'Pretzels'] },
  { category: 'Indonesian Cuisine',   group: 'Cuisines', flag: '🇮🇩', name: 'Indonesian',   tagline: '17,000 islands, each with its own flavour.', color: '#dc2626', color2: '#7c2d12', highlights: ['Rendang', 'Nasi Goreng', 'Satay'] },
];

// Deterministic weekly rotation — same cuisine for all users in the same ISO week
function getWeekNumber(): number {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const y = new Date(d.getFullYear(), 0, 1);
  return Math.ceil(((d.getTime() - y.getTime()) / 86400000 + 1) / 7);
}

interface Props {
  onExplore: (category: string, group: CategoryGroup) => void;
}

export function CuisineOfTheWeek({ onExplore }: Props) {
  const week = getWeekNumber();
  const cuisine = FEATURED[week % FEATURED.length];

  return (
    <div
      className="mx-4 mt-4 mb-2 rounded-2xl overflow-hidden relative"
      style={{
        background: `linear-gradient(135deg, ${cuisine.color}, ${cuisine.color2})`,
        boxShadow: `0 4px 24px ${cuisine.color}44`,
      }}
    >
      {/* Decorative large flag */}
      <div
        className="absolute right-3 top-1/2 -translate-y-1/2 text-7xl select-none pointer-events-none"
        style={{ opacity: 0.2, filter: 'blur(1px)' }}
      >
        {cuisine.flag}
      </div>

      <div className="px-4 py-4 relative">
        {/* Label */}
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
          🌟 Cuisine of the week
        </p>

        {/* Name */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">{cuisine.flag}</span>
          <h3 className="text-xl font-black text-white">{cuisine.name}</h3>
        </div>

        {/* Tagline */}
        <p className="text-sm mb-3 leading-snug" style={{ color: 'rgba(255,255,255,0.8)' }}>
          {cuisine.tagline}
        </p>

        {/* Dish chips */}
        <div className="flex gap-2 flex-wrap mb-4">
          {cuisine.highlights.map(dish => (
            <span
              key={dish}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}
            >
              {dish}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => onExplore(cuisine.category, cuisine.group)}
          className="px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-95"
          style={{ background: 'rgba(255,255,255,0.95)', color: cuisine.color }}
        >
          Explore {cuisine.name} →
        </button>
      </div>
    </div>
  );
}
