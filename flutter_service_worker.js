'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "0b399383ff74ece268f5bf7f845e8857",
"/assets\FontManifest.json": "f93df6432b5a99647510dfa6ddd48ce5",
"/assets\fonts\corporate_logo_bold.ttf": "ffac0fbc30fbbfa74d32b4affe2ff16c",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\fonts\mplus_2p_bold.ttf": "3b5e66f61f1a20617fe90a437c87b079",
"/assets\fonts\mplus_2p_light.ttf": "12dd8476075fb889912b83c51109bc79",
"/assets\fonts\mplus_2p_regular.ttf": "5456795b9f2f8209cf944fb34032e8c7",
"/assets\image\atsumori.png": "f967ac280309f7db6cb09936c0c93b7c",
"/assets\image\beyondthelimit.png": "e203e4a8497130e460852d87b2420a65",
"/assets\image\characters.jpg": "d738f086599e68205bd32dc9ea348f04",
"/assets\image\events.jpg": "b66b696f8064941c59b4eeec71027135",
"/assets\image\fastlogo.png": "e8931abfb3d29ea74731d1672fb0afbd",
"/assets\image\githublogo.png": "438c17272c5f0e9f4a6da34d3e4bc5bd",
"/assets\image\groupintroduce.jpg": "a9ff428a208b10b81c0afc0392bd7588",
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
"/assets\LICENSE": "3847ab82e23cb9e494acbf558bdeb8a8",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "57ec733482a5659268cf5a8547f5c276",
"/icons\Icon-512.png": "5f7a47ee80b98e7da6b32109411f9bed",
"/index.html": "730597cd4b13863214d971c7fddbee2c",
"/main.dart.js": "57ce026d6686942a6647780643b13c9f",
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
