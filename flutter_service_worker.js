'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "9351f081ba6592ed0dc0f46115f005f6",
"/assets\FontManifest.json": "04cae76867ee9ed7ca9d2385f6c0dcf1",
"/assets\fonts\anzumoji.ttf": "d81461ce27ce5b4761426f36ecfaf461",
"/assets\fonts\corporate_logo_bold.ttf": "ffac0fbc30fbbfa74d32b4affe2ff16c",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\fonts\mplus_2p_bold.ttf": "3b5e66f61f1a20617fe90a437c87b079",
"/assets\fonts\mplus_2p_light.ttf": "12dd8476075fb889912b83c51109bc79",
"/assets\fonts\mplus_2p_regular.ttf": "5456795b9f2f8209cf944fb34032e8c7",
"/assets\image\atsumori.jpg": "2830f9cf10f37614928fa80257ba2a53",
"/assets\image\beyondthelimit.jpg": "693bee933723c7d669f4fe079208ca77",
"/assets\image\characters.jpg": "f02e5993fd8a1483df4c4742ed2deefe",
"/assets\image\events.jpg": "90de6a083c69b855afa288f81d8a5c84",
"/assets\image\fastlogo.png": "5ee93c1bd4af50c0279d442e1f7f5521",
"/assets\image\githublogo.png": "1e11abcd89f9a1a144444f2a1eb33399",
"/assets\image\groupintroduce.jpg": "f9a34d8baf04fe02e40917a9b9bc9720",
"/assets\image\groups\ai.jpg": "952ba7a73e33a0286d2a8e4bfbfa5221",
"/assets\image\groups\blender.jpg": "716fdecfdc2e9b6398622bb1fc396968",
"/assets\image\groups\dtm.jpg": "1fab62d4871bbe411b5803406f66582b",
"/assets\image\groups\unity.jpg": "027d4ba85fd2ff48d6736f98628617e4",
"/assets\image\groups\web.jpg": "cd2a9f76d82c2974ac55c00f43471dba",
"/assets\image\kcschann.png": "38e0b29c36f7e1ec488a9a332fc21735",
"/assets\image\kcschann_standing.png": "6b887e2b76a0e703e5caa8af5e2df17d",
"/assets\image\kcsdragon.png": "b9228c48cb200160772431f13d7bb4dd",
"/assets\image\kcsdragonlogo.png": "fae07679bef9bfcca264eac3dbb3e416",
"/assets\image\kcslogo.png": "6b364aaa16f30f466d60aa7c5d34ef70",
"/assets\image\linelogo.png": "828b50ade9a50d18c917484ba688930f",
"/assets\image\orfevrelogo.jpg": "89e86956182c09a56dac0c131be14855",
"/assets\image\topbackground.jpg": "a34d856d29aef32b6055ca351a903c4d",
"/assets\image\top_ai.png": "456c33f9106775a24e065fa7833c3eda",
"/assets\image\top_blender.png": "063a1f50821ba17877447aabd6b1e3fe",
"/assets\image\top_dtm.png": "e84c7ccc01d49fe1999c4b536ba853d5",
"/assets\image\top_unity.png": "38577d49207415fc1441736f7911d399",
"/assets\image\top_web.png": "c6d42272b6a45d163affc4e57d7e0a46",
"/assets\image\tsuratan.jpg": "bcb34ed8d882803d6606d5ee0ef0e29a",
"/assets\image\twitterlogo.png": "c3e4ca18065f182967f530f2a6abd340",
"/assets\image\uzuka.jpg": "75675c5c288ee235a31e0ae8de6241b6",
"/assets\image\uzuka_rough.jpg": "e6f003851ceb91e7b1c2c1c6ac845a1c",
"/assets\LICENSE": "7b7d48938be4b6bf0cc4b275dd91afb0",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "57ec733482a5659268cf5a8547f5c276",
"/icons\Icon-512.png": "5f7a47ee80b98e7da6b32109411f9bed",
"/index.html": "97ba40a1495ba3ecebb49bfcba13093b",
"/main.dart.js": "6413944bd1a1c591387b5776c390bf5c",
"/manifest.json": "86ecbf1cf049fd3ea90a6e9e6a914fa4",
"/splash.css": "b2f86e7bf80b2b07ec0c3669298a791e"
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
