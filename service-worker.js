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
    "revision": "cebb795b335f53d9e74a45f1a5384075"
  },
  {
    "url": "about/index.html",
    "revision": "9509a56adde6b7f984da19cb77f5ea4e"
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
    "url": "assets/js/12.83203ea2.js",
    "revision": "b7dc626cf452df7c39510ec0261c8a54"
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
    "url": "assets/js/5.8939c453.js",
    "revision": "f1029526dad3ca59368c2f6a337d3d2e"
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
    "url": "assets/js/app.aa69543c.js",
    "revision": "f983b31d4adb4addfc529b68110949b8"
  },
  {
    "url": "channel-guide/index.html",
    "revision": "d162a7f428dd8e439f5db7dd20b9024d"
  },
  {
    "url": "events/index.html",
    "revision": "15f6e2683ba9cceb5d3b820671dd451c"
  },
  {
    "url": "icon.png",
    "revision": "fc5c966e739131a64eab035c0f86ecb4"
  },
  {
    "url": "index.html",
    "revision": "15c165845ead2ffdde26d158d4660ff8"
  },
  {
    "url": "resources/code-of-conduct/index.html",
    "revision": "3ac3705b06621c4a58e18ed17d724b5f"
  },
  {
    "url": "resources/contributing/index.html",
    "revision": "611d7197f47d210d755f27c29b52104e"
  },
  {
    "url": "resources/gig-post-formatting/index.html",
    "revision": "46d9487ecdf38c9bc8cadf0b31912d1c"
  },
  {
    "url": "resources/index.html",
    "revision": "332bf68f0a0eb68fb3992a1dc2044ddc"
  },
  {
    "url": "resources/interview-prep/index.html",
    "revision": "90454c8425465273130a1e5824561181"
  },
  {
    "url": "resources/recruiter-guidelines/index.html",
    "revision": "900e61a6af9829880acf93ee33dfe298"
  },
  {
    "url": "resources/rules/index.html",
    "revision": "fc2c557733467847c34bd14a36d483ae"
  },
  {
    "url": "resources/welcome-to-denver/index.html",
    "revision": "9f91b1343b8d89386928ef67ce685a27"
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
