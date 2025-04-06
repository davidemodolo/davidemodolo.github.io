'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8927b8165649dd8b4c6fa0ef21b7797d",
"index.html": "50bd420b211acb345d398de3f0a08d44",
"/": "50bd420b211acb345d398de3f0a08d44",
"manifest.json": "b1295d728b6eec15744209aa21413e44",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "17fcb8aab1e9479640b62531e09ae7fa",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "d6765ab13f71f53b4b0cb375ebea90ea",
"assets/fonts/MaterialIcons-Regular.otf": "602f0a6618ec40234c79d7e020eecff1",
"assets/assets/day1/PXL_20250402_130407816.jpg": "b71e87abbf9ac1ef7df2178e9153d544",
"assets/assets/day1/PXL_20250402_080745528.jpg": "e59ef73dcf476f179e984ea242ae43ea",
"assets/assets/day1/PXL_20250402_104223817.jpg": "2fce8d69f72a87261b623eb98f1cf6cd",
"assets/assets/day1/PXL_20250402_230210975.jpg": "a61231552b01a4519af0634af4f5ea10",
"assets/assets/day1/PXL_20250402_130407817.jpg": "a9323dcec0e4ae808f140f8a74d796da",
"assets/assets/fonts/futura/FuturaCyrillicBold.ttf": "50c1fe474aab5cecc00a2ae63d14a8cf",
"assets/assets/fonts/futura/FuturaCyrillicMedium.ttf": "d8c472f48182dca3ebfe0ac3aac31f72",
"assets/assets/fonts/futura/FuturaCyrillicBook.ttf": "cc17f68d3bbbdd07678bc70472ac6523",
"assets/assets/fonts/futura/FuturaCyrillicDemi.ttf": "31b7517c5554f1b3ec31d31d10681f17",
"assets/assets/fonts/futura/FuturaCyrillicHeavy.ttf": "ac8eeeb372a2919143e904a46300af6a",
"assets/assets/fonts/futura/FuturaCyrillicExtraBold.ttf": "eca8efdd17f2f9902f7fdc723cbad99a",
"assets/assets/fonts/futura/FuturaCyrillicLight.ttf": "1417bc6528fc33f47e148ac12b682d68",
"assets/assets/trip_info2.json": "b8be811185d7c5230b493375c4b587b4",
"assets/assets/day3/PXL_20250404_031644114.jpg": "1746400d73e738349b407819d748f5d5",
"assets/assets/day3/PXL_20250404_050833979.jpg": "c8fcf963a8dff314b96fc427194959f9",
"assets/assets/day3/PXL_20250404_105650151.jpg": "8d972c42c1dedff93ab5dadd5683ee7b",
"assets/assets/day3/PXL_20250404_114150456.jpg": "5f4b5c4a0676c4609fab47ecf1818ebc",
"assets/assets/day3/PXL_20250404_114305675.jpg": "1640fdfa2a28ba5b77fc39db7bbd6f90",
"assets/assets/day3/PXL_20250404_082734817.jpg": "4a63c1e7ee932d7b70c97f32100d0651",
"assets/assets/day3/PXL_20250404_050532059.jpg": "e236c0a7d136a5c2bf52988a7fc68b1e",
"assets/assets/day3/PXL_20250404_050712476.jpg": "b981fc1cec1beb9ed59e8639b399e5d4",
"assets/assets/day3/PXL_20250404_052515999.jpg": "ef439c3f288fd2e49aedb600c75f6cc0",
"assets/assets/day3/PXL_20250404_053208690.jpg": "5b411f24c48d522863d2ffed2be805cc",
"assets/assets/day3/PXL_20250404_055041085.jpg": "3db733024ed4361fec0420389a0e7d1e",
"assets/assets/day3/PXL_20250404_040125752.jpg": "a338f035b5be099366096c199f86b75f",
"assets/assets/day3/PXL_20250404_014158430.jpg": "2db95ec85a5e23a8ed30238867469ac4",
"assets/assets/day3/PXL_20250404_025307724.jpg": "a1d594e3688d8b7dc44aa6bc770ec43e",
"assets/assets/day3/PXL_20250404_050537569.jpg": "e9f4f9434e378f7d4c2e9f8abe44f0e2",
"assets/assets/assets.json": "d523889435c1cb540864ff9557c89a4c",
"assets/assets/day5/PXL_20250406_042804956.jpg": "8bbd70eb75582ba04e1542123c86ce2b",
"assets/assets/day5/PXL_20250406_042313524.jpg": "d74b459a10e4282d660c0155ea87f320",
"assets/assets/day5/PXL_20250406_013927486.jpg": "a01584e98b85eb514278d7b78e36c365",
"assets/assets/day5/PXL_20250406_043117790.jpg": "c1d197714b30bc4cf760134666726946",
"assets/assets/day5/PXL_20250406_015416769.jpg": "e9eb914c7028f1602b9cde442f867e69",
"assets/assets/day5/PXL_20250406_040423610.jpg": "8cc568bd1cc47fbcfb6f8752fef494d0",
"assets/assets/day5/PXL_20250406_043506647.jpg": "c10ccda3cb167974b1ccd09b44449c3c",
"assets/assets/day5/PXL_20250406_005029319.jpg": "93073827fee887ee381ff2b25381aa1e",
"assets/assets/day5/PXL_20250406_003633702.jpg": "c0d7029d7f39fd26bbdf855f3d975e64",
"assets/assets/day5/PXL_20250406_042753281.jpg": "8795a478e6e8182014b72b2035003666",
"assets/assets/day5/PXL_20250406_042607562.jpg": "70d725f88fcaac51725e5264b3d140d3",
"assets/assets/day5/PXL_20250406_040420392.jpg": "1be1b4fa08ac0428518f392b651529b8",
"assets/assets/day5/PXL_20250406_054935978.jpg": "5760ead9f002566fe95f14121e738450",
"assets/assets/day5/PXL_20250406_044006208.jpg": "5aca66136e763c7a4d5f5bb8c50ac27d",
"assets/assets/flags/japan.svg": "8608025c1f97ba8c00034f415b2cb8c4",
"assets/assets/flags/earth.svg": "e1fe7eb14c1bc5ee4c267d02fe758c84",
"assets/assets/flags/china.svg": "001f6f277d4bdf6fa0f22d6510acb741",
"assets/assets/flags/italy.svg": "41b03921340062a6a1727eb440d19a8b",
"assets/assets/day2/PXL_20250403_082601425.jpg": "18d51ca765a5cd9220fcaea17189dd62",
"assets/assets/day2/PXL_20250403_094628599.jpg": "8a169e7956dd863935fa8cfe6253e2ac",
"assets/assets/day2/PXL_20250403_113438534.jpg": "15afe33daaf304b1d87b27e48155fe7c",
"assets/assets/day2/PXL_20250403_082910738.jpg": "1d237dfb0b3a0b694387ed4372394708",
"assets/assets/day2/PXL_20250403_102756864.jpg": "4cb1f3b990497ad2040d9052b819c809",
"assets/assets/day2/PXL_20250403_114643599.jpg": "400a446021abc1acd4c2fa81e9a9b9ab",
"assets/assets/day2/PXL_20250403_090121025.jpg": "3bd7faf9ab4f289b94c214100539e729",
"assets/assets/day2/PXL_20250403_102756863.jpg": "ca5a58a8391201f2b3d6818fff394abc",
"assets/assets/day2/PXL_20250403_082522682.jpg": "5c06d9c59ae252cf0880ea672452d9ba",
"assets/assets/day2/PXL_20250403_094652274.jpg": "0d29b19ba18f5e16fba625be1ac83814",
"assets/assets/map.png": "dd0dca4e7274c9a8410f2571cf8669bf",
"assets/assets/trip_info.json": "cc785469cc9ef50047418238e3080f66",
"assets/assets/day4/PXL_20250405_033939247.jpg": "35864556a82bab9c11daf723c5c7d251",
"assets/assets/day4/PXL_20250405_040953628.jpg": "3624c5fc63f40f0d5715fea531b07cd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin.json": "7b5c7173e0c5f78f2db3a524bd5f737f",
"assets/AssetManifest.bin": "d25c313b795d98007bc6e8794e7497c2",
"assets/AssetManifest.json": "c8eb99b80b8c56ea2e65e8f622191d8b",
"assets/NOTICES": "fc81c226739ed0ef28179105c476862c",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"main.dart.js": "37564d0138f0220f64106f38c99d74de",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
