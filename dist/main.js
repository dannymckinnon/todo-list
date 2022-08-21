(()=>{"use strict";var n,e,t,r,o,i,a,l,s,c,d,p,u,f,m={426:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  border-style: border-box;\n}\n\nhtml {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader,\nfooter {\n  background-color: #db4c3f;\n  color: white;\n  padding: 1rem;\n}\n\nmain {\n  display: flex;\n  flex-grow: 1;\n}\n\nfooter {\n  margin-top: auto;\n  text-align: center;\n}\n\nbutton {\n  display: flex;\n  background: none;\n  border-style: none;\n  border-radius: 0.6rem;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  width: 20rem;\n  padding: 3rem;\n  background-color: rgb(241, 241, 241);\n}\n\n.menu button,\n.menu h3 {\n  font-size: 18px;\n}\n\n.menu button:hover {\n  background-color: rgb(231, 231, 231);\n}\n\n.menu h3 {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  border-bottom: 1px solid rgb(203, 203, 203);\n}\n\n.icon {\n  height: 25px;\n  width: 25px;\n  margin-right: 5px;\n}\n\n.project {\n  margin-left: 1.5rem;\n  display: flex;\n}\n\n.menu button {\n  display: flex;\n  align-items: flex-end;\n}\n\n.project img {\n  width: 0.8rem;\n  height: 0.8rem;\n}\n\n.project:hover {\n  background-color: rgb(231, 231, 231);\n  border-radius: 0.6rem;\n}\n\n.project button:first-child {\n  font-size: 15px;\n  flex-grow: 1;\n}\n\n.task-container {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 3rem;\n}\n\n.btn-add-task {\n  margin-bottom: 1.5rem;\n}\n\n.task {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 0.5rem;\n  width: 70%;\n  border-bottom: 1px solid lightgray;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: bold;\n}\n\n.title input,\n.title label {\n  cursor: pointer;\n}\n\n.date {\n  text-align: center;\n  margin-left: 1rem;\n}\n\n.del-edit {\n  display: flex;\n  flex-grow: 0;\n  margin-left: auto;\n  gap: 1rem;\n}\n\n.del-edit button,\n.close-modal {\n  padding: 0;\n  margin: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\n.description {\n  grid-row-start: 2;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  margin: 10px 27px;\n  font-size: 14px;\n  font-weight: lighter;\n  min-width: 200px;\n  max-width: 400px;\n  \n}\n\n\n.task-modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.323);\n  height: 100%;\n  width: 100%;\n  /* display: none; */\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 0.8rem;\n  width: 300px;\n  height: 400px;\n  margin: 100px auto;\n}\n\n.form-container h1 {\n  align-self: center;\n}\n\n.task-form {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.task-form div {\n  width: 85%;\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n}\n\n.close-modal {\n  align-self: flex-end;\n  margin: 5px 5px 0 0;\n}\n\n\n",""]);const l=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],l=0;l<n.length;l++){var s=n[l],c=r.base?s[0]+r.base:s[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=l,e.splice(l,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=t(i[a]);e[l].references--}for(var s=r(n,o),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},g={};function h(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(379),e=h.n(n),t=h(795),r=h.n(t),o=h(569),i=h.n(o),a=h(565),l=h.n(a),s=h(216),c=h.n(s),d=h(589),p=h.n(d),u=h(426),(f={}).styleTagTransform=p(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();