import type { Word } from '../types';
import { GASTRONOMY_WORDS } from './gastronomy';
import { SCHOOL_WORDS } from './school';
import { WINE_WORDS } from './wine';
import { TIME_WORDS } from './time';
import { HOLIDAY_WORDS } from './holidays';
import { PT_VOCAB_WORDS } from './pt_vocab';
import { WORLD_DISH_WORDS } from './world_dishes';
import { RECIPE_INGREDIENT_WORDS } from './recipe_ingredients';
import { EUROPEAN_DISH_WORDS } from './european_dishes';
import { EUROPEAN_INGREDIENT_WORDS } from './european_ingredients';
import { EASTERN_EUROPEAN_DISH_WORDS } from './eastern_european_dishes';
import { EASTERN_EUROPEAN_INGREDIENT_WORDS } from './eastern_european_ingredients';
import { AFRICAN_DISH_WORDS } from './african_dishes';
import { AFRICAN_INGREDIENT_WORDS } from './african_ingredients';
import { ASIAN_DISH_WORDS } from './asian_dishes';
import { ASIAN_INGREDIENT_WORDS } from './asian_ingredients';
import { OCEANIA_DISH_WORDS } from './oceania_dishes';
import { OCEANIA_INGREDIENT_WORDS } from './oceania_ingredients';
import { SOUTH_AMERICAN_DISH_WORDS } from './south_american_dishes';
import { SOUTH_AMERICAN_INGREDIENT_WORDS } from './south_american_ingredients';
import { CENTRAL_AMERICAN_DISH_WORDS } from './central_american_dishes';
import { CENTRAL_AMERICAN_INGREDIENT_WORDS } from './central_american_ingredients';
import { NORTH_AMERICAN_DISH_WORDS } from './north_american_dishes';
import { NORTH_AMERICAN_INGREDIENT_WORDS } from './north_american_ingredients';
import { MIDDLE_EASTERN_DISH_WORDS } from './middle_eastern_dishes';
import { MIDDLE_EASTERN_INGREDIENT_WORDS } from './middle_eastern_ingredients';
import { ISLAND_DISH_WORDS } from './island_dishes';
import { ISLAND_INGREDIENT_WORDS } from './island_ingredients';

export const WORDS: Word[] = [
  // Animals
  { id: '1', word: 'Cat', translations: { es: 'Gato', pt: 'Gato', fr: 'Chat', de: 'Katze', it: 'Gatto', ja: 'ネコ', zh: '猫', ko: '고양이', ar: 'قطة' }, category: 'Animals', unsplashQuery: 'cat' },
  { id: '2', word: 'Dog', translations: { es: 'Perro', pt: 'Cachorro', fr: 'Chien', de: 'Hund', it: 'Cane', ja: '犬', zh: '狗', ko: '개', ar: 'كلب' }, category: 'Animals', unsplashQuery: 'dog' },
  { id: '3', word: 'Bird', translations: { es: 'Pájaro', pt: 'Pássaro', fr: 'Oiseau', de: 'Vogel', it: 'Uccello', ja: '鳥', zh: '鸟', ko: '새', ar: 'طائر' }, category: 'Animals', unsplashQuery: 'bird nature' },
  { id: '4', word: 'Fish', translations: { es: 'Pez', pt: 'Peixe', fr: 'Poisson', de: 'Fisch', it: 'Pesce', ja: '魚', zh: '鱼', ko: '생선', ar: 'سمك' }, category: 'Animals', unsplashQuery: 'fish ocean' },
  { id: '5', word: 'Horse', translations: { es: 'Caballo', pt: 'Cavalo', fr: 'Cheval', de: 'Pferd', it: 'Cavallo', ja: '馬', zh: '马', ko: '말', ar: 'حصان' }, category: 'Animals', unsplashQuery: 'horse' },
  { id: '6', word: 'Elephant', translations: { es: 'Elefante', pt: 'Elefante', fr: 'Éléphant', de: 'Elefant', it: 'Elefante', ja: 'ゾウ', zh: '大象', ko: '코끼리', ar: 'فيل' }, category: 'Animals', unsplashQuery: 'elephant' },
  { id: '7', word: 'Lion', translations: { es: 'León', pt: 'Leão', fr: 'Lion', de: 'Löwe', it: 'Leone', ja: 'ライオン', zh: '狮子', ko: '사자', ar: 'أسد' }, category: 'Animals', unsplashQuery: 'lion' },
  { id: '8', word: 'Butterfly', translations: { es: 'Mariposa', pt: 'Borboleta', fr: 'Papillon', de: 'Schmetterling', it: 'Farfalla', ja: '蝶', zh: '蝴蝶', ko: '나비', ar: 'فراشة' }, category: 'Animals', unsplashQuery: 'butterfly' },
  { id: '9', word: 'Rabbit', translations: { es: 'Conejo', pt: 'Coelho', fr: 'Lapin', de: 'Kaninchen', it: 'Coniglio', ja: 'ウサギ', zh: '兔子', ko: '토끼', ar: 'أرنب' }, category: 'Animals', unsplashQuery: 'rabbit' },
  { id: '10', word: 'Bear', translations: { es: 'Oso', pt: 'Urso', fr: 'Ours', de: 'Bär', it: 'Orso', ja: 'クマ', zh: '熊', ko: '곰', ar: 'دب' }, category: 'Animals', unsplashQuery: 'bear' },
  { id: '11', word: 'Tiger', translations: { es: 'Tigre', pt: 'Tigre', fr: 'Tigre', de: 'Tiger', it: 'Tigre', ja: 'トラ', zh: '老虎', ko: '호랑이', ar: 'نمر' }, category: 'Animals', unsplashQuery: 'tiger' },
  { id: '12', word: 'Monkey', translations: { es: 'Mono', pt: 'Macaco', fr: 'Singe', de: 'Affe', it: 'Scimmia', ja: 'サル', zh: '猴子', ko: '원숭이', ar: 'قرد' }, category: 'Animals', unsplashQuery: 'monkey' },
  { id: '13', word: 'Cow', translations: { es: 'Vaca', pt: 'Vaca', fr: 'Vache', de: 'Kuh', it: 'Mucca', ja: '牛', zh: '牛', ko: '소', ar: 'بقرة' }, category: 'Animals', unsplashQuery: 'cow' },
  { id: '14', word: 'Sheep', translations: { es: 'Oveja', pt: 'Ovelha', fr: 'Mouton', de: 'Schaf', it: 'Pecora', ja: 'ヒツジ', zh: '羊', ko: '양', ar: 'خروف' }, category: 'Animals', unsplashQuery: 'sheep' },
  { id: '15', word: 'Duck', translations: { es: 'Pato', pt: 'Pato', fr: 'Canard', de: 'Ente', it: 'Anatra', ja: 'アヒル', zh: '鸭子', ko: '오리', ar: 'بطة' }, category: 'Animals', unsplashQuery: 'duck' },
  { id: '16',  word: 'Frog',  translations: { es: 'Rana',   pt: 'Rã',     fr: 'Grenouille', de: 'Frosch', it: 'Rana',  ja: 'カエル',   zh: '青蛙', ko: '개구리', ar: 'ضفدع' }, category: 'Animals', unsplashQuery: 'frog' },
  { id: '111', word: 'Zebra', translations: { es: 'Cebra',  pt: 'Zebra',  fr: 'Zèbre',      de: 'Zebra',  it: 'Zebra', ja: 'シマウマ', zh: '斑马', ko: '얼룩말', ar: 'حمار وحشي' }, category: 'Animals', unsplashQuery: 'zebra' },
  { id: '112', word: 'Wasp',  translations: { es: 'Avispa', pt: 'Vespa',  fr: 'Guêpe',      de: 'Wespe',  it: 'Vespa', ja: 'スズメバチ', zh: '黄蜂', ko: '말벌', ar: 'دبور' }, category: 'Animals', unsplashQuery: 'wasp insect' },
  { id: '113', word: 'Worm',  translations: { es: 'Gusano', pt: 'Minhoca', fr: 'Ver',        de: 'Wurm',   it: 'Verme', ja: 'ミミズ',   zh: '蚯蚓', ko: '벌레', ar: 'دودة' }, category: 'Animals', unsplashQuery: 'worm earthworm' },

  // Food
  { id: '17', word: 'Apple', translations: { es: 'Manzana', pt: 'Maçã', fr: 'Pomme', de: 'Apfel', it: 'Mela', ja: 'リンゴ', zh: '苹果', ko: '사과', ar: 'تفاحة' }, category: 'Food', unsplashQuery: 'apple fruit' },
  { id: '18', word: 'Bread', translations: { es: 'Pan', pt: 'Pão', fr: 'Pain', de: 'Brot', it: 'Pane', ja: 'パン', zh: '面包', ko: '빵', ar: 'خبز' }, category: 'Food', unsplashQuery: 'bread bakery' },
  { id: '19', word: 'Milk', translations: { es: 'Leche', pt: 'Leite', fr: 'Lait', de: 'Milch', it: 'Latte', ja: 'ミルク', zh: '牛奶', ko: '우유', ar: 'حليب' }, category: 'Food', unsplashQuery: 'milk glass' },
  { id: '20', word: 'Egg', translations: { es: 'Huevo', pt: 'Ovo', fr: 'Œuf', de: 'Ei', it: 'Uovo', ja: '卵', zh: '鸡蛋', ko: '계란', ar: 'بيضة' }, category: 'Food', unsplashQuery: 'egg' },
  { id: '21', word: 'Pizza', translations: { es: 'Pizza', pt: 'Pizza', fr: 'Pizza', de: 'Pizza', it: 'Pizza', ja: 'ピザ', zh: '披萨', ko: '피자', ar: 'بيتزا' }, category: 'Food', unsplashQuery: 'pizza' },
  { id: '22', word: 'Cake', translations: { es: 'Pastel', pt: 'Bolo', fr: 'Gâteau', de: 'Kuchen', it: 'Torta', ja: 'ケーキ', zh: '蛋糕', ko: '케이크', ar: 'كعكة' }, category: 'Food', unsplashQuery: 'cake' },
  { id: '23', word: 'Strawberry', translations: { es: 'Fresa', pt: 'Morango', fr: 'Fraise', de: 'Erdbeere', it: 'Fragola', ja: 'イチゴ', zh: '草莓', ko: '딸기', ar: 'فراولة' }, category: 'Food', unsplashQuery: 'strawberry' },
  { id: '24', word: 'Lemon', translations: { es: 'Limón', pt: 'Limão', fr: 'Citron', de: 'Zitrone', it: 'Limone', ja: 'レモン', zh: '柠檬', ko: '레몬', ar: 'ليمون' }, category: 'Food', unsplashQuery: 'lemon' },
  { id: '25', word: 'Orange', translations: { es: 'Naranja', pt: 'Laranja', fr: 'Orange', de: 'Orange', it: 'Arancia', ja: 'オレンジ', zh: '橙子', ko: '오렌지', ar: 'برتقال' }, category: 'Food', unsplashQuery: 'orange fruit' },
  { id: '26', word: 'Banana', translations: { es: 'Plátano', pt: 'Banana', fr: 'Banane', de: 'Banane', it: 'Banana', ja: 'バナナ', zh: '香蕉', ko: '바나나', ar: 'موز' }, category: 'Food', unsplashQuery: 'banana' },
  { id: '27', word: 'Tomato', translations: { es: 'Tomate', pt: 'Tomate', fr: 'Tomate', de: 'Tomate', it: 'Pomodoro', ja: 'トマト', zh: '西红柿', ko: '토마토', ar: 'طماطم' }, category: 'Food', unsplashQuery: 'tomato' },
  { id: '28', word: 'Cheese', translations: { es: 'Queso', pt: 'Queijo', fr: 'Fromage', de: 'Käse', it: 'Formaggio', ja: 'チーズ', zh: '奶酪', ko: '치즈', ar: 'جبن' }, category: 'Food', unsplashQuery: 'cheese' },
  { id: '29', word: 'Rice', translations: { es: 'Arroz', pt: 'Arroz', fr: 'Riz', de: 'Reis', it: 'Riso', ja: 'ご飯', zh: '米饭', ko: '밥', ar: 'أرز' }, category: 'Food', unsplashQuery: 'rice bowl' },
  { id: '30', word: 'Soup', translations: { es: 'Sopa', pt: 'Sopa', fr: 'Soupe', de: 'Suppe', it: 'Zuppa', ja: 'スープ', zh: '汤', ko: '수프', ar: 'شوربة' }, category: 'Food', unsplashQuery: 'soup bowl' },
  { id: '31', word: 'Coffee', translations: { es: 'Café', pt: 'Café', fr: 'Café', de: 'Kaffee', it: 'Caffè', ja: 'コーヒー', zh: '咖啡', ko: '커피', ar: 'قهوة' }, category: 'Food', unsplashQuery: 'coffee cup' },
  { id: '32', word: 'Chocolate', translations: { es: 'Chocolate', pt: 'Chocolate', fr: 'Chocolat', de: 'Schokolade', it: 'Cioccolato', ja: 'チョコレート', zh: '巧克力', ko: '초콜릿', ar: 'شوكولاتة' }, category: 'Food', unsplashQuery: 'chocolate' },

  // Seafood
  { id: '33', word: 'Sardine', translations: { es: 'Sardina', pt: 'Sardinha', fr: 'Sardine', de: 'Sardine', it: 'Sardina', ja: 'イワシ', zh: '沙丁鱼', ko: '정어리', ar: 'سردين' }, category: 'Seafood', unsplashQuery: 'sardine fish' },
  { id: '34', word: 'Salmon', translations: { es: 'Salmón', pt: 'Salmão', fr: 'Saumon', de: 'Lachs', it: 'Salmone', ja: 'サーモン', zh: '三文鱼', ko: '연어', ar: 'سلمون' }, category: 'Seafood', unsplashQuery: 'salmon fish' },
  { id: '35', word: 'Shrimp', translations: { es: 'Camarón', pt: 'Camarão', fr: 'Crevette', de: 'Garnele', it: 'Gambero', ja: 'エビ', zh: '虾', ko: '새우', ar: 'روبيان' }, category: 'Seafood', unsplashQuery: 'shrimp seafood' },
  { id: '36', word: 'Octopus', translations: { es: 'Pulpo', pt: 'Polvo', fr: 'Pieuvre', de: 'Tintenfisch', it: 'Polpo', ja: 'タコ', zh: '章鱼', ko: '문어', ar: 'أخطبوط' }, category: 'Seafood', unsplashQuery: 'octopus' },
  { id: '37', word: 'Crab', translations: { es: 'Cangrejo', pt: 'Caranguejo', fr: 'Crabe', de: 'Krabbe', it: 'Granchio', ja: 'カニ', zh: '螃蟹', ko: '게', ar: 'سرطان البحر' }, category: 'Seafood', unsplashQuery: 'crab seafood' },
  { id: '38', word: 'Lobster', translations: { es: 'Langosta', pt: 'Lagosta', fr: 'Homard', de: 'Hummer', it: 'Aragosta', ja: 'ロブスター', zh: '龙虾', ko: '바닷가재', ar: 'جراد البحر' }, category: 'Seafood', unsplashQuery: 'lobster' },
  { id: '39', word: 'Tuna', translations: { es: 'Atún', pt: 'Atum', fr: 'Thon', de: 'Thunfisch', it: 'Tonno', ja: 'マグロ', zh: '金枪鱼', ko: '참치', ar: 'تونة' }, category: 'Seafood', unsplashQuery: 'tuna fish' },
  { id: '40', word: 'Cod', translations: { es: 'Bacalao', pt: 'Bacalhau', fr: 'Cabillaud', de: 'Kabeljau', it: 'Merluzzo', ja: 'タラ', zh: '鳕鱼', ko: '대구', ar: 'سمك القد' }, category: 'Seafood', unsplashQuery: 'cod fish' },

  // Nature
  { id: '41', word: 'Sun', translations: { es: 'Sol', pt: 'Sol', fr: 'Soleil', de: 'Sonne', it: 'Sole', ja: '太陽', zh: '太阳', ko: '태양', ar: 'شمس' }, category: 'Nature', unsplashQuery: 'sun sunrise' },
  { id: '42', word: 'Moon', translations: { es: 'Luna', pt: 'Lua', fr: 'Lune', de: 'Mond', it: 'Luna', ja: '月', zh: '月亮', ko: '달', ar: 'قمر' }, category: 'Nature', unsplashQuery: 'moon night' },
  { id: '43', word: 'Tree', translations: { es: 'Árbol', pt: 'Árvore', fr: 'Arbre', de: 'Baum', it: 'Albero', ja: '木', zh: '树', ko: '나무', ar: 'شجرة' }, category: 'Nature', unsplashQuery: 'tree nature' },
  { id: '44', word: 'Flower', translations: { es: 'Flor', pt: 'Flor', fr: 'Fleur', de: 'Blume', it: 'Fiore', ja: '花', zh: '花', ko: '꽃', ar: 'زهرة' }, category: 'Nature', unsplashQuery: 'flower bloom' },
  { id: '45', word: 'Mountain', translations: { es: 'Montaña', pt: 'Montanha', fr: 'Montagne', de: 'Berg', it: 'Montagna', ja: '山', zh: '山', ko: '산', ar: 'جبل' }, category: 'Nature', unsplashQuery: 'mountain landscape' },
  { id: '46', word: 'Ocean', translations: { es: 'Océano', pt: 'Oceano', fr: 'Océan', de: 'Ozean', it: 'Oceano', ja: '海', zh: '海洋', ko: '바다', ar: 'محيط' }, category: 'Nature', unsplashQuery: 'ocean waves' },
  { id: '47', word: 'Rain', translations: { es: 'Lluvia', pt: 'Chuva', fr: 'Pluie', de: 'Regen', it: 'Pioggia', ja: '雨', zh: '雨', ko: '비', ar: 'مطر' }, category: 'Nature', unsplashQuery: 'rain drops' },
  { id: '48', word: 'Snow', translations: { es: 'Nieve', pt: 'Neve', fr: 'Neige', de: 'Schnee', it: 'Neve', ja: '雪', zh: '雪', ko: '눈', ar: 'ثلج' }, category: 'Nature', unsplashQuery: 'snow winter' },
  { id: '49', word: 'River', translations: { es: 'Río', pt: 'Rio', fr: 'Rivière', de: 'Fluss', it: 'Fiume', ja: '川', zh: '河流', ko: '강', ar: 'نهر' }, category: 'Nature', unsplashQuery: 'river' },
  { id: '50', word: 'Forest', translations: { es: 'Bosque', pt: 'Floresta', fr: 'Forêt', de: 'Wald', it: 'Foresta', ja: '森', zh: '森林', ko: '숲', ar: 'غابة' }, category: 'Nature', unsplashQuery: 'forest' },
  { id: '51', word: 'Desert', translations: { es: 'Desierto', pt: 'Deserto', fr: 'Désert', de: 'Wüste', it: 'Deserto', ja: '砂漠', zh: '沙漠', ko: '사막', ar: 'صحراء' }, category: 'Nature', unsplashQuery: 'desert sand' },
  { id: '52',  word: 'Cloud',   translations: { es: 'Nube',      pt: 'Nuvem',     fr: 'Nuage',      de: 'Wolke',       it: 'Nuvola',    ja: '雲',     zh: '云',   ko: '구름', ar: 'سحابة' }, category: 'Nature', unsplashQuery: 'cloud sky' },
  { id: '114', word: 'Juniper', translations: { es: 'Enebro',    pt: 'Zimbro',    fr: 'Genévrier',  de: 'Wacholder',   it: 'Ginepro',   ja: 'ジュニパー', zh: '刺柏', ko: '향나무', ar: 'عرعر' }, category: 'Nature', unsplashQuery: 'juniper tree' },
  { id: '115', word: 'Violet',  translations: { es: 'Violeta',   pt: 'Violeta',   fr: 'Violette',   de: 'Veilchen',    it: 'Viola',     ja: 'スミレ',   zh: '紫罗兰', ko: '제비꽃', ar: 'بنفسج' }, category: 'Nature', unsplashQuery: 'violet flower' },
  { id: '116', word: 'View',    translations: { es: 'Vista',     pt: 'Vista',     fr: 'Vue',        de: 'Aussicht',    it: 'Vista',     ja: '景色',     zh: '景色', ko: '경치', ar: 'منظر' }, category: 'Nature', unsplashQuery: 'scenic view landscape' },
  { id: '117', word: 'Zinc',    translations: { es: 'Zinc',      pt: 'Zinco',     fr: 'Zinc',       de: 'Zink',        it: 'Zinco',     ja: '亜鉛',     zh: '锌',   ko: '아연', ar: 'خارصين' }, category: 'Nature', unsplashQuery: 'zinc mineral' },
  { id: '118', word: 'Schist',  translations: { es: 'Esquisto',  pt: 'Xisto',     fr: 'Schiste',    de: 'Schiefer',    it: 'Scisto',    ja: '片岩',     zh: '片岩', ko: '편암', ar: 'صخر زلقي' }, category: 'Nature', unsplashQuery: 'schist rock' },

  // Home
  { id: '53', word: 'Chair', translations: { es: 'Silla', pt: 'Cadeira', fr: 'Chaise', de: 'Stuhl', it: 'Sedia', ja: '椅子', zh: '椅子', ko: '의자', ar: 'كرسي' }, category: 'Home', unsplashQuery: 'chair furniture' },
  { id: '54', word: 'Table', translations: { es: 'Mesa', pt: 'Mesa', fr: 'Table', de: 'Tisch', it: 'Tavolo', ja: 'テーブル', zh: '桌子', ko: '테이블', ar: 'طاولة' }, category: 'Home', unsplashQuery: 'table wood' },
  { id: '55', word: 'Bed', translations: { es: 'Cama', pt: 'Cama', fr: 'Lit', de: 'Bett', it: 'Letto', ja: 'ベッド', zh: '床', ko: '침대', ar: 'سرير' }, category: 'Home', unsplashQuery: 'bed bedroom' },
  { id: '56', word: 'Door', translations: { es: 'Puerta', pt: 'Porta', fr: 'Porte', de: 'Tür', it: 'Porta', ja: 'ドア', zh: '门', ko: '문', ar: 'باب' }, category: 'Home', unsplashQuery: 'door entrance' },
  { id: '57', word: 'Window', translations: { es: 'Ventana', pt: 'Janela', fr: 'Fenêtre', de: 'Fenster', it: 'Finestra', ja: '窓', zh: '窗户', ko: '창문', ar: 'نافذة' }, category: 'Home', unsplashQuery: 'window light' },
  { id: '58', word: 'Book', translations: { es: 'Libro', pt: 'Livro', fr: 'Livre', de: 'Buch', it: 'Libro', ja: '本', zh: '书', ko: '책', ar: 'كتاب' }, category: 'Home', unsplashQuery: 'book reading' },
  { id: '59', word: 'Lamp', translations: { es: 'Lámpara', pt: 'Lâmpada', fr: 'Lampe', de: 'Lampe', it: 'Lampada', ja: 'ランプ', zh: '灯', ko: '램프', ar: 'مصباح' }, category: 'Home', unsplashQuery: 'lamp light' },
  { id: '60', word: 'Sofa', translations: { es: 'Sofá', pt: 'Sofá', fr: 'Canapé', de: 'Sofa', it: 'Divano', ja: 'ソファ', zh: '沙发', ko: '소파', ar: 'أريكة' }, category: 'Home', unsplashQuery: 'sofa couch' },
  { id: '61', word: 'Mirror', translations: { es: 'Espejo', pt: 'Espelho', fr: 'Miroir', de: 'Spiegel', it: 'Specchio', ja: '鏡', zh: '镜子', ko: '거울', ar: 'مرآة' }, category: 'Home', unsplashQuery: 'mirror' },
  { id: '62', word: 'Clock', translations: { es: 'Reloj', pt: 'Relógio', fr: 'Horloge', de: 'Uhr', it: 'Orologio', ja: '時計', zh: '时钟', ko: '시계', ar: 'ساعة' }, category: 'Home', unsplashQuery: 'clock' },

  // Transport
  { id: '63', word: 'Car', translations: { es: 'Coche', pt: 'Carro', fr: 'Voiture', de: 'Auto', it: 'Auto', ja: '車', zh: '汽车', ko: '자동차', ar: 'سيارة' }, category: 'Transport', unsplashQuery: 'car road' },
  { id: '64', word: 'Bicycle', translations: { es: 'Bicicleta', pt: 'Bicicleta', fr: 'Vélo', de: 'Fahrrad', it: 'Bicicletta', ja: '自転車', zh: '自行车', ko: '자전거', ar: 'دراجة' }, category: 'Transport', unsplashQuery: 'bicycle' },
  { id: '65', word: 'Airplane', translations: { es: 'Avión', pt: 'Avião', fr: 'Avion', de: 'Flugzeug', it: 'Aereo', ja: '飛行機', zh: '飞机', ko: '비행기', ar: 'طائرة' }, category: 'Transport', unsplashQuery: 'airplane sky' },
  { id: '66', word: 'Boat', translations: { es: 'Barco', pt: 'Barco', fr: 'Bateau', de: 'Boot', it: 'Barca', ja: 'ボート', zh: '船', ko: '배', ar: 'قارب' }, category: 'Transport', unsplashQuery: 'boat water' },
  { id: '67', word: 'Train', translations: { es: 'Tren', pt: 'Trem', fr: 'Train', de: 'Zug', it: 'Treno', ja: '電車', zh: '火车', ko: '기차', ar: 'قطار' }, category: 'Transport', unsplashQuery: 'train railway' },
  { id: '68', word: 'Bus', translations: { es: 'Autobús', pt: 'Ônibus', fr: 'Bus', de: 'Bus', it: 'Autobus', ja: 'バス', zh: '公共汽车', ko: '버스', ar: 'حافلة' }, category: 'Transport', unsplashQuery: 'bus city' },
  { id: '69', word: 'Motorcycle', translations: { es: 'Moto', pt: 'Moto', fr: 'Moto', de: 'Motorrad', it: 'Moto', ja: 'バイク', zh: '摩托车', ko: '오토바이', ar: 'دراجة نارية' }, category: 'Transport', unsplashQuery: 'motorcycle' },
  { id: '70', word: 'Helicopter', translations: { es: 'Helicóptero', pt: 'Helicóptero', fr: 'Hélicoptère', de: 'Hubschrauber', it: 'Elicottero', ja: 'ヘリコプター', zh: '直升机', ko: '헬리콥터', ar: 'مروحية' }, category: 'Transport', unsplashQuery: 'helicopter' },
  { id: '107', word: 'Tram',    translations: { es: 'Tranvía',    pt: 'Bonde',      fr: 'Tramway',    de: 'Straßenbahn', it: 'Tram',         ja: '路面電車', zh: '有轨电车', ko: '트램', ar: 'ترام' }, category: 'Transport', unsplashQuery: 'tram city' },
  { id: '108', word: 'E-Bike',  translations: { es: 'Bici eléctrica', pt: 'Bicicleta elétrica', fr: 'Vélo électrique', de: 'E-Bike', it: 'E-bike', ja: '電動自転車', zh: '电动自行车', ko: '전동 자전거', ar: 'دراجة كهربائية' }, category: 'Transport', unsplashQuery: 'electric bike' },
  { id: '109', word: 'Coach',   translations: { es: 'Autocar',    pt: 'Ônibus de turismo', fr: 'Car',      de: 'Reisebus',   it: 'Pullman',      ja: '長距離バス', zh: '长途客车', ko: '코치 버스', ar: 'حافلة سياحية' }, category: 'Transport', unsplashQuery: 'coach bus' },
  { id: '110', word: 'Lorry',   translations: { es: 'Camión',     pt: 'Caminhão',   fr: 'Camion',     de: 'Lkw',         it: 'Camion',        ja: 'トラック',   zh: '卡车', ko: '트럭', ar: 'شاحنة' }, category: 'Transport', unsplashQuery: 'lorry truck' },

  // Colors
  { id: '71', word: 'Red', translations: { es: 'Rojo', pt: 'Vermelho', fr: 'Rouge', de: 'Rot', it: 'Rosso', ja: '赤', zh: '红色', ko: '빨간색', ar: 'أحمر' }, category: 'Colors', unsplashQuery: 'red color abstract' },
  { id: '72', word: 'Blue', translations: { es: 'Azul', pt: 'Azul', fr: 'Bleu', de: 'Blau', it: 'Blu', ja: '青', zh: '蓝色', ko: '파란색', ar: 'أزرق' }, category: 'Colors', unsplashQuery: 'blue sky ocean' },
  { id: '73', word: 'Green', translations: { es: 'Verde', pt: 'Verde', fr: 'Vert', de: 'Grün', it: 'Verde', ja: '緑', zh: '绿色', ko: '초록색', ar: 'أخضر' }, category: 'Colors', unsplashQuery: 'green nature forest' },
  { id: '74', word: 'Yellow', translations: { es: 'Amarillo', pt: 'Amarelo', fr: 'Jaune', de: 'Gelb', it: 'Giallo', ja: '黄色', zh: '黄色', ko: '노란색', ar: 'أصفر' }, category: 'Colors', unsplashQuery: 'yellow sunflower' },
  { id: '75', word: 'Purple', translations: { es: 'Morado', pt: 'Roxo', fr: 'Violet', de: 'Lila', it: 'Viola', ja: '紫', zh: '紫色', ko: '보라색', ar: 'بنفسجي' }, category: 'Colors', unsplashQuery: 'purple lavender' },
  { id: '76', word: 'Orange', translations: { es: 'Naranja', pt: 'Laranja', fr: 'Orange', de: 'Orange', it: 'Arancione', ja: 'オレンジ', zh: '橙色', ko: '주황색', ar: 'برتقالي' }, category: 'Colors', unsplashQuery: 'orange color sunset' },
  { id: '77', word: 'Pink', translations: { es: 'Rosa', pt: 'Rosa', fr: 'Rose', de: 'Rosa', it: 'Rosa', ja: 'ピンク', zh: '粉色', ko: '분홍색', ar: 'وردي' }, category: 'Colors', unsplashQuery: 'pink flowers' },
  { id: '78', word: 'White', translations: { es: 'Blanco', pt: 'Branco', fr: 'Blanc', de: 'Weiß', it: 'Bianco', ja: '白', zh: '白色', ko: '흰색', ar: 'أبيض' }, category: 'Colors', unsplashQuery: 'white snow minimal' },

  // Body
  { id: '79', word: 'Hand', translations: { es: 'Mano', pt: 'Mão', fr: 'Main', de: 'Hand', it: 'Mano', ja: '手', zh: '手', ko: '손', ar: 'يد' }, category: 'Body', unsplashQuery: 'hand' },
  { id: '80', word: 'Eye', translations: { es: 'Ojo', pt: 'Olho', fr: 'Œil', de: 'Auge', it: 'Occhio', ja: '目', zh: '眼睛', ko: '눈', ar: 'عين' }, category: 'Body', unsplashQuery: 'eye closeup' },
  { id: '81', word: 'Nose', translations: { es: 'Nariz', pt: 'Nariz', fr: 'Nez', de: 'Nase', it: 'Naso', ja: '鼻', zh: '鼻子', ko: '코', ar: 'أنف' }, category: 'Body', unsplashQuery: 'nose face' },
  { id: '82', word: 'Mouth', translations: { es: 'Boca', pt: 'Boca', fr: 'Bouche', de: 'Mund', it: 'Bocca', ja: '口', zh: '嘴巴', ko: '입', ar: 'فم' }, category: 'Body', unsplashQuery: 'mouth smile' },
  { id: '83', word: 'Ear', translations: { es: 'Oreja', pt: 'Orelha', fr: 'Oreille', de: 'Ohr', it: 'Orecchio', ja: '耳', zh: '耳朵', ko: '귀', ar: 'أذن' }, category: 'Body', unsplashQuery: 'ear' },
  { id: '84', word: 'Hair', translations: { es: 'Cabello', pt: 'Cabelo', fr: 'Cheveux', de: 'Haar', it: 'Capelli', ja: '髪', zh: '头发', ko: '머리카락', ar: 'شعر' }, category: 'Body', unsplashQuery: 'hair' },
  { id: '85', word: 'Heart', translations: { es: 'Corazón', pt: 'Coração', fr: 'Cœur', de: 'Herz', it: 'Cuore', ja: '心臓', zh: '心脏', ko: '심장', ar: 'قلب' }, category: 'Body', unsplashQuery: 'heart' },
  { id: '86', word: 'Foot', translations: { es: 'Pie', pt: 'Pé', fr: 'Pied', de: 'Fuß', it: 'Piede', ja: '足', zh: '脚', ko: '발', ar: 'قدم' }, category: 'Body', unsplashQuery: 'foot barefoot' },

  // Clothes
  { id: '87', word: 'Shirt', translations: { es: 'Camisa', pt: 'Camisa', fr: 'Chemise', de: 'Hemd', it: 'Camicia', ja: 'シャツ', zh: '衬衫', ko: '셔츠', ar: 'قميص' }, category: 'Clothes', unsplashQuery: 'shirt clothing' },
  { id: '88', word: 'Shoes', translations: { es: 'Zapatos', pt: 'Sapatos', fr: 'Chaussures', de: 'Schuhe', it: 'Scarpe', ja: '靴', zh: '鞋子', ko: '신발', ar: 'حذاء' }, category: 'Clothes', unsplashQuery: 'shoes' },
  { id: '89', word: 'Hat', translations: { es: 'Sombrero', pt: 'Chapéu', fr: 'Chapeau', de: 'Hut', it: 'Cappello', ja: '帽子', zh: '帽子', ko: '모자', ar: 'قبعة' }, category: 'Clothes', unsplashQuery: 'hat' },
  { id: '90', word: 'Dress', translations: { es: 'Vestido', pt: 'Vestido', fr: 'Robe', de: 'Kleid', it: 'Vestito', ja: 'ドレス', zh: '连衣裙', ko: '드레스', ar: 'فستان' }, category: 'Clothes', unsplashQuery: 'dress fashion' },
  { id: '91', word: 'Jacket', translations: { es: 'Chaqueta', pt: 'Jaqueta', fr: 'Veste', de: 'Jacke', it: 'Giacca', ja: 'ジャケット', zh: '夹克', ko: '재킷', ar: 'جاكيت' }, category: 'Clothes', unsplashQuery: 'jacket' },
  { id: '92', word: 'Glasses', translations: { es: 'Gafas', pt: 'Óculos', fr: 'Lunettes', de: 'Brille', it: 'Occhiali', ja: 'メガネ', zh: '眼镜', ko: '안경', ar: 'نظارة' }, category: 'Clothes', unsplashQuery: 'glasses eyewear' },

  // Sports
  { id: '93', word: 'Ball', translations: { es: 'Pelota', pt: 'Bola', fr: 'Ballon', de: 'Ball', it: 'Palla', ja: 'ボール', zh: '球', ko: '공', ar: 'كرة' }, category: 'Sports', unsplashQuery: 'ball sport' },
  { id: '94', word: 'Swimming', translations: { es: 'Natación', pt: 'Natação', fr: 'Natation', de: 'Schwimmen', it: 'Nuoto', ja: '水泳', zh: '游泳', ko: '수영', ar: 'سباحة' }, category: 'Sports', unsplashQuery: 'swimming pool' },
  { id: '95', word: 'Football', translations: { es: 'Fútbol', pt: 'Futebol', fr: 'Football', de: 'Fußball', it: 'Calcio', ja: 'サッカー', zh: '足球', ko: '축구', ar: 'كرة القدم' }, category: 'Sports', unsplashQuery: 'football soccer' },
  { id: '96', word: 'Tennis', translations: { es: 'Tenis', pt: 'Tênis', fr: 'Tennis', de: 'Tennis', it: 'Tennis', ja: 'テニス', zh: '网球', ko: '테니스', ar: 'تنس' }, category: 'Sports', unsplashQuery: 'tennis' },
  { id: '97', word: 'Running', translations: { es: 'Correr', pt: 'Corrida', fr: 'Course', de: 'Laufen', it: 'Corsa', ja: 'ランニング', zh: '跑步', ko: '달리기', ar: 'الجري' }, category: 'Sports', unsplashQuery: 'running sport' },
  { id: '98', word: 'Yoga', translations: { es: 'Yoga', pt: 'Yoga', fr: 'Yoga', de: 'Yoga', it: 'Yoga', ja: 'ヨガ', zh: '瑜伽', ko: '요가', ar: 'يوغا' }, category: 'Sports', unsplashQuery: 'yoga' },

  // Places
  { id: '99', word: 'School', translations: { es: 'Escuela', pt: 'Escola', fr: 'École', de: 'Schule', it: 'Scuola', ja: '学校', zh: '学校', ko: '학교', ar: 'مدرسة' }, category: 'Places', unsplashQuery: 'school building' },
  { id: '100', word: 'Hospital', translations: { es: 'Hospital', pt: 'Hospital', fr: 'Hôpital', de: 'Krankenhaus', it: 'Ospedale', ja: '病院', zh: '医院', ko: '병원', ar: 'مستشفى' }, category: 'Places', unsplashQuery: 'hospital' },
  { id: '101', word: 'Park', translations: { es: 'Parque', pt: 'Parque', fr: 'Parc', de: 'Park', it: 'Parco', ja: '公園', zh: '公园', ko: '공원', ar: 'حديقة عامة' }, category: 'Places', unsplashQuery: 'park green' },
  { id: '102', word: 'Beach', translations: { es: 'Playa', pt: 'Praia', fr: 'Plage', de: 'Strand', it: 'Spiaggia', ja: 'ビーチ', zh: '海滩', ko: '해변', ar: 'شاطئ' }, category: 'Places', unsplashQuery: 'beach sand' },
  { id: '103', word: 'Market', translations: { es: 'Mercado', pt: 'Mercado', fr: 'Marché', de: 'Markt', it: 'Mercato', ja: '市場', zh: '市场', ko: '시장', ar: 'سوق' }, category: 'Places', unsplashQuery: 'market' },
  { id: '104', word: 'Library', translations: { es: 'Biblioteca', pt: 'Biblioteca', fr: 'Bibliothèque', de: 'Bibliothek', it: 'Biblioteca', ja: '図書館', zh: '图书馆', ko: '도서관', ar: 'مكتبة' }, category: 'Places', unsplashQuery: 'library books' },
  { id: '105', word: 'Restaurant', translations: { es: 'Restaurante', pt: 'Restaurante', fr: 'Restaurant', de: 'Restaurant', it: 'Ristorante', ja: 'レストラン', zh: '餐厅', ko: '식당', ar: 'مطعم' }, category: 'Places', unsplashQuery: 'restaurant' },
  { id: '106', word: 'Airport',        translations: { es: 'Aeropuerto', pt: 'Aeroporto',  fr: 'Aéroport',   de: 'Flughafen',   it: 'Aeroporto', ja: '空港',    zh: '机场', ko: '공항', ar: 'مطار' }, category: 'Places', unsplashQuery: 'airport' },
  { id: '119', word: 'Plant Nursery', translations: { es: 'Vivero',     pt: 'Viveiro',    fr: 'Pépinière',  de: 'Baumschule',  it: 'Vivaio',    ja: '植物園', zh: '苗圃', ko: '묘목원', ar: 'مشتل نباتات' }, category: 'Places', unsplashQuery: 'plant nursery greenhouse' },
];

export const ALL_WORDS: Word[] = [...WORDS, ...GASTRONOMY_WORDS, ...SCHOOL_WORDS, ...WINE_WORDS, ...TIME_WORDS, ...HOLIDAY_WORDS, ...PT_VOCAB_WORDS, ...WORLD_DISH_WORDS, ...RECIPE_INGREDIENT_WORDS, ...EUROPEAN_DISH_WORDS, ...EUROPEAN_INGREDIENT_WORDS, ...EASTERN_EUROPEAN_DISH_WORDS, ...EASTERN_EUROPEAN_INGREDIENT_WORDS, ...AFRICAN_DISH_WORDS, ...AFRICAN_INGREDIENT_WORDS, ...ASIAN_DISH_WORDS, ...ASIAN_INGREDIENT_WORDS, ...OCEANIA_DISH_WORDS, ...OCEANIA_INGREDIENT_WORDS, ...SOUTH_AMERICAN_DISH_WORDS, ...SOUTH_AMERICAN_INGREDIENT_WORDS, ...CENTRAL_AMERICAN_DISH_WORDS, ...CENTRAL_AMERICAN_INGREDIENT_WORDS, ...NORTH_AMERICAN_DISH_WORDS, ...NORTH_AMERICAN_INGREDIENT_WORDS, ...MIDDLE_EASTERN_DISH_WORDS, ...MIDDLE_EASTERN_INGREDIENT_WORDS, ...ISLAND_DISH_WORDS, ...ISLAND_INGREDIENT_WORDS];

export const CATEGORIES = [...new Set(ALL_WORDS.map(w => w.category))];

export const GASTRONOMY_CATEGORIES = [
  'Fruits', 'Vegetables', 'Meat', 'Seafood', 'Dairy & Eggs',
  'Bread & Grains', 'Drinks', 'Desserts', 'Herbs & Spices',
  'Condiments', 'Dishes', 'Nuts & Legumes', 'Kitchen',
];

// All categories that belong to each top-level group
const INGREDIENT_CATS = new Set([
  'Vegetables', 'Fruits', 'Meat', 'Seafood', 'Dairy & Eggs',
  'Bread & Grains', 'Herbs & Spices', 'Condiments', 'Nuts & Legumes',
  'Drinks', 'Desserts', 'Kitchen', 'Food',
]);

const GENERAL_CATS = new Set([
  'Animals', 'Nature', 'Colors', 'Home', 'School', 'Time', 'Holidays',
  'Places', 'Concepts', 'Transport', 'Clothes', 'Seasons', 'Sports',
  'Months', 'Numbers', 'Body', 'Feelings', 'Weather',
]);

const WINE_CATS = new Set(['Wine']);

export type CategoryGroup = 'All' | 'Cuisines' | 'Ingredients' | 'General' | 'Wine';

export const CATEGORY_GROUPS: Record<CategoryGroup, string[]> = {
  All: CATEGORIES,
  Cuisines: CATEGORIES.filter(c => c.includes('Cuisine') || c === 'World Dishes' || c === 'Dishes'),
  Ingredients: CATEGORIES.filter(c => INGREDIENT_CATS.has(c)),
  General: CATEGORIES.filter(c => GENERAL_CATS.has(c)),
  Wine: CATEGORIES.filter(c => WINE_CATS.has(c)),
};
