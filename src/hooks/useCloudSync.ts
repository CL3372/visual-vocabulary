import { useCallback, useEffect, useRef } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import type { SRSCard } from '../types';

export interface SyncPayload {
  streak: number;
  bestStreak: number;
  lastPlayDate: string;
  targetLang: string;
  dailyGoal: number;
  isPro: boolean;
  seenWords: Set<string>;
  favorites: Set<string>;
  xp: number;
  displayName: string;
}

export interface SyncSetters {
  setStreak: (v: number) => void;
  setBestStreak: (v: number) => void;
  setLastPlayDate: (v: string) => void;
  setTargetLang: (v: string) => void;
  setSeenWords: (v: Set<string>) => void;
  setFavorites: (v: Set<string>) => void;
  setSrsData: (v: Record<string, SRSCard>) => void;
  activatePro: (token: string) => void;
  setXp: (v: number) => void;
}

export function useCloudSync(user: User | null, payload: SyncPayload, setters: SyncSetters) {
  const lastPushed = useRef('');

  const pullFromCloud = useCallback(async () => {
    if (!user) return;

    const { data: row } = await supabase
      .from('user_sync')
      .select('*')
      .eq('id', user.id)
      .single();

    if (row) {
      setters.setStreak(row.streak ?? 0);
      setters.setBestStreak(row.best_streak ?? 0);
      setters.setLastPlayDate(row.last_play_date ?? '');
      setters.setTargetLang(row.target_lang ?? 'es');
      setters.setSeenWords(new Set(row.seen_words ?? []));
      setters.setFavorites(new Set(row.favorites ?? []));
      if (row.is_pro) setters.activatePro(row.pro_token ?? 'cloud');
      if (row.xp) setters.setXp(row.xp);
    }

    const { data: cards } = await supabase
      .from('srs_cards')
      .select('*')
      .eq('user_id', user.id);

    if (cards && cards.length > 0) {
      const srs: Record<string, SRSCard> = {};
      for (const c of cards) {
        srs[c.word_id] = {
          ef: c.ease,
          interval: c.interval,
          reps: c.repetitions,
          due: new Date(c.next_review).getTime(),
        };
      }
      setters.setSrsData(srs);
    }
  }, [user?.id]);

  const pushToCloud = useCallback(async () => {
    if (!user) return;
    const fingerprint = `${payload.streak}|${payload.lastPlayDate}|${payload.favorites.size}|${payload.seenWords.size}|${payload.isPro}|${payload.xp}|${payload.displayName}`;
    if (fingerprint === lastPushed.current) return;
    lastPushed.current = fingerprint;

    await supabase.from('user_sync').upsert({
      id: user.id,
      streak: payload.streak,
      best_streak: payload.bestStreak,
      last_play_date: payload.lastPlayDate,
      target_lang: payload.targetLang,
      daily_goal: payload.dailyGoal,
      is_pro: payload.isPro,
      seen_words: Array.from(payload.seenWords),
      favorites: Array.from(payload.favorites),
      xp: payload.xp,
      display_name: payload.displayName || null,
      updated_at: new Date().toISOString(),
    });
  }, [user?.id, payload]);

  const pushSrsCard = useCallback(async (wordId: string, card: SRSCard) => {
    if (!user) return;
    await supabase.from('srs_cards').upsert({
      user_id: user.id,
      word_id: wordId,
      ease: card.ef,
      interval: card.interval,
      repetitions: card.reps,
      next_review: new Date(card.due).toISOString(),
      updated_at: new Date().toISOString(),
    });
  }, [user?.id]);

  useEffect(() => {
    if (user) pullFromCloud();
  }, [user?.id]);

  useEffect(() => {
    if (!user) return;
    const t = setTimeout(pushToCloud, 3000);
    return () => clearTimeout(t);
  }, [payload.streak, payload.favorites.size, payload.seenWords.size, payload.isPro, payload.xp, payload.displayName, user?.id]);

  return { pullFromCloud, pushToCloud, pushSrsCard };
}
