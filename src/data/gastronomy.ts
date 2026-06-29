import type { Word } from '../types';

export const GASTRONOMY_WORDS: Word[] = [
  // Fruits
  { id: 'g1', word: 'Apple', translations: { es: 'Manzana', pt: 'Maçã', fr: 'Pomme', de: 'Apfel', it: 'Mela', ja: 'リンゴ', zh: '苹果', ko: '사과', ar: 'تفاحة' }, category: 'Fruits', unsplashQuery: 'apple fruit' },
  { id: 'g2', word: 'Banana', translations: { es: 'Plátano', pt: 'Banana', fr: 'Banane', de: 'Banane', it: 'Banana', ja: 'バナナ', zh: '香蕉', ko: '바나나', ar: 'موز' }, category: 'Fruits', unsplashQuery: 'banana' },
  { id: 'g3', word: 'Orange', translations: { es: 'Naranja', pt: 'Laranja', fr: 'Orange', de: 'Orange', it: 'Arancia', ja: 'オレンジ', zh: '橙子', ko: '오렌지', ar: 'برتقال' }, category: 'Fruits', unsplashQuery: 'orange fruit' },
  { id: 'g4', word: 'Strawberry', translations: { es: 'Fresa', pt: 'Morango', fr: 'Fraise', de: 'Erdbeere', it: 'Fragola', ja: 'イチゴ', zh: '草莓', ko: '딸기', ar: 'فراولة' }, category: 'Fruits', unsplashQuery: 'strawberry' },
  { id: 'g5', word: 'Lemon', translations: { es: 'Limón', pt: 'Limão', fr: 'Citron', de: 'Zitrone', it: 'Limone', ja: 'レモン', zh: '柠檬', ko: '레몬', ar: 'ليمون' }, category: 'Fruits', unsplashQuery: 'lemon' },
  { id: 'g6', word: 'Mango', translations: { es: 'Mango', pt: 'Manga', fr: 'Mangue', de: 'Mango', it: 'Mango', ja: 'マンゴー', zh: '芒果', ko: '망고', ar: 'مانجو' }, category: 'Fruits', unsplashQuery: 'mango fruit' },
  { id: 'g7', word: 'Pineapple', translations: { es: 'Piña', pt: 'Abacaxi', fr: 'Ananas', de: 'Ananas', it: 'Ananas', ja: 'パイナップル', zh: '菠萝', ko: '파인애플', ar: 'أناناس' }, category: 'Fruits', unsplashQuery: 'pineapple' },
  { id: 'g8', word: 'Grapes', translations: { es: 'Uvas', pt: 'Uvas', fr: 'Raisins', de: 'Trauben', it: 'Uva', ja: 'ブドウ', zh: '葡萄', ko: '포도', ar: 'عنب' }, category: 'Fruits', unsplashQuery: 'grapes' },
  { id: 'g9', word: 'Watermelon', translations: { es: 'Sandía', pt: 'Melancia', fr: 'Pastèque', de: 'Wassermelone', it: 'Anguria', ja: 'スイカ', zh: '西瓜', ko: '수박', ar: 'بطيخ' }, category: 'Fruits', unsplashQuery: 'watermelon' },
  { id: 'g10', word: 'Peach', translations: { es: 'Melocotón', pt: 'Pêssego', fr: 'Pêche', de: 'Pfirsich', it: 'Pesca', ja: 'モモ', zh: '桃子', ko: '복숭아', ar: 'خوخ' }, category: 'Fruits', unsplashQuery: 'peach fruit' },
  { id: 'g11', word: 'Pear', translations: { es: 'Pera', pt: 'Pera', fr: 'Poire', de: 'Birne', it: 'Pera', ja: '梨', zh: '梨', ko: '배', ar: 'إجاص' }, category: 'Fruits', unsplashQuery: 'pear fruit' },
  { id: 'g12', word: 'Cherry', translations: { es: 'Cereza', pt: 'Cereja', fr: 'Cerise', de: 'Kirsche', it: 'Ciliegia', ja: 'サクランボ', zh: '樱桃', ko: '체리', ar: 'كرز' }, category: 'Fruits', unsplashQuery: 'cherry fruit' },
  { id: 'g13', word: 'Blueberry', translations: { es: 'Arándano', pt: 'Mirtilo', fr: 'Myrtille', de: 'Blaubeere', it: 'Mirtillo', ja: 'ブルーベリー', zh: '蓝莓', ko: '블루베리', ar: 'توت أزرق' }, category: 'Fruits', unsplashQuery: 'blueberry' },
  { id: 'g14', word: 'Raspberry', translations: { es: 'Frambuesa', pt: 'Framboesa', fr: 'Framboise', de: 'Himbeere', it: 'Lampone', ja: 'ラズベリー', zh: '覆盆子', ko: '산딸기', ar: 'توت العليق' }, category: 'Fruits', unsplashQuery: 'raspberry' },
  { id: 'g15', word: 'Coconut', translations: { es: 'Coco', pt: 'Coco', fr: 'Noix de coco', de: 'Kokosnuss', it: 'Cocco', ja: 'ヤシの実', zh: '椰子', ko: '코코넛', ar: 'جوز الهند' }, category: 'Fruits', unsplashQuery: 'coconut' },
  { id: 'g16', word: 'Avocado', translations: { es: 'Aguacate', pt: 'Abacate', fr: 'Avocat', de: 'Avocado', it: 'Avocado', ja: 'アボカド', zh: '牛油果', ko: '아보카도', ar: 'أفوكادو' }, category: 'Fruits', unsplashQuery: 'avocado' },
  { id: 'g17', word: 'Pomegranate', translations: { es: 'Granada', pt: 'Romã', fr: 'Grenade', de: 'Granatapfel', it: 'Melograno', ja: 'ザクロ', zh: '石榴', ko: '석류', ar: 'رمان' }, category: 'Fruits', unsplashQuery: 'pomegranate' },
  { id: 'g18', word: 'Fig', translations: { es: 'Higo', pt: 'Figo', fr: 'Figue', de: 'Feige', it: 'Fico', ja: 'イチジク', zh: '无花果', ko: '무화과', ar: 'تين' }, category: 'Fruits', unsplashQuery: 'fig fruit' },
  { id: 'g19', word: 'Melon', translations: { es: 'Melón', pt: 'Melão', fr: 'Melon', de: 'Melone', it: 'Melone', ja: 'メロン', zh: '哈密瓜', ko: '멜론', ar: 'شمام' }, category: 'Fruits', unsplashQuery: 'melon' },
  { id: 'g20', word: 'Papaya', translations: { es: 'Papaya', pt: 'Mamão', fr: 'Papaye', de: 'Papaya', it: 'Papaia', ja: 'パパイヤ', zh: '木瓜', ko: '파파야', ar: 'بابايا' }, category: 'Fruits', unsplashQuery: 'papaya' },

  // Vegetables
  { id: 'g21', word: 'Tomato', translations: { es: 'Tomate', pt: 'Tomate', fr: 'Tomate', de: 'Tomate', it: 'Pomodoro', ja: 'トマト', zh: '西红柿', ko: '토마토', ar: 'طماطم' }, category: 'Vegetables', unsplashQuery: 'tomato' },
  { id: 'g22', word: 'Carrot', translations: { es: 'Zanahoria', pt: 'Cenoura', fr: 'Carotte', de: 'Karotte', it: 'Carota', ja: 'ニンジン', zh: '胡萝卜', ko: '당근', ar: 'جزر' }, category: 'Vegetables', unsplashQuery: 'carrot' },
  { id: 'g23', word: 'Potato', translations: { es: 'Patata', pt: 'Batata', fr: 'Pomme de terre', de: 'Kartoffel', it: 'Patata', ja: 'じゃがいも', zh: '土豆', ko: '감자', ar: 'بطاطس' }, category: 'Vegetables', unsplashQuery: 'potato' },
  { id: 'g24', word: 'Onion', translations: { es: 'Cebolla', pt: 'Cebola', fr: 'Oignon', de: 'Zwiebel', it: 'Cipolla', ja: 'タマネギ', zh: '洋葱', ko: '양파', ar: 'بصل' }, category: 'Vegetables', unsplashQuery: 'onion' },
  { id: 'g25', word: 'Garlic', translations: { es: 'Ajo', pt: 'Alho', fr: 'Ail', de: 'Knoblauch', it: 'Aglio', ja: 'ニンニク', zh: '大蒜', ko: '마늘', ar: 'ثوم' }, category: 'Vegetables', unsplashQuery: 'garlic' },
  { id: 'g26', word: 'Broccoli', translations: { es: 'Brócoli', pt: 'Brócolis', fr: 'Brocoli', de: 'Brokkoli', it: 'Broccoli', ja: 'ブロッコリー', zh: '西兰花', ko: '브로콜리', ar: 'بروكلي' }, category: 'Vegetables', unsplashQuery: 'broccoli' },
  { id: 'g27', word: 'Spinach', translations: { es: 'Espinaca', pt: 'Espinafre', fr: 'Épinard', de: 'Spinat', it: 'Spinaci', ja: 'ほうれん草', zh: '菠菜', ko: '시금치', ar: 'سبانخ' }, category: 'Vegetables', unsplashQuery: 'spinach' },
  { id: 'g28', word: 'Lettuce', translations: { es: 'Lechuga', pt: 'Alface', fr: 'Laitue', de: 'Salat', it: 'Lattuga', ja: 'レタス', zh: '生菜', ko: '상추', ar: 'خس' }, category: 'Vegetables', unsplashQuery: 'lettuce salad' },
  { id: 'g29', word: 'Cucumber', translations: { es: 'Pepino', pt: 'Pepino', fr: 'Concombre', de: 'Gurke', it: 'Cetriolo', ja: 'キュウリ', zh: '黄瓜', ko: '오이', ar: 'خيار' }, category: 'Vegetables', unsplashQuery: 'cucumber' },
  { id: 'g30', word: 'Bell Pepper', translations: { es: 'Pimiento', pt: 'Pimentão', fr: 'Poivron', de: 'Paprika', it: 'Peperone', ja: 'ピーマン', zh: '甜椒', ko: '파프리카', ar: 'فلفل رومي' }, category: 'Vegetables', unsplashQuery: 'bell pepper' },
  { id: 'g31', word: 'Eggplant', translations: { es: 'Berenjena', pt: 'Berinjela', fr: 'Aubergine', de: 'Aubergine', it: 'Melanzana', ja: 'ナス', zh: '茄子', ko: '가지', ar: 'باذنجان' }, category: 'Vegetables', unsplashQuery: 'eggplant' },
  { id: 'g32', word: 'Zucchini', translations: { es: 'Calabacín', pt: 'Abobrinha', fr: 'Courgette', de: 'Zucchini', it: 'Zucchina', ja: 'ズッキーニ', zh: '西葫芦', ko: '주키니', ar: 'كوسا' }, category: 'Vegetables', unsplashQuery: 'zucchini' },
  { id: 'g33', word: 'Mushroom', translations: { es: 'Champiñón', pt: 'Cogumelo', fr: 'Champignon', de: 'Pilz', it: 'Fungo', ja: 'キノコ', zh: '蘑菇', ko: '버섯', ar: 'فطر' }, category: 'Vegetables', unsplashQuery: 'mushroom' },
  { id: 'g34', word: 'Corn', translations: { es: 'Maíz', pt: 'Milho', fr: 'Maïs', de: 'Mais', it: 'Mais', ja: 'トウモロコシ', zh: '玉米', ko: '옥수수', ar: 'ذرة' }, category: 'Vegetables', unsplashQuery: 'corn' },
  { id: 'g35', word: 'Peas', translations: { es: 'Guisantes', pt: 'Ervilhas', fr: 'Petits pois', de: 'Erbsen', it: 'Piselli', ja: 'グリンピース', zh: '豌豆', ko: '완두콩', ar: 'بازلاء' }, category: 'Vegetables', unsplashQuery: 'peas green' },
  { id: 'g36', word: 'Asparagus', translations: { es: 'Espárrago', pt: 'Aspargo', fr: 'Asperge', de: 'Spargel', it: 'Asparago', ja: 'アスパラガス', zh: '芦笋', ko: '아스파라거스', ar: 'هليون' }, category: 'Vegetables', unsplashQuery: 'asparagus' },
  { id: 'g37', word: 'Artichoke', translations: { es: 'Alcachofa', pt: 'Alcachofra', fr: 'Artichaut', de: 'Artischocke', it: 'Carciofo', ja: 'アーティチョーク', zh: '洋蓟', ko: '아티초크', ar: 'خرشوف' }, category: 'Vegetables', unsplashQuery: 'artichoke' },
  { id: 'g38', word: 'Leek', translations: { es: 'Puerro', pt: 'Alho-poró', fr: 'Poireau', de: 'Lauch', it: 'Porro', ja: 'リーキ', zh: '韭葱', ko: '리크', ar: 'كراث' }, category: 'Vegetables', unsplashQuery: 'leek vegetable' },
  { id: 'g39', word: 'Cauliflower', translations: { es: 'Coliflor', pt: 'Couve-flor', fr: 'Chou-fleur', de: 'Blumenkohl', it: 'Cavolfiore', ja: 'カリフラワー', zh: '花椰菜', ko: '콜리플라워', ar: 'قرنبيط' }, category: 'Vegetables', unsplashQuery: 'cauliflower' },
  { id: 'g40', word: 'Cabbage', translations: { es: 'Col', pt: 'Repolho', fr: 'Chou', de: 'Kohl', it: 'Cavolo', ja: 'キャベツ', zh: '卷心菜', ko: '양배추', ar: 'ملفوف' }, category: 'Vegetables', unsplashQuery: 'cabbage' },

  // Meat & Poultry
  { id: 'g41', word: 'Chicken', translations: { es: 'Pollo', pt: 'Frango', fr: 'Poulet', de: 'Huhn', it: 'Pollo', ja: '鶏肉', zh: '鸡肉', ko: '닭고기', ar: 'دجاج' }, category: 'Meat', unsplashQuery: 'chicken meat' },
  { id: 'g42', word: 'Beef', translations: { es: 'Ternera', pt: 'Carne bovina', fr: 'Bœuf', de: 'Rindfleisch', it: 'Manzo', ja: '牛肉', zh: '牛肉', ko: '소고기', ar: 'لحم بقر' }, category: 'Meat', unsplashQuery: 'beef steak' },
  { id: 'g43', word: 'Pork', translations: { es: 'Cerdo', pt: 'Porco', fr: 'Porc', de: 'Schweinefleisch', it: 'Maiale', ja: '豚肉', zh: '猪肉', ko: '돼지고기', ar: 'لحم خنزير' }, category: 'Meat', unsplashQuery: 'pork meat' },
  { id: 'g44', word: 'Lamb', translations: { es: 'Cordero', pt: 'Cordeiro', fr: 'Agneau', de: 'Lamm', it: 'Agnello', ja: '子羊肉', zh: '羊肉', ko: '양고기', ar: 'لحم خروف' }, category: 'Meat', unsplashQuery: 'lamb meat' },
  { id: 'g45', word: 'Turkey', translations: { es: 'Pavo', pt: 'Peru', fr: 'Dinde', de: 'Truthahn', it: 'Tacchino', ja: 'ターキー', zh: '火鸡', ko: '칠면조', ar: 'ديك رومي' }, category: 'Meat', unsplashQuery: 'turkey roast' },
  { id: 'g46', word: 'Duck', translations: { es: 'Pato', pt: 'Pato', fr: 'Canard', de: 'Ente', it: 'Anatra', ja: 'アヒル', zh: '鸭肉', ko: '오리고기', ar: 'بط' }, category: 'Meat', unsplashQuery: 'duck roast' },
  { id: 'g47', word: 'Ham', translations: { es: 'Jamón', pt: 'Presunto', fr: 'Jambon', de: 'Schinken', it: 'Prosciutto', ja: 'ハム', zh: '火腿', ko: '햄', ar: 'لحم مدخن' }, category: 'Meat', unsplashQuery: 'ham prosciutto' },
  { id: 'g48', word: 'Sausage', translations: { es: 'Salchicha', pt: 'Salsicha', fr: 'Saucisse', de: 'Wurst', it: 'Salsiccia', ja: 'ソーセージ', zh: '香肠', ko: '소시지', ar: 'سجق' }, category: 'Meat', unsplashQuery: 'sausage' },
  { id: 'g49', word: 'Bacon', translations: { es: 'Tocino', pt: 'Bacon', fr: 'Lard', de: 'Speck', it: 'Pancetta', ja: 'ベーコン', zh: '培根', ko: '베이컨', ar: 'لحم مقدد' }, category: 'Meat', unsplashQuery: 'bacon' },
  { id: 'g50', word: 'Steak', translations: { es: 'Filete', pt: 'Bife', fr: 'Steak', de: 'Steak', it: 'Bistecca', ja: 'ステーキ', zh: '牛排', ko: '스테이크', ar: 'ستيك' }, category: 'Meat', unsplashQuery: 'steak grilled' },

  // Seafood & Fish
  { id: 'g51', word: 'Sardine', translations: { es: 'Sardina', pt: 'Sardinha', fr: 'Sardine', de: 'Sardine', it: 'Sardina', ja: 'イワシ', zh: '沙丁鱼', ko: '정어리', ar: 'سردين' }, category: 'Seafood', unsplashQuery: 'sardine fish' },
  { id: 'g52', word: 'Salmon', translations: { es: 'Salmón', pt: 'Salmão', fr: 'Saumon', de: 'Lachs', it: 'Salmone', ja: 'サーモン', zh: '三文鱼', ko: '연어', ar: 'سلمون' }, category: 'Seafood', unsplashQuery: 'salmon fish' },
  { id: 'g53', word: 'Tuna', translations: { es: 'Atún', pt: 'Atum', fr: 'Thon', de: 'Thunfisch', it: 'Tonno', ja: 'マグロ', zh: '金枪鱼', ko: '참치', ar: 'تونة' }, category: 'Seafood', unsplashQuery: 'tuna fish' },
  { id: 'g54', word: 'Cod', translations: { es: 'Bacalao', pt: 'Bacalhau', fr: 'Cabillaud', de: 'Kabeljau', it: 'Merluzzo', ja: 'タラ', zh: '鳕鱼', ko: '대구', ar: 'سمك القد' }, category: 'Seafood', unsplashQuery: 'cod fish' },
  { id: 'g55', word: 'Shrimp', translations: { es: 'Camarón', pt: 'Camarão', fr: 'Crevette', de: 'Garnele', it: 'Gambero', ja: 'エビ', zh: '虾', ko: '새우', ar: 'روبيان' }, category: 'Seafood', unsplashQuery: 'shrimp seafood' },
  { id: 'g56', word: 'Lobster', translations: { es: 'Langosta', pt: 'Lagosta', fr: 'Homard', de: 'Hummer', it: 'Aragosta', ja: 'ロブスター', zh: '龙虾', ko: '랍스터', ar: 'جراد البحر' }, category: 'Seafood', unsplashQuery: 'lobster' },
  { id: 'g57', word: 'Crab', translations: { es: 'Cangrejo', pt: 'Caranguejo', fr: 'Crabe', de: 'Krabbe', it: 'Granchio', ja: 'カニ', zh: '螃蟹', ko: '게', ar: 'سرطان البحر' }, category: 'Seafood', unsplashQuery: 'crab seafood' },
  { id: 'g58', word: 'Octopus', translations: { es: 'Pulpo', pt: 'Polvo', fr: 'Pieuvre', de: 'Tintenfisch', it: 'Polpo', ja: 'タコ', zh: '章鱼', ko: '문어', ar: 'أخطبوط' }, category: 'Seafood', unsplashQuery: 'octopus' },
  { id: 'g59', word: 'Squid', translations: { es: 'Calamar', pt: 'Lula', fr: 'Calmar', de: 'Tintenfisch', it: 'Calamaro', ja: 'イカ', zh: '鱿鱼', ko: '오징어', ar: 'حبار' }, category: 'Seafood', unsplashQuery: 'squid calamari' },
  { id: 'g60', word: 'Oyster', translations: { es: 'Ostra', pt: 'Ostra', fr: 'Huître', de: 'Auster', it: 'Ostrica', ja: 'カキ', zh: '牡蛎', ko: '굴', ar: 'محار' }, category: 'Seafood', unsplashQuery: 'oyster' },
  { id: 'g61', word: 'Mussel', translations: { es: 'Mejillón', pt: 'Mexilhão', fr: 'Moule', de: 'Muschel', it: 'Cozza', ja: 'ムール貝', zh: '贻贝', ko: '홍합', ar: 'بلح البحر' }, category: 'Seafood', unsplashQuery: 'mussel' },
  { id: 'g62', word: 'Clam', translations: { es: 'Almeja', pt: 'Amêijoa', fr: 'Palourde', de: 'Venusmuschel', it: 'Vongola', ja: 'アサリ', zh: '蛤蜊', ko: '조개', ar: 'بطلينوس' }, category: 'Seafood', unsplashQuery: 'clam seafood' },
  { id: 'g63', word: 'Anchovies', translations: { es: 'Anchoas', pt: 'Anchovas', fr: 'Anchois', de: 'Sardellen', it: 'Acciughe', ja: 'アンチョビ', zh: '凤尾鱼', ko: '멸치', ar: 'أنشوفة' }, category: 'Seafood', unsplashQuery: 'anchovies' },
  { id: 'g64', word: 'Sea Bass', translations: { es: 'Lubina', pt: 'Robalo', fr: 'Bar', de: 'Wolfsbarsch', it: 'Branzino', ja: 'スズキ', zh: '海鲈鱼', ko: '농어', ar: 'سمك القاروص' }, category: 'Seafood', unsplashQuery: 'sea bass fish' },
  { id: 'g65', word: 'Trout', translations: { es: 'Trucha', pt: 'Truta', fr: 'Truite', de: 'Forelle', it: 'Trota', ja: 'マス', zh: '鳟鱼', ko: '송어', ar: 'تراوت' }, category: 'Seafood', unsplashQuery: 'trout fish' },
  { id: 'g66', word: 'Swordfish', translations: { es: 'Pez espada', pt: 'Peixe-espada', fr: 'Espadon', de: 'Schwertfisch', it: 'Pesce spada', ja: 'メカジキ', zh: '剑鱼', ko: '황새치', ar: 'سمك أبو سيف' }, category: 'Seafood', unsplashQuery: 'swordfish' },

  // Dairy & Eggs
  { id: 'g67', word: 'Egg', translations: { es: 'Huevo', pt: 'Ovo', fr: 'Œuf', de: 'Ei', it: 'Uovo', ja: '卵', zh: '鸡蛋', ko: '달걀', ar: 'بيض' }, category: 'Dairy & Eggs', unsplashQuery: 'egg' },
  { id: 'g68', word: 'Milk', translations: { es: 'Leche', pt: 'Leite', fr: 'Lait', de: 'Milch', it: 'Latte', ja: 'ミルク', zh: '牛奶', ko: '우유', ar: 'حليب' }, category: 'Dairy & Eggs', unsplashQuery: 'milk glass' },
  { id: 'g69', word: 'Cheese', translations: { es: 'Queso', pt: 'Queijo', fr: 'Fromage', de: 'Käse', it: 'Formaggio', ja: 'チーズ', zh: '奶酪', ko: '치즈', ar: 'جبن' }, category: 'Dairy & Eggs', unsplashQuery: 'cheese' },
  { id: 'g70', word: 'Butter', translations: { es: 'Mantequilla', pt: 'Manteiga', fr: 'Beurre', de: 'Butter', it: 'Burro', ja: 'バター', zh: '黄油', ko: '버터', ar: 'زبدة' }, category: 'Dairy & Eggs', unsplashQuery: 'butter' },
  { id: 'g71', word: 'Yogurt', translations: { es: 'Yogur', pt: 'Iogurte', fr: 'Yaourt', de: 'Joghurt', it: 'Yogurt', ja: 'ヨーグルト', zh: '酸奶', ko: '요구르트', ar: 'زبادي' }, category: 'Dairy & Eggs', unsplashQuery: 'yogurt' },
  { id: 'g72', word: 'Cream', translations: { es: 'Nata', pt: 'Creme', fr: 'Crème', de: 'Sahne', it: 'Panna', ja: 'クリーム', zh: '奶油', ko: '크림', ar: 'قشدة' }, category: 'Dairy & Eggs', unsplashQuery: 'cream dairy' },
  { id: 'g73', word: 'Mozzarella', translations: { es: 'Mozzarella', pt: 'Mozzarella', fr: 'Mozzarella', de: 'Mozzarella', it: 'Mozzarella', ja: 'モッツァレラ', zh: '马苏里拉', ko: '모차렐라', ar: 'موزاريلا' }, category: 'Dairy & Eggs', unsplashQuery: 'mozzarella cheese' },

  // Bread & Grains
  { id: 'g74', word: 'Bread', translations: { es: 'Pan', pt: 'Pão', fr: 'Pain', de: 'Brot', it: 'Pane', ja: 'パン', zh: '面包', ko: '빵', ar: 'خبز' }, category: 'Bread & Grains', unsplashQuery: 'bread bakery' },
  { id: 'g75', word: 'Rice', translations: { es: 'Arroz', pt: 'Arroz', fr: 'Riz', de: 'Reis', it: 'Riso', ja: 'ご飯', zh: '米饭', ko: '밥', ar: 'أرز' }, category: 'Bread & Grains', unsplashQuery: 'rice bowl' },
  { id: 'g76', word: 'Pasta', translations: { es: 'Pasta', pt: 'Massa', fr: 'Pâtes', de: 'Nudeln', it: 'Pasta', ja: 'パスタ', zh: '意大利面', ko: '파스타', ar: 'باستا' }, category: 'Bread & Grains', unsplashQuery: 'pasta' },
  { id: 'g77', word: 'Noodles', translations: { es: 'Fideos', pt: 'Macarrão', fr: 'Nouilles', de: 'Nudeln', it: 'Spaghetti', ja: '麺', zh: '面条', ko: '국수', ar: 'مكرونة' }, category: 'Bread & Grains', unsplashQuery: 'noodles' },
  { id: 'g78', word: 'Flour', translations: { es: 'Harina', pt: 'Farinha', fr: 'Farine', de: 'Mehl', it: 'Farina', ja: '小麦粉', zh: '面粉', ko: '밀가루', ar: 'دقيق' }, category: 'Bread & Grains', unsplashQuery: 'flour baking' },
  { id: 'g79', word: 'Oats', translations: { es: 'Avena', pt: 'Aveia', fr: 'Avoine', de: 'Hafer', it: 'Avena', ja: 'オートミール', zh: '燕麦', ko: '귀리', ar: 'شوفان' }, category: 'Bread & Grains', unsplashQuery: 'oats cereal' },
  { id: 'g80', word: 'Croissant', translations: { es: 'Cruasán', pt: 'Croissant', fr: 'Croissant', de: 'Croissant', it: 'Cornetto', ja: 'クロワッサン', zh: '可颂', ko: '크루아상', ar: 'كرواسون' }, category: 'Bread & Grains', unsplashQuery: 'croissant' },
  { id: 'g81', word: 'Bagel', translations: { es: 'Bagel', pt: 'Bagel', fr: 'Bagel', de: 'Bagel', it: 'Bagel', ja: 'ベーグル', zh: '百吉饼', ko: '베이글', ar: 'خبز البيغل' }, category: 'Bread & Grains', unsplashQuery: 'bagel' },
  { id: 'g82', word: 'Quinoa', translations: { es: 'Quinoa', pt: 'Quinoa', fr: 'Quinoa', de: 'Quinoa', it: 'Quinoa', ja: 'キヌア', zh: '藜麦', ko: '퀴노아', ar: 'كينوا' }, category: 'Bread & Grains', unsplashQuery: 'quinoa grain' },

  // Drinks
  { id: 'g83', word: 'Water', translations: { es: 'Agua', pt: 'Água', fr: 'Eau', de: 'Wasser', it: 'Acqua', ja: '水', zh: '水', ko: '물', ar: 'ماء' }, category: 'Drinks', unsplashQuery: 'water glass' },
  { id: 'g84', word: 'Coffee', translations: { es: 'Café', pt: 'Café', fr: 'Café', de: 'Kaffee', it: 'Caffè', ja: 'コーヒー', zh: '咖啡', ko: '커피', ar: 'قهوة' }, category: 'Drinks', unsplashQuery: 'coffee cup' },
  { id: 'g85', word: 'Tea', translations: { es: 'Té', pt: 'Chá', fr: 'Thé', de: 'Tee', it: 'Tè', ja: 'お茶', zh: '茶', ko: '차', ar: 'شاي' }, category: 'Drinks', unsplashQuery: 'tea cup' },
  { id: 'g86', word: 'Wine', translations: { es: 'Vino', pt: 'Vinho', fr: 'Vin', de: 'Wein', it: 'Vino', ja: 'ワイン', zh: '葡萄酒', ko: '와인', ar: 'نبيذ' }, category: 'Drinks', unsplashQuery: 'wine glass' },
  { id: 'g87', word: 'Beer', translations: { es: 'Cerveza', pt: 'Cerveja', fr: 'Bière', de: 'Bier', it: 'Birra', ja: 'ビール', zh: '啤酒', ko: '맥주', ar: 'بيرة' }, category: 'Drinks', unsplashQuery: 'beer glass' },
  { id: 'g88', word: 'Juice', translations: { es: 'Zumo', pt: 'Suco', fr: 'Jus', de: 'Saft', it: 'Succo', ja: 'ジュース', zh: '果汁', ko: '주스', ar: 'عصير' }, category: 'Drinks', unsplashQuery: 'orange juice' },
  { id: 'g89', word: 'Smoothie', translations: { es: 'Batido', pt: 'Vitamina', fr: 'Smoothie', de: 'Smoothie', it: 'Frullato', ja: 'スムージー', zh: '冰沙', ko: '스무디', ar: 'عصير سميك' }, category: 'Drinks', unsplashQuery: 'smoothie' },
  { id: 'g90', word: 'Cocktail', translations: { es: 'Cóctel', pt: 'Coquetel', fr: 'Cocktail', de: 'Cocktail', it: 'Cocktail', ja: 'カクテル', zh: '鸡尾酒', ko: '칵테일', ar: 'كوكتيل' }, category: 'Drinks', unsplashQuery: 'cocktail drink' },
  { id: 'g91', word: 'Lemonade', translations: { es: 'Limonada', pt: 'Limonada', fr: 'Limonade', de: 'Limonade', it: 'Limonata', ja: 'レモネード', zh: '柠檬水', ko: '레모네이드', ar: 'ليمونادة' }, category: 'Drinks', unsplashQuery: 'lemonade' },
  { id: 'g92', word: 'Espresso', translations: { es: 'Expreso', pt: 'Expresso', fr: 'Expresso', de: 'Espresso', it: 'Espresso', ja: 'エスプレッソ', zh: '浓缩咖啡', ko: '에스프레소', ar: 'إسبريسو' }, category: 'Drinks', unsplashQuery: 'espresso coffee' },

  // Desserts & Sweets
  { id: 'g93', word: 'Cake', translations: { es: 'Pastel', pt: 'Bolo', fr: 'Gâteau', de: 'Kuchen', it: 'Torta', ja: 'ケーキ', zh: '蛋糕', ko: '케이크', ar: 'كعكة' }, category: 'Desserts', unsplashQuery: 'cake' },
  { id: 'g94', word: 'Ice Cream', translations: { es: 'Helado', pt: 'Sorvete', fr: 'Glace', de: 'Eis', it: 'Gelato', ja: 'アイスクリーム', zh: '冰淇淋', ko: '아이스크림', ar: 'آيس كريم' }, category: 'Desserts', unsplashQuery: 'ice cream' },
  { id: 'g95', word: 'Chocolate', translations: { es: 'Chocolate', pt: 'Chocolate', fr: 'Chocolat', de: 'Schokolade', it: 'Cioccolato', ja: 'チョコレート', zh: '巧克力', ko: '초콜릿', ar: 'شوكولاتة' }, category: 'Desserts', unsplashQuery: 'chocolate' },
  { id: 'g96', word: 'Cookie', translations: { es: 'Galleta', pt: 'Biscoito', fr: 'Biscuit', de: 'Keks', it: 'Biscotto', ja: 'クッキー', zh: '饼干', ko: '쿠키', ar: 'بسكويت' }, category: 'Desserts', unsplashQuery: 'cookie' },
  { id: 'g97', word: 'Doughnut', translations: { es: 'Donut', pt: 'Rosquinha', fr: 'Beignet', de: 'Donut', it: 'Ciambella', ja: 'ドーナツ', zh: '甜甜圈', ko: '도넛', ar: 'دونات' }, category: 'Desserts', unsplashQuery: 'doughnut' },
  { id: 'g98', word: 'Pancake', translations: { es: 'Tortita', pt: 'Panqueca', fr: 'Crêpe', de: 'Pfannkuchen', it: 'Crêpe', ja: 'パンケーキ', zh: '煎饼', ko: '팬케이크', ar: 'بانكيك' }, category: 'Desserts', unsplashQuery: 'pancake' },
  { id: 'g99', word: 'Tiramisu', translations: { es: 'Tiramisú', pt: 'Tiramisu', fr: 'Tiramisu', de: 'Tiramisu', it: 'Tiramisù', ja: 'ティラミス', zh: '提拉米苏', ko: '티라미수', ar: 'تيراميسو' }, category: 'Desserts', unsplashQuery: 'tiramisu' },
  { id: 'g100', word: 'Cheesecake', translations: { es: 'Tarta de queso', pt: 'Cheesecake', fr: 'Cheesecake', de: 'Käsekuchen', it: 'Cheesecake', ja: 'チーズケーキ', zh: '芝士蛋糕', ko: '치즈케이크', ar: 'تشيزكيك' }, category: 'Desserts', unsplashQuery: 'cheesecake' },
  { id: 'g101', word: 'Pudding', translations: { es: 'Pudín', pt: 'Pudim', fr: 'Pudding', de: 'Pudding', it: 'Budino', ja: 'プリン', zh: '布丁', ko: '푸딩', ar: 'بودينغ' }, category: 'Desserts', unsplashQuery: 'pudding dessert' },
  { id: 'g102', word: 'Honey', translations: { es: 'Miel', pt: 'Mel', fr: 'Miel', de: 'Honig', it: 'Miele', ja: 'ハチミツ', zh: '蜂蜜', ko: '꿀', ar: 'عسل' }, category: 'Desserts', unsplashQuery: 'honey jar' },
  { id: 'g103', word: 'Jam', translations: { es: 'Mermelada', pt: 'Geleia', fr: 'Confiture', de: 'Marmelade', it: 'Marmellata', ja: 'ジャム', zh: '果酱', ko: '잼', ar: 'مربى' }, category: 'Desserts', unsplashQuery: 'jam jar' },
  { id: 'g104', word: 'Caramel', translations: { es: 'Caramelo', pt: 'Caramelo', fr: 'Caramel', de: 'Karamell', it: 'Caramello', ja: 'キャラメル', zh: '焦糖', ko: '카라멜', ar: 'كراميل' }, category: 'Desserts', unsplashQuery: 'caramel' },

  // Herbs & Spices
  { id: 'g105', word: 'Salt', translations: { es: 'Sal', pt: 'Sal', fr: 'Sel', de: 'Salz', it: 'Sale', ja: '塩', zh: '盐', ko: '소금', ar: 'ملح' }, category: 'Herbs & Spices', unsplashQuery: 'salt' },
  { id: 'g106', word: 'Pepper', translations: { es: 'Pimienta', pt: 'Pimenta', fr: 'Poivre', de: 'Pfeffer', it: 'Pepe', ja: 'コショウ', zh: '胡椒', ko: '후추', ar: 'فلفل' }, category: 'Herbs & Spices', unsplashQuery: 'pepper spice' },
  { id: 'g107', word: 'Basil', translations: { es: 'Albahaca', pt: 'Manjericão', fr: 'Basilic', de: 'Basilikum', it: 'Basilico', ja: 'バジル', zh: '罗勒', ko: '바질', ar: 'ريحان' }, category: 'Herbs & Spices', unsplashQuery: 'basil herb' },
  { id: 'g108', word: 'Cinnamon', translations: { es: 'Canela', pt: 'Canela', fr: 'Cannelle', de: 'Zimt', it: 'Cannella', ja: 'シナモン', zh: '肉桂', ko: '계피', ar: 'قرفة' }, category: 'Herbs & Spices', unsplashQuery: 'cinnamon spice' },
  { id: 'g109', word: 'Ginger', translations: { es: 'Jengibre', pt: 'Gengibre', fr: 'Gingembre', de: 'Ingwer', it: 'Zenzero', ja: 'ショウガ', zh: '生姜', ko: '생강', ar: 'زنجبيل' }, category: 'Herbs & Spices', unsplashQuery: 'ginger root' },
  { id: 'g110', word: 'Vanilla', translations: { es: 'Vainilla', pt: 'Baunilha', fr: 'Vanille', de: 'Vanille', it: 'Vaniglia', ja: 'バニラ', zh: '香草', ko: '바닐라', ar: 'فانيليا' }, category: 'Herbs & Spices', unsplashQuery: 'vanilla' },
  { id: 'g111', word: 'Parsley', translations: { es: 'Perejil', pt: 'Salsa', fr: 'Persil', de: 'Petersilie', it: 'Prezzemolo', ja: 'パセリ', zh: '欧芹', ko: '파슬리', ar: 'بقدونس' }, category: 'Herbs & Spices', unsplashQuery: 'parsley herb' },
  { id: 'g112', word: 'Rosemary', translations: { es: 'Romero', pt: 'Alecrim', fr: 'Romarin', de: 'Rosmarin', it: 'Rosmarino', ja: 'ローズマリー', zh: '迷迭香', ko: '로즈마리', ar: 'إكليل الجبل' }, category: 'Herbs & Spices', unsplashQuery: 'rosemary herb' },
  { id: 'g113', word: 'Thyme', translations: { es: 'Tomillo', pt: 'Tomilho', fr: 'Thym', de: 'Thymian', it: 'Timo', ja: 'タイム', zh: '百里香', ko: '타임', ar: 'زعتر' }, category: 'Herbs & Spices', unsplashQuery: 'thyme herb' },
  { id: 'g114', word: 'Chili', translations: { es: 'Chile', pt: 'Pimenta malagueta', fr: 'Piment', de: 'Chili', it: 'Peperoncino', ja: '唐辛子', zh: '辣椒', ko: '고추', ar: 'فلفل حار' }, category: 'Herbs & Spices', unsplashQuery: 'chili pepper red' },
  { id: 'g115', word: 'Turmeric', translations: { es: 'Cúrcuma', pt: 'Açafrão', fr: 'Curcuma', de: 'Kurkuma', it: 'Curcuma', ja: 'ターメリック', zh: '姜黄', ko: '강황', ar: 'كركم' }, category: 'Herbs & Spices', unsplashQuery: 'turmeric spice' },
  { id: 'g116', word: 'Saffron', translations: { es: 'Azafrán', pt: 'Açafrão', fr: 'Safran', de: 'Safran', it: 'Zafferano', ja: 'サフラン', zh: '藏红花', ko: '사프란', ar: 'زعفران' }, category: 'Herbs & Spices', unsplashQuery: 'saffron spice' },

  // Condiments & Sauces
  { id: 'g117', word: 'Olive Oil', translations: { es: 'Aceite de oliva', pt: 'Azeite', fr: 'Huile d\'olive', de: 'Olivenöl', it: 'Olio d\'oliva', ja: 'オリーブオイル', zh: '橄榄油', ko: '올리브 오일', ar: 'زيت الزيتون' }, category: 'Condiments', unsplashQuery: 'olive oil' },
  { id: 'g118', word: 'Vinegar', translations: { es: 'Vinagre', pt: 'Vinagre', fr: 'Vinaigre', de: 'Essig', it: 'Aceto', ja: '酢', zh: '醋', ko: '식초', ar: 'خل' }, category: 'Condiments', unsplashQuery: 'vinegar bottle' },
  { id: 'g119', word: 'Ketchup', translations: { es: 'Ketchup', pt: 'Ketchup', fr: 'Ketchup', de: 'Ketchup', it: 'Ketchup', ja: 'ケチャップ', zh: '番茄酱', ko: '케첩', ar: 'كاتشب' }, category: 'Condiments', unsplashQuery: 'ketchup' },
  { id: 'g120', word: 'Mustard', translations: { es: 'Mostaza', pt: 'Mostarda', fr: 'Moutarde', de: 'Senf', it: 'Senape', ja: 'マスタード', zh: '芥末', ko: '머스타드', ar: 'خردل' }, category: 'Condiments', unsplashQuery: 'mustard' },
  { id: 'g121', word: 'Mayonnaise', translations: { es: 'Mayonesa', pt: 'Maionese', fr: 'Mayonnaise', de: 'Mayonnaise', it: 'Maionese', ja: 'マヨネーズ', zh: '蛋黄酱', ko: '마요네즈', ar: 'مايونيز' }, category: 'Condiments', unsplashQuery: 'mayonnaise' },
  { id: 'g122', word: 'Soy Sauce', translations: { es: 'Salsa de soja', pt: 'Molho de soja', fr: 'Sauce soja', de: 'Sojasoße', it: 'Salsa di soia', ja: '醤油', zh: '酱油', ko: '간장', ar: 'صلصة الصويا' }, category: 'Condiments', unsplashQuery: 'soy sauce' },
  { id: 'g123', word: 'Pesto', translations: { es: 'Pesto', pt: 'Pesto', fr: 'Pesto', de: 'Pesto', it: 'Pesto', ja: 'ペスト', zh: '青酱', ko: '페스토', ar: 'بيستو' }, category: 'Condiments', unsplashQuery: 'pesto sauce' },

  // Dishes
  { id: 'g124', word: 'Pizza', translations: { es: 'Pizza', pt: 'Pizza', fr: 'Pizza', de: 'Pizza', it: 'Pizza', ja: 'ピザ', zh: '披萨', ko: '피자', ar: 'بيتزا' }, category: 'Dishes', unsplashQuery: 'pizza' },
  { id: 'g125', word: 'Sushi', translations: { es: 'Sushi', pt: 'Sushi', fr: 'Sushi', de: 'Sushi', it: 'Sushi', ja: '寿司', zh: '寿司', ko: '스시', ar: 'سوشي' }, category: 'Dishes', unsplashQuery: 'sushi' },
  { id: 'g126', word: 'Burger', translations: { es: 'Hamburguesa', pt: 'Hambúrguer', fr: 'Hamburger', de: 'Burger', it: 'Hamburger', ja: 'バーガー', zh: '汉堡', ko: '버거', ar: 'برغر' }, category: 'Dishes', unsplashQuery: 'burger' },
  { id: 'g127', word: 'Soup', translations: { es: 'Sopa', pt: 'Sopa', fr: 'Soupe', de: 'Suppe', it: 'Zuppa', ja: 'スープ', zh: '汤', ko: '수프', ar: 'شوربة' }, category: 'Dishes', unsplashQuery: 'soup bowl' },
  { id: 'g128', word: 'Salad', translations: { es: 'Ensalada', pt: 'Salada', fr: 'Salade', de: 'Salat', it: 'Insalata', ja: 'サラダ', zh: '沙拉', ko: '샐러드', ar: 'سلطة' }, category: 'Dishes', unsplashQuery: 'salad fresh' },
  { id: 'g129', word: 'Sandwich', translations: { es: 'Sándwich', pt: 'Sanduíche', fr: 'Sandwich', de: 'Sandwich', it: 'Panino', ja: 'サンドイッチ', zh: '三明治', ko: '샌드위치', ar: 'ساندويتش' }, category: 'Dishes', unsplashQuery: 'sandwich' },
  { id: 'g130', word: 'Omelette', translations: { es: 'Tortilla', pt: 'Omelete', fr: 'Omelette', de: 'Omelett', it: 'Frittata', ja: 'オムレツ', zh: '煎蛋卷', ko: '오믈렛', ar: 'أومليت' }, category: 'Dishes', unsplashQuery: 'omelette eggs' },
  { id: 'g131', word: 'Paella', translations: { es: 'Paella', pt: 'Paella', fr: 'Paella', de: 'Paella', it: 'Paella', ja: 'パエリア', zh: '西班牙海鲜饭', ko: '파에야', ar: 'باييا' }, category: 'Dishes', unsplashQuery: 'paella' },
  { id: 'g132', word: 'Risotto', translations: { es: 'Risotto', pt: 'Risoto', fr: 'Risotto', de: 'Risotto', it: 'Risotto', ja: 'リゾット', zh: '意式烩饭', ko: '리조또', ar: 'ريزوتو' }, category: 'Dishes', unsplashQuery: 'risotto' },
  { id: 'g133', word: 'Tacos', translations: { es: 'Tacos', pt: 'Tacos', fr: 'Tacos', de: 'Tacos', it: 'Tacos', ja: 'タコス', zh: '玉米饼', ko: '타코스', ar: 'تاكو' }, category: 'Dishes', unsplashQuery: 'tacos mexican' },
  { id: 'g134', word: 'Curry', translations: { es: 'Curry', pt: 'Curry', fr: 'Curry', de: 'Curry', it: 'Curry', ja: 'カレー', zh: '咖喱', ko: '카레', ar: 'كاري' }, category: 'Dishes', unsplashQuery: 'curry dish' },
  { id: 'g135', word: 'Stew', translations: { es: 'Guiso', pt: 'Ensopado', fr: 'Ragoût', de: 'Eintopf', it: 'Stufato', ja: 'シチュー', zh: '炖菜', ko: '스튜', ar: 'يخنة' }, category: 'Dishes', unsplashQuery: 'stew pot' },
  { id: 'g136', word: 'Ramen', translations: { es: 'Ramen', pt: 'Ramen', fr: 'Ramen', de: 'Ramen', it: 'Ramen', ja: 'ラーメン', zh: '拉面', ko: '라멘', ar: 'رامن' }, category: 'Dishes', unsplashQuery: 'ramen noodles' },

  // Nuts & Legumes
  { id: 'g137', word: 'Almonds', translations: { es: 'Almendras', pt: 'Amêndoas', fr: 'Amandes', de: 'Mandeln', it: 'Mandorle', ja: 'アーモンド', zh: '杏仁', ko: '아몬드', ar: 'لوز' }, category: 'Nuts & Legumes', unsplashQuery: 'almonds nuts' },
  { id: 'g138', word: 'Walnuts', translations: { es: 'Nueces', pt: 'Nozes', fr: 'Noix', de: 'Walnüsse', it: 'Noci', ja: 'クルミ', zh: '核桃', ko: '호두', ar: 'جوز' }, category: 'Nuts & Legumes', unsplashQuery: 'walnuts' },
  { id: 'g139', word: 'Beans', translations: { es: 'Frijoles', pt: 'Feijão', fr: 'Haricots', de: 'Bohnen', it: 'Fagioli', ja: '豆', zh: '豆子', ko: '콩', ar: 'فاصولياء' }, category: 'Nuts & Legumes', unsplashQuery: 'beans legumes' },
  { id: 'g140', word: 'Lentils', translations: { es: 'Lentejas', pt: 'Lentilhas', fr: 'Lentilles', de: 'Linsen', it: 'Lenticchie', ja: 'レンズ豆', zh: '扁豆', ko: '렌틸콩', ar: 'عدس' }, category: 'Nuts & Legumes', unsplashQuery: 'lentils' },
  { id: 'g141', word: 'Chickpeas', translations: { es: 'Garbanzos', pt: 'Grão-de-bico', fr: 'Pois chiches', de: 'Kichererbsen', it: 'Ceci', ja: 'ひよこ豆', zh: '鹰嘴豆', ko: '병아리콩', ar: 'حمص' }, category: 'Nuts & Legumes', unsplashQuery: 'chickpeas' },
  { id: 'g142', word: 'Peanuts', translations: { es: 'Cacahuetes', pt: 'Amendoim', fr: 'Cacahuètes', de: 'Erdnüsse', it: 'Arachidi', ja: 'ピーナッツ', zh: '花生', ko: '땅콩', ar: 'فول سوداني' }, category: 'Nuts & Legumes', unsplashQuery: 'peanuts' },

  // Kitchen Tools
  { id: 'g143', word: 'Knife', translations: { es: 'Cuchillo', pt: 'Faca', fr: 'Couteau', de: 'Messer', it: 'Coltello', ja: '包丁', zh: '刀', ko: '칼', ar: 'سكين' }, category: 'Kitchen', unsplashQuery: 'knife kitchen' },
  { id: 'g144', word: 'Pan', translations: { es: 'Sartén', pt: 'Frigideira', fr: 'Poêle', de: 'Pfanne', it: 'Padella', ja: 'フライパン', zh: '平底锅', ko: '프라이팬', ar: 'مقلاة' }, category: 'Kitchen', unsplashQuery: 'frying pan' },
  { id: 'g145', word: 'Pot', translations: { es: 'Olla', pt: 'Panela', fr: 'Casserole', de: 'Topf', it: 'Pentola', ja: '鍋', zh: '锅', ko: '냄비', ar: 'قدر' }, category: 'Kitchen', unsplashQuery: 'cooking pot' },
  { id: 'g146', word: 'Fork', translations: { es: 'Tenedor', pt: 'Garfo', fr: 'Fourchette', de: 'Gabel', it: 'Forchetta', ja: 'フォーク', zh: '叉子', ko: '포크', ar: 'شوكة' }, category: 'Kitchen', unsplashQuery: 'fork cutlery' },
  { id: 'g147', word: 'Spoon', translations: { es: 'Cuchara', pt: 'Colher', fr: 'Cuillère', de: 'Löffel', it: 'Cucchiaio', ja: 'スプーン', zh: '勺子', ko: '숟가락', ar: 'ملعقة' }, category: 'Kitchen', unsplashQuery: 'spoon kitchen' },
  { id: 'g148', word: 'Bowl', translations: { es: 'Bol', pt: 'Tigela', fr: 'Bol', de: 'Schüssel', it: 'Ciotola', ja: 'ボウル', zh: '碗', ko: '그릇', ar: 'وعاء' }, category: 'Kitchen', unsplashQuery: 'bowl ceramic' },
  { id: 'g149', word: 'Oven', translations: { es: 'Horno', pt: 'Forno', fr: 'Four', de: 'Ofen', it: 'Forno', ja: 'オーブン', zh: '烤箱', ko: '오븐', ar: 'فرن' }, category: 'Kitchen', unsplashQuery: 'oven kitchen' },
  { id: 'g150', word: 'Cutting Board', translations: { es: 'Tabla de cortar', pt: 'Tábua de corte', fr: 'Planche à découper', de: 'Schneidebrett', it: 'Tagliere', ja: 'まな板', zh: '砧板', ko: '도마', ar: 'لوح تقطيع' }, category: 'Kitchen', unsplashQuery: 'cutting board' },

  // Additional Fruits
  { id: 'g151', word: 'Plum',   translations: { es: 'Ciruela',      pt: 'Ameixa',       fr: 'Prune',     de: 'Pflaume',       it: 'Susina',          ja: 'プラム',     zh: '李子',   ko: '자두',       ar: 'برقوق'        }, category: 'Fruits', unsplashQuery: 'plum fruit' },
  { id: 'g152', word: 'Prune',  translations: { es: 'Ciruela pasa', pt: 'Ameixa seca',  fr: 'Pruneau',   de: 'Backpflaume',   it: 'Prugna secca',    ja: 'プルーン',   zh: '西梅',   ko: '건자두',     ar: 'برقوق مجفف'   }, category: 'Fruits', unsplashQuery: 'prune dried plum' },
  { id: 'g153', word: 'Carob',  translations: { es: 'Algarroba',    pt: 'Alfarroba',    fr: 'Caroube',   de: 'Johannisbrot',  it: 'Carruba',         ja: 'イナゴマメ', zh: '角豆',   ko: '캐롭',       ar: 'خروب'         }, category: 'Fruits', unsplashQuery: 'carob' },

  // Additional Vegetables
  { id: 'g154', word: 'Pumpkin',    translations: { es: 'Calabaza', pt: 'Abóbora', fr: 'Citrouille', de: 'Kürbis',        it: 'Zucca',     ja: 'カボチャ', zh: '南瓜', ko: '호박',     ar: 'قرع'          }, category: 'Vegetables', unsplashQuery: 'pumpkin' },
  { id: 'g155', word: 'Celery',     translations: { es: 'Apio',     pt: 'Aipo',    fr: 'Céleri',     de: 'Sellerie',      it: 'Sedano',    ja: 'セロリ',   zh: '芹菜', ko: '셀러리',   ar: 'كرفس'         }, category: 'Vegetables', unsplashQuery: 'celery' },
  { id: 'g156', word: 'Watercress', translations: { es: 'Berro',    pt: 'Agrião',  fr: 'Cresson',    de: 'Brunnenkresse', it: 'Crescione', ja: 'クレソン', zh: '水芹', ko: '물냉이',   ar: 'جرجير الماء'  }, category: 'Vegetables', unsplashQuery: 'watercress' },
  { id: 'g157', word: 'Seaweed',    translations: { es: 'Alga',     pt: 'Alga',    fr: 'Algue',      de: 'Alge',          it: 'Alga',      ja: '海藻',     zh: '海藻', ko: '해조류',   ar: 'أعشاب بحرية'  }, category: 'Vegetables', unsplashQuery: 'seaweed algae' },

  // Additional Meat
  { id: 'g158', word: 'Fore Ribs',  translations: { es: 'Costillas delanteras', pt: 'Costela dianteira',  fr: 'Côte de bœuf', de: 'Vorderrippe', it: 'Costolette anteriori', ja: 'フォアリブ',     zh: '前肋排',   ko: '포어 립스',   ar: 'ضلوع أمامية'  }, category: 'Meat', unsplashQuery: 'fore ribs beef' },
  { id: 'g159', word: 'Rump Steak', translations: { es: 'Bistec de cadera',     pt: 'Picanha',            fr: 'Rumsteak',     de: 'Rumpsteak',   it: 'Bistecca di scamone',  ja: 'ランプステーキ', zh: '臀肉牛排', ko: '럼프 스테이크', ar: 'ستيك الردف'   }, category: 'Meat', unsplashQuery: 'rump steak' },

  // Additional Meat
  { id: 'g178', word: 'Veal', translations: { es: 'Ternera', pt: 'Vitela', fr: 'Veau', de: 'Kalbfleisch', it: 'Vitello', ja: '仔牛肉', zh: '小牛肉', ko: '송아지고기', ar: 'لحم عجل' }, category: 'Meat', unsplashQuery: 'veal meat' },

  // Additional Seafood
  { id: 'g160', word: 'Halibut',    translations: { es: 'Halibut',  pt: 'Halibute',    fr: 'Flétan',    de: 'Heilbutt',        it: 'Halibut',            ja: 'ハリバット',     zh: '大比目鱼', ko: '광어',        ar: 'هلبوت'        }, category: 'Seafood', unsplashQuery: 'halibut fish' },
  { id: 'g161', word: 'Herring',    translations: { es: 'Arenque',  pt: 'Arenque',     fr: 'Hareng',    de: 'Hering',          it: 'Aringa',             ja: 'ニシン',         zh: '鲱鱼',     ko: '청어',        ar: 'رنجة'         }, category: 'Seafood', unsplashQuery: 'herring fish' },
  { id: 'g162', word: 'Saithe',     translations: { es: 'Carbonero', pt: 'Escamudo',   fr: 'Lieu noir', de: 'Köhler',          it: 'Merluzzo carbonaro', ja: 'サイス',         zh: '黑线鳕',   ko: '세이스',      ar: 'سمك الكول'    }, category: 'Seafood', unsplashQuery: 'saithe pollock' },
  { id: 'g163', word: 'Garfish',    translations: { es: 'Aguja',    pt: 'Agulha',      fr: 'Orphie',    de: 'Hornhecht',       it: 'Aguglia',            ja: 'ダツ',           zh: '颌针鱼',   ko: '꽁치류',      ar: 'سمك الإبرة'   }, category: 'Seafood', unsplashQuery: 'garfish' },
  { id: 'g164', word: 'Lemon Sole', translations: { es: 'Limanda',  pt: 'Solha-limão', fr: 'Limande',   de: 'Rotzunge',        it: 'Sogliola limanda',   ja: 'レモンソール',   zh: '柠檬鲽',   ko: '레몬 서대기',  ar: 'سمك موسى الليمون' }, category: 'Seafood', unsplashQuery: 'lemon sole fish' },
  { id: 'g165', word: 'Whiting',    translations: { es: 'Merlán',   pt: 'Badejo',      fr: 'Merlan',    de: 'Wittling',        it: 'Merlano',            ja: 'ホワイティング', zh: '牙鳕',     ko: '민어류',      ar: 'سمك الميرلان' }, category: 'Seafood', unsplashQuery: 'whiting fish' },
  { id: 'g166', word: 'Dogfish',    translations: { es: 'Cazón',    pt: 'Cação',       fr: 'Roussette', de: 'Katzenhai',       it: 'Gattuccio',          ja: 'ドッグフィッシュ', zh: '角鲨',   ko: '참상어',      ar: 'كلب البحر'    }, category: 'Seafood', unsplashQuery: 'dogfish shark' },
  { id: 'g167', word: 'Periwinkle', translations: { es: 'Bígaro',   pt: 'Caramujo',    fr: 'Bigorneau', de: 'Strandschnecke',  it: 'Chiocciola di mare', ja: 'タマキビ',       zh: '玉黍螺',   ko: '총알고둥',    ar: 'بزاق البحر'   }, category: 'Seafood', unsplashQuery: 'periwinkle shellfish' },
  { id: 'g168', word: 'Bacalhau',   translations: { es: 'Bacalao',    pt: 'Bacalhau',  fr: 'Morue',          de: 'Stockfisch',  it: 'Baccalà',            ja: '塩タラ',             zh: '盐鳕鱼',   ko: '소금대구',    ar: 'بقالة مملحة'  }, category: 'Seafood', unsplashQuery: 'salt cod bacalhau' },
  { id: 'g179', word: 'Toadfish',   translations: { es: 'Pez sapo',   pt: 'Peixe-sapo', fr: 'Crapaud de mer', de: 'Krötenbarsch', it: 'Pesce rospo',       ja: 'ガマアンコウ',       zh: '蟾鱼',     ko: '두꺼비고기',  ar: 'سمك الضفدع'   }, category: 'Seafood', unsplashQuery: 'toadfish' },
  { id: 'g180', word: "Ray's Bream", translations: { es: 'Japuta',    pt: 'Xaputa',    fr: 'Castagnole',     de: 'Brachsenmakrele', it: 'Pesce castagna',  ja: 'レイズブリーム',     zh: '锹形鲂',   ko: '레이즈 브림', ar: 'سمك راي بريم' }, category: 'Seafood', unsplashQuery: 'rays bream fish' },
  { id: 'g181', word: 'Scallop',    translations: { es: 'Vieira',     pt: 'Vieira',    fr: 'Coquille Saint-Jacques', de: 'Jakobsmuschel', it: 'Capasanta', ja: 'ホタテ',           zh: '扇贝',     ko: '가리비',      ar: 'إسقلوب'       }, category: 'Seafood', unsplashQuery: 'scallop shellfish' },

  // Additional Drinks
  { id: 'g169', word: 'Absinthe', translations: { es: 'Absenta',        pt: 'Absinto',        fr: 'Absinthe',    de: 'Absinth',    it: 'Assenzio',    ja: 'アブサン', zh: '苦艾酒', ko: '압생트', ar: 'أبسنت' }, category: 'Drinks', unsplashQuery: 'absinthe drink' },
  { id: 'g170', word: 'Bitter',   translations: { es: 'Cerveza amarga', pt: 'Cerveja amarga', fr: 'Bière amère', de: 'Bitter Ale', it: 'Birra amara', ja: 'ビター',   zh: '苦啤酒', ko: '비터 에일', ar: 'بيرة مرة' }, category: 'Drinks', unsplashQuery: 'bitter ale beer' },

  // Additional Bread & Grains
  { id: 'g171', word: 'Cornflour',   translations: { es: 'Maicena',      pt: 'Amido de milho', fr: 'Maïzena',    de: 'Maisstärke',     it: 'Amido di mais',     ja: 'コーンスターチ', zh: '玉米淀粉', ko: '옥수수 전분', ar: 'نشا الذرة'   }, category: 'Bread & Grains', unsplashQuery: 'cornflour starch' },
  { id: 'g172', word: 'Raw Sugar',   translations: { es: 'Azúcar crudo', pt: 'Açúcar bruto',   fr: 'Sucre brut', de: 'Rohzucker',      it: 'Zucchero grezzo',   ja: '粗糖',           zh: '原糖',     ko: '원당',        ar: 'سكر خام'      }, category: 'Bread & Grains', unsplashQuery: 'raw sugar cane' },
  { id: 'g173', word: 'Brown Sugar', translations: { es: 'Azúcar moreno', pt: 'Açúcar mascavo', fr: 'Cassonade', de: 'Brauner Zucker', it: 'Zucchero di canna', ja: '黒砂糖',         zh: '红糖',     ko: '흑설탕',      ar: 'سكر بني'      }, category: 'Bread & Grains', unsplashQuery: 'brown sugar' },

  // Additional Condiments
  { id: 'g182', word: 'Syrup', translations: { es: 'Sirope', pt: 'Xarope', fr: 'Sirop', de: 'Sirup', it: 'Sciroppo', ja: 'シロップ', zh: '糖浆', ko: '시럽', ar: 'شراب' }, category: 'Condiments', unsplashQuery: 'syrup bottle' },
  { id: 'g174', word: 'Caper',        translations: { es: 'Alcaparra', pt: 'Alcaparra', fr: 'Câpre',      de: 'Kaper',     it: 'Cappero',   ja: 'ケーパー', zh: '刺山柑', ko: '케이퍼', ar: 'كبر' }, category: 'Condiments', unsplashQuery: 'caper food' },
  { id: 'g175', word: 'Sweet & Sour', translations: { es: 'Agridulce', pt: 'Agridoce',  fr: 'Aigre-doux', de: 'Süß-sauer', it: 'Agrodolce', ja: '甘酢',     zh: '糖醋',   ko: '달콤새콤', ar: 'حلو وحامض' }, category: 'Condiments', unsplashQuery: 'sweet sour sauce' },

  // Additional Dishes
  { id: 'g176', word: "Hors d'oeuvre", translations: { es: 'Entrante',  pt: 'Aperitivo',  fr: "Hors-d'œuvre", de: 'Vorspeise',   it: 'Antipasto', ja: 'オードブル',   zh: '开胃菜', ko: '오르되브르', ar: 'مقبلات'    }, category: 'Dishes', unsplashQuery: "hors d'oeuvre appetizer" },
  { id: 'g177', word: 'Meatball',    translations: { es: 'Albóndiga',   pt: 'Almôndega', fr: 'Boulette',     de: 'Fleischball', it: 'Polpetta',   ja: 'ミートボール', zh: '肉丸',   ko: '미트볼',    ar: 'كرة اللحم' }, category: 'Dishes', unsplashQuery: 'meatball' },
  { id: 'g183', word: 'Vol-au-vent', translations: { es: 'Vol-au-vent', pt: 'Vol-au-vent', fr: 'Vol-au-vent', de: 'Vol-au-vent',  it: 'Vol-au-vent', ja: 'ヴォロヴァン', zh: '法式酥盒', ko: '볼로방',   ar: 'فول أو فون' }, category: 'Dishes', unsplashQuery: 'vol au vent pastry' },
  { id: 'g184', word: 'Demi-tasse',  translations: { es: 'Taza pequeña', pt: 'Xícara pequena', fr: 'Demi-tasse', de: 'Demitasse', it: 'Tazzina',    ja: 'デミタス',     zh: '小咖啡杯', ko: '데미타스', ar: 'فنجان صغير' }, category: 'Dishes', unsplashQuery: 'demitasse espresso cup' },
];
