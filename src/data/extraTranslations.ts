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
