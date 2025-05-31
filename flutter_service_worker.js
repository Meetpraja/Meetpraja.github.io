'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d9f7d04e4c8ead0763126c3ec1e03643",
".git/config": "e747ca9e1ecdc8f99d9d79a45ba24581",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "631ca7b5e6fd4afdb6cf780dc56a5ebf",
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
".git/index": "9e785e96e24ef7e5e2bc7a7568ffae8c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1592851012a54ec32db71a78951c0eb2",
".git/logs/refs/heads/main": "1592851012a54ec32db71a78951c0eb2",
".git/logs/refs/remotes/origin/main": "c5d434b1a849b275b8ebc72ca5b72527",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/e18dd0e89cf28e8a23b9b7c7a1894f93c70c66": "4c8767a489dffd5f690bc915a1b74c5c",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/08/da33f04a08a97b96c63865eb6965f26961d173": "c2c114f408e0fa04e1d203678618e886",
".git/objects/0f/c066ab604cd2d2da50242787437cd050bda454": "9188b7787ae4665e3d91a2dea7f31fbe",
".git/objects/0f/cee65c945816c1eb3073fb829b83c650021aab": "58a7189125add565f23685fb6988da2f",
".git/objects/14/474def57b4e3b52bb039513502b10397876968": "201d53196ca1c32a13f203ca593c5901",
".git/objects/17/3270a75e0814ff26e004c1073bb8e3ab00834f": "8e1814236853c61c808817922490a7c4",
".git/objects/18/4b304f074a08d5a7d429bf9d51bada0e5739b9": "e5a43b77b1ccab74ed22b527c04318e4",
".git/objects/19/4b85b924abb3d6d5e791aec5f7a32424fbe7d8": "f2e6539e8e6c7f29110f0b2de047617f",
".git/objects/1d/66713435db548d479ab92a4f83fd8b35ff1c70": "ad92d92aaaab91baf6917bb6c9b6d1d4",
".git/objects/1d/9d0b0f7696614dc1fe129210fcbf00b06b8649": "18d0dafc0b557250be927f8b8949cb2f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/560e79031e02e287a19b73c2bc6bcdabfa25f5": "c330ea5d0962b75b227a6422ddc8d222",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2d/8471adde576298be08fcfd7297bdb204162e15": "1b709c9ca2bd668ee3a3a68577189080",
".git/objects/2f/2990943c808a96e4a862e3bb03d442369fb162": "cce6c0d85a5abfbd55209f54451c5a55",
".git/objects/2f/b9f7e8360e025f00a3c792e17c7dd5311e0ebc": "7b38bbde0cea75f06f787b1d7804f7eb",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/4d0cef43b922b5ca987c0ac976c40dcac96d1c": "5dfb39f216fb6ed1557c8c2c0e7cf4a3",
".git/objects/36/fe2addf9650c239fa091d2a5d2a7600cfe08c3": "eb458f565feacb9296218e015b09fa5c",
".git/objects/37/1ea5cf735b93d72836eeb409b70e9a26d54802": "0f19991aa739ac45bbce5cceaa4a85d6",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/506e6ebdc42d07dcb85a51dded85676175cfd6": "1505b2ccce331ab329bc2fca908ed8a7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/13c260524fb94b1036272369cf879c1a79e59f": "fbec70c9027a7d25e3d84bcc6686a6e3",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/52/7557e6d38f2b86257815e531e458112cfc69d7": "d7f4148945ea63383458c9696c561d18",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/2d0e7766abe047cd39f3bf8869866f4a81503b": "d071e7700b7435197d8d64b7d153771d",
".git/objects/58/971c0563da6d028d5696851451b2c6fb918839": "3eace50e5f2931b8c00fa51566c18d9c",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5b/1da0d9261b847eaac227a24ce5dcf98a076717": "f2813847d2290ec355dfbf075dce038b",
".git/objects/5c/352999caa14e45b6f1993d7a423a185c3e05cd": "76107284c8a4c86a50dcc358dd7ff4cb",
".git/objects/5c/8fe88f049f2275d709364e90878b48eadc68f2": "e9e11cbe60f3354fd9c447061e4f9ca6",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/fe3c62ab323baa99fb5a712439fe95ad6b8e7a": "5130111720be8975c059bcc71b4ce2ed",
".git/objects/62/51902c41e7de1b421ac2c1ad2cccef52cda342": "564016971285e9fe9f68caa642d33892",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/8e6a7c36bf8fa6c49803d6bc641a5184c8f711": "c459188fbb5b5fc1c21fda88d731d568",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/68/0ce1ed3c86fc083c9ecb274cf58379225c74bc": "71591679ffa61ad6dfc3dad9453364b6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/24d61a12f253242bc1d7fe02b5aae72e86779a": "d3994136cccbd7a81ab1f0a139095e0f",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/67bc9f5e7b13902c914177f177249f48745b12": "9f98c6e4a64549cb27c52d62123d5944",
".git/objects/6e/91e88599a78341aba8d85add24a1243482dd3d": "d84a52813984de2818e86e3f3441ae50",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/77/d53c67532f9550109f0ffc4ea9ec604b310648": "bbdf67042f52075ad8fa85cefba54e31",
".git/objects/7a/222b8cf9a9b81e31370de9c2cf75c4c15e42a7": "e839f0784f80d28bf8d4db3abcb9c38a",
".git/objects/7f/049c89f3bd7430a86cac31238da42d9aa9fe8b": "b47ec0263cede5d65a0b6549a8eed726",
".git/objects/81/ebbe4da145e80465954099ea545d34fb9c6651": "6343a0820de57235c48cc2007813ef70",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/6f28dc60ed1e6bfb7c89d9bfed021376a34453": "d4f776a9a2bab3acd29afcf88742187c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/b182f2197abc1bfd0acce7ade308813174472d": "a261d705e7f4d507a0b23a51bd31bfb9",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/a1/0db0d200100edeb3c6edffb0176daef4b16735": "cc6ee29b95766c39658fde84588250a4",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/d6e9d01522f8eaaec1d8c15e9c7f4e2c46cc7c": "6ed2a92686b5ab5233af0cafd9072729",
".git/objects/b5/96b573d4a67e15ae899f41e3c4c9d5276b20ad": "0af782542e773fe32710a8e33f4bcc4d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ee07bc09d0df7745baf69c5e187c3679435a64": "4b3e4c3a8df14f0c57d66a2c1a381555",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/c90e99eb119e0a1ccae1480def6946db0c2b67": "14a5d293320806534d87c8c19a914705",
".git/objects/bd/66487d1869181c221c8573cd169382a706594d": "e40e886001f13347589dfe9a6ec44433",
".git/objects/bf/73b4d927519ac27b69fe6b6458dc3d789ae3bf": "a030270490afc3aada7346c0ec1cfe18",
".git/objects/c3/c0d2dd8a1c2dec1fe37543eebebae34ecb16f4": "db13ef4493995cab7f15e6af2e86acb4",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/a872f4978fdfbeb3fb11c8ff16b4524ede2111": "f83f9cac9c4d87b6f6ed692837b1b5f9",
".git/objects/cf/bc9204fff46fd564cf0b9fd1be8ff3ca0ce0be": "1ed8807b056b01238124bcb672c77602",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/917917f956b862215144849ad3e0f6831e7827": "b5986434697e5ebf6b96939b3650172c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/6a116bcfd938398506dbf87d0575b6b35f4cf4": "af81c1466761f5cbe7ee593b80abe5b6",
".git/objects/e1/87e1b0f4ca07afc0594904bcd53f8bdaeff0a7": "b9b2b7adf0330c9ff011829e311a8664",
".git/objects/e1/c7492a0c305706b42e44bcd1507bf107f69d9a": "3d685483c02e65afffd1fd8d6941145c",
".git/objects/e3/899d874dc81201e30935cf3f35eb34d8aec5ee": "50a45fb89cb6795883b144a464b7efa4",
".git/objects/e5/13bebbb8e46aa76738d59449bff33166d2a4be": "e1b1cb75cd720c452ce505d20aece712",
".git/objects/e5/8386ad24e942839de3396ea8c576a6b875e884": "2b9ca83e49122afc9990a02ffb9a27e2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/a328602e391867c457eccf1176fc05651015cf": "14eea869e661f4242fde3d304a61d628",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/0c23fcefc2f75e728510a98ff35cc89ea0b6db": "4486230973d08eb9d85fb02e8cfd02dc",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/b2ea983fe0169a258c3b144758f82c4b86329e": "e06ccc8402cd39e8c3fa62b0b478c8ef",
".git/objects/f9/36950e1cc530beb767afac0f37f5ac78e1d410": "62b33a2a45984804d80876ce524f56f3",
".git/objects/fc/3ec39b7b2cfc946f42aec0135e4edf8ee0160a": "fc3b6670d0d39a228c350d6a64216bb7",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "c789d158fd8f689b7adbecbdc0664a37",
".git/refs/heads/main": "36403ae319ae1b9a3feb18d32d5cbc34",
".git/refs/remotes/origin/main": "36403ae319ae1b9a3feb18d32d5cbc34",
"assets/AssetManifest.bin": "f9e218371c166cae47eccea37ddae375",
"assets/AssetManifest.bin.json": "b29c138648d0a5ebad2d491429e83c27",
"assets/AssetManifest.json": "7e71f27064c7fdcc354ebc0a2dfa8eca",
"assets/assets/b.webp": "124a1f9a58edb604c9e891aa84b194be",
"assets/assets/back2.jpeg": "adb28e2ef15aab551f20855bb93c5ea5",
"assets/assets/chat_temp.png": "c8333c037c9ea95a647fc0ca827f2c7e",
"assets/assets/d.jpg": "c768315c19a596f53a4835ff9d4dc21e",
"assets/assets/dart.png": "1aef77e06bc23c58240a192da2fb596f",
"assets/assets/dice.webp": "6e5304621f559f4bf97d7cf1c7791615",
"assets/assets/Expe_cover.png": "3f02151299b79c77bf9a4c9f2300a44c",
"assets/assets/f.png": "3b527b0f7559f4bb0786fe84bee20e68",
"assets/assets/firebase.png": "9ed79d8d77f3aab27b935896f7258479",
"assets/assets/flutter.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/food_recipe.png": "79548bd957ba7e77a9d79558ec7578d1",
"assets/assets/g.jpg": "86bc58241b8e79979aa404521b233c02",
"assets/assets/getx.png": "cb152befc8070517aeb4378fa585c2e0",
"assets/assets/git.png": "3646ba479abba83300728055e1dcb42a",
"assets/assets/github.png": "ad8c984899fb135e52d035d722ceecb0",
"assets/assets/h.png": "e7b2ff5773a10b36a5f771c39e813c32",
"assets/assets/linkedIn.png": "b4a894016fe7748a4e7fed0217733d50",
"assets/assets/profile_img.jpg": "1bf7c97ef306e4a05cd712a995b33ac1",
"assets/assets/r.png": "875b2c58f7a51a01d72ffcc2ed38371e",
"assets/assets/r1.png": "0e16557e49e97b601023de5c0a3629d8",
"assets/assets/recent.png": "fc810367d87f45313835b7f1c7070f54",
"assets/assets/rest.jpeg": "6612bd5a9e6393c2f577a23177cd8b14",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "261a2ea6b62ac06179b095feffcf6aad",
"assets/NOTICES": "b1e415e37582935b4862e1a4054d995c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"CNAME": "465d75bc2fe7a4482376a9e55e76a8d2",
"favicon.png": "8c80910249daa0fc18138c421e2432de",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "cd55c0bbfddd3f98f214fb58c6cf0505",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "90135be32d48c0b87befc0548ca67612",
"icons/Icon-maskable-512.png": "5e4706b01a6844c4b583dec2376e587f",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "b9b089fa9aa70ff67e2e84f5e1e7951f",
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
