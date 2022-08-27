(()=>{"use strict";var n={890:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  border-style: border-box;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader,\nfooter {\n  background-color: #2b6777;\n  color: #f2f2f2f2;\n  padding: 1rem;\n}\n\nmain {\n  display: flex;\n  flex-grow: 1;\n}\n\nfooter {\n  margin-top: auto;\n  text-align: center;\n}\n\nbutton {\n  display: flex;\n  background: none;\n  border-style: none;\n  border-radius: 0.6rem;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  width: 20rem;\n  padding: 3rem;\n  background-color: #f2f2f2f2;\n}\n\n.menu button,\n.menu h3 {\n  font-size: 18px;\n}\n\n.menu button:hover {\n  background-color: rgb(231, 231, 231);\n}\n\n.menu h3 {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  border-bottom: 1px solid rgb(203, 203, 203);\n}\n\n.icon {\n  height: 25px;\n  width: 25px;\n  margin-right: 5px;\n}\n\n.project {\n  margin-left: 1.5rem;\n  display: flex;\n}\n\n.menu button {\n  display: flex;\n  align-items: flex-end;\n}\n\n.project img {\n  width: 0.8rem;\n  height: 0.8rem;\n}\n\n.project:hover {\n  background-color: rgb(231, 231, 231);\n  border-radius: 0.6rem;\n}\n\n.project button:first-child {\n  font-size: 15px;\n  flex-grow: 1;\n}\n\n.task-container {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 3rem;\n}\n\n.btn-new-task {\n  margin-bottom: 1.5rem;\n}\n\n.task {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 0.5rem;\n  width: 70%;\n  border-bottom: 1px solid lightgray;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.title input,\n.title label {\n  cursor: pointer;\n}\n\n.date {\n  text-align: center;\n  margin-left: 1rem;\n}\n\n.del-edit-task {\n  display: flex;\n  flex-grow: 0;\n  margin-left: auto;\n  gap: 1rem;\n}\n\n.del-edit-task button,\n.close-modal {\n  padding: 0;\n  margin: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\n.description {\n  grid-row-start: 2;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  margin: 0px 27px 10px;\n  font-size: 14px;\n  font-weight: lighter;\n  min-width: 200px;\n  max-width: 400px;\n}\n\n\n.task-modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.182);\n  height: 100%;\n  width: 100%;\n  display: none;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 0.8rem;\n  width: 375px;\n  height: 475px;\n  margin: 100px auto;\n}\n\n.form-container h1 {\n  text-align: center;\n  margin: 0 30px;\n  border-bottom: 1px solid #2b67776a;\n}\n\n.task-form {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.task-form div {\n  width: 85%;\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n}\n\n.close-modal {\n  align-self: flex-end;\n  margin: 5px 5px 0 0;\n}\n\n.modal-input {\n  border-style: none;\n  background-color: #f2f2f2f2;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  font-size: 14px;\n}\n\n.modal-input:focus {\n  outline: none;\n}\n\n#description {\n  resize: none;\n}\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=[];var e=t(379),r=t.n(e),o=t(795),i=t.n(o),a=t(569),s=t.n(a),c=t(565),l=t.n(c),d=t(216),u=t.n(d),p=t(589),m=t.n(p),f=t(890),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),r()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,function(){const e=document.querySelector(".task-modal");document.querySelector(".btn-new-task").addEventListener("click",(()=>{e.style.display="block"})),document.querySelector(".close-modal").addEventListener("click",(()=>{e.style.display="none"})),document.querySelector(".form-container").addEventListener("click",(n=>{n.stopPropagation()})),e.addEventListener("click",(()=>{e.style.display="none"})),document.querySelector(".submit-task-btn").addEventListener("click",(t=>{e.style.display="none",function(e){const t={title:document.querySelector("#title").value,dueDate:document.querySelector("#due-date").value,priority:document.querySelector("#priority").value,description:document.querySelector("#description").value};n.push(t),console.log(n.length)}()}))}(),function(n){const e=document.querySelector(".task-container");n.forEach((n=>{const t=function(n){const e=document.createElement("template");return e.innerHTML=n.trim(),e.content.firstElementChild}(`\n    <div class="task">\n      <div class="title">\n        <input id="status" type="checkbox">\n        <label for="status">${(r=n).title}</label>\n      </div>\n      <div class="date">${r.dueDate}</div>\n      <div class="del-edit-task">\n        <button type="button"><img src="../src/images/edit.svg" alt="Edit"></button>\n        <button type="button"><img src="../src/images/close.svg" alt="Delete"></button>\n      </div>\n      <p class="description">${r.description}</p>\n    </div>\n  `);var r;e.appendChild(t)}))}(n)})()})();