!function(t){var n={};function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(r,a,function(n){return t[n]}.bind(null,a));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var r={};function a(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,n){var e=document.createElement("div");return e.classList.add("contentful-root",n),t.appendChild(e),e}function i(t){var n=t.image,e=t.link,r=t.title,a=t.tags;return'\n        <div class="item download '.concat(a.join(" "),'">\n            <a href="').concat(e,'" class="item-link">\n                ').concat(n?'<img src="'.concat(n,'" alt="').concat(r,'" />'):"","\n                <h1>").concat(r,"</h1>\n            </a>\n        </div>\n    ")}function c(t){var n=t.image,e=t.link,r=t.title,a=t.tags;return'\n        <div class="item resource '.concat(a.join(" "),'">\n            <a href="').concat(e,'" class="item-link">\n                ').concat(n?'<img src="'.concat(n,'" alt="').concat(name,'" />'):"","\n                <h1>").concat(r,"</h1>\n            </a>\n        </div>\n    ")}e.r(r),e.d(r,"download",function(){return i}),e.d(r,"resource",function(){return c}),e.d(r,"sim",function(){return s}),document.addEventListener("DOMContentLoaded",function(){var t,n,e,r,o;e=document.getElementById("gallery-root"),r=function(n){var r=t.length,a=n+1,o=t[n],i='\n            <div class="gallery-wrapper">\n                <button class="gallery-close"></button>\n                <div class="gallery-content">\n                    <img class="gallery-image" src="'.concat(o,'" />\n                    ').concat(a>1?'<button class="gallery-prev"></button>':"","\n                    ").concat(a<r?'<button class="gallery-next"></button>':"",'\n                    <button class="gallery-close">X</button>\n                    <button class="gallery-count">').concat(a," of ").concat(r,"</div>\n                </div>\n            </div>\n        ");e.innerHTML=i},document.addEventListener("click",function(a){a.target.classList.contains("open-gallery")&&(t=[].map.call(document.querySelectorAll('[data-gallery="'.concat(a.target.dataset.gallery,'"]')),function(t){return t.dataset.image}),n=t.indexOf(a.target.dataset.image),r(n)),a.target.classList.contains("gallery-prev")&&r(--n),a.target.classList.contains("gallery-next")&&r(++n),a.target.classList.contains("gallery-close")&&(e.innerHTML="",n=void 0,t=void 0)}),(o=document.getElementById("grid"))&&imagesLoaded&&Masonry&&imagesLoaded(o,function(){new Masonry("#grid").on("layoutComplete",function(){o.classList.add("loaded")}),setTimeout(function(){o.classList.add("loaded")})}),[].forEach.call(document.getElementsByClassName("photoset"),function(t){if(!t.classList.contains("processed")){var n=t.dataset.layout,e=a(t.children);n.split("").reduce(function(n,r){for(var a=parseInt(r,10),o=document.createElement("div"),i=0;i<a;i++)o.appendChild(e[n+i]);return o.classList.add("photoset-row"),t.appendChild(o),n+a},0),t.classList.add("processed")}})},!1);var l=function(t,n){return'\n\t\t\t<div class="item-actions">\n\t\t\t\t'.concat(t?function(t){return'\n\t\t\t\t<a href="'.concat(t,'">\n\t\t\t\t\t<svg\n\t\t\t\t\t\tfill="none"\n\t\t\t\t\t\theight="24"\n\t\t\t\t\t\tstroke="currentColor"\n\t\t\t\t\t\tstrokeLinecap="round"\n\t\t\t\t\t\tstrokeLinejoin="round"\n\t\t\t\t\t\tstrokeWidth="2"\n\t\t\t\t\t\tviewBox="0 0 24 24"\n\t\t\t\t\t\twidth="24"\n\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\t>\n\t\t\t\t\t\t<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />\n\t\t\t\t\t\t<polyline points="7 10 12 15 17 10" />\n\t\t\t\t\t\t<line x1="12" y1="15" x2="12" y2="3" />\n\t\t\t\t\t</svg>\n\t\t\t\t</a>\n')}(t):"","\n\t\t\t\t").concat(n?function(t){return'\n\t\t\t\t<a href="'.concat(t,'">\n\t\t\t\t\t<svg\n\t\t\t\t\t\tfill="none"\n\t\t\t\t\t\theight="24"\n\t\t\t\t\t\tstroke="currentColor"\n\t\t\t\t\t\tstrokeLinecap="round"\n\t\t\t\t\t\tstrokeLinejoin="round"\n\t\t\t\t\t\tstrokeWidth="2"\n\t\t\t\t\t\tviewBox="0 0 24 24"\n\t\t\t\t\t\twidth="24"\n\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\t>\n\t\t\t\t\t\t<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>\n\t\t\t\t\t\t<circle cx="8.5" cy="8.5" r="1.5"></circle>\n\t\t\t\t\t\t<polyline points="21 15 16 10 5 21"></polyline>\n\t\t\t\t\t</svg>\n\t\t\t\t</a>\n')}(n):"","\n\t\t\t</div>\n")};function s(t){var n=t.download,e=t.imgur,r=t.image,a=t.tagName,o=t.tags,i=t.name;return'\n        <div class="item sim '.concat(o.join(" "),'">\n            <a href="').concat(window.location.origin,"/tagged/").concat(a,'" class="item-link">\n\t\t\t\t').concat(r?'<img src="'.concat(r,'" alt="').concat(i,'" />'):"","\n                <h1>").concat(i,"</h1>\n            </a>\n            ").concat(n||e?l(n,e):"","\n        </div>\n    ")}function u(t){return r[t.type]?r[t.type](t):i(t)}var f=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return"\n    <li>\n        <a ".concat(n?' data-type="page" data-value="'.concat(n,'"'):"",' class="pagination-item ').concat(e,'">\n            ').concat(t,"\n        </a>\n    </li>\n")};function d(t,n){return function(n,e){var r,a,o,i=e.items.length?'\n                <div class="item-list">\n                    '.concat(e.items.map(u).join(""),"\n                </div>\n                ").concat((r=e.pagination,a=r.pages,o=r.current,a.length>1?'\n        <nav class="pagination-wapper">\n            <ul class="pagination-list">\n                '.concat(o>1?f("Prev",o-1):"","\n                ").concat(a.map(function(t){return f(t,t!==o&&t,t===o?"pagination-item-active":void 0)}).join(""),"\n                ").concat(o<a.length?f("Next",o+1):"","\n            </ul>\n        </nav>\n"):""),"\n            "):'\n                <div class="error-message">\n                    <p>No items found!</p>\n                </div>\n            ';t.innerHTML=i}}function g(t){return function(){t.innerHTML='\n            <div class="spinner" />\n        '}}function p(t){return t?'<span class="fas fa-'.concat(t,'"></span>'):""}function y(t,n,e,r){return'\n        <a class="filter-link'.concat(t.includes(e)?" active":'" data-type="tags" data-value="'.concat(e,'"'),'">\n            ').concat(p(r),"\n            ").concat(n,"\n        </a>\n")}function m(t,n){return function(e,r){var a=e.icon,o=e.label,i=e.flat,c=e.filters,l=n.length?"".concat(n,".").concat(r):"".concat(r);return c?v(t,o,c,l,a,i?" flat":void 0):function(t,n,e,r){return'\n        <li class="filter-item">\n            '.concat(y(t,n,e,r),"\n        </li>\n")}(t,o,l,a)}}function v(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return'\n        <li class="filter-group">\n            '.concat(n?y(t,n,r,a):"",'\n            <ul class="filter-list').concat(o,'">\n                ').concat(e.map(m(t,r)).join(""),"\n            </ul>\n        </li>\n")}var b={download:"download",imgur:"image"},h={download:"Download",imgur:"Imgur"};function w(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function O(t,n){var e=n.filters,r=n.toggles,a=void 0===r?[]:r,o=n.tou;return function(n){var r=n.paths,i=w(n,["paths"]),c=o?'\n            <a class="tou-link" href="/tou">\n                '.concat(p("info"),"\n                TOU\n            </a>\n"):"",l='\n            <a class="nav-toggle'.concat(o?" active-padding":"",'" data-toggle="nav-active">\n                ').concat(p("tasks"),"\n                Filters\n            </a>\n            ").concat(c,'\n            <ul class="filter-root filter-list">\n                ').concat(function(t,n){return t.length?'\n        <li class="filter-list flat">\n            '.concat(t.map(function(t){return'\n            <a class="filter-link'.concat(n[t]?" active":"",'" data-type="').concat(t,'" data-value="').concat(!n[t],'">\n                ').concat(p(b[t]),"\n                ").concat(h[t],"\n            </a>\n")}).join(""),"\n        </li>\n"):""}(a,i),"\n                ").concat(v(r,"",e),"\n            </ul>\n");t.innerHTML=l}}var j=function t(n){return n&&("A"===n.tagName?n:t(n.parentElement))};function k(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var A=function(t){for(var n=t,e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];for(var o=0;o<r.length;o++){var i=r[o];if(!n)break;n=n[i]}return n},L=["download","imgur","page","tags"];function P(t,n,e){var r=e.api,a=e.app,i=e.store,c=o(t,"contentful-main"),l=o(n,"contentful-nav"),s=function(t,n,e){return{renderContent:d(t),renderError:(r=t,function(){var t;(t=console).log.apply(t,arguments),r.innerHTML='\n            <div class="error-message">\n                <p>Something went wrong!</p>\n            </div>\n        '}),renderLoading:g(t),renderNav:O(n,e)};var r}(c,l,a),u=s.renderContent,f=s.renderError,p=s.renderLoading,y=s.renderNav,m=function(){var t=i.get();y(t),p(),r.fetch(t).then(function(n){return u(t,n)}).catch(function(n){return f(t,n)})},v=function(t){var n=t.target,e=j(n).dataset,r=e.toggle,a=e.type,o=e.value;if(a&&o)if(i.set(a,o),L.includes(a))m();else{var c=i.get();y(c)}else r&&"nav-active"===r&&l.classList.toggle("active")};c.addEventListener("click",v),l.addEventListener("click",v),m()}function E(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){M(t,n,e[n])})}return t}function x(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function M(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var T=function(t,n,e){return{current:n/t+1,pages:Array.from(Array(Math.ceil(e/t)),function(t,n){return n+1})}},I=function(t){return t&&t.reduce(function(t,n){return Object.assign(t,M({},n.sys.id,n.fields.file.url)),t},{})},C={download:function(t){return function(n){var e=x(n.fields.link.match(/http.*.tumblr.com\/post\/(\d*)\/?(.*)?/)||[],3),r=e[1],a=e[2],o=r?{postId:r,postSlug:a}:{link:n.fields.link};return E({type:"download"},n.fields,o,{image:t[A(n,"fields","image","sys","id")]})}},resource:function(t){return function(n){return E({type:"resource"},n.fields,{image:t[A(n,"fields","image","sys","id")]})}},sim:function(t){return function(n){return E({type:"sim"},n.fields,{image:t[n.fields.image.sys.id]})}}};function H(t){return function(n){var e=n.includes,r=(e=void 0===e?{}:e).Asset,a=void 0===r?[]:r,o=n.items,i=n.limit,c=n.skip,l=n.total;return{items:function(n,e){return e&&e.map(C[t](n))}(I(a),o),pagination:T(i,c,l)}}}function N(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function B(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var D=function(t,n,e){var r=n.accessToken,a=n.itemsPerPage,o=n.spaceId;return"https://cdn.contentful.com/spaces/".concat(o,"/entries?access_token=").concat(r,"&content_type=").concat(t,"&limit=").concat(a).concat(e.filter(Boolean).reduce(function(t,n){if(!Array.isArray(n))throw new Error("toQueryString: each item should be a [key:value] pair array, found ".concat(S(n)," instead."));var e=k(n,2),r=e[0],a=e[1];return"".concat(t,"&").concat(r,"=").concat(a)},""))},_={only:["fields.retired","true"],hide:["fields.retired[nin]","true"]};function q(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var F=function t(n){return[0,n.filters.map(function(n){return n.filters?t(n):null})]},z=function(t){return function(n){var e=t;n.split(".").forEach(function(t){e[0]=parseInt(t,10),e=e[1][t]})}},K=function(t,n){return t?"".concat(t,".").concat(n):"".concat(n)},R=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.filters,r=n.greedy,a=n.tags,o=void 0===a?[]:a,i=n.retired,c=arguments.length>1?arguments[1]:void 0,l=arguments.length>2?arguments[2]:void 0;if(!c)return{paths:[l],tags:o,retired:i};var s=c[0],u=r?e.reduce(function(n,e,r){var a=t(e,c[1][r],K(l,r));return{paths:[].concat(q(n.paths),q(a.paths)),tags:[].concat(q(n.tags),q(a.tags))}},{paths:[],tags:[]}):t(e[s],c[1][s],K(l,s));return{paths:l?[l].concat(q(u.paths)):u.paths,tags:o?[].concat(q(o),q(u.tags)):u.tags,retired:u.retired||i}};function W(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var G=function(t){switch(t){case"true":return!0;case"false":return!1;default:return t}};function Q(t){var n,e,r=(n=t.toggles,e=(void 0===n?[]:n).reduce(function(t,n){return t[n]=!1,t},{page:1}),{get:function(){return e},set:function(t,n){e[t]=n}}),a=function(t){var n=F(t);return{get:function(){return R(t,n)},set:z(n)}}(t);return{set:function(t,n){"tags"===t?(a.set(n),r.set("page",1)):r.set(t,G(n))},get:function(){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){W(t,n,e[n])})}return t}({},r.get(),a.get())}}}function U(t,n){var e=function(t,n){return t&&n.entryPoints.find(function(n){var e=n.className;return t.classList.contains(e)})}(t,n);return!!e&&{app:e,api:function(t,n){var e=t.contentType,r=t.toggles,a=void 0===r?[]:r,o=H(e);return{fetch:function(t){function n(n){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(t){var r=t.tags,i=void 0===r?"":r,c=t.page,l=t.retired,s=B(t,["tags","page","retired"]);return fetch(D(e,n,[["skip",(c-1)*n.itemsPerPage],"download"===e&&["order","-fields.order"],i&&i.length&&["fields.tags[all]",i.join(",")],l&&_[l]].concat(N(a.filter(function(t){return s[t]}).map(function(t){return["fields.".concat(t,"[exists]"),"true"]}))))).then(function(t){return t.json()}).then(o)})}}(e,n),store:Q(e)}}function X(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var J=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){X(t,n,e[n])})}return t}({},{accessToken:"b7caacbc0eded6828dbef57f906e7125ce82d42df0c77249a8bff0bdfa8d6f61",spaceId:"6shzococgrw3"},{entryPoints:[{contentType:"download",className:"page-Downloads",tou:!0,filters:[{label:"All",retired:"hide"},{label:"Create A Sim",icon:"child",tags:["cas"],greedy:!0,retired:"hide",filters:[{flat:!0,filters:[{label:"All"},{label:"Male",tags:["male"],icon:"mars"},{label:"Female",tags:["female"],icon:"venus"},{label:"Kids",tags:["child","toddler"],icon:"cubes"}]},{flat:!0,filters:[{label:"All"},{label:"Clothes",tags:["clothes"],icon:"restroom"},{label:"Tops",tags:["tops"],icon:"tshirt"},{label:"Bottoms",tags:["bottoms"],icon:"male"},{label:"Outfits",tags:["outfits"],icon:"female"},{label:"Accessories",tags:["accessories"],icon:"shopping-bag"},{label:"Shoes",tags:["shoes"],icon:"shoe-prints"},{label:"Hats",tags:["hats"],icon:"hat-wizard"},{label:"Hair",tags:["hair"],icon:"cut"}]}]},{label:"Buy Mode",icon:"couch",tags:["objects"],retired:"hide"},{label:"Mods",icon:"wrench",tags:["mods"],retired:"hide"},{label:"Retired",retired:"only",icon:"calendar-times"}]},{contentType:"resource",className:"page-Resources",filters:[{label:"All"},{label:"Genetics",tags:["genetics"]},{label:"Eyes",tags:["eyes"]},{label:"Makeup",tags:["make-up"]},{label:"Poses",tags:["poses"]},{label:"Skin Details",tags:["skin-details"]},{label:"Mods",tags:["mods"]}]},{contentType:"sim",className:"page-Sims",toggles:["download","imgur"],greedy:!0,tou:!0,filters:[{flat:!0,filters:[{label:"All"},{label:"Male",tags:["male"],icon:"mars"},{label:"Female",tags:["female"],icon:"venus"}]},{flat:!0,filters:[{label:"All"},{label:"Adults",tags:["adult"],icon:"graduation-cap"},{label:"Kids",tags:["child","toddler"],icon:"cubes"},{label:"Animals",tags:["animal"],icon:"paw"},{label:"Occult",tags:["occult"],icon:"ghost"}]}]}],itemsPerPage:24});document.addEventListener("DOMContentLoaded",function(){if(!window.saurussimsHasLoaded){window.saurussimsHasLoaded=!0;var t=document.querySelector("header.header"),n=document.querySelector("article.permalink-page"),e=U(n,J);e&&P(n,t,e)}})}]);