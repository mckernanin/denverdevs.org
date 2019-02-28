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
    "revision": "36741345063d7058beaf7c23cec935f1"
  },
  {
    "url": "about/index.html",
    "revision": "ab1d01c23b9744116b45cab56a63c356"
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
    "url": "assets/js/10.2abd9180.js",
    "revision": "a9f57ef5584fce4a9192cedf72eca203"
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
    "url": "assets/js/4.f5fb59f6.js",
    "revision": "3f25573e419494acb57584c57e787819"
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
    "url": "assets/js/app.9e4636c9.js",
    "revision": "3b6cc2cf4109492efb32f2e4ae4fd25e"
  },
  {
    "url": "channel-guide/index.html",
    "revision": "997b7170c329df4907e85c090c9526cb"
  },
  {
    "url": "events/index.html",
    "revision": "0f4e48ee5ea4c618d7ddfd4b5326067f"
  },
  {
    "url": "icon.png",
    "revision": "fc5c966e739131a64eab035c0f86ecb4"
  },
  {
    "url": "index.html",
    "revision": "fe9cb04709ddc88c464c1f2cf57302cd"
  },
  {
    "url": "resources/code-of-conduct/index.html",
    "revision": "69a55b8abef150ce7041ffe53e50472b"
  },
  {
    "url": "resources/contributing/index.html",
    "revision": "53b0b4f984da428d3a335411a691c25d"
  },
  {
    "url": "resources/gig-post-formatting/index.html",
    "revision": "b4b4fb35efce088fbdb965579ec1f3c8"
  },
  {
    "url": "resources/index.html",
    "revision": "c2404b336f1bcecd21576eb74dde413b"
  },
  {
    "url": "resources/interview-prep/index.html",
    "revision": "0838d234f20d53f4e4f3f0ae05734c56"
  },
  {
    "url": "resources/recruiter-guidelines/index.html",
    "revision": "401d386a192c14977896172a942e6141"
  },
  {
    "url": "resources/rules/index.html",
    "revision": "41b519253425de0ab947dd066ac37664"
  },
  {
    "url": "resources/welcome-to-denver/index.html",
    "revision": "8adb8d3c788ad39ae26ca2250b476cf7"
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
