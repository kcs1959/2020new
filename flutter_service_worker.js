'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a5f5bb914e5a1cd45b13726b442a83c0",
"assets/FontManifest.json": "d7cf16e775b7e5491a82c18594fe1e3f",
"assets/fonts/anzumoji.ttf": "d81461ce27ce5b4761426f36ecfaf461",
"assets/fonts/corporate_logo_bold.ttf": "ffac0fbc30fbbfa74d32b4affe2ff16c",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/mplus_2p_bold.ttf": "3b5e66f61f1a20617fe90a437c87b079",
"assets/fonts/mplus_2p_light.ttf": "12dd8476075fb889912b83c51109bc79",
"assets/fonts/mplus_2p_regular.ttf": "5456795b9f2f8209cf944fb34032e8c7",
"assets/image/atsumori.jpg": "2830f9cf10f37614928fa80257ba2a53",
"assets/image/beyondthelimit.jpg": "693bee933723c7d669f4fe079208ca77",
"assets/image/characters.jpg": "f02e5993fd8a1483df4c4742ed2deefe",
"assets/image/events.jpg": "90de6a083c69b855afa288f81d8a5c84",
"assets/image/fastlogo.png": "5ee93c1bd4af50c0279d442e1f7f5521",
"assets/image/githublogo.png": "1e11abcd89f9a1a144444f2a1eb33399",
"assets/image/groupintroduce.jpg": "f9a34d8baf04fe02e40917a9b9bc9720",
"assets/image/groups/ai.jpg": "5c9b19f6b9f9b3e14abc847cf79d5688",
"assets/image/groups/blender.jpg": "edafbda25dea26c23c178d33d2e09feb",
"assets/image/groups/dtm.jpg": "1fab62d4871bbe411b5803406f66582b",
"assets/image/groups/web.jpg": "cd2a9f76d82c2974ac55c00f43471dba",
"assets/image/groups/yunity.jpg": "027d4ba85fd2ff48d6736f98628617e4",
"assets/image/icon_qrcode.png": "1023d85d47141c01a991b435f3d9ce5d",
"assets/image/kcschann.png": "38e0b29c36f7e1ec488a9a332fc21735",
"assets/image/kcschann_standing.png": "6b887e2b76a0e703e5caa8af5e2df17d",
"assets/image/kcsdragon.png": "b9228c48cb200160772431f13d7bb4dd",
"assets/image/kcsdragonlogo.png": "fae07679bef9bfcca264eac3dbb3e416",
"assets/image/kcslogo.png": "6b364aaa16f30f466d60aa7c5d34ef70",
"assets/image/linelogo.png": "828b50ade9a50d18c917484ba688930f",
"assets/image/orfevrelogo.jpg": "89e86956182c09a56dac0c131be14855",
"assets/image/schedule/christmas.jpg": "dcb762723347f1d76a98a501a806b417",
"assets/image/schedule/fire1.jpg": "588291985fa9018e62b77965ac6cd15c",
"assets/image/schedule/fire2.jpg": "dabd70df9cfaf097c7476eea2115b56a",
"assets/image/schedule/fire3.jpg": "8e5da2034894770fa54c58ac062fb92b",
"assets/image/schedule/fire4.jpg": "8d4b9ae3d55c6e8a4fefa95b544b5535",
"assets/image/schedule/gijutsushoten.jpg": "c97b351e0390b3031b94034e09c571fd",
"assets/image/schedule/m3.jpg": "e692676f50eb3f08508bce5bf20f67b0",
"assets/image/schedule/mita1.jpg": "1cc11a22c9e338d39f2bbf5bab37c42c",
"assets/image/schedule/mita2.jpg": "d3e67a4605be8e548798ba17bef96135",
"assets/image/schedule/mita3.jpg": "3d2f86dc473f7de2a1906dbd82de13cb",
"assets/image/schedule/mita4.jpg": "c143ccaa24ea61fe099722423f4ad713",
"assets/image/schedule/spring_camp1.jpg": "7460c1b544d30da3f70899a29bbb3230",
"assets/image/schedule/spring_camp2.jpg": "1356f734d8d0ab5433ec3a35e709806d",
"assets/image/schedule/spring_camp3.jpg": "857ae35958f6fae9b9b395b8fd72d2a3",
"assets/image/schedule/spring_camp4.jpg": "02f48b4f43bbf040cd8ae733f990a20d",
"assets/image/schedule/summer_camp1.jpg": "fd9e204ef7afc9c7228310f5d9313d29",
"assets/image/schedule/summer_camp2.jpg": "a3e63d87337982ab6a1f9cabc2c3c5f7",
"assets/image/schedule/summer_camp3.jpg": "19388cb5e7b4004ff1f006cd0676c282",
"assets/image/schedule/summer_camp4.jpg": "e90f3b871c773d406413ff731e9f4d2a",
"assets/image/topbackground.jpg": "a34d856d29aef32b6055ca351a903c4d",
"assets/image/top_ai.png": "456c33f9106775a24e065fa7833c3eda",
"assets/image/top_blender.png": "063a1f50821ba17877447aabd6b1e3fe",
"assets/image/top_dtm.png": "e84c7ccc01d49fe1999c4b536ba853d5",
"assets/image/top_unity.png": "38577d49207415fc1441736f7911d399",
"assets/image/top_web.png": "c6d42272b6a45d163affc4e57d7e0a46",
"assets/image/tsuratan.jpg": "bcb34ed8d882803d6606d5ee0ef0e29a",
"assets/image/twitterlogo.png": "c3e4ca18065f182967f530f2a6abd340",
"assets/image/works/8u4_kcschanns1.jpg": "4adc85d23e7589a9e5227a9524af2cb2",
"assets/image/works/8u4_kcschanns2.jpg": "6679043c34aac54f4de4c0c821e96d06",
"assets/image/works/8u4_kcschanns_dev.jpg": "cc35952992a5790ba04a5fd31be77d25",
"assets/image/works/cooh2_face1.jpg": "2fa3e9eeaa1ec5aae943c3b171bc584c",
"assets/image/works/cooh2_face2.jpg": "01df182632f491782a0e5450fc8db673",
"assets/image/works/cooh2_kcschann1.jpg": "716fdecfdc2e9b6398622bb1fc396968",
"assets/image/works/cooh2_kcschann2.jpg": "d51bec55577d497130fa4fb63f1ee34b",
"assets/image/works/cooh2_usotera1.jpg": "3ced7f3c0c89ffd1f73f8c4183941342",
"assets/image/works/cooh2_usotera2.jpg": "2e46400dd25519a7112f2222377a5924",
"assets/image/works/cooh2_usotera3.jpg": "21533312b95886dc190ad1432cdd088f",
"assets/image/works/fastriver_clatan.jpg": "e390845933b004d16e2dc33c29d6b1fd",
"assets/image/works/fastriver_clatan_qr.jpg": "34ec5820b2a728d27cee0e30996078eb",
"assets/image/works/fastriver_clatan_spread.jpg": "2712f37e945de6d1f3e93d5dbc728494",
"assets/image/works/fastriver_clatan_yagami.jpg": "f023475df3aaf399137e6a65a450d5cf",
"assets/image/works/fastriver_kcsdragon1.jpg": "ebc5dacdf4c263e83765a4fb639f8cc9",
"assets/image/works/fastriver_kcsdragon2.jpg": "0cbac951746575b26b7e1164614b5ea3",
"assets/image/works/fastriver_nengajou.jpg": "46042f795cd321e97af04c5fe2cca7c4",
"assets/image/works/fastriver_new.jpg": "b079494f58bcde0acd40f6e71eacfb84",
"assets/image/works/fastriver_new_group.jpg": "4e3e7d47052cc28f705d8d9a2f0c4ebf",
"assets/image/works/fastriver_tsuratan.jpg": "f9febf7577ae52fea25b5ad42b47ca47",
"assets/image/works/fastriver_tsuratan2.jpg": "445227adc1a70e216d6e6111faede2f7",
"assets/image/works/fastriver_tsuratan3.jpg": "69a9c1d73add745e97918cc872f115fb",
"assets/image/works/ff_othello.jpg": "0e63a50e8bda853e929a2ea857c05500",
"assets/image/works/k_building_cg.jpg": "b2a0f6f1766e16634fe26fd4f7c6a0b4",
"assets/image/works/k_building_dev.jpg": "019a929f1dce829fdef5f0de2bb97f49",
"assets/image/works/k_car_cg.jpg": "1bee759b1f8183ffdf38c4e09ffd5721",
"assets/image/works/k_car_dev.jpg": "815607750069218aa7204902486528ab",
"assets/image/works/k_room.jpg": "10e9a7509aa035586ac54e9d93879268",
"assets/image/works/k_sf.jpg": "3af629f9114ba63504b801ea3d351daa",
"assets/image/works/orfevre_btl.jpg": "4e5f3f140e92df923c131ca7b7b6d8ad",
"assets/image/works/orfevre_btl_dev.jpg": "9a2bb4a7df6a9866d86ae63413508120",
"assets/image/works/rinju_vividbeats.jpg": "5d4f8aecabdcc55007ff5a7c8ff3877c",
"assets/image/works/sho_atsumori1.jpg": "2701303b4505b84b27067613e3589bb1",
"assets/image/works/sho_atsumori2.jpg": "850dbcb58617a4b7969ca97dfd13eb05",
"assets/image/works/sho_atsumori_dev.png": "778e1e9f147f71a368a2b416a1f1a8b2",
"assets/image/works/sho_atsumori_title.png": "487b0a3473b09e1e30d6678e79d3bf15",
"assets/image/works/sorariku_iwanna.jpg": "50f2cf0bca29871b50cf1d8c98347891",
"assets/image/works/sorariku_iwanna2.jpg": "b886fa373f893b7181aaebd89061d525",
"assets/image/works/supercell_ai.jpg": "8d44712b51b31a5708d0ee5520f9152d",
"assets/image/yuzuka.jpg": "75675c5c288ee235a31e0ae8de6241b6",
"assets/image/yuzuka_rough.jpg": "e6f003851ceb91e7b1c2c1c6ac845a1c",
"assets/LICENSE": "1da0f8cd4f2e0745ae33954dd00968e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"icons/Icon-192.png": "57ec733482a5659268cf5a8547f5c276",
"icons/Icon-512.png": "5f7a47ee80b98e7da6b32109411f9bed",
"index.html": "91bdc45e47b5e045bfe6a12d6e0bfbbd",
"/": "91bdc45e47b5e045bfe6a12d6e0bfbbd",
"main.dart.js": "56559eda0162bc695a0c196b785a6159",
"manifest.json": "941641db9d08796ec4f44101267a92c5",
"splash.css": "b2f86e7bf80b2b07ec0c3669298a791e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
