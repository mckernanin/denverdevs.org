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
    "revision": "2327ad2f511e66b4bc42a8075c33036e"
  },
  {
    "url": "about/index.html",
    "revision": "9be977f45b6a2105daff948389cfd6a2"
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
    "url": "assets/js/10.5166019b.js",
    "revision": "dd7b1033ea9230b64bbb656ad2be61cb"
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
    "url": "assets/js/app.b69a1402.js",
    "revision": "33a58e8792a89a3cb0bd97e811cf07d0"
  },
  {
    "url": "channel-guide/index.html",
    "revision": "8286ee6dcec21ad5c5784ab7bcd9ebaf"
  },
  {
    "url": "events/index.html",
    "revision": "8cf041edb82a7b393d808d905e82d5c9"
  },
  {
    "url": "icon.png",
    "revision": "fc5c966e739131a64eab035c0f86ecb4"
  },
  {
    "url": "index.html",
    "revision": "285a34781bd51bfca6b9c5a0251e2a18"
  },
  {
    "url": "resources/code-of-conduct/index.html",
    "revision": "da4f4a7e1c31f49c34556eb349899d58"
  },
  {
    "url": "resources/contributing/index.html",
    "revision": "705757f55cf726a159277108c7a2cf11"
  },
  {
    "url": "resources/gig-post-formatting/index.html",
    "revision": "906b34064ef79723f84f095698c3c5c5"
  },
  {
    "url": "resources/index.html",
    "revision": "a20a4d5d59f3e7174b92fe46c2044560"
  },
  {
    "url": "resources/interview-prep/index.html",
    "revision": "6544cdde820b42920dc9fd5598d748f5"
  },
  {
    "url": "resources/recruiter-guidelines/index.html",
    "revision": "85825cc5540a4120daa8f784e6cd1996"
  },
  {
    "url": "resources/rules/index.html",
    "revision": "b6ca7105ef8a338491fa5a34b442f904"
  },
  {
    "url": "resources/welcome-to-denver/index.html",
    "revision": "1b4cd4980bf3761ca17e35ecc29b92a7"
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
