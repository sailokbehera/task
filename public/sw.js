if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let a={};const o=e=>i(e,t),r={module:{uri:t},exports:a,require:o};n[t]=Promise.all(s.map((e=>r[e]||o(e)))).then((e=>(c(...e),a)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Bottom vector.svg",revision:"04c4b101bd8be220c9aac03644efc70f"},{url:"/Frame 32.png",revision:"efde1788f20b29fe8a5aef7230953e56"},{url:"/Frame 33.png",revision:"7d5465d43de8e99550849f8722c880bd"},{url:"/Group 1039 (1).png",revision:"69fa683e70f104ed36f1c20bd026f12a"},{url:"/Group 1040 (1).png",revision:"a955bc75abb526c2a0449d94c7dfdfcd"},{url:"/Group 1041.png",revision:"618c8203cc36ea489dbe44a9cd67b53a"},{url:"/Group 4.svg",revision:"d0aec2e07c323b467d6ffa5f176115c0"},{url:"/Group 4412.png",revision:"2204925b2d4f54166d617dd6cc6cbed4"},{url:"/Heart.png",revision:"9e9f4ece6c1734918ae52ee332c901c1"},{url:"/Mask Group 1.png",revision:"7ebcc6eacc026a849a6c244805d875cd"},{url:"/Mask Group.svg",revision:"5ab3402954953db89c26488e756709bf"},{url:"/Path 1982.png",revision:"b18507cb659be657210012a13cbba028"},{url:"/Path 1983.png",revision:"00606284e0fc67021a0a8863dd9cde37"},{url:"/Rectangle 1146.png",revision:"7e3e939d06ecca644612461545962d64"},{url:"/Tick Square.png",revision:"41bacf2335a56c5a22cf34f5e9afb7b9"},{url:"/Top Vector.svg",revision:"b47ba5d5888ac1c4d2e0825ad8d9da19"},{url:"/_next//static/media/3 User.ab92dbcb.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/Attendence.bf9911c3.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/Group 1038.95370efb.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/Group 1039 (1).722e28e7.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/Group 1040 (1).ebfc71e5.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/Group 1041.dcb27da7.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/Image.cc14c90d.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/Location.31bc6ed6.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/PointLeft.0e29390d.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/PointRight.14c87f68.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/RedDot.32440845.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/calendarSelected_icon.e4eb8cb2.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/calendar_icon.1ce956f9.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/chatSelected_icon.7e3d13ec.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/chat_icon.c18ec1eb.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/dashboardSelected_icon.59a42888.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/dashboard_icon.94376b20.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/kemnu_logo.d6919ab0.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/kemnu_logo_white.a9d4c16c.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/notificationSelected_icon.fba93949.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/notification_icon.e6267c6a.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/path4.8af82b3c.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/settingsSelected_icon.962e59e5.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/settings_icon.35e96d43.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/signout_icon.56f351f1.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/usersSelected_icon.4433e746.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next//static/media/users_icon.6f0fa600.png",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/12-70f864dee559dc0f.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/215-615f248ffa3c22a3.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/393-1eeccf9a221bdaa5.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/419-42a73cbf69218f1e.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/423-5fdd4ca49004a601.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/475-8390f094e07cb451.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/49-734ef0985179ad4f.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/651.e7ad805f32a091cd.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/691-1e1690defd345c4a.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/73-bf1c7613cc60d943.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/733-7b0677e552d6aa7f.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/757-1e5a7caab9d3190d.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/813-d56561545b925bb1.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/891-bd309baf68cde902.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/903-595936a39b0d2a26.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/main-6e10b7b76b7124dc.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/_app-dc47861db89888e2.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/_error-1f95674706ce531a.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/about-19638cf2c87eb94c.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/calendar-fa73c724fec1346c.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/groups-543e5e36e5cd4bf0.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/index-94b983d485371ba0.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/interest-951cfcf795b7e7e2.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/login-d7257b95e2a55077.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/org-login-477a0b37b08a20c7.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/org-signup-7d277769df26d15a.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/plans-1a057450319fb846.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/privacy-policy-4a6730e67ed0e774.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/register-9f3ee3d0364d4b27.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/settings-5289e786e32f9881.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/terms-40875c1f4afde829.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/pages/users-4588224592f4b110.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/chunks/webpack-eef5f79c72b16ea3.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/css/f6cfc3e4dc9024d0.css",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/fTnHjovpET_3Cj4vSj2t-/_buildManifest.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/fTnHjovpET_3Cj4vSj2t-/_middlewareManifest.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/_next/static/fTnHjovpET_3Cj4vSj2t-/_ssgManifest.js",revision:"fTnHjovpET_3Cj4vSj2t-"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/firebase-messaging-sw.js",revision:"c9b19009db0b535e6fcfbc70d6776eec"},{url:"/icon-192x192.png",revision:"3c13281175afae5ae6acd68b47095e3f"},{url:"/icon-256x256.png",revision:"31742f433ae65688b2576138b1ca4c7d"},{url:"/icon-384x384.png",revision:"f772418c469912144dae8c07c8dd09b1"},{url:"/icon-512x512.png",revision:"e7dec2be1545470da8fd7e1cd927c075"},{url:"/icons/AddFile.jpg",revision:"309506a83171d86773fbd7d782e4ec17"},{url:"/icons/Attendence.png",revision:"9e8aa535c38374b1ff0c5241e35185c8"},{url:"/icons/Location.png",revision:"e9a68400ea41687e624728753aab22fc"},{url:"/icons/NoProfilePic.jpeg",revision:"ab0e36cb74bd2b24765a7f49540580ae"},{url:"/icons/PointLeft.png",revision:"e873236473bfbe8791eb12853d8f73e2"},{url:"/icons/PointRight.png",revision:"aea87046eb43aa2cbaac6988afae3a94"},{url:"/icons/RedDot.png",revision:"3510a84f7a732b2ffedf1213611c646a"},{url:"/icons/calendarSelected_icon.png",revision:"2c44bfa9ee1231fce8ec787b0ff6f4c3"},{url:"/icons/calendar_icon.png",revision:"e15aec8c8c17033030624345eae3b2b9"},{url:"/icons/chatSelected_icon.png",revision:"27e9ee9f60aef5156560533f367d12f2"},{url:"/icons/chat_icon.png",revision:"5bc47a33d78d24e88424675fbe291022"},{url:"/icons/dashboardSelected_icon.png",revision:"935ae8b0d03d0565b03d020764c0d745"},{url:"/icons/dashboard_icon.png",revision:"171c7c01385cb3700b5265bc988b7e0f"},{url:"/icons/headerimage.png",revision:"ce81a1db1f55502d4a758c2f3c5a13b3"},{url:"/icons/ic_favorite.svg",revision:"93e951f16f8d9f9d340d05b8bbe516f6"},{url:"/icons/ic_favoriteSelected.svg",revision:"dd91629667a952e98087c5d626368ab2"},{url:"/icons/ic_filter@2x.png",revision:"21f777b84018d3981b8d6a142cc7f8e0"},{url:"/icons/kemnu_logo.png",revision:"455e2d5faef93b3c910c70e2b5cacb66"},{url:"/icons/kemnu_logo_white.png",revision:"e38732e4637ff8044a79ed86e3a164d2"},{url:"/icons/notificationSelected_icon.png",revision:"3883c012421d56903a9dbbf34c0d229a"},{url:"/icons/notification_icon.png",revision:"301486833b9fcb8c31e00e95dc40076e"},{url:"/icons/orgEmailVerify.png",revision:"97ebedc6536242b594407e425b0c2eff"},{url:"/icons/settingsSelected_icon.png",revision:"af8d818ec4b69f63df1c22302495e7b3"},{url:"/icons/settings_icon.png",revision:"58249acc3c50c4b315c591265a7a84e8"},{url:"/icons/signoutSelected_icon.png",revision:"a2b8f0d79f8cb88a0e964eefa2972b9f"},{url:"/icons/signout_icon.png",revision:"b91237500c9a3b01d92b497e8dca4794"},{url:"/icons/usersSelected_icon.png",revision:"5b2fd198e5e2543d12865c10ee0cea65"},{url:"/icons/users_icon.png",revision:"fe089ac50a68339209b2c7066f45942b"},{url:"/icons/verifyIcon.png",revision:"631f5d39b8a86cea933d423db5631fbf"},{url:"/icons/verifyIcon@2x.png",revision:"39fd2ef2e9db717ddbe610ba7ce55f80"},{url:"/logo.svg",revision:"cd4669b7b7851ed5ee6de11498c8c5e0"},{url:"/manifest.webmanifest",revision:"26fd210d6a57ec7ab11ced6b84e55449"},{url:"/share.png",revision:"844bd8e404f34643cc9102debdf1097a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:i,state:s})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
