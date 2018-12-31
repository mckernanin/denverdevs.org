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
    "revision": "3f2b758264e0d10768d9d8f99e36a787"
  },
  {
    "url": "about/index.html",
    "revision": "51b3d59d52902dcd45df42d4aca29462"
  },
  {
    "url": "assets/css/0.styles.169f90c3.css",
    "revision": "25649639b506673e49c9d7d97208e39f"
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
    "url": "assets/js/10.27cc5e10.js",
    "revision": "bb40fb09ffaae86f4545549727518d14"
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
    "url": "assets/js/14.df476c3b.js",
    "revision": "c8ebb3e501d24311bd5269b94d7c4406"
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
    "url": "assets/js/8.d71dbc69.js",
    "revision": "46baa6b40e53e559ca5ac4e2ae94da09"
  },
  {
    "url": "assets/js/9.8423edbd.js",
    "revision": "7b0166ee667eb6f2acae31764d62b9a5"
  },
  {
    "url": "assets/js/app.6ae6d8ff.js",
    "revision": "a3d9e8fc9ab3d64935c51a4bc71177e3"
  },
  {
    "url": "channel-guide/index.html",
    "revision": "664b2774cda1a05c120c3a78e8176dbd"
  },
  {
    "url": "events/index.html",
    "revision": "b8506043c266e62dd05198141eefe4e9"
  },
  {
    "url": "icon.png",
    "revision": "fc5c966e739131a64eab035c0f86ecb4"
  },
  {
    "url": "index.html",
    "revision": "be7e3c4f652c7ade8eb98d8606723b55"
  },
  {
    "url": "resources/code-of-conduct/index.html",
    "revision": "4ab4e74d038e364b43671628be35043c"
  },
  {
    "url": "resources/contributing/index.html",
    "revision": "4b576ab4fc03c4d6ee9b9f0088a35067"
  },
  {
    "url": "resources/gig-post-formatting/index.html",
    "revision": "c425363a4245e29eb7f0c0430702daec"
  },
  {
    "url": "resources/index.html",
    "revision": "91ed778ab41d0c6d4bddea7892af960c"
  },
  {
    "url": "resources/interview-prep/index.html",
    "revision": "124326d575d7ce997d81adf4c320bc13"
  },
  {
    "url": "resources/recruiter-guidelines/index.html",
    "revision": "6f2657beeeb0d48dd3c7750405378fa7"
  },
  {
    "url": "resources/rules/index.html",
    "revision": "f60b7ec9da42f9411c23227e94e0013e"
  },
  {
    "url": "resources/welcome-to-denver/index.html",
    "revision": "986044297eb0e82ffaa7fbdffb0c35bf"
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
