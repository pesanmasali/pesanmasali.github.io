'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7e01bf28321a8c8f28025c380d88f69e",
"assets/assets/0.png": "4276bb4acfab5d1d5387dad80380f549",
"assets/assets/1.png": "c15c69f919059370739142e6d69ee95d",
"assets/assets/10.png": "3e7a5c735da209172c22e8339de3e895",
"assets/assets/11.png": "f7e05431bd192eb3c38918dab97bf694",
"assets/assets/12.png": "246c195cbbbc3e0f48fbd8624520abb9",
"assets/assets/13.png": "e6accaa315915e28de4102d438d12944",
"assets/assets/14.png": "508b6663dcf7bbe82c95fbd771e59530",
"assets/assets/15.png": "da225806c8fc6d083ec329d51ece2437",
"assets/assets/16.png": "07fa1c0f9103bb919ab182ffff559020",
"assets/assets/17.png": "519649cee40e16cb868af3a1febf0281",
"assets/assets/18.png": "041d96cbe978aca44dd42001e3d1c219",
"assets/assets/19.png": "30622243e983d9e49bc7b15578452dae",
"assets/assets/2.png": "ca654fbe9c9802733739b4f8446fb4ab",
"assets/assets/20.png": "727ae7b062e0ff7fa250dd5d24106ad6",
"assets/assets/21.png": "f7023970575479cfa3740f2a15a314e0",
"assets/assets/22.png": "1034fb8635855e5575c17c928e4935a9",
"assets/assets/23.png": "241492a5fb5b517e21711bc4ac222c47",
"assets/assets/24.png": "28184fbd29d04f986b2ddd6213e8bc4e",
"assets/assets/3.png": "5082481ada6e14e91bff1df071a48909",
"assets/assets/4.png": "eb12d9f322cfbf382d9898e20eb7738a",
"assets/assets/5.png": "d54f1f2e1e06dd7e35f35278eb4bc4f6",
"assets/assets/6.png": "9983ede8c5df8028dd217693df9b267c",
"assets/assets/7.png": "e6e3bafe17b44dfcb60a11a1133477c3",
"assets/assets/8.png": "d1f7ef6308d0c73910234dd28ceece76",
"assets/assets/9.png": "75bca24204257f0de1c875ab29480c95",
"assets/assets/person/GIGI1.jpg": "8e4a4f76d5a230bdcb0be348452028f2",
"assets/assets/person/GIZI1.jpg": "313bda7e21827ace63b6a551967cf3aa",
"assets/assets/person/KA_TU1.jpg": "a12702a2a81f40ae8170893146c900f3",
"assets/assets/person/LAB1.jpg": "8e2a020fdd57e34b0e007b7bc864cb89",
"assets/assets/person/MTBS1.jpg": "1fa6f77c152cbec0f3cb00050c9a1e86",
"assets/assets/person/null.jpg": "6bb310f2a91f90cdda51aaf8b2755fa0",
"assets/assets/person/RAWATINAP1.jpg": "5c0998d5145dda8269b3b51f4d171d97",
"assets/assets/person/UGD1.jpg": "f7614cb7093b1e21267516523561946c",
"assets/assets/person/UMUM1.jpg": "c8a851b199d6c6fd78fa3c23af1b5069",
"assets/assets/person/VAKSIN1.jpg": "a0625a2eba6b10798fb39bf1078605ef",
"assets/assets/ruang/GIGI2.jpg": "c23ba3b641a73a761c1b5976dd366c69",
"assets/assets/ruang/GIZI2.jpg": "0fa9f861905cebcd6fc8efbee4ffeb6b",
"assets/assets/ruang/KIAKB2.jpeg": "c7d673ece077e0654306d81717d40cfe",
"assets/assets/ruang/LAB2.jpg": "08aeafdf20cfc4d3d8c034f732a6a1f3",
"assets/assets/ruang/MTBS2.jpg": "afc0fa3cbbf277a872903d0025281c66",
"assets/assets/ruang/null.jpg": "3156efdb345eadfa73224a6a32531124",
"assets/assets/ruang/PENDAFTARN2.png": "f9e8ecc81f241822cd7e3c512052c01a",
"assets/assets/ruang/RAWATINAP2.jpg": "8e539ba4de05351e68d8f6315a3d0d04",
"assets/assets/ruang/UGD2.jpg": "eec163577ad5d376b2799bae6379f620",
"assets/assets/ruang/UMUM2.jpeg": "b7ca2e1721ba9c9e6d2ac734982e397e",
"assets/assets/ruang/VAKSIN2.jpeg": "d99ee729af5222c3194cefc389581d34",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "eb5275738c8fa17a8115ae60f3aff684",
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
"index.html": "bdc3dc182285857749928ea994a8e1b9",
"/": "bdc3dc182285857749928ea994a8e1b9",
"main.dart.js": "9b0ef783c3ff562c0c77da2d92157574",
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
