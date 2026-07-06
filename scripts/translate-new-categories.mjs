import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../src/data');
const DEEPL_KEY = process.env.DEEPL_API_KEY;
if (!DEEPL_KEY) { console.error('Missing DEEPL_API_KEY env var'); process.exit(1); }
const DEEPL_URL = 'https://api-free.deepl.com/v2/translate';

// Only translate the new emigrant survival files
const TARGET_FILES = ['travel_essentials.ts'];

const ALL_LANGS = [
  { code: 'es', deepl: 'ES' },
  { code: 'pt', deepl: 'PT-PT' },
  { code: 'fr', deepl: 'FR' },
  { code: 'de', deepl: 'DE' },
  { code: 'it', deepl: 'IT' },
  { code: 'hi', deepl: 'HI' },
  { code: 'ru', deepl: 'RU' },
  { code: 'tr', deepl: 'TR' },
  { code: 'ja', deepl: 'JA' },
  { code: 'zh', deepl: 'ZH' },
  { code: 'ko', deepl: 'KO' },
  { code: 'ar', deepl: 'AR' },
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

const fileData = {};
const wordsToTranslate = new Map();

for (const file of TARGET_FILES) {
  const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf8');
  fileData[file] = content;

  const regex = /\{ id: '[^']+',\s+word: '([^']+)',\s+translations: \{([^}]*)\}/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const word = match[1];
    const transBlock = match[2];
    for (const { code } of ALL_LANGS) {
      if (!transBlock.includes(`${code}:`)) {
        if (!wordsToTranslate.has(word)) wordsToTranslate.set(word, new Set());
        wordsToTranslate.get(word).add(code);
      }
    }
  }
}

const uniqueWords = [...wordsToTranslate.keys()];
console.log(`Found ${uniqueWords.length} unique words to translate`);

const translationCache = {};

for (const { code, deepl } of ALL_LANGS) {
  const wordsForLang = uniqueWords.filter(w => wordsToTranslate.get(w).has(code));
  if (wordsForLang.length === 0) continue;
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

for (const file of TARGET_FILES) {
  let content = fileData[file];
  let changed = false;

  content = content.replace(
    /(\{ id: '[^']+',\s+word: '([^']+)',\s+translations: \{)([^}]*)(\})/g,
    (fullMatch, prefix, word, transBlock, suffix) => {
      const additions = [];
      for (const { code } of ALL_LANGS) {
        if (!transBlock.includes(`${code}:`) && translationCache[word]?.[code]) {
          additions.push(` ${code}: '${translationCache[word][code].replace(/'/g, "\\'")}'`);
        }
      }
      if (additions.length === 0) return fullMatch;
      changed = true;
      const separator = transBlock.trim() ? ',' : '';
      return `${prefix}${transBlock}${separator}${additions.join(',')}${suffix}`;
    }
  );

  if (changed) {
    fs.writeFileSync(path.join(DATA_DIR, file), content, 'utf8');
    console.log(`  ✅ ${file}`);
  }
}

console.log(`\n✅ Done! Words translated: ${Object.keys(translationCache).length}`);
