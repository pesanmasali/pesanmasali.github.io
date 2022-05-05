'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f3d07857cb18e50a69887087c36a2b9c",
"assets/assets/0.jpg": "77373a861fe12a4e0c7c2c69b85830ab",
"assets/assets/1.jpg": "e52cb77bb99fc379b3630bad66f73442",
"assets/assets/10.jpg": "11a38ad15e2d71a79398520e0f5632dd",
"assets/assets/11.jpg": "bca36faae3fcf5ad911e199c269903f7",
"assets/assets/12.jpg": "2137d37a19965b374de28e1724e5c82a",
"assets/assets/13.jpg": "d7ad42bdfc3ae74d3dd27878c57aa937",
"assets/assets/14.jpg": "77bf6f1ef7be38b4918c895719c60da7",
"assets/assets/15.jpg": "fd99bae4666f208dbd6b8ab87f30f42a",
"assets/assets/16.jpg": "8f29407ced95513d28519c0f33d40dfc",
"assets/assets/17.jpg": "4e0f201821fca339d126ab302a068823",
"assets/assets/18.jpg": "be8f1bc0878c0b34ba743cfeb9fcb188",
"assets/assets/19.jpg": "96ce4881f066d8660bd75fe977757e27",
"assets/assets/2.jpg": "c9e15460b7a056e00576031e6cf3974f",
"assets/assets/20.jpg": "01e4dbbd62add489c174f04d481f6cd8",
"assets/assets/21.jpg": "2314c588baf3346b7dc88fd2363ca548",
"assets/assets/22.jpg": "570c230c9176a5a46f52f5c38453d1a7",
"assets/assets/23.jpg": "de1068048af9d953e157352ab08b3202",
"assets/assets/24.jpg": "af88c4847cf82264285d564dbb5d3825",
"assets/assets/3.jpg": "50f55a9e258185e0d8e9c9bccfc4377f",
"assets/assets/4.jpg": "3dcdefc6847d7ef867a8aabcc08899b2",
"assets/assets/5.jpg": "10e56604fc82b9ce9a62da78a1e28ded",
"assets/assets/6.jpg": "fb19bad27cfafd692ca7587d84795087",
"assets/assets/7.jpg": "b887f0a7e430c5dc9a40690a06faf0a5",
"assets/assets/8.jpg": "a0981c070dc556a2c94345ec635dc851",
"assets/assets/9.jpg": "9c7a0a5f0065acb91ec381531eb76a1d",
"assets/assets/denah.jpg": "c7bef18756a80dc11cc0b26eb19176d4",
"assets/assets/person/laborat.jpg": "a90886cc0922e4761aae04fff8b5f77d",
"assets/assets/person/person1.jpg": "1adbb50971340704cc0512258d22e1f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/tile_01.png": "fb22045d48257152ae9452ad28a1434b",
"assets/images/tile_02.png": "289caaf63523a6dc856ad85185c647c9",
"assets/images/tile_03.png": "bfb0f9b173246e0bb51884a4cd2bf5b7",
"assets/images/tile_04.png": "597795ab886b10b6bc205236a7c723b1",
"assets/images/tile_05.png": "62def023abc051572fbcd7d91ead4db6",
"assets/images/tile_06.png": "679bff344b3950f78a60916596e069ee",
"assets/images/tile_07.png": "418af782cd37b07d6a94059c720ecb72",
"assets/images/tile_08.png": "9594fc4f319692e63dd6c727ffd21c8f",
"assets/images/tile_09.png": "111691781f6f04f0985bb7ceda8a0f3c",
"assets/NOTICES": "cbb8a596057a839a739f97c6e0925c04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8126778acfb0316159c4c8a19f108d30",
"/": "8126778acfb0316159c4c8a19f108d30",
"main.dart.js": "9b9a003267dabfbb5d0dbe19601f5b1e",
"manifest.json": "228d4136b6bfe34740748ab403a54228",
"version.json": "c0e75587503c2f950ad0d45a3e1899c0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
