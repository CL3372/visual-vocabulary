/**
 * The word library (about 2.7 MB) and the hand-checked photo list are loaded in the
 * background after the first screen is shown, instead of being part of the first download.
 * Screens that need words are only shown once loadWordData() has finished; until then the
 * getters return empty values.
 */
import { useEffect, useState } from 'react';
import type { Word } from '../types';
import type { CategoryGroup } from './words';

let allWords: Word[] = [];
let categoryGroups: Record<CategoryGroup, string[]> = { All: [], Cuisines: [], Ingredients: [], General: [], Wine: [] };
let verifiedPhotos: Record<string, string> = {};
let loaded = false;
let pending: Promise<void> | null = null;
const listeners = new Set<() => void>();

export function loadWordData(): Promise<void> {
  if (loaded) return Promise.resolve();
  if (!pending) {
    pending = Promise.all([import('./words'), import('./verifiedPhotos')])
      .then(([w, p]) => {
        allWords = w.ALL_WORDS;
        categoryGroups = w.CATEGORY_GROUPS;
        verifiedPhotos = p.VERIFIED_PHOTOS;
        loaded = true;
        listeners.forEach(l => l());
      })
      .catch(err => {
        pending = null; // allow a retry (for example after the connection comes back)
        throw err;
      });
  }
  return pending;
}

export function subscribeWordData(fn: () => void): () => void {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}

export const wordDataLoaded = () => loaded;
export const getAllWords = () => allWords;
export const getCategoryGroups = () => categoryGroups;
export const getVerifiedPhotos = () => verifiedPhotos;

/** Starts loading on first use and reports when the words are ready. */
export function useWordData(): { ready: boolean; failed: boolean; retry: () => void } {
  const [ready, setReady] = useState(loaded);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    setFailed(false);
    loadWordData().then(
      () => { if (alive) setReady(true); },
      () => { if (alive) setFailed(true); },
    );
    return () => { alive = false; };
  }, []);

  // A failed dynamic import is remembered by the browser for the life of the page, so the
  // reliable retry is a fresh page load.
  return { ready, failed, retry: () => window.location.reload() };
}
