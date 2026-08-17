import { useState, useEffect } from 'react';
import { Bell, BellOff, Check } from 'lucide-react';
import {
  requestNotificationPermission,
  hasNotificationPermission,
  scheduleStreakNotification,
  cancelStreakNotification,
  getNotifHour,
} from '../utils/notifications';

export function NotificationSettings() {
  const [enabled, setEnabled] = useState(false);
  const [hour, setHour] = useState(getNotifHour());
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    hasNotificationPermission().then(granted => {
      setEnabled(granted);
      setLoading(false);
    });
  }, []);

  async function toggle() {
    if (enabled) {
      await cancelStreakNotification();
      setEnabled(false);
    } else {
      const granted = await requestNotificationPermission();
      if (granted) {
        await scheduleStreakNotification(hour);
        setEnabled(true);
      }
    }
  }

  async function save() {
    if (!enabled) return;
    await scheduleStreakNotification(hour);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function formatHour(h: number) {
    const ampm = h >= 12 ? 'PM' : 'AM';
    const display = h % 12 === 0 ? 12 : h % 12;
    return `${display}:00 ${ampm}`;
  }

  if (loading) return null;

  return (
    <div className="rounded-2xl p-4 flex flex-col gap-4"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {enabled
            ? <Bell className="w-5 h-5" style={{ color: 'var(--accent)' }} />
            : <BellOff className="w-5 h-5" style={{ color: 'var(--text3)' }} />}
          <div>
            <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Streak reminders</p>
            <p className="text-xs" style={{ color: 'var(--text2)' }}>Daily nudge to keep your streak alive</p>
          </div>
        </div>
        <button
          onClick={toggle}
          className="relative w-12 h-6 rounded-full transition-colors duration-200"
          style={{ background: enabled ? 'var(--accent)' : 'var(--surface2)' }}>
          <span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200"
            style={{ transform: enabled ? 'translateX(24px)' : 'translateX(0)' }} />
        </button>
      </div>

      {enabled && (
        <div className="flex items-center gap-3">
          <p className="text-sm flex-1" style={{ color: 'var(--text2)' }}>Remind me at</p>
          <select
            value={hour}
            onChange={e => setHour(Number(e.target.value))}
            className="px-3 py-1.5 rounded-xl text-sm font-medium"
            style={{ background: 'var(--surface2)', color: 'var(--text)', border: '1px solid var(--border)' }}>
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={i}>{formatHour(i)}</option>
            ))}
          </select>
          <button onClick={save}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: saved ? 'var(--green)' : 'var(--accent)' }}>
            {saved ? <><Check className="w-3.5 h-3.5" /> Saved</> : 'Save'}
          </button>
        </div>
      )}
    </div>
  );
}
