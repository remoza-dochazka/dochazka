// Remoza-docházka – jen kvůli instalaci na plochu; nic se neukládá do mezipaměti, vše jde vždy ze sítě.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
