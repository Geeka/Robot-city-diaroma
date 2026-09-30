// Minimal service worker. Its presence makes the greeter an installable PWA, so
// "Add to Home Screen" opens it full-screen with no browser bars.
// It never caches the Google API — visitor data must always be live.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
    const url = event.request.url;
    // Never intercept the Apps Script API — always go to the network.
    if (url.indexOf('script.google.com') !== -1 || url.indexOf('googleusercontent.com') !== -1) return;
    // Everything else: network first so updates appear immediately.
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
