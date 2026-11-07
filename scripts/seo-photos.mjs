/**
 * Photos for the SEO pages. Reads the same hand-verified Wikimedia Commons photos the app
 * uses (src/data/verifiedPhotos.ts) together with their author and licence credits, so every
 * photo on a public page is shown with visible attribution.
 *
 * Only real photos with an open licence that is safe to show are used. Drawn tiles
 * (data: URIs), full-size originals and photos without a matching credit are skipped.
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const unesc = s => s.replace(/\\'/g, "'");

export function loadPhotos(root) {
  const text = readFileSync(join(root, 'src', 'data', 'verifiedPhotos.ts'), 'utf8');
  const photos = new Map(); // lowercased unsplashQuery -> url
  const credits = new Map(); // file name (spaces) -> { author, license }
  for (const line of text.split('\n')) {
    let m = line.match(/^\s*'((?:[^'\\]|\\.)*)':\s*'(https:[^']*)'/);
    if (m) { photos.set(unesc(m[1]).toLowerCase(), m[2]); continue; }
    m = line.match(/^\s*\{ word: '(?:[^'\\]|\\.)*', file: '((?:[^'\\]|\\.)*)', author: '((?:[^'\\]|\\.)*)', license: '((?:[^'\\]|\\.)*)' \}/);
    if (m) credits.set(unesc(m[1]).replace(/_/g, ' '), { author: unesc(m[2]), license: unesc(m[3]) });
  }
  return { photos, credits };
}

export function licenceUrl(label) {
  const l = label.trim();
  if (/^CC0/i.test(l)) return 'https://creativecommons.org/publicdomain/zero/1.0/';
  const m = l.match(/^CC (BY(?:-SA)?) (\d\.\d)(?: ([a-z]{2}))?$/i);
  if (m) return `https://creativecommons.org/licenses/${m[1].toLowerCase()}/${m[2]}/${m[3] ? m[3].toLowerCase() + '/' : ''}`;
  if (/^OGL/i.test(l)) return 'https://www.nationalarchives.gov.uk/doc/open-government-licence/';
  return null;
}

const ALLOWED = /^(CC0|CC BY(-SA)? \d\.\d( [a-z]{2})?|Public domain|OGL)/i;

/** The photo for one word, or null when it has none we can show with proper credit. */
export function photoFor(word, store) {
  const url = store.photos.get((word.unsplashQuery || '').toLowerCase());
  if (!url) return null;
  const m = url.match(/^https:\/\/thumb\.wikimedia\.org\/wikipedia\/commons\/thumb\/[0-9a-f]\/[0-9a-f]{2}\/([^/]+)\/(\d+)px-/);
  if (!m) return null; // full-size originals, other hosts
  if (!/\.(jpe?g|png)$/i.test(m[1])) return null;
  const file = decodeURIComponent(m[1]).replace(/_/g, ' ');
  const credit = store.credits.get(file);
  if (!credit || !ALLOWED.test(credit.license.trim()) || !licenceUrl(credit.license)) return null;
  // 960 px thumbnails exist for every 960 entry, so 500 px is always available; smaller ones stay as they are.
  const src = Number(m[2]) >= 960 ? url.replace(/\/960px-/, '/500px-') : url;
  return {
    word: word.word,
    src,
    file,
    author: credit.author.replace(/\s+at\s+en\.wikipedia$/i, ''),
    license: credit.license,
    licenseUrl: licenceUrl(credit.license),
    pageUrl: 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(file.replace(/ /g, '_')),
  };
}

/** Up to `max` distinct photos spread evenly through the topic's words. */
export function pickGallery(words, store, max = 6) {
  const seen = new Set();
  const all = [];
  for (const w of words) {
    const p = photoFor(w, store);
    if (!p || seen.has(p.src)) continue;
    seen.add(p.src);
    all.push(p);
  }
  if (all.length <= max) return all;
  const out = [];
  for (let i = 0; i < max; i++) out.push(all[Math.floor((i * all.length) / max)]);
  return out;
}
