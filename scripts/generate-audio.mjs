/**
 * generate-audio.mjs
 *
 * Generates WaveNet TTS audio for all words × languages and uploads to GCS.
 *
 * Usage:
 *   GOOGLE_TTS_API_KEY=<key> GCS_KEY_FILE=<path-to-json> node scripts/generate-audio.mjs
 *
 * Or set them in .env and run:
 *   node scripts/generate-audio.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// ─── Config ──────────────────────────────────────────────────────────────────

// Load .env manually (no dotenv dependency needed)
const envFile = path.join(ROOT, '.env');
const env = Object.fromEntries(
  fs.readFileSync(envFile, 'utf8')
    .split('\n')
    .filter(l => l.includes('=') && !l.startsWith('#'))
    .map(l => l.split('=').map(s => s.trim()))
    .map(([k, ...v]) => [k, v.join('=')])
);

const API_KEY = env.GOOGLE_TTS_API_KEY || process.env.GOOGLE_TTS_API_KEY;
const GCS_KEY_FILE = env.GCS_KEY_FILE || process.env.GCS_KEY_FILE;
const BUCKET = 'vv-audio';
const OUT_DIR = path.join(ROOT, '.audio-cache');
const PROGRESS_FILE = path.join(ROOT, '.audio-progress.json');

if (!API_KEY) { console.error('Missing GOOGLE_TTS_API_KEY'); process.exit(1); }
if (!GCS_KEY_FILE || !fs.existsSync(GCS_KEY_FILE)) {
  console.error('Missing or invalid GCS_KEY_FILE path');
  process.exit(1);
}

// ─── Language → WaveNet voice map ────────────────────────────────────────────

const VOICES = {
  en:    { languageCode: 'en-US',  name: 'en-US-Wavenet-F'   },
  es:    { languageCode: 'es-ES',  name: 'es-ES-Wavenet-C'   },
  pt:    { languageCode: 'pt-PT',  name: 'pt-PT-Wavenet-A'   },
  'pt-br': { languageCode: 'pt-BR', name: 'pt-BR-Wavenet-A'  },
  fr:    { languageCode: 'fr-FR',  name: 'fr-FR-Wavenet-C'   },
  de:    { languageCode: 'de-DE',  name: 'de-DE-Wavenet-C'   },
  it:    { languageCode: 'it-IT',  name: 'it-IT-Wavenet-A'   },
  hi:    { languageCode: 'hi-IN',  name: 'hi-IN-Wavenet-A'   },
  ru:    { languageCode: 'ru-RU',  name: 'ru-RU-Wavenet-A'   },
  tr:    { languageCode: 'tr-TR',  name: 'tr-TR-Wavenet-A'   },
  ja:    { languageCode: 'ja-JP',  name: 'ja-JP-Wavenet-A'   },
  zh:    { languageCode: 'cmn-CN', name: 'cmn-CN-Wavenet-A'  },
  ko:    { languageCode: 'ko-KR',  name: 'ko-KR-Wavenet-A'   },
  ar:    { languageCode: 'ar-XA',  name: 'ar-XA-Wavenet-A'   },
  pl:    { languageCode: 'pl-PL',  name: 'pl-PL-Wavenet-A'   },
  cs:    { languageCode: 'cs-CZ',  name: 'cs-CZ-Wavenet-A'   },
  ro:    { languageCode: 'ro-RO',  name: 'ro-RO-Wavenet-A'   },
  nl:    { languageCode: 'nl-NL',  name: 'nl-NL-Wavenet-A'   },
  sv:    { languageCode: 'sv-SE',  name: 'sv-SE-Wavenet-A'   },
  el:    { languageCode: 'el-GR',  name: 'el-GR-Wavenet-A'   },
  id:    { languageCode: 'id-ID',  name: 'id-ID-Wavenet-A'   },
  vi:    { languageCode: 'vi-VN',  name: 'vi-VN-Wavenet-A'   },
  th:    { languageCode: 'th-TH',  name: 'th-TH-Standard-A'  },
};

const LANGS = Object.keys(VOICES);

// ─── Load all words ───────────────────────────────────────────────────────────

// We build a list of {id, text, lang} tuples to generate
// by dynamically importing each data file

async function loadAllWords() {
  const wordsTs = fs.readFileSync(path.join(ROOT, 'src/data/words.ts'), 'utf8');
  const importLines = wordsTs.match(/from '\.\/(\w+)'/g) || [];
  const files = importLines.map(l => l.match(/from '\.\/(\w+)'/)[1]);

  const allWords = [];

  for (const file of files) {
    const tsPath = path.join(ROOT, 'src/data', `${file}.ts`);
    if (!fs.existsSync(tsPath)) continue;
    const content = fs.readFileSync(tsPath, 'utf8');

    // Extract word entries using regex
    const wordRegex = /\{\s*id:\s*'([^']+)'[^}]+word:\s*'((?:[^'\\]|\\.)*)'[^}]+translations:\s*\{([^}]+)\}/gs;
    let match;
    while ((match = wordRegex.exec(content)) !== null) {
      const id = match[1];
      const englishWord = match[2].replace(/\\'/g, "'");
      const translationsBlock = match[3];

      const word = { id, en: englishWord, translations: {} };

      // Parse each translation — keys can be quoted ('pt-br') or unquoted (es)
      for (const lang of LANGS.filter(l => l !== 'en')) {
        const key = lang === 'pt-br' ? 'pt-br' : lang;
        const re = new RegExp(`(?:['"]${key}['"]|\\b${key}\\b)\\s*:\\s*'((?:[^'\\\\]|\\\\.)*)'`);
        const tm = translationsBlock.match(re);
        if (tm) {
          word.translations[lang] = tm[1].replace(/\\'/g, "'");
        }
      }

      allWords.push(word);
    }
  }

  return allWords;
}

// ─── TTS API call ─────────────────────────────────────────────────────────────

function synthesize(text, voiceConfig) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      input: { text },
      voice: { languageCode: voiceConfig.languageCode, name: voiceConfig.name },
      audioConfig: { audioEncoding: 'MP3', speakingRate: 0.9 },
    });

    const options = {
      hostname: 'texttospeech.googleapis.com',
      path: `/v1/text:synthesize?key=${API_KEY}`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
    };

    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.audioContent) resolve(Buffer.from(json.audioContent, 'base64'));
          else reject(new Error(`TTS error: ${JSON.stringify(json)}`));
        } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ─── GCS upload ──────────────────────────────────────────────────────────────

let _accessToken = null;
let _tokenExpiry = 0;

async function getAccessToken() {
  if (_accessToken && Date.now() < _tokenExpiry) return _accessToken;

  const keyData = JSON.parse(fs.readFileSync(GCS_KEY_FILE, 'utf8'));
  const { createSign } = await import('crypto');

  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const claim = Buffer.from(JSON.stringify({
    iss: keyData.client_email,
    scope: 'https://www.googleapis.com/auth/devstorage.read_write',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  })).toString('base64url');

  const sign = createSign('RSA-SHA256');
  sign.update(`${header}.${claim}`);
  const sig = sign.sign(keyData.private_key, 'base64url');
  const jwt = `${header}.${claim}.${sig}`;

  const token = await new Promise((resolve, reject) => {
    const body = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`;
    const req = https.request({
      hostname: 'oauth2.googleapis.com', path: '/token', method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(body) },
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { const j = JSON.parse(d); resolve(j.access_token); }
        catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });

  _accessToken = token;
  _tokenExpiry = Date.now() + 3500 * 1000;
  return token;
}

function uploadToGCS(audioBuffer, gcsPath) {
  return new Promise(async (resolve, reject) => {
    const token = await getAccessToken();
    const encodedPath = encodeURIComponent(gcsPath);
    const options = {
      hostname: 'storage.googleapis.com',
      path: `/upload/storage/v1/b/${BUCKET}/o?uploadType=media&name=${encodedPath}`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.length,
      },
    };
    const req = https.request(options, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        if (res.statusCode === 200) resolve();
        else reject(new Error(`GCS upload failed ${res.statusCode}: ${d}`));
      });
    });
    req.on('error', reject);
    req.write(audioBuffer);
    req.end();
  });
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Load progress (for resumability)
  let done = new Set();
  if (fs.existsSync(PROGRESS_FILE)) {
    done = new Set(JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8')));
  }

  console.log('Loading words...');
  const words = await loadAllWords();
  console.log(`Found ${words.length} words across all categories`);

  // Build task list: [wordId, lang, text]
  const tasks = [];
  for (const word of words) {
    // English
    tasks.push([word.id, 'en', word.en]);
    // All other languages
    for (const lang of LANGS.filter(l => l !== 'en')) {
      const text = word.translations[lang];
      if (text) tasks.push([word.id, lang, text]);
    }
  }

  const total = tasks.length;
  const remaining = tasks.filter(([id, lang]) => !done.has(`${lang}/${id}`));
  console.log(`Total: ${total} | Already done: ${done.size} | Remaining: ${remaining.length}`);

  let completed = 0;
  let errors = 0;
  const CONCURRENCY = 5;

  async function processTask([wordId, lang, text]) {
    const key = `${lang}/${wordId}`;
    if (done.has(key)) return;

    try {
      const voice = VOICES[lang];
      if (!voice) return;

      const audio = await synthesize(text, voice);
      await uploadToGCS(audio, `${lang}/${wordId}.mp3`);

      done.add(key);
      completed++;

      if (completed % 50 === 0) {
        fs.writeFileSync(PROGRESS_FILE, JSON.stringify([...done]));
        const pct = Math.round((done.size / total) * 100);
        console.log(`Progress: ${done.size}/${total} (${pct}%) — errors: ${errors}`);
      }
    } catch (err) {
      errors++;
      console.error(`  ✗ ${lang}/${wordId}: ${err.message}`);
    }
  }

  // Process with concurrency limit
  for (let i = 0; i < remaining.length; i += CONCURRENCY) {
    const batch = remaining.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(processTask));
    // Small delay to avoid rate limits
    await new Promise(r => setTimeout(r, 100));
  }

  // Final save
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify([...done]));
  console.log(`\n✅ Done! ${completed} new files generated. ${errors} errors.`);
  console.log(`Audio URL pattern: https://storage.googleapis.com/${BUCKET}/{lang}/{wordId}.mp3`);
}

main().catch(err => { console.error(err); process.exit(1); });
