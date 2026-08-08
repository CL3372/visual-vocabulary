/**
 * Adds nl (Dutch) translations to all word data files.
 * - Known words get proper Dutch translations from the dictionary below.
 * - Unknown words (cuisine proper nouns etc.) fall back to the English word.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../src/data');

// Comprehensive Dutch dictionary: English word → Dutch
const NL = {
  // Animals
  'Cat': 'Kat', 'Dog': 'Hond', 'Bird': 'Vogel', 'Fish': 'Vis', 'Horse': 'Paard',
  'Elephant': 'Olifant', 'Lion': 'Leeuw', 'Butterfly': 'Vlinder', 'Rabbit': 'Konijn',
  'Bear': 'Beer', 'Tiger': 'Tijger', 'Monkey': 'Aap', 'Cow': 'Koe', 'Sheep': 'Schaap',
  'Duck': 'Eend', 'Frog': 'Kikker', 'Zebra': 'Zebra', 'Wasp': 'Wesp', 'Worm': 'Worm',
  'Chicken': 'Kip', 'Pig': 'Varken', 'Goat': 'Geit', 'Donkey': 'Ezel',
  'Fox': 'Vos', 'Wolf': 'Wolf', 'Deer': 'Hert', 'Snake': 'Slang',
  'Turtle': 'Schildpad', 'Penguin': 'Pinguïn', 'Parrot': 'Papegaai',
  'Owl': 'Uil', 'Eagle': 'Adelaar', 'Shark': 'Haai', 'Whale': 'Walvis',
  'Dolphin': 'Dolfijn', 'Octopus': 'Octopus', 'Crab': 'Krab', 'Lobster': 'Kreeft',

  // Nature
  'Sun': 'Zon', 'Moon': 'Maan', 'Tree': 'Boom', 'Flower': 'Bloem',
  'Mountain': 'Berg', 'Ocean': 'Oceaan', 'Rain': 'Regen', 'Snow': 'Sneeuw',
  'River': 'Rivier', 'Forest': 'Bos', 'Desert': 'Woestijn', 'Cloud': 'Wolk',
  'Juniper': 'Jeneverbes', 'Violet': 'Viooltje', 'View': 'Uitzicht',
  'Zinc': 'Zink', 'Schist': 'Schist', 'Lake': 'Meer', 'Sea': 'Zee',
  'Island': 'Eiland', 'Valley': 'Dal', 'Beach': 'Strand', 'Cave': 'Grot',
  'Waterfall': 'Waterval', 'Volcano': 'Vulkaan', 'Cliff': 'Klif',

  // Seafood
  'Sardine': 'Sardine', 'Salmon': 'Zalm', 'Tuna': 'Tonijn', 'Cod': 'Kabeljauw',
  'Shrimp': 'Garnaal', 'Prawn': 'Garnaal', 'Oyster': 'Oester', 'Mussel': 'Mossel',
  'Squid': 'Inktvis', 'Anchovy': 'Ansjovis', 'Herring': 'Haring', 'Mackerel': 'Makreel',
  'Sea Bass': 'Zeebaars', 'Trout': 'Forel', 'Clam': 'Venusschelp',

  // Kitchen / Gastronomy
  'Knife': 'Mes', 'Fork': 'Vork', 'Spoon': 'Lepel', 'Plate': 'Bord',
  'Bowl': 'Kom', 'Cup': 'Kopje', 'Glass': 'Glas', 'Pan': 'Pan',
  'Pot': 'Pot', 'Oven': 'Oven', 'Fridge': 'Koelkast', 'Freezer': 'Vriezer',
  'Blender': 'Blender', 'Toaster': 'Broodrooster', 'Kettle': 'Waterkoker',
  'Colander': 'Vergiet', 'Rolling Pin': 'Deegroller', 'Grater': 'Rasp',
  'Cutting Board': 'Snijplank', 'Whisk': 'Garde', 'Ladle': 'Pollepel',
  'Spatula': 'Spatel', 'Tongs': 'Tang', 'Peeler': 'Dunschiller',
  'Measuring Cup': 'Maatbeker', 'Apron': 'Schort', 'Wok': 'Wok',
  'Barbecue': 'Barbecue', 'Grill': 'Grill', 'Microwave': 'Magnetron',
  'Dishwasher': 'Vaatwasser', 'Mixer': 'Mixer', 'Coffee Machine': 'Koffiemachine',
  'Cafetiere': 'Cafetière', 'Mortar': 'Vijzel', 'Pestle': 'Stamper',
  'Colander': 'Vergiet', 'Strainer': 'Zeef', 'Steamer': 'Stomer',

  // Home
  'Table': 'Tafel', 'Chair': 'Stoel', 'Sofa': 'Bank', 'Bed': 'Bed',
  'Door': 'Deur', 'Window': 'Raam', 'Floor': 'Vloer', 'Ceiling': 'Plafond',
  'Wall': 'Muur', 'Stairs': 'Trap', 'Lamp': 'Lamp', 'Mirror': 'Spiegel',
  'Carpet': 'Tapijt', 'Curtain': 'Gordijn', 'Shelf': 'Plank',
  'Wardrobe': 'Kledingkast', 'Drawer': 'Lade', 'Pillow': 'Kussen',
  'Blanket': 'Deken', 'Mattress': 'Matras', 'Desk': 'Bureau',
  'Bookcase': 'Boekenkast', 'Fireplace': 'Open haard', 'Radiator': 'Radiator',
  'Painting': 'Schilderij', 'Clock': 'Klok', 'Television': 'Televisie',
  'Remote Control': 'Afstandsbediening', 'Washing Machine': 'Wasmachine',
  'Dryer': 'Droger', 'Vacuum Cleaner': 'Stofzuiger', 'Broom': 'Bezem',
  'Mop': 'Dweil', 'Bucket': 'Emmer', 'Dustbin': 'Prullenbak',
  'Tap': 'Kraan', 'Sink': 'Gootsteen', 'Bathtub': 'Badkuip',
  'Shower': 'Douche', 'Toilet': 'Toilet', 'Towel': 'Handdoek',

  // Transport
  'Car': 'Auto', 'Bus': 'Bus', 'Train': 'Trein', 'Bicycle': 'Fiets',
  'Motorcycle': 'Motor', 'Aeroplane': 'Vliegtuig', 'Boat': 'Boot',
  'Ship': 'Schip', 'Helicopter': 'Helikopter', 'Truck': 'Vrachtwagen',
  'Taxi': 'Taxi', 'Tram': 'Tram', 'Subway': 'Metro', 'Ferry': 'Veerboot',
  'Scooter': 'Scooter', 'Van': 'Busje', 'Lorry': 'Vrachtwagen',
  'Ambulance': 'Ambulance', 'Fire Engine': 'Brandweerauto', 'Police Car': 'Politieauto',

  // Colours
  'Red': 'Rood', 'Blue': 'Blauw', 'Green': 'Groen', 'Yellow': 'Geel',
  'Orange': 'Oranje', 'Purple': 'Paars', 'Pink': 'Roze', 'Black': 'Zwart',
  'White': 'Wit', 'Grey': 'Grijs', 'Brown': 'Bruin', 'Gold': 'Goud',
  'Silver': 'Zilver', 'Beige': 'Beige', 'Turquoise': 'Turkoois',
  'Cyan': 'Cyaan', 'Magenta': 'Magenta', 'Indigo': 'Indigo', 'Lilac': 'Lila',
  'Cream': 'Crème', 'Maroon': 'Kastanjebruin', 'Navy': 'Marineblauw',
  'Olive': 'Olijfgroen', 'Teal': 'Petrolblauw', 'Coral': 'Koraalrood',

  // Clothes
  'Shirt': 'Overhemd', 'T-shirt': 'T-shirt', 'Trousers': 'Broek',
  'Jeans': 'Jeans', 'Dress': 'Jurk', 'Skirt': 'Rok', 'Jacket': 'Jas',
  'Coat': 'Jas', 'Shoes': 'Schoenen', 'Boots': 'Laarzen', 'Sandals': 'Sandalen',
  'Socks': 'Sokken', 'Hat': 'Hoed', 'Scarf': 'Sjaal', 'Gloves': 'Handschoenen',
  'Belt': 'Riem', 'Tie': 'Das', 'Jumper': 'Trui', 'Sweater': 'Sweater',
  'Hoodie': 'Hoodie', 'Suit': 'Pak', 'Underwear': 'Ondergoed',
  'Trainers': 'Sneakers', 'Sunglasses': 'Zonnebril', 'Watch': 'Horloge',
  'Bag': 'Tas', 'Backpack': 'Rugzak', 'Handbag': 'Handtas',

  // Sports
  'Football': 'Voetbal', 'Basketball': 'Basketbal', 'Tennis': 'Tennis',
  'Swimming': 'Zwemmen', 'Running': 'Hardlopen', 'Cycling': 'Fietsen',
  'Boxing': 'Boksen', 'Golf': 'Golf', 'Volleyball': 'Volleybal',
  'Rugby': 'Rugby', 'Cricket': 'Cricket', 'Baseball': 'Honkbal',
  'Skiing': 'Skiën', 'Surfing': 'Surfen', 'Yoga': 'Yoga',
  'Gymnastics': 'Gymnastiek', 'Martial Arts': 'Vechtsporten',
  'Rowing': 'Roeien', 'Sailing': 'Zeilen', 'Climbing': 'Klimmen',
  'Hockey': 'Hockey', 'Ice Hockey': 'IJshockey', 'Badminton': 'Badminton',
  'Table Tennis': 'Tafeltennis', 'Archery': 'Boogschieten',

  // School
  'Pencil': 'Potlood', 'Pen': 'Pen', 'Book': 'Boek', 'Notebook': 'Notitieboek',
  'Ruler': 'Liniaal', 'Scissors': 'Schaar', 'Eraser': 'Gum',
  'Backpack': 'Rugzak', 'Desk': 'Bureau', 'Blackboard': 'Schoolbord',
  'Chalk': 'Krijt', 'Compass': 'Passer', 'Calculator': 'Rekenmachine',
  'Globe': 'Wereldbol', 'Map': 'Kaart', 'Dictionary': 'Woordenboek',
  'Teacher': 'Leraar', 'Student': 'Leerling', 'Classroom': 'Klaslokaal',
  'Library': 'Bibliotheek', 'Glue': 'Lijm', 'Stapler': 'Nieter',
  'Highlighter': 'Markeerstift', 'Paint': 'Verf', 'Paintbrush': 'Penseel',

  // Family
  'Mother': 'Moeder', 'Father': 'Vader', 'Sister': 'Zus', 'Brother': 'Broer',
  'Grandmother': 'Oma', 'Grandfather': 'Opa', 'Aunt': 'Tante', 'Uncle': 'Oom',
  'Cousin': 'Neef/nicht', 'Daughter': 'Dochter', 'Son': 'Zoon',
  'Wife': 'Vrouw', 'Husband': 'Man', 'Baby': 'Baby', 'Child': 'Kind',
  'Family': 'Familie', 'Niece': 'Nicht', 'Nephew': 'Neef',
  'Stepmother': 'Stiefmoeder', 'Stepfather': 'Stiefvader',
  'Twins': 'Tweeling', 'Parents': 'Ouders', 'Grandparents': 'Grootouders',

  // Occupations
  'Doctor': 'Dokter', 'Nurse': 'Verpleegkundige', 'Teacher': 'Leraar',
  'Engineer': 'Ingenieur', 'Chef': 'Kok', 'Pilot': 'Piloot', 'Farmer': 'Boer',
  'Police Officer': 'Politieagent', 'Firefighter': 'Brandweerman',
  'Lawyer': 'Advocaat', 'Architect': 'Architect', 'Dentist': 'Tandarts',
  'Artist': 'Kunstenaar', 'Musician': 'Muzikant', 'Journalist': 'Journalist',
  'Scientist': 'Wetenschapper', 'Mechanic': 'Monteur', 'Electrician': 'Elektricien',
  'Plumber': 'Loodgieter', 'Carpenter': 'Timmerman', 'Builder': 'Bouwvakker',
  'Waiter': 'Ober', 'Shopkeeper': 'Winkelier', 'Driver': 'Chauffeur',
  'Actor': 'Acteur', 'Dancer': 'Danser', 'Writer': 'Schrijver',
  'Accountant': 'Accountant', 'Manager': 'Manager', 'Programmer': 'Programmeur',

  // Weather
  'Sunny': 'Zonnig', 'Cloudy': 'Bewolkt', 'Rainy': 'Regenachtig',
  'Snowy': 'Besneeuwd', 'Windy': 'Winderig', 'Foggy': 'Mistig',
  'Stormy': 'Stormachtig', 'Thunder': 'Donder', 'Lightning': 'Bliksem',
  'Rainbow': 'Regenboog', 'Hail': 'Hagel', 'Frost': 'Vorst', 'Ice': 'IJs',
  'Heatwave': 'Hittegolf', 'Blizzard': 'Sneeuwstorm', 'Drought': 'Droogte',
  'Flood': 'Overstroming', 'Tornado': 'Tornado', 'Hurricane': 'Orkaan',
  'Temperature': 'Temperatuur', 'Forecast': 'Weersvoorspelling',
  'Umbrella': 'Paraplu', 'Thermometer': 'Thermometer',

  // Technology
  'Phone': 'Telefoon', 'Computer': 'Computer', 'Laptop': 'Laptop',
  'Tablet': 'Tablet', 'Camera': 'Camera', 'Keyboard': 'Toetsenbord',
  'Mouse': 'Muis', 'Screen': 'Scherm', 'Printer': 'Printer',
  'Internet': 'Internet', 'Password': 'Wachtwoord', 'Email': 'E-mail',
  'App': 'App', 'Software': 'Software', 'Website': 'Website',
  'Headphones': 'Koptelefoon', 'Speaker': 'Luidspreker', 'Cable': 'Kabel',
  'Charger': 'Oplader', 'Battery': 'Batterij', 'Remote Control': 'Afstandsbediening',
  'Smart TV': 'Smart TV', 'Gaming Console': 'Spelcomputer', 'USB': 'USB',

  // Numbers
  'Zero': 'Nul', 'One': 'Eén', 'Two': 'Twee', 'Three': 'Drie', 'Four': 'Vier',
  'Five': 'Vijf', 'Six': 'Zes', 'Seven': 'Zeven', 'Eight': 'Acht', 'Nine': 'Negen',
  'Ten': 'Tien', 'Eleven': 'Elf', 'Twelve': 'Twaalf', 'Twenty': 'Twintig',
  'Thirty': 'Dertig', 'Forty': 'Veertig', 'Fifty': 'Vijftig',
  'Hundred': 'Honderd', 'Thousand': 'Duizend', 'Million': 'Miljoen',
  'First': 'Eerste', 'Second': 'Tweede', 'Third': 'Derde',

  // Shapes
  'Circle': 'Cirkel', 'Square': 'Vierkant', 'Triangle': 'Driehoek',
  'Rectangle': 'Rechthoek', 'Star': 'Ster', 'Heart': 'Hart',
  'Diamond': 'Ruit', 'Oval': 'Ovaal', 'Pentagon': 'Vijfhoek',
  'Hexagon': 'Zeshoek', 'Cube': 'Kubus', 'Sphere': 'Bol', 'Cylinder': 'Cilinder',
  'Cone': 'Kegel', 'Pyramid': 'Piramide', 'Arrow': 'Pijl', 'Cross': 'Kruis',

  // Verbs
  'Eat': 'Eten', 'Drink': 'Drinken', 'Sleep': 'Slapen', 'Walk': 'Lopen',
  'Run': 'Rennen', 'Jump': 'Springen', 'Swim': 'Zwemmen', 'Fly': 'Vliegen',
  'Read': 'Lezen', 'Write': 'Schrijven', 'Speak': 'Spreken', 'Listen': 'Luisteren',
  'Cook': 'Koken', 'Drive': 'Rijden', 'Work': 'Werken', 'Play': 'Spelen',
  'Dance': 'Dansen', 'Sing': 'Zingen', 'Paint': 'Schilderen', 'Draw': 'Tekenen',
  'Buy': 'Kopen', 'Sell': 'Verkopen', 'Give': 'Geven', 'Take': 'Nemen',
  'Open': 'Openen', 'Close': 'Sluiten', 'Start': 'Beginnen', 'Stop': 'Stoppen',
  'Love': 'Houden van', 'Laugh': 'Lachen', 'Cry': 'Huilen', 'Think': 'Denken',
  'Know': 'Weten', 'See': 'Zien', 'Hear': 'Horen', 'Feel': 'Voelen',
  'Help': 'Helpen', 'Learn': 'Leren', 'Teach': 'Onderwijzen', 'Ask': 'Vragen',
  'Answer': 'Antwoorden', 'Come': 'Komen', 'Go': 'Gaan', 'Stand': 'Staan',
  'Sit': 'Zitten', 'Wait': 'Wachten', 'Carry': 'Dragen', 'Push': 'Duwen',
  'Pull': 'Trekken', 'Cut': 'Snijden', 'Clean': 'Schoonmaken',

  // Emotions
  'Happy': 'Blij', 'Sad': 'Verdrietig', 'Angry': 'Boos', 'Surprised': 'Verrast',
  'Scared': 'Bang', 'Excited': 'Opgewonden', 'Tired': 'Moe', 'Bored': 'Verveeld',
  'Proud': 'Trots', 'Shy': 'Verlegen', 'Confused': 'Verward', 'Calm': 'Rustig',
  'Love': 'Liefde', 'Hate': 'Haat', 'Hope': 'Hoop', 'Fear': 'Angst',
  'Joy': 'Vreugde', 'Grief': 'Verdriet', 'Anxiety': 'Angst', 'Jealousy': 'Jaloezie',
  'Disgust': 'Walging', 'Contempt': 'Minachting', 'Nostalgia': 'Nostalgie',
  'Grateful': 'Dankbaar', 'Embarrassed': 'Verlegen',

  // Adjectives
  'Big': 'Groot', 'Small': 'Klein', 'Hot': 'Heet', 'Cold': 'Koud',
  'Fast': 'Snel', 'Slow': 'Langzaam', 'New': 'Nieuw', 'Old': 'Oud',
  'Good': 'Goed', 'Bad': 'Slecht', 'Beautiful': 'Mooi', 'Ugly': 'Lelijk',
  'Strong': 'Sterk', 'Weak': 'Zwak', 'Light': 'Licht', 'Heavy': 'Zwaar',
  'Tall': 'Lang', 'Short': 'Kort', 'Wide': 'Breed', 'Narrow': 'Smal',
  'Rich': 'Rijk', 'Poor': 'Arm', 'Young': 'Jong', 'Soft': 'Zacht', 'Hard': 'Hard',
  'Loud': 'Luid', 'Quiet': 'Stil', 'Clean': 'Schoon', 'Dirty': 'Vuil',
  'Full': 'Vol', 'Empty': 'Leeg', 'Open': 'Open', 'Closed': 'Gesloten',
  'Easy': 'Makkelijk', 'Difficult': 'Moeilijk', 'Cheap': 'Goedkoop', 'Expensive': 'Duur',
  'Delicious': 'Heerlijk', 'Spicy': 'Pittig', 'Sweet': 'Zoet', 'Sour': 'Zuur',
  'Salty': 'Zout', 'Bitter': 'Bitter', 'Fresh': 'Vers', 'Frozen': 'Bevroren',

  // Time
  'Monday': 'Maandag', 'Tuesday': 'Dinsdag', 'Wednesday': 'Woensdag',
  'Thursday': 'Donderdag', 'Friday': 'Vrijdag', 'Saturday': 'Zaterdag',
  'Sunday': 'Zondag', 'January': 'Januari', 'February': 'Februari',
  'March': 'Maart', 'April': 'April', 'May': 'Mei', 'June': 'Juni',
  'July': 'Juli', 'August': 'Augustus', 'September': 'September',
  'October': 'Oktober', 'November': 'November', 'December': 'December',
  'Morning': 'Ochtend', 'Afternoon': 'Middag', 'Evening': 'Avond', 'Night': 'Nacht',
  'Today': 'Vandaag', 'Yesterday': 'Gisteren', 'Tomorrow': 'Morgen',
  'Week': 'Week', 'Month': 'Maand', 'Year': 'Jaar', 'Hour': 'Uur',
  'Minute': 'Minuut', 'Second': 'Seconde', 'Clock': 'Klok', 'Calendar': 'Kalender',
  'Season': 'Seizoen', 'Spring': 'Lente', 'Summer': 'Zomer',
  'Autumn': 'Herfst', 'Winter': 'Winter',

  // Holidays
  'Christmas': 'Kerstmis', 'Easter': 'Pasen', 'New Year': 'Nieuwjaar',
  'Halloween': 'Halloween', 'Birthday': 'Verjaardag', 'Anniversary': 'Jubileum',
  'Wedding': 'Bruiloft', 'Carnival': 'Carnaval', 'Thanksgiving': 'Thanksgiving',
  'Valentine\'s Day': 'Valentijnsdag', 'Mother\'s Day': 'Moederdag',

  // Vegetables
  'Carrot': 'Wortel', 'Potato': 'Aardappel', 'Tomato': 'Tomaat',
  'Onion': 'Ui', 'Garlic': 'Knoflook', 'Broccoli': 'Broccoli',
  'Spinach': 'Spinazie', 'Lettuce': 'Sla', 'Cucumber': 'Komkommer',
  'Pepper': 'Paprika', 'Mushroom': 'Paddenstoel', 'Corn': 'Maïs',
  'Peas': 'Erwten', 'Beans': 'Bonen', 'Cabbage': 'Kool',
  'Leek': 'Prei', 'Celery': 'Selderij', 'Cauliflower': 'Bloemkool',
  'Aubergine': 'Aubergine', 'Courgette': 'Courgette', 'Asparagus': 'Asperge',
  'Artichoke': 'Artisjok', 'Fennel': 'Venkel', 'Radish': 'Radijs',
  'Beetroot': 'Rode biet', 'Sweet Potato': 'Zoete aardappel', 'Kale': 'Boerenkool',
  'Brussels Sprouts': 'Spruitjes', 'Pumpkin': 'Pompoen',

  // Fruits
  'Apple': 'Appel', 'Banana': 'Banaan', 'Orange': 'Sinaasappel',
  'Grape': 'Druif', 'Strawberry': 'Aardbei', 'Lemon': 'Citroen',
  'Mango': 'Mango', 'Pineapple': 'Ananas', 'Watermelon': 'Watermeloen',
  'Cherry': 'Kers', 'Peach': 'Perzik', 'Pear': 'Peer', 'Plum': 'Pruim',
  'Kiwi': 'Kiwi', 'Coconut': 'Kokosnoot', 'Avocado': 'Avocado',
  'Blueberry': 'Bosbes', 'Raspberry': 'Framboos', 'Blackberry': 'Braambes',
  'Papaya': 'Papaja', 'Lychee': 'Lychee', 'Pomegranate': 'Granaatappel',
  'Fig': 'Vijg', 'Apricot': 'Abrikoos', 'Melon': 'Meloen',

  // Meat
  'Beef': 'Rundvlees', 'Pork': 'Varkensvlees', 'Lamb': 'Lamsvlees',
  'Veal': 'Kalfsvlees', 'Turkey': 'Kalkoen', 'Duck': 'Eend',
  'Venison': 'Hertenvlees', 'Rabbit': 'Konijn', 'Goat': 'Geit',
  'Sausage': 'Worst', 'Bacon': 'Spek', 'Ham': 'Ham', 'Mince': 'Gehakt',
  'Steak': 'Biefstuk', 'Ribs': 'Ribben', 'Liver': 'Lever',

  // Herbs & Spices
  'Salt': 'Zout', 'Pepper': 'Peper', 'Basil': 'Basilicum', 'Oregano': 'Oregano',
  'Thyme': 'Tijm', 'Rosemary': 'Rozemarijn', 'Parsley': 'Peterselie',
  'Coriander': 'Koriander', 'Cumin': 'Komijn', 'Turmeric': 'Kurkuma',
  'Paprika': 'Paprikapoeder', 'Cinnamon': 'Kaneel', 'Ginger': 'Gember',
  'Mint': 'Munt', 'Chilli': 'Chili', 'Bay Leaf': 'Laurierblad',
  'Saffron': 'Saffraan', 'Vanilla': 'Vanille', 'Nutmeg': 'Nootmuskaat',
  'Clove': 'Kruidnagel', 'Cardamom': 'Kardemom', 'Star Anise': 'Steranijs',
  'Dill': 'Dille', 'Chives': 'Bieslook', 'Sage': 'Salie', 'Tarragon': 'Dragon',
  'Fennel Seeds': 'Venkelzaad', 'Mustard Seeds': 'Mosterdzaad',

  // Condiments
  'Olive Oil': 'Olijfolie', 'Butter': 'Boter', 'Sugar': 'Suiker',
  'Honey': 'Honing', 'Vinegar': 'Azijn', 'Mustard': 'Mosterd',
  'Ketchup': 'Ketchup', 'Mayonnaise': 'Mayonaise', 'Soy Sauce': 'Sojasaus',
  'Hot Sauce': 'Hete saus', 'Cream': 'Room', 'Flour': 'Bloem',
  'Yeast': 'Gist', 'Baking Powder': 'Bakpoeder', 'Cornstarch': 'Maizena',

  // Nuts & Legumes
  'Almond': 'Amandel', 'Walnut': 'Walnoot', 'Peanut': 'Pinda',
  'Cashew': 'Cashewnoot', 'Pistachio': 'Pistache', 'Hazelnut': 'Hazelnoot',
  'Chestnut': 'Kastanje', 'Lentils': 'Linzen', 'Chickpeas': 'Kikkererwten',
  'Black Beans': 'Zwarte bonen', 'Kidney Beans': 'Kidneybonen',
  'Soy Beans': 'Sojabieten', 'Tofu': 'Tofu',

  // Bathroom
  'Toilet': 'Toilet', 'Sink': 'Wastafel', 'Shower': 'Douche',
  'Bathtub': 'Badkuip', 'Towel': 'Handdoek', 'Toothbrush': 'Tandenborstel',
  'Toothpaste': 'Tandpasta', 'Shampoo': 'Shampoo', 'Soap': 'Zeep',
  'Razor': 'Scheerapparaat', 'Comb': 'Kam', 'Hairdryer': 'Föhn',
  'Bath Mat': 'Badmat', 'Toilet Paper': 'Toiletpapier', 'Scale': 'Weegschaal',

  // Plants
  'Rose': 'Roos', 'Sunflower': 'Zonnebloem', 'Cactus': 'Cactus',
  'Tulip': 'Tulp', 'Fern': 'Varen', 'Lavender': 'Lavendel',
  'Bamboo': 'Bamboe', 'Orchid': 'Orchidee', 'Ivy': 'Klimop',
  'Daisy': 'Madeliefje', 'Palm Tree': 'Palmboom', 'Moss': 'Mos',
  'Bonsai': 'Bonsai', 'Succulent': 'Vetplant', 'Herb': 'Kruid',

  // Supermarket
  'Trolley': 'Winkelwagen', 'Basket': 'Mandje', 'Aisle': 'Gang',
  'Checkout': 'Kassa', 'Receipt': 'Bon', 'Barcode': 'Streepjescode',
  'Frozen Food': 'Diepvriesvoedsel', 'Discount': 'Korting',
  'Weighing Scale': 'Weegschaal', 'Plastic Bag': 'Plastic tas',
  'Queue': 'Rij', 'Coupon': 'Coupon', 'Loyalty Card': 'Klantenkaart',
  'Expiry Date': 'Houdbaarheidsdatum',

  // Car
  'Steering Wheel': 'Stuur', 'Dashboard': 'Dashboard', 'Seat Belt': 'Gordel',
  'Headlights': 'Koplampen', 'Tyre': 'Band', 'Engine': 'Motor',
  'Bonnet': 'Motorkap', 'Boot': 'Kofferbak', 'Windscreen': 'Voorruit',
  'Gear Stick': 'Versnellingspook', 'Fuel Tank': 'Brandstoftank',
  'Horn': 'Claxon', 'Windscreen Wiper': 'Ruitenwisser',
  'Number Plate': 'Kenteken',

  // Doctor / Medical
  'Doctor': 'Dokter', 'Hospital': 'Ziekenhuis', 'Medicine': 'Medicijn',
  'Prescription': 'Recept', 'Appointment': 'Afspraak', 'Surgery': 'Operatie',
  'Blood': 'Bloed', 'Temperature': 'Temperatuur', 'Bandage': 'Verband',
  'Injection': 'Injectie', 'Allergy': 'Allergie', 'Headache': 'Hoofdpijn',
  'Fever': 'Koorts', 'Cough': 'Hoest', 'Sore Throat': 'Keelpijn',
  'X-ray': 'Röntgenfoto', 'Ambulance': 'Ambulance', 'Wheelchair': 'Rolstoel',
  'Stethoscope': 'Stethoscoop', 'Thermometer': 'Thermometer',

  // Bank
  'Bank': 'Bank', 'Money': 'Geld', 'Coin': 'Munt', 'Banknote': 'Bankbiljet',
  'Credit Card': 'Creditcard', 'Account': 'Rekening', 'Savings': 'Spaargeld',
  'Loan': 'Lening', 'Mortgage': 'Hypotheek', 'Interest': 'Rente',
  'Investment': 'Investering', 'Budget': 'Budget', 'Receipt': 'Bon',
  'Transfer': 'Overboeking', 'Withdrawal': 'Opname', 'Deposit': 'Storting',
  'ATM': 'Geldautomaat', 'PIN': 'Pincode', 'Salary': 'Salaris',
  'Tax': 'Belasting', 'Invoice': 'Factuur',

  // Emergency
  'Fire': 'Brand', 'Police': 'Politie', 'Help': 'Help', 'Danger': 'Gevaar',
  'Emergency': 'Noodgeval', 'Accident': 'Ongeluk', 'First Aid': 'Eerste hulp',
  'Escape': 'Ontsnappen', 'Safe': 'Veilig', 'Rescue': 'Redding',
  'Alarm': 'Alarm', 'Siren': 'Sirene', 'Extinguisher': 'Brandblusser',

  // Travel
  'Passport': 'Paspoort', 'Ticket': 'Ticket', 'Hotel': 'Hotel',
  'Airport': 'Luchthaven', 'Suitcase': 'Koffer', 'Map': 'Kaart',
  'Visa': 'Visum', 'Tour': 'Rondleiding', 'Guide': 'Gids',
  'Museum': 'Museum', 'Monument': 'Monument', 'Beach': 'Strand',
  'Holiday': 'Vakantie', 'Journey': 'Reis', 'Departure': 'Vertrek',
  'Arrival': 'Aankomst', 'Boarding': 'Instappen', 'Customs': 'Douane',

  // Wine
  'Wine': 'Wijn', 'Red Wine': 'Rode wijn', 'White Wine': 'Witte wijn',
  'Rosé': 'Rosé', 'Sparkling Wine': 'Mousserende wijn', 'Champagne': 'Champagne',
  'Cork': 'Kurk', 'Grape': 'Druif', 'Vineyard': 'Wijngaard',
  'Vintage': 'Oogstjaar', 'Bottle': 'Fles', 'Decanter': 'Decanteerkaraf',
  'Tasting': 'Proeven', 'Sommelier': 'Sommelier', 'Cellar': 'Kelder',

  // Common recipe ingredients
  'Egg': 'Ei', 'Milk': 'Melk', 'Cheese': 'Kaas', 'Yoghurt': 'Yoghurt',
  'Butter': 'Boter', 'Cream': 'Room', 'Oil': 'Olie', 'Bread': 'Brood',
  'Rice': 'Rijst', 'Pasta': 'Pasta', 'Noodles': 'Noedels',
  'Soup': 'Soep', 'Salad': 'Salade', 'Sauce': 'Saus', 'Gravy': 'Jus',
  'Stock': 'Bouillon', 'Dough': 'Deeg', 'Batter': 'Beslag',
  'Marinade': 'Marinade', 'Stuffing': 'Vulling',

  // Gastronomy extra
  'Appetiser': 'Voorgerecht', 'Main Course': 'Hoofdgerecht', 'Dessert': 'Nagerecht',
  'Breakfast': 'Ontbijt', 'Lunch': 'Lunch', 'Dinner': 'Diner',
  'Snack': 'Tussendoortje', 'Recipe': 'Recept', 'Ingredient': 'Ingrediënt',
  'Menu': 'Menu', 'Restaurant': 'Restaurant', 'Chef': 'Kok',
  'Portion': 'Portie', 'Serving': 'Portie', 'Taste': 'Smaak',

  // World dishes (proper nouns — use English as-is or Dutch equivalent)
  'Bread': 'Brood', 'Pancake': 'Pannenkoek', 'Waffle': 'Wafel',
  'Sandwich': 'Broodje', 'Burger': 'Burger', 'Pizza': 'Pizza',
  'Hot Dog': 'Hot Dog', 'Chips': 'Friet', 'French Fries': 'Friet',
  'Omelette': 'Omelet', 'Porridge': 'Pap', 'Muesli': 'Muesli',
  'Soup': 'Soep', 'Stew': 'Stoofpot', 'Pie': 'Taart', 'Cake': 'Taart',
  'Biscuit': 'Koekje', 'Cookie': 'Koekje', 'Chocolate': 'Chocolade',
  'Ice Cream': 'IJs', 'Pudding': 'Pudding',

  // Drinks
  'Water': 'Water', 'Tea': 'Thee', 'Coffee': 'Koffie', 'Juice': 'Sap',
  'Beer': 'Bier', 'Cocktail': 'Cocktail', 'Smoothie': 'Smoothie',
  'Lemonade': 'Limonade', 'Milk': 'Melk', 'Hot Chocolate': 'Warme chocolademelk',

  // PT vocab (common phrases rendered as nouns)
  'Hello': 'Hallo', 'Thank You': 'Dank u', 'Please': 'Alstublieft',
  'Sorry': 'Sorry', 'Yes': 'Ja', 'No': 'Nee', 'Goodbye': 'Tot ziens',
};

// Matches word: '...' allowing for \' escaped quotes inside
const WORD_RE = /word: '((?:[^'\\]|\\.)*)'/;
// Matches the last language key before closing }
const LAST_LANG_RE = /(\{ id: '(?:[^'\\]|\\.)*',\s+word: '(?:[^'\\]|\\.)*'[^}]+?)((?:ro|ar|ko|hi|cs|pl|tr|ru|zh|ja): '(?:[^'\\]|\\.)*')(\s*\})/gs;

function addDutch(content) {
  if (content.includes("nl: '") || content.includes('nl: "')) return content;

  const result = content.replace(LAST_LANG_RE, (match, prefix, lastLangFull, suffix) => {
    if (match.includes("nl: '")) return match;
    // Extract the English word from this match
    const wordMatch = match.match(WORD_RE);
    if (!wordMatch) return match;
    // Unescape \' to get the real word for dictionary lookup
    const englishWord = wordMatch[1].replace(/\\'/g, "'");
    const raw = NL[englishWord] || englishWord;
    // Re-escape single quotes for insertion into TS string
    const nl = raw.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `${prefix}${lastLangFull}, nl: '${nl}'${suffix}`;
  });

  return result;
}

// Process all .ts files in the data directory
const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.ts') && f !== 'badges.ts' && f !== 'languages.ts');

let changed = 0;
for (const file of files) {
  const filePath = path.join(DATA_DIR, file);
  const original = fs.readFileSync(filePath, 'utf8');
  const updated = addDutch(original);
  if (updated !== original) {
    fs.writeFileSync(filePath, updated, 'utf8');
    changed++;
    console.log(`✓ Updated: ${file}`);
  } else {
    console.log(`– Skipped: ${file} (already has nl or no match)`);
  }
}

console.log(`\nDone. Updated ${changed} files.`);
