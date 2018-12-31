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
    "revision": "b3f221d6634451f08bc101045b0929c5"
  },
  {
    "url": "about/index.html",
    "revision": "e0a81db1bb7f5e90a0b7e0681fe194d4"
  },
  {
    "url": "assets/css/0.styles.790faa45.css",
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
    "url": "assets/js/app.a01a6546.js",
    "revision": "0884cc7532ab5b0a29712ed6a4e5c0db"
  },
  {
    "url": "channel-guide/index.html",
    "revision": "79ed7972d7da994da6f4419dfbb407fc"
  },
  {
    "url": "events/index.html",
    "revision": "78bb786c19c79240f5702980315a1926"
  },
  {
    "url": "icon.png",
    "revision": "fc5c966e739131a64eab035c0f86ecb4"
  },
  {
    "url": "index.html",
    "revision": "02740324521ed40175dc39b7d24ed99c"
  },
  {
    "url": "resources/code-of-conduct/index.html",
    "revision": "0797add8cebab8900902ec1b14b5b45c"
  },
  {
    "url": "resources/contributing/index.html",
    "revision": "3d9362c00c8638ed2fb47ebb0e6d3053"
  },
  {
    "url": "resources/gig-post-formatting/index.html",
    "revision": "01ec25ada3510409681e9a1ab2f14ee9"
  },
  {
    "url": "resources/index.html",
    "revision": "c6a3e146b9f1d137c238efa4d7f13a53"
  },
  {
    "url": "resources/interview-prep/index.html",
    "revision": "33976a5f9dbdfbfa768b08fdac84bca1"
  },
  {
    "url": "resources/recruiter-guidelines/index.html",
    "revision": "5afb1a9a726c8058b732c8700c9407b4"
  },
  {
    "url": "resources/rules/index.html",
    "revision": "ef90af83d0e2226c984e4db438c56965"
  },
  {
    "url": "resources/welcome-to-denver/index.html",
    "revision": "ea2bb9b0136219b6c1a6fdb64dd85d5e"
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
