import { useSyncExternalStore } from 'react';
import { subscribeExtra, extraVersion } from '../data/extraTranslations';

/** Re-renders the component whenever another language's extra file finishes loading. */
export function useExtraVersion(): number {
  return useSyncExternalStore(subscribeExtra, extraVersion, extraVersion);
}
