import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../src/data');
const DEEPL_KEY = 'f13c48e0-b909-4360-8647-737d91486180:fx';
const DEEPL_URL = 'https://api-free.deepl.com/v2/translate';

const NEW_LANGS = [
  { code: 'pl', deepl: 'PL' },
  { code: 'cs', deepl: 'CS' },
  { code: 'ro', deepl: 'RO' },
];

async function translate(texts, targetLang) {
  const res = await fetch(DEEPL_URL, {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${DEEPL_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: texts, target_lang: targetLang, source_lang: 'EN' }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DeepL error ${res.status}: ${err}`);
  }
  const data = await res.json();
  return data.translations.map(t => t.text);
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.ts'));

const fileData = {};
const wordsToTranslate = new Map();

for (const file of files) {
  const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf8');
  fileData[file] = content;

  const regex = /\{ id: '[^']+', word: '([^']+)', translations: \{([^}]+)\}/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const word = match[1];
    const transBlock = match[2];
    for (const { code } of NEW_LANGS) {
      if (!transBlock.includes(`${code}:`)) {
        if (!wordsToTranslate.has(word)) wordsToTranslate.set(word, new Set());
        wordsToTranslate.get(word).add(code);
      }
    }
  }
}

const uniqueWords = [...wordsToTranslate.keys()];
console.log(`Found ${uniqueWords.length} unique words needing translation`);

const translationCache = {};

for (const { code, deepl } of NEW_LANGS) {
  const wordsForLang = uniqueWords.filter(w => wordsToTranslate.get(w).has(code));
  console.log(`\nTranslating ${wordsForLang.length} words to ${code.toUpperCase()}...`);

  const BATCH = 50;
  for (let i = 0; i < wordsForLang.length; i += BATCH) {
    const batch = wordsForLang.slice(i, i + BATCH);
    process.stdout.write(`  Batch ${Math.floor(i/BATCH)+1}/${Math.ceil(wordsForLang.length/BATCH)}...`);

    try {
      const results = await translate(batch, deepl);
      results.forEach((translated, idx) => {
        const word = batch[idx];
        if (!translationCache[word]) translationCache[word] = {};
        translationCache[word][code] = translated;
      });
      console.log(' done');
    } catch (e) {
      console.error(` ERROR: ${e.message}`);
    }

    if (i + BATCH < wordsForLang.length) await sleep(300);
  }
}

console.log('\nWriting translations back to files...');

let filesUpdated = 0;
for (const file of files) {
  let content = fileData[file];
  let changed = false;

  content = content.replace(
    /(\{ id: '[^']+', word: '([^']+)', translations: \{)([^}]+)(\})/g,
    (fullMatch, prefix, word, transBlock, suffix) => {
      const additions = [];
      for (const { code } of NEW_LANGS) {
        if (!transBlock.includes(`${code}:`) && translationCache[word]?.[code]) {
          additions.push(` ${code}: '${translationCache[word][code].replace(/'/g, "\\'")}'`);
        }
      }
      if (additions.length === 0) return fullMatch;
      changed = true;
      return `${prefix}${transBlock},${additions.join(',')}${suffix}`;
    }
  );

  if (changed) {
    fs.writeFileSync(path.join(DATA_DIR, file), content, 'utf8');
    filesUpdated++;
  }
}

console.log(`\n✅ Done! Updated ${filesUpdated} files.`);
console.log(`Words translated: ${Object.keys(translationCache).length}`);
