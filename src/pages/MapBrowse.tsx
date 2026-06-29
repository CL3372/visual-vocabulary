import { useState, useMemo, useRef } from 'react';
// @ts-ignore
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { X } from 'lucide-react';
import { ALL_WORDS } from '../data/words';
import { WordCard } from '../components/WordCard';
import { WordModal } from '../components/WordModal';
import { useApp } from '../context/AppContext';
import type { Word } from '../types';

const GEO_URL = '/world-110m.json';

// ISO 3166-1 numeric → country name (compact lookup for hover labels)
const COUNTRY_NAMES: Record<number, string> = {
  4:'Afghanistan',8:'Albania',12:'Algeria',24:'Angola',36:'Australia',
  40:'Austria',50:'Bangladesh',56:'Belgium',64:'Bhutan',68:'Bolivia',76:'Brazil',
  100:'Bulgaria',104:'Myanmar',116:'Cambodia',120:'Cameroon',124:'Canada',
  144:'Sri Lanka',152:'Chile',156:'China',170:'Colombia',178:'Congo',188:'Costa Rica',
  191:'Croatia',192:'Cuba',196:'Cyprus',203:'Czech Republic',208:'Denmark',
  218:'Ecuador',818:'Egypt',231:'Ethiopia',246:'Finland',250:'France',
  266:'Gabon',276:'Germany',288:'Ghana',300:'Greece',320:'Guatemala',
  332:'Haiti',340:'Honduras',348:'Hungary',356:'India',360:'Indonesia',
  364:'Iran',368:'Iraq',372:'Ireland',376:'Israel',380:'Italy',388:'Jamaica',
  392:'Japan',400:'Jordan',398:'Kazakhstan',404:'Kenya',408:'North Korea',
  410:'South Korea',414:'Kuwait',418:'Laos',422:'Lebanon',426:'Lesotho',
  434:'Libya',440:'Lithuania',442:'Luxembourg',450:'Madagascar',454:'Malawi',
  458:'Malaysia',484:'Mexico',504:'Morocco',508:'Mozambique',
  524:'Nepal',528:'Netherlands',540:'New Caledonia',554:'New Zealand',
  558:'Nicaragua',562:'Niger',566:'Nigeria',578:'Norway',586:'Pakistan',
  591:'Panama',598:'Papua New Guinea',600:'Paraguay',604:'Peru',
  608:'Philippines',616:'Poland',620:'Portugal',630:'Puerto Rico',634:'Qatar',
  642:'Romania',643:'Russia',646:'Rwanda',682:'Saudi Arabia',686:'Senegal',
  694:'Sierra Leone',703:'Slovakia',710:'South Africa',724:'Spain',
  729:'Sudan',752:'Sweden',756:'Switzerland',760:'Syria',158:'Taiwan',
  762:'Tajikistan',764:'Thailand',780:'Trinidad and Tobago',
  788:'Tunisia',792:'Turkey',800:'Uganda',804:'Ukraine',784:'UAE',
  826:'United Kingdom',840:'United States',858:'Uruguay',860:'Uzbekistan',
  862:'Venezuela',704:'Vietnam',887:'Yemen',894:'Zambia',716:'Zimbabwe',
  32:'Argentina',
};

interface Pin {
  id: string;
  label: string;
  category: string;
  coordinates: [number, number];
  flag: string;
}

const PINS: Pin[] = [
  // ── Western Europe ──────────────────────────────────────────────────────────
  { id: 'italian',     label: 'Italian',     category: 'Italian Cuisine',     coordinates: [12.5,   42.0],  flag: '🇮🇹' },
  { id: 'french',      label: 'French',      category: 'French Cuisine',      coordinates: [2.3,    46.5],  flag: '🇫🇷' },
  { id: 'spanish',     label: 'Spanish',     category: 'Spanish Cuisine',     coordinates: [-3.7,   40.4],  flag: '🇪🇸' },
  { id: 'portuguese',  label: 'Portuguese',  category: 'Portuguese Cuisine',  coordinates: [-9.1,   38.7],  flag: '🇵🇹' },
  { id: 'german',      label: 'German',      category: 'German Cuisine',      coordinates: [10.4,   51.2],  flag: '🇩🇪' },
  { id: 'british',     label: 'British',     category: 'British Cuisine',     coordinates: [-2.5,   52.4],  flag: '🇬🇧' },
  { id: 'greek',       label: 'Greek',       category: 'Greek Cuisine',       coordinates: [22.0,   39.0],  flag: '🇬🇷' },
  { id: 'dutch',       label: 'Dutch',       category: 'Dutch Cuisine',       coordinates: [5.3,    52.4],  flag: '🇳🇱' },
  { id: 'belgian',     label: 'Belgian',     category: 'Belgian Cuisine',     coordinates: [4.5,    50.5],  flag: '🇧🇪' },
  { id: 'swiss',       label: 'Swiss',       category: 'Swiss Cuisine',       coordinates: [8.3,    46.8],  flag: '🇨🇭' },
  { id: 'austrian',    label: 'Austrian',    category: 'Austrian Cuisine',    coordinates: [14.5,   47.5],  flag: '🇦🇹' },
  { id: 'welsh',       label: 'Welsh',       category: 'Welsh Cuisine',       coordinates: [-3.8,   52.1],  flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
  // ── Northern Europe ─────────────────────────────────────────────────────────
  { id: 'danish',      label: 'Danish',      category: 'Danish Cuisine',      coordinates: [10.0,   56.0],  flag: '🇩🇰' },
  { id: 'norwegian',   label: 'Norwegian',   category: 'Norwegian Cuisine',   coordinates: [10.5,   60.5],  flag: '🇳🇴' },
  { id: 'swedish',     label: 'Swedish',     category: 'Swedish Cuisine',     coordinates: [17.0,   62.0],  flag: '🇸🇪' },
  { id: 'finnish',     label: 'Finnish',     category: 'Finnish Cuisine',     coordinates: [26.0,   64.0],  flag: '🇫🇮' },
  // ── Eastern Europe ──────────────────────────────────────────────────────────
  { id: 'polish',      label: 'Polish',      category: 'Polish Cuisine',      coordinates: [19.5,   52.0],  flag: '🇵🇱' },
  { id: 'hungarian',   label: 'Hungarian',   category: 'Hungarian Cuisine',   coordinates: [19.0,   47.2],  flag: '🇭🇺' },
  { id: 'romanian',    label: 'Romanian',    category: 'Romanian Cuisine',    coordinates: [25.0,   45.9],  flag: '🇷🇴' },
  { id: 'bulgarian',   label: 'Bulgarian',   category: 'Bulgarian Cuisine',   coordinates: [25.5,   42.7],  flag: '🇧🇬' },
  { id: 'czech',       label: 'Czech',       category: 'Czech Cuisine',       coordinates: [15.5,   49.8],  flag: '🇨🇿' },
  { id: 'russian',     label: 'Russian',     category: 'Russian Cuisine',     coordinates: [55.0,   61.0],  flag: '🇷🇺' },
  { id: 'ukrainian',   label: 'Ukrainian',   category: 'Ukrainian Cuisine',   coordinates: [31.0,   49.0],  flag: '🇺🇦' },
  { id: 'georgian',    label: 'Georgian',    category: 'Georgian Cuisine',    coordinates: [43.5,   42.3],  flag: '🇬🇪' },
  { id: 'armenian',    label: 'Armenian',    category: 'Armenian Cuisine',    coordinates: [44.5,   40.1],  flag: '🇦🇲' },
  { id: 'balkan',      label: 'Balkan',      category: 'Balkan Cuisine',      coordinates: [20.5,   44.0],  flag: '🇷🇸' },
  { id: 'baltic',      label: 'Baltic',      category: 'Baltic Cuisine',      coordinates: [24.8,   56.9],  flag: '🇱🇻' },
  { id: 'belarusian',  label: 'Belarusian',  category: 'Belarusian Cuisine',  coordinates: [27.5,   53.7],  flag: '🇧🇾' },
  { id: 'moldovan',    label: 'Moldovan',    category: 'Moldovan Cuisine',    coordinates: [28.4,   47.0],  flag: '🇲🇩' },
  // ── Turkey ──────────────────────────────────────────────────────────────────
  { id: 'turkish',     label: 'Turkish',     category: 'Turkish Cuisine',     coordinates: [35.2,   39.0],  flag: '🇹🇷' },
  // ── Middle East ─────────────────────────────────────────────────────────────
  { id: 'lebanese',    label: 'Lebanese',    category: 'Lebanese Cuisine',    coordinates: [35.5,   33.9],  flag: '🇱🇧' },
  { id: 'israeli',     label: 'Israeli',     category: 'Israeli Cuisine',     coordinates: [34.8,   31.5],  flag: '🇮🇱' },
  { id: 'palestinian', label: 'Palestinian', category: 'Palestinian Cuisine', coordinates: [35.2,   31.9],  flag: '🇵🇸' },
  { id: 'jordanian',   label: 'Jordanian',   category: 'Jordanian Cuisine',   coordinates: [36.5,   30.6],  flag: '🇯🇴' },
  { id: 'saudi',       label: 'Saudi',       category: 'Saudi Cuisine',       coordinates: [45.1,   24.0],  flag: '🇸🇦' },
  { id: 'iranian',     label: 'Iranian',     category: 'Iranian Cuisine',     coordinates: [53.7,   32.4],  flag: '🇮🇷' },
  { id: 'iraqi',       label: 'Iraqi',       category: 'Iraqi Cuisine',       coordinates: [43.7,   33.2],  flag: '🇮🇶' },
  { id: 'yemeni',      label: 'Yemeni',      category: 'Yemeni Cuisine',      coordinates: [47.6,   15.6],  flag: '🇾🇪' },
  { id: 'omani',       label: 'Omani',       category: 'Omani Cuisine',       coordinates: [57.5,   21.5],  flag: '🇴🇲' },
  // ── North Africa ────────────────────────────────────────────────────────────
  { id: 'moroccan',    label: 'Moroccan',    category: 'Moroccan Cuisine',    coordinates: [-7.6,   31.8],  flag: '🇲🇦' },
  { id: 'algerian',    label: 'Algerian',    category: 'Algerian Cuisine',    coordinates: [3.0,    28.0],  flag: '🇩🇿' },
  { id: 'tunisian',    label: 'Tunisian',    category: 'Tunisian Cuisine',    coordinates: [9.6,    33.9],  flag: '🇹🇳' },
  { id: 'egyptian',    label: 'Egyptian',    category: 'Egyptian Cuisine',    coordinates: [30.8,   26.8],  flag: '🇪🇬' },
  // ── Sub-Saharan Africa ───────────────────────────────────────────────────────
  { id: 'nigerian',    label: 'Nigerian',    category: 'Nigerian Cuisine',    coordinates: [8.7,    9.1],   flag: '🇳🇬' },
  { id: 'ghanaian',    label: 'Ghanaian',    category: 'Ghanaian Cuisine',    coordinates: [-1.0,   7.9],   flag: '🇬🇭' },
  { id: 'senegalese',  label: 'Senegalese',  category: 'Senegalese Cuisine',  coordinates: [-14.5,  14.5],  flag: '🇸🇳' },
  { id: 'ivorian',     label: 'Ivorian',     category: 'Ivorian Cuisine',     coordinates: [-5.5,   7.5],   flag: '🇨🇮' },
  { id: 'ethiopian',   label: 'Ethiopian',   category: 'Ethiopian Cuisine',   coordinates: [40.5,   9.0],   flag: '🇪🇹' },
  { id: 'eastafrican', label: 'East African',category: 'East African Cuisine',coordinates: [37.0,   0.0],   flag: '🌍' },
  { id: 'southafrican',label: 'South African',category:'South African Cuisine',coordinates:[25.1,  -29.0],  flag: '🇿🇦' },
  { id: 'angolan',     label: 'Angolan',     category: 'Angolan Cuisine',     coordinates: [17.9,  -11.2],  flag: '🇦🇴' },
  { id: 'mozambican',  label: 'Mozambican',  category: 'Mozambican Cuisine',  coordinates: [35.0,  -18.7],  flag: '🇲🇿' },
  // ── South & Central Asia ────────────────────────────────────────────────────
  { id: 'indian',      label: 'Indian',      category: 'Indian Cuisine',      coordinates: [78.9,   20.6],  flag: '🇮🇳' },
  { id: 'pakistani',   label: 'Pakistani',   category: 'Pakistani Cuisine',   coordinates: [69.3,   30.4],  flag: '🇵🇰' },
  { id: 'nepalese',    label: 'Nepalese',    category: 'Nepalese Cuisine',    coordinates: [84.1,   28.3],  flag: '🇳🇵' },
  { id: 'srilankan',   label: 'Sri Lankan',  category: 'Sri Lankan Cuisine',  coordinates: [80.7,   7.9],   flag: '🇱🇰' },
  // ── East Asia ───────────────────────────────────────────────────────────────
  { id: 'chinese',     label: 'Chinese',     category: 'Chinese Cuisine',     coordinates: [104.2,  35.9],  flag: '🇨🇳' },
  { id: 'japanese',    label: 'Japanese',    category: 'Japanese Cuisine',    coordinates: [138.3,  36.2],  flag: '🇯🇵' },
  { id: 'korean',      label: 'Korean',      category: 'Korean Cuisine',      coordinates: [127.8,  36.5],  flag: '🇰🇷' },
  { id: 'taiwanese',   label: 'Taiwanese',   category: 'Taiwanese Cuisine',   coordinates: [121.0,  23.7],  flag: '🇹🇼' },
  { id: 'mongolian',   label: 'Mongolian',   category: 'Mongolian Cuisine',   coordinates: [103.8,  46.9],  flag: '🇲🇳' },
  // ── Southeast Asia ──────────────────────────────────────────────────────────
  { id: 'thai',        label: 'Thai',        category: 'Thai Cuisine',        coordinates: [100.5,  13.8],  flag: '🇹🇭' },
  { id: 'vietnamese',  label: 'Vietnamese',  category: 'Vietnamese Cuisine',  coordinates: [106.6,  16.0],  flag: '🇻🇳' },
  { id: 'cambodian',   label: 'Cambodian',   category: 'Cambodian Cuisine',   coordinates: [104.9,  12.6],  flag: '🇰🇭' },
  { id: 'burmese',     label: 'Burmese',     category: 'Burmese Cuisine',     coordinates: [96.0,   19.7],  flag: '🇲🇲' },
  { id: 'malaysian',   label: 'Malaysian',   category: 'Malaysian Cuisine',   coordinates: [109.7,   3.1],  flag: '🇲🇾' },
  { id: 'singaporean', label: 'Singaporean', category: 'Singaporean Cuisine', coordinates: [103.8,   1.3],  flag: '🇸🇬' },
  { id: 'indonesian',  label: 'Indonesian',  category: 'Indonesian Cuisine',  coordinates: [113.9,  -0.8],  flag: '🇮🇩' },
  { id: 'filipino',    label: 'Filipino',    category: 'Filipino Cuisine',    coordinates: [122.0,  12.9],  flag: '🇵🇭' },
  // ── North America ───────────────────────────────────────────────────────────
  { id: 'american',    label: 'American',    category: 'American Cuisine',    coordinates: [-98.6,  39.5],  flag: '🇺🇸' },
  { id: 'canadian',    label: 'Canadian',    category: 'Canadian Cuisine',    coordinates: [-96.8,  56.1],  flag: '🇨🇦' },
  { id: 'mexican',     label: 'Mexican',     category: 'Mexican Cuisine',     coordinates: [-102.5, 23.6],  flag: '🇲🇽' },
  // ── Caribbean & Central America ─────────────────────────────────────────────
  { id: 'jamaican',    label: 'Jamaican',    category: 'Jamaican Cuisine',    coordinates: [-77.3,  18.1],  flag: '🇯🇲' },
  { id: 'cuban',       label: 'Cuban',       category: 'Cuban Cuisine',       coordinates: [-79.5,  22.0],  flag: '🇨🇺' },
  { id: 'haitian',     label: 'Haitian',     category: 'Haitian Cuisine',     coordinates: [-72.3,  18.9],  flag: '🇭🇹' },
  { id: 'trinidadian', label: 'Trinidadian', category: 'Trinidadian Cuisine', coordinates: [-61.2,  10.7],  flag: '🇹🇹' },
  { id: 'dominican',   label: 'Dominican',   category: 'Dominican Cuisine',   coordinates: [-70.2,  18.7],  flag: '🇩🇴' },
  { id: 'guatemalan',  label: 'Guatemalan',  category: 'Guatemalan Cuisine',  coordinates: [-90.5,  15.8],  flag: '🇬🇹' },
  { id: 'costarican',  label: 'Costa Rican', category: 'Costa Rican Cuisine', coordinates: [-84.0,   9.8],  flag: '🇨🇷' },
  // ── South America ───────────────────────────────────────────────────────────
  { id: 'brazilian',   label: 'Brazilian',   category: 'Brazilian Cuisine',   coordinates: [-51.9, -14.2],  flag: '🇧🇷' },
  { id: 'peruvian',    label: 'Peruvian',    category: 'Peruvian Cuisine',    coordinates: [-75.0,  -9.2],  flag: '🇵🇪' },
  { id: 'argentine',   label: 'Argentine',   category: 'Argentine Cuisine',   coordinates: [-63.6, -38.4],  flag: '🇦🇷' },
  { id: 'colombian',   label: 'Colombian',   category: 'Colombian Cuisine',   coordinates: [-74.3,   4.6],  flag: '🇨🇴' },
  { id: 'venezuelan',  label: 'Venezuelan',  category: 'Venezuelan Cuisine',  coordinates: [-66.6,   8.0],  flag: '🇻🇪' },
  { id: 'chilean',     label: 'Chilean',     category: 'Chilean Cuisine',     coordinates: [-71.0, -35.7],  flag: '🇨🇱' },
  { id: 'bolivian',    label: 'Bolivian',    category: 'Bolivian Cuisine',    coordinates: [-64.9, -16.3],  flag: '🇧🇴' },
  { id: 'ecuadorian',  label: 'Ecuadorian',  category: 'Ecuadorian Cuisine',  coordinates: [-78.1,  -1.8],  flag: '🇪🇨' },
  { id: 'uruguayan',   label: 'Uruguayan',   category: 'Uruguayan Cuisine',   coordinates: [-55.9, -32.5],  flag: '🇺🇾' },
  // ── Oceania ─────────────────────────────────────────────────────────────────
  { id: 'australian',  label: 'Australian',  category: 'Australian Cuisine',  coordinates: [134.5, -25.3],  flag: '🇦🇺' },
  { id: 'newzealand',  label: 'New Zealand', category: 'New Zealand Cuisine', coordinates: [172.5, -41.3],  flag: '🇳🇿' },
];

interface Tooltip { label: string; x: number; y: number }

export function MapBrowse() {
  const { kidsMode, markWordSeen, darkMode } = useApp();
  const [selectedId, setSelectedId]   = useState<string | null>(null);
  const [modalWord, setModalWord]     = useState<Word | null>(null);
  const [tooltip, setTooltip]         = useState<Tooltip | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const wordsByCategory = useMemo(() => {
    const map = new Map<string, Word[]>();
    for (const w of ALL_WORDS) {
      if (!map.has(w.category)) map.set(w.category, []);
      map.get(w.category)!.push(w);
    }
    return map;
  }, []);

  const selectedPin   = selectedId ? PINS.find(p => p.id === selectedId) : null;
  const selectedWords = selectedPin ? (wordsByCategory.get(selectedPin.category) ?? []) : [];

  const oceanColor  = darkMode ? '#1a2f45' : '#b8d4e8';
  const landColor   = darkMode ? '#2d4a2d' : '#c8dba8';
  const borderColor = darkMode ? '#4a7a50' : '#aac88a';
  const hoverLand   = darkMode ? '#3a5a3a' : '#b8d098';
  const accentColor = '#6366f1';

  function showTooltip(label: string, e: React.MouseEvent) {
    const rect = mapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltip({ label, x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden" style={{ background: 'var(--bg)' }}>

      {/* ── Map — fills all available space ──────────────────────────────────── */}
      <div
        ref={mapRef}
        className="relative select-none overflow-hidden"
        style={{ flex: 1, background: oceanColor, minHeight: 0 }}
        onMouseLeave={() => setTooltip(null)}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 155, center: [10, 15] }}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Countries — hover shows country name */}
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => {
                const name = COUNTRY_NAMES[Number(geo.id)] ?? '';
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(e: React.MouseEvent) => name && showTooltip(name, e)}
                    onMouseMove={(e: React.MouseEvent)  => name && showTooltip(name, e)}
                    onMouseLeave={() => setTooltip(null)}
                    style={{
                      default: { fill: landColor,  stroke: borderColor, strokeWidth: 0.5, outline: 'none' },
                      hover:   { fill: hoverLand,  stroke: borderColor, strokeWidth: 0.5, outline: 'none' },
                      pressed: { fill: hoverLand,  outline: 'none' },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Cuisine pins */}
          {PINS.map(pin => {
            const words = wordsByCategory.get(pin.category) ?? [];
            if (words.length === 0) return null;
            const isSelected = selectedId === pin.id;

            return (
              <Marker key={pin.id} coordinates={pin.coordinates}>
                <g
                  style={{ cursor: 'pointer' }}
                  onClick={() => { setTooltip(null); setSelectedId(isSelected ? null : pin.id); }}
                  onMouseEnter={(e: React.MouseEvent) => showTooltip(`${pin.flag} ${pin.label} Cuisine`, e)}
                  onMouseMove={(e: React.MouseEvent)  => showTooltip(`${pin.flag} ${pin.label} Cuisine`, e)}
                  onMouseLeave={() => setTooltip(null)}
                >
                  {/* Glow ring */}
                  {isSelected && <circle r={16} fill={accentColor} fillOpacity={0.2} />}

                  {/* Pin body */}
                  <circle
                    r={isSelected ? 9 : 6}
                    fill={accentColor}
                    stroke="#fff"
                    strokeWidth={isSelected ? 2 : 1.5}
                    fillOpacity={selectedId && !isSelected ? 0.4 : 1}
                  />
                  {/* White centre dot */}
                  <circle r={2} fill="#fff" fillOpacity={isSelected ? 0 : 0.9} />

                  {/* Flag — always visible above pin */}
                  <text
                    textAnchor="middle"
                    y={-12}
                    style={{
                      fontSize: isSelected ? 14 : 11,
                      userSelect: 'none',
                      pointerEvents: 'none',
                      opacity: selectedId && !isSelected ? 0.45 : 1,
                    }}
                  >
                    {pin.flag}
                  </text>
                </g>
              </Marker>
            );
          })}
        </ComposableMap>

        {/* Floating tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-20 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shadow-lg"
            style={{
              left: tooltip.x + 12,
              top:  tooltip.y - 36,
              background: 'rgba(15,23,42,0.88)',
              color: '#fff',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255,255,255,0.15)',
              transform: 'translateY(0)',
            }}
          >
            {tooltip.label}
          </div>
        )}
      </div>

      {/* ── Chip strip — always visible at bottom of map ─────────────────────── */}
      <div className="px-3 py-2 flex gap-2 overflow-x-auto shrink-0"
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', scrollbarWidth: 'none' }}>
        {PINS.filter(p => (wordsByCategory.get(p.category) ?? []).length > 0).map(pin => (
          <button key={pin.id}
            onClick={() => setSelectedId(selectedId === pin.id ? null : pin.id)}
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all active:scale-95"
            style={{
              background: selectedId === pin.id ? 'var(--accent)' : 'var(--surface2)',
              color: selectedId === pin.id ? '#fff' : 'var(--text)',
              border: selectedId === pin.id ? '1px solid var(--accent)' : '1px solid var(--border)',
            }}>
            <span>{pin.flag}</span>
            <span>{pin.label}</span>
          </button>
        ))}
      </div>

      {/* ── Bottom sheet — slides up when a cuisine is selected ──────────────── */}
      <div
        className="absolute inset-x-0 bottom-0 flex flex-col z-30 transition-transform duration-300 ease-out"
        style={{
          height: '52%',
          transform: selectedPin ? 'translateY(0)' : 'translateY(100%)',
          background: 'var(--surface)',
          borderRadius: '20px 20px 0 0',
          boxShadow: '0 -6px 32px rgba(0,0,0,0.18)',
          borderTop: '1px solid var(--border)',
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full" style={{ background: 'var(--border)' }} />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 pb-2 shrink-0"
          style={{ borderBottom: '1px solid var(--border)' }}>
          <div>
            <h2 className="font-bold text-lg leading-none" style={{ color: 'var(--text)' }}>
              {selectedPin?.flag} {selectedPin?.label} Cuisine
            </h2>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>
              {selectedWords.length} {selectedWords.length === 1 ? 'item' : 'items'}
            </p>
          </div>
          <button onClick={() => setSelectedId(null)}
            className="p-2 rounded-full"
            style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable word grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className={`grid gap-3 ${kidsMode ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
            {selectedWords.map(word => (
              <WordCard key={word.id} word={word}
                onClick={() => { markWordSeen(word.id); setModalWord(word); }} />
            ))}
          </div>
        </div>
      </div>

      {modalWord && <WordModal word={modalWord} onClose={() => setModalWord(null)} />}
    </div>
  );
}
