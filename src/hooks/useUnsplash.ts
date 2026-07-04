import { useState, useEffect, useCallback } from 'react';

const cache = new Map<string, string>();

// Map tricky query keys to better Wikipedia article titles
const WIKI_TERMS: Record<string, string> = {
  'airplane sky':    'Airplane',
  'tram city':       'Tram',
  'electric bike':   'Electric bicycle',
  'coach bus':       'Coach (bus)',
  'lorry truck':     'Truck',
  'boat water':      'Boat',
  'door entrance':   'Door',
  'window light':    'Window',
  'airport':         'Airport',
  'human hand open palm':    'Hand',
  'eye closeup':             'Human eye',
  'human nose face closeup': 'Human nose',
  'human mouth lips smile':  'Lip',
  'foot barefoot':           'Human foot',
  'human heart anatomy':     'Heart',
  'human ear closeup':       'Ear',
  'hair':                    'Hair',
  'human arm muscle':        'Arm',
  'human leg running':       'Leg',
  'human finger hand close': 'Finger',
  'shoulder upper body':     'Shoulder',
  'knee joint leg':          'Knee',
  'human back spine':        'Back',
  'chest torso upper body':  'Chest',
  'neck shoulder human':     'Neck',
  'thumb up hand':           'Thumb',
  'lips human closeup':      'Lip',
  'tongue mouth open':       'Tongue',
  // Keep old keys as aliases for cached entries
  'hand':            'Hand',
  'nose face':       'Human nose',
  'mouth smile':     'Lip',
  'heart':           'Heart',
  'ear':             'Ear',
  'pudding dessert': 'Pudding',
  'stew pot':        'Stew',
  'flour baking':    'Flour',
  'vanilla':         'Vanilla',
  'saffron spice':   'Saffron',
  'ham prosciutto':  'Prosciutto',
  // PT vocab — WIKI_TERMS
  'white grape':              'White grape',
  'muscat grape green':       'Muscat blanc à petits grains',
  'raisins dried grapes':     'Raisin',
  'black grapes dark':        'Grape',
  'grapefruit citrus':        'Grapefruit',
  'tangerine mandarin':       'Tangerine',
  'lime citrus green':        'Lime (fruit)',
  'green beans':              'Green bean',
  'stinging nettle plant':    'Stinging nettle',
  'clover plant':             'Clover',
  'lupin lupini beans':       'Lupin bean',
  'spare ribs grilled':       'Spare ribs',
  'sirloin steak beef':       'Sirloin steak',
  'venison deer meat':        'Venison',
  'bone marrow roasted':      'Bone marrow (food)',
  'tripe offal':              'Tripe',
  'smoked bacon rashers':     'Bacon',
  'lard fat pork':            'Lard',
  'tournedos fillet steak':   'Tournedos Rossini',
  'pork crackling chicharron':'Pork rind',
  'bull animal farm':         'Bull',
  'shark fish ocean':         'Shark',
  'sea trout salmon trout':   'Sea trout',
  'lake trout fish':          'Lake trout',
  'rainbow trout fish':       'Rainbow trout',
  'arctic char fish':         'Arctic char',
  'electric ray torpedo fish': 'Electric ray',
  'grey mullet fish':          'Flathead grey mullet',
  'monkfish anglerfish':       'Monkfish',
  'wheat field grain':        'Wheat',
  'tapioca pearls':           'Tapioca',
  'juice glass fresh':        'Juice',
  'fruit juice colorful':     'Juice',
  'herbal tea cup herbs':     'Herbal tea',
  'meringue dessert white':   'Meringue',
  'apple pie tart':           'Apple pie',
  'chocolate truffle':        'Chocolate truffle',
  'mixed toast ham cheese':   'Croque monsieur',
  'bruschetta toast topping': 'Bruschetta',
  'tortilla flatbread':       'Tortilla',
  'toast bread golden':       'Toast',
  'slice food portion':       'Slice',
  'seasoning spices mix':     'Spice mix',
  'black truffle fungus':     'Truffle',
  'serving platter dish':     'Platter',
  'baking tray oven':         'Sheet pan',
  'saucepan cooking':         'Saucepan',
  'cutlery set silverware':   'Cutlery',
  'pot lid cover':            'Lid',
  'tablecloth table setting': 'Tablecloth',
  'cup goblet':               'Cup',
  'ceramic vessel container': 'Pottery',
  'tavern bar interior':      'Tavern',
  'tasca tavern portuguese':  'Tasca',
  "butcher shop meat":        'Butcher',
  'heather moorland purple':  'Calluna vulgaris',
  'tulip flower colorful':    'Tulip',
  'topaz gemstone crystal':   'Topaz',
  'roof tile terracotta':     'Roof tile',
  'turtle sea tortoise':      'Sea turtle',
  'chaffinch bird':           'Common chaffinch',
  'golden plover bird':       'European golden plover',
  'mermaid ocean mythology':  'Mermaid',
  'vase flower home':         'Vase',
  'candle flame light':       'Candle',
  'steam vapor hot':          'Steam',
  'vacuum space empty':       'Vacuum',
  'slow snail pace':          'Snail',
  'fast speed racing':        'Speed',
  'old aged vintage':         'Aging',
  'greasy oily food':         'Fat',
  'turbid murky water':       'Turbidity',
  'toxic warning hazard':     'Hazard symbol',
  'tepid warm water bath':    'Lukewarm',
  'vegetarian salad vegetables': 'Vegetarianism',
  'tentacle octopus':         'Tentacle',
  'hives skin rash':          'Urticaria',
  'greasing pan butter':      'Basting',
  'pouring liquid glass':     'Pouring',
  'belly stomach body':       'Abdomen',
  'chart table data':         'Table (information)',

  // Seasons
  'spring cherry blossom':      'Cherry blossom',
  'summer sunny beach':         'Summer',
  'autumn fall foliage':        'Autumn',
  'winter snow cold':           'Winter',
  // Holidays — Christian
  'christmas tree lights':      'Christmas tree',
  'easter eggs colorful':       'Easter egg',
  'good friday cross church':   'Good Friday',
  'advent candles wreath':      'Advent wreath',
  'epiphany three kings':       'Biblical Magi',
  'lent ash cross prayer':      'Lent',
  'ash wednesday cross forehead': 'Ash Wednesday',
  'palm sunday palm leaves':    'Palm Sunday',
  'pentecost dove holy spirit': 'Pentecost',
  'all saints day candles cemetery': 'All Saints Day',
  'corpus christi procession':  'Corpus Christi',
  // Holidays — Islamic
  'ramadan mosque lantern':     'Ramadan',
  'eid al fitr celebration':    'Eid al-Fitr',
  'eid al adha mosque prayer':  'Eid al-Adha',
  'mawlid prophet mosque':      'Mawlid',
  // Holidays — Jewish
  'hanukkah menorah candles':   'Hanukkah',
  'passover seder plate':       'Passover Seder',
  'rosh hashanah apple honey':  'Rosh Hashanah',
  'yom kippur synagogue prayer':'Yom Kippur',
  'purim costume celebration':  'Purim',
  'sukkot sukkah harvest':      'Sukkot',
  'shavuot flowers dairy':      'Shavuot',
  // Holidays — Hindu
  'diwali oil lamps light':     'Diwali',
  'holi color powder festival': 'Holi',
  'navaratri dance goddess':    'Navaratri',
  'ganesh chaturthi idol festival': 'Ganesh Chaturthi',
  // Holidays — Buddhist
  'vesak buddha lanterns temple': 'Vesak',
  'bodhi day meditation tree':  'Bodhi Day',
  // Holidays — Other
  'nowruz persian new year':    'Nowruz',
  'vaisakhi sikh celebration':  'Vaisakhi',

  // Days
  'sunday morning calm':       'Sunday',
  'monday coffee work':        'Monday',
  'tuesday productivity desk': 'Tuesday',
  'midweek planning calendar': 'Wednesday',
  'thursday meeting teamwork': 'Thursday',
  'friday celebration weekend':'Friday',
  'saturday fun leisure':      'Saturday',
  // Months
  'january winter snow':       'January',
  'february valentines hearts':'February',
  'march spring flowers bloom':'March',
  'april rain showers':        'April',
  'may spring garden':         'May',
  'june summer sunshine':      'June',
  'july summer beach':         'July',
  'august harvest field':      'August',
  'september autumn leaves':   'September',
  'october pumpkin autumn':    'October',
  'november fog misty':        'November',
  'december christmas winter': 'December',

  // Animals
  'zebra':                 'Zebra',
  'wasp insect':           'Wasp',
  'worm earthworm':        'Earthworm',
  // Nature
  'juniper tree':          'Juniper',
  'violet flower':         'Violet (plant)',
  'scenic view landscape': 'Panorama',
  'zinc mineral':          'Zinc',
  'schist rock':           'Schist',
  // Places
  'plant nursery greenhouse': 'Plant nursery',
  // Wine
  'wine bottle':           'Wine',
  'red wine glass':        'Red wine',
  'white wine glass':      'White wine',
  'rose wine glass':       'Rosé',
  'vinho verde wine glass': 'Vinho verde',
  'vinho verde wine':      'Vinho verde',
  'champagne flute bubbles': 'Champagne',
  'prosecco sparkling wine glass': 'Prosecco',
  'cava spanish sparkling wine': 'Cava',
  'sparkling wine bubbles glass': 'Sparkling wine',
  'port wine porto':       'Port wine',
  'madeira wine':          'Madeira wine',
  'moscatel wine':         'Moscato wine',
  'claret red wine':       'Claret',
  'dessert wine sweet':    'Dessert wine',
  'table wine dinner':     'Table wine',
  'house wine carafe':     'Wine',
  'vineyard grapes':       'Vineyard',
  'wine cellar barrels':   'Wine cellar',
  'wine glass crystal':    'Wine glass',
  'wine list menu':        'Menu',
  'wine tasting':          'Wine tasting',
  'grape harvest picker':  'Grape harvest',
  'vinaigrette dressing':  'Vinaigrette',
  // Seafood
  'toadfish':                              'Toadfish',
  'rays bream fish':                       'Brama brama',
  'scallop shellfish':                     'Scallop',
  'clam shell seafood raw opened':         'Clam',
  'mackerel fish':                         'Atlantic mackerel',
  'dried shrimp small orange asian':       'Dried shrimp',
  'paua abalone new zealand shell iridescent': 'Haliotis iris',
  'paua abalone iridescent shell new zealand': 'Haliotis iris',
  'tarakihi fish new zealand white fillet':'Nemadactylus macropterus',
  'crawfish crayfish louisiana boil red':  'Crayfish',
  'dried cod stockfish hanging traditional nordic': 'Stockfish',
  'ahi tuna steak raw sushi grade red':    'Yellowfin tuna',
  'king crab leg red alaska steamed':      'Red king crab',
  'king crab alaska legs red steamed':     'Red king crab',
  'arctic char salmon pink fillet fresh':  'Arctic char',
  'coconut crab large tropical island':    'Coconut crab',
  'black scabbard fish dark deep sea madeira': 'Aphanopus carbo',
  'limpets grilled shell atlantic azores madeira': 'Patella vulgata',
  // Fix existing seafood entries with better Wikipedia titles
  'salt cod bacalhau':     'Bacalhau',
  'dogfish shark':         'Small-spotted catshark',
  'periwinkle shellfish':  'Common periwinkle',
  // Food additions
  'veal meat':             'Veal',
  'syrup bottle':          'Syrup',
  'vol au vent pastry':    'Vol-au-vent',
  'demitasse espresso cup': 'Demitasse',

  // Additional food
  'plum fruit':            'Plum',
  'prune dried plum':      'Prune',
  'carob':                 'Carob',
  'pumpkin':               'Pumpkin',
  'celery':                'Celery',
  'watercress':            'Watercress',
  'seaweed algae':         'Seaweed',
  'fore ribs beef':        'Ribs (food)',
  'rump steak':            'Rump steak',
  'halibut fish':          'Halibut',
  'herring fish':          'Herring',
  'saithe pollock':        'Pollock',
  'garfish':               'Garfish',
  'lemon sole fish':       'Lemon sole',
  'whiting fish':          'Whiting',
  'absinthe drink':        'Absinthe',
  'bitter ale beer':       'Bitter (beer)',
  'cornflour starch':      'Corn starch',
  'raw sugar cane':        'Raw sugar',
  'brown sugar':           'Brown sugar',
  'caper food':            'Caper',
  'sweet sour sauce':      'Sweet and sour',
  "hors d'oeuvre appetizer": "Hors d'oeuvre",
  'meatball':              'Meatball',

  // School
  'pencil':             'Pencil',
  'pen writing':        'Pen',
  'eraser school':      'Eraser',
  'ruler':              'Ruler',
  'scissors':           'Scissors',
  'glue stick':         'Glue stick',
  'notebook':           'Notebook',
  'pencil case':        'Pencil case',
  'drawing compass':    'Compass (drawing tool)',
  'pencil sharpener':   'Pencil sharpener',
  'highlighter pen':    'Highlighter',
  'chalkboard classroom': 'Blackboard',
  'school desk':        'School desk',
  'globe world':        'Globe',
  'world map':          'World map',
  'mathematics numbers':'Mathematics',
  'science experiment': 'Science',
  'homework studying':  'Homework',
  'exam test paper':    'Test (assessment)',
  'lunch box':          'Lunchbox',
  'diploma certificate':'Diploma',
  'lobster':         'Lobster',
  'cod fish':        'Atlantic cod',
  'sardine fish':    'Sardine',
  'anchovies':       'Anchovy',
  'sea bass fish':   'European bass',
  'trout fish':      'Trout',
  'swordfish':       'Swordfish',
  'octopus':         'Octopus',
  'crab seafood':    'Crab',
  'squid calamari':  'Squid',
  'oyster':          'Oyster',
  'mussel':          'Mussel',
  'clam seafood':    'Clam',
  'frog':            'Frog',
  'egg':             'Egg',
  'soup bowl':       'Soup',
  'coconut':         'Coconut',
  'pomegranate':     'Pomegranate',
  'fig fruit':       'Common fig',
  'papaya':          'Papaya',
  'eggplant':        'Eggplant',
  'asparagus':       'Asparagus',
  'artichoke':       'Artichoke',
  'lamb meat':       'Lamb and mutton',
  'sausage':         'Sausage',
  // Food
  'chocolate':       'Chocolate',
  'cream dairy':     'Cream (food)',
  'mozzarella cheese': 'Mozzarella',
  'oats cereal':     'Oat',
  'noodles':         'Noodle',
  'quinoa grain':    'Quinoa',
  'caramel':         'Caramel',
  'doughnut':        'Doughnut',
  'donut':           'Doughnut',
  // Herbs & condiments
  'parsley herb':    'Parsley',
  'thyme herb':      'Thyme',
  'turmeric spice':  'Turmeric',
  'mustard':         'Mustard (condiment)',
  // Nuts
  'peanuts':         'Peanut',
  // Kitchen
  'fork cutlery':    'Fork',
  'spoon kitchen':   'Spoon',
  'frying pan':      'Frying pan',
  'cutting board':   'Cutting board',
  'oven kitchen':    'Oven',
  'bowl ceramic':    'Bowl',
};

const PEXELS_KEY = import.meta.env.VITE_PEXELS_API_KEY as string;

// Fetch a high-quality photo from Pexels
async function fetchPexels(query: string): Promise<string> {
  if (!PEXELS_KEY) return '';
  try {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=square`;
    const r = await fetch(url, { headers: { Authorization: PEXELS_KEY } });
    if (!r.ok) return '';
    const data = await r.json();
    const photo = data?.photos?.[0];
    // prefer large2x, fallback to large, then medium
    return photo?.src?.large2x || photo?.src?.large || photo?.src?.medium || '';
  } catch {
    return '';
  }
}

// Fetch via MediaWiki pageimages API — used for precise species/diagrams
async function fetchWikipedia(query: string): Promise<string> {
  const title = WIKI_TERMS[query.toLowerCase()] ?? query.split(' ')[0];
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=600&format=json&origin=*`;
    const r = await fetch(url);
    const data = await r.json();
    const pages = data?.query?.pages;
    if (!pages) return '';
    const page = Object.values(pages)[0] as Record<string, unknown>;
    const thumb = page?.thumbnail as { source?: string } | undefined;
    return thumb?.source || '';
  } catch {
    return '';
  }
}

// WIKI_TERMS entries try Wikipedia first (for accuracy), then fall back to Pexels if Wikipedia has no image
async function fetchImage(query: string): Promise<string> {
  if (WIKI_TERMS[query.toLowerCase()]) {
    const wiki = await fetchWikipedia(query);
    if (wiki) return wiki;
  }
  const pexels = await fetchPexels(query);
  if (pexels) return pexels;
  return fetchWikipedia(query);
}

// Curated Unsplash photos — verified accurate images
const CURATED: Record<string, string> = {
  // Animals
  'cat':                'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop',
  'dog':                'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop',
  'bird nature':        'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=400&fit=crop',
  'fish ocean':         'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=400&fit=crop',
  'horse':              'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=400&fit=crop',
  'elephant':           'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=400&fit=crop',
  'lion':               'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=400&fit=crop',
  'butterfly':          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  'rabbit':             'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop',
  'bear':               'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=400&h=400&fit=crop',
  'tiger':              'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400&h=400&fit=crop',
  'monkey':             'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&h=400&fit=crop',
  'sheep':              'https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=400&h=400&fit=crop',
  'duck':               'https://images.unsplash.com/photo-1444208516459-a2979afaff9d?w=400&h=400&fit=crop',
  // frog → Wikipedia fallback

  // Food
  'apple fruit':        'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop',
  'bread bakery':       'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
  'milk glass':         'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop',
  // egg → Wikipedia fallback
  'pizza':              'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop',
  'cake':               'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
  'strawberry':         'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop',
  'lemon':              'https://images.unsplash.com/photo-1590502593747-42a996133562?w=400&h=400&fit=crop',
  'orange fruit':       'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&h=400&fit=crop',
  'banana':             'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop',
  'tomato':             'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop',
  'cheese':             'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400&h=400&fit=crop',
  'rice bowl':          'https://images.unsplash.com/photo-1536304993881-ff86e0c9b785?w=400&h=400&fit=crop',
  // soup bowl → Wikipedia fallback
  'coffee cup':         'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
  // chocolate → Wikipedia

  // Seafood
  // sardine fish → Wikipedia fallback
  'salmon fish':        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop',
  'shrimp seafood':     'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=400&fit=crop',
  // octopus, crab, lobster, tuna, cod, squid, oyster, mussel, clam, anchovies, sea bass, trout, swordfish → Wikipedia

  // Nature
  'sun sunrise':        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
  'moon night':         'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=400&h=400&fit=crop',
  'tree nature':        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=400&fit=crop',
  'flower bloom':       'https://images.unsplash.com/photo-1490750967868-88df5691cc6c?w=400&h=400&fit=crop',
  'mountain landscape': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=400&fit=crop',
  'ocean waves':        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&h=400&fit=crop',
  'rain drops':         'https://images.unsplash.com/photo-1438449805896-28a666819a20?w=400&h=400&fit=crop',
  'snow winter':        'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&h=400&fit=crop',
  'river':              'https://images.unsplash.com/photo-1439728441434-45b4c8e3c4b7?w=400&h=400&fit=crop',
  'forest':             'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=400&fit=crop',
  'desert sand':        'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=400&fit=crop',
  'cloud sky':          'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=400&h=400&fit=crop',

  // Home
  'chair furniture':    'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop',
  'table wood':         'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
  'bed bedroom':        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=400&fit=crop',
  // door entrance, window light → Wikipedia
  'book reading':       'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=400&fit=crop',
  'lamp light':         'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
  'sofa couch':         'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop',
  'mirror':             'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?w=400&h=400&fit=crop',
  'clock':              'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop',

  // Transport
  'car road':           'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=400&fit=crop',
  'bicycle':            'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=400&fit=crop',
  // airplane sky, boat water → Wikipedia
  'train railway':      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=400&fit=crop',
  'bus city':           'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=400&h=400&fit=crop',
  'motorcycle':         'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop',
  'tram city':          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  'electric bike':      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=400&fit=crop',
  'coach bus':          'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=400&fit=crop',
  'lorry truck':        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=400&fit=crop',
  'helicopter':         'https://images.unsplash.com/photo-1534569635806-4d53c9e7ea64?w=400&h=400&fit=crop',

  // Colors — objects that clearly show the hue
  'red color abstract':    'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop',
  'blue sky ocean':        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
  'green nature forest':   'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=400&fit=crop',
  'yellow sunflower':      'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=400&fit=crop',
  'purple lavender':       'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=400&h=400&fit=crop',
  'orange color sunset':   'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&h=400&fit=crop',
  'pink flowers':          'https://images.unsplash.com/photo-1490750967868-88df5691cc6c?w=400&h=400&fit=crop',
  'white snow minimal':    'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&h=400&fit=crop',

  // Body
  // hand, eye closeup, nose face → Wikipedia
  // mouth smile → Wikipedia fallback
  // ear → Wikipedia
  'hair':               'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop',
  // heart → Wikipedia fallback
  // foot barefoot → Wikipedia fallback

  // Clothes
  'shirt clothing':     'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&h=400&fit=crop',
  'shoes':              'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
  'hat':                'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop',
  'dress fashion':      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
  'jacket':             'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
  'glasses eyewear':    'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=400&fit=crop',

  // Sports
  'ball sport':         'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop',
  'swimming pool':      'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=400&fit=crop',
  'football soccer':    'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=400&fit=crop',
  'tennis':             'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=400&fit=crop',
  'running sport':      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=400&fit=crop',
  'yoga':               'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop',

  // Places
  'school building':    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop',
  'hospital':           'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop',
  'park green':         'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=400&h=400&fit=crop',
  'beach sand':         'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
  'market':             'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=400&fit=crop',
  'library books':      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
  'restaurant':         'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
  // airport → Wikipedia

  // Gastronomy — Fruits
  'mango fruit':        'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop',
  'pineapple':          'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=400&fit=crop',
  'grapes':             'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop',
  'watermelon':         'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&h=400&fit=crop',
  'peach fruit':        'https://images.unsplash.com/photo-1595743825637-cdafc8ad4173?w=400&h=400&fit=crop',
  'pear fruit':         'https://images.unsplash.com/photo-1601275868399-5df6f0c07ca5?w=400&h=400&fit=crop',
  'cherry fruit':       'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400&h=400&fit=crop',
  'blueberry':          'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=400&fit=crop',
  'raspberry':          'https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=400&h=400&fit=crop',
  // coconut, pomegranate, fig fruit, papaya → Wikipedia
  'avocado':            'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=400&h=400&fit=crop',
  'melon':              'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=400&h=400&fit=crop',

  // Gastronomy — Vegetables
  'carrot':             'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=400&fit=crop',
  'potato':             'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop',
  'onion':              'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=400&fit=crop',
  'garlic':             'https://images.unsplash.com/photo-1415253461696-b4ef09c22a66?w=400&h=400&fit=crop',
  'broccoli':           'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop',
  'spinach':            'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
  'lettuce salad':      'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop',
  'cucumber':           'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=400&fit=crop',
  'bell pepper':        'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop',
  // eggplant, asparagus, artichoke → Wikipedia
  'zucchini':           'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=400&h=400&fit=crop',
  'mushroom':           'https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400&h=400&fit=crop',
  'corn':               'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop',
  'peas green':         'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400&h=400&fit=crop',
  'leek vegetable':     'https://images.unsplash.com/photo-1623227413711-25ee4a2b8de7?w=400&h=400&fit=crop',
  'cauliflower':        'https://images.unsplash.com/photo-1568584711271-6bf3a01b3b5b?w=400&h=400&fit=crop',
  'cabbage':            'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&h=400&fit=crop',

  // Gastronomy — Meat
  'chicken meat':       'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=400&fit=crop',
  'beef steak':         'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop',
  'pork meat':          'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400&h=400&fit=crop',
  // lamb meat, sausage → Wikipedia
  'turkey roast':       'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=400&h=400&fit=crop',
  'duck roast':         'https://images.unsplash.com/photo-1612392062422-18b4d5bdb8d1?w=400&h=400&fit=crop',
  // ham prosciutto → Wikipedia
  'bacon':              'https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=400&fit=crop',
  'steak grilled':      'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=400&h=400&fit=crop',

  // Gastronomy — Dairy
  'butter':             'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop',
  'yogurt':             'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop',
  // cream dairy, mozzarella cheese → Wikipedia

  // Gastronomy — Bread & Grains
  'pasta':              'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=400&fit=crop',
  // noodles, oats cereal → Wikipedia
  // flour baking → Wikipedia
  'croissant':          'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
  'bagel':              'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop',
  // quinoa grain → Wikipedia

  // Gastronomy — Drinks
  'water glass':        'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=400&fit=crop',
  'tea cup':            'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&h=400&fit=crop',
  'wine glass':         'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop',
  'beer glass':         'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=400&fit=crop',
  'orange juice':       'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop',
  'smoothie':           'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop',
  'cocktail drink':     'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=400&h=400&fit=crop',
  'lemonade':           'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=400&h=400&fit=crop',
  'espresso coffee':    'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=400&fit=crop',

  // Gastronomy — Desserts
  'ice cream':          'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=400&fit=crop',
  'cookie':             'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop',
  // donut/doughnut → Wikipedia
  'pancake':            'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
  'tiramisu':           'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop',
  'cheesecake':         'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop',
  // pudding dessert → Wikipedia
  'honey jar':          'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
  'jam jar':            'https://images.unsplash.com/photo-1597498685600-1a75e08ccf0b?w=400&h=400&fit=crop',
  // caramel → Wikipedia

  // Gastronomy — Herbs & Spices
  'salt':               'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=400&h=400&fit=crop',
  'pepper spice':       'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&h=400&fit=crop',
  'basil herb':         'https://images.unsplash.com/photo-1632584185413-5b2f651e6cf1?w=400&h=400&fit=crop',
  'cinnamon spice':     'https://images.unsplash.com/photo-1508061256848-b5a9b5184c38?w=400&h=400&fit=crop',
  'ginger root':        'https://images.unsplash.com/photo-1573414405013-46a5e9d15e76?w=400&h=400&fit=crop',
  // vanilla → Wikipedia
  // parsley herb, thyme herb, turmeric spice → Wikipedia
  'rosemary herb':      'https://images.unsplash.com/photo-1515586838455-8ae9f9b29cfe?w=400&h=400&fit=crop',
  'chili pepper red':   'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&h=400&fit=crop',
  // saffron spice → Wikipedia

  // Gastronomy — Condiments
  'olive oil':          'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
  'vinegar bottle':     'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=400&h=400&fit=crop',
  'ketchup':            'https://images.unsplash.com/photo-1605789538467-f715d58e03f9?w=400&h=400&fit=crop',
  // mustard → Wikipedia
  'mayonnaise':         'https://images.unsplash.com/photo-1600454309261-3dc9ead47b5e?w=400&h=400&fit=crop',
  'soy sauce':          'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
  'pesto sauce':        'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400&h=400&fit=crop',

  // Gastronomy — Dishes
  'sushi':              'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=400&fit=crop',
  'burger':             'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop',
  'salad fresh':        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
  'sandwich':           'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop',
  'omelette eggs':      'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=400&fit=crop',
  'paella':             'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=400&fit=crop',
  'risotto':            'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=400&fit=crop',
  'tacos mexican':      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop',
  'curry dish':         'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop',
  // stew pot → Wikipedia
  'ramen noodles':      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop',

  // Gastronomy — Nuts & Legumes
  'almonds nuts':       'https://images.unsplash.com/photo-1574184864703-3487b13f0edd?w=400&h=400&fit=crop',
  'walnuts':            'https://images.unsplash.com/photo-1563412580-d4c42a137238?w=400&h=400&fit=crop',
  'beans legumes':      'https://images.unsplash.com/photo-1601001434776-0ede7f7e15e3?w=400&h=400&fit=crop',
  'lentils':            'https://images.unsplash.com/photo-1609197100763-bb2e72e3d6a0?w=400&h=400&fit=crop',
  'chickpeas':          'https://images.unsplash.com/photo-1515543904379-3d757abe9a5d?w=400&h=400&fit=crop',
  // peanuts → Wikipedia

  // Gastronomy — Kitchen
  'knife kitchen':      'https://images.unsplash.com/photo-1594999678537-d2e459e9b0d8?w=400&h=400&fit=crop',
  // frying pan → Wikipedia
  'cooking pot':        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
  // fork cutlery, spoon kitchen, bowl ceramic, oven kitchen, cutting board → Wikipedia

  // PT vocab — CURATED
  'white grape':              'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop',
  'muscat grape green':       'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop',
  'raisins dried grapes':     'https://images.unsplash.com/photo-1597528380855-4f0fbe8a0f2e?w=400&h=400&fit=crop',
  'black grapes dark':        'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop',
  'grapefruit citrus':        'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=400&h=400&fit=crop',
  'tangerine mandarin':       'https://images.unsplash.com/photo-1548155566-7b4c2a2f1eb4?w=400&h=400&fit=crop',
  'lime citrus green':        'https://images.unsplash.com/photo-1590502593747-42a996133562?w=400&h=400&fit=crop',
  'green beans':              'https://images.unsplash.com/photo-1567375699567-c1eeaeb8c68a?w=400&h=400&fit=crop',
  'stinging nettle plant':    'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
  'clover plant':             'https://images.unsplash.com/photo-1542601906897-5759f2aa1b26?w=400&h=400&fit=crop',
  'lupin lupini beans':       'https://images.unsplash.com/photo-1515543904379-3d757abe9a5d?w=400&h=400&fit=crop',
  'spare ribs grilled':       'https://images.unsplash.com/photo-1544025162-d76538647ad1?w=400&h=400&fit=crop',
  'sirloin steak beef':       'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=400&h=400&fit=crop',
  'venison deer meat':        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop',
  'bone marrow roasted':      'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop',
  'tripe offal':              'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400&h=400&fit=crop',
  'smoked bacon rashers':     'https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=400&fit=crop',
  'lard fat pork':            'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop',
  'tournedos fillet steak':   'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=400&h=400&fit=crop',
  'pork crackling chicharron':'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400&h=400&fit=crop',
  'bull animal farm':         'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&h=400&fit=crop',
  'shark fish ocean':         'https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?w=400&h=400&fit=crop',
  'rainbow trout fish':       'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop',
  'wheat field grain':        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop',
  'tapioca pearls':           'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400&h=400&fit=crop',
  'juice glass fresh':        'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop',
  'fruit juice colorful':     'https://images.unsplash.com/photo-1534353473418-4cfa0c1ba5f9?w=400&h=400&fit=crop',
  'herbal tea cup herbs':     'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&h=400&fit=crop',
  'meringue dessert white':   'https://images.unsplash.com/photo-1531069538330-e8a3b8bfed13?w=400&h=400&fit=crop',
  'apple pie tart':           'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=400&h=400&fit=crop',
  'chocolate truffle':        'https://images.unsplash.com/photo-1511381939415-e44f02b4dc0f?w=400&h=400&fit=crop',
  'mixed toast ham cheese':   'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop',
  'bruschetta toast topping': 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=400&fit=crop',
  'tortilla flatbread':       'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop',
  'toast bread golden':       'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
  'seasoning spices mix':     'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&h=400&fit=crop',
  'black truffle fungus':     'https://images.unsplash.com/photo-1504504538629-c1bb67b2de99?w=400&h=400&fit=crop',
  'serving platter dish':     'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop',
  'baking tray oven':         'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
  'saucepan cooking':         'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
  'cutlery set silverware':   'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop',
  'pot lid cover':            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
  'tablecloth table setting': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop',
  'cup goblet':               'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop',
  'ceramic vessel container': 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=400&fit=crop',
  'tavern bar interior':      'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=400&h=400&fit=crop',
  'tasca tavern portuguese':  'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=400&h=400&fit=crop',
  'butcher shop meat':        'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=400&fit=crop',
  'heather moorland purple':  'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=400&h=400&fit=crop',
  'tulip flower colorful':    'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=400&fit=crop',
  'topaz gemstone crystal':   'https://images.unsplash.com/photo-1561714200-d28799b2f8b4?w=400&h=400&fit=crop',
  'roof tile terracotta':     'https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=400&h=400&fit=crop',
  'turtle sea tortoise':      'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400&h=400&fit=crop',
  'chaffinch bird':           'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Male_Common_Chaffinch.jpg/480px-Male_Common_Chaffinch.jpg',
  'mermaid ocean mythology':  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/John_William_Waterhouse_-_A_Mermaid.jpg/480px-John_William_Waterhouse_-_A_Mermaid.jpg',
  'vase flower home':         'https://images.unsplash.com/photo-1490750967868-88df5691cc6c?w=400&h=400&fit=crop',
  'candle flame light':       'https://images.unsplash.com/photo-1478431048903-94c27d6ba9c8?w=400&h=400&fit=crop',
  'steam vapor hot':          'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
  'slow snail pace':          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  'fast speed racing':        'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop',
  'old aged vintage':         'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop',
  'greasy oily food':         'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop',
  'turbid murky water':       'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&h=400&fit=crop',
  'toxic warning hazard':     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  'tepid warm water bath':    'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=400&fit=crop',
  'vegetarian salad vegetables': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
  'tentacle octopus':         'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=400&h=400&fit=crop',
  'hives skin rash':          'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=400&fit=crop',
  'greasing pan butter':      'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop',
  'pouring liquid glass':     'https://images.unsplash.com/photo-1548940740-204726a19be3?w=400&h=400&fit=crop',
  'belly stomach body':       'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
  'chart table data':         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',

  // Seasons
  'spring cherry blossom':       'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=400&fit=crop',
  'summer sunny beach':          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
  'autumn fall foliage':         'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  'winter snow cold':            'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&h=400&fit=crop',

  // Holidays — Christian
  'christmas tree lights':       'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=400&fit=crop',
  'easter eggs colorful':        'https://images.unsplash.com/photo-1522459666956-5786f8babb8d?w=400&h=400&fit=crop',
  'good friday cross church':    'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop',
  'advent candles wreath':       'https://images.unsplash.com/photo-1512389098783-66b81f86e199?w=400&h=400&fit=crop',
  'epiphany three kings':        'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=400&fit=crop',
  'lent ash cross prayer':       'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop',
  'ash wednesday cross forehead':'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop',
  'palm sunday palm leaves':     'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
  'pentecost dove holy spirit':  'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop',
  'all saints day candles cemetery': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  'corpus christi procession':   'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop',

  // Holidays — Islamic
  'ramadan mosque lantern':      'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=400&h=400&fit=crop',
  'eid al fitr celebration':     'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=400&h=400&fit=crop',
  'eid al adha mosque prayer':   'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=400&h=400&fit=crop',
  'mawlid prophet mosque':       'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=400&h=400&fit=crop',

  // Holidays — Jewish
  'hanukkah menorah candles':    'https://images.unsplash.com/photo-1544967919-44c1ef2f9e4a?w=400&h=400&fit=crop',
  'passover seder plate':        'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&h=400&fit=crop',
  'rosh hashanah apple honey':   'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=400&h=400&fit=crop',
  'yom kippur synagogue prayer': 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop',
  'purim costume celebration':   'https://images.unsplash.com/photo-1535268244197-63e388f6bcbd?w=400&h=400&fit=crop',
  'sukkot sukkah harvest':       'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop',
  'shavuot flowers dairy':       'https://images.unsplash.com/photo-1490750967868-88df5691cc6c?w=400&h=400&fit=crop',

  // Holidays — Hindu
  'diwali oil lamps light':      'https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=400&h=400&fit=crop',
  'holi color powder festival':  'https://images.unsplash.com/photo-1554188248-986adbb73be4?w=400&h=400&fit=crop',
  'navaratri dance goddess':     'https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=400&h=400&fit=crop',
  'ganesh chaturthi idol festival': 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=400&h=400&fit=crop',

  // Holidays — Buddhist
  'vesak buddha lanterns temple':'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop',
  'bodhi day meditation tree':   'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop',

  // Holidays — Other
  'nowruz persian new year':     'https://images.unsplash.com/photo-1490750967868-88df5691cc6c?w=400&h=400&fit=crop',
  'vaisakhi sikh celebration':   'https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=400&h=400&fit=crop',

  // Days of the week
  'sunday morning calm':        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
  'monday coffee work':         'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
  'tuesday productivity desk':  'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop',
  'midweek planning calendar':  'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400&h=400&fit=crop',
  'thursday meeting teamwork':  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop',
  'friday celebration weekend': 'https://images.unsplash.com/photo-1535268244197-63e388f6bcbd?w=400&h=400&fit=crop',
  'saturday fun leisure':       'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',

  // Months of the year
  'january winter snow':        'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&h=400&fit=crop',
  'february valentines hearts': 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop',
  'march spring flowers bloom': 'https://images.unsplash.com/photo-1490750967868-88df5691cc6c?w=400&h=400&fit=crop',
  'april rain showers':         'https://images.unsplash.com/photo-1438449805896-28a666819a20?w=400&h=400&fit=crop',
  'may spring garden':          'https://images.unsplash.com/photo-1477419501086-dfb0edfe7a85?w=400&h=400&fit=crop',
  'june summer sunshine':       'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
  'july summer beach':          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
  'august harvest field':       'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop',
  'september autumn leaves':    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  'october pumpkin autumn':     'https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=400&h=400&fit=crop',
  'november fog misty':         'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=400&h=400&fit=crop',
  'december christmas winter':  'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=400&fit=crop',

  // Animals additions
  'zebra':                 'https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=400&h=400&fit=crop',
  'wasp insect':           'https://images.unsplash.com/photo-1558618047-f2db8cebc571?w=400&h=400&fit=crop',
  'worm earthworm':        'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=400&h=400&fit=crop',

  // Nature additions
  'juniper tree':          'https://images.unsplash.com/photo-1542601906897-5759f2aa1b26?w=400&h=400&fit=crop',
  'violet flower':         'https://images.unsplash.com/photo-1490750967868-88df5691cc6c?w=400&h=400&fit=crop',
  'scenic view landscape': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=400&fit=crop',
  'zinc mineral':          'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&h=400&fit=crop',
  'schist rock':           'https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=400&h=400&fit=crop',

  // Places additions
  'plant nursery greenhouse': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',

  // Wine
  'wine bottle':           'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&h=400&fit=crop',
  'red wine glass':        'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop',
  'white wine glass':      'https://images.unsplash.com/photo-1519671282429-b8d4945f4d8a?w=400&h=400&fit=crop',
  'rose wine glass':       'https://images.unsplash.com/photo-1598306442928-4d90f32c6866?w=400&h=400&fit=crop',
  'vinho verde wine glass': 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&h=400&fit=crop',
  'vinho verde wine':      'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&h=400&fit=crop',
  'champagne flute bubbles': 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400&h=400&fit=crop',
  'prosecco sparkling wine glass': 'https://images.unsplash.com/photo-1558618047-f4e70e4a48f3?w=400&h=400&fit=crop',
  'cava spanish sparkling wine': 'https://images.unsplash.com/photo-1534236006086-8f5d8d3b7fcb?w=400&h=400&fit=crop',
  'sparkling wine bubbles glass': 'https://images.unsplash.com/photo-1504279807002-09854ccc9b6c?w=400&h=400&fit=crop',
  'port wine porto':       'https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=400&fit=crop',
  'madeira wine':          'https://images.unsplash.com/photo-1567529684892-09290a1b2d05?w=400&h=400&fit=crop',
  'moscatel wine':         'https://images.unsplash.com/photo-1558618047-f4e70e4a48f3?w=400&h=400&fit=crop',
  'claret red wine':       'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=400&fit=crop',
  'dessert wine sweet':    'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=400&h=400&fit=crop',
  'table wine dinner':     'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop',
  'house wine carafe':     'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop',
  'vineyard grapes':       'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=400&fit=crop',
  'wine cellar barrels':   'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&h=400&fit=crop',
  'wine glass crystal':    'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=400&fit=crop',
  'wine list menu':        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
  'wine tasting':          'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=400&h=400&fit=crop',
  'grape harvest picker':  'https://images.unsplash.com/photo-1504279807002-09854ccc9b6c?w=400&h=400&fit=crop',
  'vinaigrette dressing':  'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=400&fit=crop',

  // Seafood additions
  'scallop shellfish':     'https://images.unsplash.com/photo-1559820135-a5f98de84900?w=400&h=400&fit=crop',

  // Food additions
  'veal meat':             'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop',
  'syrup bottle':          'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
  'vol au vent pastry':    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
  'demitasse espresso cup':'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=400&fit=crop',

  // Additional food
  'plum fruit':            'https://images.unsplash.com/photo-1562051036-e0eea191d42f?w=400&h=400&fit=crop',
  'prune dried plum':      'https://images.unsplash.com/photo-1597528380855-4f0fbe8a0f2e?w=400&h=400&fit=crop',
  'carob':                 'https://images.unsplash.com/photo-1548940740-204726a19be3?w=400&h=400&fit=crop',
  'pumpkin':               'https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=400&h=400&fit=crop',
  'celery':                'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop',
  'watercress':            'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
  'seaweed algae':         'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop',
  'fore ribs beef':        'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop',
  'rump steak':            'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=400&h=400&fit=crop',
  'herring fish':          'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop',
  'absinthe drink':        'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=400&fit=crop',
  'bitter ale beer':       'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=400&fit=crop',
  'cornflour starch':      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop',
  'raw sugar cane':        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  'brown sugar':           'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  'caper food':            'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=400&fit=crop',
  'sweet sour sauce':      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=400&fit=crop',
  "hors d'oeuvre appetizer":'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
  'meatball':              'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=400&fit=crop',

  // School
  'pencil':              'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=400&fit=crop',
  'pen writing':         'https://images.unsplash.com/photo-1583394293859-39b4d88f8f6c?w=400&h=400&fit=crop',
  'eraser school':       'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=400&h=400&fit=crop',
  'ruler':               'https://images.unsplash.com/photo-1609349093772-5b8acc866b2d?w=400&h=400&fit=crop',
  'scissors':            'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?w=400&h=400&fit=crop',
  'glue stick':          'https://images.unsplash.com/photo-1617952739516-b5ca15b4b793?w=400&h=400&fit=crop',
  'notebook':            'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop',
  'textbook open':       'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=400&fit=crop',
  'backpack school':     'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
  'pencil case':         'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=400&fit=crop',
  'marker pen':          'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=400&h=400&fit=crop',
  'crayons colorful':    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  'pencil sharpener':    'https://images.unsplash.com/photo-1603486002664-af5c1a909b50?w=400&h=400&fit=crop',
  'calculator':          'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&h=400&fit=crop',
  'drawing compass':     'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop',
  'highlighter pen':     'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop',
  'chalkboard classroom':'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop',
  'school desk':         'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop',
  'classroom':           'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop',
  'globe world':         'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=400&h=400&fit=crop',
  'world map':           'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=400&fit=crop',
  'teacher classroom':   'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop',
  'student studying':    'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400&h=400&fit=crop',
  'mathematics numbers': 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop',
  'science experiment':  'https://images.unsplash.com/photo-1532094349884-543559059b57?w=400&h=400&fit=crop',
  'art painting':        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop',
  'music notes':         'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=400&fit=crop',
  'history book':        'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=400&fit=crop',
  'homework studying':   'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=400&fit=crop',
  'exam test paper':     'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=400&fit=crop',
  'lunch box':           'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=400&fit=crop',
  'diploma certificate': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop',
};

export function useUnsplashImage(query: string) {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) { setLoading(false); return; }
    const key = query.toLowerCase();

    if (cache.has(key)) {
      setImageUrl(cache.get(key)!);
      setLoading(false);
      return;
    }

    if (CURATED[key]) {
      cache.set(key, CURATED[key]);
      setImageUrl(CURATED[key]);
      setLoading(false);
      return;
    }

    // Fetch via Pexels → Wikipedia fallback
    setLoading(true);
    fetchImage(query)
      .then(url => { cache.set(key, url); setImageUrl(url); })
      .finally(() => setLoading(false));
  }, [query]);

  // Called by <img onError> — retries with Wikipedia when the primary image fails
  const handleError = useCallback(() => {
    if (!imageUrl || imageUrl.includes('wikipedia.org')) return;
    const key = query.toLowerCase();
    setImageUrl('');
    fetchWikipedia(query).then(url => {
      if (url) { cache.set(key, url); setImageUrl(url); }
    });
  }, [query, imageUrl]);

  return { imageUrl, loading, handleError };
}
