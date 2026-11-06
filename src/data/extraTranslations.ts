/**
 * Extra translations that fill gaps in the per-category word files.
 * Shape of each file: category -> English word -> translation. (Word ids are not unique,
 * so category + word is the key.) An entry wins over the value in the word file, so it can
 * also replace English placeholders.
 *
 * Each language lives in its own file and is only downloaded when the app needs it
 * (the learner picks that language). Call loadExtra(key) and wait for it before showing words.
 */
type Overlay = Record<string, Record<string, string>>;

const LOADERS: Record<string, () => Promise<Overlay>> = {
  nl: () => import('./extra/nl').then(m => m.NL),
  hi: () => import('./extra/hi').then(m => m.HI),
  ru: () => import('./extra/ru').then(m => m.RU),
  tr: () => import('./extra/tr').then(m => m.TR),
  pl: () => import('./extra/pl').then(m => m.PL),
  cs: () => import('./extra/cs').then(m => m.CS),
  ro: () => import('./extra/ro').then(m => m.RO),
  sv: () => import('./extra/sv').then(m => m.SV),
  el: () => import('./extra/el').then(m => m.EL),
  id: () => import('./extra/id').then(m => m.ID),
  nb: () => import('./extra/nb').then(m => m.NB),
  da: () => import('./extra/da').then(m => m.DA),
  fi: () => import('./extra/fi').then(m => m.FI),
  fil: () => import('./extra/fil').then(m => m.FIL),
  uk: () => import('./extra/uk').then(m => m.UK),
  he: () => import('./extra/he').then(m => m.HE),
  ms: () => import('./extra/ms').then(m => m.MS),
  bn: () => import('./extra/bn').then(m => m.BN),
  ta: () => import('./extra/ta').then(m => m.TA),
  hu: () => import('./extra/hu').then(m => m.HU),
  sk: () => import('./extra/sk').then(m => m.SK),
  bg: () => import('./extra/bg').then(m => m.BG),
  hr: () => import('./extra/hr').then(m => m.HR),
};

/**
 * How many of the library's words each language has once its file is loaded, so the language
 * picker can show the right coverage without downloading every file. Update when a file changes.
 */
export const EXTRA_WORD_COUNT: Record<string, number> = {
  nl: 3217,
  hi: 3217,
  ru: 3217,
  tr: 3217,
  pl: 3217,
  cs: 3217,
  ro: 3217,
  sv: 3217,
  el: 3217,
  id: 3217,
  nb: 3217,
  da: 3217,
  fi: 3217,
  fil: 3217,
  uk: 3217,
  he: 3217,
  ms: 3217,
  bn: 3217,
  ta: 3217,
  hu: 3217,
  sk: 3217,
  bg: 3217,
  hr: 3217,
};

const loaded = new Map<string, Overlay>();
const pending = new Map<string, Promise<void>>();
const listeners = new Set<() => void>();
let version = 0;

export function hasExtraFile(key: string): boolean {
  return key in LOADERS;
}

export function getExtra(key: string): Overlay | undefined {
  return loaded.get(key);
}

/** Downloads a language's extra file (once). Never rejects: on failure the base data is used. */
export function loadExtra(key: string): Promise<void> {
  const load = LOADERS[key];
  if (!load || loaded.has(key)) return Promise.resolve();
  let p = pending.get(key);
  if (!p) {
    p = load()
      .then(data => {
        loaded.set(key, data);
        version++;
        listeners.forEach(fn => fn());
      })
      .catch(() => { /* offline or blocked: keep using the base data, retry next time */ })
      .finally(() => { pending.delete(key); });
    pending.set(key, p);
  }
  return p;
}

/** Downloads every extra file (used by the "see in all languages" view). */
export function loadAllExtra(): Promise<void> {
  return Promise.all(Object.keys(LOADERS).map(loadExtra)).then(() => undefined);
}

export function subscribeExtra(fn: () => void): () => void {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}

export function extraVersion(): number {
  return version;
}
