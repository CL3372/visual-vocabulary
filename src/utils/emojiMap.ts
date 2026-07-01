// Fallback emoji shown when no image loads for a word
export const EMOJI_MAP: Record<string, string> = {
  // Adjectives
  'big': '🐘', 'small': '🐜', 'tall': '🦒', 'short': '📏', 'long': '🛤️',
  'hot': '🔥', 'cold': '🧊', 'fast': '⚡', 'slow': '🐌', 'soft': '☁️',
  'hard': '🪨', 'loud': '📢', 'quiet': '🤫', 'old': '🏺', 'new': '✨',
  'clean': '🧼', 'dirty': '💩', 'heavy': '⚖️', 'light': '🪶', 'full': '🫙',
  'empty': '🫗', 'round': '⚽', 'sharp': '🔪', 'bright': '☀️', 'dark': '🌑',
  'wet': '💧', 'dry': '🏜️', 'sweet': '🍯', 'sour': '🍋', 'beautiful': '🌸',
  'funny': '😂', 'strong': '💪', 'weak': '🌿', 'delicious': '😋', 'colourful': '🌈',
  'fluffy': '🐑', 'shiny': '✨', 'straight': '➡️', 'curly': '〰️', 'careful': '🤲',

  // Numbers
  'one': '1️⃣', 'two': '2️⃣', 'three': '3️⃣', 'four': '4️⃣', 'five': '5️⃣',
  'six': '6️⃣', 'seven': '7️⃣', 'eight': '8️⃣', 'nine': '9️⃣', 'ten': '🔟',
  'eleven': '1️⃣1️⃣', 'twelve': '1️⃣2️⃣', 'thirteen': '1️⃣3️⃣', 'fourteen': '1️⃣4️⃣', 'fifteen': '1️⃣5️⃣',
  'sixteen': '1️⃣6️⃣', 'seventeen': '1️⃣7️⃣', 'eighteen': '1️⃣8️⃣', 'nineteen': '1️⃣9️⃣', 'twenty': '2️⃣0️⃣',

  // Family
  'mother': '👩', 'father': '👨', 'sister': '👧', 'brother': '👦',
  'grandmother': '👵', 'grandfather': '👴', 'baby': '👶', 'child': '🧒',
  'son': '👦', 'daughter': '👧', 'aunt': '👩', 'uncle': '👨',
  'cousin': '🧑', 'family': '👨‍👩‍👧‍👦', 'friend': '🤝', 'twin': '👯', 'parents': '👨‍👩‍👧',

  // Occupations
  'doctor': '🩺', 'nurse': '🧑‍⚕️', 'teacher': '🧑‍🏫', 'chef': '👨‍🍳',
  'firefighter': '👨‍🚒', 'police': '👮', 'farmer': '🧑‍🌾', 'engineer': '🧑‍🔧',
  'artist': '🧑‍🎨', 'pilot': '🧑‍✈️', 'scientist': '🧑‍🔬', 'dentist': '🦷',
  'builder': '👷', 'writer': '✍️', 'musician': '🎵', 'vet': '🐾',
  'astronaut': '🧑‍🚀', 'librarian': '📚', 'baker': '🥐', 'sailor': '⚓',
  'journalist': '📰', 'photographer': '📷', 'gardener': '🌱', 'mechanic': '🔧',
  'athlete': '🏃',

  // Animals
  'cat': '🐱', 'dog': '🐶', 'horse': '🐴', 'cow': '🐄', 'pig': '🐷',
  'sheep': '🐑', 'goat': '🐐', 'chicken': '🐔', 'duck': '🦆', 'rabbit': '🐰',
  'fish': '🐟', 'bird': '🐦', 'elephant': '🐘', 'lion': '🦁', 'tiger': '🐯',
  'bear': '🐻', 'monkey': '🐒', 'snake': '🐍', 'frog': '🐸', 'butterfly': '🦋',
  'whale': '🐋', 'dolphin': '🐬', 'penguin': '🐧', 'spider': '🕷️', 'ant': '🐜',
  'shark': '🦈', 'giraffe': '🦒', 'crocodile': '🐊', 'octopus': '🐙', 'fox': '🦊',
  'owl': '🦉', 'flamingo': '🦩', 'gorilla': '🦍', 'panda': '🐼', 'turtle': '🐢',

  // Weather
  'sunny': '☀️', 'rainy': '🌧️', 'cloudy': '☁️', 'windy': '💨', 'snowy': '❄️',
  'foggy': '🌫️', 'stormy': '⛈️', 'thunder': '⚡', 'rainbow': '🌈',
  'hail': '🌨️', 'frost': '🧊', 'drought': '🏜️', 'hurricane': '🌀',
  'temperature': '🌡️', 'flood': '🌊',

  // Technology
  'phone': '📱', 'computer': '💻', 'tablet': '📱', 'camera': '📷',
  'television': '📺', 'headphones': '🎧', 'keyboard': '⌨️', 'mouse': '🖱️',
  'charger': '🔌', 'robot': '🤖', 'rocket': '🚀', 'satellite': '🛰️',
  'drone': '🛸', 'printer': '🖨️', 'speaker': '🔊', 'battery': '🔋',
  'screen': '🖥️', 'app': '📲', 'internet': '🌐', 'microphone': '🎤',

  // School
  'pencil': '✏️', 'pen': '🖊️', 'eraser': '🧹', 'ruler': '📏',
  'scissors': '✂️', 'glue': '🔗', 'notebook': '📓', 'textbook': '📘',
  'backpack': '🎒', 'calculator': '🔢', 'compass': '🧭', 'highlighter': '🖍️',
  'blackboard': '📋', 'globe': '🌍', 'map': '🗺️', 'diploma': '🎓',
  'homework': '📝', 'exam': '📝', 'student': '🧑‍🎓',

  // Seasons & Time
  'spring': '🌸', 'summer': '☀️', 'autumn': '🍂', 'winter': '❄️',
  'january': '❄️', 'february': '❤️', 'march': '🌼', 'april': '🌦️',
  'may': '🌸', 'june': '☀️', 'july': '🏖️', 'august': '🌾',
  'september': '🍇', 'october': '🎃', 'november': '🍂', 'december': '🎄',

  // Holidays
  'christmas': '🎄', 'easter': '🐣', 'diwali': '🪔', 'holi': '🎨',
  'hanukkah': '🕎', 'ramadan': '🌙', 'eid al-fitr': '🌙', 'eid al-adha': '🌙',
  'halloween': '🎃', 'new year': '🎆', 'vesak': '🏮', 'nowruz': '🌺',
  'vaisakhi': '🌾', 'passover': '✡️', 'rosh hashanah': '🍎',

  // Body
  'heart': '❤️', 'eye': '👁️', 'ear': '👂', 'nose': '👃', 'mouth': '👄',
  'hand': '✋', 'foot': '🦶', 'brain': '🧠', 'tooth': '🦷', 'bone': '🦴',

  // Food
  'apple': '🍎', 'banana': '🍌', 'orange': '🍊', 'grapes': '🍇',
  'strawberry': '🍓', 'pizza': '🍕', 'burger': '🍔', 'bread': '🍞',
  'egg': '🥚', 'milk': '🥛', 'coffee': '☕', 'tea': '🍵', 'water': '💧',
};

export function getEmoji(word: string): string {
  return EMOJI_MAP[word.toLowerCase()] ?? '📷';
}
