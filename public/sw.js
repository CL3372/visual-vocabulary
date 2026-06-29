const CACHE = 'visual-vocab-v2';
const STATIC = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const { request } = e;
  if (request.method !== 'GET') return;

  if (request.url.includes('unsplash') || request.url.includes('wikipedia')) {
    e.respondWith(
      caches.open(CACHE).then(async cache => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const res = await fetch(request);
          if (res.ok) cache.put(request, res.clone());
          return res;
        } catch { return cached || new Response('', { status: 503 }); }
      })
    );
    return;
  }

  e.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});

// ── Push notifications ────────────────────────────────────────────────────────

// App posts { type: 'SCHEDULE_REMINDER', delayMs, title, body } to schedule a
// local notification without a push server. The SW stays alive long enough for
// same-session scheduling (e.g. 20-hour reminder after completing a session).
self.addEventListener('message', e => {
  if (e.data?.type !== 'SCHEDULE_REMINDER') return;
  const delayMs = e.data.delayMs ?? 86_400_000; // default 24 h
  const title   = e.data.title   ?? '🍽️ Time to practise!';
  const body    = e.data.body    ?? "Keep your streak alive — today's food vocab is waiting.";
  setTimeout(() => {
    self.registration.showNotification(title, {
      body,
      icon: '/pwa-192x192.png',
      badge: '/pwa-64x64.png',
      tag: 'streak-reminder',
      renotify: true,
      data: { url: '/' },
    });
  }, delayMs);
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(list => {
      if (list.length) return list[0].focus();
      return self.clients.openWindow('/');
    })
  );
});
