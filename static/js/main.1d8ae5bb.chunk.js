(this["webpackJsonpportfolio-final"]=this["webpackJsonpportfolio-final"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),l=(n(9),n(1)),c=(n(10),function(e){var t=e.breakpoint,n=e.renderMobile,r=e.renderDesktop,o=e.renderTablet,i=Object(a.useState)(window.innerWidth),c=Object(l.a)(i,2),u=c[0],d=c[1],s=Object(a.useState)(window.innerHeight),m=Object(l.a)(s,2),b=m[0],E=m[1];return Object(a.useEffect)((function(){var e=function(){d(window.innerWidth),E(window.innerHeight)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),console.log(u,b),u<t?n():u<b?o():r()}),u=(n(11),function(e){var t=Object(a.useState)("0"),n=Object(l.a)(t,2),o=n[0],i=n[1],c=function(e){var t=function(e){return(e=e||window.event).target||e.srcElement}(e);"LABEL"===t.tagName&&i(t.getAttribute("data-location"))};return r.a.createElement("div",{id:"Menu"},r.a.createElement("div",{id:"menu-container",onClick:function(){return c()}},r.a.createElement("div",{id:"menu-selector",style:{left:o}}),r.a.createElement("label",{"data-location":"0"},r.a.createElement("h3",null,"Home")),r.a.createElement("label",{"data-location":"25%"},r.a.createElement("h3",null,"About")),r.a.createElement("label",{"data-location":"50%"},r.a.createElement("h3",null,"Projects")),r.a.createElement("label",{"data-location":"75%"},r.a.createElement("h3",null,"Contact"))))});var d=function(){var e=Object(a.useState)("home"),t=Object(l.a)(e,2),n=(t[0],t[1],Object(a.useState)("hero")),o=Object(l.a)(n,2);return o[0],o[1],r.a.createElement("div",{className:"App"},r.a.createElement(c,{breakpoint:767,renderDesktop:function(){return r.a.createElement("div",{id:"Desktop"},r.a.createElement("h1",null,"Desktop"),r.a.createElement(u,null))},renderMobile:function(){return r.a.createElement("div",{id:"Mobile"},r.a.createElement("h1",null,"Mobile"),r.a.createElement(u,null))},renderTablet:function(){return r.a.createElement("h1",null,"Tablet1")}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.1d8ae5bb.chunk.js.map