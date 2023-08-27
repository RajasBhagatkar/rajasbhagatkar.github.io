---
title: Turn existing website to PWA in just 3 simple steps
slug: convert any website into a pwa in just 3 simple steps
lang: en-In
image: /img/blog/turn-existing-website-to-pwa-in-1-minute-using-pwainit.png
---

## So what is PWA?
PWA is **prograssive web app** enables websites to function more like native mobile apps in exchange for some flexibility. You get native mobile app functionality (or close to it) without all the overhead of app store approvals and tones of platform-specific native code. Users can install a progressive web app to their home screen and launch it just like a native app. However, the app is launched into a pseudo-app frame that has some restrictions and only allows access to pages that are sub-paths of the initial path of the progressive web app. They also must be served over HTTPS. It is light, fast and secure.


## Who can turn thier site into a PWA?
Anyone can turn their website into a PWA. From individuals like bloggers and influencers who want their users to easily access thier site, to small, medium, and large businesses. With great features like geolocation, customers see nearby stores or dirving directions.

There is also the **media API** that accesses a device's native cameras which can be immensely helpful, quick, and cheap for instance in identifying oneself for certain services like registering on Airbnb or at the notary for certain legal services.

## What type of websites can be turned into PWA?
Something happening progressively means gradual development - in stages over time. In this case of web apps, progressive means that no matter the type of web application, it can be converted into a PWA.

## How to turn a website into a PWA

For Converting a web app into PWA you should already have a website to convert. if not, there are many tutorials available on youtube, forums, etc. There are four primary building blocks for PWAs - **service workers**, **application manifest**, **background synchronization**, and the **web push**.

### Create files
at the base of you project create some files
- sw.js (service workers)
- manifest.json (application manifest)

### Service workers
Open your service worker file **sw.js** and input your code as it appears in the screenshot below. If you have CSS, app.js files and any other files for running your website, add them at line size in the code below, where index.html is. 

```js
// On install - the application, shell cached
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('sw-cache').then(function(cache) {
            // Static Files that make up the application shell are cached
            return cache.add("index.html"); 
           /**
            * if you have css file and app.js files
            * Please add here as well, to be cached! 
            * we have added single index.html as we have a simple app 
            * but your website may uses many include them. 
            */
        })
    );
})

// with request network
self.addEventListener("fetch", function(event) {
    event.respondWith(
        // Try the cache
        caches.match(event.request).then(function(response) {
            // return it if there is a response, or else fetch again
            return response || fetch(event.request);
        })
    );

})
```

## App manifest
Next, create your application manifest by opening the manifest.json file you already made in the beginning Now fill the manifest.json file with the code below

```json
{
    "short_name": "WD1",
    "name": "Wiredelta PWA",
    "icons": [
        {
            "src": "/images/wdicon1.png",
            "type": "image/png",
            "sizes": "144x 144"
        },
        {
            "src" : "/images/wdicon2.png",
            "type": "image/png",
            "sizes" : "144x144"
        }
    ],
    "start_url": "/index.html",
    "background_color": "#000000",
    "display": "standalone",
    "theme_color": "#4dbaa8"
}
```

Add your icons into the image folder if are not already there. Please remember that the icons should be in eight different sizes ranging from 72×72 to 512×512 to cater to various devices. Note that the icon sizes shown above are just an example.

After creating the manifest.json file, connect it to your web application in order to access and add the home screen functionality and icon installation. We make the connection by adding the following code in the head of the index.html.

```html
<meta name="theme-color" content="#4dbaa8" />
<link rel="manifest" href="manifest.json">
```

Next, we will have to place a script in the head tag just after the manifest link. This is because the PWA needs it when the page loads, and for caching files. Below is the piece of code for the script.

```html
<script>
    // if browser supports worker
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register('sw.js')
    }
</script>
```

When you finish writing the script code, your index.html file should look like below snippets

```html
<meta name="theme-color" content="#4dbaa8" />
<link rel="manifest" href="manifest.json">

<script>
    // if browser supports worker
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register('sw.js')
    }
</script>
```

Congratulations, you have now learned how to turn a website into a PWA. To confirm, open your application in a web browser that supports service workers like Chrome. Your new PWA should look something like the screenshot below.

![pwa-browser-image-screenshot](https://wiredelta.com/wp-content/uploads/2020/09/installwiredeltaPWA-1024x393.png)

## Summing up
In a world where cross-platform development is rapidly taking over native development, Progressive Web Applications seem like the answer we have all been looking for. For those who want a PWA of their own, they are faster than native applications, easier to develop and maintain, and more affordable.

Moreover, they are more enjoyable for users as well, as they live in browsers, so they are easy to find and install, and they are super lightweight, saving a lot of storage space.

Not to mention that, if you follow this step-by-step guide, you will be able to turn a website into a PWA in no time. Whether you are building a new website, managing a modern platform, or a legacy system. But, if you still have questions, you can do quick google search.

all your answers are just one google away!!! 😅😉🤗

reference  
- [How To Turn A Website Into A PWA by mark dencker](https://wiredelta.com/how-to-turn-a-website-into-a-pwa/)
- [Convert any website into a PWA by Tharun Shiv](https://dev.to/developertharun/convert-any-website-into-a-pwa-in-just-3-simple-steps-35pp)