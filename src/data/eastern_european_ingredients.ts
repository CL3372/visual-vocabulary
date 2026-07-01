import type { Word } from '../types';

// Ingredients specific to Eastern European, Russian, Georgian, and Baltic cuisines
export const EASTERN_EUROPEAN_INGREDIENT_WORDS: Word[] = [

  // ── Dairy ─────────────────────────────────────────────────────────────────────
  { id: 'eei1', word: 'Kefir',          translations: { es: 'Kéfir',          pt: 'Kefir',          fr: 'Kéfir',           de: 'Kefir',           it: 'Kefir',           ja: 'ケフィア',         zh: '开菲尔',    ko: '케피어', ar: 'كفير' }, category: 'Dairy & Eggs', unsplashQuery: 'kefir fermented milk drink' },
  { id: 'eei2', word: 'Tvorog',         translations: { es: 'Tvorog',         pt: 'Tvorog',         fr: 'Tvorog',          de: 'Quark',           it: 'Ricotta russa',   ja: 'トヴォロク',       zh: '俄式农家奶酪', ko: '트보로그', ar: 'تفوروغ' }, category: 'Dairy & Eggs', unsplashQuery: 'tvorog cottage cheese white russian' },
  { id: 'eei3', word: 'Matsoni',        translations: { es: 'Matsoni',        pt: 'Matsoni',        fr: 'Matsoni',         de: 'Matsoni',         it: 'Matsoni',         ja: 'マツォーニ',       zh: '格鲁吉亚酸奶', ko: '마초니', ar: 'ماتسوني' }, category: 'Dairy & Eggs', unsplashQuery: 'matsoni georgian yogurt fermented' },

  // ── Bread & Grains ────────────────────────────────────────────────────────────
  { id: 'eei4', word: 'Millet',         translations: { es: 'Mijo',           pt: 'Milho miúdo',    fr: 'Millet',          de: 'Hirse',           it: 'Miglio',          ja: 'キビ',             zh: '小米',      ko: '기장', ar: 'دخن' }, category: 'Bread & Grains', unsplashQuery: 'millet grain yellow cereal' },
  { id: 'eei5', word: 'Semolina',       translations: { es: 'Sémola',         pt: 'Sêmola',         fr: 'Semoule',         de: 'Grieß',           it: 'Semolino',        ja: 'セモリナ',         zh: '粗粒小麦粉', ko: '세몰리나', ar: 'سميد' }, category: 'Bread & Grains', unsplashQuery: 'semolina wheat flour coarse' },

  // ── Condiments & Pantry ───────────────────────────────────────────────────────
  { id: 'eei6', word: 'Sunflower Oil',  translations: { es: 'Aceite de girasol', pt: 'Óleo de girassol', fr: 'Huile de tournesol', de: 'Sonnenblumenöl', it: 'Olio di girasole', ja: 'ひまわり油',     zh: '葵花籽油',  ko: '해바라기유', ar: 'زيت عباد الشمس' }, category: 'Condiments', unsplashQuery: 'sunflower oil bottle cooking' },
  { id: 'eei7', word: 'Plum Sauce',     translations: { es: 'Salsa de ciruela', pt: 'Molho de ameixa', fr: 'Sauce aux prunes', de: 'Pflaumensauce',  it: 'Salsa di prugne', ja: 'プラムソース',     zh: '李子酱',    ko: '자두 소스', ar: 'صلصة البرقوق' }, category: 'Condiments', unsplashQuery: 'plum sauce dark sweet condiment' },
  { id: 'eei8', word: 'Walnut Paste',   translations: { es: 'Pasta de nuez',   pt: 'Pasta de nozes', fr: 'Pâte de noix',    de: 'Walnusspaste',    it: 'Pasta di noci',   ja: 'クルミペースト',   zh: '核桃酱',    ko: '호두 페이스트', ar: 'معجون الجوز' }, category: 'Condiments', unsplashQuery: 'walnut paste sauce Georgian' },

  // ── Drinks ────────────────────────────────────────────────────────────────────
  { id: 'eei10', word: 'Vodka',         translations: { es: 'Vodka',          pt: 'Vodca',          fr: 'Vodka',           de: 'Wodka',           it: 'Vodka',           ja: 'ウォッカ',         zh: '伏特加',    ko: '보드카', ar: 'فودكا' }, category: 'Drinks', unsplashQuery: 'vodka bottle glass russian' },
  { id: 'eei11', word: 'Kompot',        translations: { es: 'Compota',        pt: 'Compota',        fr: 'Compote',         de: 'Kompott',         it: 'Composta',        ja: 'コンポート',       zh: '东欧水果茶', ko: '콤포트', ar: 'كومبوت' }, category: 'Drinks', unsplashQuery: 'kompot fruit drink eastern european' },

  // ── Herbs & Spices ────────────────────────────────────────────────────────────
  { id: 'eei12', word: 'Fenugreek Leaf', translations: { es: 'Hoja de fenogreco', pt: 'Folha de feno-grego', fr: 'Feuille de fenugrec', de: 'Bockshornklee-Blatt', it: 'Foglia di fieno greco', ja: 'フェヌグリーク葉', zh: '葫芦巴叶', ko: '호로파잎', ar: 'ورق الحلبة' }, category: 'Herbs & Spices', unsplashQuery: 'fenugreek leaf herb Georgian cooking' },
  { id: 'eei13', word: 'Blue Fenugreek', translations: { es: 'Fenogreco azul',  pt: 'Feno-grego azul', fr: 'Fenugrec bleu',   de: 'Blauer Bockshornklee', it: 'Fieno greco blu', ja: 'ブルーフェヌグリーク', zh: '蓝葫芦巴', ko: '블루 호로파', ar: 'حلبة زرقاء' }, category: 'Herbs & Spices', unsplashQuery: 'blue fenugreek Georgian spice utskho suneli' },
  { id: 'eei14', word: 'Lovage',        translations: { es: 'Levístico',       pt: 'Levístico',      fr: 'Livèche',         de: 'Liebstöckel',     it: 'Levistico',       ja: 'ラヴェジ',         zh: '欧洲当归',  ko: '러비지', ar: 'الكرفس الجبلي' }, category: 'Herbs & Spices', unsplashQuery: 'lovage herb plant Eastern European' },

  // ── Vegetables ────────────────────────────────────────────────────────────────
  { id: 'eei15', word: 'Kale',          translations: { es: 'Col rizada',      pt: 'Couve-galega',   fr: 'Chou frisé',      de: 'Grünkohl',        it: 'Cavolo riccio',   ja: 'ケール',           zh: '羽衣甘蓝',  ko: '케일', ar: 'كرنب أجعد' }, category: 'Vegetables', unsplashQuery: 'kale curly dark green leaf' },
  { id: 'eei16', word: 'Sorrel',        translations: { es: 'Acedera',         pt: 'Azeda',          fr: 'Oseille',         de: 'Sauerampfer',     it: 'Acetosa',         ja: 'スイバ',           zh: '酸模',      ko: '수영', ar: 'حميض' }, category: 'Vegetables', unsplashQuery: 'sorrel leaf sour green herb' },
  { id: 'eei17', word: 'Celeriac',      translations: { es: 'Apio-nabo',       pt: 'Aipo-rábano',    fr: 'Céleri-rave',     de: 'Knollensellerie', it: 'Sedano rapa',     ja: 'セロリアック',     zh: '根芹菜',    ko: '셀러리악', ar: 'كرفس الجذر' }, category: 'Vegetables', unsplashQuery: 'celeriac root celery vegetable pale' },

  // ── Meat ──────────────────────────────────────────────────────────────────────
  { id: 'eei18', word: 'Lard',          translations: { es: 'Manteca de cerdo', pt: 'Banha',          fr: 'Saindoux',        de: 'Schmalz',         it: 'Lardo',           ja: 'ラード',           zh: '猪油',      ko: '라드', ar: 'شحم الخنزير' }, category: 'Meat', unsplashQuery: 'lard rendered pork fat cooking' },
  { id: 'eei19', word: 'Smoked Pork',   translations: { es: 'Cerdo ahumado',   pt: 'Porco fumado',   fr: 'Porc fumé',       de: 'Geräuchertes Schweinefleisch', it: 'Maiale affumicato', ja: '燻製豚肉',   zh: '熏猪肉',    ko: '훈제 돼지고기', ar: 'لحم خنزير مدخن' }, category: 'Meat', unsplashQuery: 'smoked pork meat Eastern European' },
];
