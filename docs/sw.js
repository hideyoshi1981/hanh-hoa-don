// Service Worker for PWA - Offline Support
const CACHE_NAME = 'invoice-app-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/decimal.js/10.4.3/decimal.min.js'
];

// Install event - cache all resources
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app resources');
        return cache.addAll(urlsToCache).catch(err => {
          console.error('Failed to cache:', err);
          // Cache files individually to avoid failure
          return Promise.all(
            urlsToCache.map(url => {
              return cache.add(url).catch(err => console.log('Failed to cache:', url));
            })
          );
        });
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          console.log('Serving from cache:', event.request.url);
          return response;
        }
        // Clone the request
        console.log('Fetching from network:', event.request.url);
        const fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200) {
            return response;
          }
          // Clone the response
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        }).catch(err => {
          console.error('Fetch failed:', err);
          // Offline fallback
          return caches.match('/index.html');
        });
      })
  );
});
