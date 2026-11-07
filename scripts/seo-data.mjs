/**
 * Loads the real vocabulary data (src/data/*.ts and the per-language overlays in
 * src/data/extra/*.ts) for the SEO page generator, without compiling TypeScript.
 *
 * The data files keep one word per line, e.g.
 *   { id: 'a1', word: 'Lion', translations: { es: 'León', ... }, category: 'Animals', ... },
 * so each line is evaluated as a plain object literal. Overlay files export
 * `{ [category]: { [English word]: translation } }` and win over inline translations,
 * exactly like src/utils/getTranslation.ts.
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

export function loadWords(root) {
  const dataDir = join(root, 'src', 'data');
  const words = [];
  for (const file of readdirSync(dataDir).sort()) {
    if (!file.endsWith('.ts')) continue;
    const lines = readFileSync(join(dataDir, file), 'utf8').split('\n');
    for (const line of lines) {
      if (!/^\s*\{ id:/.test(line) || !line.includes('translations')) continue;
      let obj;
      try {
        obj = new Function(`return (${line.trim().replace(/,\s*$/, '')})`)();
      } catch {
        continue; // not a plain one-line entry
      }
      if (!obj || typeof obj.word !== 'string' || !obj.category || !obj.translations) continue;
      words.push({
        id: obj.id,
        word: obj.word,
        category: obj.category,
        translations: obj.translations,
        sentence: typeof obj.sentence === 'string' ? obj.sentence : '',
        unsplashQuery: typeof obj.unsplashQuery === 'string' ? obj.unsplashQuery : '',
        file,
      });
    }
  }
  return words;
}

export function loadOverlays(root) {
  const dir = join(root, 'src', 'data', 'extra');
  const overlays = {};
  if (!existsSync(dir)) return overlays;
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.ts')) continue;
    const key = file.replace(/\.ts$/, '');
    let text = readFileSync(join(dir, file), 'utf8');
    const start = text.indexOf('= {');
    if (start < 0) continue;
    text = text.slice(start + 2).replace(/;\s*$/, '');
    try {
      overlays[key] = new Function(`return (${text})`)();
    } catch {
      /* skip an overlay we cannot read */
    }
  }
  return overlays;
}

/** The translation shown in the app: overlay first, then the inline value. */
export function translationOf(word, key, overlays) {
  return (overlays[key]?.[word.category]?.[word.word]) || word.translations[key] || '';
}
