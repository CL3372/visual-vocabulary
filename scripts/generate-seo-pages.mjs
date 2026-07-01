/**
 * Generates static SEO landing pages for each vocabulary category.
 * Output: public/learn/{slug}/index.html
 * Also generates: public/sitemap.xml
 *
 * Run: node scripts/generate-seo-pages.mjs
 * Or automatically via the build script in package.json
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC = join(ROOT, 'public');
const LEARN_DIR = join(PUBLIC, 'learn');

// ─── Config ──────────────────────────────────────────────────────────────────

const SITE_URL = 'https://visualvocab.io';
const SITE_NAME = 'Visual Vocabulary';

// ─── Category metadata ────────────────────────────────────────────────────────

const CATEGORY_DATA = [
  // General / Language Learning
  { name: 'Verbs',        count: 50,  group: 'Language', emoji: '🏃', desc: 'Master the most essential action words — run, eat, sing, dance, build and more — with beautiful photos in 15 languages.', words: ['run', 'eat', 'drink', 'sleep', 'walk', 'talk', 'read', 'write', 'sing', 'dance', 'swim', 'cook', 'drive', 'jump', 'build', 'play', 'work', 'laugh', 'cry', 'fly'] },
  { name: 'Emotions',     count: 20,  group: 'Language', emoji: '😊', desc: 'Learn to express how you feel — happy, sad, angry, excited, brave, curious and more — across 15 languages.', words: ['happy', 'sad', 'angry', 'excited', 'scared', 'surprised', 'bored', 'proud', 'nervous', 'curious', 'brave', 'confused', 'shy', 'calm', 'lonely', 'grateful', 'jealous', 'hopeful', 'tired', 'disgusted'] },
  { name: 'Adjectives',   count: 40,  group: 'Language', emoji: '🎨', desc: 'Describe the world around you — big, small, hot, cold, beautiful, shiny and more — in 15 languages.', words: ['big', 'small', 'tall', 'short', 'hot', 'cold', 'fast', 'slow', 'beautiful', 'ugly', 'old', 'new', 'clean', 'dirty', 'loud', 'quiet', 'soft', 'hard', 'bright', 'dark'] },
  { name: 'Numbers',      count: 20,  group: 'Language', emoji: '🔢', desc: 'Count from one to twenty in Spanish, Hindi, Russian, Japanese, Arabic and 10 more languages with beautiful visuals.', words: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'] },
  { name: 'Shapes',       count: 15,  group: 'Language', emoji: '🔷', desc: 'Learn circles, squares, triangles, stars, hearts and more 2D and 3D shapes across 15 languages.', words: ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart', 'oval', 'diamond', 'pentagon', 'hexagon', 'cube', 'sphere', 'cylinder', 'cone', 'pyramid'] },
  { name: 'Family',       count: 17,  group: 'Language', emoji: '👨‍👩‍👧', desc: 'Learn family vocabulary — mother, father, sister, brother, grandparents and more — in 15 languages.', words: ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather', 'baby', 'child', 'son', 'daughter', 'aunt', 'uncle', 'cousin', 'family', 'parents', 'friend', 'twin'] },
  { name: 'Occupations',  count: 25,  group: 'Language', emoji: '👨‍⚕️', desc: 'Explore jobs and professions — doctor, teacher, chef, astronaut, musician and more — across 15 languages.', words: ['doctor', 'nurse', 'teacher', 'chef', 'firefighter', 'police', 'farmer', 'engineer', 'artist', 'pilot', 'scientist', 'dentist', 'builder', 'musician', 'vet', 'astronaut', 'librarian', 'baker', 'journalist', 'photographer'] },
  { name: 'Weather',      count: 15,  group: 'Language', emoji: '⛅', desc: 'Describe the weather in any language — sunny, rainy, cloudy, stormy, rainbow and more — across 15 languages.', words: ['sunny', 'rainy', 'cloudy', 'windy', 'snowy', 'foggy', 'stormy', 'thunder', 'rainbow', 'hail', 'frost', 'drought', 'hurricane', 'temperature', 'flood'] },
  { name: 'Technology',   count: 20,  group: 'Language', emoji: '📱', desc: 'Modern tech vocabulary — phone, computer, robot, rocket, internet, drone and more — in 15 languages.', words: ['phone', 'computer', 'tablet', 'camera', 'television', 'headphones', 'keyboard', 'robot', 'rocket', 'satellite', 'drone', 'printer', 'speaker', 'battery', 'internet', 'microphone', 'screen', 'charger', 'app', 'mouse'] },
  { name: 'Colors',       count: 37,  group: 'Language', emoji: '🌈', desc: 'Learn all the colours of the rainbow — red, blue, green, golden, turquoise and more — across 15 languages.', words: ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black', 'white', 'grey', 'brown', 'gold', 'silver', 'turquoise', 'violet', 'indigo', 'coral', 'beige', 'navy', 'maroon'] },
  { name: 'Animals',      count: 40,  group: 'Language', emoji: '🦁', desc: 'Discover animals from lion to penguin — with stunning photos and translations in 15 languages.', words: ['lion', 'elephant', 'tiger', 'giraffe', 'penguin', 'dolphin', 'whale', 'gorilla', 'panda', 'flamingo', 'shark', 'octopus', 'eagle', 'snake', 'fox', 'rabbit', 'horse', 'bear', 'wolf', 'crocodile'] },
  { name: 'School',       count: 40,  group: 'Language', emoji: '🏫', desc: 'Essential school vocabulary — pencil, book, teacher, classroom, homework and more — across 15 languages.', words: ['pencil', 'pen', 'eraser', 'ruler', 'scissors', 'notebook', 'textbook', 'backpack', 'calculator', 'globe', 'blackboard', 'homework', 'exam', 'classroom', 'library', 'diploma', 'compass', 'highlighter', 'student', 'school'] },
  { name: 'Home',         count: 59,  group: 'Language', emoji: '🏠', desc: 'Learn every room and household item — kitchen, bedroom, sofa, window and more — in 15 languages.', words: ['kitchen', 'bedroom', 'bathroom', 'living room', 'sofa', 'table', 'chair', 'window', 'door', 'bed', 'lamp', 'mirror', 'fridge', 'oven', 'bath', 'stairs', 'garden', 'balcony', 'fireplace', 'wardrobe'] },
  { name: 'Transport',    count: 48,  group: 'Language', emoji: '🚗', desc: 'Vehicles and transport vocabulary — car, train, bicycle, rocket, submarine and more — in 15 languages.', words: ['car', 'bus', 'train', 'bicycle', 'motorcycle', 'aeroplane', 'helicopter', 'ship', 'submarine', 'taxi', 'tram', 'ferry', 'truck', 'van', 'scooter', 'hot air balloon', 'cable car', 'ambulance', 'fire engine', 'rocket'] },
  { name: 'Clothes',      count: 46,  group: 'Language', emoji: '👕', desc: 'Fashion and clothing vocabulary — shirt, dress, boots, hat, scarf and more — across 15 languages.', words: ['shirt', 'dress', 'trousers', 'skirt', 'jacket', 'coat', 'boots', 'shoes', 'hat', 'scarf', 'gloves', 'socks', 'jumper', 'suit', 'tie', 'jeans', 'shorts', 'swimsuit', 'pyjamas', 'uniform'] },
  { name: 'Sports',       count: 56,  group: 'Language', emoji: '⚽', desc: 'Sports and athletic vocabulary — football, swimming, tennis, yoga and more — across 15 languages.', words: ['football', 'basketball', 'tennis', 'swimming', 'running', 'cycling', 'golf', 'rugby', 'cricket', 'boxing', 'skiing', 'surfing', 'yoga', 'gymnastics', 'archery', 'rowing', 'volleyball', 'baseball', 'hockey', 'climbing'] },
  { name: 'Nature',       count: 35,  group: 'Language', emoji: '🌿', desc: 'Discover the natural world — mountains, rivers, forests, volcanoes and more — in 15 languages.', words: ['mountain', 'river', 'forest', 'volcano', 'waterfall', 'desert', 'ocean', 'lake', 'island', 'valley', 'cliff', 'cave', 'glacier', 'jungle', 'meadow', 'beach', 'coral reef', 'tundra', 'swamp', 'canyon'] },
  { name: 'Time',         count: 30,  group: 'Language', emoji: '⏰', desc: 'Time vocabulary — morning, afternoon, yesterday, tomorrow, century and more — across 15 languages.', words: ['morning', 'afternoon', 'evening', 'night', 'yesterday', 'today', 'tomorrow', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade', 'century', 'midnight', 'noon', 'sunrise', 'sunset'] },
  { name: 'Holidays',     count: 25,  group: 'Language', emoji: '🎄', desc: 'Celebrations vocabulary — Christmas, Easter, birthday, fireworks and more — in 15 languages.', words: ['Christmas', 'Easter', 'birthday', 'New Year', 'Halloween', 'Diwali', 'Hanukkah', 'Eid', 'carnival', 'fireworks', 'present', 'candle', 'lantern', 'parade', 'cake', 'balloon', 'confetti', 'turkey', 'pumpkin', 'wreath'] },

  // Cuisine
  { name: 'Italian Cuisine',     count: 78,  group: 'Cuisine', emoji: '🇮🇹', desc: 'Explore 78 Italian food words — pasta, risotto, tiramisu, bruschetta, gelato and more — with translations in 15 languages.', words: ['pasta', 'pizza', 'risotto', 'tiramisu', 'gelato', 'bruschetta', 'lasagne', 'carbonara', 'gnocchi', 'pesto', 'osso buco', 'arancini', 'focaccia', 'prosciutto', 'burrata', 'polenta', 'cannoli', 'panna cotta', 'minestrone', 'vitello tonnato'] },
  { name: 'Japanese Cuisine',    count: 73,  group: 'Cuisine', emoji: '🇯🇵', desc: 'Discover 73 Japanese food words — sushi, ramen, tempura, miso, matcha and more — across 15 languages.', words: ['sushi', 'ramen', 'tempura', 'miso soup', 'matcha', 'sashimi', 'udon', 'yakitori', 'onigiri', 'tonkatsu', 'okonomiyaki', 'takoyaki', 'gyoza', 'edamame', 'wagyu', 'sake', 'mochi', 'dorayaki', 'karaage', 'shabu shabu'] },
  { name: 'Indian Cuisine',      count: 65,  group: 'Cuisine', emoji: '🇮🇳', desc: 'Explore 65 Indian food words — curry, biryani, naan, masala, samosa and more — in 15 languages.', words: ['curry', 'biryani', 'naan', 'samosa', 'tikka masala', 'dal', 'paneer', 'tandoori', 'chutney', 'korma', 'vindaloo', 'idli', 'dosa', 'raita', 'kheer', 'halwa', 'paratha', 'chapati', 'pakora', 'lassi'] },
  { name: 'Spanish Cuisine',     count: 62,  group: 'Cuisine', emoji: '🇪🇸', desc: 'Discover 62 Spanish food words — paella, tapas, gazpacho, churros, jamón and more — with translations in 15 languages.', words: ['paella', 'tapas', 'gazpacho', 'churros', 'jamón', 'tortilla española', 'patatas bravas', 'croquetas', 'gambas al ajillo', 'pulpo a la gallega', 'cocido', 'fabada', 'crema catalana', 'sangria', 'horchata', 'pimientos de padrón', 'albondigas', 'boquerones', 'mojo rojo', 'papas arrugadas'] },
  { name: 'French Cuisine',      count: 60,  group: 'Cuisine', emoji: '🇫🇷', desc: 'Explore 60 French food words — croissant, bouillabaisse, crème brûlée, baguette and more — in 15 languages.', words: ['croissant', 'baguette', 'bouillabaisse', 'crème brûlée', 'ratatouille', 'coq au vin', 'soufflé', 'crêpe', 'foie gras', 'escargot', 'cassoulet', 'tarte tatin', 'béarnaise', 'vichyssoise', 'quiche', 'macaron', 'éclair', 'confit de canard', 'steak tartare', 'boeuf bourguignon'] },
  { name: 'Mexican Cuisine',     count: 44,  group: 'Cuisine', emoji: '🇲🇽', desc: 'Discover 44 Mexican food words — tacos, guacamole, tamales, enchiladas and more — across 15 languages.', words: ['tacos', 'guacamole', 'tamales', 'enchiladas', 'quesadilla', 'mole', 'salsa', 'burrito', 'pozole', 'chiles en nogada', 'elote', 'horchata', 'churros', 'tostadas', 'flautas', 'cochinita pibil', 'chile relleno', 'sopa de lima', 'atole', 'tres leches'] },
  { name: 'Chinese Cuisine',     count: 44,  group: 'Cuisine', emoji: '🇨🇳', desc: 'Explore 44 Chinese food words — dim sum, dumplings, Peking duck, kung pao and more — in 15 languages.', words: ['dim sum', 'dumplings', 'Peking duck', 'kung pao chicken', 'mapo tofu', 'spring rolls', 'fried rice', 'wonton soup', 'char siu', 'hot pot', 'lo mein', 'chow mein', 'egg fried rice', 'congee', 'bao buns', 'General Tso', 'xiaolongbao', 'sweet and sour', 'claypot rice', 'mooncake'] },
  { name: 'Greek Cuisine',       count: 37,  group: 'Cuisine', emoji: '🇬🇷', desc: 'Discover 37 Greek food words — moussaka, souvlaki, tzatziki, baklava and more — across 15 languages.', words: ['moussaka', 'souvlaki', 'tzatziki', 'baklava', 'spanakopita', 'dolmades', 'taramasalata', 'saganaki', 'kleftiko', 'pastitsio', 'tiropita', 'loukoumades', 'galaktoboureko', 'horiatiki', 'fasolada', 'revithia', 'stifado', 'feta', 'kalamata olives', 'ouzo'] },
  { name: 'Turkish Cuisine',     count: 39,  group: 'Cuisine', emoji: '🇹🇷', desc: 'Explore 39 Turkish food words — kebab, baklava, börek, meze, lahmacun and more — in 15 languages.', words: ['kebab', 'baklava', 'börek', 'meze', 'lahmacun', 'döner', 'pide', 'köfte', 'dolma', 'iskender', 'mantı', 'çorba', 'ayran', 'künefe', 'lokum', 'simit', 'menemen', 'çiğ köfte', 'musakka', 'karnıyarık'] },
  { name: 'Korean Cuisine',      count: 35,  group: 'Cuisine', emoji: '🇰🇷', desc: 'Discover 35 Korean food words — kimchi, bibimbap, bulgogi, tteokbokki and more — across 15 languages.', words: ['kimchi', 'bibimbap', 'bulgogi', 'tteokbokki', 'japchae', 'sundubu jjigae', 'doenjang jjigae', 'galbi', 'samgyeopsal', 'jajangmyeon', 'naengmyeon', 'gimbap', 'haemul pajeon', 'dakgalbi', 'bossam', 'makgeolli', 'soju', 'hotteok', 'patbingsu', 'banchan'] },
  { name: 'Thai Cuisine',        count: 33,  group: 'Cuisine', emoji: '🇹🇭', desc: 'Explore Thai food words — pad thai, green curry, tom yum, mango sticky rice and more — in 15 languages.', words: ['pad thai', 'green curry', 'tom yum', 'mango sticky rice', 'som tam', 'massaman curry', 'pad see ew', 'khao pad', 'larb', 'satay', 'tom kha', 'papaya salad', 'panang curry', 'basil fried rice', 'spring rolls', 'boat noodles', 'khao man gai', 'moo ping', 'thai iced tea', 'coconut soup'] },
  { name: 'Vietnamese Cuisine',  count: 30,  group: 'Cuisine', emoji: '🇻🇳', desc: 'Discover Vietnamese food words — pho, banh mi, spring rolls, bun cha and more — across 15 languages.', words: ['pho', 'banh mi', 'spring rolls', 'bun cha', 'cao lau', 'banh xeo', 'bun bo hue', 'com tam', 'goi cuon', 'banh cuon', 'chao ga', 'bo luc lac', 'banh bao', 'hu tieu', 'banh khot', 'bun rieu', 'che', 'sinh to', 'ca phe sua da', 'nuoc mia'] },
  { name: 'Portuguese Cuisine',  count: 59,  group: 'Cuisine', emoji: '🇵🇹', desc: 'Explore 59 Portuguese food words — bacalhau, pastéis de nata, caldo verde, francesinha and more — in 15 languages.', words: ['bacalhau', 'pastéis de nata', 'caldo verde', 'francesinha', 'bifanas', 'arroz de pato', 'sardinhas', 'alheira', 'cataplana', 'piri piri chicken', 'açorda', 'cozido à portuguesa', 'polvo à lagareiro', 'amêijoas à bulhão pato', 'bolo de mel', 'queijadas', 'espetada', 'lapas', 'alcatra', 'toucinho do céu'] },
  { name: 'Brazilian Cuisine',   count: 30,  group: 'Cuisine', emoji: '🇧🇷', desc: 'Discover Brazilian food words — feijoada, churrasco, brigadeiro, açaí and more — across 15 languages.', words: ['feijoada', 'churrasco', 'brigadeiro', 'açaí', 'pão de queijo', 'coxinha', 'moqueca', 'acarajé', 'vatapá', 'bobó de camarão', 'empadão', 'picanha', 'caipirinha', 'guaraná', 'tapioca', 'mandioca', 'arroz com feijão', 'carne seca', 'quindim', 'bolo de rolo'] },
  { name: 'Moroccan Cuisine',    count: 28,  group: 'Cuisine', emoji: '🇲🇦', desc: 'Explore Moroccan food words — tagine, couscous, harira, bastilla and more — in 15 languages.', words: ['tagine', 'couscous', 'harira', 'bastilla', 'mechoui', 'chermoula', 'briouats', 'msemen', 'makouda', 'zaalouk', 'taktouka', 'pastilla', 'rfissa', 'mrouzia', 'chebakia', 'sellou', 'mint tea', 'ras el hanout', 'preserved lemon', 'argan oil'] },
  { name: 'Lebanese Cuisine',    count: 25,  group: 'Cuisine', emoji: '🇱🇧', desc: 'Discover Lebanese food words — hummus, falafel, fattoush, kibbeh and more — across 15 languages.', words: ['hummus', 'falafel', 'fattoush', 'kibbeh', 'tabbouleh', 'baba ganoush', 'shawarma', 'manakish', 'kebbeh nayeh', 'warak enab', 'kafta', 'samke harra', 'moghrabieh', 'sfeeha', 'knafeh', 'ma\'amoul', 'halloumi', 'labneh', 'arak', 'jallab'] },
  { name: 'English Cuisine',     count: 20,  group: 'Cuisine', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', desc: 'Explore English food words — fish and chips, Sunday roast, full English breakfast, scones and more — in 15 languages.', words: ['fish and chips', 'Sunday roast', 'full English breakfast', 'scones', 'beef Wellington', "shepherd's pie", 'Yorkshire pudding', 'Bakewell tart', 'Cornish pasty', 'chicken tikka masala', 'pork pie', 'Scotch egg', 'chip butty', 'jam roly-poly', 'afternoon tea', 'kippers', 'steak and kidney pie', 'summer pudding', "ploughman's lunch", 'roast beef'] },
  { name: 'Welsh Cuisine',       count: 8,   group: 'Cuisine', emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', desc: 'Discover Welsh food — cawl, Welsh rarebit, bara brith, laverbread, Welsh cakes and more — across 15 languages.', words: ['cawl', 'Welsh rarebit', 'bara brith', 'laverbread', 'Welsh lamb', 'Glamorgan sausage', 'Caerphilly cheese', 'Welsh cakes'] },
  { name: 'Scottish Cuisine',    count: 20,  group: 'Cuisine', emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', desc: 'Discover Scottish food words — haggis, cullen skink, cranachan, Scotch pie and more — across 15 languages.', words: ['haggis', 'cullen skink', 'cranachan', 'Scotch pie', 'tablet', 'Scotch broth', 'cock-a-leekie', 'Aberdeen Angus', 'smoked haddock', 'venison', 'grouse', 'langoustines', 'single malt whisky', 'Irn-Bru', 'potted shrimp', 'empire biscuit', 'Selkirk bannock', 'dressed crab', 'Scotch egg', 'porridge'] },
  { name: 'German Cuisine',      count: 30,  group: 'Cuisine', emoji: '🇩🇪', desc: 'Explore German food words — bratwurst, schnitzel, pretzel, sauerkraut and more — in 15 languages.', words: ['bratwurst', 'schnitzel', 'pretzel', 'sauerkraut', 'sauerbraten', 'currywurst', 'döner kebab', 'flammkuchen', 'rouladen', 'labskaus', 'leberkäse', 'knödel', 'käsespätzle', 'bienenstich', 'black forest cake', 'stollen', 'marzipan', 'pumpernickel', 'beer', 'weisswurst'] },
  { name: 'American Cuisine',    count: 36,  group: 'Cuisine', emoji: '🇺🇸', desc: 'Discover American food words — burger, hot dog, mac and cheese, BBQ ribs and more — across 15 languages.', words: ['hamburger', 'hot dog', 'mac and cheese', 'BBQ ribs', 'clam chowder', 'cheesecake', 'fried chicken', 'corn dog', 'lobster roll', 'biscuits and gravy', 'pulled pork', 'key lime pie', 'pecan pie', 's\'mores', 'buffalo wings', 'Reuben sandwich', 'cobb salad', 'chili con carne', 'gumbo', 'jambalaya'] },

  // Ingredients
  { name: 'Herbs & Spices',  count: 117, group: 'Ingredients', emoji: '🌿', desc: 'Learn 117 herbs and spices — basil, turmeric, coriander, saffron and more — with photos and translations in 15 languages.', words: ['basil', 'turmeric', 'coriander', 'saffron', 'cumin', 'cinnamon', 'rosemary', 'thyme', 'oregano', 'paprika', 'chilli', 'ginger', 'mint', 'parsley', 'dill', 'bay leaf', 'cloves', 'nutmeg', 'cardamom', 'vanilla'] },
  { name: 'Vegetables',      count: 84,  group: 'Ingredients', emoji: '🥦', desc: 'Discover 84 vegetables — from everyday carrots and tomatoes to exotic kohlrabi and bok choy — in 15 languages.', words: ['carrot', 'tomato', 'broccoli', 'spinach', 'potato', 'onion', 'garlic', 'pepper', 'courgette', 'aubergine', 'cauliflower', 'cabbage', 'leek', 'asparagus', 'artichoke', 'pumpkin', 'beetroot', 'fennel', 'kohlrabi', 'bok choy'] },
  { name: 'Fruits',          count: 68,  group: 'Ingredients', emoji: '🍎', desc: 'Explore 68 fruits — apples, mangoes, dragon fruit, pomegranate and more — with beautiful photos in 15 languages.', words: ['apple', 'mango', 'strawberry', 'banana', 'orange', 'grape', 'pineapple', 'watermelon', 'lemon', 'peach', 'cherry', 'kiwi', 'pomegranate', 'dragon fruit', 'papaya', 'fig', 'lychee', 'passion fruit', 'guava', 'jackfruit'] },
  { name: 'Seafood',         count: 69,  group: 'Ingredients', emoji: '🦞', desc: 'Learn 69 seafood words — salmon, lobster, octopus, oysters and more — with stunning photos in 15 languages.', words: ['salmon', 'lobster', 'octopus', 'oyster', 'tuna', 'cod', 'shrimp', 'crab', 'scallop', 'squid', 'mussel', 'clam', 'sea bass', 'halibut', 'mackerel', 'sardine', 'anchovy', 'sea bream', 'monkfish', 'langoustine'] },
  { name: 'Meat',            count: 85,  group: 'Ingredients', emoji: '🥩', desc: 'Explore 85 meat vocabulary words — from beef and chicken to venison and veal — across 15 languages.', words: ['beef', 'chicken', 'pork', 'lamb', 'turkey', 'duck', 'venison', 'veal', 'rabbit', 'goat', 'bacon', 'sausage', 'ham', 'salami', 'prosciutto', 'chorizo', 'mince', 'steak', 'ribs', 'liver'] },
  { name: 'Desserts',        count: 48,  group: 'Ingredients', emoji: '🍰', desc: 'Discover 48 desserts — cakes, ice creams, pastries and puddings from around the world — in 15 languages.', words: ['chocolate cake', 'ice cream', 'cheesecake', 'tiramisu', 'crème brûlée', 'macarons', 'profiteroles', 'baklava', 'churros', 'panna cotta', 'waffles', 'pancakes', 'trifle', 'mousse', 'sorbet', 'gelato', 'sticky toffee pudding', 'pavlova', 'éclair', 'mille-feuille'] },
  { name: 'Drinks',          count: 65,  group: 'Ingredients', emoji: '🍵', desc: 'Explore 65 drinks — coffee, tea, wines, cocktails and traditional beverages — across 15 languages.', words: ['coffee', 'tea', 'water', 'orange juice', 'lemonade', 'milk', 'smoothie', 'wine', 'beer', 'cocktail', 'espresso', 'matcha', 'kombucha', 'lassi', 'horchata', 'chai', 'mojito', 'sangria', 'sake', 'champagne'] },
  { name: 'Condiments',      count: 121, group: 'Ingredients', emoji: '🫙', desc: 'Learn 121 condiments and sauces — mustard, mayo, sriracha, tahini and more — in 15 languages.', words: ['mustard', 'mayonnaise', 'sriracha', 'tahini', 'ketchup', 'soy sauce', 'fish sauce', 'hoisin', 'harissa', 'chimichurri', 'pesto', 'guacamole', 'hummus', 'miso paste', 'teriyaki', 'Worcestershire sauce', 'balsamic vinegar', 'hot sauce', 'oyster sauce', 'mojo'] },
  { name: 'Nuts & Legumes',  count: 61,  group: 'Ingredients', emoji: '🥜', desc: 'Discover 61 nuts and legumes — almonds, lentils, chickpeas, cashews and more — across 15 languages.', words: ['almond', 'lentil', 'chickpea', 'cashew', 'walnut', 'peanut', 'pistachio', 'hazelnut', 'black bean', 'kidney bean', 'soybean', 'edamame', 'pea', 'broad bean', 'butter bean', 'pine nut', 'macadamia', 'chestnut', 'pecan', 'brazil nut'] },
  { name: 'Wine',            count: 30,  group: 'Wine', emoji: '🍷', desc: 'Explore wine vocabulary — grape varieties, wine regions, tasting notes and more — in 15 languages.', words: ['Chardonnay', 'Cabernet Sauvignon', 'Pinot Noir', 'Sauvignon Blanc', 'Merlot', 'Riesling', 'Syrah', 'Rosé', 'Champagne', 'Prosecco', 'Rioja', 'Bordeaux', 'Burgundy', 'Chianti', 'Barolo', 'Malbec', 'Tempranillo', 'Viognier', 'Grenache', 'Zinfandel'] },
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
  const title = `${cat.name} Vocabulary — Learn ${cat.count}+ words in 15 languages | ${SITE_NAME}`;
  const desc = cat.desc;

  const wordChips = (cat.words || [])
    .map(w => `<div class="word-chip">${htmlEncode(w)}</div>`)
    .join('\n    ');

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
  <meta property="og:image" content="${SITE_URL}/og-image.svg" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${htmlEncode(title)}" />
  <meta name="twitter:description" content="${htmlEncode(desc)}" />
  <meta name="twitter:image" content="${SITE_URL}/og-image.svg" />

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
    .nav-logo { font-size: 1.1rem; font-weight: 700; color: #4f46e5; }
    .nav-home { font-size: 0.85rem; color: #64748b; }

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
      display: flex; flex-wrap: wrap; justify-content: center;
      gap: 0.5rem; margin-bottom: 2rem;
    }
    .badge {
      background: #fff; border: 1px solid #e2e8f0; border-radius: 9999px;
      padding: 0.3rem 0.85rem; font-size: 0.8rem; font-weight: 600; color: #334155;
    }
    .cta-btn {
      display: inline-block; background: ${color.accent}; color: #fff;
      font-size: 1.05rem; font-weight: 700; padding: 0.9rem 2.2rem;
      border-radius: 14px; cursor: pointer; transition: opacity 0.15s; border: none;
    }
    .cta-btn:hover { opacity: 0.9; }
    .cta-sub { font-size: 0.8rem; color: #94a3b8; margin-top: 0.6rem; }

    .content { max-width: 860px; margin: 0 auto; padding: 2.5rem 1.5rem; }
    .section-title { font-size: 1.2rem; font-weight: 700; color: #0f172a; margin-bottom: 1rem; }

    /* Word vocabulary grid */
    .word-grid {
      display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;
    }
    .word-chip {
      background: #fff; border: 1px solid #e2e8f0; border-radius: 10px;
      padding: 0.45rem 0.9rem; font-size: 0.88rem; font-weight: 500; color: #1e293b;
      transition: border-color 0.15s, background 0.15s;
    }
    .word-chip:hover { background: ${color.bg}; border-color: ${color.accent}; }

    .lang-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 0.5rem; margin-bottom: 2rem;
    }
    .lang-chip {
      background: #fff; border: 1px solid #e2e8f0; border-radius: 10px;
      padding: 0.55rem 0.85rem; font-size: 0.85rem; font-weight: 500; color: #374151;
      display: flex; align-items: center; gap: 0.5rem;
    }

    .features {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1rem; margin-bottom: 2.5rem;
    }
    .feature { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 1.2rem; }
    .feature-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .feature h3 { font-size: 0.95rem; font-weight: 700; margin-bottom: 0.3rem; }
    .feature p { font-size: 0.82rem; color: #64748b; line-height: 1.5; }

    .related { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
    .related-link {
      background: #fff; border: 1px solid #e2e8f0; border-radius: 9999px;
      padding: 0.35rem 0.9rem; font-size: 0.82rem; font-weight: 500; color: #4f46e5;
    }
    .related-link:hover { background: #eff6ff; }

    .cta-bottom {
      background: ${color.bg}; border: 1px solid #e2e8f0; border-radius: 16px;
      padding: 2rem; text-align: center;
    }
    .cta-bottom h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem; color: ${color.dark}; }
    .cta-bottom p { font-size: 0.9rem; color: #64748b; margin-bottom: 1.2rem; }

    footer {
      text-align: center; padding: 2rem 1rem; font-size: 0.8rem; color: #94a3b8;
      border-top: 1px solid #e2e8f0; margin-top: 2rem;
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

  <h2 class="section-title">📖 ${cat.name} Vocabulary Words</h2>
  <div class="word-grid">
    ${wordChips}
  </div>

  <h2 class="section-title">🌍 Available Languages</h2>
  <div class="lang-grid">
    <div class="lang-chip"><span>🇬🇧</span> English</div>
    <div class="lang-chip"><span>🇪🇸</span> Spanish</div>
    <div class="lang-chip"><span>🇵🇹</span> Portuguese</div>
    <div class="lang-chip"><span>🇫🇷</span> French</div>
    <div class="lang-chip"><span>🇩🇪</span> German</div>
    <div class="lang-chip"><span>🇮🇹</span> Italian</div>
    <div class="lang-chip"><span>🇮🇳</span> Hindi</div>
    <div class="lang-chip"><span>🇷🇺</span> Russian</div>
    <div class="lang-chip"><span>🇹🇷</span> Turkish</div>
    <div class="lang-chip"><span>🇯🇵</span> Japanese</div>
    <div class="lang-chip"><span>🇨🇳</span> Chinese</div>
    <div class="lang-chip"><span>🇰🇷</span> Korean</div>
    <div class="lang-chip"><span>🇸🇦</span> Arabic</div>
    <div class="lang-chip"><span>🇧🇷</span> Brazilian Portuguese</div>
    <div class="lang-chip"><span>🇹🇼</span> Chinese (Traditional)</div>
  </div>

  <h2 class="section-title">✨ How it Works</h2>
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
  const sameGroup = CATEGORY_DATA.filter(c => c.name !== cat.name && c.group === cat.group).slice(0, 4);
  const others = CATEGORY_DATA.filter(c => c.name !== cat.name && c.group !== cat.group).slice(0, 3);
  return [...sameGroup, ...others].slice(0, 7);
}

// ─── Sitemap ─────────────────────────────────────────────────────────────────

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

// Remove dead british-cuisine page if it still exists
const britishDir = join(LEARN_DIR, 'british-cuisine');
if (existsSync(britishDir)) {
  rmSync(britishDir, { recursive: true });
  console.log('  🗑 Removed /learn/british-cuisine (dead page)');
}

let generated = 0;
for (const cat of CATEGORY_DATA) {
  const slug = slugify(cat.name);
  const dir = join(LEARN_DIR, slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), generatePage(cat), 'utf8');
  generated++;
  console.log(`  ✓ /learn/${slug}`);
}

writeFileSync(join(PUBLIC, 'sitemap.xml'), generateSitemap(), 'utf8');
console.log(`  ✓ /sitemap.xml`);

console.log(`\n✅ Generated ${generated} SEO pages + sitemap`);
