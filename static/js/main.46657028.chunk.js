(this["webpackJsonpportfolio-final"]=this["webpackJsonpportfolio-final"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(10),n(1)),i=(n(11),function(e){var t=e.breakpoint,n=e.renderMobile,r=e.renderDesktop,o=e.renderTablet,c=Object(a.useState)(window.innerWidth),i=Object(l.a)(c,2),m=i[0],u=i[1],d=Object(a.useState)(window.innerHeight),s=Object(l.a)(d,2),E=s[0],v=s[1];return Object(a.useEffect)((function(){var e=function(){u(window.innerWidth),v(window.innerHeight)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),console.log(m,E),m<t?n():m<E?o():r()}),m=n(4),u=(n(12),function(e){var t=Object(a.useState)("0"),n=Object(l.a)(t,2),o=n[0],c=n[1],i=function(t){var n=function(e){return(e=e||window.event).target||e.srcElement}(t);"LABEL"===n.tagName&&(e.setPage(n.getAttribute("data-navi")),e.setContent(n.getAttribute("data-content")),c(n.getAttribute("data-location")))};return r.a.createElement("div",{id:"Menu"},r.a.createElement("div",{id:"menu-container",onClick:function(){return i()}},r.a.createElement(m.a.div,{initial:!1,animate:{left:o},id:"menu-selector",style:{left:o}}),r.a.createElement("label",{"data-location":"0","data-navi":"home","data-content":"hero"},r.a.createElement("h3",null,"Home")),r.a.createElement("label",{"data-location":"25%","data-navi":"home","data-content":"about"},r.a.createElement("h3",null,"About")),r.a.createElement("label",{"data-location":"50%","data-navi":"projects"},r.a.createElement("h3",null,"Projects")),r.a.createElement("label",{"data-location":"75%","data-navi":"contact"},r.a.createElement("h3",null,"Contact"))))}),d=function(){return r.a.createElement("div",null,"sd")},s=function(){return r.a.createElement("div",null,"proj")},E=function(){return r.a.createElement("form",null,r.a.createElement("label",null),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name"}),r.a.createElement("input",{type:"text",placeholder:"Subject",name:"subject"}),r.a.createElement("input",{type:"email",placeholder:"Email",name:"mailFrom"}),r.a.createElement("textarea",{placeholder:"message"}),r.a.createElement("button",{type:"submit"}))};var v=function(){var e=Object(a.useState)("home"),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)("hero"),m=Object(l.a)(c,2),v=(m[0],m[1]);return r.a.createElement("div",{className:"App"},r.a.createElement(i,{breakpoint:767,renderDesktop:function(){return r.a.createElement("div",{id:"Desktop"},r.a.createElement("div",{id:"content-container"},"Desktop",{home:r.a.createElement(d,null),projects:r.a.createElement(s,null),contact:r.a.createElement(E,null)}[n]),r.a.createElement(u,{setPage:o,setContent:v}))},renderMobile:function(){return r.a.createElement("div",{id:"Mobile"},r.a.createElement("div",{id:"content-container"},"mobile",{home:r.a.createElement("div",null,"home"),projects:r.a.createElement("div",null,"projects"),contact:r.a.createElement("div",null,"content")}[n]),r.a.createElement(u,{setPage:o,setContent:v}))},renderTablet:function(){return r.a.createElement("div",{id:"Tablet"},r.a.createElement("div",{id:"content-container"},"tablet",{home:r.a.createElement("div",null,"home"),projects:r.a.createElement("div",null,"projects"),contact:r.a.createElement("div",null,"content")}[n]),r.a.createElement(u,{setPage:o,setContent:v}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.46657028.chunk.js.map