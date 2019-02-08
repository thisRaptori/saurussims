!function(t){var e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var a={};function s(t,e){const n=document.createElement("div");return n.classList.add("contentful-root",e),t.appendChild(n),n}function l({image:t,link:e,title:n}){return`\n        <div class="item download">\n            <a href="${e}" class="item-link">\n                <img src="${t}" alt="${n}" />\n                <h1>${n}</h1>\n            </a>\n        </div>\n    `}function i({image:t,link:e,title:n}){return`\n        <div class="item resource">\n            <a href="${e}" class="item-link">\n                ${t?`<img src="${t}" alt="${name}" />`:""}\n                <h1>${n}</h1>\n            </a>\n        </div>\n    `}n.r(a),n.d(a,"download",function(){return l}),n.d(a,"resource",function(){return i}),n.d(a,"sim",function(){return o}),document.addEventListener("DOMContentLoaded",()=>{!function(){let t,e;const n=document.getElementById("gallery-root"),a=e=>{const a=t.length,s=e+1,l=`\n            <div class="gallery-wrapper">\n                <button class="gallery-close"></button>\n                <div class="gallery-content">\n                    <img class="gallery-image" src="${t[e]}" />\n                    ${s>1?'<button class="gallery-prev"></button>':""}\n                    ${s<a?'<button class="gallery-next"></button>':""}\n                    <button class="gallery-close">X</button>\n                    <button class="gallery-count">${s} of ${a}</div>\n                </div>\n            </div>\n        `;n.innerHTML=l};document.addEventListener("click",s=>{s.target.classList.contains("open-gallery")&&(t=[].map.call(document.querySelectorAll(`[data-gallery="${s.target.dataset.gallery}"]`),t=>t.dataset.image),e=t.indexOf(s.target.dataset.image),a(e)),s.target.classList.contains("gallery-prev")&&a(--e),s.target.classList.contains("gallery-next")&&a(++e),s.target.classList.contains("gallery-close")&&(n.innerHTML="",e=void 0,t=void 0)})}(),function(){const t=document.getElementById("grid");t&&imagesLoaded&&Masonry&&imagesLoaded(t,()=>{new Masonry("#grid").on("layoutComplete",()=>{t.classList.add("loaded")}),setTimeout(()=>{t.classList.add("loaded")})})}(),[].forEach.call(document.getElementsByClassName("photoset"),t=>{if(!t.classList.contains("processed")){const e=t.dataset.layout,n=[...t.children];e.split("").reduce((e,a)=>{const s=parseInt(a,10),l=document.createElement("div");for(let t=0;t<s;t++)l.appendChild(n[e+t]);return l.classList.add("photoset-row"),t.appendChild(l),e+s},0),t.classList.add("processed")}})},!1);const r=(t,e)=>`\n\t\t\t<div class="item-actions">\n\t\t\t\t${t?(t=>`\n\t\t\t\t<a href="${t}">\n\t\t\t\t\t<svg\n\t\t\t\t\t\tfill="none"\n\t\t\t\t\t\theight="24"\n\t\t\t\t\t\tstroke="currentColor"\n\t\t\t\t\t\tstrokeLinecap="round"\n\t\t\t\t\t\tstrokeLinejoin="round"\n\t\t\t\t\t\tstrokeWidth="2"\n\t\t\t\t\t\tviewBox="0 0 24 24"\n\t\t\t\t\t\twidth="24"\n\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\t>\n\t\t\t\t\t\t<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />\n\t\t\t\t\t\t<polyline points="7 10 12 15 17 10" />\n\t\t\t\t\t\t<line x1="12" y1="15" x2="12" y2="3" />\n\t\t\t\t\t</svg>\n\t\t\t\t</a>\n`)(t):""}\n\t\t\t\t${e?(t=>`\n\t\t\t\t<a href="${t}">\n\t\t\t\t\t<svg\n\t\t\t\t\t\tfill="none"\n\t\t\t\t\t\theight="24"\n\t\t\t\t\t\tstroke="currentColor"\n\t\t\t\t\t\tstrokeLinecap="round"\n\t\t\t\t\t\tstrokeLinejoin="round"\n\t\t\t\t\t\tstrokeWidth="2"\n\t\t\t\t\t\tviewBox="0 0 24 24"\n\t\t\t\t\t\twidth="24"\n\t\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\t>\n\t\t\t\t\t\t<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>\n\t\t\t\t\t\t<circle cx="8.5" cy="8.5" r="1.5"></circle>\n\t\t\t\t\t\t<polyline points="21 15 16 10 5 21"></polyline>\n\t\t\t\t\t</svg>\n\t\t\t\t</a>\n`)(e):""}\n\t\t\t</div>\n`;function o({download:t,imgur:e,image:n,tagName:a,name:s}){return`\n        <div class="item sim">\n            <a href=${window.location.origin}/tagged/${a}" class="item-link">\n                <img src="${n}" alt="${s}" />\n                <h1>${s}</h1>\n            </a>\n            ${t||e?r(t,e):""}\n        </div>\n    `}function c(t){return a[t.type]?a[t.type](t):l(t)}const d=(t,e,n="")=>`\n    <li>\n        <a ${e?` data-type="page" data-value="${e}"`:""} class="pagination-item ${n}">\n            ${t}\n        </a>\n    </li>\n`;function u(t,e){return(e,n)=>{const a=n.items.length?`\n                <div class="item-list">\n                    ${n.items.map(c).join("")}\n                </div>\n                ${function({pagination:{pages:t,current:e}}){return t.length>1?`\n        <nav class="pagination-wapper">\n            <ul class="pagination-list">\n                ${e>1?d("Prev",e-1):""}\n                ${t.map(t=>d(t,t!==e&&t,t===e?"pagination-item-active":void 0)).join("")}\n                ${e<t.length?d("Next",e+1):""}\n            </ul>\n        </nav>\n`:""}(n)}\n            `:'\n                <div class="error-message">\n                    <p>No items found!</p>\n                </div>\n            ';t.innerHTML=a}}function g(t){return()=>{t.innerHTML='\n            <div class="spinner" />\n        '}}const f=t=>t?`<span class="fas fa-${t}"></span>`:"",p=(t,e,n,a)=>`\n    <a class="filter-link${t.includes(n)?" active":`" data-type="tags" data-value="${n}`}">\n        ${f(a)}\n        ${e}\n    </a>\n`,m=(t,e)=>({icon:n,label:a,flat:s,filters:l},i)=>{const r=e.length?`${e}.${i}`:`${i}`;return l?h(t,a,l,r,n,s?" flat":void 0):((t,e,n,a)=>`\n    <li class="filter-item">\n        ${p(t,e,n,a)}\n    </li>\n`)(t,a,r,n)},h=(t,e,n,a="",s,l="")=>`\n    <li class="filter-group">\n        ${e?p(t,e,a,s):""}\n        <ul class="filter-list${l}">\n            ${n.map(m(t,a)).join("")}\n        </ul>\n    </li>\n`,y={download:"download",imgur:"image"},v={download:"Download",imgur:"Imgur"},$=(...t)=>{const e=t.reduce((t,[e,n,a])=>{if(a){const a=`\n                <a class="filter-link${n?" active":""}" data-type="${e}" data-value="${!n}">\n                    ${f(y[e])}\n                    ${v[e]}\n                </a>\n            `;t.push(a)}return t},[]);return e.length?`\n        <li class="filter-list flat">\n            ${e.join("")}\n        </li>\n    `:""};function b(t,{filterByDownloads:e,filterByImgur:n,filters:a}){return({download:s,imgur:l,paths:i})=>{const r=`\n            ${`\n            <a class="nav-toggle" data-toggle="nav-active">\n                ${f("tasks")}\n                Filters\n            </a>\n`}\n            <ul class="filter-root filter-list">\n                ${$(["download",s,e],["imgur",l,n])}\n                ${h(i,"",a)}\n            </ul>\n\n`;t.innerHTML=r}}const w=["download","imgur","page","tags"],L=t=>t&&("A"===t.tagName?t:L(t.parentElement));function k(t,e,{api:n,app:a,store:l}){const i=s(t,"contentful-main"),r=s(e,"contentful-nav"),{renderContent:o,renderError:c,renderLoading:d,renderNav:f}=function(t,e,n){return{renderContent:u(t),renderError:(a=t,(...t)=>{console.log(...t),a.innerHTML='\n            <div class="error-message">\n                <p>Something went wrong!</p>\n            </div>\n        '}),renderLoading:g(t),renderNav:b(e,n)};var a}(i,r,a),p=()=>{const t=l.get();f(t),d(),n.fetch(t).then(e=>o(t,e)).catch(e=>c(t,e))},m=({target:t})=>{const e=L(t),{toggle:n,type:a,value:s}=e.dataset;if(a&&s)if(l.set(a,s),w.includes(a))p();else{const t=l.get();f(t)}else n&&"nav-active"===n&&r.classList.toggle("active")};i.addEventListener("click",m),r.addEventListener("click",m),p()}const M=(t,...e)=>{let n=t;for(let t of e){if(!n)break;n=n[t]}return n},x=(t,e,n)=>({current:e/t+1,pages:Array.from(Array(Math.ceil(n/t)),(t,e)=>e+1)}),j=t=>t&&t.reduce((t,e)=>(Object.assign(t,{[e.sys.id]:e.fields.file.url}),t),{}),E={download:t=>e=>{const[,n,a]=e.fields.link.match(/http.*.tumblr.com\/post\/(\d*)\/?(.*)?/)||[],s=n?{postId:n,postSlug:a}:{link:e.fields.link};return{type:"download",...e.fields,...s,image:t[M(e,"fields","image","sys","id")]}},resource:t=>e=>({type:"resource",...e.fields,image:t[M(e,"fields","image","sys","id")]}),sim:t=>e=>({type:"sim",...e.fields,image:t[e.fields.image.sys.id]})};function T(t){return({includes:{Asset:e=[]}={},items:n,limit:a,skip:s,total:l})=>{return{items:((e,n)=>n&&n.map(E[t](e)))(j(e),n),pagination:x(a,s,l)}}}const P=(t,{accessToken:e,itemsPerPage:n,spaceId:a},s)=>`https://cdn.contentful.com/spaces/${a}/entries?access_token=${e}&content_type=${t}&limit=${n}${(t=>t.filter(Boolean).reduce((t,[e,n])=>`${t}&${e}=${n}`,""))(s)}`;const A=t=>[0,t.filters.map(t=>t.filters?A(t):null)],S=t=>e=>{let n=t;e.split(".").forEach(t=>{n[0]=parseInt(t,10),n=n[1][t]})},C=(t,e)=>t?`${t}.${e}`:`${e}`,O=({filters:t,greedy:e,tags:n=[]}={},a,s)=>{if(!a)return{paths:[s],tags:n};const l=a[0],i=e?t.reduce((t,e,n)=>{const l=O(e,a[1][n],C(s,n));return{paths:[...t.paths,...l.paths],tags:[...t.tags,...l.tags]}},{paths:[],tags:[]}):O(t[l],a[1][l],C(s,l));return{paths:s?[s,...i.paths]:i.paths,tags:n?[...n,...i.tags]:i.tags}};const B=t=>{switch(t){case"true":return!0;case"false":return!1;default:return t}};function H(t){const e=function(t){const e={download:!1,imgur:!1,page:1};return{get:()=>e,set:(t,n)=>{e[t]=n}}}(),n=function(t){const e=A(t);return{get:()=>O(t,e),set:S(e)}}(t);return{set:(t,a)=>{"tags"===t?(n.set(a),e.set("page",1)):e.set(t,B(a))},get:()=>({...e.get(),...n.get()})}}function N(t,e){const n=function(t,e){return t&&e.entryPoints.find(({className:e})=>t.classList.contains(e))}(t,e);return!!n&&{app:n,api:function(t,e){const{contentType:n}=t,a=T(n);return{fetch:({download:t,imgur:s,tags:l="",page:i})=>fetch(P(n,e,["download"===n&&["order","-fields.order"],l&&l.length&&["fields.tags[all]",l.join(",")],t&&["fields.download[exists]","true"],s&&["fields.imgur[exists]","true"],["skip",(i-1)*e.itemsPerPage]])).then(t=>t.json()).then(a)}}(n,e),store:H(n)}}var I={accessToken:"b7caacbc0eded6828dbef57f906e7125ce82d42df0c77249a8bff0bdfa8d6f61",entryPoints:[{contentType:"download",className:"page-Downloads",filters:[{label:"Create A Sim",icon:"child",tags:["cas"],greedy:!0,filters:[{flat:!0,filters:[{label:"All"},{label:"Male",tags:["male"],icon:"mars"},{label:"Female",tags:["female"],icon:"venus"},{label:"Kids",tags:["child","toddler"],icon:"cubes"}]},{flat:!0,filters:[{label:"All"},{label:"Clothes",tags:["clothes"],icon:"restroom"},{label:"Tops",tags:["tops"],icon:"tshirt"},{label:"Bottoms",tags:["bottoms"],icon:"male"},{label:"Outfits",tags:["outfits"],icon:"female"},{label:"Accessories",tags:["accessories"],icon:"shopping-bag"},{label:"Shoes",tags:["shoes"],icon:"shoe-prints"},{label:"Hats",tags:["hats"],icon:"hat-wizard"},{label:"Hair",tags:["hair"],icon:"cut"}]}]},{label:"Buy Mode",tags:["objects"],icon:"couch"}]},{contentType:"resource",className:"page-Resources",filters:[{label:"All"},{label:"Genetics",tags:["genetics"]},{label:"Eyes",tags:["eyes"]},{label:"Makeup",tags:["make-up"]},{label:"Poses",tags:["poses"]},{label:"Skin Details",tags:["skin-details"]},{label:"Mods",tags:["mods"]}]},{contentType:"sim",className:"page-Sims",filterByDownloads:!0,filterByImgur:!0,greedy:!0,filters:[{flat:!0,filters:[{label:"All"},{label:"Male",tags:["male"],icon:"mars"},{label:"Female",tags:["female"],icon:"venus"}]},{flat:!0,filters:[{label:"All"},{label:"Adults",tags:["adult"],icon:"graduation-cap"},{label:"Kids",tags:["child","toddler"],icon:"cubes"},{label:"Animals",tags:["animal"],icon:"paw"},{label:"Occult",tags:["occult"],icon:"ghost"}]}]}],spaceId:"6shzococgrw3",itemsPerPage:24};document.addEventListener("DOMContentLoaded",()=>{if(!window.saurussimsHasLoaded){window.saurussimsHasLoaded=!0;const t=document.querySelector("header.header"),e=document.querySelector("article.permalink-page"),n=N(e,I);n&&k(e,t,n)}})}]);