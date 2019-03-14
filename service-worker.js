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
    "revision": "191eb14c4a3286012a2e7a14ae3f71af"
  },
  {
    "url": "about/index.html",
    "revision": "f4a3e1e3f557ce823828079519af619e"
  },
  {
    "url": "assets/css/0.styles.fae4fda9.css",
    "revision": "e9c69eb18a49d6e73af822052afd3c65"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9f19c473.js",
    "revision": "ddee474b4b9ab86205d7fe0fb996e2d0"
  },
  {
    "url": "assets/js/10.7ef9d123.js",
    "revision": "b3b7fcf0fdfef849e1ca7a515fb9da97"
  },
  {
    "url": "assets/js/11.18afd1a7.js",
    "revision": "444305b1a472574cf63503bda4229bad"
  },
  {
    "url": "assets/js/12.ac9e6b2b.js",
    "revision": "e2a3a6f222c7183445b8fd043e17de3e"
  },
  {
    "url": "assets/js/13.a8aa06ca.js",
    "revision": "c7245152b78f744b78f6966b48b685b5"
  },
  {
    "url": "assets/js/14.fc63c751.js",
    "revision": "1f431b3884df48abceac2ceca32fe9a0"
  },
  {
    "url": "assets/js/15.75e51fb1.js",
    "revision": "78fb1cfe47a7cfa0caee704f4e0816e7"
  },
  {
    "url": "assets/js/16.815d4c09.js",
    "revision": "8f014f5a8d76b873a34aa5260097c955"
  },
  {
    "url": "assets/js/17.f4d268ab.js",
    "revision": "f3699c2d4357654bb877a67106be2b6d"
  },
  {
    "url": "assets/js/18.ba9f25c7.js",
    "revision": "8564925e01509cac349ee1b1c770d00d"
  },
  {
    "url": "assets/js/2.c0e22818.js",
    "revision": "749522777607311900a31e01f17e1a8a"
  },
  {
    "url": "assets/js/3.d66216e1.js",
    "revision": "3bf97ecedc5c51bbe9ab4d922c04dfa9"
  },
  {
    "url": "assets/js/4.256754b3.js",
    "revision": "4a4eb80101d98471438c0a1b1a6806ee"
  },
  {
    "url": "assets/js/5.bfe1f724.js",
    "revision": "278c7c9cfb51121311959fe34a0a3d85"
  },
  {
    "url": "assets/js/6.d27e788a.js",
    "revision": "fbebd6a09ac3b8ae096da3795db96709"
  },
  {
    "url": "assets/js/7.1a5ce34c.js",
    "revision": "e2c542273b70d32eb66b0f3280dbb614"
  },
  {
    "url": "assets/js/8.15fa1c3f.js",
    "revision": "baf4c4bbad5578de72d05632cb127ac5"
  },
  {
    "url": "assets/js/9.d0be9d7a.js",
    "revision": "2a22d15873514594f51feea512b235b2"
  },
  {
    "url": "assets/js/app.494e29d6.js",
    "revision": "4c81feca56927694cf821ce30e7115fb"
  },
  {
    "url": "channel-guide/index.html",
    "revision": "5feae0aa42ae714c83e3d16c70a67cba"
  },
  {
    "url": "events/index.html",
    "revision": "3a4c4c6d9406b7659d6d3378f9a56e67"
  },
  {
    "url": "icon.png",
    "revision": "fc5c966e739131a64eab035c0f86ecb4"
  },
  {
    "url": "index.html",
    "revision": "b4d26f924708a8fec4b3144f4fb714c4"
  },
  {
    "url": "resources/code-of-conduct/index.html",
    "revision": "6b13aecc84e9107bc3822b690929ee34"
  },
  {
    "url": "resources/contributing/index.html",
    "revision": "5a2f0d320ac458b575c3bb1256c990c3"
  },
  {
    "url": "resources/gig-post-formatting/index.html",
    "revision": "7ead495c155468e1d03691c08fc90922"
  },
  {
    "url": "resources/index.html",
    "revision": "eaf293100c0a09577e1862fafa4dce98"
  },
  {
    "url": "resources/interview-prep/index.html",
    "revision": "c5809263bf556374fa835f259bc3e5f9"
  },
  {
    "url": "resources/recruiter-guidelines/index.html",
    "revision": "6bfa6f5da92245ae56e72d310dbe3835"
  },
  {
    "url": "resources/rules/index.html",
    "revision": "ccdf52e79c8768814ad5a3352c375e26"
  },
  {
    "url": "resources/welcome-to-denver/index.html",
    "revision": "8d72479207831cf69f9bcac621413007"
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
