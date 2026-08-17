import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

const NOTIF_ID = 1001;
const STORAGE_KEY = 'vv-notif-hour';

export function getNotifHour(): number {
  return parseInt(localStorage.getItem(STORAGE_KEY) ?? '20', 10);
}

export function saveNotifHour(hour: number) {
  localStorage.setItem(STORAGE_KEY, String(hour));
}

export async function requestNotificationPermission(): Promise<boolean> {
  if (Capacitor.isNativePlatform()) {
    const { display } = await LocalNotifications.requestPermissions();
    return display === 'granted';
  }
  if ('Notification' in window) {
    const result = await Notification.requestPermission();
    return result === 'granted';
  }
  return false;
}

export async function hasNotificationPermission(): Promise<boolean> {
  if (Capacitor.isNativePlatform()) {
    const { display } = await LocalNotifications.checkPermissions();
    return display === 'granted';
  }
  if ('Notification' in window) {
    return Notification.permission === 'granted';
  }
  return false;
}

export async function scheduleStreakNotification(hour: number): Promise<void> {
  saveNotifHour(hour);

  if (Capacitor.isNativePlatform()) {
    await LocalNotifications.cancel({ notifications: [{ id: NOTIF_ID }] });

    const now = new Date();
    const scheduled = new Date();
    scheduled.setHours(hour, 0, 0, 0);
    if (scheduled <= now) scheduled.setDate(scheduled.getDate() + 1);

    await LocalNotifications.schedule({
      notifications: [{
        id: NOTIF_ID,
        title: '🔥 Keep your streak alive!',
        body: 'Open LexPix and learn something new today.',
        schedule: {
          at: scheduled,
          repeats: true,
          every: 'day',
        },
        sound: undefined,
        smallIcon: 'ic_stat_icon_config_sample',
        iconColor: '#6366f1',
      }],
    });
  } else if ('Notification' in window && Notification.permission === 'granted') {
    // Web fallback — show immediately as a demo (true scheduling needs a service worker)
    new Notification('🔥 Keep your streak alive!', {
      body: 'Open LexPix and learn something new today.',
    });
  }
}

export async function cancelStreakNotification(): Promise<void> {
  if (Capacitor.isNativePlatform()) {
    await LocalNotifications.cancel({ notifications: [{ id: NOTIF_ID }] });
  }
}
