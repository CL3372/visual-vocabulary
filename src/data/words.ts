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
import { WORLD_DESSERT_WORDS } from './world_desserts';
import { WORLD_DRINK_WORDS } from './world_drinks';
import { HOME_WORDS } from './home';
import { TRANSPORT_WORDS } from './transport';
import { COLOR_WORDS } from './colors';
import { CLOTHES_WORDS } from './clothes';
import { SPORT_WORDS } from './sports';
import { MEAT_WORDS } from './meats';
import { HERB_SPICE_WORDS } from './herbs_spices';
import { CONDIMENT_WORDS } from './condiments';
import { NUT_LEGUME_WORDS } from './nuts_legumes';
import { ITALIAN_CUISINE_WORDS } from './italian_cuisine';
import { FRENCH_CUISINE_WORDS } from './french_cuisine';
import { SPANISH_CUISINE_WORDS } from './spanish_cuisine';
import { PORTUGUESE_CUISINE_WORDS } from './portuguese_cuisine';
import { JAPANESE_CUISINE_WORDS } from './japanese_cuisine';
import { INDIAN_CUISINE_WORDS } from './indian_cuisine';
import { CHINESE_CUISINE_WORDS } from './chinese_cuisine';
import { MEXICAN_CUISINE_WORDS } from './mexican_cuisine';
import { GREEK_CUISINE_WORDS } from './greek_cuisine';
import { TURKISH_CUISINE_WORDS } from './turkish_cuisine';
import { GERMAN_CUISINE_WORDS } from './german_cuisine';
import { KOREAN_CUISINE_WORDS } from './korean_cuisine';
import { THAI_CUISINE_WORDS } from './thai_cuisine';
import { VIETNAMESE_CUISINE_WORDS } from './vietnamese_cuisine';
import { BRAZILIAN_CUISINE_WORDS } from './brazilian_cuisine';
import { MOROCCAN_CUISINE_WORDS } from './moroccan_cuisine';
import { LEBANESE_CUISINE_WORDS } from './lebanese_cuisine';
import { IRISH_CUISINE_WORDS } from './irish_cuisine';
import { SCOTTISH_CUISINE_WORDS } from './scottish_cuisine';
import { ENGLISH_CUISINE_WORDS } from './english_cuisine';
import { SWEDISH_CUISINE_WORDS } from './swedish_cuisine';
import { ROMANIAN_CUISINE_WORDS } from './romanian_cuisine';
import { PERUVIAN_CUISINE_WORDS } from './peruvian_cuisine';
import { MALAYSIAN_CUISINE_WORDS } from './malaysian_cuisine';
import { HUNGARIAN_CUISINE_WORDS } from './hungarian_cuisine';
import { ETHIOPIAN_CUISINE_WORDS } from './ethiopian_cuisine';
import { BULGARIAN_CUISINE_WORDS } from './bulgarian_cuisine';
import { BELGIAN_CUISINE_WORDS } from './belgian_cuisine';
import { ARGENTINE_CUISINE_WORDS } from './argentine_cuisine';
import { INDONESIAN_CUISINE_WORDS } from './indonesian_cuisine';
import { IRANIAN_CUISINE_WORDS } from './iranian_cuisine';
import { UKRAINIAN_CUISINE_WORDS } from './ukrainian_cuisine';
import { ARMENIAN_CUISINE_WORDS } from './armenian_cuisine';
import { AUSTRIAN_CUISINE_WORDS } from './austrian_cuisine';
import { CZECH_CUISINE_WORDS } from './czech_cuisine';
import { DANISH_CUISINE_WORDS } from './danish_cuisine';
import { DUTCH_CUISINE_WORDS } from './dutch_cuisine';
import { EAST_AFRICAN_CUISINE_WORDS } from './east_african_cuisine';
import { FILIPINO_CUISINE_WORDS } from './filipino_cuisine';
import { GHANAIAN_CUISINE_WORDS } from './ghanaian_cuisine';
import { NORWEGIAN_CUISINE_WORDS } from './norwegian_cuisine';
import { SWISS_CUISINE_WORDS } from './swiss_cuisine';
import { TUNISIAN_CUISINE_WORDS } from './tunisian_cuisine';
import { WELSH_CUISINE_WORDS } from './welsh_cuisine';
import { FINNISH_CUISINE_WORDS } from './finnish_cuisine';
import { ICELANDIC_CUISINE_WORDS } from './icelandic_cuisine';
import { JAMAICAN_CUISINE_WORDS } from './jamaican_cuisine';
import { SENEGALESE_CUISINE_WORDS } from './senegalese_cuisine';
import { CHILEAN_CUISINE_WORDS } from './chilean_cuisine';
import { COLOMBIAN_CUISINE_WORDS } from './colombian_cuisine';
import { CUBAN_CUISINE_WORDS } from './cuban_cuisine';
import { HAWAIIAN_CUISINE_WORDS } from './hawaiian_cuisine';
import { SRI_LANKAN_CUISINE_WORDS } from './sri_lankan_cuisine';
import { ALGERIAN_CUISINE_WORDS } from './algerian_cuisine';
import { CAMBODIAN_CUISINE_WORDS } from './cambodian_cuisine';
import { GUATEMALAN_CUISINE_WORDS } from './guatemalan_cuisine';
import { ISRAELI_CUISINE_WORDS } from './israeli_cuisine';
import { IVORIAN_CUISINE_WORDS } from './ivorian_cuisine';
import { PAKISTANI_CUISINE_WORDS } from './pakistani_cuisine';
import { SAUDI_CUISINE_WORDS } from './saudi_cuisine';
import { SINGAPOREAN_CUISINE_WORDS } from './singaporean_cuisine';
import { TAIWANESE_CUISINE_WORDS } from './taiwanese_cuisine';
import { VENEZUELAN_CUISINE_WORDS } from './venezuelan_cuisine';
import { BALKAN_CUISINE_WORDS } from './balkan_cuisine';
import { BALTIC_CUISINE_WORDS } from './baltic_cuisine';
import { ALASKAN_CUISINE_WORDS } from './alaskan_cuisine';
import { VERBS_WORDS } from './verbs';
import { EMOTIONS_WORDS } from './emotions';
import { ADJECTIVES_WORDS } from './adjectives';
import { NUMBERS_WORDS } from './numbers';
import { SHAPES_WORDS } from './shapes';
import { FAMILY_WORDS } from './family';
import { OCCUPATIONS_WORDS } from './occupations';
import { WEATHER_WORDS } from './weather';
import { TECHNOLOGY_WORDS } from './technology';
import { DOCTOR_WORDS } from './doctor';
import { BANK_WORDS } from './bank';
import { RENTING_WORDS } from './renting';
import { WORK_LIFE_WORDS } from './work_life';
import { ADMIN_WORDS } from './admin';
import { EMERGENCY_WORDS } from './emergency';
import { TRAVEL_ESSENTIALS_WORDS } from './travel_essentials';

export const WORDS: Word[] = [
  // Animals
  { id: '1', word: 'Cat', translations: { es: 'Gato', pt: 'Gato', 'pt-br': 'Gato', fr: 'Chat', de: 'Katze', it: 'Gatto', ja: 'ネコ', zh: '猫', ko: '고양이', ar: 'قطة' , hi: 'बिल्ली', ru: 'Кот', tr: 'Kedi', pl: 'Kot', cs: 'Kočka', ro: 'Pisică'}, category: 'Animals', unsplashQuery: 'cat', sentence: 'The cat is a small, independent domesticated mammal kept as a beloved pet around the world.' },
  { id: '2', word: 'Dog', translations: { es: 'Perro', pt: 'Cão', 'pt-br': 'Cachorro', fr: 'Chien', de: 'Hund', it: 'Cane', ja: '犬', zh: '狗', ko: '개', ar: 'كلب' , hi: 'कुत्ता', ru: 'Собака', tr: 'Köpek', pl: 'Pies', cs: 'Pes', ro: 'Câine'}, category: 'Animals', unsplashQuery: 'dog', sentence: 'The dog is one of humanity\'s oldest companions, known for its loyalty, intelligence, and wide variety of breeds.' },
  { id: '3', word: 'Bird', translations: { es: 'Pájaro', pt: 'Pássaro', 'pt-br': 'Pássaro', fr: 'Oiseau', de: 'Vogel', it: 'Uccello', ja: '鳥', zh: '鸟', ko: '새', ar: 'طائر' , hi: 'पक्षी', ru: 'Птица', tr: 'Kuş', pl: 'Ptak', cs: 'Pták', ro: 'Pasăre'}, category: 'Animals', unsplashQuery: 'bird nature', sentence: 'Birds are feathered, warm-blooded animals with wings found on every continent, ranging from tiny hummingbirds to large ostriches.' },
  { id: '4', word: 'Fish', translations: { es: 'Pez', pt: 'Peixe', 'pt-br': 'Peixe', fr: 'Poisson', de: 'Fisch', it: 'Pesce', ja: '魚', zh: '鱼', ko: '생선', ar: 'سمك' , hi: 'मछली', ru: 'Рыба', tr: 'Balık', pl: 'Ryby', cs: 'Ryby', ro: 'Pește'}, category: 'Animals', unsplashQuery: 'fish ocean', sentence: 'Fish are aquatic vertebrates that breathe through gills and live in oceans, rivers, and lakes across the globe.' },
  { id: '5', word: 'Horse', translations: { es: 'Caballo', pt: 'Cavalo', 'pt-br': 'Cavalo', fr: 'Cheval', de: 'Pferd', it: 'Cavallo', ja: '馬', zh: '马', ko: '말', ar: 'حصان' , hi: 'घोड़ा', ru: 'Лошадь', tr: 'At', pl: 'Koń', cs: 'Kůň', ro: 'Cal'}, category: 'Animals', unsplashQuery: 'horse', sentence: 'The horse is a large, powerful mammal that has worked alongside humans for thousands of years in transport, farming, and sport.' },
  { id: '6', word: 'Elephant', translations: { es: 'Elefante', pt: 'Elefante', 'pt-br': 'Elefante', fr: 'Éléphant', de: 'Elefant', it: 'Elefante', ja: 'ゾウ', zh: '大象', ko: '코끼리', ar: 'فيل' , hi: 'हाथी', ru: 'Слон', tr: 'Fil', pl: 'Słoń', cs: 'Slon', ro: 'Elefant'}, category: 'Animals', unsplashQuery: 'elephant', sentence: 'The elephant is the world\'s largest land animal, known for its long trunk, tusks, and remarkable intelligence and memory.' },
  { id: '7', word: 'Lion', translations: { es: 'León', pt: 'Leão', 'pt-br': 'Leão', fr: 'Lion', de: 'Löwe', it: 'Leone', ja: 'ライオン', zh: '狮子', ko: '사자', ar: 'أسد' , hi: 'सिंह', ru: 'Лев', tr: 'Aslan', pl: 'Lew', cs: 'Lev', ro: 'Leu'}, category: 'Animals', unsplashQuery: 'lion', sentence: 'The lion is a large wild cat native to Africa, often called the "king of the jungle" for its majestic mane and powerful presence.' },
  { id: '8', word: 'Butterfly', translations: { es: 'Mariposa', pt: 'Borboleta', 'pt-br': 'Borboleta', fr: 'Papillon', de: 'Schmetterling', it: 'Farfalla', ja: '蝶', zh: '蝴蝶', ko: '나비', ar: 'فراشة' , hi: 'तितली', ru: 'Бабочка', tr: 'Kelebek', pl: 'Motyl', cs: 'Motýl', ro: 'Fluture'}, category: 'Animals', unsplashQuery: 'monarch butterfly wings flower colorful', sentence: 'Butterflies are colorful winged insects that undergo a remarkable transformation from caterpillar to chrysalis before emerging in their adult form.' },
  { id: '9', word: 'Rabbit', translations: { es: 'Conejo', pt: 'Coelho', 'pt-br': 'Coelho', fr: 'Lapin', de: 'Kaninchen', it: 'Coniglio', ja: 'ウサギ', zh: '兔子', ko: '토끼', ar: 'أرنب' , hi: 'खरगोश', ru: 'Кролик', tr: 'Tavşan', pl: 'Królik', cs: 'Králík', ro: 'Iepure'}, category: 'Animals', unsplashQuery: 'rabbit', sentence: 'Rabbits are small, soft-furred mammals with long ears and powerful hind legs, found wild across the world and kept as gentle pets.' },
  { id: '10', word: 'Bear', translations: { es: 'Oso', pt: 'Urso', 'pt-br': 'Urso', fr: 'Ours', de: 'Bär', it: 'Orso', ja: 'クマ', zh: '熊', ko: '곰', ar: 'دب' , hi: 'भालू', ru: 'Медведь', tr: 'Ayı', pl: 'Niedźwiedź', cs: 'Medvěd', ro: 'Urs'}, category: 'Animals', unsplashQuery: 'bear', sentence: 'Bears are large, powerful mammals found across North America, Europe, and Asia, known for their thick fur and ability to hibernate through winter.' },
  { id: '11', word: 'Tiger', translations: { es: 'Tigre', pt: 'Tigre', 'pt-br': 'Tigre', fr: 'Tigre', de: 'Tiger', it: 'Tigre', ja: 'トラ', zh: '老虎', ko: '호랑이', ar: 'نمر' , hi: 'बाघ', ru: 'Тигр', tr: 'Kaplan', pl: 'Tygrys', cs: 'Tiger', ro: 'Tigru'}, category: 'Animals', unsplashQuery: 'tiger', sentence: 'The tiger is the largest wild cat in the world, native to Asia, and instantly recognizable by its bold orange coat with black stripes.' },
  { id: '12', word: 'Monkey', translations: { es: 'Mono', pt: 'Macaco', 'pt-br': 'Macaco', fr: 'Singe', de: 'Affe', it: 'Scimmia', ja: 'サル', zh: '猴子', ko: '원숭이', ar: 'قرد' , hi: 'बंदर', ru: 'Обезьяна', tr: 'Maymun', pl: 'Małpa', cs: 'Opice', ro: 'Maimuță'}, category: 'Animals', unsplashQuery: 'monkey', sentence: 'Monkeys are highly social primates found in tropical forests worldwide, known for their agility, curiosity, and complex communication.' },
  { id: '13', word: 'Cow', translations: { es: 'Vaca', pt: 'Vaca', 'pt-br': 'Vaca', fr: 'Vache', de: 'Kuh', it: 'Mucca', ja: '牛', zh: '牛', ko: '소', ar: 'بقرة' , hi: 'गाय', ru: 'Корова', tr: 'İnek', pl: 'Krowa', cs: 'Kráva', ro: 'Vacă'}, category: 'Animals', unsplashQuery: 'highland cow portrait meadow', sentence: 'The cow is a domesticated bovine raised around the world for milk, meat, and leather, and is considered sacred in Hinduism.' },
  { id: '14', word: 'Sheep', translations: { es: 'Oveja', pt: 'Ovelha', 'pt-br': 'Ovelha', fr: 'Mouton', de: 'Schaf', it: 'Pecora', ja: 'ヒツジ', zh: '羊', ko: '양', ar: 'خروف' , hi: 'भेड़', ru: 'Овца', tr: 'Koyun', pl: 'Owce', cs: 'Ovce', ro: 'Oi'}, category: 'Animals', unsplashQuery: 'sheep', sentence: 'Sheep are woolly domesticated mammals raised on farms worldwide for their fleece, meat, and milk, often found grazing in large flocks.' },
  { id: '15', word: 'Duck', translations: { es: 'Pato', pt: 'Pato', 'pt-br': 'Pato', fr: 'Canard', de: 'Ente', it: 'Anatra', ja: 'アヒル', zh: '鸭子', ko: '오리', ar: 'بطة' , hi: 'बत्तख', ru: 'Утка', tr: 'Ördek', pl: 'Kaczka', cs: 'Kachna', ro: 'Rață'}, category: 'Animals', unsplashQuery: 'duck', sentence: 'Ducks are waterfowl with waterproof feathers, webbed feet, and flat bills, at home on ponds, rivers, and wetlands around the world.' },
  { id: '16',  word: 'Frog',  translations: { es: 'Rana',   pt: 'Rã', 'pt-br': 'Rã',     fr: 'Grenouille', de: 'Frosch', it: 'Rana',  ja: 'カエル',   zh: '青蛙', ko: '개구리', ar: 'ضفدع' }, category: 'Animals', unsplashQuery: 'frog', sentence: 'Frogs are amphibians known for their smooth, moist skin, powerful jumping legs, and the ability to live both in water and on land.' },
  { id: '111', word: 'Zebra', translations: { es: 'Cebra',  pt: 'Zebra', 'pt-br': 'Zebra',  fr: 'Zèbre',      de: 'Zebra',  it: 'Zebra', ja: 'シマウマ', zh: '斑马', ko: '얼룩말', ar: 'حمار وحشي' , hi: 'ज़ेब्रा', ru: 'Зебра', tr: 'Zebra', pl: 'Zebra', cs: 'Zebra', ro: 'Zebră'}, category: 'Animals', unsplashQuery: 'zebra', sentence: 'Zebras are African wild horses recognized by their striking black-and-white striped coats, which are unique to each individual like fingerprints.' },
  { id: '112', word: 'Wasp',  translations: { es: 'Avispa', pt: 'Vespa', 'pt-br': 'Vespa',  fr: 'Guêpe',      de: 'Wespe',  it: 'Vespa', ja: 'スズメバチ', zh: '黄蜂', ko: '말벌', ar: 'دبور' }, category: 'Animals', unsplashQuery: 'wasp insect', sentence: 'Wasps are slender, yellow-and-black stinging insects that build papery nests and play an important role in controlling pest insect populations.' },
  { id: '113', word: 'Worm',  translations: { es: 'Gusano', pt: 'Minhoca', 'pt-br': 'Minhoca', fr: 'Ver',        de: 'Wurm',   it: 'Verme', ja: 'ミミズ',   zh: '蚯蚓', ko: '벌레', ar: 'دودة' }, category: 'Animals', unsplashQuery: 'worm earthworm', sentence: 'Earthworms are soft-bodied invertebrates that tunnel through soil, breaking down organic matter and enriching the earth for plant growth.' },

  // Seafood
  { id: '33', word: 'Sardine', translations: { es: 'Sardina', pt: 'Sardinha', 'pt-br': 'Sardinha', fr: 'Sardine', de: 'Sardine', it: 'Sardina', ja: 'イワシ', zh: '沙丁鱼', ko: '정어리', ar: 'سردين' , hi: 'सार्डिन', ru: 'Сардина', tr: 'Sardalya', pl: 'Sardynka', cs: 'Sardinka', ro: 'Sardină'}, category: 'Seafood', unsplashQuery: 'sardine fish', sentence: 'Sardines are small, oily fish rich in omega-3 fatty acids, popular in Mediterranean cuisine grilled fresh or preserved in tins with olive oil.' },

  // Nature
  { id: '41', word: 'Sun', translations: { es: 'Sol', pt: 'Sol', 'pt-br': 'Sol', fr: 'Soleil', de: 'Sonne', it: 'Sole', ja: '太陽', zh: '太阳', ko: '태양', ar: 'شمس' , hi: 'रविवार', ru: 'Воскресенье', tr: 'Pazar', pl: 'Słońce', cs: 'Slunce', ro: 'Soare'}, category: 'Nature', unsplashQuery: 'sun sunrise', sentence: 'The Sun is the star at the center of our solar system, providing the light and heat that make life on Earth possible.' },
  { id: '42', word: 'Moon', translations: { es: 'Luna', pt: 'Lua', 'pt-br': 'Lua', fr: 'Lune', de: 'Mond', it: 'Luna', ja: '月', zh: '月亮', ko: '달', ar: 'قمر' , hi: 'चंद्रमा', ru: 'Луна', tr: 'Ay', pl: 'Księżyc', cs: 'Měsíc', ro: 'Luna'}, category: 'Nature', unsplashQuery: 'moon night', sentence: 'The Moon is Earth\'s only natural satellite, illuminating the night sky and driving ocean tides with its gravitational pull.' },
  { id: '43', word: 'Tree', translations: { es: 'Árbol', pt: 'Árvore', 'pt-br': 'Árvore', fr: 'Arbre', de: 'Baum', it: 'Albero', ja: '木', zh: '树', ko: '나무', ar: 'شجرة' , hi: 'पेड़', ru: 'Дерево', tr: 'Ağaç', pl: 'Drzewo', cs: 'Strom', ro: 'Copac'}, category: 'Nature', unsplashQuery: 'tree nature', sentence: 'Trees are tall woody plants with a single trunk, branches, and leaves, vital to ecosystems as they absorb carbon dioxide and produce oxygen.' },
  { id: '44', word: 'Flower', translations: { es: 'Flor', pt: 'Flor', 'pt-br': 'Flor', fr: 'Fleur', de: 'Blume', it: 'Fiore', ja: '花', zh: '花', ko: '꽃', ar: 'زهرة' , hi: 'फूल', ru: 'Цветок', tr: 'Çiçek', pl: 'Kwiat', cs: 'Květina', ro: 'Floare'}, category: 'Nature', unsplashQuery: 'flower bloom', sentence: 'Flowers are the colorful, often fragrant reproductive structures of flowering plants, serving to attract pollinators and bring beauty to gardens worldwide.' },
  { id: '45', word: 'Mountain', translations: { es: 'Montaña', pt: 'Montanha', 'pt-br': 'Montanha', fr: 'Montagne', de: 'Berg', it: 'Montagna', ja: '山', zh: '山', ko: '산', ar: 'جبل' , hi: 'पहाड़', ru: 'Гора', tr: 'Dağ', pl: 'Góra', cs: 'Hora', ro: 'Munte'}, category: 'Nature', unsplashQuery: 'mountain landscape', sentence: 'Mountains are large landforms that rise steeply above their surroundings, shaped over millions of years by tectonic forces and erosion.' },
  { id: '46', word: 'Ocean', translations: { es: 'Océano', pt: 'Oceano', 'pt-br': 'Oceano', fr: 'Océan', de: 'Ozean', it: 'Oceano', ja: '海', zh: '海洋', ko: '바다', ar: 'محيط' , hi: 'महासागर', ru: 'Океан', tr: 'Okyanus', pl: 'Ocean', cs: 'Oceán', ro: 'Oceanul'}, category: 'Nature', unsplashQuery: 'ocean waves', sentence: 'The ocean covers more than 70% of Earth\'s surface, regulating our climate, producing half the world\'s oxygen, and hosting countless species.' },
  { id: '47', word: 'Rain', translations: { es: 'Lluvia', pt: 'Chuva', 'pt-br': 'Chuva', fr: 'Pluie', de: 'Regen', it: 'Pioggia', ja: '雨', zh: '雨', ko: '비', ar: 'مطر' , hi: 'बारिश', ru: 'Дождь', tr: 'Yağmur', pl: 'Deszcz', cs: 'Déšť', ro: 'Ploaie'}, category: 'Nature', unsplashQuery: 'rain drops', sentence: 'Rain is liquid water that falls from clouds as part of the water cycle, essential for filling rivers and lakes and sustaining plant and animal life.' },
  { id: '48', word: 'Snow', translations: { es: 'Nieve', pt: 'Neve', 'pt-br': 'Neve', fr: 'Neige', de: 'Schnee', it: 'Neve', ja: '雪', zh: '雪', ko: '눈', ar: 'ثلج' , hi: 'बर्फ', ru: 'Снег', tr: 'Kar', pl: 'Śnieg', cs: 'Sníh', ro: 'Zăpadă'}, category: 'Nature', unsplashQuery: 'snow winter', sentence: 'Snow is frozen precipitation that falls as delicate ice crystals, blanketing landscapes in white and supplying crucial freshwater reserves.' },
  { id: '49', word: 'River', translations: { es: 'Río', pt: 'Rio', 'pt-br': 'Rio', fr: 'Rivière', de: 'Fluss', it: 'Fiume', ja: '川', zh: '河流', ko: '강', ar: 'نهر' , hi: 'नदी', ru: 'Река', tr: 'Nehir', pl: 'Rzeka', cs: 'Řeka', ro: 'Râu'}, category: 'Nature', unsplashQuery: 'river', sentence: 'A river is a large natural stream of fresh water flowing toward the sea, shaping landscapes and providing water for civilizations throughout history.' },
  { id: '50', word: 'Forest', translations: { es: 'Bosque', pt: 'Floresta', 'pt-br': 'Floresta', fr: 'Forêt', de: 'Wald', it: 'Foresta', ja: '森', zh: '森林', ko: '숲', ar: 'غابة' , hi: 'वन', ru: 'Лес', tr: 'Orman', pl: 'Las', cs: 'Les', ro: 'Pădure'}, category: 'Nature', unsplashQuery: 'forest', sentence: 'A forest is a dense area of trees and undergrowth covering vast regions of the earth, home to the majority of the planet\'s land-based biodiversity.' },
  { id: '51', word: 'Desert', translations: { es: 'Desierto', pt: 'Deserto', 'pt-br': 'Deserto', fr: 'Désert', de: 'Wüste', it: 'Deserto', ja: '砂漠', zh: '沙漠', ko: '사막', ar: 'صحراء' , hi: 'मरुभूमि', ru: 'Пустыня', tr: 'Çöl', pl: 'Pustynia', cs: 'Poušť', ro: 'Deșert'}, category: 'Nature', unsplashQuery: 'desert sand', sentence: 'A desert is an arid landscape that receives very little rainfall, found on every continent and home to surprisingly resilient plants and animals.' },
  { id: '52',  word: 'Cloud',   translations: { es: 'Nube',      pt: 'Nuvem', 'pt-br': 'Nuvem',     fr: 'Nuage',      de: 'Wolke',       it: 'Nuvola',    ja: '雲',     zh: '云',   ko: '구름', ar: 'سحابة' }, category: 'Nature', unsplashQuery: 'cloud sky', sentence: 'Clouds are masses of water droplets or ice crystals suspended in the atmosphere, shaping weather patterns and painting ever-changing skies.' },
  { id: '114', word: 'Juniper', translations: { es: 'Enebro',    pt: 'Zimbro', 'pt-br': 'Zimbro',    fr: 'Genévrier',  de: 'Wacholder',   it: 'Ginepro',   ja: 'ジュニパー', zh: '刺柏', ko: '향나무', ar: 'عرعر' , hi: 'जुनियर', ru: 'Можжевельник', tr: 'Ardıç', pl: 'Jałowiec', cs: 'Jalovec', ro: 'Ienupăr'}, category: 'Nature', unsplashQuery: 'juniper bush blue berries branches closeup', sentence: 'The juniper is an evergreen shrub or tree found in habitats from arctic tundra to warm deserts, producing fragrant blue-purple berries used to flavor gin.' },
  { id: '115', word: 'Violet',  translations: { es: 'Violeta',   pt: 'Violeta', 'pt-br': 'Violeta',   fr: 'Violette',   de: 'Veilchen',    it: 'Viola',     ja: 'スミレ',   zh: '紫罗兰', ko: '제비꽃', ar: 'بنفسج' }, category: 'Nature', unsplashQuery: 'viola odorata violet purple wildflower bloom', sentence: 'Violets are small, delicate wildflowers with distinctive purple, blue, or white petals, found in woodlands and gardens across the northern hemisphere.' },
  { id: '116', word: 'View',    translations: { es: 'Vista',     pt: 'Vista', 'pt-br': 'Vista',     fr: 'Vue',        de: 'Aussicht',    it: 'Vista',     ja: '景色',     zh: '景色', ko: '경치', ar: 'منظر' }, category: 'Nature', unsplashQuery: 'scenic view landscape', sentence: 'A view is the natural scenery seen from a particular vantage point — a sweep of mountains, coastline, or countryside that inspires awe.' },
  { id: '117', word: 'Zinc',    translations: { es: 'Zinc',      pt: 'Zinco', 'pt-br': 'Zinco',     fr: 'Zinc',       de: 'Zink',        it: 'Zinco',     ja: '亜鉛',     zh: '锌',   ko: '아연', ar: 'خارصين' }, category: 'Nature', unsplashQuery: 'zinc galvanized metal sheet industrial texture', sentence: 'Zinc is a bluish-silver metal element found naturally in the earth\'s crust, essential for immune function in living organisms and widely used in industry.' },
  { id: '118', word: 'Schist',  translations: { es: 'Esquisto',  pt: 'Xisto', 'pt-br': 'Xisto',     fr: 'Schiste',    de: 'Schiefer',    it: 'Scisto',    ja: '片岩',     zh: '片岩', ko: '편암', ar: 'صخر زلقي' }, category: 'Nature', unsplashQuery: 'schist metamorphic rock layers mica geology', sentence: 'Schist is a coarse-grained metamorphic rock formed under intense heat and pressure, characterized by its glittery layers of mica minerals.' },

  // Home
  { id: '53', word: 'Chair', translations: { es: 'Silla', pt: 'Cadeira', 'pt-br': 'Cadeira', fr: 'Chaise', de: 'Stuhl', it: 'Sedia', ja: '椅子', zh: '椅子', ko: '의자', ar: 'كرسي' , hi: 'अध्यक्ष', ru: 'Председатель', tr: 'Başkan', pl: 'Przewodniczący', cs: 'Předseda', ro: 'Președinte'}, category: 'Home', unsplashQuery: 'chair furniture', sentence: 'A chair is a single-seat piece of furniture with a back support, found in homes, offices, and cafes worldwide in countless styles and materials.' },
  { id: '54', word: 'Table', translations: { es: 'Mesa', pt: 'Mesa', 'pt-br': 'Mesa', fr: 'Table', de: 'Tisch', it: 'Tavolo', ja: 'テーブル', zh: '桌子', ko: '테이블', ar: 'طاولة' , hi: 'तालिका', ru: 'Таблица', tr: 'Tablo', pl: 'Tabela', cs: 'Tabulka', ro: 'Tabel'}, category: 'Home', unsplashQuery: 'table wood', sentence: 'A table is a flat-surfaced piece of furniture supported by legs, used for eating, working, and gathering in homes and public spaces.' },
  { id: '55', word: 'Bed', translations: { es: 'Cama', pt: 'Cama', 'pt-br': 'Cama', fr: 'Lit', de: 'Bett', it: 'Letto', ja: 'ベッド', zh: '床', ko: '침대', ar: 'سرير' , hi: 'बिस्तर', ru: 'Кровать', tr: 'Yatak', pl: 'Łóżko', cs: 'Postel', ro: 'Pat'}, category: 'Home', unsplashQuery: 'bed bedroom', sentence: 'A bed is a piece of furniture designed for sleeping, typically consisting of a mattress on a frame, found in every home across the world.' },
  { id: '56', word: 'Door', translations: { es: 'Puerta', pt: 'Porta', 'pt-br': 'Porta', fr: 'Porte', de: 'Tür', it: 'Porta', ja: 'ドア', zh: '门', ko: '문', ar: 'باب' , hi: 'दरवाज़ा', ru: 'Дверь', tr: 'Kapı', pl: 'Drzwi', cs: 'Dveře', ro: 'Ușă'}, category: 'Home', unsplashQuery: 'door entrance', sentence: 'A door is a movable barrier used to open and close the entrance of a building or room, providing privacy, security, and shelter.' },
  { id: '57', word: 'Window', translations: { es: 'Ventana', pt: 'Janela', 'pt-br': 'Janela', fr: 'Fenêtre', de: 'Fenster', it: 'Finestra', ja: '窓', zh: '窗户', ko: '창문', ar: 'نافذة' , hi: 'खिड़की', ru: 'Окно', tr: 'Pencere', pl: 'Okno', cs: 'Okno', ro: 'Fereastră'}, category: 'Home', unsplashQuery: 'window light', sentence: 'A window is an opening in a wall fitted with glass, allowing natural light and ventilation into a building while keeping out weather.' },
  { id: '58', word: 'Book', translations: { es: 'Libro', pt: 'Livro', 'pt-br': 'Livro', fr: 'Livre', de: 'Buch', it: 'Libro', ja: '本', zh: '书', ko: '책', ar: 'كتاب' , hi: 'पुस्तक', ru: 'Книга', tr: 'Kitap', pl: 'Książka', cs: 'Kniha', ro: 'Carte'}, category: 'Home', unsplashQuery: 'book reading', sentence: 'A book is a collection of written or printed pages bound together, one of humanity\'s most important inventions for sharing knowledge and stories.' },
  { id: '59', word: 'Lamp', translations: { es: 'Lámpara', pt: 'Lâmpada', 'pt-br': 'Lâmpada', fr: 'Lampe', de: 'Lampe', it: 'Lampada', ja: 'ランプ', zh: '灯', ko: '램프', ar: 'مصباح' , hi: 'दीपक', ru: 'Лампа', tr: 'Lamba', pl: 'Lampa', cs: 'Lampa', ro: 'Lampă'}, category: 'Home', unsplashQuery: 'lamp light', sentence: 'A lamp is a device that produces artificial light, from oil-burning antiques to modern electric fixtures that illuminate homes and streets.' },
  { id: '60', word: 'Sofa', translations: { es: 'Sofá', pt: 'Sofá', 'pt-br': 'Sofá', fr: 'Canapé', de: 'Sofa', it: 'Divano', ja: 'ソファ', zh: '沙发', ko: '소파', ar: 'أريكة' , hi: 'सोफा', ru: 'Диван', tr: 'Kanepe', pl: 'Sofa', cs: 'Pohovka', ro: 'Canapea'}, category: 'Home', unsplashQuery: 'sofa couch', sentence: 'A sofa is a comfortable upholstered seat with arms and a back, designed for multiple people to sit or lounge on together in a living room.' },
  { id: '61', word: 'Mirror', translations: { es: 'Espejo', pt: 'Espelho', 'pt-br': 'Espelho', fr: 'Miroir', de: 'Spiegel', it: 'Specchio', ja: '鏡', zh: '镜子', ko: '거울', ar: 'مرآة' , hi: 'दर्पण', ru: 'Зеркало', tr: 'Ayna', pl: 'Lustro', cs: 'Zrcadlo', ro: 'Oglindă'}, category: 'Home', unsplashQuery: 'mirror', sentence: 'A mirror is a smooth, reflective glass surface used to see one\'s own reflection, found in bathrooms, bedrooms, and as decorative pieces.' },
  { id: '62', word: 'Clock', translations: { es: 'Reloj', pt: 'Relógio', 'pt-br': 'Relógio', fr: 'Horloge', de: 'Uhr', it: 'Orologio', ja: '時計', zh: '时钟', ko: '시계', ar: 'ساعة' , hi: 'घड़ी', ru: 'Часы', tr: 'Saat', pl: 'Zegar', cs: 'Hodiny', ro: 'Ceas'}, category: 'Home', unsplashQuery: 'clock', sentence: 'A clock is a device that measures and displays time, from ancient sundials and mechanical pendulums to modern digital displays.' },

  // Transport
  { id: '63', word: 'Car', translations: { es: 'Coche', pt: 'Carro', 'pt-br': 'Carro', fr: 'Voiture', de: 'Auto', it: 'Auto', ja: '車', zh: '汽车', ko: '자동차', ar: 'سيارة' , hi: 'कार', ru: 'Автомобиль', tr: 'Araba', pl: 'Samochód', cs: 'Auto', ro: 'Mașină'}, category: 'Transport', unsplashQuery: 'car road', sentence: 'A car is a four-wheeled motor vehicle used for personal transportation, one of the most transformative inventions of the modern era.' },
  { id: '64', word: 'Bicycle', translations: { es: 'Bicicleta', pt: 'Bicicleta', 'pt-br': 'Bicicleta', fr: 'Vélo', de: 'Fahrrad', it: 'Bicicletta', ja: '自転車', zh: '自行车', ko: '자전거', ar: 'دراجة' , hi: 'साइकिल', ru: 'Велосипед', tr: 'Bisiklet', pl: 'Rower', cs: 'Jízdní kolo', ro: 'Bicicletă'}, category: 'Transport', unsplashQuery: 'bicycle', sentence: 'A bicycle is a human-powered two-wheeled vehicle, used worldwide for commuting, recreation, and sport — eco-friendly and endlessly practical.' },
  { id: '65', word: 'Airplane', translations: { es: 'Avión', pt: 'Avião', 'pt-br': 'Avião', fr: 'Avion', de: 'Flugzeug', it: 'Aereo', ja: '飛行機', zh: '飞机', ko: '비행기', ar: 'طائرة' , hi: 'विमान', ru: 'Самолет', tr: 'Uçak', pl: 'Samolot', cs: 'Letadlo', ro: 'Avion'}, category: 'Transport', unsplashQuery: 'airplane sky', sentence: 'An airplane is a powered aircraft with fixed wings that generates lift, allowing people and cargo to travel across continents in hours.' },
  { id: '66', word: 'Boat', translations: { es: 'Barco', pt: 'Barco', 'pt-br': 'Barco', fr: 'Bateau', de: 'Boot', it: 'Barca', ja: 'ボート', zh: '船', ko: '배', ar: 'قارب' , hi: 'नाव', ru: 'Лодка', tr: 'Tekne', pl: 'Łódź', cs: 'Loď', ro: 'Barcă'}, category: 'Transport', unsplashQuery: 'boat water', sentence: 'A boat is a watercraft used to travel across rivers, lakes, and seas, ranging from small rowing boats to large sailing vessels.' },
  { id: '67', word: 'Train', translations: { es: 'Tren', pt: 'Comboio', 'pt-br': 'Trem', fr: 'Train', de: 'Zug', it: 'Treno', ja: '電車', zh: '火车', ko: '기차', ar: 'قطار' , hi: 'ट्रेन', ru: 'Поезд', tr: 'Tren', pl: 'Pociąg', cs: 'Vlak', ro: 'Tren'}, category: 'Transport', unsplashQuery: 'train railway', sentence: 'A train is a series of connected carriages pulled by a locomotive along rails, offering efficient travel for passengers and freight over long distances.' },
  { id: '68', word: 'Bus', translations: { es: 'Autobús', pt: 'Autocarro', 'pt-br': 'Ônibus', fr: 'Bus', de: 'Bus', it: 'Autobus', ja: 'バス', zh: '公共汽车', ko: '버스', ar: 'حافلة' , hi: 'बस', ru: 'Автобус', tr: 'Otobüs', pl: 'Autobus', cs: 'Autobus', ro: 'Autobuz'}, category: 'Transport', unsplashQuery: 'bus city', sentence: 'A bus is a large road vehicle that carries many passengers along fixed routes, forming the backbone of public transport in cities worldwide.' },
  { id: '69', word: 'Motorcycle', translations: { es: 'Moto', pt: 'Moto', 'pt-br': 'Moto', fr: 'Moto', de: 'Motorrad', it: 'Moto', ja: 'バイク', zh: '摩托车', ko: '오토바이', ar: 'دراجة نارية' , hi: 'मोटरसाइकिल', ru: 'Мотоцикл', tr: 'Motosiklet', pl: 'Motocykl', cs: 'Motocykl', ro: 'Motocicletă'}, category: 'Transport', unsplashQuery: 'motorcycle', sentence: 'A motorcycle is a two-wheeled motor vehicle popular for its speed, agility, and fuel efficiency on both city streets and open roads.' },
  { id: '70', word: 'Helicopter', translations: { es: 'Helicóptero', pt: 'Helicóptero', 'pt-br': 'Helicóptero', fr: 'Hélicoptère', de: 'Hubschrauber', it: 'Elicottero', ja: 'ヘリコプター', zh: '直升机', ko: '헬리콥터', ar: 'مروحية' , hi: 'हेलीकॉप्टर', ru: 'Вертолёт', tr: 'Helikopter', pl: 'Helikopter', cs: 'Vrtulník', ro: 'Elicopter'}, category: 'Transport', unsplashQuery: 'helicopter', sentence: 'A helicopter is an aircraft with rotating blades that allow it to take off and land vertically, used for rescue missions, news coverage, and short trips.' },
  { id: '107', word: 'Tram',    translations: { es: 'Tranvía',    pt: 'Bonde', 'pt-br': 'Bonde',      fr: 'Tramway',    de: 'Straßenbahn', it: 'Tram',         ja: '路面電車', zh: '有轨电车', ko: '트램', ar: 'ترام' }, category: 'Transport', unsplashQuery: 'tram city', sentence: 'A tram is an electric rail vehicle that runs along tracks embedded in city streets, offering quiet and efficient urban public transport.' },
  { id: '108', word: 'E-Bike',  translations: { es: 'Bici eléctrica', pt: 'Bicicleta elétrica', 'pt-br': 'Bicicleta elétrica', fr: 'Vélo électrique', de: 'E-Bike', it: 'E-bike', ja: '電動自転車', zh: '电动自行车', ko: '전동 자전거', ar: 'دراجة كهربائية' }, category: 'Transport', unsplashQuery: 'electric bike', sentence: 'An e-bike is a bicycle with an integrated electric motor that assists pedalling, making cycling faster and easier, especially on hills and long commutes.' },
  { id: '109', word: 'Coach',   translations: { es: 'Autocar',    pt: 'Autocarro', 'pt-br': 'Ônibus', fr: 'Car',      de: 'Reisebus',   it: 'Pullman',      ja: '長距離バス', zh: '长途客车', ko: '코치 버스', ar: 'حافلة سياحية' }, category: 'Transport', unsplashQuery: 'coach bus', sentence: 'A coach is a large, comfortable long-distance bus used for tourism and intercity travel, typically offering reclining seats and onboard facilities.' },
  { id: '110', word: 'Lorry',   translations: { es: 'Camión',     pt: 'Camião', 'pt-br': 'Caminhão',   fr: 'Camion',     de: 'Lkw',         it: 'Camion',        ja: 'トラック',   zh: '卡车', ko: '트럭', ar: 'شاحنة' }, category: 'Transport', unsplashQuery: 'lorry truck', sentence: 'A lorry (truck) is a large heavy-duty motor vehicle designed to transport goods over roads, vital to supply chains and freight networks worldwide.' },

  // Colors
  { id: '71', word: 'Red', translations: { es: 'Rojo', pt: 'Vermelho', 'pt-br': 'Vermelho', fr: 'Rouge', de: 'Rot', it: 'Rosso', ja: '赤', zh: '红色', ko: '빨간색', ar: 'أحمر' , hi: 'लाल', ru: 'Красный', tr: 'Kırmızı', pl: 'Czerwony', cs: 'Červená', ro: 'Roșu'}, category: 'Colors', unsplashQuery: 'red color abstract', sentence: 'Red is a warm, vibrant primary color associated with passion, energy, and danger, and is one of the most eye-catching colors in the spectrum.' },
  { id: '72', word: 'Blue', translations: { es: 'Azul', pt: 'Azul', 'pt-br': 'Azul', fr: 'Bleu', de: 'Blau', it: 'Blu', ja: '青', zh: '蓝色', ko: '파란색', ar: 'أزرق' , hi: 'नीला', ru: 'Синий', tr: 'Mavi', pl: 'Niebieski', cs: 'Modrá', ro: 'Albastru'}, category: 'Colors', unsplashQuery: 'blue sky ocean', sentence: 'Blue is a cool, calming primary color found in clear skies and deep oceans, widely associated with trust, serenity, and depth.' },
  { id: '73', word: 'Green', translations: { es: 'Verde', pt: 'Verde', 'pt-br': 'Verde', fr: 'Vert', de: 'Grün', it: 'Verde', ja: '緑', zh: '绿色', ko: '초록색', ar: 'أخضر' , hi: 'हरित', ru: 'Зелёный', tr: 'Yeşil', pl: 'Zielony', cs: 'Zelená', ro: 'Verde'}, category: 'Colors', unsplashQuery: 'green nature forest', sentence: 'Green is the color of nature and plant life, symbolizing growth, freshness, and harmony, and is produced by mixing yellow and blue.' },
  { id: '74', word: 'Yellow', translations: { es: 'Amarillo', pt: 'Amarelo', 'pt-br': 'Amarelo', fr: 'Jaune', de: 'Gelb', it: 'Giallo', ja: '黄色', zh: '黄色', ko: '노란색', ar: 'أصفر' , hi: 'पीला', ru: 'Жёлтый', tr: 'Sarı', pl: 'Żółty', cs: 'Žlutá', ro: 'Galben'}, category: 'Colors', unsplashQuery: 'yellow sunflower', sentence: 'Yellow is a bright, cheerful primary color associated with sunshine and happiness, the warmest and most luminous of all hues.' },
  { id: '75', word: 'Purple', translations: { es: 'Morado', pt: 'Roxo', 'pt-br': 'Roxo', fr: 'Violet', de: 'Lila', it: 'Viola', ja: '紫', zh: '紫色', ko: '보라색', ar: 'بنفسجي' , hi: 'बैंगनी', ru: 'Фиолетовый', tr: 'Mor', pl: 'Fioletowy', cs: 'Fialová', ro: 'Violet'}, category: 'Colors', unsplashQuery: 'purple lavender', sentence: 'Purple is a rich secondary color made by mixing red and blue, historically associated with royalty and luxury due to the rarity of its natural dyes.' },
  { id: '76', word: 'Orange', translations: { es: 'Naranja', pt: 'Laranja', 'pt-br': 'Laranja', fr: 'Orange', de: 'Orange', it: 'Arancione', ja: 'オレンジ', zh: '橙色', ko: '주황색', ar: 'برتقالي' , hi: 'नारंगी', ru: 'Оранжевый', tr: 'Portakal', pl: 'Pomarańczowy', cs: 'Oranžová', ro: 'Portocaliu'}, category: 'Colors', unsplashQuery: 'orange color sunset', sentence: 'Orange is a warm secondary color produced by combining red and yellow, associated with energy, enthusiasm, and the glowing light of sunsets.' },
  { id: '77', word: 'Pink', translations: { es: 'Rosa', pt: 'Rosa', 'pt-br': 'Rosa', fr: 'Rose', de: 'Rosa', it: 'Rosa', ja: 'ピンク', zh: '粉色', ko: '분홍색', ar: 'وردي' , hi: 'गुलाबी', ru: 'Розовый', tr: 'Pembe', pl: 'Różowy', cs: 'Růžová', ro: 'Roz'}, category: 'Colors', unsplashQuery: 'pink flowers', sentence: 'Pink is a soft, gentle color created by mixing red and white, often associated with tenderness, romance, and the blooms of spring flowers.' },
  { id: '78', word: 'White', translations: { es: 'Blanco', pt: 'Branco', 'pt-br': 'Branco', fr: 'Blanc', de: 'Weiß', it: 'Bianco', ja: '白', zh: '白色', ko: '흰색', ar: 'أبيض' , hi: 'सफ़ेद', ru: 'Белый', tr: 'Beyaz', pl: 'Biały', cs: 'Bílá', ro: 'Alb'}, category: 'Colors', unsplashQuery: 'white snow minimal', sentence: 'White is the lightest color, reflecting all visible light wavelengths, and is associated with purity, cleanliness, and simplicity across many cultures.' },

  // Body
  { id: '79',  word: 'Hand',     translations: { es: 'Mano',    pt: 'Mão', 'pt-br': 'Mão',     fr: 'Main',     de: 'Hand',     it: 'Mano',      ja: '手',   zh: '手',   ko: '손',       ar: 'يد'    }, category: 'Body', unsplashQuery: 'human hand open palm', sentence: 'The hand is the body part at the end of the arm, with five fingers that allow humans to grasp, build, create, and communicate.' },
  { id: '80',  word: 'Eye',      translations: { es: 'Ojo',     pt: 'Olho', 'pt-br': 'Olho',    fr: 'Œil',      de: 'Auge',     it: 'Occhio',    ja: '目',   zh: '眼睛', ko: '눈',       ar: 'عين'   }, category: 'Body', unsplashQuery: 'eye closeup', sentence: 'The eye is the organ of vision, detecting light and color and sending visual information to the brain.' },
  { id: '81',  word: 'Nose',     translations: { es: 'Nariz',   pt: 'Nariz', 'pt-br': 'Nariz',   fr: 'Nez',      de: 'Nase',     it: 'Naso',      ja: '鼻',   zh: '鼻子', ko: '코',       ar: 'أنف'   }, category: 'Body', unsplashQuery: 'human nose face closeup', sentence: 'The nose is the organ of smell and a key part of the respiratory system, filtering and warming air as it enters the body.' },
  { id: '82',  word: 'Mouth',    translations: { es: 'Boca',    pt: 'Boca', 'pt-br': 'Boca',    fr: 'Bouche',   de: 'Mund',     it: 'Bocca',     ja: '口',   zh: '嘴巴', ko: '입',       ar: 'فم'    }, category: 'Body', unsplashQuery: 'human mouth lips smile', sentence: 'The mouth is the opening through which we eat, drink, breathe, and speak, beginning the digestive process with teeth and saliva.' },
  { id: '83',  word: 'Ear',      translations: { es: 'Oreja',   pt: 'Orelha', 'pt-br': 'Orelha',  fr: 'Oreille',  de: 'Ohr',      it: 'Orecchio',  ja: '耳',   zh: '耳朵', ko: '귀',       ar: 'أذن'   }, category: 'Body', unsplashQuery: 'human ear closeup', sentence: 'The ear is the organ of hearing and balance, detecting sound waves and transmitting them as nerve signals to the brain.' },
  { id: '84',  word: 'Hair',     translations: { es: 'Cabello', pt: 'Cabelo', 'pt-br': 'Cabelo',  fr: 'Cheveux',  de: 'Haar',     it: 'Capelli',   ja: '髪',   zh: '头发', ko: '머리카락', ar: 'شعر'   }, category: 'Body', unsplashQuery: 'hair', sentence: 'Hair grows from follicles in the skin and plays roles in warmth, protection, and personal identity across cultures.' },
  { id: '85',  word: 'Heart',    translations: { es: 'Corazón', pt: 'Coração', 'pt-br': 'Coração', fr: 'Cœur',     de: 'Herz',     it: 'Cuore',     ja: '心臓', zh: '心脏', ko: '심장',     ar: 'قلب'   }, category: 'Body', unsplashQuery: 'human heart anatomy', sentence: 'The heart is the muscular organ that pumps blood continuously throughout the body, beating about 100,000 times a day to sustain life.' },
  { id: '86',  word: 'Foot',     translations: { es: 'Pie',     pt: 'Pé', 'pt-br': 'Pé',      fr: 'Pied',     de: 'Fuß',      it: 'Piede',     ja: '足',   zh: '脚',   ko: '발',       ar: 'قدم'   }, category: 'Body', unsplashQuery: 'foot barefoot', sentence: "The foot bears the body's weight and enables walking, running, and balance on a variety of surfaces." },
  { id: 'b10', word: 'Arm',      translations: { es: 'Brazo',   pt: 'Braço', 'pt-br': 'Braço',   fr: 'Bras',     de: 'Arm',      it: 'Braccio',   ja: '腕',   zh: '手臂', ko: '팔',       ar: 'ذراع'  }, category: 'Body', unsplashQuery: 'human arm muscle', sentence: 'The arm is the upper limb of the body, connecting the shoulder to the hand and used for reaching, lifting, and carrying.' },
  { id: 'b11', word: 'Leg',      translations: { es: 'Pierna',  pt: 'Perna', 'pt-br': 'Perna',   fr: 'Jambe',    de: 'Bein',     it: 'Gamba',     ja: '脚',   zh: '腿',   ko: '다리',     ar: 'ساق'   }, category: 'Body', unsplashQuery: 'woman legs walking sunlight elegant bare skin', sentence: 'The leg is the lower limb of the body, supporting its weight and enabling movement from place to place.' },
  { id: 'b12', word: 'Finger',   translations: { es: 'Dedo',    pt: 'Dedo', 'pt-br': 'Dedo',    fr: 'Doigt',    de: 'Finger',   it: 'Dito',      ja: '指',   zh: '手指', ko: '손가락',   ar: 'إصبع'  }, category: 'Body', unsplashQuery: 'human finger hand close', sentence: 'Fingers are the five digits of the hand, essential for fine motor skills, touch, and performing countless daily tasks.' },
  { id: 'b13', word: 'Shoulder', translations: { es: 'Hombro',  pt: 'Ombro', 'pt-br': 'Ombro',   fr: 'Épaule',   de: 'Schulter', it: 'Spalla',    ja: '肩',   zh: '肩膀', ko: '어깨',     ar: 'كتف'   , hi: 'कंधा', ru: 'Плечо', tr: 'Omuz', pl: 'Ramię', cs: 'Rameno', ro: 'Umăr'}, category: 'Body', unsplashQuery: 'shoulder upper body', sentence: 'The shoulder is the joint connecting the arm to the torso, allowing the arm its wide range of rotational movement.' },
  { id: 'b14', word: 'Knee',     translations: { es: 'Rodilla', pt: 'Joelho', 'pt-br': 'Joelho',  fr: 'Genou',    de: 'Knie',     it: 'Ginocchio', ja: '膝',   zh: '膝盖', ko: '무릎',     ar: 'ركبة'  }, category: 'Body', unsplashQuery: 'knee joint leg', sentence: 'The knee is the largest joint in the body, connecting the thigh and lower leg and enabling walking, running, and jumping.' },
  { id: 'b15', word: 'Back',     translations: { es: 'Espalda', pt: 'Costas', 'pt-br': 'Costas',  fr: 'Dos',      de: 'Rücken',   it: 'Schiena',   ja: '背中', zh: '背部', ko: '등',       ar: 'ظهر'   }, category: 'Body', unsplashQuery: 'human back spine', sentence: 'The back extends from the neck to the hips and houses the spine, supporting the entire upper body and protecting the spinal cord.' },
  { id: 'b16', word: 'Chest',    translations: { es: 'Pecho',   pt: 'Peito', 'pt-br': 'Peito',   fr: 'Poitrine', de: 'Brust',    it: 'Petto',     ja: '胸',   zh: '胸部', ko: '가슴',     ar: 'صدر'   }, category: 'Body', unsplashQuery: 'chest torso upper body', sentence: 'The chest is the front part of the torso, enclosing the heart and lungs within the ribcage and enabling breathing.' },
  { id: 'b17', word: 'Neck',     translations: { es: 'Cuello',  pt: 'Pescoço', 'pt-br': 'Pescoço', fr: 'Cou',      de: 'Hals',     it: 'Collo',     ja: '首',   zh: '脖子', ko: '목',       ar: 'رقبة'  }, category: 'Body', unsplashQuery: 'neck shoulder human', sentence: 'The neck connects the head to the torso, containing the windpipe, food pipe, and major blood vessels supplying the brain.' },
  { id: 'b18', word: 'Thumb',    translations: { es: 'Pulgar',  pt: 'Polegar', 'pt-br': 'Polegar', fr: 'Pouce',    de: 'Daumen',   it: 'Pollice',   ja: '親指', zh: '拇指', ko: '엄지손가락', ar: 'إبهام' }, category: 'Body', unsplashQuery: 'thumb up hand', sentence: 'The thumb is the short, thick first digit of the hand whose opposable nature gives humans the ability to grip and use tools.' },
  { id: 'b19', word: 'Lip',      translations: { es: 'Labio',   pt: 'Lábio', 'pt-br': 'Lábio',   fr: 'Lèvre',    de: 'Lippe',    it: 'Labbro',    ja: '唇',   zh: '嘴唇', ko: '입술',     ar: 'شفة'   }, category: 'Body', unsplashQuery: 'beautiful lips red lipstick portrait closeup', sentence: 'The lips are the soft movable edges of the mouth, essential for speech, eating, kissing, and expressing a wide range of emotions.' },
  { id: 'b20', word: 'Tongue',   translations: { es: 'Lengua',  pt: 'Língua', 'pt-br': 'Língua',  fr: 'Langue',   de: 'Zunge',    it: 'Lingua',    ja: '舌',   zh: '舌头', ko: '혀',       ar: 'لسان'  }, category: 'Body', unsplashQuery: 'tongue taste buds macro closeup pink', sentence: 'The tongue is the muscular organ in the mouth that enables tasting, chewing, swallowing, and forming words when speaking.' },

  // Clothes
  { id: '87', word: 'Shirt', translations: { es: 'Camisa', pt: 'Camisa', 'pt-br': 'Camisa', fr: 'Chemise', de: 'Hemd', it: 'Camicia', ja: 'シャツ', zh: '衬衫', ko: '셔츠', ar: 'قميص' , hi: 'शर्ट', ru: 'Рубашка', tr: 'Gömlek', pl: 'Koszula', cs: 'Košile', ro: 'Cămașă'}, category: 'Clothes', unsplashQuery: 'shirt clothing', sentence: 'A shirt is a garment worn on the upper body, with or without a collar and buttons, one of the most universal items of clothing worldwide.' },
  { id: '88', word: 'Shoes', translations: { es: 'Zapatos', pt: 'Sapatos', 'pt-br': 'Sapatos', fr: 'Chaussures', de: 'Schuhe', it: 'Scarpe', ja: '靴', zh: '鞋子', ko: '신발', ar: 'حذاء' , hi: 'जूते', ru: 'Обувь', tr: 'Ayakkabılar', pl: 'Buty', cs: 'Boty', ro: 'Încălțăminte'}, category: 'Clothes', unsplashQuery: 'shoes', sentence: 'Shoes are footwear designed to protect and comfort the feet, made in styles ranging from leather dress shoes and sneakers to sandals and boots.' },
  { id: '89', word: 'Hat', translations: { es: 'Sombrero', pt: 'Chapéu', 'pt-br': 'Chapéu', fr: 'Chapeau', de: 'Hut', it: 'Cappello', ja: '帽子', zh: '帽子', ko: '모자', ar: 'قبعة' , hi: 'टोपी', ru: 'Шляпа', tr: 'Şapka', pl: 'Czapka', cs: 'Klobouk', ro: 'Pălărie'}, category: 'Clothes', unsplashQuery: 'hat', sentence: 'A hat is a head covering worn for protection from sun or cold, cultural expression, or fashion, found in diverse forms across every society.' },
  { id: '90', word: 'Dress', translations: { es: 'Vestido', pt: 'Vestido', 'pt-br': 'Vestido', fr: 'Robe', de: 'Kleid', it: 'Vestito', ja: 'ドレス', zh: '连衣裙', ko: '드레스', ar: 'فستان' , hi: 'पोशाक', ru: 'Платье', tr: 'Elbise', pl: 'Sukienka', cs: 'Šaty', ro: 'Rochie'}, category: 'Clothes', unsplashQuery: 'dress fashion', sentence: 'A dress is a one-piece garment for the upper and lower body, worn across cultures for everyday occasions, celebrations, and formal events.' },
  { id: '91', word: 'Jacket', translations: { es: 'Chaqueta', pt: 'Jaqueta', 'pt-br': 'Jaqueta', fr: 'Veste', de: 'Jacke', it: 'Giacca', ja: 'ジャケット', zh: '夹克', ko: '재킷', ar: 'جاكيت' , hi: 'जैकेट', ru: 'Куртка', tr: 'Ceket', pl: 'Kurtka', cs: 'Bunda', ro: 'Jachetă'}, category: 'Clothes', unsplashQuery: 'jacket', sentence: 'A jacket is an outer garment covering the upper body, worn for warmth and style in materials ranging from denim and leather to wool and down.' },
  { id: '92', word: 'Glasses', translations: { es: 'Gafas', pt: 'Óculos', 'pt-br': 'Óculos', fr: 'Lunettes', de: 'Brille', it: 'Occhiali', ja: 'メガネ', zh: '眼镜', ko: '안경', ar: 'نظارة' , hi: 'चश्मा', ru: 'Очки', tr: 'Gözlükler', pl: 'Okulary', cs: 'Brýle', ro: 'Ochelari'}, category: 'Clothes', unsplashQuery: 'glasses eyewear', sentence: 'Glasses are frames fitted with lenses worn in front of the eyes to correct vision or protect from sunlight, used by billions worldwide.' },

  // Sports
  { id: '93', word: 'Ball', translations: { es: 'Pelota', pt: 'Bola', 'pt-br': 'Bola', fr: 'Ballon', de: 'Ball', it: 'Palla', ja: 'ボール', zh: '球', ko: '공', ar: 'كرة' , hi: 'गेंद', ru: 'Мяч', tr: 'Top', pl: 'Piłka', cs: 'Míč', ro: 'Minge'}, category: 'Sports', unsplashQuery: 'ball sport', sentence: 'A ball is a round object used in dozens of sports and games worldwide, from football and basketball to tennis and cricket.' },
  { id: '94', word: 'Swimming', translations: { es: 'Natación', pt: 'Natação', 'pt-br': 'Natação', fr: 'Natation', de: 'Schwimmen', it: 'Nuoto', ja: '水泳', zh: '游泳', ko: '수영', ar: 'سباحة' , hi: 'तैराकी', ru: 'Плавание', tr: 'Yüzme', pl: 'Pływanie', cs: 'Plavání', ro: 'Înot'}, category: 'Sports', unsplashQuery: 'swimming pool', sentence: 'Swimming is a full-body sport and exercise performed in water, enjoyed recreationally and competitively in pools, lakes, and the ocean.' },
  { id: '95', word: 'Football', translations: { es: 'Fútbol', pt: 'Futebol', 'pt-br': 'Futebol', fr: 'Football', de: 'Fußball', it: 'Calcio', ja: 'サッカー', zh: '足球', ko: '축구', ar: 'كرة القدم' , hi: 'फुटबॉल', ru: 'Футбол', tr: 'Futbol', pl: 'Piłka nożna', cs: 'Fotbal', ro: 'Fotbal'}, category: 'Sports', unsplashQuery: 'football soccer', sentence: 'Football (soccer) is the world\'s most popular sport, played between two teams of eleven who kick a ball into the opposing goal on a large pitch.' },
  { id: '96', word: 'Tennis', translations: { es: 'Tenis', pt: 'Ténis', 'pt-br': 'Tênis', fr: 'Tennis', de: 'Tennis', it: 'Tennis', ja: 'テニス', zh: '网球', ko: '테니스', ar: 'تنس' , hi: 'टेनिस', ru: 'Теннис', tr: 'Tenis', pl: 'Tenis', cs: 'Tenis', ro: 'Tenis'}, category: 'Sports', unsplashQuery: 'tennis', sentence: 'Tennis is a racket sport played on a court where players hit a ball over a net, competing individually or in pairs at all levels from park to Grand Slam.' },
  { id: '97', word: 'Running', translations: { es: 'Correr', pt: 'Corrida', 'pt-br': 'Corrida', fr: 'Course', de: 'Laufen', it: 'Corsa', ja: 'ランニング', zh: '跑步', ko: '달리기', ar: 'الجري' , hi: 'दौड़ना', ru: 'Бег', tr: 'Koşma', pl: 'Bieganie', cs: 'Běh', ro: 'Alergare'}, category: 'Sports', unsplashQuery: 'running sport', sentence: 'Running is one of the simplest and most natural forms of exercise, practiced worldwide from casual joggers to elite marathon and track athletes.' },
  { id: '98', word: 'Yoga', translations: { es: 'Yoga', pt: 'Yoga', 'pt-br': 'Yoga', fr: 'Yoga', de: 'Yoga', it: 'Yoga', ja: 'ヨガ', zh: '瑜伽', ko: '요가', ar: 'يوغا' , hi: 'योग', ru: 'Йога', tr: 'Yoga', pl: 'Joga', cs: 'Jóga', ro: 'Yoga'}, category: 'Sports', unsplashQuery: 'yoga', sentence: 'Yoga is an ancient Indian practice combining physical postures, breathing exercises, and meditation to improve strength, flexibility, and mental calm.' },

];

export const ALL_WORDS: Word[] = [...WORDS, ...GASTRONOMY_WORDS, ...SCHOOL_WORDS, ...WINE_WORDS, ...TIME_WORDS, ...HOLIDAY_WORDS, ...PT_VOCAB_WORDS, ...WORLD_DISH_WORDS, ...RECIPE_INGREDIENT_WORDS, ...EUROPEAN_DISH_WORDS, ...EUROPEAN_INGREDIENT_WORDS, ...EASTERN_EUROPEAN_DISH_WORDS, ...EASTERN_EUROPEAN_INGREDIENT_WORDS, ...AFRICAN_DISH_WORDS, ...AFRICAN_INGREDIENT_WORDS, ...ASIAN_DISH_WORDS, ...ASIAN_INGREDIENT_WORDS, ...OCEANIA_DISH_WORDS, ...OCEANIA_INGREDIENT_WORDS, ...SOUTH_AMERICAN_DISH_WORDS, ...SOUTH_AMERICAN_INGREDIENT_WORDS, ...CENTRAL_AMERICAN_DISH_WORDS, ...CENTRAL_AMERICAN_INGREDIENT_WORDS, ...NORTH_AMERICAN_DISH_WORDS, ...NORTH_AMERICAN_INGREDIENT_WORDS, ...MIDDLE_EASTERN_DISH_WORDS, ...MIDDLE_EASTERN_INGREDIENT_WORDS, ...ISLAND_DISH_WORDS, ...ISLAND_INGREDIENT_WORDS, ...WORLD_DESSERT_WORDS, ...WORLD_DRINK_WORDS, ...HOME_WORDS, ...TRANSPORT_WORDS, ...COLOR_WORDS, ...CLOTHES_WORDS, ...SPORT_WORDS, ...MEAT_WORDS, ...HERB_SPICE_WORDS, ...CONDIMENT_WORDS, ...NUT_LEGUME_WORDS, ...ITALIAN_CUISINE_WORDS, ...FRENCH_CUISINE_WORDS, ...SPANISH_CUISINE_WORDS, ...PORTUGUESE_CUISINE_WORDS, ...JAPANESE_CUISINE_WORDS, ...INDIAN_CUISINE_WORDS, ...CHINESE_CUISINE_WORDS, ...MEXICAN_CUISINE_WORDS, ...GREEK_CUISINE_WORDS, ...TURKISH_CUISINE_WORDS, ...GERMAN_CUISINE_WORDS, ...KOREAN_CUISINE_WORDS, ...THAI_CUISINE_WORDS, ...VIETNAMESE_CUISINE_WORDS, ...BRAZILIAN_CUISINE_WORDS, ...MOROCCAN_CUISINE_WORDS, ...LEBANESE_CUISINE_WORDS, ...IRISH_CUISINE_WORDS, ...SCOTTISH_CUISINE_WORDS, ...ENGLISH_CUISINE_WORDS, ...SWEDISH_CUISINE_WORDS, ...ROMANIAN_CUISINE_WORDS, ...PERUVIAN_CUISINE_WORDS, ...MALAYSIAN_CUISINE_WORDS, ...HUNGARIAN_CUISINE_WORDS, ...ETHIOPIAN_CUISINE_WORDS, ...BULGARIAN_CUISINE_WORDS, ...BELGIAN_CUISINE_WORDS, ...ARGENTINE_CUISINE_WORDS, ...INDONESIAN_CUISINE_WORDS, ...IRANIAN_CUISINE_WORDS, ...UKRAINIAN_CUISINE_WORDS, ...ARMENIAN_CUISINE_WORDS, ...AUSTRIAN_CUISINE_WORDS, ...CZECH_CUISINE_WORDS, ...DANISH_CUISINE_WORDS, ...DUTCH_CUISINE_WORDS, ...EAST_AFRICAN_CUISINE_WORDS, ...FILIPINO_CUISINE_WORDS, ...GHANAIAN_CUISINE_WORDS, ...NORWEGIAN_CUISINE_WORDS, ...SWISS_CUISINE_WORDS, ...TUNISIAN_CUISINE_WORDS, ...WELSH_CUISINE_WORDS, ...FINNISH_CUISINE_WORDS, ...ICELANDIC_CUISINE_WORDS, ...JAMAICAN_CUISINE_WORDS, ...SENEGALESE_CUISINE_WORDS, ...CHILEAN_CUISINE_WORDS, ...COLOMBIAN_CUISINE_WORDS, ...CUBAN_CUISINE_WORDS, ...HAWAIIAN_CUISINE_WORDS, ...SRI_LANKAN_CUISINE_WORDS, ...ALGERIAN_CUISINE_WORDS, ...CAMBODIAN_CUISINE_WORDS, ...GUATEMALAN_CUISINE_WORDS, ...ISRAELI_CUISINE_WORDS, ...IVORIAN_CUISINE_WORDS, ...PAKISTANI_CUISINE_WORDS, ...SAUDI_CUISINE_WORDS, ...SINGAPOREAN_CUISINE_WORDS, ...TAIWANESE_CUISINE_WORDS, ...VENEZUELAN_CUISINE_WORDS, ...BALKAN_CUISINE_WORDS, ...BALTIC_CUISINE_WORDS, ...ALASKAN_CUISINE_WORDS, ...VERBS_WORDS, ...EMOTIONS_WORDS, ...ADJECTIVES_WORDS, ...NUMBERS_WORDS, ...SHAPES_WORDS, ...FAMILY_WORDS, ...OCCUPATIONS_WORDS, ...WEATHER_WORDS, ...TECHNOLOGY_WORDS, ...DOCTOR_WORDS, ...BANK_WORDS, ...RENTING_WORDS, ...WORK_LIFE_WORDS, ...ADMIN_WORDS, ...EMERGENCY_WORDS, ...TRAVEL_ESSENTIALS_WORDS];

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
  'Drinks', 'Desserts', 'Kitchen',
]);

const GENERAL_CATS = new Set([
  'Animals', 'Nature', 'Colors', 'Home', 'School', 'Time', 'Holidays',
  'Concepts', 'Transport', 'Clothes', 'Seasons', 'Sports',
  'Months', 'Numbers', 'Body', 'Feelings', 'Weather',
  'At the Doctor', 'Banking', 'Renting a Home', 'Work & Jobs', 'Government & Admin', 'Emergency', 'Travel Essentials',
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
