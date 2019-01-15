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
    "revision": "fac3228f65656bfe10a4af24e40b96e2"
  },
  {
    "url": "about/index.html",
    "revision": "8c84189a9ff328226a2c928ba5ce4fdf"
  },
  {
    "url": "assets/css/0.styles.a469306a.css",
    "revision": "8ae3131bbba4581e4aeee60dab03ebff"
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
    "url": "assets/js/10.705ee21b.js",
    "revision": "16ccdd59eaa7178e3106d34dc02c52a7"
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
    "url": "assets/js/16.dc75a250.js",
    "revision": "11c18d7436bb1be72f4dc1588859931a"
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
    "url": "assets/js/app.114cbbe0.js",
    "revision": "23149cecaa569b166a627fb3cd948ee6"
  },
  {
    "url": "channel-guide/index.html",
    "revision": "56ba40889d15d2c26071d58b23c0e70a"
  },
  {
    "url": "events/index.html",
    "revision": "7218941c35417380aa3f679603cc0042"
  },
  {
    "url": "icon.png",
    "revision": "fc5c966e739131a64eab035c0f86ecb4"
  },
  {
    "url": "index.html",
    "revision": "72fd168583fbeb048102273c09c46d16"
  },
  {
    "url": "resources/code-of-conduct/index.html",
    "revision": "a99d6b65a68e6cef4851fd8e7159748a"
  },
  {
    "url": "resources/contributing/index.html",
    "revision": "7a58a18a288d6f61a3d40305a440ee41"
  },
  {
    "url": "resources/gig-post-formatting/index.html",
    "revision": "466cd12349f31fb37f0fd34aea28a6b6"
  },
  {
    "url": "resources/index.html",
    "revision": "880c89e00baca818aa52150d793d6836"
  },
  {
    "url": "resources/interview-prep/index.html",
    "revision": "67710c4dea5d1c082d55dd4fd52fe691"
  },
  {
    "url": "resources/recruiter-guidelines/index.html",
    "revision": "323593ac167d473c737d4e6ddfb01716"
  },
  {
    "url": "resources/rules/index.html",
    "revision": "28d71d6ced69873a44866b4033cf6099"
  },
  {
    "url": "resources/welcome-to-denver/index.html",
    "revision": "f6a0b94db7d66a67bea4e27543bd3046"
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
