import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../src/data');

// Words that need manual correction (proper translations, not brand names)
const FIXES = {
  'Apple':      { ru: 'Яблоко', tr: 'Elma' },
  'Mango':      { tr: 'Mango' },      // "Mango" is correct in Turkish
  'Papaya':     { tr: 'Papaya' },     // "Papaya" is correct in Turkish
  'Mozzarella': { tr: 'Mozarella' },
  'Bagel':      { tr: 'Simit' },
  'Smoothie':   { tr: 'Smoothie' },   // borrowed word, same in Turkish
  'Espresso':   { tr: 'Espresso' },   // same in Turkish
  'Tiramisu':   { tr: 'Tiramisu' },   // same in Turkish
  'Cheesecake': { tr: 'Cheesecake' }, // same in Turkish
  'Chili':      { tr: 'Biber' },
  'Pesto':      { tr: 'Pesto' },      // same in Turkish
  'Pizza':      { tr: 'Pizza' },      // same in Turkish
  'Burger':     { tr: 'Hamburger' },
  'Paella':     { tr: 'Paella' },     // same in Turkish
  'Risotto':    { tr: 'Risotto' },    // same in Turkish
  'Ramen':      { tr: 'Ramen' },      // same in Turkish
  'Zebra':      { ru: 'Зебра', tr: 'Zebra' },
  'Yoga':       { ru: 'Йога', tr: 'Yoga' },
};

const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.ts'));
let fixed = 0;

for (const file of files) {
  let content = fs.readFileSync(path.join(DATA_DIR, file), 'utf8');
  let changed = false;

  for (const [word, corrections] of Object.entries(FIXES)) {
    for (const [lang, correctVal] of Object.entries(corrections)) {
      // Replace instances where lang value equals the English word
      const pattern = new RegExp(`(word: '${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}', translations: \\{[^}]*${lang}: ')${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(')`,'g');
      const newContent = content.replace(pattern, `$1${correctVal}$2`);
      if (newContent !== content) {
        content = newContent;
        changed = true;
        fixed++;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(path.join(DATA_DIR, file), content, 'utf8');
  }
}

console.log(`✅ Fixed ${fixed} manual corrections`);
