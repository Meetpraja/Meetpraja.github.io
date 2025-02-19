'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "465fb08aa864c4e36f71bd4dea3fc7b2",
".git/config": "e747ca9e1ecdc8f99d9d79a45ba24581",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c470df99bc942532b70de0dba6977503",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cb577d3a8bbeb46bd2c032efd7a95d7e",
".git/logs/refs/heads/main": "cb577d3a8bbeb46bd2c032efd7a95d7e",
".git/logs/refs/remotes/origin/main": "30990bd847217b21b38c5689ae69d989",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0f/cee65c945816c1eb3073fb829b83c650021aab": "58a7189125add565f23685fb6988da2f",
".git/objects/14/474def57b4e3b52bb039513502b10397876968": "201d53196ca1c32a13f203ca593c5901",
".git/objects/18/4b304f074a08d5a7d429bf9d51bada0e5739b9": "e5a43b77b1ccab74ed22b527c04318e4",
".git/objects/19/4b85b924abb3d6d5e791aec5f7a32424fbe7d8": "f2e6539e8e6c7f29110f0b2de047617f",
".git/objects/1d/9d0b0f7696614dc1fe129210fcbf00b06b8649": "18d0dafc0b557250be927f8b8949cb2f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/560e79031e02e287a19b73c2bc6bcdabfa25f5": "c330ea5d0962b75b227a6422ddc8d222",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2d/8471adde576298be08fcfd7297bdb204162e15": "1b709c9ca2bd668ee3a3a68577189080",
".git/objects/2f/2990943c808a96e4a862e3bb03d442369fb162": "cce6c0d85a5abfbd55209f54451c5a55",
".git/objects/36/fe2addf9650c239fa091d2a5d2a7600cfe08c3": "eb458f565feacb9296218e015b09fa5c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/7557e6d38f2b86257815e531e458112cfc69d7": "d7f4148945ea63383458c9696c561d18",
".git/objects/58/971c0563da6d028d5696851451b2c6fb918839": "3eace50e5f2931b8c00fa51566c18d9c",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/fe3c62ab323baa99fb5a712439fe95ad6b8e7a": "5130111720be8975c059bcc71b4ce2ed",
".git/objects/62/51902c41e7de1b421ac2c1ad2cccef52cda342": "564016971285e9fe9f68caa642d33892",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/68/0ce1ed3c86fc083c9ecb274cf58379225c74bc": "71591679ffa61ad6dfc3dad9453364b6",
".git/objects/6d/24d61a12f253242bc1d7fe02b5aae72e86779a": "d3994136cccbd7a81ab1f0a139095e0f",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/91e88599a78341aba8d85add24a1243482dd3d": "d84a52813984de2818e86e3f3441ae50",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7f/049c89f3bd7430a86cac31238da42d9aa9fe8b": "b47ec0263cede5d65a0b6549a8eed726",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/6f28dc60ed1e6bfb7c89d9bfed021376a34453": "d4f776a9a2bab3acd29afcf88742187c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/b182f2197abc1bfd0acce7ade308813174472d": "a261d705e7f4d507a0b23a51bd31bfb9",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/d6e9d01522f8eaaec1d8c15e9c7f4e2c46cc7c": "6ed2a92686b5ab5233af0cafd9072729",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/c90e99eb119e0a1ccae1480def6946db0c2b67": "14a5d293320806534d87c8c19a914705",
".git/objects/c3/c0d2dd8a1c2dec1fe37543eebebae34ecb16f4": "db13ef4493995cab7f15e6af2e86acb4",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/a872f4978fdfbeb3fb11c8ff16b4524ede2111": "f83f9cac9c4d87b6f6ed692837b1b5f9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/917917f956b862215144849ad3e0f6831e7827": "b5986434697e5ebf6b96939b3650172c",
".git/objects/db/6a116bcfd938398506dbf87d0575b6b35f4cf4": "af81c1466761f5cbe7ee593b80abe5b6",
".git/objects/e1/c7492a0c305706b42e44bcd1507bf107f69d9a": "3d685483c02e65afffd1fd8d6941145c",
".git/objects/e3/899d874dc81201e30935cf3f35eb34d8aec5ee": "50a45fb89cb6795883b144a464b7efa4",
".git/objects/e5/13bebbb8e46aa76738d59449bff33166d2a4be": "e1b1cb75cd720c452ce505d20aece712",
".git/objects/e5/8386ad24e942839de3396ea8c576a6b875e884": "2b9ca83e49122afc9990a02ffb9a27e2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/a328602e391867c457eccf1176fc05651015cf": "14eea869e661f4242fde3d304a61d628",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/0c23fcefc2f75e728510a98ff35cc89ea0b6db": "4486230973d08eb9d85fb02e8cfd02dc",
".git/objects/fc/3ec39b7b2cfc946f42aec0135e4edf8ee0160a": "fc3b6670d0d39a228c350d6a64216bb7",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "dc51e4e04c7242b2a71ece6ecdc8c026",
".git/refs/remotes/origin/main": "dc51e4e04c7242b2a71ece6ecdc8c026",
"assets/AssetManifest.bin": "dcdfe61f9448dae85780b97e46953d4e",
"assets/AssetManifest.bin.json": "b5eff5b591c246538b6364ac62706217",
"assets/AssetManifest.json": "1b39b37aee0d5fa091a82fc6010c279d",
"assets/assets/b.webp": "124a1f9a58edb604c9e891aa84b194be",
"assets/assets/back2.jpeg": "adb28e2ef15aab551f20855bb93c5ea5",
"assets/assets/chat_temp.png": "c8333c037c9ea95a647fc0ca827f2c7e",
"assets/assets/d.jpg": "c768315c19a596f53a4835ff9d4dc21e",
"assets/assets/dice.webp": "6e5304621f559f4bf97d7cf1c7791615",
"assets/assets/Expe_cover.png": "3f02151299b79c77bf9a4c9f2300a44c",
"assets/assets/f.png": "3b527b0f7559f4bb0786fe84bee20e68",
"assets/assets/fire.png": "2f290b241f99f6a7019259650b30cf0a",
"assets/assets/food_recipe.png": "79548bd957ba7e77a9d79558ec7578d1",
"assets/assets/g.jpg": "86bc58241b8e79979aa404521b233c02",
"assets/assets/git.png": "59762984d17a428c565de2666b4ba09c",
"assets/assets/github.png": "ad8c984899fb135e52d035d722ceecb0",
"assets/assets/h.png": "e7b2ff5773a10b36a5f771c39e813c32",
"assets/assets/linkedIn.png": "b4a894016fe7748a4e7fed0217733d50",
"assets/assets/profile_img.jpg": "1bf7c97ef306e4a05cd712a995b33ac1",
"assets/assets/r.png": "875b2c58f7a51a01d72ffcc2ed38371e",
"assets/assets/r1.png": "0e16557e49e97b601023de5c0a3629d8",
"assets/assets/recent.png": "fc810367d87f45313835b7f1c7070f54",
"assets/assets/rest.jpeg": "6612bd5a9e6393c2f577a23177cd8b14",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "918f735ef2c52552ecc9fe9e624c6e4d",
"assets/NOTICES": "34bf936b9bfe9bf3c486e0e2fa8c703b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "cb45c4bac5022baf99578e9c4f3e01da",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "bff4eddc579939249ce3f677e07a3de2",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
