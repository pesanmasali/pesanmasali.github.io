'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c4dec354bcd9e18bec3019c13339bbdd",
"assets/assets/location/APOTEK.jpg": "d9e51ae5d949d7f21a0d372b180b1d6c",
"assets/assets/location/GD%2520BELAKANG%2520LT.1.jpg": "09b75b81c0ada7d4cb8b7bb6ceb68c77",
"assets/assets/location/GD%2520BELAKANG%2520LT.2.jpg": "09b75b81c0ada7d4cb8b7bb6ceb68c77",
"assets/assets/location/LABORATORIUM.jpg": "2af02c0ab209430d43a95e1d0203d88c",
"assets/assets/location/MTBS.jpg": "afc0fa3cbbf277a872903d0025281c66",
"assets/assets/location/null.png": "8057445ee61f0662c373e0503ec524d5",
"assets/assets/location/PENDAFTARAN.jpg": "878139b37eaa2c8330daef09564368bc",
"assets/assets/location/PINTU%2520MASUK.jpg": "2f9229b44ae9f27c4a884cfae4fb1ffb",
"assets/assets/location/POLI%2520GIGI.jpg": "c23ba3b641a73a761c1b5976dd366c69",
"assets/assets/location/POLI%2520UMUM.jpg": "b9487b563e036cec24bfaba8499e7875",
"assets/assets/location/R.ADMIN.jpg": "12d18062af569327150d4a102c3640bd",
"assets/assets/location/R.DOKTER.jpg": "3beafae4b11ee62163c1eafab191f0c3",
"assets/assets/location/R.GIZI.jpg": "0fa9f861905cebcd6fc8efbee4ffeb6b",
"assets/assets/location/R.IMUNISASI.jpg": "c1be4453767a27be46a8c2828e815a6b",
"assets/assets/location/R.KA.PUSKESMAS.jpg": "e781526c3039001cf8f6cded81885ae3",
"assets/assets/location/R.KA.TU.jpg": "d0c8edb8b02084582f5caf89c94efc57",
"assets/assets/location/R.KIA%2520KB.jpg": "f01b7ec4876e976b96e5fc7deb053f0a",
"assets/assets/location/R.KRENOVA.jpg": "6b85ec632fb3464fcb637a61756fe243",
"assets/assets/location/R.SERVER.jpg": "0cc2b0b7c3a94653668427857eb29f0f",
"assets/assets/location/R.VAKSIN.jpg": "13149cc8f6a5c200fef39f554685ef80",
"assets/assets/location/RAWAT%2520INAP.jpg": "8e539ba4de05351e68d8f6315a3d0d04",
"assets/assets/location/RUANG%2520RAPAT.jpg": "708522e44a05f32440a61fe02974a3d7",
"assets/assets/location/RUMAH%2520DINAS.jpg": "95407f6d20be9f84d4c8354ce02ce52d",
"assets/assets/location/TEMPAT%2520PARKIR.jpg": "285fc01175a9f76c050ed6f9721d3e7a",
"assets/assets/location/TPS%2520&%2520IPAL.jpg": "efc4a572568a81cd7338ffe7d2f16219",
"assets/assets/location/TPS%2520&%2520IPAL_.jpg": "bc4e91106d2abac66f83369d3fdf0da7",
"assets/assets/location/UGD.jpg": "eec163577ad5d376b2799bae6379f620",
"assets/assets/map.png": "c1376f8e60498b467b2c59df5b88bc66",
"assets/assets/person/LABORATORIUM.jpg": "e659cc0e82eb9fc0e820b1b9b311f778",
"assets/assets/person/MTBS.jpg": "1fa6f77c152cbec0f3cb00050c9a1e86",
"assets/assets/person/null.png": "4788048f319dc48101678d9e69f5077e",
"assets/assets/person/PENDAFTARAN.jpg": "341af25dd641958d491f78001c77ec51",
"assets/assets/person/POLI%2520GIGI.jpg": "8e4a4f76d5a230bdcb0be348452028f2",
"assets/assets/person/POLI%2520UMUM.jpg": "c8a851b199d6c6fd78fa3c23af1b5069",
"assets/assets/person/R.GIZI.jpg": "313bda7e21827ace63b6a551967cf3aa",
"assets/assets/person/R.KA.PUSKESMAS.jpg": "4def4768d3fe674ec77e1e1ca310e232",
"assets/assets/person/R.KA.TU.jpg": "a12702a2a81f40ae8170893146c900f3",
"assets/assets/person/R.KIA%2520KB.jpg": "7169dd75fd02b2273ecfad117b5a2b5f",
"assets/assets/person/R.VAKSIN.jpg": "a0625a2eba6b10798fb39bf1078605ef",
"assets/assets/person/RAWAT%2520INAP.jpg": "5c0998d5145dda8269b3b51f4d171d97",
"assets/assets/person/UGD.jpg": "f7614cb7093b1e21267516523561946c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2adb94cb4d2c134c919f4554f293598b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eafe8fdf12ebcda6c8be171c669f3719",
"/": "eafe8fdf12ebcda6c8be171c669f3719",
"main.dart.js": "4fc5057095b04160d767b61507b43fb4",
"manifest.json": "e4a1cf04faa7587feac3d3fa09860ecb",
"version.json": "25666f0c0ada1f311e30847819888663"
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
