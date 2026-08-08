import { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

export function OfflineBanner() {
  const [offline, setOffline] = useState(!navigator.onLine);
  const [visible, setVisible] = useState(!navigator.onLine);

  useEffect(() => {
    const goOffline = () => { setOffline(true); setVisible(true); };
    const goOnline = () => {
      setOffline(false);
      // Keep banner visible briefly to show "back online"
      setTimeout(() => setVisible(false), 2500);
    };
    window.addEventListener('offline', goOffline);
    window.addEventListener('online', goOnline);
    return () => { window.removeEventListener('offline', goOffline); window.removeEventListener('online', goOnline); };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
        background: offline ? '#1f2937' : '#16a34a',
        color: '#fff',
        padding: '8px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontSize: 13, fontWeight: 600,
        transition: 'background 0.4s ease',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
      }}
    >
      {offline ? (
        <>
          <WifiOff className="w-4 h-4 flex-shrink-0" />
          You're offline — words you've already browsed still work!
        </>
      ) : (
        <>
          <span>✓</span> Back online
        </>
      )}
    </div>
  );
}
