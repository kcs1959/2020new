'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "f26b2d773354ed84e9205fa343c33e1f",
"/assets\FontManifest.json": "a2b2a886f990d4d9f70684d43b9ac19f",
"/assets\fonts\corporate_logo_bold.ttf": "ffac0fbc30fbbfa74d32b4affe2ff16c",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\fonts\mplus_2p_bold.ttf": "3b5e66f61f1a20617fe90a437c87b079",
"/assets\fonts\mplus_2p_light.ttf": "12dd8476075fb889912b83c51109bc79",
"/assets\fonts\mplus_2p_regular.ttf": "5456795b9f2f8209cf944fb34032e8c7",
"/assets\image\atsumori.png": "f967ac280309f7db6cb09936c0c93b7c",
"/assets\image\beyondthelimit.png": "e203e4a8497130e460852d87b2420a65",
"/assets\image\carousel1.jpg": "5a8a650c9e486abcadb3daee01f4aae5",
"/assets\image\carousel2.jpg": "733a0b4faeb3d1205d32c5f5ad30c138",
"/assets\image\carousel3.jpg": "42c85e2e1438e57e03071945256afb15",
"/assets\image\carousel4.jpg": "fb451b10f61dbc1aa03272a2d3b7e783",
"/assets\image\carousel5.jpg": "9008360b9d39675a203be2c735468f2d",
"/assets\image\carousel6.jpg": "e950404728ef73df3fb9c090ce1d58b8",
"/assets\image\carousel7.jpg": "65af237236b2504ca6a53cb940c01e1b",
"/assets\image\carousel8.jpg": "6183a4739ac5acd09d4009aff4dfe140",
"/assets\image\carousel9.jpg": "8ec19737e3df25de900626ba770be87a",
"/assets\image\characters.jpg": "d738f086599e68205bd32dc9ea348f04",
"/assets\image\events.jpg": "b66b696f8064941c59b4eeec71027135",
"/assets\image\fastlogo.png": "e8931abfb3d29ea74731d1672fb0afbd",
"/assets\image\githublogo.png": "438c17272c5f0e9f4a6da34d3e4bc5bd",
"/assets\image\groupintroduce.jpg": "a9ff428a208b10b81c0afc0392bd7588",
"/assets\image\group_tekitou.png": "a6f8a0163c4ac65ccfc99fba2263cfd4",
"/assets\image\kcschann.png": "4325d71e8cfb04ec28790f3669dc01d0",
"/assets\image\kcsdragon.png": "3e6600b684400a16fc70033d3c314c3b",
"/assets\image\kcsdragonlogo.png": "023b88ba36f7f67e61e06151048a31ad",
"/assets\image\kcslogo.png": "c5085416b3794af00758ae887cf29fb9",
"/assets\image\orfevrelogo.jpg": "e4dfda0f4f9524b94ff4b8d2347b9388",
"/assets\image\topbackground.jpg": "a1afaaf358b4060129b19f5eb541ff02",
"/assets\image\top_ai.png": "5214e07f560476d060b3e7162a448a04",
"/assets\image\top_blender.png": "4c965d162469358bbe7b32bf59edd7f7",
"/assets\image\top_dtm.png": "5141ea6c9de5b03459c520d199f6222f",
"/assets\image\top_unity.png": "175c3fb12b42210e32d666155022140f",
"/assets\image\top_web.png": "09d52f3e936e3a0cc96e3be888b083c0",
"/assets\image\tsuratan.png": "63c9195076c405a4daa9788996889449",
"/assets\image\twitterlogo.png": "fef946b8bba756359e2a1e87ccd915ea",
"/assets\image\uzuka.jpg": "1cc11a22c9e338d39f2bbf5bab37c42c",
"/assets\image\uzuka_rough.jpg": "1022ef4901a14a7ddcdec247b38d7e3d",
"/assets\LICENSE": "35e1675b285097473af77635a2872b46",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "bae6ab205859fae82599973bbff4f398",
"/main.dart.js": "e118aa561561a7e6cf5245160091cc3b",
"/manifest.json": "86ecbf1cf049fd3ea90a6e9e6a914fa4"
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
