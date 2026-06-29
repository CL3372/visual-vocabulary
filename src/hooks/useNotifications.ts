import { useCallback, useEffect, useState } from 'react';

type Permission = 'default' | 'granted' | 'denied';

async function getSW(): Promise<ServiceWorkerRegistration | null> {
  if (!('serviceWorker' in navigator)) return null;
  try { return await navigator.serviceWorker.ready; }
  catch { return null; }
}

export function useNotifications() {
  const [permission, setPermission] = useState<Permission>(
    'Notification' in window ? Notification.permission : 'denied'
  );

  useEffect(() => {
    if (!('Notification' in window)) return;
    setPermission(Notification.permission);
  }, []);

  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (!('Notification' in window)) return false;
    const result = await Notification.requestPermission();
    setPermission(result);
    return result === 'granted';
  }, []);

  // Schedule a local reminder via the service worker.
  // delayMs: how far in the future to fire (default 20 hours).
  const scheduleReminder = useCallback(async (opts?: {
    delayMs?: number;
    title?: string;
    body?: string;
  }) => {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    const sw = await getSW();
    if (!sw?.active) return;
    sw.active.postMessage({
      type: 'SCHEDULE_REMINDER',
      delayMs: opts?.delayMs ?? 72_000_000, // 20 hours
      title: opts?.title ?? '🍽️ Time to practise!',
      body:  opts?.body  ?? "You haven't reviewed today — keep your streak alive!",
    });
  }, []);

  return { permission, requestPermission, scheduleReminder };
}
