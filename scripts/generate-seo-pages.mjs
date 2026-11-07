/**
 * Generates the static SEO pages from the real vocabulary data.
 *
 *   public/learn/{topic}/index.html                  topic pages (50), always generated
 *   public/learn/{language}/index.html               language hubs (10), site build only
 *   public/learn/{language}/{topic}/index.html       topic-in-language pages (500), site build only
 *   public/sitemap.xml
 *
 * The language pages are only written on the website build (Vercel sets VERCEL=1) or when
 * SEO_FULL=1 is set, so the Android and iOS bundles do not carry around hundreds of extra pages.
 *
 * Run: node scripts/generate-seo-pages.mjs
 * Or automatically via the build script in package.json.
 */

import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';
import { loadWords, loadOverlays, translationOf } from './seo-data.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC = join(ROOT, 'public');
const LEARN_DIR = join(PUBLIC, 'learn');

// ─── Config ──────────────────────────────────────────────────────────────────

const SITE_URL = 'https://lexpix.io';
const SITE_NAME = 'LexPix';
const FULL_BUILD = !!(process.env.VERCEL || process.env.SEO_FULL);

// ─── Topic metadata (names must match the category names used in the app) ────

const CATEGORY_DATA = [
  { name: 'Verbs', group: 'Language', emoji: '🏃', featured: ['run', 'eat', 'drink', 'sleep', 'walk', 'talk', 'read', 'write'] },
  { name: 'Emotions', group: 'Language', emoji: '😊', featured: ['happy', 'sad', 'angry', 'excited', 'scared', 'surprised', 'bored', 'proud'] },
  { name: 'Adjectives', group: 'Language', emoji: '🎨', featured: ['big', 'small', 'tall', 'short', 'hot', 'cold', 'fast', 'slow'] },
  { name: 'Numbers', group: 'Language', emoji: '🔢', featured: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'] },
  { name: 'Shapes', group: 'Language', emoji: '🔷', featured: ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart', 'oval', 'diamond'] },
  { name: 'Family', group: 'Language', emoji: '👨‍👩‍👧', featured: ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather', 'baby', 'child'] },
  { name: 'Occupations', group: 'Language', emoji: '👨‍⚕️', featured: ['doctor', 'nurse', 'teacher', 'chef', 'firefighter', 'police', 'farmer', 'engineer'] },
  { name: 'Weather', group: 'Language', emoji: '⛅', featured: ['sunny', 'rainy', 'cloudy', 'windy', 'snowy', 'foggy', 'stormy', 'thunder'] },
  { name: 'Technology', group: 'Language', emoji: '📱', featured: ['phone', 'computer', 'tablet', 'camera', 'television', 'headphones', 'keyboard', 'robot'] },
  { name: 'Colors', group: 'Language', emoji: '🌈', featured: ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black'] },
  { name: 'Animals', group: 'Language', emoji: '🦁', featured: ['lion', 'elephant', 'tiger', 'giraffe', 'penguin', 'dolphin', 'whale', 'gorilla'] },
  { name: 'School', group: 'Language', emoji: '🏫', featured: ['pencil', 'pen', 'eraser', 'ruler', 'scissors', 'notebook', 'textbook', 'backpack'] },
  { name: 'Home', group: 'Language', emoji: '🏠', featured: ['kitchen', 'bedroom', 'bathroom', 'living room', 'sofa', 'table', 'chair', 'window'] },
  { name: 'Transport', group: 'Language', emoji: '🚗', featured: ['car', 'bus', 'train', 'bicycle', 'motorcycle', 'aeroplane', 'helicopter', 'ship'] },
  { name: 'Clothes', group: 'Language', emoji: '👕', featured: ['shirt', 'dress', 'trousers', 'skirt', 'jacket', 'coat', 'boots', 'shoes'] },
  { name: 'Sports', group: 'Language', emoji: '⚽', featured: ['football', 'basketball', 'tennis', 'swimming', 'running', 'cycling', 'golf', 'rugby'] },
  { name: 'Nature', group: 'Language', emoji: '🌿', featured: ['mountain', 'river', 'forest', 'volcano', 'waterfall', 'desert', 'ocean', 'lake'] },
  { name: 'Time', group: 'Language', emoji: '⏰', dataCats: ['Days', 'Months', 'Seasons'], featured: ['morning', 'afternoon', 'evening', 'night', 'yesterday', 'today', 'tomorrow', 'second'] },
  { name: 'Holidays', group: 'Language', emoji: '🎄', featured: ['Christmas', 'Easter', 'birthday', 'New Year', 'Halloween', 'Diwali', 'Hanukkah', 'Eid'] },
  { name: 'Italian Cuisine', group: 'Cuisine', emoji: '🇮🇹', featured: ['pasta', 'pizza', 'risotto', 'tiramisu', 'gelato', 'bruschetta', 'lasagne', 'carbonara'] },
  { name: 'Japanese Cuisine', group: 'Cuisine', emoji: '🇯🇵', featured: ['sushi', 'ramen', 'tempura', 'miso soup', 'matcha', 'sashimi', 'udon', 'yakitori'] },
  { name: 'Indian Cuisine', group: 'Cuisine', emoji: '🇮🇳', featured: ['curry', 'biryani', 'naan', 'samosa', 'tikka masala', 'dal', 'paneer', 'tandoori'] },
  { name: 'Spanish Cuisine', group: 'Cuisine', emoji: '🇪🇸', featured: ['paella', 'tapas', 'gazpacho', 'churros', 'jamón', 'tortilla española', 'patatas bravas', 'croquetas'] },
  { name: 'French Cuisine', group: 'Cuisine', emoji: '🇫🇷', featured: ['croissant', 'baguette', 'bouillabaisse', 'crème brûlée', 'ratatouille', 'coq au vin', 'soufflé', 'crêpe'] },
  { name: 'Mexican Cuisine', group: 'Cuisine', emoji: '🇲🇽', featured: ['tacos', 'guacamole', 'tamales', 'enchiladas', 'quesadilla', 'mole', 'salsa', 'burrito'] },
  { name: 'Chinese Cuisine', group: 'Cuisine', emoji: '🇨🇳', featured: ['dim sum', 'dumplings', 'Peking duck', 'kung pao chicken', 'mapo tofu', 'spring rolls', 'fried rice', 'wonton soup'] },
  { name: 'Greek Cuisine', group: 'Cuisine', emoji: '🇬🇷', featured: ['moussaka', 'souvlaki', 'tzatziki', 'baklava', 'spanakopita', 'dolmades', 'taramasalata', 'saganaki'] },
  { name: 'Turkish Cuisine', group: 'Cuisine', emoji: '🇹🇷', featured: ['kebab', 'baklava', 'börek', 'meze', 'lahmacun', 'döner', 'pide', 'köfte'] },
  { name: 'Korean Cuisine', group: 'Cuisine', emoji: '🇰🇷', featured: ['kimchi', 'bibimbap', 'bulgogi', 'tteokbokki', 'japchae', 'sundubu jjigae', 'doenjang jjigae', 'galbi'] },
  { name: 'Thai Cuisine', group: 'Cuisine', emoji: '🇹🇭', featured: ['pad thai', 'green curry', 'tom yum', 'mango sticky rice', 'som tam', 'massaman curry', 'pad see ew', 'khao pad'] },
  { name: 'Vietnamese Cuisine', group: 'Cuisine', emoji: '🇻🇳', featured: ['pho', 'banh mi', 'spring rolls', 'bun cha', 'cao lau', 'banh xeo', 'bun bo hue', 'com tam'] },
  { name: 'Portuguese Cuisine', group: 'Cuisine', emoji: '🇵🇹', featured: ['bacalhau', 'pastéis de nata', 'caldo verde', 'francesinha', 'bifanas', 'arroz de pato', 'sardinhas', 'alheira'] },
  { name: 'Brazilian Cuisine', group: 'Cuisine', emoji: '🇧🇷', featured: ['feijoada', 'churrasco', 'brigadeiro', 'açaí', 'pão de queijo', 'coxinha', 'moqueca', 'acarajé'] },
  { name: 'Moroccan Cuisine', group: 'Cuisine', emoji: '🇲🇦', featured: ['tagine', 'couscous', 'harira', 'bastilla', 'mechoui', 'chermoula', 'briouats', 'msemen'] },
  { name: 'Lebanese Cuisine', group: 'Cuisine', emoji: '🇱🇧', featured: ['hummus', 'falafel', 'fattoush', 'kibbeh', 'tabbouleh', 'baba ganoush', 'shawarma', 'manakish'] },
  { name: 'English Cuisine', group: 'Cuisine', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', featured: ['fish and chips', 'Sunday roast', 'full English breakfast', 'scones', 'beef Wellington', 'shepherd\'s pie', 'Yorkshire pudding', 'Bakewell tart'] },
  { name: 'Welsh Cuisine', group: 'Cuisine', emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', featured: ['cawl', 'Welsh rarebit', 'bara brith', 'laverbread', 'Welsh lamb', 'Glamorgan sausage', 'Caerphilly cheese', 'Welsh cakes'] },
  { name: 'Scottish Cuisine', group: 'Cuisine', emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', featured: ['haggis', 'cullen skink', 'cranachan', 'Scotch pie', 'tablet', 'Scotch broth', 'cock-a-leekie', 'Aberdeen Angus'] },
  { name: 'German Cuisine', group: 'Cuisine', emoji: '🇩🇪', featured: ['bratwurst', 'schnitzel', 'pretzel', 'sauerkraut', 'sauerbraten', 'currywurst', 'döner kebab', 'flammkuchen'] },
  { name: 'American Cuisine', group: 'Cuisine', emoji: '🇺🇸', featured: ['hamburger', 'hot dog', 'mac and cheese', 'BBQ ribs', 'clam chowder', 'cheesecake', 'fried chicken', 'corn dog'] },
  { name: 'Herbs & Spices', group: 'Ingredients', emoji: '🌿', featured: ['basil', 'turmeric', 'coriander', 'saffron', 'cumin', 'cinnamon', 'rosemary', 'thyme'] },
  { name: 'Vegetables', group: 'Ingredients', emoji: '🥦', featured: ['carrot', 'tomato', 'broccoli', 'spinach', 'potato', 'onion', 'garlic', 'pepper'] },
  { name: 'Fruits', group: 'Ingredients', emoji: '🍎', featured: ['apple', 'mango', 'strawberry', 'banana', 'orange', 'grape', 'pineapple', 'watermelon'] },
  { name: 'Seafood', group: 'Ingredients', emoji: '🦞', featured: ['salmon', 'lobster', 'octopus', 'oyster', 'tuna', 'cod', 'shrimp', 'crab'] },
  { name: 'Meat', group: 'Ingredients', emoji: '🥩', featured: ['beef', 'chicken', 'pork', 'lamb', 'turkey', 'duck', 'venison', 'veal'] },
  { name: 'Desserts', group: 'Ingredients', emoji: '🍰', featured: ['chocolate cake', 'ice cream', 'cheesecake', 'tiramisu', 'crème brûlée', 'macarons', 'profiteroles', 'baklava'] },
  { name: 'Drinks', group: 'Ingredients', emoji: '🍵', featured: ['coffee', 'tea', 'water', 'orange juice', 'lemonade', 'milk', 'smoothie', 'wine'] },
  { name: 'Condiments', group: 'Ingredients', emoji: '🫙', featured: ['mustard', 'mayonnaise', 'sriracha', 'tahini', 'ketchup', 'soy sauce', 'fish sauce', 'hoisin'] },
  { name: 'Nuts & Legumes', group: 'Ingredients', emoji: '🥜', featured: ['almond', 'lentil', 'chickpea', 'cashew', 'walnut', 'peanut', 'pistachio', 'hazelnut'] },
  { name: 'Wine', group: 'Wine', emoji: '🍷', featured: ['Chardonnay', 'Cabernet Sauvignon', 'Pinot Noir', 'Sauvignon Blanc', 'Merlot', 'Riesling', 'Syrah', 'Rosé'] },
];

const GROUP_LABELS = {
  Language: 'Everyday vocabulary',
  Cuisine: 'Food by cuisine',
  Ingredients: 'Ingredients and drinks',
  Wine: 'Wine',
};

// Languages that get their own pages. `key` is the data key used in src/data (see getTranslation.ts).
const PAGE_LANGUAGES = [
  { key: 'es',    slug: 'spanish',              label: 'Spanish',              flag: '🇪🇸', htmlLang: 'es' },
  { key: 'fr',    slug: 'french',               label: 'French',               flag: '🇫🇷', htmlLang: 'fr' },
  { key: 'de',    slug: 'german',               label: 'German',               flag: '🇩🇪', htmlLang: 'de' },
  { key: 'it',    slug: 'italian',              label: 'Italian',              flag: '🇮🇹', htmlLang: 'it' },
  { key: 'pt',    slug: 'portuguese',           label: 'Portuguese',           flag: '🇵🇹', htmlLang: 'pt-PT', note: 'European Portuguese' },
  { key: 'pt-br', slug: 'brazilian-portuguese', label: 'Brazilian Portuguese', flag: '🇧🇷', htmlLang: 'pt-BR' },
  { key: 'ja',    slug: 'japanese',             label: 'Japanese',             flag: '🇯🇵', htmlLang: 'ja' },
  { key: 'zh',    slug: 'chinese',              label: 'Chinese',              flag: '🇨🇳', htmlLang: 'zh-Hans', note: 'Simplified Chinese' },
  { key: 'ko',    slug: 'korean',               label: 'Korean',               flag: '🇰🇷', htmlLang: 'ko' },
  { key: 'ru',    slug: 'russian',              label: 'Russian',              flag: '🇷🇺', htmlLang: 'ru' },
];
// Languages shown as columns on the topic pages.
const TOPIC_TABLE_LANGS = ['es', 'fr', 'de', 'it', 'pt'].map(k => PAGE_LANGUAGES.find(l => l.key === k));

// Full language list, kept in sync with src/data/languages.ts (42 languages).
const LANGUAGES = [
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇪🇸', name: 'Spanish' },
  { flag: '🇵🇹', name: 'Portuguese' },
  { flag: '🇧🇷', name: 'Brazilian Portuguese' },
  { flag: '🇫🇷', name: 'French' },
  { flag: '🇩🇪', name: 'German' },
  { flag: '🇮🇹', name: 'Italian' },
  { flag: '🇮🇳', name: 'Hindi' },
  { flag: '🇷🇺', name: 'Russian' },
  { flag: '🇹🇷', name: 'Turkish' },
  { flag: '🇯🇵', name: 'Japanese' },
  { flag: '🇨🇳', name: 'Chinese' },
  { flag: '🇹🇼', name: 'Chinese (Traditional)' },
  { flag: '🇰🇷', name: 'Korean' },
  { flag: '🇸🇦', name: 'Arabic' },
  { flag: '🇵🇱', name: 'Polish' },
  { flag: '🇨🇿', name: 'Czech' },
  { flag: '🇷🇴', name: 'Romanian' },
  { flag: '🇳🇱', name: 'Dutch' },
  { flag: '🇸🇪', name: 'Swedish' },
  { flag: '🇬🇷', name: 'Greek' },
  { flag: '🇮🇩', name: 'Indonesian' },
  { flag: '🇻🇳', name: 'Vietnamese' },
  { flag: '🇹🇭', name: 'Thai' },
  { flag: '🇳🇴', name: 'Norwegian' },
  { flag: '🇩🇰', name: 'Danish' },
  { flag: '🇫🇮', name: 'Finnish' },
  { flag: '🇵🇭', name: 'Filipino' },
  { flag: '🇺🇦', name: 'Ukrainian' },
  { flag: '🇮🇱', name: 'Hebrew' },
  { flag: '🇲🇾', name: 'Malay' },
  { flag: '🇧🇩', name: 'Bengali' },
  { flag: '🇱🇰', name: 'Tamil' },
  { flag: '🇭🇺', name: 'Hungarian' },
  { flag: '🇸🇰', name: 'Slovak' },
  { flag: '🇧🇬', name: 'Bulgarian' },
  { flag: '🇭🇷', name: 'Croatian' },
  { flag: '🇷🇸', name: 'Serbian' },
  { flag: '🇱🇹', name: 'Lithuanian' },
  { flag: '🇱🇻', name: 'Latvian' },
  { flag: '🇵🇰', name: 'Urdu' },
  { flag: '🇰🇪', name: 'Swahili' },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function groupColor(group) {
  switch (group) {
    case 'Cuisine':     return { bg: '#fef3c7', accent: '#d97706', dark: '#92400e' };
    case 'Ingredients': return { bg: '#dcfce7', accent: '#16a34a', dark: '#14532d' };
    case 'Wine':        return { bg: '#fdf2f8', accent: '#a21caf', dark: '#701a75' };
    default:            return { bg: '#eff6ff', accent: '#2563eb', dark: '#1e3a8a' };
  }
}

function htmlEncode(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function jsonLd(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
}

function topicUrl(cat) { return `${SITE_URL}/learn/${slugify(cat.name)}`; }
function langHubUrl(lang) { return `${SITE_URL}/learn/${lang.slug}`; }
function langTopicUrl(lang, cat) { return `${SITE_URL}/learn/${lang.slug}/${slugify(cat.name)}`; }
function appUrlFor(cat) {
  const target = cat.dataCats ? cat.dataCats[0] : cat.name;
  return `${SITE_URL}/?cat=${encodeURIComponent(target)}`;
}

/** "Animals" -> "Animals in Spanish"; cuisines read better as "Italian Cuisine Words in Spanish". */
function topicInLanguage(cat, lang) {
  return cat.group === 'Cuisine' ? `${cat.name} Words in ${lang.label}` : `${cat.name} in ${lang.label}`;
}

/** Trim a long example sentence at a word boundary. */
function shorten(text, max = 150) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\s]+$/, '') + '…';
}

/** First candidate that fits the limit; the last one is the fallback. */
function fit(candidates, max) {
  return candidates.find(c => c.length <= max) || candidates.at(-1);
}

function formatNumber(n) { return n.toLocaleString('en-GB'); }

// ─── Data ────────────────────────────────────────────────────────────────────

const WORDS = loadWords(ROOT);
const OVERLAYS = loadOverlays(ROOT);

if (WORDS.length < 3000) {
  console.error(`✗ Only ${WORDS.length} words could be read from src/data (expected 3,000+). Not generating SEO pages from partial data.`);
  process.exit(1);
}

const wordsByCategory = new Map();
for (const w of WORDS) {
  if (!wordsByCategory.has(w.category)) wordsByCategory.set(w.category, []);
  wordsByCategory.get(w.category).push(w);
}

function topicWords(cat) {
  const seen = new Set();
  const out = [];
  for (const dc of cat.dataCats || [cat.name]) {
    for (const w of wordsByCategory.get(dc) || []) {
      if (seen.has(w.word)) continue;
      seen.add(w.word);
      out.push(w);
    }
  }
  return out;
}

const TOPICS = CATEGORY_DATA.map(cat => ({ ...cat, slug: slugify(cat.name), words: topicWords(cat) }));
for (const t of TOPICS) {
  if (t.words.length < 5) {
    console.error(`✗ Topic "${t.name}" has only ${t.words.length} words in src/data. Fix the category name or data before building.`);
    process.exit(1);
  }
}
{
  const slugs = new Set(TOPICS.map(t => t.slug));
  for (const l of PAGE_LANGUAGES) {
    if (slugs.has(l.slug)) { console.error(`✗ Language slug "${l.slug}" collides with a topic slug.`); process.exit(1); }
  }
}

function wordsIn(topic, lang) {
  return topic.words
    .map(w => ({ en: w.word, tr: translationOf(w, lang.key, OVERLAYS), sentence: w.sentence }))
    .filter(r => r.tr);
}

// ─── Last-modified dates (from git history, when it is reliable) ─────────────

const FILE_DATES = (() => {
  try {
    const shallow = execFileSync('git', ['rev-parse', '--is-shallow-repository'], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    if (shallow !== 'false') return null; // a shallow clone makes every file look new: say nothing instead
    const out = execFileSync('git', ['log', '--format=@@%cs', '--name-only', '--', 'src/data', 'scripts', 'index.html'], {
      cwd: ROOT, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'],
    });
    const dates = new Map();
    let current = '';
    for (const line of out.split('\n')) {
      if (line.startsWith('@@')) current = line.slice(2);
      else if (line && !dates.has(line)) dates.set(line, current); // newest first, so first sighting is the latest change
    }
    return dates;
  } catch {
    return null;
  }
})();

function latestDate(paths) {
  if (!FILE_DATES) return null;
  const dates = paths.map(p => FILE_DATES.get(p)).filter(Boolean);
  return dates.length ? dates.sort().at(-1) : null;
}

const GENERATOR_FILES = ['scripts/generate-seo-pages.mjs', 'scripts/seo-data.mjs'];
function topicLastmod(topic) {
  return latestDate([...topic.words.map(w => `src/data/${w.file}`), ...GENERATOR_FILES]);
}
function langTopicLastmod(topic, lang) {
  return latestDate([...topic.words.map(w => `src/data/${w.file}`), `src/data/extra/${lang.key}.ts`, ...GENERATOR_FILES]);
}

// ─── Shared page pieces ──────────────────────────────────────────────────────

function css(color) {
  return `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; color: #0f172a; min-height: 100vh; }
    a { color: inherit; text-decoration: none; }
    .nav { background: #fff; border-bottom: 1px solid #e2e8f0; padding: 0 1.5rem; height: 56px; display: flex; align-items: center; justify-content: space-between; }
    .nav-logo { font-size: 1.1rem; font-weight: 700; color: #4f46e5; }
    .nav-home { font-size: 0.85rem; color: #64748b; }
    .crumbs { max-width: 860px; margin: 0 auto; padding: 0.9rem 1.5rem 0; font-size: 0.82rem; color: #64748b; }
    .crumbs a { color: #4f46e5; }
    .hero { background: ${color.bg}; border-bottom: 1px solid #e2e8f0; padding: 3rem 1.5rem 2.5rem; text-align: center; }
    .emoji { font-size: 4rem; line-height: 1; margin-bottom: 1rem; }
    .hero h1 { font-size: clamp(1.6rem, 4vw, 2.5rem); font-weight: 800; color: ${color.dark}; margin-bottom: 0.75rem; line-height: 1.2; }
    .hero p { font-size: 1.05rem; color: #475569; max-width: 600px; margin: 0 auto 1.5rem; line-height: 1.6; }
    .badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; margin-bottom: 2rem; }
    .badge { background: #fff; border: 1px solid #e2e8f0; border-radius: 9999px; padding: 0.3rem 0.85rem; font-size: 0.8rem; font-weight: 600; color: #334155; }
    .cta-btn { display: inline-block; background: ${color.accent}; color: #fff; font-size: 1.05rem; font-weight: 700; padding: 0.9rem 2.2rem; border-radius: 14px; cursor: pointer; transition: opacity 0.15s; border: none; }
    .cta-btn:hover { opacity: 0.9; }
    .cta-sub { font-size: 0.8rem; color: #94a3b8; margin-top: 0.6rem; }
    .content { max-width: 860px; margin: 0 auto; padding: 2.5rem 1.5rem; }
    .section-title { font-size: 1.2rem; font-weight: 700; color: #0f172a; margin-bottom: 1rem; }
    .section-note { font-size: 0.88rem; color: #64748b; margin: -0.5rem 0 1rem; line-height: 1.5; }
    .table-wrap { overflow-x: auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 2rem; }
    table.vocab { width: 100%; border-collapse: collapse; font-size: 0.92rem; }
    .vocab th, .vocab td { padding: 0.55rem 0.85rem; text-align: left; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
    .vocab tr:last-child td { border-bottom: none; }
    .vocab th { background: #f8fafc; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.04em; color: #475569; white-space: nowrap; }
    .vocab th a { color: ${color.accent}; }
    .vocab td.en { font-weight: 600; color: #0f172a; }
    .vocab td.tr { font-size: 1rem; color: #1e293b; min-width: 6.5rem; }
    .vocab td.meaning { color: #64748b; font-size: 0.85rem; line-height: 1.45; min-width: 13rem; }
    .vocab td.en { min-width: 6rem; }
    .lang-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 0.5rem; margin-bottom: 2rem; }
    .lang-chip { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 0.55rem 0.85rem; font-size: 0.85rem; font-weight: 500; color: #374151; display: flex; align-items: center; gap: 0.5rem; }
    a.lang-chip { color: ${color.accent}; font-weight: 600; }
    a.lang-chip:hover { background: ${color.bg}; border-color: ${color.accent}; }
    .features { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 2.5rem; }
    .feature { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 1.2rem; }
    .feature-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .feature h3 { font-size: 0.95rem; font-weight: 700; margin-bottom: 0.3rem; }
    .feature p { font-size: 0.82rem; color: #64748b; line-height: 1.5; }
    .faq { margin-bottom: 2rem; }
    .faq h3 { font-size: 0.98rem; font-weight: 700; margin: 1rem 0 0.25rem; }
    .faq p { font-size: 0.92rem; color: #475569; line-height: 1.55; }
    .related { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
    .related-link { background: #fff; border: 1px solid #e2e8f0; border-radius: 9999px; padding: 0.35rem 0.9rem; font-size: 0.82rem; font-weight: 500; color: #4f46e5; }
    .related-link:hover { background: #eff6ff; }
    .topic-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 0.75rem; margin-bottom: 2rem; }
    .topic-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 0.9rem 1rem; display: block; }
    .topic-card:hover { border-color: ${color.accent}; background: ${color.bg}; }
    .topic-card strong { display: block; font-size: 0.98rem; color: #0f172a; }
    .topic-card span { display: block; font-size: 0.8rem; color: #64748b; margin-top: 0.2rem; line-height: 1.4; }
    .cta-bottom { background: ${color.bg}; border: 1px solid #e2e8f0; border-radius: 16px; padding: 2rem; text-align: center; }
    .cta-bottom h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem; color: ${color.dark}; }
    .cta-bottom p { font-size: 0.9rem; color: #64748b; margin-bottom: 1.2rem; }
    footer { text-align: center; padding: 2rem 1rem; font-size: 0.8rem; color: #94a3b8; border-top: 1px solid #e2e8f0; margin-top: 2rem; }
    footer a { color: #4f46e5; }
`;
}

function layout({ title, desc, url, color, ld, body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${htmlEncode(title)}</title>
  <meta name="description" content="${htmlEncode(desc)}" />
  <link rel="canonical" href="${url}" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${htmlEncode(title)}" />
  <meta property="og:description" content="${htmlEncode(desc)}" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  <meta property="og:image" content="${SITE_URL}/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${htmlEncode(title)}" />
  <meta name="twitter:description" content="${htmlEncode(desc)}" />
  <meta name="twitter:image" content="${SITE_URL}/og-image.png" />

  ${ld.map(jsonLd).join('\n  ')}

  <style>${css(color)}</style>
</head>
<body>

<nav class="nav">
  <a class="nav-logo" href="${SITE_URL}">🌐 ${SITE_NAME}</a>
  <a class="nav-home" href="${SITE_URL}">← Back to app</a>
</nav>
${body}
<footer>
  <p>© ${new Date().getFullYear()} <a href="${SITE_URL}">${SITE_NAME}</a> · Free visual vocabulary learning · 4,000+ words · 42 languages</p>
  <p style="margin-top:0.5rem">
    <a href="${SITE_URL}/learn/verbs">Verbs</a> ·
    <a href="${SITE_URL}/learn/emotions">Emotions</a> ·
    <a href="${SITE_URL}/learn/numbers">Numbers</a> ·
    <a href="${SITE_URL}/learn/italian-cuisine">Italian</a> ·
    <a href="${SITE_URL}/learn/japanese-cuisine">Japanese</a> ·
    <a href="${SITE_URL}/learn/french-cuisine">French</a>
  </p>
  ${FULL_BUILD ? `<p style="margin-top:0.5rem">Learn by language: ${PAGE_LANGUAGES.map(l => `<a href="${langHubUrl(l)}">${l.label}</a>`).join(' · ')}</p>` : ''}
</footer>

</body>
</html>`;
}

function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

function crumbsHtml(items) {
  const parts = items.map((it, i) => (i === items.length - 1 ? htmlEncode(it.name) : `<a href="${it.url}">${htmlEncode(it.name)}</a>`));
  return `<div class="crumbs">${parts.join(' › ')}</div>`;
}

function faqLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

function faqHtml(faqs) {
  return `<h2 class="section-title">❓ Common questions</h2>
  <div class="faq">
    ${faqs.map(f => `<h3>${htmlEncode(f.q)}</h3>\n    <p>${htmlEncode(f.a)}</p>`).join('\n    ')}
  </div>`;
}

function getRelated(cat) {
  const sameGroup = TOPICS.filter(c => c.name !== cat.name && c.group === cat.group).slice(0, 4);
  const others = TOPICS.filter(c => c.name !== cat.name && c.group !== cat.group).slice(0, 3);
  return [...sameGroup, ...others].slice(0, 7);
}

const FEATURES_HTML = `<h2 class="section-title">✨ How it Works</h2>
  <div class="features">
    <div class="feature">
      <div class="feature-icon">📸</div>
      <h3>Visual Learning</h3>
      <p>Every word is paired with a beautiful real-world photo, making vocabulary stick faster than traditional methods.</p>
    </div>
    <div class="feature">
      <div class="feature-icon">🔁</div>
      <h3>Flashcard Mode</h3>
      <p>Flip through cards with your chosen language — study what you need, skip what you know.</p>
    </div>
    <div class="feature">
      <div class="feature-icon">🧩</div>
      <h3>Quiz Mode</h3>
      <p>Test yourself with multiple-choice quizzes. Get instant feedback to reinforce what you've learned.</p>
    </div>
    <div class="feature">
      <div class="feature-icon">🔥</div>
      <h3>Daily Streaks</h3>
      <p>Build a daily learning habit with streak tracking and motivating milestones to celebrate progress.</p>
    </div>
  </div>`;

/** Well-known words first (the hand-picked `featured` list), then the data order. */
function sampleWords(topic, k) {
  const wanted = (topic.featured || []).map(f => f.toLowerCase());
  const byName = new Map(topic.words.map(w => [w.word.toLowerCase(), w]));
  const picked = wanted.map(f => byName.get(f)).filter(Boolean);
  for (const w of topic.words) if (!picked.includes(w)) picked.push(w);
  return picked.slice(0, k);
}

/** Same idea as sampleWords, for rows of { en, tr }. */
function sampleRows(topic, rows, k) {
  const wanted = (topic.featured || []).map(f => f.toLowerCase());
  const byName = new Map(rows.map(r => [r.en.toLowerCase(), r]));
  const picked = wanted.map(f => byName.get(f)).filter(Boolean);
  for (const r of rows) if (!picked.includes(r)) picked.push(r);
  return picked.slice(0, k);
}

// ─── Topic page: /learn/{topic} ──────────────────────────────────────────────

function generateTopicPage(topic) {
  const n = topic.words.length;
  const url = topicUrl(topic);
  const color = groupColor(topic.group);
  const title = fit([
    `${topic.name} Vocabulary — Learn ${n} words in 42 languages | ${SITE_NAME}`,
    `${topic.name} Vocabulary: ${n} words in 42 languages | ${SITE_NAME}`,
    `${topic.name} Vocabulary: ${n} words | ${SITE_NAME}`,
  ], 68);
  const desc = fit([3, 2, 1, 0].map(k =>
    `Learn ${n} words from the ${topic.name} topic${k ? ` — ${sampleWords(topic, k).map(w => w.word).join(', ')} and more —` : ''} with photos and translations in Spanish, French, German, Italian, Japanese and more.`), 158);

  const rows = topic.words.map(w => {
    const cells = TOPIC_TABLE_LANGS.map(l => {
      const t = translationOf(w, l.key, OVERLAYS);
      return `<td class="tr" lang="${l.htmlLang}">${htmlEncode(t)}</td>`;
    }).join('');
    return `<tr><td class="en">${htmlEncode(w.word)}</td>${cells}</tr>`;
  }).join('\n      ');

  const head = TOPIC_TABLE_LANGS.map(l =>
    FULL_BUILD ? `<th><a href="${langTopicUrl(l, topic)}">${l.label}</a></th>` : `<th>${l.label}</th>`).join('');

  const first = sampleWords(topic, 1)[0];
  const faqs = [
    { q: `How many words are in the ${topic.name} topic on ${SITE_NAME}?`, a: `${SITE_NAME} has ${n} words in the ${topic.name} topic, each with translations you can study with photos, flashcards and quizzes.` },
    { q: `How do you say "${first.word}" in Spanish, French and German?`, a: `"${first.word}" is "${translationOf(first, 'es', OVERLAYS)}" in Spanish, "${translationOf(first, 'fr', OVERLAYS)}" in French and "${translationOf(first, 'de', OVERLAYS)}" in German.` },
  ];

  // There is no /learn index page, so the trail is Home › Topic.
  const trail = [{ name: 'LexPix', url: SITE_URL }, { name: `${topic.name} vocabulary`, url }];

  const langLinks = FULL_BUILD ? `
  <h2 class="section-title">🗣 ${htmlEncode(topic.name)} in your language</h2>
  <div class="lang-grid">
${PAGE_LANGUAGES.map(l => `    <a class="lang-chip" href="${langTopicUrl(l, topic)}"><span>${l.flag}</span> ${l.label}</a>`).join('\n')}
  </div>
` : '';

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: `${topic.name} Vocabulary`,
      description: desc,
      url,
      provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      educationalLevel: 'Beginner',
      learningResourceType: 'Flashcard',
      inLanguage: 'en',
      teaches: topic.name,
      numberOfItems: n,
    },
    breadcrumbLd(trail),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${topic.name} vocabulary`,
      numberOfItems: n,
      itemListElement: topic.words.map((w, i) => ({ '@type': 'ListItem', position: i + 1, name: w.word })),
    },
    faqLd(faqs),
  ];

  const body = `
${crumbsHtml(trail)}
<section class="hero">
  <div class="emoji">${topic.emoji}</div>
  <h1>${htmlEncode(topic.name)} Vocabulary in ${LANGUAGES.length} Languages</h1>
  <p>${htmlEncode(desc)}</p>
  <div class="badges">
    <span class="badge">📸 ${n} words with photos</span>
    <span class="badge">🌐 ${LANGUAGES.length} languages</span>
    <span class="badge">✅ Free to use</span>
    <span class="badge">📱 Works on all devices</span>
  </div>
  <a href="${appUrlFor(topic)}" class="cta-btn">Start Learning ${topic.emoji}</a>
  <p class="cta-sub">Free · No sign-up required · Works on all devices</p>
</section>

<div class="content">

  <h2 class="section-title">📖 ${htmlEncode(topic.name)} words and translations</h2>
  <div class="table-wrap">
    <table class="vocab">
      <thead><tr><th>English</th>${head}</tr></thead>
      <tbody>
      ${rows}
      </tbody>
    </table>
  </div>
  ${langLinks}
  <h2 class="section-title">🌍 Available Languages</h2>
  <div class="lang-grid">
${LANGUAGES.map(l => `    <div class="lang-chip"><span>${l.flag}</span> ${l.name}</div>`).join('\n')}
  </div>

  ${faqHtml(faqs)}

  ${FEATURES_HTML}

  <h2 class="section-title">🗂 Explore More Categories</h2>
  <div class="related">
    ${getRelated(topic).map(r => `<a href="${topicUrl(r)}" class="related-link">${r.emoji} ${r.name}</a>`).join('\n    ')}
    <a href="${SITE_URL}" class="related-link">🌐 See all categories</a>
  </div>

  <div class="cta-bottom">
    <h2>Ready to Learn ${htmlEncode(topic.name)}?</h2>
    <p>Join thousands of learners exploring vocabulary through beautiful photography.</p>
    <a href="${appUrlFor(topic)}" class="cta-btn">Open ${htmlEncode(topic.name)} Flashcards</a>
  </div>

</div>
`;
  return layout({ title, desc, url, color, ld, body });
}

// ─── Topic in a language: /learn/{language}/{topic} ──────────────────────────

function generateLangTopicPage(topic, lang, rows) {
  const n = rows.length;
  const url = langTopicUrl(lang, topic);
  const color = groupColor(topic.group);
  const h1 = topicInLanguage(topic, lang);
  const title = fit([
    `${h1}: ${n} words with translations | ${SITE_NAME}`,
    `${h1}: ${n} words | ${SITE_NAME}`,
    `${h1} | ${SITE_NAME}`,
  ], 68);
  const desc = fit([3, 2, 1, 0].map(k =>
    `${n} words from the ${topic.name} topic in ${lang.label}, with English meanings${k ? `, such as ${sampleRows(topic, rows, k).map(r => `${r.en} = ${r.tr}`).join(', ')}` : ''}. Practise with photos on ${SITE_NAME}.`), 158);

  const showMeaning = rows.filter(r => r.sentence).length >= rows.length / 2;
  const body_rows = rows.map(r =>
    `<tr><td class="en">${htmlEncode(r.en)}</td><td class="tr" lang="${lang.htmlLang}">${htmlEncode(r.tr)}</td>${showMeaning ? `<td class="meaning">${htmlEncode(shorten(r.sentence))}</td>` : ''}</tr>`
  ).join('\n      ');

  const [ex1, ex2] = sampleRows(topic, rows, 2);
  const faqs = [
    { q: `How do you say "${ex1.en}" in ${lang.label}?`, a: `"${ex1.en}" in ${lang.label} is "${ex1.tr}".` },
    { q: `How do you say "${ex2.en}" in ${lang.label}?`, a: `"${ex2.en}" in ${lang.label} is "${ex2.tr}".` },
    { q: `How many words are in the ${topic.name} topic in ${lang.label}?`, a: `${SITE_NAME} has ${n} words in the ${topic.name} topic with ${lang.label} translations. Open the app to study them with photos, flashcards and quizzes.` },
  ];

  const trail = [
    { name: 'LexPix', url: SITE_URL },
    { name: `Learn ${lang.label}`, url: langHubUrl(lang) },
    { name: topic.name, url },
  ];

  const ld = [
    breadcrumbLd(trail),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: h1,
      numberOfItems: n,
      itemListElement: rows.map((r, i) => ({ '@type': 'ListItem', position: i + 1, name: `${r.en} — ${r.tr}` })),
    },
    faqLd(faqs),
  ];

  const otherLangs = PAGE_LANGUAGES.filter(l => l.key !== lang.key);
  const related = getRelated(topic).slice(0, 6);

  const noteLine = lang.note ? `<p class="section-note">${lang.label} here means ${lang.note}.</p>` : '';

  const body = `
${crumbsHtml(trail)}
<section class="hero">
  <div class="emoji">${topic.emoji}</div>
  <h1>${htmlEncode(h1)}</h1>
  <p>${n} words from the ${htmlEncode(topic.name)} topic in ${lang.label}, each with its English word and meaning. Study them with real photos in the ${SITE_NAME} app.</p>
  <div class="badges">
    <span class="badge">${lang.flag} ${lang.label}</span>
    <span class="badge">📖 ${n} words</span>
    <span class="badge">📸 Photos in the app</span>
    <span class="badge">✅ Free to start</span>
  </div>
  <a href="${appUrlFor(topic)}" class="cta-btn">Start Learning ${topic.emoji}</a>
  <p class="cta-sub">Choose ${lang.label} in the app to see these words with photos</p>
</section>

<div class="content">

  <h2 class="section-title">📖 ${htmlEncode(topic.name)} in ${lang.label}: full word list</h2>
  ${noteLine}
  <div class="table-wrap">
    <table class="vocab">
      <thead><tr><th>English</th><th lang="en">${lang.label}</th>${showMeaning ? '<th>Meaning</th>' : ''}</tr></thead>
      <tbody>
      ${body_rows}
      </tbody>
    </table>
  </div>

  ${faqHtml(faqs)}

  <h2 class="section-title">🗣 ${htmlEncode(topic.name)} in other languages</h2>
  <div class="related">
    ${otherLangs.map(l => `<a href="${langTopicUrl(l, topic)}" class="related-link">${l.flag} ${l.label}</a>`).join('\n    ')}
    <a href="${topicUrl(topic)}" class="related-link">🌐 All languages</a>
  </div>

  <h2 class="section-title">🗂 More ${lang.label} vocabulary</h2>
  <div class="related">
    ${related.map(r => `<a href="${langTopicUrl(lang, r)}" class="related-link">${r.emoji} ${r.name}</a>`).join('\n    ')}
    <a href="${langHubUrl(lang)}" class="related-link">📚 All ${lang.label} topics</a>
  </div>

  ${FEATURES_HTML}

  <div class="cta-bottom">
    <h2>Learn ${htmlEncode(topic.name)} in ${lang.label} with photos</h2>
    <p>Flashcards, quizzes and daily streaks make the words stick.</p>
    <a href="${appUrlFor(topic)}" class="cta-btn">Open ${htmlEncode(topic.name)} Flashcards</a>
  </div>

</div>
`;
  return layout({ title, desc, url, color, ld, body });
}

// ─── Language hub: /learn/{language} ─────────────────────────────────────────

function generateLangHub(lang, entries) {
  const url = langHubUrl(lang);
  const color = groupColor('Language');
  const totalWords = entries.reduce((s, e) => s + e.rows.length, 0);
  const title = `Learn ${lang.label} Vocabulary by Topic — ${entries.length} topics | ${SITE_NAME}`;
  const desc = `Browse ${entries.length} topics and ${formatNumber(totalWords)} ${lang.label} words with English translations, from everyday words to food and wine.`;

  const trail = [{ name: 'LexPix', url: SITE_URL }, { name: `Learn ${lang.label}`, url }];
  const ld = [
    breadcrumbLd(trail),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${lang.label} vocabulary topics`,
      numberOfItems: entries.length,
      itemListElement: entries.map((e, i) => ({ '@type': 'ListItem', position: i + 1, url: langTopicUrl(lang, e.topic), name: topicInLanguage(e.topic, lang) })),
    },
  ];

  const groups = ['Language', 'Cuisine', 'Ingredients', 'Wine']
    .map(g => ({ g, items: entries.filter(e => e.topic.group === g) }))
    .filter(x => x.items.length);

  const sections = groups.map(({ g, items }) => `
  <h2 class="section-title">${htmlEncode(GROUP_LABELS[g])}</h2>
  <div class="topic-grid">
    ${items.map(e => {
      const sample = sampleRows(e.topic, e.rows, 3).map(r => `${r.en} → ${r.tr}`).join(' · ');
      return `<a class="topic-card" href="${langTopicUrl(lang, e.topic)}"><strong>${e.topic.emoji} ${htmlEncode(e.topic.name)}</strong><span>${e.rows.length} words · ${htmlEncode(sample)}</span></a>`;
    }).join('\n    ')}
  </div>`).join('\n');

  const others = PAGE_LANGUAGES.filter(l => l.key !== lang.key);

  const body = `
${crumbsHtml(trail)}
<section class="hero">
  <div class="emoji">${lang.flag}</div>
  <h1>Learn ${lang.label} Vocabulary by Topic</h1>
  <p>${entries.length} topics and ${formatNumber(totalWords)} ${lang.label} words with English translations. Pick a topic to see the full word list, then practise with photos in the ${SITE_NAME} app.</p>
  <div class="badges">
    <span class="badge">${lang.flag} ${lang.label}</span>
    <span class="badge">📖 ${formatNumber(totalWords)} words</span>
    <span class="badge">✅ Free to start</span>
  </div>
  <a href="${SITE_URL}" class="cta-btn">Open ${SITE_NAME}</a>
</section>

<div class="content">
${sections}

  <h2 class="section-title">🗣 Other languages</h2>
  <div class="related">
    ${others.map(l => `<a href="${langHubUrl(l)}" class="related-link">${l.flag} ${l.label}</a>`).join('\n    ')}
  </div>

  ${FEATURES_HTML}

</div>
`;
  return layout({ title, desc, url, color, ld, body });
}

// ─── Sitemap ─────────────────────────────────────────────────────────────────

function sitemapUrl(loc, priority, lastmod) {
  return `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}<priority>${priority}</priority></url>`;
}

// ─── Main ────────────────────────────────────────────────────────────────────

mkdirSync(LEARN_DIR, { recursive: true });

// Remove dead british-cuisine page if it still exists
const britishDir = join(LEARN_DIR, 'british-cuisine');
if (existsSync(britishDir)) {
  rmSync(britishDir, { recursive: true });
  console.log('  🗑 Removed /learn/british-cuisine (dead page)');
}

const sitemap = [sitemapUrl(`${SITE_URL}/`, '1.0', latestDate(['index.html']))];
let topicPages = 0;
let hubPages = 0;
let langPages = 0;

for (const topic of TOPICS) {
  const dir = join(LEARN_DIR, topic.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), generateTopicPage(topic), 'utf8');
  sitemap.push(sitemapUrl(topicUrl(topic), '0.8', topicLastmod(topic)));
  topicPages++;
}

if (FULL_BUILD) {
  for (const lang of PAGE_LANGUAGES) {
    const entries = [];
    for (const topic of TOPICS) {
      const rows = wordsIn(topic, lang);
      if (rows.length < 5) continue;
      entries.push({ topic, rows });
    }
    const langDir = join(LEARN_DIR, lang.slug);
    mkdirSync(langDir, { recursive: true });
    writeFileSync(join(langDir, 'index.html'), generateLangHub(lang, entries), 'utf8');
    const hubDates = entries.map(e => langTopicLastmod(e.topic, lang)).filter(Boolean).sort();
    sitemap.push(sitemapUrl(langHubUrl(lang), '0.7', hubDates.at(-1) || null));
    hubPages++;

    for (const { topic, rows } of entries) {
      const dir = join(langDir, topic.slug);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), generateLangTopicPage(topic, lang, rows), 'utf8');
      sitemap.push(sitemapUrl(langTopicUrl(lang, topic), '0.6', langTopicLastmod(topic, lang)));
      langPages++;
    }
  }
}

writeFileSync(
  join(PUBLIC, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.join('\n')}\n</urlset>`,
  'utf8',
);

console.log(`\n✅ SEO pages: ${topicPages} topic, ${hubPages} language hubs, ${langPages} language topic pages; ${sitemap.length} sitemap URLs${FULL_BUILD ? '' : ' (language pages skipped: set SEO_FULL=1 or build on Vercel)'}`);
console.log(`   Data: ${WORDS.length} words, lastmod ${FILE_DATES ? 'from git history' : 'omitted (no reliable git history)'}`);
