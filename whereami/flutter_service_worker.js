'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "aff8a5b5204800b3e5e5129a1b824fc0",
"index.html": "50bd420b211acb345d398de3f0a08d44",
"/": "50bd420b211acb345d398de3f0a08d44",
"manifest.json": "b1295d728b6eec15744209aa21413e44",
"favicon.png": "5336d3b0ed45c62828b2437f09646145",
"version.json": "17fcb8aab1e9479640b62531e09ae7fa",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "d6765ab13f71f53b4b0cb375ebea90ea",
"assets/fonts/MaterialIcons-Regular.otf": "602f0a6618ec40234c79d7e020eecff1",
"assets/assets/day7/PXL_20250408_025356616.jpg": "cc1c7419ed8223ea80cfd4a903a61e54",
"assets/assets/day7/PXL_20250408_015827591.jpg": "5a98561ca85d8b94600f40f0d5e597fa",
"assets/assets/day7/PXL_20250408_025123899.jpg": "478329c727fb9c8a1358c8d9dc5c69fd",
"assets/assets/day7/PXL_20250408_010520967.jpg": "54b108a5d18e4628385b65af5798e192",
"assets/assets/day7/PXL_20250408_055035838.jpg": "1005853442aae3cd501d6dd60158591e",
"assets/assets/day7/PXL_20250408_085030217.jpg": "fda2bbe0e5ba51ec6dee6a4360746b0f",
"assets/assets/day1/PXL_20250402_130407816.jpg": "4e63a4516b0464dadafddf631d1bf1ba",
"assets/assets/day1/PXL_20250402_080745528.jpg": "925801017fcaf2af2423cfaba45713d3",
"assets/assets/day1/PXL_20250402_104223817.jpg": "b9f8aeb59c489698c76bb3086c0a2064",
"assets/assets/day1/PXL_20250402_230210975.jpg": "7e8b66ba4d1a6bd164574c4503202277",
"assets/assets/day1/PXL_20250402_130407817.jpg": "9c0bd4ec0b9df5acb4b3ce1cf16a4830",
"assets/assets/fonts/futura/FuturaCyrillicBold.ttf": "50c1fe474aab5cecc00a2ae63d14a8cf",
"assets/assets/fonts/futura/FuturaCyrillicMedium.ttf": "d8c472f48182dca3ebfe0ac3aac31f72",
"assets/assets/fonts/futura/FuturaCyrillicBook.ttf": "cc17f68d3bbbdd07678bc70472ac6523",
"assets/assets/fonts/futura/FuturaCyrillicDemi.ttf": "31b7517c5554f1b3ec31d31d10681f17",
"assets/assets/fonts/futura/FuturaCyrillicHeavy.ttf": "ac8eeeb372a2919143e904a46300af6a",
"assets/assets/fonts/futura/FuturaCyrillicExtraBold.ttf": "eca8efdd17f2f9902f7fdc723cbad99a",
"assets/assets/fonts/futura/FuturaCyrillicLight.ttf": "1417bc6528fc33f47e148ac12b682d68",
"assets/assets/day6/PXL_20250407_055417944.jpg": "0fa01f498c4519cdeb5d1497cec602b7",
"assets/assets/day6/PXL_20250407_003058802.jpg": "0fb281d45d96c85e9376c08a07a8079d",
"assets/assets/trip_info2.json": "89ae34d26bf7c51a8b903c953bed7209",
"assets/assets/day15/PXL_20250416_054015344.jpg": "b19a27bd53c8f647ff795d0dfae569a0",
"assets/assets/day15/PXL_20250416_052018058.jpg": "e3a0d7502e90c020967fda0d465f11fd",
"assets/assets/day15/Screenshot%2520from%25202025-04-16%252022-37-11.png": "b258e9da52e963d7211bfedbad0ff859",
"assets/assets/day15/PXL_20250416_124034853.jpg": "92a47f469c25f6d9139994694ca035b5",
"assets/assets/day15/PXL_20250416_052941891.jpg": "af64e0829ec14919bc57cdb6a302b47b",
"assets/assets/day15/Screenshot%2520from%25202025-04-16%252022-37-40.png": "cd51496145ef8e21d3fe5c6cb42c2cc0",
"assets/assets/day15/Screenshot%2520from%25202025-04-16%252022-38-05.png": "c1635e66142e2d3dbc7e5ef28f00d1e7",
"assets/assets/day15/PXL_20250416_054212094.jpg": "db50bab30131fc6ec45d31da51276074",
"assets/assets/day15/PXL_20250416_052249192.jpg": "923a98b9c340f24737f23b19c0ca2a29",
"assets/assets/day15/PXL_20250416_084819313.jpg": "c3ec08142fdf8552d605eb762f181fdd",
"assets/assets/day15/Screenshot%2520from%25202025-04-16%252022-38-14.png": "8617853dca823fe8599b7077819b63db",
"assets/assets/day15/PXL_20250416_054035434.jpg": "297b688314f66d812251741f7bb973b9",
"assets/assets/day15/Screenshot%2520from%25202025-04-16%252022-39-47.png": "a6b217aed50ffd5d5302661917dfeff8",
"assets/assets/day3/PXL_20250404_031644114.jpg": "c1b30479606392189169440aa24bcf4f",
"assets/assets/day3/PXL_20250404_050833979.jpg": "11a6ff698c5b09f97c9aff6bb5b89123",
"assets/assets/day3/PXL_20250404_105650151.jpg": "55698371e2b1017d4afb19f8cf9b55fc",
"assets/assets/day3/PXL_20250404_114150456.jpg": "145f2036c48a09d29c1d06f698c774cb",
"assets/assets/day3/PXL_20250404_114305675.jpg": "8008b1bf4cbec998caa6bc6697dc5556",
"assets/assets/day3/PXL_20250404_082734817.jpg": "deccda41f40622f3818eedcc81fa9b0f",
"assets/assets/day3/PXL_20250404_050532059.jpg": "b2a351590f2b9d81acbde69a70235a85",
"assets/assets/day3/PXL_20250404_050712476.jpg": "d5b647a112c4c1cd9a78c9c85592a77a",
"assets/assets/day3/PXL_20250404_052515999.jpg": "e93e5786101d75d876f29946e5fe33dd",
"assets/assets/day3/PXL_20250404_053208690.jpg": "7abacb6f4239bc1571ac7a1d8c0e1f65",
"assets/assets/day3/PXL_20250404_055041085.jpg": "c259beda2c2894a0a11eabd45948dbf9",
"assets/assets/day3/PXL_20250404_040125752.jpg": "80fc2be25dd9c4d211a638e1b8cc221b",
"assets/assets/day3/PXL_20250404_014158430.jpg": "54c6c0791be77c79ec54d93c47f224ec",
"assets/assets/day3/PXL_20250404_025307724.jpg": "9e601f2d879287ba8f982ff0b80468c6",
"assets/assets/day3/PXL_20250404_050537569.jpg": "8e11058608b6805ff730c50a6b3e3d56",
"assets/assets/assets.json": "d523889435c1cb540864ff9557c89a4c",
"assets/assets/day5/PXL_20250406_042804956.jpg": "e5f6575080c844008a5d52388b6006b1",
"assets/assets/day5/PXL_20250406_042313524.jpg": "f525232f51c1b990d1cc4b04d78581aa",
"assets/assets/day5/PXL_20250406_013927486.jpg": "4b6e856f4c44553f9b366e270e4d9f89",
"assets/assets/day5/PXL_20250406_043117790.jpg": "8f8c189268e97a0d81bc108564ffde00",
"assets/assets/day5/PXL_20250406_015416769.jpg": "829c7c8668cc0af81a73a6fd682c360f",
"assets/assets/day5/PXL_20250406_040423610.jpg": "228524d8d3dae663bf058714086a1d63",
"assets/assets/day5/PXL_20250406_043506647.jpg": "1625d66d36117c5bfb89bc859372f158",
"assets/assets/day5/PXL_20250406_005029319.jpg": "92759b6a06b6f9c7c530d267e3d96f22",
"assets/assets/day5/PXL_20250406_003633702.jpg": "b7c7c1bae721202363f4efd0a36193c7",
"assets/assets/day5/PXL_20250406_042753281.jpg": "e8f0df031a53d63de3ba40d51beaaf9c",
"assets/assets/day5/PXL_20250406_042607562.jpg": "624229e6e99edc3c60c4dfa958e6da1d",
"assets/assets/day5/PXL_20250406_040420392.jpg": "96bf12a92a014546007a5007554dbd28",
"assets/assets/day5/PXL_20250406_054935978.jpg": "08c6e2fd39cb9e60ae33f25e3aadee99",
"assets/assets/day5/PXL_20250406_044006208.jpg": "b26fb9359c60b02cca9d3af03ebb6866",
"assets/assets/flags/japan.svg": "8608025c1f97ba8c00034f415b2cb8c4",
"assets/assets/flags/earth.svg": "e1fe7eb14c1bc5ee4c267d02fe758c84",
"assets/assets/flags/china.svg": "001f6f277d4bdf6fa0f22d6510acb741",
"assets/assets/flags/italy.svg": "41b03921340062a6a1727eb440d19a8b",
"assets/assets/day2/PXL_20250403_082601425.jpg": "63ae07ce2c537fb320279e0fe603d964",
"assets/assets/day2/PXL_20250403_094628599.jpg": "77ec05f22a9c767229d7a1a01a9b432c",
"assets/assets/day2/PXL_20250403_113438534.jpg": "6ef3bd63ce846e5c8e6576d51da7b825",
"assets/assets/day2/PXL_20250403_082910738.jpg": "db6ffaaad90b93425b444fae5d7cc77b",
"assets/assets/day2/PXL_20250403_102756864.jpg": "534e51cd6dd225a40fdcd7bb59234e8e",
"assets/assets/day2/PXL_20250403_114643599.jpg": "f7304820db29030e950239f501217a7b",
"assets/assets/day2/PXL_20250403_090121025.jpg": "9c54dfd651a2524e6245c494813d6c21",
"assets/assets/day2/PXL_20250403_102756863.jpg": "71032492022518f2aba3f30ece61dcc6",
"assets/assets/day2/PXL_20250403_082522682.jpg": "38ae9129c218ace5efb9df453f8fb61b",
"assets/assets/day2/PXL_20250403_094652274.jpg": "5bc1c8783d79aa78c9ffdd78805c9dee",
"assets/assets/day14/PXL_20250415_061229739.jpg": "84c11e52a20d20d4a57668f4dc5302b0",
"assets/assets/day14/PXL_20250415_045102691.jpg": "22edd301e0f9a81751aca227a1376578",
"assets/assets/day14/PXL_20250415_060502120.jpg": "554b2c39474fecaa57c5212a724cfd10",
"assets/assets/day14/PXL_20250415_072629054.jpg": "72b56bc5ca30a0fe791456d8e04d0f23",
"assets/assets/map.png": "466c690856340a31d7f73d8cf42f6f62",
"assets/assets/trip_info.json": "89ae34d26bf7c51a8b903c953bed7209",
"assets/assets/day11/PXL_20250412_013033842.jpg": "93dcdc833abfa3a39a5333b8a7c3250a",
"assets/assets/day11/PXL_20250412_041636932.jpg": "513e090482b46ed8cf3fb0f953fab0f5",
"assets/assets/day11/PXL_20250412_023640458.jpg": "a89cc4688dfa0414c8dc3a516411f2c7",
"assets/assets/day11/PXL_20250412_044905320.jpg": "fe45383684e66390eff766954ffcbb67",
"assets/assets/day4/PXL_20250405_033939247.jpg": "02014bcd2100971baafc56386b6b869e",
"assets/assets/day4/PXL_20250405_040953628.jpg": "bef1a1f965af2783c3dcaadff0e55895",
"assets/assets/day12/PXL_20250413_012117508.jpg": "79c4167c6e3de085414f2bd65f3176ed",
"assets/assets/day12/PXL_20250413_011037422.jpg": "e28c03b656176644513e279342a160ad",
"assets/assets/day12/PXL_20250413_011041027.jpg": "3dd7b01f639f302ef4f06333dbcb2040",
"assets/assets/day12/PXL_20250412_064326288.jpg": "abc99dfea352389d16588ea625b62304",
"assets/assets/day12/PXL_20250413_105231863.jpg": "1e75f9835f168a19db9a74726b2729b1",
"assets/assets/day12/PXL_20250413_011125248.jpg": "d24c314f5b0332d33f6fa1aec5b08da1",
"assets/assets/day13/PXL_20250414_083526422.jpg": "8664e6354f5adf2d959793de4b3067f3",
"assets/assets/day13/PXL_20250414_084422901.jpg": "3c89300bf6179bfffae635f9d231e63e",
"assets/assets/day13/PXL_20250414_052252626.jpg": "5ece023d09f39c58c587ad76bb160b08",
"assets/assets/day13/PXL_20250414_044829512.jpg": "51ddcfdd879095e4bdba523223520602",
"assets/assets/day13/PXL_20250414_053835370.jpg": "e9f518561a90e3bcdde442fd2a9a24b0",
"assets/assets/day13/PXL_20250414_034925092.jpg": "67b16b4e5b17ced9a8b99dcae4708dd8",
"assets/assets/day10/PXL_20250411_052410566.jpg": "92de906368b1d7a07c3d846f887dce42",
"assets/assets/day10/PXL_20250411_035802123.jpg": "0df03f039380aa7915f6dc2bb42d6527",
"assets/assets/day10/PXL_20250411_040643437.jpg": "0f9415c4bfcb660519e125991452932e",
"assets/assets/day10/PXL_20250411_032917704.jpg": "8c91965b0158d7e82538eb4b35d678f3",
"assets/assets/day10/PXL_20250411_035707433.jpg": "8a5847c549b8422ede6dae32453d1351",
"assets/assets/day10/PXL_20250411_055215663.jpg": "ca87586f6b541ecdda3814784b9710db",
"assets/assets/day10/PXL_20250411_052433489.jpg": "e1b935eb059a2a4fe54a08370a53dc48",
"assets/assets/day10/PXL_20250411_035826314.jpg": "077bad34555a2017a51ab98dec72cf27",
"assets/assets/day10/PXL_20250411_043916660.jpg": "621ee0c17529e1e8e62c037abe130904",
"assets/assets/day10/PXL_20250411_043754961.jpg": "8c5d6dec41b6d54c81927a04a18d2afc",
"assets/assets/day10/PXL_20250411_032334784.jpg": "181fba908cbf96553d0ea037c02e60c3",
"assets/assets/day10/PXL_20250411_032847153.jpg": "6fb3162727f8a26367f467edd4b7d61b",
"assets/assets/day9/PXL_20250410_070801158.jpg": "3cc8314f5c58f1dac7a0ad32f3be0cd7",
"assets/assets/day9/PXL_20250410_090728126.jpg": "1e623837b9ef7d3b67ce19458a66a7ca",
"assets/assets/day9/PXL_20250410_031700627.jpg": "39d4eed5b088588c4d5f5470259d5516",
"assets/assets/day9/PXL_20250410_031700628.png": "436493a10516904468f19a1509630339",
"assets/assets/day9/PXL_20250410_070042679.jpg": "1376ed4b0dd332012b7be56b970f4d3d",
"assets/assets/day9/PXL_20250410_043041774.jpg": "5c60c2a70930f7c8b3f1a12bce195d04",
"assets/assets/day9/PXL_20250410_022428222.jpg": "efbac3a26274b8f0e8716a9d4c456ecb",
"assets/assets/day9/PXL_20250410_082756628.jpg": "85fe6ffb10ba81322e04fd6b3fb8d38a",
"assets/assets/day9/PXL_20250410_071101341.jpg": "147ca12025fdbc87b01b91b7c5f431d4",
"assets/assets/day9/PXL_20250410_070106999.jpg": "7bd2858942f7847e0b4367390b7cff2e",
"assets/assets/day9/PXL_20250410_064106295.jpg": "ba5acc50dfc82b777dd44cb4b7c8e9b3",
"assets/assets/day9/PXL_20250410_031700630.png": "cedf123b1069f488e87878dff6abfa95",
"assets/assets/day9/PXL_20250410_031700629.png": "2ba02d82db475a2febf9062d9785a20f",
"assets/assets/day9/PXL_20250410_075840184.jpg": "4e8f58725d78f33a535027ca2fc65a21",
"assets/assets/day9/PXL_20250410_072720780.jpg": "0c11c28806388d89389afeb8f5b7977a",
"assets/assets/day9/PXL_20250410_070126664.jpg": "0093caabf92792978a25bef41b415723",
"assets/assets/day9/PXL_20250410_070846795.jpg": "a2941712d108499a276be08642fac74d",
"assets/assets/day9/PXL_20250410_090452229.jpg": "8fa20a78eae86ac227d81a9444b14562",
"assets/assets/day8/PXL_20250409_061637771.jpg": "cb082ec6a3ad0026ea72448a458267c6",
"assets/assets/day8/PXL_20250409_060245241.jpg": "6d61664c625b9d29ef2a7a2a595897af",
"assets/assets/day8/PXL_20250409_073129760.jpg": "e5ebec2424630ecb4a28ac3f5f9c5249",
"assets/assets/day8/PXL_20250409_003434558.jpg": "036857d1414f0a5df7718fe30f273fec",
"assets/assets/day8/PXL_20250409_061459756.jpg": "3c62a47caa7b0e5b71edf81af796c954",
"assets/assets/day8/PXL_20250409_055900083.jpg": "e93e2bb49999b828d4acc8f535836852",
"assets/assets/day8/PXL_20250409_064358676.jpg": "050ba4c80fa5f42e71746be5ea27a583",
"assets/assets/day8/PXL_20250409_051108213.jpg": "91c559a46dc513121c2c2262c3a28dc0",
"assets/assets/day8/PXL_20250409_023607634.jpg": "d87924f8fdd22f03fef4d4be96afd27d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin.json": "bee042744339f3f0bb5150251afd5bed",
"assets/AssetManifest.bin": "a3bd996fff530e698c19a8a7dcc08feb",
"assets/AssetManifest.json": "9938d04f143ebe0dc901425dea24abf1",
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
"main.dart.js": "c4957e8c3aa9a3379f57fbe82b77df84",
"icons/Icon-512.png": "da052d99d66fdcb4a20865ee251fc885",
"icons/Icon-maskable-512.png": "99ff09f4aecb1691fdfdb18ecdd6b560",
"icons/Icon-maskable-192.png": "44e395a65619506b2cebf731ad376c45",
"icons/Icon-192.png": "68f4b42ec0265f20af78e11feaa10df4"};
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
