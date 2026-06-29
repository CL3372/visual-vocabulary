import type { Word } from '../types';

// Ingredients specific to European cuisines not already in the app
export const EUROPEAN_INGREDIENT_WORDS: Word[] = [

  // ── Vegetables ───────────────────────────────────────────────────────────────
  { id: 'ei1',  word: 'Beetroot',       translations: { es: 'Remolacha',       pt: 'Beterraba',      fr: 'Betterave',         de: 'Rote Bete',          it: 'Barbabietola',       ja: 'ビートルート',         zh: '甜菜根',    ko: '비트루트', ar: 'شمندر' }, category: 'Vegetables', unsplashQuery: 'beetroot red beet vegetable' },
  { id: 'ei2',  word: 'Chicory',        translations: { es: 'Achicoria',       pt: 'Chicória',       fr: 'Chicorée',          de: 'Chicorée',           it: 'Cicoria',            ja: 'チコリ',               zh: '菊苣',      ko: '치커리', ar: 'هندباء' }, category: 'Vegetables', unsplashQuery: 'chicory endive white Belgian' },
  { id: 'ei3',  word: 'Celeriac',       translations: { es: 'Apio nabo',       pt: 'Aipo-rábano',    fr: 'Céleri-rave',       de: 'Sellerie',           it: 'Sedano rapa',        ja: 'セロリアック',         zh: '根芹菜',    ko: '셀러리악', ar: 'كرفس الجذر' }, category: 'Vegetables', unsplashQuery: 'celeriac celery root vegetable' },
  { id: 'ei4',  word: 'Vine Leaves',    translations: { es: 'Hojas de parra',  pt: 'Folhas de uva',  fr: 'Feuilles de vigne', de: 'Weinblätter',        it: 'Foglie di vite',     ja: 'ぶどうの葉',           zh: '葡萄叶',    ko: '포도잎', ar: 'ورق العنب' }, category: 'Vegetables', unsplashQuery: 'vine leaves grape stuffed dolmades' },

  // ── Bread & Grains ───────────────────────────────────────────────────────────
  { id: 'ei5',  word: 'Rye',            translations: { es: 'Centeno',         pt: 'Centeio',        fr: 'Seigle',            de: 'Roggen',             it: 'Segale',             ja: 'ライ麦',               zh: '黑麦',      ko: '호밀', ar: 'جاودار' }, category: 'Bread & Grains', unsplashQuery: 'rye grain dark bread cereal' },
  { id: 'ei6',  word: 'Polenta',        translations: { es: 'Polenta',         pt: 'Polenta',        fr: 'Polenta',           de: 'Polenta',            it: 'Polenta',            ja: 'ポレンタ',             zh: '玉米糊',    ko: '폴렌타', ar: 'بولينتا' }, category: 'Bread & Grains', unsplashQuery: 'polenta cornmeal yellow italian' },
  { id: 'ei7',  word: 'Buckwheat',      translations: { es: 'Alforfón',        pt: 'Trigo-sarraceno', fr: 'Sarrasin',         de: 'Buchweizen',         it: 'Grano saraceno',     ja: 'そば',                 zh: '荞麦',      ko: '메밀', ar: 'حنطة سوداء' }, category: 'Bread & Grains', unsplashQuery: 'buckwheat grain seeds dark' },

  // ── Herbs & Spices ───────────────────────────────────────────────────────────
  { id: 'ei8',  word: 'Caraway Seeds',  translations: { es: 'Semillas de alcaravea', pt: 'Sementes de alcaravia', fr: 'Graines de carvi', de: 'Kümmel',           it: 'Semi di carvi',      ja: 'キャラウェイ',         zh: '葛缕子',    ko: '캐러웨이 씨', ar: 'بذور الكراويا' }, category: 'Herbs & Spices', unsplashQuery: 'caraway seeds spice eastern european' },
  { id: 'ei9',  word: 'Poppy Seeds',    translations: { es: 'Semillas de amapola', pt: 'Sementes de papoila', fr: 'Graines de pavot', de: 'Mohn',              it: 'Semi di papavero',   ja: 'ポピーシード',         zh: '罂粟籽',    ko: '양귀비씨', ar: 'بذور الخشخاش' }, category: 'Herbs & Spices', unsplashQuery: 'poppy seeds black baking' },
  { id: 'ei10', word: 'Juniper Berries', translations: { es: 'Bayas de enebro', pt: 'Bagas de zimbro', fr: 'Baies de genièvre', de: 'Wacholderbeeren',   it: 'Bacche di ginepro',  ja: 'ジュニパーベリー',     zh: '杜松子',    ko: '주니퍼베리', ar: 'توت العرعر' }, category: 'Herbs & Spices', unsplashQuery: 'juniper berries blue gin spice' },
  { id: 'ei11', word: 'Marjoram',       translations: { es: 'Mejorana',        pt: 'Manjerona',      fr: 'Marjolaine',        de: 'Majoran',            it: 'Maggiorana',         ja: 'マジョラム',           zh: '马郁兰',    ko: '마조람', ar: 'مردقوش' }, category: 'Herbs & Spices', unsplashQuery: 'marjoram herb fresh Mediterranean' },
  { id: 'ei12', word: 'Sage',           translations: { es: 'Salvia',          pt: 'Sálvia',         fr: 'Sauge',             de: 'Salbei',             it: 'Salvia',             ja: 'セージ',               zh: '鼠尾草',    ko: '세이지', ar: 'مريمية' }, category: 'Herbs & Spices', unsplashQuery: 'sage herb fresh grey-green' },

  // ── Dairy & Eggs ─────────────────────────────────────────────────────────────
  { id: 'ei13', word: 'Sour Cream',     translations: { es: 'Nata agria',      pt: 'Nata azeda',     fr: 'Crème fraîche',     de: 'Sauerrahm',          it: 'Panna acida',        ja: 'サワークリーム',       zh: '酸奶油',    ko: '사워크림', ar: 'قشدة حامضة' }, category: 'Dairy & Eggs', unsplashQuery: 'sour cream thick white dollop' },
  { id: 'ei14', word: 'Quark',          translations: { es: 'Quark',           pt: 'Quark',          fr: 'Fromage blanc',     de: 'Quark',              it: 'Quark',              ja: 'クォーク',             zh: '夸克奶酪',  ko: '쿠아르크', ar: 'كوارك' }, category: 'Dairy & Eggs', unsplashQuery: 'quark fresh white cheese German' },
  { id: 'ei15', word: 'Crème Fraîche',  translations: { es: 'Crema fresca',    pt: 'Crème fraîche',  fr: 'Crème fraîche',     de: 'Crème fraîche',      it: 'Panna fresca',       ja: 'クレームフレーシュ',   zh: '法式鲜奶油', ko: '크렘 프레쉬', ar: 'كريمة فرنسية' }, category: 'Dairy & Eggs', unsplashQuery: 'creme fraiche thick french cream' },

  // ── Condiments & Pantry ──────────────────────────────────────────────────────
  { id: 'ei16', word: 'Sauerkraut',     translations: { es: 'Chucrut',         pt: 'Chucrute',       fr: 'Choucroute',        de: 'Sauerkraut',         it: 'Crauti',             ja: 'ザワークラウト',       zh: '酸卷心菜',  ko: '자우어크라우트', ar: 'مخلل الملفوف' }, category: 'Condiments', unsplashQuery: 'sauerkraut pickled cabbage fermented' },
  { id: 'ei17', word: 'Dijon Mustard',  translations: { es: 'Mostaza de Dijon', pt: 'Mostarda de Dijon', fr: 'Moutarde de Dijon', de: 'Dijon-Senf',       it: 'Senape di Digione',  ja: 'ディジョンマスタード', zh: '第戎芥末',  ko: '디종 머스터드', ar: 'خردل ديجون' }, category: 'Condiments', unsplashQuery: 'dijon mustard french jar' },
  { id: 'ei18', word: 'Anchovy Paste',  translations: { es: 'Pasta de anchoas', pt: 'Pasta de anchovas', fr: 'Pâte d\'anchois',  de: 'Sardellenmark',      it: 'Pasta di acciughe',  ja: 'アンチョビペースト',   zh: '凤尾鱼酱',  ko: '안초비 페이스트', ar: 'معجون الأنشوفة' }, category: 'Condiments', unsplashQuery: 'anchovy paste tube tin' },

  // ── Drinks ───────────────────────────────────────────────────────────────────
  { id: 'ei19', word: 'Aquavit',        translations: { es: 'Aguavit',         pt: 'Aquavit',        fr: 'Aquavit',           de: 'Aquavit',            it: 'Acquavite',          ja: 'アクアビット',         zh: '北欧烈酒',  ko: '아쿠아비트', ar: 'أكوافيت' }, category: 'Drinks', unsplashQuery: 'aquavit scandinavian spirit bottle' },
  { id: 'ei20', word: 'Schnapps',       translations: { es: 'Schnapps',        pt: 'Schnapps',       fr: 'Schnaps',           de: 'Schnaps',            it: 'Grappa',             ja: 'シュナップス',         zh: '德国烈酒',  ko: '슈납스', ar: 'شنابس' }, category: 'Drinks', unsplashQuery: 'schnapps german spirit shot glass' },

  // ── Fruit ────────────────────────────────────────────────────────────────────
  { id: 'ei21', word: 'Lingonberry',    translations: { es: 'Lingonberry',     pt: 'Arando vermelho', fr: 'Airelle rouge',    de: 'Preiselbeere',       it: 'Lingonberry',        ja: 'リンゴンベリー',       zh: '越橘',      ko: '링곤베리', ar: 'توت لينغون' }, category: 'Fruits', unsplashQuery: 'lingonberry red scandinavian berry' },
  { id: 'ei22', word: 'Cloudberry',     translations: { es: 'Mora ártica',     pt: 'Amora ártica',   fr: 'Plaquebière',       de: 'Moltebeere',         it: 'Mora artica',        ja: 'クラウドベリー',       zh: '云莓',      ko: '클라우드베리', ar: 'توت السحاب' }, category: 'Fruits', unsplashQuery: 'cloudberry orange arctic berry' },
  { id: 'ei23', word: 'Quince',         translations: { es: 'Membrillo',       pt: 'Marmelo',        fr: 'Coing',             de: 'Quitte',             it: 'Cotogna',            ja: 'マルメロ',             zh: '木瓜',      ko: '모과', ar: 'سفرجل' }, category: 'Fruits', unsplashQuery: 'quince yellow fruit' },

  // ── Meat ─────────────────────────────────────────────────────────────────────
  { id: 'ei24', word: 'Reindeer',       translations: { es: 'Reno',            pt: 'Rena',           fr: 'Renne',             de: 'Rentier',            it: 'Renna',              ja: 'トナカイ',             zh: '驯鹿',      ko: '순록', ar: 'رنة' }, category: 'Meat', unsplashQuery: 'reindeer meat scandinavian game' },
  { id: 'ei25', word: 'Veal',           translations: { es: 'Ternera',         pt: 'Vitela',         fr: 'Veau',              de: 'Kalbfleisch',        it: 'Vitello',            ja: '仔牛',                 zh: '小牛肉',    ko: '송아지고기', ar: 'لحم العجل' }, category: 'Meat', unsplashQuery: 'veal meat white cutlet' },
  { id: 'ei26', word: 'Black Pudding',  translations: { es: 'Morcilla',        pt: 'Morcela',        fr: 'Boudin noir',       de: 'Blutwurst',          it: 'Sanguinaccio',       ja: 'ブラックプディング',   zh: '黑布丁血肠', ko: '블랙 푸딩', ar: 'نقانق الدم' }, category: 'Meat', unsplashQuery: 'black pudding blood sausage sliced' },
];
