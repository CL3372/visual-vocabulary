/**
 * Generates static SEO landing pages for each vocabulary category.
 * Output: public/learn/{slug}/index.html
 * Also generates: public/sitemap.xml
 *
 * Run: node scripts/generate-seo-pages.mjs
 * Or automatically via the postbuild script in package.json
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC = join(ROOT, 'public');
const LEARN_DIR = join(PUBLIC, 'learn');

// ─── Category metadata ──────────────────────────────────────────────────────

const SITE_URL = 'https://visual-vocab.vercel.app';
const SITE_NAME = 'Visual Vocabulary';

// Pulled from running: grep category: src/data/*.ts | uniq -c | sort -rn
const CATEGORY_DATA = [
  // General / Language Learning
  { name: 'Verbs',        count: 50,  group: 'Language', emoji: '🏃', desc: 'Master the most essential action words — run, eat, sing, dance, build and more — with beautiful photos in 15 languages.' },
  { name: 'Emotions',     count: 20,  group: 'Language', emoji: '😊', desc: 'Learn to express how you feel — happy, sad, angry, excited, brave, curious and more — across 15 languages.' },
  { name: 'Adjectives',   count: 40,  group: 'Language', emoji: '🎨', desc: 'Describe the world around you — big, small, hot, cold, beautiful, shiny and more — in 15 languages.' },
  { name: 'Numbers',      count: 20,  group: 'Language', emoji: '🔢', desc: 'Count from one to twenty in Spanish, Hindi, Russian, Japanese, Arabic and 10 more languages with beautiful visuals.' },
  { name: 'Shapes',       count: 15,  group: 'Language', emoji: '🔷', desc: 'Learn circles, squares, triangles, stars, hearts and more 2D and 3D shapes across 15 languages.' },
  { name: 'Family',       count: 17,  group: 'Language', emoji: '👨‍👩‍👧', desc: 'Learn family vocabulary — mother, father, sister, brother, grandparents and more — in 15 languages.' },
  { name: 'Occupations',  count: 25,  group: 'Language', emoji: '👨‍⚕️', desc: 'Explore jobs and professions — doctor, teacher, chef, astronaut, musician and more — across 15 languages.' },
  { name: 'Weather',      count: 15,  group: 'Language', emoji: '⛅', desc: 'Describe the weather in any language — sunny, rainy, cloudy, stormy, rainbow and more — across 15 languages.' },
  { name: 'Technology',   count: 20,  group: 'Language', emoji: '📱', desc: 'Modern tech vocabulary — phone, computer, robot, rocket, internet, drone and more — in 15 languages.' },
  { name: 'Colors',       count: 37,  group: 'Language', emoji: '🌈', desc: 'Learn all the colours of the rainbow — red, blue, green, golden, turquoise and more — across 15 languages.' },
  { name: 'Animals',      count: 40,  group: 'Language', emoji: '🦁', desc: 'Discover animals from lion to penguin — with stunning photos and translations in 15 languages.' },
  { name: 'School',       count: 40,  group: 'Language', emoji: '🏫', desc: 'Essential school vocabulary — pencil, book, teacher, classroom, homework and more — across 15 languages.' },
  { name: 'Home',         count: 59,  group: 'Language', emoji: '🏠', desc: 'Learn every room and household item — kitchen, bedroom, sofa, window and more — in 15 languages.' },
  { name: 'Transport',    count: 48,  group: 'Language', emoji: '🚗', desc: 'Vehicles and transport vocabulary — car, train, bicycle, rocket, submarine and more — in 15 languages.' },
  { name: 'Clothes',      count: 46,  group: 'Language', emoji: '👕', desc: 'Fashion and clothing vocabulary — shirt, dress, boots, hat, scarf and more — across 15 languages.' },
  { name: 'Sports',       count: 56,  group: 'Language', emoji: '⚽', desc: 'Sports and athletic vocabulary — football, swimming, tennis, yoga and more — across 15 languages.' },
  { name: 'Nature',       count: 35,  group: 'Language', emoji: '🌿', desc: 'Discover the natural world — mountains, rivers, forests, volcanoes and more — in 15 languages.' },
  { name: 'Time',         count: 30,  group: 'Language', emoji: '⏰', desc: 'Time vocabulary — morning, afternoon, yesterday, tomorrow, century and more — across 15 languages.' },
  { name: 'Holidays',     count: 25,  group: 'Language', emoji: '🎄', desc: 'Celebrations vocabulary — Christmas, Easter, birthday, fireworks and more — in 15 languages.' },

  // Cuisine (biggest/most searched)
  { name: 'Italian Cuisine',     count: 78,  group: 'Cuisine', emoji: '🇮🇹', desc: 'Explore 78 Italian food words — pasta, risotto, tiramisu, bruschetta, gelato and more — with translations in 15 languages.' },
  { name: 'Japanese Cuisine',    count: 73,  group: 'Cuisine', emoji: '🇯🇵', desc: 'Discover 73 Japanese food words — sushi, ramen, tempura, miso, matcha and more — across 15 languages.' },
  { name: 'Indian Cuisine',      count: 65,  group: 'Cuisine', emoji: '🇮🇳', desc: 'Explore 65 Indian food words — curry, biryani, naan, masala, samosa and more — in 15 languages.' },
  { name: 'Spanish Cuisine',     count: 62,  group: 'Cuisine', emoji: '🇪🇸', desc: 'Discover 62 Spanish food words — paella, tapas, gazpacho, churros and more — with translations in 15 languages.' },
  { name: 'French Cuisine',      count: 60,  group: 'Cuisine', emoji: '🇫🇷', desc: 'Explore 60 French food words — croissant, bouillabaisse, crème brûlée, baguette and more — in 15 languages.' },
  { name: 'Mexican Cuisine',     count: 44,  group: 'Cuisine', emoji: '🇲🇽', desc: 'Discover 44 Mexican food words — tacos, guacamole, tamales, enchiladas and more — across 15 languages.' },
  { name: 'Chinese Cuisine',     count: 44,  group: 'Cuisine', emoji: '🇨🇳', desc: 'Explore 44 Chinese food words — dim sum, dumplings, kung pao, Peking duck and more — in 15 languages.' },
  { name: 'Greek Cuisine',       count: 37,  group: 'Cuisine', emoji: '🇬🇷', desc: 'Discover 37 Greek food words — moussaka, souvlaki, tzatziki, baklava and more — across 15 languages.' },
  { name: 'Turkish Cuisine',     count: 39,  group: 'Cuisine', emoji: '🇹🇷', desc: 'Explore 39 Turkish food words — kebab, baklava, börek, meze, lahmacun and more — in 15 languages.' },
  { name: 'Korean Cuisine',      count: 35,  group: 'Cuisine', emoji: '🇰🇷', desc: 'Discover 35 Korean food words — kimchi, bibimbap, bulgogi, tteokbokki and more — across 15 languages.' },
  { name: 'Thai Cuisine',        count: 33,  group: 'Cuisine', emoji: '🇹🇭', desc: 'Explore Thai food words — pad thai, green curry, tom yum, mango sticky rice and more — in 15 languages.' },
  { name: 'Vietnamese Cuisine',  count: 30,  group: 'Cuisine', emoji: '🇻🇳', desc: 'Discover Vietnamese food words — pho, banh mi, spring rolls, bun cha and more — across 15 languages.' },
  { name: 'Portuguese Cuisine',  count: 59,  group: 'Cuisine', emoji: '🇵🇹', desc: 'Explore 59 Portuguese food words — bacalhau, pastéis de nata, caldo verde and more — in 15 languages.' },
  { name: 'Brazilian Cuisine',   count: 30,  group: 'Cuisine', emoji: '🇧🇷', desc: 'Discover Brazilian food words — feijoada, churrasco, brigadeiro, açaí and more — across 15 languages.' },
  { name: 'Moroccan Cuisine',    count: 28,  group: 'Cuisine', emoji: '🇲🇦', desc: 'Explore Moroccan food words — tagine, couscous, harira, bastilla and more — in 15 languages.' },
  { name: 'Lebanese Cuisine',    count: 25,  group: 'Cuisine', emoji: '🇱🇧', desc: 'Discover Lebanese food words — hummus, falafel, fattoush, kibbeh and more — across 15 languages.' },
  { name: 'British Cuisine',     count: 21,  group: 'Cuisine', emoji: '🇬🇧', desc: 'Explore British food words — fish and chips, scones, shepherd\'s pie, full English and more — in 15 languages.' },
  { name: 'Scottish Cuisine',    count: 20,  group: 'Cuisine', emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', desc: 'Discover Scottish food words — haggis, cullen skink, cranachan, Scotch pie and more — across 15 languages.' },
  { name: 'German Cuisine',      count: 30,  group: 'Cuisine', emoji: '🇩🇪', desc: 'Explore German food words — bratwurst, schnitzel, pretzel, sauerkraut and more — in 15 languages.' },
  { name: 'American Cuisine',    count: 36,  group: 'Cuisine', emoji: '🇺🇸', desc: 'Discover American food words — burger, hot dog, mac and cheese, BBQ ribs and more — across 15 languages.' },

  // Ingredients
  { name: 'Herbs & Spices',  count: 117, group: 'Ingredients', emoji: '🌿', desc: 'Learn 117 herbs and spices — basil, turmeric, coriander, saffron and more — with photos and translations in 15 languages.' },
  { name: 'Vegetables',      count: 84,  group: 'Ingredients', emoji: '🥦', desc: 'Discover 84 vegetables — from everyday carrots and tomatoes to exotic kohlrabi and bok choy — in 15 languages.' },
  { name: 'Fruits',          count: 68,  group: 'Ingredients', emoji: '🍎', desc: 'Explore 68 fruits — apples, mangoes, dragon fruit, pomegranate and more — with beautiful photos in 15 languages.' },
  { name: 'Seafood',         count: 69,  group: 'Ingredients', emoji: '🦞', desc: 'Learn 69 seafood words — salmon, lobster, octopus, oysters and more — with stunning photos in 15 languages.' },
  { name: 'Meat',            count: 85,  group: 'Ingredients', emoji: '🥩', desc: 'Explore 85 meat vocabulary words — from beef and chicken to venison and veal — across 15 languages.' },
  { name: 'Desserts',        count: 48,  group: 'Ingredients', emoji: '🍰', desc: 'Discover 48 desserts — cakes, ice creams, pastries and puddings from around the world — in 15 languages.' },
  { name: 'Drinks',          count: 65,  group: 'Ingredients', emoji: '🍵', desc: 'Explore 65 drinks — coffee, tea, wines, cocktails and traditional beverages — across 15 languages.' },
  { name: 'Condiments',      count: 121, group: 'Ingredients', emoji: '🫙', desc: 'Learn 121 condiments and sauces — mustard, mayo, sriracha, tahini and more — in 15 languages.' },
  { name: 'Nuts & Legumes',  count: 61,  group: 'Ingredients', emoji: '🥜', desc: 'Discover 61 nuts and legumes — almonds, lentils, chickpeas, cashews and more — across 15 languages.' },
  { name: 'Wine',            count: 30,  group: 'Wine', emoji: '🍷', desc: 'Explore wine vocabulary — grape varieties, wine regions, tasting notes and more — in 15 languages.' },
];

// Languages supported
const LANGUAGES = ['Spanish', 'Portuguese', 'French', 'German', 'Italian', 'Hindi', 'Russian', 'Turkish', 'Japanese', 'Chinese', 'Korean', 'Arabic'];

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
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function generatePage(cat) {
  const slug = slugify(cat.name);
  const url = `${SITE_URL}/learn/${slug}`;
  const appUrl = `${SITE_URL}/?cat=${encodeURIComponent(cat.name)}`;
  const color = groupColor(cat.group);
  const langList = LANGUAGES.slice(0, 8).join(', ') + ' and more';
  const title = `${cat.name} Vocabulary — Learn ${cat.count}+ words in 15 languages | ${SITE_NAME}`;
  const desc = cat.desc;

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

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${htmlEncode(title)}" />
  <meta name="twitter:description" content="${htmlEncode(desc)}" />
  <meta name="twitter:image" content="${SITE_URL}/og-image.png" />

  <!-- JSON-LD structured data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "${cat.name} Vocabulary",
    "description": "${desc.replace(/"/g, '\\"')}",
    "url": "${url}",
    "provider": {
      "@type": "Organization",
      "name": "${SITE_NAME}",
      "url": "${SITE_URL}"
    },
    "educationalLevel": "Beginner",
    "learningResourceType": "Flashcard",
    "inLanguage": "en",
    "teaches": "${cat.name}",
    "numberOfItems": ${cat.count}
  }
  </script>

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f8fafc;
      color: #0f172a;
      min-height: 100vh;
    }
    a { color: inherit; text-decoration: none; }

    .nav {
      background: #fff;
      border-bottom: 1px solid #e2e8f0;
      padding: 0 1.5rem;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-logo {
      font-size: 1.1rem;
      font-weight: 700;
      color: #4f46e5;
    }
    .nav-home {
      font-size: 0.85rem;
      color: #64748b;
    }

    .hero {
      background: ${color.bg};
      border-bottom: 1px solid #e2e8f0;
      padding: 3rem 1.5rem 2.5rem;
      text-align: center;
    }
    .emoji { font-size: 4rem; line-height: 1; margin-bottom: 1rem; }
    .hero h1 {
      font-size: clamp(1.6rem, 4vw, 2.5rem);
      font-weight: 800;
      color: ${color.dark};
      margin-bottom: 0.75rem;
      line-height: 1.2;
    }
    .hero p {
      font-size: 1.05rem;
      color: #475569;
      max-width: 560px;
      margin: 0 auto 1.5rem;
      line-height: 1.6;
    }
    .badges {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
    .badge {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 9999px;
      padding: 0.3rem 0.85rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: #334155;
    }
    .cta-btn {
      display: inline-block;
      background: ${color.accent};
      color: #fff;
      font-size: 1.05rem;
      font-weight: 700;
      padding: 0.9rem 2.2rem;
      border-radius: 14px;
      cursor: pointer;
      transition: opacity 0.15s;
      border: none;
    }
    .cta-btn:hover { opacity: 0.9; }
    .cta-sub {
      font-size: 0.8rem;
      color: #94a3b8;
      margin-top: 0.6rem;
    }

    .content {
      max-width: 860px;
      margin: 0 auto;
      padding: 2.5rem 1.5rem;
    }
    .section-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 1rem;
    }
    .lang-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
    .lang-chip {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 0.55rem 0.85rem;
      font-size: 0.85rem;
      font-weight: 500;
      color: #374151;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1rem;
      margin-bottom: 2.5rem;
    }
    .feature {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 1.2rem;
    }
    .feature-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .feature h3 { font-size: 0.95rem; font-weight: 700; margin-bottom: 0.3rem; }
    .feature p { font-size: 0.82rem; color: #64748b; line-height: 1.5; }

    .related {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
    .related-link {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 9999px;
      padding: 0.35rem 0.9rem;
      font-size: 0.82rem;
      font-weight: 500;
      color: #4f46e5;
    }
    .related-link:hover { background: #eff6ff; }

    .cta-bottom {
      background: ${color.bg};
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
    }
    .cta-bottom h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem; color: ${color.dark}; }
    .cta-bottom p { font-size: 0.9rem; color: #64748b; margin-bottom: 1.2rem; }

    footer {
      text-align: center;
      padding: 2rem 1rem;
      font-size: 0.8rem;
      color: #94a3b8;
      border-top: 1px solid #e2e8f0;
      margin-top: 2rem;
    }
    footer a { color: #4f46e5; }
  </style>
</head>
<body>

<nav class="nav">
  <a class="nav-logo" href="${SITE_URL}">🌐 ${SITE_NAME}</a>
  <a class="nav-home" href="${SITE_URL}">← Back to app</a>
</nav>

<section class="hero">
  <div class="emoji">${cat.emoji}</div>
  <h1>${cat.name} Vocabulary in 15 Languages</h1>
  <p>${cat.desc}</p>

  <div class="badges">
    <span class="badge">📸 ${cat.count}+ illustrated words</span>
    <span class="badge">🌐 15 languages</span>
    <span class="badge">✅ Free to use</span>
    <span class="badge">📱 Works on all devices</span>
  </div>

  <a href="${appUrl}" class="cta-btn">Start Learning ${cat.emoji}</a>
  <p class="cta-sub">Free · No sign-up required · Works on all devices</p>
</section>

<div class="content">

  <h2 class="section-title">🌍 Available Languages</h2>
  <div class="lang-grid">
    <div class="lang-chip"><span>🇬🇧</span> English</div>
    <div class="lang-chip"><span>🇪🇸</span> Spanish</div>
    <div class="lang-chip"><span>🇵🇹</span> Portuguese</div>
    <div class="lang-chip"><span>🇧🇷</span> Brazilian Portuguese</div>
    <div class="lang-chip"><span>🇫🇷</span> French</div>
    <div class="lang-chip"><span>🇩🇪</span> German</div>
    <div class="lang-chip"><span>🇮🇹</span> Italian</div>
    <div class="lang-chip"><span>🇮🇳</span> Hindi</div>
    <div class="lang-chip"><span>🇷🇺</span> Russian</div>
    <div class="lang-chip"><span>🇹🇷</span> Turkish</div>
    <div class="lang-chip"><span>🇯🇵</span> Japanese</div>
    <div class="lang-chip"><span>🇨🇳</span> Chinese (Simplified)</div>
    <div class="lang-chip"><span>🇹🇼</span> Chinese (Traditional)</div>
    <div class="lang-chip"><span>🇰🇷</span> Korean</div>
    <div class="lang-chip"><span>🇸🇦</span> Arabic</div>
  </div>

  <h2 class="section-title">✨ How it Works</h2>
  <div class="features">
    <div class="feature">
      <div class="feature-icon">📸</div>
      <h3>Visual Learning</h3>
      <p>Every word is paired with a beautiful real-world photo from Unsplash, making vocabulary stick faster.</p>
    </div>
    <div class="feature">
      <div class="feature-icon">🔁</div>
      <h3>Flashcard Mode</h3>
      <p>Flip through cards with spaced-repetition scheduling — study what you need, skip what you know.</p>
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
  </div>

  <h2 class="section-title">🗂 Explore More Categories</h2>
  <div class="related">
    ${getRelated(cat).map(r => `<a href="${SITE_URL}/learn/${slugify(r.name)}" class="related-link">${r.emoji} ${r.name}</a>`).join('\n    ')}
    <a href="${SITE_URL}" class="related-link">🌐 See all categories</a>
  </div>

  <div class="cta-bottom">
    <h2>Ready to Learn ${cat.name}?</h2>
    <p>Join thousands of learners exploring vocabulary through beautiful photography.</p>
    <a href="${appUrl}" class="cta-btn">Open ${cat.name} Flashcards</a>
  </div>

</div>

<footer>
  <p>© ${new Date().getFullYear()} <a href="${SITE_URL}">${SITE_NAME}</a> · Free visual vocabulary learning · 3,000+ words · 15 languages</p>
  <p style="margin-top:0.5rem">
    <a href="${SITE_URL}/learn/verbs">Verbs</a> ·
    <a href="${SITE_URL}/learn/emotions">Emotions</a> ·
    <a href="${SITE_URL}/learn/numbers">Numbers</a> ·
    <a href="${SITE_URL}/learn/italian-cuisine">Italian</a> ·
    <a href="${SITE_URL}/learn/japanese-cuisine">Japanese</a> ·
    <a href="${SITE_URL}/learn/french-cuisine">French</a>
  </p>
</footer>

</body>
</html>`;
}

function getRelated(cat) {
  // Return 6 related categories — same group first, then others
  const sameGroup = CATEGORY_DATA.filter(c => c.name !== cat.name && c.group === cat.group).slice(0, 4);
  const others = CATEGORY_DATA.filter(c => c.name !== cat.name && c.group !== cat.group).slice(0, 3);
  return [...sameGroup, ...others].slice(0, 7);
}

// ─── Generate sitemap ─────────────────────────────────────────────────────────

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  const urls = [
    `  <url><loc>${SITE_URL}/</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>`,
    ...CATEGORY_DATA.map(cat =>
      `  <url><loc>${SITE_URL}/learn/${slugify(cat.name)}</loc><lastmod>${today}</lastmod><priority>0.8</priority></url>`
    ),
  ].join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

mkdirSync(LEARN_DIR, { recursive: true });

let generated = 0;
for (const cat of CATEGORY_DATA) {
  const slug = slugify(cat.name);
  const dir = join(LEARN_DIR, slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), generatePage(cat), 'utf8');
  generated++;
  console.log(`  ✓ /learn/${slug}`);
}

// Sitemap
writeFileSync(join(PUBLIC, 'sitemap.xml'), generateSitemap(), 'utf8');
console.log(`  ✓ /sitemap.xml`);

console.log(`\n✅ Generated ${generated} SEO pages + sitemap`);
