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
import { loadPhotos, pickGallery } from './seo-photos.mjs';

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
  // ── Added in the second SEO round ──
  { name: 'Government & Admin', group: 'Moving', emoji: '🛂', blurb: 'The words you need for paperwork when you move abroad: visas, residence permits, registrations and appointments at the town hall.', featured: ['passport', 'visa', 'residence permit', 'driving licence', 'embassy', 'city hall', 'form', 'appointment'] },
  { name: 'Banking', group: 'Moving', emoji: '🏦', blurb: 'Words for opening an account, reading a statement, using a cash machine and asking about transfers and loans.', featured: ['bank', 'account', 'card', 'ATM', 'transfer', 'mortgage', 'loan', 'savings'] },
  { name: 'At the Doctor', group: 'Moving', emoji: '🩺', blurb: 'Words for a visit to the doctor or pharmacy: describing symptoms, asking for a prescription and understanding the answer.', featured: ['doctor', 'hospital', 'nurse', 'prescription', 'pharmacy', 'fever', 'allergy', 'ambulance'] },
  { name: 'Emergency', group: 'Moving', emoji: '🚨', blurb: 'Words to call for help and describe what has happened in an emergency. Worth learning before you need them.', featured: ['help', 'police', 'fire brigade', 'ambulance', 'fire', 'accident', 'first aid', 'lost'] },
  { name: 'Renting a Home', group: 'Moving', emoji: '🔑', blurb: 'Words for finding a flat, reading a lease and talking to a landlord about rent, deposits and bills.', featured: ['landlord', 'tenant', 'lease', 'rent', 'deposit', 'utilities', 'furnished', 'flat'] },
  { name: 'Work & Jobs', group: 'Moving', emoji: '💼', blurb: 'Words for looking for work and starting a job abroad: CVs, interviews, contracts, salary and time off.', featured: ['CV', 'interview', 'contract', 'salary', 'payslip', 'colleague', 'manager', 'sick leave'] },
  { name: 'Supermarket', group: 'Moving', emoji: '🛒', blurb: 'Words you will see and hear while shopping for groceries: aisles, checkouts, receipts, discounts and expiry dates.', featured: ['trolley', 'basket', 'aisle', 'checkout', 'receipt', 'discount', 'expiry date', 'queue'] },
  { name: 'Travel Essentials', group: 'Moving', emoji: '✈️', blurb: 'Words for airports, hotels and getting around when you travel.', featured: ['airport', 'boarding pass', 'luggage', 'customs', 'hotel', 'ticket', 'map', 'currency'] },
  { name: 'Body Parts', group: 'Language', emoji: '🫀', dataCats: ['Body'], featured: ['hand', 'eye', 'nose', 'mouth', 'ear', 'heart', 'foot', 'arm'] },
  { name: 'Bathroom', group: 'Language', emoji: '🚿', featured: ['toilet', 'sink', 'shower', 'towel', 'toothbrush', 'soap', 'shampoo', 'toothpaste'] },
  { name: 'Cooking and Restaurant', group: 'Moving', emoji: '👩‍🍳', dataCats: ['Concepts'], noGallery: true, blurb: 'Words for tasting, cooking and eating out: flavours, textures, recipes, reservations, receipts and leftovers.', featured: ['Recipe', 'Tasty', 'Fresh', 'Flavour', 'Leftovers', 'Reservation', 'To Recommend', 'To Slice'] },
  { name: 'Kitchen', group: 'Language', emoji: '🍳', featured: ['knife', 'fork', 'spoon', 'bowl', 'pan', 'oven', 'fridge', 'kettle'] },
  { name: 'Car', group: 'Language', emoji: '🔧', featured: ['steering wheel', 'seat belt', 'headlights', 'tyre', 'engine', 'windscreen', 'horn', 'number plate'] },
  { name: 'Plants', group: 'Language', emoji: '🌷', featured: ['rose', 'sunflower', 'cactus', 'tulip', 'lavender', 'bamboo', 'orchid', 'daisy'] },
  { name: 'Bread & Grains', group: 'Ingredients', emoji: '🍞', featured: ['bread', 'rice', 'pasta', 'noodles', 'flour', 'oats', 'quinoa', 'bagel'] },
  { name: 'Dairy & Eggs', group: 'Ingredients', emoji: '🧀', featured: ['egg', 'milk', 'cheese', 'butter', 'yogurt', 'cream', 'mozzarella', 'parmesan'] },
  { name: 'Dishes', group: 'Ingredients', emoji: '🍽️', featured: ['pizza', 'soup', 'salad', 'sandwich', 'paella', 'stew', 'meatball', 'toast'] },
  { name: 'Irish Cuisine', group: 'Cuisine', emoji: '🇮🇪', noLang: true, featured: ['Irish Stew', 'Soda Bread', 'Colcannon', 'Boxty'] },
  { name: 'Australian Cuisine', group: 'Cuisine', emoji: '🇦🇺', noLang: true, featured: ['Meat Pie', 'Lamington', 'Pavlova', 'Sausage Roll'] },
  { name: 'Romanian Cuisine', group: 'Cuisine', emoji: '🇷🇴', noLang: true, featured: ['Sarmale', 'Mămăligă', 'Cozonac', 'Papanași'] },
  { name: 'Balkan Cuisine', group: 'Cuisine', emoji: '🥘', noLang: true, featured: ['Ćevapi', 'Burek', 'Ajvar', 'Sarma'] },
  { name: 'Bulgarian Cuisine', group: 'Cuisine', emoji: '🇧🇬', noLang: true, featured: ['Banitsa', 'Shopska Salad', 'Tarator', 'Kebapche'] },
  { name: 'Hungarian Cuisine', group: 'Cuisine', emoji: '🇭🇺', noLang: true, featured: ['Gulyás', 'Lángos', 'Pörkölt', 'Kürtőskalács'] },
  { name: 'Swedish Cuisine', group: 'Cuisine', emoji: '🇸🇪', noLang: true, featured: ['Köttbullar', 'Smörgåsbord', 'Gravlax', 'Kanelbulle'] },
  { name: 'New Zealand Cuisine', group: 'Cuisine', emoji: '🇳🇿', noLang: true, featured: ['Hāngī', 'Pāua', 'Whitebait Fritters', 'Hokey Pokey Ice Cream'] },
  { name: 'Ethiopian Cuisine', group: 'Cuisine', emoji: '🇪🇹', noLang: true, featured: ['Injera', 'Doro Wat', 'Tibs', 'Kitfo'] },
  { name: 'Russian Cuisine', group: 'Cuisine', emoji: '🇷🇺', noLang: true, featured: ['Pelmeni', 'Beef Stroganoff', 'Blini', 'Olivier Salad'] },
  { name: 'Tunisian Cuisine', group: 'Cuisine', emoji: '🇹🇳', noLang: true, featured: ['Harissa', 'Brik', 'Couscous Tunisien', 'Merguez'] },
  { name: 'Indonesian Cuisine', group: 'Cuisine', emoji: '🇮🇩', noLang: true, featured: ['Nasi Goreng', 'Rendang', 'Satay', 'Gado-Gado'] },
  { name: 'Czech Cuisine', group: 'Cuisine', emoji: '🇨🇿', noLang: true, featured: ['Svíčková', 'Trdelník', 'Guláš', 'Knedlíky'] },
  { name: 'Ukrainian Cuisine', group: 'Cuisine', emoji: '🇺🇦', noLang: true, featured: ['Borscht', 'Varenyky', 'Chicken Kyiv', 'Holubtsi'] },
  { name: 'Polish Cuisine', group: 'Cuisine', emoji: '🇵🇱', noLang: true, featured: ['Pierogi', 'Bigos', 'Żurek', 'Kiełbasa'] },
  { name: 'Canadian Cuisine', group: 'Cuisine', emoji: '🇨🇦', noLang: true, featured: ['Poutine', 'Butter Tarts', 'Nanaimo Bars', 'Tourtière'] },
  { name: 'Peruvian Cuisine', group: 'Cuisine', emoji: '🇵🇪', noLang: true, featured: ['Ceviche', 'Lomo Saltado', 'Pisco Sour', 'Anticucho'] },
  { name: 'Egyptian Cuisine', group: 'Cuisine', emoji: '🇪🇬', noLang: true, featured: ['Koshari', 'Ful Medames', 'Om Ali', 'Basbousa'] },
  { name: 'Nigerian Cuisine', group: 'Cuisine', emoji: '🇳🇬', noLang: true, featured: ['Jollof Rice', 'Suya', 'Egusi Soup', 'Puff Puff'] },
  { name: 'Ghanaian Cuisine', group: 'Cuisine', emoji: '🇬🇭', noLang: true, featured: ['Jollof Rice', 'Fufu', 'Waakye', 'Kelewele'] },
  { name: 'East African Cuisine', group: 'Cuisine', emoji: '🌍', noLang: true, featured: ['Ugali', 'Nyama Choma', 'Pilau', 'Mandazi'] },
  { name: 'South African Cuisine', group: 'Cuisine', emoji: '🇿🇦', noLang: true, featured: ['Boerewors', 'Biltong', 'Bobotie', 'Bunny Chow'] },
  { name: 'Baltic Cuisine', group: 'Cuisine', emoji: '🌲', noLang: true, featured: ['Black Bread', 'Cepelinai', 'Kvass', 'Kama'] },
  { name: 'Belgian Cuisine', group: 'Cuisine', emoji: '🇧🇪', noLang: true, featured: ['Moules-Frites', 'Belgian Waffle', 'Belgian Chocolate', 'Speculoos'] },
  { name: 'Georgian Cuisine', group: 'Cuisine', emoji: '🇬🇪', noLang: true, featured: ['Khachapuri', 'Khinkali', 'Churchkhela', 'Satsivi'] },
  { name: 'Norwegian Cuisine', group: 'Cuisine', emoji: '🇳🇴', noLang: true, featured: ['Lutefisk', 'Lefse', 'Brunost', 'Fårikål'] },
  { name: 'Iranian Cuisine', group: 'Cuisine', emoji: '🇮🇷', noLang: true, featured: ['Ghormeh Sabzi', 'Fesenjan', 'Tahdig', 'Persian Tea'] },
  { name: 'Malaysian Cuisine', group: 'Cuisine', emoji: '🇲🇾', noLang: true, featured: ['Nasi Lemak', 'Laksa', 'Roti Canai', 'Teh Tarik'] },
  { name: 'Argentine Cuisine', group: 'Cuisine', emoji: '🇦🇷', noLang: true, featured: ['Asado', 'Empanada', 'Chimichurri', 'Dulce de Leche'] },
  { name: 'Armenian Cuisine', group: 'Cuisine', emoji: '🇦🇲', noLang: true, featured: ['Lavash', 'Dolma', 'Khorovats', 'Basturma'] },
  { name: 'Austrian Cuisine', group: 'Cuisine', emoji: '🇦🇹', noLang: true, featured: ['Wiener Schnitzel', 'Sachertorte', 'Apfelstrudel', 'Kaiserschmarrn'] },
  { name: 'Danish Cuisine', group: 'Cuisine', emoji: '🇩🇰', noLang: true, featured: ['Smørrebrød', 'Frikadeller', 'Æbleskiver', 'Rugbrød'] },
  { name: 'Dutch Cuisine', group: 'Cuisine', emoji: '🇳🇱', noLang: true, featured: ['Stroopwafel', 'Bitterballen', 'Poffertjes', 'Stamppot'] },
  { name: 'Icelandic Cuisine', group: 'Cuisine', emoji: '🇮🇸', noLang: true, featured: ['Skyr', 'Hákarl', 'Kleinur', 'Pylsur'] },
  { name: 'Algerian Cuisine', group: 'Cuisine', emoji: '🇩🇿', noLang: true, featured: ['Rechta', 'Bourek', 'Makrout', 'Chakhchoukha'] },
  { name: 'Senegalese Cuisine', group: 'Cuisine', emoji: '🇸🇳', noLang: true, featured: ['Thiéboudienne', 'Yassa Poulet', 'Mafé', 'Bissap'] },
  { name: 'Alaskan Cuisine', group: 'Cuisine', emoji: '🏔️', noLang: true, featured: ['King Crab', 'Halibut', 'Akutaq', 'Moose Stew'] },
  { name: 'Filipino Cuisine', group: 'Cuisine', emoji: '🇵🇭', noLang: true, featured: ['Adobo', 'Lumpia', 'Sinigang', 'Halo-Halo'] },
  { name: 'Jamaican Cuisine', group: 'Cuisine', emoji: '🇯🇲', noLang: true, featured: ['Jerk Chicken', 'Ackee and Saltfish', 'Patty', 'Rum Punch'] },
  { name: 'Swiss Cuisine', group: 'Cuisine', emoji: '🇨🇭', noLang: true, featured: ['Fondue', 'Raclette', 'Rösti', 'Swiss Chocolate'] },
  { name: 'Finnish Cuisine', group: 'Cuisine', emoji: '🇫🇮', noLang: true, featured: ['Karelian Pasty', 'Lohikeitto', 'Rye Bread', 'Salmiak'] },
  { name: 'Hawaiian Cuisine', group: 'Cuisine', emoji: '🌺', noLang: true, featured: ['Poke', 'Loco Moco', 'Shave Ice', 'Haupia'] },
  { name: 'Latin American and Caribbean Food', group: 'Cuisine', emoji: '🌎', noLang: true, merged: true, dataCats: ['Guatemalan Cuisine', 'Cuban Cuisine', 'Colombian Cuisine', 'Chilean Cuisine', 'Venezuelan Cuisine', 'Salvadoran Cuisine', 'Honduran Cuisine', 'Nicaraguan Cuisine', 'Costa Rican Cuisine', 'Trinidadian Cuisine', 'Puerto Rican Cuisine', 'Haitian Cuisine', 'Bolivian Cuisine', 'Ecuadorian Cuisine', 'Panamanian Cuisine', 'Dominican Cuisine', 'Barbadian Cuisine', 'Uruguayan Cuisine', 'Paraguayan Cuisine'], featured: ['Gallo Pinto', 'Pupusas', 'Ropa Vieja', 'Arepa'] },
  { name: 'African and Indian Ocean Food', group: 'Cuisine', emoji: '🌍', noLang: true, merged: true, dataCats: ['Ivorian Cuisine', 'Mozambican Cuisine', 'Angolan Cuisine', 'Cape Verdean Cuisine', 'Mauritian Cuisine', 'Réunion Cuisine', 'Seychellois Cuisine'], featured: ['Piri-Piri Chicken', 'Cachupa', 'Attiéké', 'Dholl Puri'] },
  { name: 'Middle Eastern and Cypriot Food', group: 'Cuisine', emoji: '🕌', noLang: true, merged: true, dataCats: ['Israeli Cuisine', 'Saudi Cuisine', 'Iraqi Cuisine', 'Yemeni Cuisine', 'Omani Cuisine', 'Palestinian Cuisine', 'Jordanian Cuisine', 'Cypriot Cuisine'], featured: ['Shakshuka', 'Hummus', 'Falafel', 'Kabsa'] },
  { name: 'Other Asian Food', group: 'Cuisine', emoji: '🥢', noLang: true, merged: true, dataCats: ['Sri Lankan Cuisine', 'Singaporean Cuisine', 'Taiwanese Cuisine', 'Cambodian Cuisine', 'Pakistani Cuisine', 'Burmese Cuisine', 'Nepalese Cuisine', 'Mongolian Cuisine'], featured: ['Bubble Tea', 'Momo', 'Chilli Crab', 'Mohinga'] },
  { name: 'Pacific, Arctic and Island Food', group: 'Cuisine', emoji: '🏝️', noLang: true, merged: true, dataCats: ['Greenlandic Cuisine', 'Faroese Cuisine', 'Fijian Cuisine', 'Samoan Cuisine', 'Polynesian Cuisine', 'Vanuatu Cuisine', 'Maltese Cuisine'], featured: ['Pastizzi', 'Fenkata', 'Lap Lap', 'Kokoda'] },
];

const GROUP_LABELS = {
  Language: 'Everyday vocabulary',
  Cuisine: 'Food by cuisine',
  Moving: 'Living in a new country',
  Ingredients: 'Ingredients, dishes and drinks',
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
    case 'Moving':      return { bg: '#ecfeff', accent: '#0891b2', dark: '#155e75' };
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

const LEARN_INDEX_URL = `${SITE_URL}/learn`;
function topicUrl(cat) { return `${SITE_URL}/learn/${slugify(cat.name)}`; }
function langHubUrl(lang) { return `${SITE_URL}/learn/${lang.slug}`; }
function langTopicUrl(lang, cat) { return `${SITE_URL}/learn/${lang.slug}/${slugify(cat.name)}`; }
function appUrlFor(cat) {
  if (cat.merged) return SITE_URL;
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
const PHOTO_STORE = loadPhotos(ROOT);
const GALLERY_CACHE = new Map();
/** The photos shown on a topic's pages (same set on the English page and every language page). */
function galleryOf(topic) {
  if (topic.noGallery) return [];
  if (!GALLERY_CACHE.has(topic.slug ?? topic.name)) {
    const g = pickGallery(topic.words, PHOTO_STORE, 6);
    GALLERY_CACHE.set(topic.slug ?? topic.name, g.length >= 3 ? g : []);
  }
  return GALLERY_CACHE.get(topic.slug ?? topic.name);
}

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
    .article .blurb { max-width: none; margin-bottom: 1.4rem; font-size: 1.02rem; }
    .article .blurb a { color: #4f46e5; text-decoration: underline; }
    .article .section-title { margin-top: 0.4rem; }
    ol.steps { margin: 0 0 1.8rem 1.25rem; color: #334155; line-height: 1.6; font-size: 1.02rem; }
    ol.steps li { margin-bottom: 0.6rem; }
    .gallery { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.7rem; margin: 0 0 2rem; }
    @media (min-width: 640px) { .gallery { grid-template-columns: repeat(3, 1fr); gap: 0.9rem; } }
    .gallery figure { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
    .gallery img { display: block; width: 100%; height: auto; aspect-ratio: 4 / 3; object-fit: cover; background: #e2e8f0; }
    .gallery figcaption { padding: 0.5rem 0.65rem 0.65rem; font-size: 0.74rem; overflow-wrap: anywhere; color: #64748b; line-height: 1.4; }
    .gallery figcaption strong { display: block; font-size: 0.95rem; color: #0f172a; margin-bottom: 0.15rem; }
    .gallery figcaption a { color: #475569; text-decoration: underline; }
    .gallery-note { font-size: 0.78rem; color: #64748b; margin: -1.2rem 0 2rem; }
    .gallery-note a { color: ${color.accent}; text-decoration: underline; }
    .blurb { max-width: 46rem; margin: 0 0 1.1rem; color: #475569; line-height: 1.6; }
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
    .vocab td.origin { color: #64748b; font-size: 0.9rem; white-space: nowrap; }
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
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
  <p>© ${new Date().getFullYear()} <a href="${SITE_URL}">${SITE_NAME}</a> · Free visual vocabulary learning · 3,000+ words · 42 languages</p>
  <p style="margin-top:0.5rem"><a href="${LEARN_INDEX_URL}">All topics</a> · <a href="${SITE_URL}/learn/visual-vocabulary">Visual vocabulary</a> · <a href="${SITE_URL}/learn/learn-words-with-pictures">Learn words with pictures</a></p>
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

function getRelated(cat, forLang = false) {
  const pool = forLang ? TOPICS.filter(c => !c.noLang) : TOPICS;
  // Same group: the four topics that follow this one (wrapping round), so every page gets different neighbours.
  const group = pool.filter(c => c.group === cat.group);
  const at = group.findIndex(c => c.name === cat.name);
  const sameGroup = [];
  for (let i = 1; i < group.length && sameGroup.length < 4; i++) sameGroup.push(group[(Math.max(at, 0) + i) % group.length]);
  // Other groups: one or two from each, in a stable order.
  const others = [];
  for (const g of ['Language', 'Moving', 'Ingredients', 'Cuisine', 'Wine']) {
    if (g === cat.group) continue;
    const list = pool.filter(c => c.group === g);
    if (list.length) others.push(list[0]);
  }
  return [...sameGroup, ...others.slice(0, 3)].slice(0, 7);
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

/** Photo gallery with visible author, licence and source for every picture. `label(p)` gives the caption words. */
function galleryHtml(topic, heading, label) {
  const items = galleryOf(topic).map(p => ({ p, cap: label(p) })).filter(x => x.cap);
  if (items.length < 3) return '';
  const figs = items.map(({ p, cap }) => `    <figure>
      <img src="${htmlEncode(p.src)}" alt="${htmlEncode(cap.alt)}" width="500" height="375" loading="lazy" decoding="async">
      <figcaption><strong>${htmlEncode(cap.main)}</strong>${cap.sub ? htmlEncode(cap.sub) + '<br>' : ''}Photo: ${htmlEncode(p.author)} · <a href="${htmlEncode(p.licenseUrl)}" rel="license noopener" target="_blank">${htmlEncode(p.license)}</a> · <a href="${htmlEncode(p.pageUrl)}" rel="noopener" target="_blank">Source</a></figcaption>
    </figure>`).join('\n');
  return `
  <h2 class="section-title">📸 ${htmlEncode(heading)}</h2>
  <div class="gallery">
${figs}
  </div>
  <p class="gallery-note">Photos from Wikimedia Commons, shown under their open licences. <a href="${SITE_URL}/credits">All photo credits</a>.</p>
`;
}

function imageLd(topic, label) {
  return galleryOf(topic).filter(p => label(p)).map(p => ({
    '@type': 'ImageObject',
    contentUrl: p.src,
    name: label(p).alt,
    creditText: `${p.author}, ${p.license}`,
    creator: { '@type': 'Person', name: p.author },
    license: p.licenseUrl,
    acquireLicensePage: p.pageUrl,
  }));
}

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
    const origin = topic.merged ? `<td class="origin">${htmlEncode(w.category.replace(/ Cuisine$/, ''))}</td>` : '';
    return `<tr><td class="en">${htmlEncode(w.word)}</td>${origin}${cells}</tr>`;
  }).join('\n      ');

  const head = TOPIC_TABLE_LANGS.map(l =>
    FULL_BUILD && !topic.noLang ? `<th><a href="${langTopicUrl(l, topic)}">${l.label}</a></th>` : `<th>${l.label}</th>`).join('');

  const first = sampleWords(topic, 1)[0];
  const faqs = [
    { q: `How many words are in the ${topic.name} topic on ${SITE_NAME}?`, a: `${SITE_NAME} has ${n} words in the ${topic.name} topic, each with translations you can study with photos, flashcards and quizzes.` },
    { q: `How do you say "${first.word}" in Spanish, French and German?`, a: `"${first.word}" is "${translationOf(first, 'es', OVERLAYS)}" in Spanish, "${translationOf(first, 'fr', OVERLAYS)}" in French and "${translationOf(first, 'de', OVERLAYS)}" in German.` },
  ];

  const trail = [{ name: 'LexPix', url: SITE_URL }, { name: 'Learn', url: LEARN_INDEX_URL }, { name: topic.name, url }];

  const topicLabel = p => ({ main: p.word, sub: '', alt: `${p.word} (${topic.name} vocabulary)` });
  const gallery = galleryHtml(topic, `${topic.name} in photos`, topicLabel);
  const images = imageLd(topic, topicLabel);

  const langLinks = FULL_BUILD && !topic.noLang ? `
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
      ...(images.length ? { image: images } : {}),
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

${gallery}
  <h2 class="section-title">📖 ${htmlEncode(topic.name)} words and translations</h2>
  ${topic.blurb ? `<p class="blurb">${htmlEncode(topic.blurb)}</p>` : ''}
  <div class="table-wrap">
    <table class="vocab">
      <thead><tr><th>English</th>${topic.merged ? '<th>Cuisine</th>' : ''}${head}</tr></thead>
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
    { name: 'Learn', url: LEARN_INDEX_URL },
    { name: lang.label, url: langHubUrl(lang) },
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
  const related = getRelated(topic, true).slice(0, 6);

  const trByEn = new Map(rows.map(r => [r.en, r.tr]));
  const langLabel = p => {
    const tr = trByEn.get(p.word);
    return tr ? { main: tr, sub: p.word, alt: `${tr} (${p.word}) in ${lang.label}` } : null;
  };
  const gallery = galleryHtml(topic, `${topic.name} in ${lang.label}, with photos`, langLabel);

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

${gallery}
  <h2 class="section-title">📖 ${htmlEncode(topic.name)} in ${lang.label}: full word list</h2>
  ${topic.blurb ? `<p class="blurb">${htmlEncode(topic.blurb)}</p>` : ''}
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

  const trail = [{ name: 'LexPix', url: SITE_URL }, { name: 'Learn', url: LEARN_INDEX_URL }, { name: lang.label, url }];
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

// ─── Index of all topics: /learn ─────────────────────────────────────────────

function generateLearnIndex() {
  const url = LEARN_INDEX_URL;
  const color = groupColor('Language');
  const title = `Vocabulary Topics — ${TOPICS.length} topics with translations | ${SITE_NAME}`;
  const desc = `Browse ${TOPICS.length} vocabulary topics, from animals and verbs to Italian, Japanese and Portuguese food, with translations and real photos on ${SITE_NAME}.`;
  const trail = [{ name: 'LexPix', url: SITE_URL }, { name: 'Learn', url }];
  const ld = [
    breadcrumbLd(trail),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Vocabulary topics',
      numberOfItems: TOPICS.length,
      itemListElement: TOPICS.map((t, i) => ({ '@type': 'ListItem', position: i + 1, url: topicUrl(t), name: `${t.name} vocabulary` })),
    },
  ];

  const sections = ['Language', 'Moving', 'Cuisine', 'Ingredients', 'Wine']
    .map(g => ({ g, items: TOPICS.filter(t => t.group === g) }))
    .filter(x => x.items.length)
    .map(({ g, items }) => `
  <h2 class="section-title">${htmlEncode(GROUP_LABELS[g])}</h2>
  <div class="topic-grid">
    ${items.map(t => `<a class="topic-card" href="${topicUrl(t)}"><strong>${t.emoji} ${htmlEncode(t.name)}</strong><span>${t.words.length} words · ${htmlEncode(sampleWords(t, 3).map(w => w.word).join(', '))}</span></a>`).join('\n    ')}
  </div>`).join('\n');

  const languages = FULL_BUILD ? `
  <h2 class="section-title">🗣 Learn by language</h2>
  <div class="related">
    ${PAGE_LANGUAGES.map(l => `<a href="${langHubUrl(l)}" class="related-link">${l.flag} ${l.label}</a>`).join('\n    ')}
  </div>` : '';

  const body = `
${crumbsHtml(trail)}
<section class="hero">
  <div class="emoji">📚</div>
  <h1>Learn Vocabulary by Topic</h1>
  <p>Pick a topic to see every word with translations. Then practise with real photos, flashcards and quizzes in the ${SITE_NAME} app.</p>
  <a href="${SITE_URL}" class="cta-btn">Open ${SITE_NAME}</a>
  <p class="cta-sub">Free to start · Works on all devices</p>
</section>

<div class="content">
  <h2 class="section-title">📖 Guides</h2>
  <div class="topic-grid">
    <a class="topic-card" href="${guideUrl(GUIDE_SLUGS.visual)}"><strong>👁️ Visual vocabulary</strong><span>What it is and why photos help you remember words</span></a>
    <a class="topic-card" href="${guideUrl(GUIDE_SLUGS.pictures)}"><strong>🖼️ Learn words with pictures</strong><span>A simple 5-step method you can use today</span></a>
    <a class="topic-card" href="${guideUrl(GUIDE_SLUGS.portuguese)}"><strong>🇵🇹🇧🇷 European vs Brazilian Portuguese</strong><span>Everyday words that differ, side by side</span></a>
  </div>
${sections}
${languages}
</div>
`;
  return layout({ title, desc, url, color, ld, body });
}

// ─── Guides: /learn/visual-vocabulary and /learn/learn-words-with-pictures ───

const GUIDE_SLUGS = { visual: 'visual-vocabulary', pictures: 'learn-words-with-pictures', portuguese: 'european-vs-brazilian-portuguese' };
const guideUrl = slug => `${SITE_URL}/learn/${slug}`;

function topicLink(name) {
  const t = TOPICS.find(x => x.name === name);
  return t ? `<a href="${topicUrl(t)}" class="related-link">${t.emoji} ${htmlEncode(t.name)}</a>` : '';
}

/** A few everyday topics whose words have real photos, used for the "try it" gallery. */
function guideGalleryTopic() {
  const names = ['Fruits', 'Vegetables', 'Home', 'Kitchen', 'Transport', 'Animals', 'Italian Cuisine'];
  const words = names.flatMap(n => TOPICS.find(t => t.name === n)?.words ?? []);
  return { name: 'Guide examples', words };
}

function guideGallery(heading) {
  const topic = guideGalleryTopic();
  const byName = new Map(topic.words.map(w => [w.word, w]));
  return galleryHtml(topic, heading, p => {
    const w = byName.get(p.word);
    const es = w ? translationOf(w, 'es', OVERLAYS) : '';
    return { main: p.word, sub: es ? `Spanish: ${es}` : '', alt: `${p.word}${es ? ` (${es} in Spanish)` : ''}` };
  });
}

function guideShell({ slug, title, desc, h1, lead, bodyHtml, faqs, emoji }) {
  const url = guideUrl(slug);
  const color = groupColor('Language');
  const trail = [{ name: 'LexPix', url: SITE_URL }, { name: 'Learn', url: LEARN_INDEX_URL }, { name: h1.split(':')[0], url }];
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: h1,
      description: desc,
      url,
      inLanguage: 'en',
      author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      mainEntityOfPage: url,
    },
    breadcrumbLd(trail),
    faqLd(faqs),
  ];
  const body = `
${crumbsHtml(trail)}
<section class="hero">
  <div class="emoji">${emoji}</div>
  <h1>${htmlEncode(h1)}</h1>
  <p>${htmlEncode(lead)}</p>
  <a href="${SITE_URL}" class="cta-btn">Try ${SITE_NAME} free</a>
  <p class="cta-sub">Free to start · Works on all devices</p>
</section>

<div class="content article">
${bodyHtml}

  ${faqHtml(faqs)}

  <h2 class="section-title">🗂 Start with a topic</h2>
  <div class="related">
    ${['Fruits', 'Vegetables', 'Home', 'Kitchen', 'Animals', 'Transport', 'Italian Cuisine', 'Japanese Cuisine'].map(topicLink).join('\n    ')}
    <a href="${LEARN_INDEX_URL}" class="related-link">📚 All topics</a>
  </div>

  <div class="cta-bottom">
    <h2>Learn your first words with pictures</h2>
    <p>Pick a topic, look at the photo, then check the word.</p>
    <a href="${SITE_URL}" class="cta-btn">Open ${SITE_NAME}</a>
  </div>
</div>
`;
  return layout({ title, desc, url, color, ld, body });
}

function generateGuideVisual() {
  const langs = FULL_BUILD ? `
  <p>Prefer to start from a language? Browse word lists for ${PAGE_LANGUAGES.map(l => `<a href="${langHubUrl(l)}">${l.label}</a>`).join(', ')}.</p>` : '';
  const bodyHtml = `
  <h2 class="section-title">What is visual vocabulary?</h2>
  <p class="blurb">Visual vocabulary means learning a word together with a picture of the thing it describes, instead of only with a translation. You see a photo of a pomegranate, then the word <em>granada</em>, and your memory links the word to the image rather than to another word in your own language.</p>

  <h2 class="section-title">Why pictures help words stick</h2>
  <p class="blurb">Psychologists have long found that people tend to remember pictures better than words alone, a finding often called the picture superiority effect. Dual coding theory adds that a word and an image give the brain two routes back to the same memory. Neither is a promise of fast results, but pairing words with images is a well-established way to make vocabulary easier to recall, and it is how most picture dictionaries and flashcards work.</p>

  <h2 class="section-title">Where it works best, and where it does not</h2>
  <p class="blurb">Concrete things are easy to show: foods, animals, objects in a home, vehicles, clothes, places. Abstract words such as numbers, emotions or verbs are harder, so ${SITE_NAME} uses a real photo where one can be taken and a simple drawn picture where it cannot. Photos are not a replacement for hearing the language, reading sentences and speaking, so use them as the first step for each word.</p>

${guideGallery('Examples: words with their photos')}

  <h2 class="section-title">How ${SITE_NAME} uses visual vocabulary</h2>
  <p class="blurb">Every word in ${SITE_NAME} comes with a picture. You can browse by topic, flip through flashcards in the language you are learning, take quizzes, and come back to review words you found hard. Topics range from everyday life (home, kitchen, transport) to the food of countries around the world, and the app works in ${LANGUAGES.length} languages.</p>
  ${langs}
`;
  const faqs = [
    { q: 'What is a visual vocabulary app?', a: `A visual vocabulary app teaches words with pictures. ${SITE_NAME} shows a photo for each word, then the translation, and lets you practise with flashcards and quizzes.` },
    { q: 'Is visual vocabulary only for beginners?', a: 'It is most useful at the start, when you need to connect new words to real things, but it also works for topics you have not studied before, such as the food or the vocabulary of a new country.' },
    { q: `Is ${SITE_NAME} free?`, a: `${SITE_NAME} is free to start. You can try it in the browser or download it from the App Store or Google Play.` },
    { q: `Is ${SITE_NAME} the same app as Visual Vocab?`, a: `Yes. ${SITE_NAME} was previously called Visual Vocab, and the old visualvocab.io address now redirects to lexpix.io.` },
  ];
  return guideShell({
    slug: GUIDE_SLUGS.visual,
    title: fit([`Visual Vocabulary: learn words with real photos | ${SITE_NAME}`, `Visual Vocabulary: learn words with photos | ${SITE_NAME}`], 68),
    desc: fit([`What visual vocabulary is, why pairing words with photos helps you remember them, and how to study with the free ${SITE_NAME} app in ${LANGUAGES.length} languages.`, `What visual vocabulary is and how to learn words with photos in ${LANGUAGES.length} languages.`], 158),
    h1: 'Visual Vocabulary: Learn Words with Real Photos',
    lead: `What visual vocabulary is, why pictures help you remember words, and how to use it with ${SITE_NAME}.`,
    bodyHtml, faqs, emoji: '👁️',
  });
}

function generateGuidePictures() {
  const langs = FULL_BUILD ? `
  <p class="blurb">Choose a language to see the words with translations: ${PAGE_LANGUAGES.map(l => `<a href="${langHubUrl(l)}">${l.label}</a>`).join(', ')}.</p>` : '';
  const bodyHtml = `
  <h2 class="section-title">Why learn words with pictures?</h2>
  <p class="blurb">When you learn a word from a translation list, you connect it to another word. When you learn it from a picture, you connect it to the thing itself, which is how you learned your first language. This guide is a simple method you can follow with any topic, using ${SITE_NAME} or your own photos.</p>

  <h2 class="section-title">A simple 5-step method</h2>
  <ol class="steps">
    <li><strong>Pick a small topic.</strong> Choose 10 to 20 words you will actually meet this week: the food in your kitchen, things in your home, the words on a supermarket shelf.</li>
    <li><strong>Look at the picture first.</strong> Before you read the word, say what you think it is, in any language. This small guess helps you remember the answer.</li>
    <li><strong>Reveal the word and say it aloud.</strong> Read the translation, listen to how it sounds, and say it out loud while looking at the picture.</li>
    <li><strong>Test yourself the next day.</strong> Use flashcards or a quiz to see which words you remember from the picture alone.</li>
    <li><strong>Return at longer gaps.</strong> Review the hard words again after a few days, then after a week or more, and let the easy ones rest.</li>
  </ol>

${guideGallery('Try it: look at the photo, then check the word')}

  <h2 class="section-title">Tips that make pictures work harder</h2>
  <p class="blurb">Match the topic to your life: if you are moving to a new country, start with supermarket, home and transport words. Add a short sentence to each word you find hard. Label real objects around you with the new word. For abstract words that cannot be photographed, such as verbs and emotions, use the picture as a reminder of one clear example.</p>
  ${langs}
`;
  const faqs = [
    { q: 'How many words should I learn with pictures each day?', a: 'Start with 10 to 20 words from one topic and review them the next day. A small set you remember is better than a long list you forget.' },
    { q: 'Can I learn words with pictures without an app?', a: 'Yes. You can print photos or use your own, write the word on the back, and flip them like flashcards. An app saves the work of finding photos and keeps track of what to review.' },
    { q: `Which languages can I learn with ${SITE_NAME}?`, a: `${SITE_NAME} supports ${LANGUAGES.length} languages, including Spanish, French, German, Italian, Portuguese, Japanese, Chinese, Korean and Russian.` },
    { q: `Is ${SITE_NAME} free?`, a: `${SITE_NAME} is free to start, in the browser and as an app for iPhone and Android.` },
  ];
  return guideShell({
    slug: GUIDE_SLUGS.pictures,
    title: fit([`Learn Words with Pictures: a simple 5-step method | ${SITE_NAME}`, `Learn Words with Pictures: a 5-step method | ${SITE_NAME}`], 68),
    desc: fit([`A simple 5-step method to learn words with pictures: pick a topic, guess from the photo, say the word aloud and review. Try it free with ${SITE_NAME}.`, `A simple 5-step method to learn words with pictures, with free photo flashcards in ${LANGUAGES.length} languages.`], 158),
    h1: 'Learn Words with Pictures: A Simple Method',
    lead: 'A five-step method for remembering new words from photos, with examples you can try now.',
    bodyHtml, faqs, emoji: '🖼️',
  });
}


// Everyday words that differ between European and Brazilian Portuguese. Values come from the
// app data (so the page always matches the app); each pair is checked to exist and to differ.
const PORTUGUESE_GROUPS = [
  { title: 'Food and drink', words: ['Pineapple', 'Eggplant', 'Asparagus', 'Leek', 'Green Beans', 'Ice Cream', 'Cookie', 'Juice', 'Fruit Juice', 'Smoothie'] },
  { title: 'Kitchen and home', words: ['Fridge', 'Cup', 'Baking Tray', 'Rolling Pin', 'Bathroom', 'Wardrobe', 'Sink', 'Shower', 'Toilet', 'Bin'] },
  { title: 'Clothes and shopping', words: ['T-Shirt', 'Jumper', 'Hoodie', 'Jeans', 'Raincoat', 'Trainers', 'Handbag', 'Swimsuit', 'Suit', 'Receipt', 'Plastic Bag'] },
  { title: 'Getting around', words: ['Bus', 'Train', 'Subway', 'Lorry', 'Fire Engine', 'Number Plate', 'Bonnet', 'Windscreen'] },
];

function generateGuidePortuguese() {
  const pt = PAGE_LANGUAGES.find(l => l.key === 'pt');
  const br = PAGE_LANGUAGES.find(l => l.key === 'pt-br');
  const norm = x => x.trim().toLowerCase();
  let total = 0;
  const sections = PORTUGUESE_GROUPS.map(g => {
    const rows = g.words.map(name => {
      // Some English words appear in more than one category; use the entry where the two differ.
      let a = '', b = '';
      for (const w of WORDS.filter(x => x.word === name)) {
        a = translationOf(w, 'pt', OVERLAYS);
        b = translationOf(w, 'pt-br', OVERLAYS);
        if (a && b && norm(a) !== norm(b)) break;
      }
      if (!a || !b || norm(a) === norm(b)) {
        console.error(`✗ Portuguese guide: "${name}" is missing or has no difference (pt "${a}", pt-br "${b}").`);
        process.exit(1);
      }
      total++;
      return `<tr><td>${htmlEncode(name)}</td><td lang="pt-PT">${htmlEncode(a)}</td><td lang="pt-BR">${htmlEncode(b)}</td></tr>`;
    }).join('\n        ');
    return `
  <h2 class="section-title">${htmlEncode(g.title)}</h2>
  <div class="table-wrap">
    <table class="vocab">
      <thead><tr><th>English</th><th>European Portuguese</th><th>Brazilian Portuguese</th></tr></thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  </div>`;
  }).join('\n');

  const hubs = FULL_BUILD ? `
  <p class="blurb">Browse the full word lists: <a href="${langHubUrl(pt)}">European Portuguese</a> and <a href="${langHubUrl(br)}">Brazilian Portuguese</a>.</p>` : '';
  const bodyHtml = `
  <h2 class="section-title">Same language, different everyday words</h2>
  <p class="blurb">European Portuguese (spoken in Portugal) and Brazilian Portuguese share their grammar and most of their vocabulary, and speakers can generally understand each other. But many everyday words differ, especially in the kitchen, at home, in shops and on the road. If you are moving to Lisbon or São Paulo, it helps to learn the words for the place where you will actually live.</p>
  <p class="blurb">The ${total} pairs below come from the word lists in ${SITE_NAME}, which keeps European and Brazilian Portuguese as two separate languages so you can choose the one you need.</p>
${sections}

  <h2 class="section-title">Spelling and pronunciation also differ</h2>
  <p class="blurb">Some pairs above differ only in spelling or accent, such as <em>Beringela</em> and <em>Berinjela</em>, or <em>Papel higiénico</em> and <em>Papel higiênico</em>. Others are completely different words, such as <em>Autocarro</em> and <em>Ônibus</em> for a bus. Pronunciation differs as well, so listening to a word spoken helps. In ${SITE_NAME} every word comes with a photo and audio in the language you choose.</p>
  ${hubs}
`;
  const faqs = [
    { q: 'Can Portuguese speakers from Portugal and Brazil understand each other?', a: 'Generally yes. The grammar and most words are shared, but accents, spelling and a number of everyday words differ, so both sides sometimes need a moment to adjust.' },
    { q: 'Which Portuguese should I learn, European or Brazilian?', a: 'Learn the variety spoken where you will live or work: European Portuguese for Portugal, Brazilian Portuguese for Brazil. The other one will still be mostly understandable.' },
    { q: `Does ${SITE_NAME} have both European and Brazilian Portuguese?`, a: `Yes. ${SITE_NAME} lists European Portuguese and Brazilian Portuguese as separate languages, so words such as ananás and abacaxi each appear in the right one.` },
    { q: `Is ${SITE_NAME} free?`, a: `${SITE_NAME} is free to start, in the browser and as an app for iPhone and Android.` },
  ];
  return guideShell({
    slug: GUIDE_SLUGS.portuguese,
    title: fit([`European vs Brazilian Portuguese: everyday words | ${SITE_NAME}`, `European vs Brazilian Portuguese words | ${SITE_NAME}`], 68),
    desc: fit([`${total} everyday words that differ between European and Brazilian Portuguese, side by side: food, home, clothes and transport. Learn both free with ${SITE_NAME}.`, `${total} everyday words that differ between European and Brazilian Portuguese, side by side. Learn both free with ${SITE_NAME}.`], 158),
    h1: 'European vs Brazilian Portuguese: Everyday Words That Differ',
    lead: `${total} everyday words in European and Brazilian Portuguese, side by side.`,
    bodyHtml, faqs, emoji: '🇵🇹',
  });
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
writeFileSync(join(LEARN_DIR, 'index.html'), generateLearnIndex(), 'utf8');
sitemap.push(sitemapUrl(LEARN_INDEX_URL, '0.9', latestDate(GENERATOR_FILES)));
for (const [slug, make] of [[GUIDE_SLUGS.visual, generateGuideVisual], [GUIDE_SLUGS.pictures, generateGuidePictures], [GUIDE_SLUGS.portuguese, generateGuidePortuguese]]) {
  const dir = join(LEARN_DIR, slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), make(), 'utf8');
  sitemap.push(sitemapUrl(guideUrl(slug), '0.8', latestDate(GENERATOR_FILES)));
}
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
      if (topic.noLang) continue; // small cuisines and regional pages stay English-only
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

console.log(`\n✅ SEO pages: 1 index, ${topicPages} topic, ${hubPages} language hubs, ${langPages} language topic pages; ${sitemap.length} sitemap URLs${FULL_BUILD ? '' : ' (language pages skipped: set SEO_FULL=1 or build on Vercel)'}`);
console.log(`   Data: ${WORDS.length} words, lastmod ${FILE_DATES ? 'from git history' : 'omitted (no reliable git history)'}`);
