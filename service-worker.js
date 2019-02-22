/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6b1fa18651043e3aaaf81879b64ab0ef"
  },
  {
    "url": "about/index.html",
    "revision": "554a9c1d270bb3f0cdb5d33a31b3d0d1"
  },
  {
    "url": "assets/css/0.styles.b6ba91f6.css",
    "revision": "daecbbbd3043ecfd98f14b45c03cff93"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cf8ef998.js",
    "revision": "4363690c1e5c8b2c0b230b6e811cd752"
  },
  {
    "url": "assets/js/10.8e205cb8.js",
    "revision": "46a87b2c87ffb41f75f16327ffb039e1"
  },
  {
    "url": "assets/js/11.8446fb2f.js",
    "revision": "ad2307aabc61ba416d5ef3508fbc1f42"
  },
  {
    "url": "assets/js/12.b0bee101.js",
    "revision": "64aa967696f2748e724fb952b76e63fa"
  },
  {
    "url": "assets/js/13.a0d18717.js",
    "revision": "950a6364545ea75a912aa4310dabdf88"
  },
  {
    "url": "assets/js/14.6e6b8e82.js",
    "revision": "88b96f687749e5e48aa8bda5a78ec069"
  },
  {
    "url": "assets/js/15.bdea1fe3.js",
    "revision": "0d794a4c23b80265fc1981d07307bef3"
  },
  {
    "url": "assets/js/16.3b791988.js",
    "revision": "fa9c824fad77383e284a4a64c97b1fd9"
  },
  {
    "url": "assets/js/17.91aa0193.js",
    "revision": "3aec355114ed0235cfd4b29df867a420"
  },
  {
    "url": "assets/js/18.96addebb.js",
    "revision": "bcaa5ce623c9799d0573d8e13cff357e"
  },
  {
    "url": "assets/js/2.8a36ab39.js",
    "revision": "420509bf4e4a535ebf278aecf822d28b"
  },
  {
    "url": "assets/js/3.db7c91c8.js",
    "revision": "c4e0fceaeb3cb33c4f060a0e8c538235"
  },
  {
    "url": "assets/js/4.9d4374e6.js",
    "revision": "7fd58501acac126677908506faf1fd30"
  },
  {
    "url": "assets/js/5.2ce0aca1.js",
    "revision": "bdede8b066f0fe582092507a1d706e3f"
  },
  {
    "url": "assets/js/6.d46e72fd.js",
    "revision": "2c8e57634cd9a79f7c788d62ff866e55"
  },
  {
    "url": "assets/js/7.63650f6d.js",
    "revision": "4d956d1d0b73097832988c52b4c926b6"
  },
  {
    "url": "assets/js/8.cbb5b084.js",
    "revision": "28d80cf82418fddb2d11efaae90dd36e"
  },
  {
    "url": "assets/js/9.8423edbd.js",
    "revision": "7b0166ee667eb6f2acae31764d62b9a5"
  },
  {
    "url": "assets/js/app.38ff9ab7.js",
    "revision": "36e36a10887dbbcc6d3be5dd8d66d5bd"
  },
  {
    "url": "channel-guide/index.html",
    "revision": "f45b1148f4866c4dd0c8d5c4c5de36af"
  },
  {
    "url": "events/index.html",
    "revision": "82ba59997a935c59f2cd5c45841adca5"
  },
  {
    "url": "icon.png",
    "revision": "fc5c966e739131a64eab035c0f86ecb4"
  },
  {
    "url": "index.html",
    "revision": "761411830ef23d31f474656d30ef8c2d"
  },
  {
    "url": "resources/code-of-conduct/index.html",
    "revision": "4fcf79702dfd966cc66639efc238af70"
  },
  {
    "url": "resources/contributing/index.html",
    "revision": "3843a26c857c2700f74cdbf26008300f"
  },
  {
    "url": "resources/gig-post-formatting/index.html",
    "revision": "eeaf1ea2be7cff6623add7fcb2319409"
  },
  {
    "url": "resources/index.html",
    "revision": "26c15451d7fa239032bc49087b81f3d1"
  },
  {
    "url": "resources/interview-prep/index.html",
    "revision": "b29ca4175cebb79c3466a269ee13831f"
  },
  {
    "url": "resources/recruiter-guidelines/index.html",
    "revision": "5c3d3402535ab36c1c6713840390c6f8"
  },
  {
    "url": "resources/rules/index.html",
    "revision": "67e2000dc95582bc1923e90fc2f831a0"
  },
  {
    "url": "resources/welcome-to-denver/index.html",
    "revision": "5a2707a3b9f4d8100a123d4a281290f6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
