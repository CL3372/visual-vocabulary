/**
 * Add new languages to all word data files.
 * Uses DeepL for supported languages, Google Translate (unofficial) for others.
 *
 * Usage:
 *   DEEPL_API_KEY=your_key node scripts/add-languages.mjs
 *
 * DeepL free key: https://www.deepl.com/pro-api (500k chars/month free)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../src/data');
const DEEPL_KEY = process.env.DEEPL_API_KEY;

// New languages to add
// DeepL codes: https://developers.deepl.com/docs/resources/supported-languages
// Google codes: standard BCP-47
const NEW_LANGS = [
  { code: 'sv', deepl: 'SV',   google: 'sv', name: 'Swedish' },
  { code: 'el', deepl: 'EL',   google: 'el', name: 'Greek' },
  { code: 'id', deepl: 'ID',   google: 'id', name: 'Indonesian' },
  { code: 'vi', deepl: null,   google: 'vi', name: 'Vietnamese' },  // DeepL doesn't support Vietnamese
  { code: 'th', deepl: null,   google: 'th', name: 'Thai' },        // DeepL doesn't support Thai
];

const DEEPL_URL = 'https://api-free.deepl.com/v2/translate';

async function translateDeepL(texts, targetLang) {
  if (!DEEPL_KEY) throw new Error('No DEEPL_API_KEY');
  const res = await fetch(DEEPL_URL, {
    method: 'POST',
    headers: { 'Authorization': `DeepL-Auth-Key ${DEEPL_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: texts, target_lang: targetLang, source_lang: 'EN' }),
  });
  if (!res.ok) throw new Error(`DeepL ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.translations.map(t => t.text);
}

async function translateGoogle(texts, targetLang) {
  // Uses the unofficial Google Translate API (no key required, rate limited)
  const results = [];
  const BATCH = 10; // smaller batches to avoid rate limits
  for (let i = 0; i < texts.length; i += BATCH) {
    const batch = texts.slice(i, i + BATCH);
    const q = batch.map(t => `q=${encodeURIComponent(t)}`).join('&');
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&${q}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Google Translate ${res.status}`);
    const data = await res.json();
    // Response is nested arrays; first element of each translation
    if (Array.isArray(data[0])) {
      for (const item of data[0]) {
        if (item[0]) results.push(item[0]);
      }
    }
    await sleep(200);
  }
  return results;
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Read all data files
const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.ts'));
const fileData = {};
const wordsToTranslate = new Map(); // word -> Set of lang codes needed

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
console.log(`Found ${uniqueWords.length} unique words needing new language translations\n`);

const translationCache = {};
const BATCH_SIZE = 50;

for (const { code, deepl, google, name } of NEW_LANGS) {
  const wordsForLang = uniqueWords.filter(w => wordsToTranslate.get(w)?.has(code));
  if (wordsForLang.length === 0) { console.log(`✓ ${name}: nothing to add`); continue; }

  console.log(`Translating ${wordsForLang.length} words → ${name} (${code.toUpperCase()})...`);

  const useDeepL = deepl && DEEPL_KEY;
  const translateFn = useDeepL
    ? (texts) => translateDeepL(texts, deepl)
    : (texts) => translateGoogle(texts, google);
  const via = useDeepL ? 'DeepL' : 'Google Translate';

  for (let i = 0; i < wordsForLang.length; i += BATCH_SIZE) {
    const batch = wordsForLang.slice(i, i + BATCH_SIZE);
    process.stdout.write(`  [${via}] Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(wordsForLang.length / BATCH_SIZE)}...`);

    try {
      const results = await translateFn(batch);
      results.forEach((translated, idx) => {
        const word = batch[idx];
        if (!translationCache[word]) translationCache[word] = {};
        translationCache[word][code] = translated;
      });
      console.log(' ✓');
    } catch (e) {
      console.error(` ERROR: ${e.message}`);
    }

    if (i + BATCH_SIZE < wordsForLang.length) await sleep(400);
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
    console.log(`  Updated: ${file}`);
  }
}

console.log(`\n✅ Done! Updated ${filesUpdated} files.`);
console.log(`Words translated: ${Object.keys(translationCache).length}`);
console.log('\nNext steps:');
console.log('  1. Add new languages to src/data/languages.ts');
console.log('  2. Run: npm run build');
console.log('  3. Run: git add -A && git commit && git push');
