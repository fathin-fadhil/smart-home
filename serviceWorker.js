const staticSmartHome = "smart-home-dashboard-v1"
const assets = [
  "./",
  "index.html",
  "fan.html",
  "lightsw.html",
  "login.html",
  "temp.html",
  "watertap.html",
  "css/bootstrap.min.css",
  "css/style-login.css",
  "css/style.css",
  "img/fan-auto.png",
  "img/fan-ic.png",
  "img/fan-off.png",
  "img/fan-on.png",
  "img/favicon.ico",
  "img/hum.png",
  "img/lighting.png",
  "img/smoke-detector.png",
  "img/temp-hum.png",
  "img/water-tap.png",
  "img/icons/icon-128x128.png",
  "img/icons/icon-144x144.png",
  "img/icons/icon-152x152.png",
  "img/icons/icon-192x192.png",
  "img/icons/icon-384x384.png",
  "img/icons/icon-512x512.png",
  "img/icons/icon-72x72.png",
  "img/icons/icon-96x96.png",
  "js/fan.js",
  "js/lamppage.js",
  "js/script-login.js",
  "js/script.js",
  "js/tap.js",
  "js/temp.js",
  "src/gauge.js",
  "src/gaugeHum.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticSmartHome).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("activate", evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== staticSmartHome)
        .map(key => caches.delete(key))
      )
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})