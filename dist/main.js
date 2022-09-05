(()=>{"use strict";var e={890:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n  border-style: border-box;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader,\nfooter {\n  background-color: #2b6777;\n  color: #f2f2f2f2;\n  padding: 1rem;\n}\n\nmain {\n  display: flex;\n  flex-grow: 1;\n}\n\nfooter {\n  margin-top: auto;\n  text-align: center;\n}\n\nbutton {\n  display: flex;\n  background: none;\n  border-style: none;\n  border-radius: 0.6rem;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  width: 20rem;\n  padding: 3rem;\n  background-color: #f2f2f2f2;\n}\n\n.menu button,\n.menu h3 {\n  font-size: 18px;\n}\n\n.menu button:hover {\n  background-color: rgb(231, 231, 231) !important;\n}\n\n.menu h3 {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  border-bottom: 1px solid rgb(203, 203, 203);\n}\n\n.icon {\n  height: 25px;\n  width: 25px;\n  margin-right: 5px;\n}\n\n.project {\n  margin-left: 1.5rem;\n  display: flex;\n}\n\n.menu button {\n  display: flex;\n  align-items: flex-end;\n  background-color: transparent;\n}\n\n.project img {\n  width: 0.8rem;\n  height: 0.8rem;\n}\n\n.project:hover {\n  background-color: rgb(231, 231, 231);\n  border-radius: 0.6rem;\n}\n\n.project button:first-child {\n  font-size: 15px;\n  flex-grow: 1;\n}\n\n.task-container {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 3rem;\n}\n\n.btn-new-task {\n  margin-bottom: 1.5rem;\n}\n\n\n.task {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 0.5rem;\n  width: 70%;\n  padding-left: 0.5rem;\n  border-bottom: 1px dotted lightgray;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.title input,\n.title label {\n  cursor: pointer;\n}\n\n.date {\n  text-align: center;\n  margin-left: 1rem;\n}\n\n.del-edit-task {\n  display: flex;\n  flex-grow: 0;\n  margin-left: auto;\n  gap: 1rem;\n}\n\n.del-edit-task button,\n.close-modal {\n  padding: 0;\n  margin: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\n.description {\n  grid-row-start: 2;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  margin: 0px 27px 10px;\n  font-size: 14px;\n  font-weight: lighter;\n  min-width: 200px;\n  max-width: 400px;\n}\n\n\n.task-modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.182);\n  height: 100%;\n  width: 100%;\n  display: none;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 0.8rem;\n  width: 375px;\n  height: 475px;\n  margin: 100px auto;\n}\n\n.form-container h1 {\n  text-align: center;\n  margin: 0 30px;\n  border-bottom: 1px solid #2b67776a;\n}\n\n.task-form {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.task-form div {\n  width: 85%;\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n}\n\n.close-modal {\n  align-self: flex-end;\n  margin: 5px 5px 0 0;\n}\n\n.modal-input,\n.create-proj-input input {\n  border-style: none;\n  background-color: #f2f2f2f2;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  font-size: 14px;\n}\n\n.create-proj-input input {\n  background-color: white;\n  border: 1px solid rgb(214, 214, 214);\n  padding: 0.3rem;\n  border-radius: 0.3rem;\n}\n\n.modal-input:focus,\n.create-proj-input input:focus {\n  outline: none;\n}\n\n#description {\n  resize: none;\n}\n\n.task-complete {\n  text-decoration: line-through;\n  color: rgb(174, 174, 174);\n}\n\n.create-proj-input {\n  margin: 0.4rem 0;\n  justify-content: space-between;\n  align-items: center;\n  height: 1.5rem;\n  margin-left: 1.8rem;\n}\n\n.create-proj-btns {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 0.8rem;\n  width: 0.8rem;\n}\n\n.create-proj-btns img {\n  height: 0.8rem;\n  width: 0.8rem;\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=i[s]||0,u="".concat(s," ").concat(d);i[s]=d+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var l=r(e,o),s=0;s<i.length;s++){var d=t(i[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=[];function n(n){const t=document.querySelector(".task-container");document.querySelectorAll(".task").forEach((e=>e.remove()));for(let r=0;r<e.length;r++)for(let o=0;o<n.length;o++)if(n[o]===e[r]){const e=i(n[o],r);t.appendChild(e)}}function r(e){const t=(new Date).toLocaleDateString();n(e.filter((e=>e.dueDate===t)))}function o(e){const t=(new Date).toLocaleDateString();n(e.filter((e=>e.dueDate!==t)))}function i(e,n){const t=e.complete?"checked":"unchecked";return a(`\n    <div class="task ${e.complete?"task-complete":""}" data-index="${n}" style="border-left: 4px solid ${e.priorityToColor()}">\n      <div class="title">\n        <input id="status${n}" type="checkbox" ${t}>\n        <label for="status${n}">${e.title}</label>\n      </div>\n      <div class="date">${e.dueDate}</div>\n      <div class="del-edit-task">\n        <button class="edit-task" type="button"><img class="edit-task" src="../src/images/edit.svg" alt="Edit"></button>\n        <button class="del-task" type="button"><img class="del-task" src="../src/images/close.svg" alt="Delete"></button>\n      </div>\n      <p class="description">${e.description}</p>\n    </div>\n  `)}function a(e){const n=document.createElement("template");return n.innerHTML=e.trim(),n.content.firstElementChild}function c(e){document.querySelectorAll(".menu-btn").forEach((e=>e.style.backgroundColor="transparent")),e.target.style.backgroundColor="rgb(231, 231, 231)"}function l(){document.querySelectorAll(".modal-input").forEach((e=>e.value="")),document.querySelector("#priority").selectedIndex=0;const e=(new Date).toLocaleDateString();document.querySelector("#due-date").value=e}function s(){const e=document.querySelector(".create-proj-input");"none"===e.style.display?e.style.display="flex":e.style.display="none",e.firstElementChild.value=""}var d=t(379),u=t.n(d),p=t(795),m=t.n(p),f=t(569),g=t.n(f),y=t(565),b=t.n(y),v=t(216),h=t.n(v),x=t(589),k=t.n(x),S=t(890),q={};q.styleTagTransform=k(),q.setAttributes=b(),q.insert=g().bind(null,"head"),q.domAPI=m(),q.insertStyleElement=h(),u()(S.Z,q),S.Z&&S.Z.locals&&S.Z.locals,function(){const t=document.querySelector(".task-modal");document.querySelector(".btn-new-task").addEventListener("click",(()=>{t.style.display="block",document.querySelector(".form-title").innerHTML="New Task";const e=document.querySelector(".submit-task-btn");e.innerHTML="+ Add Task",e.classList.remove("submit-edit-task");const n=(new Date).toLocaleDateString();document.querySelector("#due-date").setAttribute("min",n),l()})),document.querySelector(".close-modal").addEventListener("click",(()=>{t.style.display="none",l()})),document.querySelector(".form-container").addEventListener("click",(e=>{e.stopPropagation()})),t.addEventListener("click",(()=>{t.style.display="none",l()})),document.querySelector(".submit-task-btn").addEventListener("click",(r=>{r.target.classList.contains("submit-edit-task")?(function(n){const t=n.target.getAttribute("data-index"),r=document.querySelector("#title"),o=document.querySelector("#priority"),i=document.querySelector("#due-date"),a=document.querySelector("#description");e[t].title=r.value,e[t].priority=o.value,e[t].dueDate=i.value,e[t].description=a.value,n.target.classList.remove("submit-edit-task"),document.querySelector(".task-modal").style.display="none"}(r),n(e)):(t.style.display="none",function(n){const t=(r=document.querySelector("#title").value,o=document.querySelector("#due-date").value,i=document.querySelector("#priority").value,{title:r,dueDate:o,priorityToColor:()=>"low"===i?"#069C56":"medium"===i?"#FF980E":"high"===i?"#D3212C":void 0,description:document.querySelector("#description").value,complete:!1,priority:i});var r,o,i;e.push(t)}(),n(e),l())})),document.addEventListener("click",(t=>{t.target.classList.contains("del-task")?(function(n){const t=n.target.closest(".task").getAttribute("data-index");e.splice(t,1)}(t),function(t){const i=[...document.querySelectorAll(".menu-btn")].filter((e=>"transparent"!==e.style.backgroundColor));0===i.length?n(e):i[0].classList.contains("today")?r(e):i[0].classList.contains("upcoming")?o(e):i[0].classList.contains("all")&&n(e)}()):t.target.classList.contains("edit-task")&&function(n){const t=document.querySelector(".task-modal"),r=n.target.closest(".task").getAttribute("data-index"),o=e[r];t.style.display="block";const i=document.querySelector("#title"),a=document.querySelector("#priority"),c=document.querySelector("#due-date"),l=document.querySelector("#description");i.value=o.title,c.value=o.dueDate,l.value=o.description,"low"===o.priority?a.selectedIndex=0:"medium"===o.priority?a.selectedIndex=1:a.selectedIndex=2;const s=document.querySelector(".submit-task-btn");s.innerHTML="+ Edit task",s.classList.add("submit-edit-task"),s.setAttribute("data-index",r),document.querySelector(".form-title").innerHTML="Edit Task"}(t)})),document.querySelector(".all").addEventListener("click",(t=>{c(t),n(e)})),document.querySelector(".today").addEventListener("click",(n=>{c(n),r(e)})),document.querySelector(".upcoming").addEventListener("click",(n=>{c(n),o(e)})),document.addEventListener("change",(n=>{if("checkbox"===n.target.getAttribute("type")){const t=n.target.closest(".task"),r=t.getAttribute("data-index");n.target.checked?(t.classList.add("task-complete"),e[r].complete=!0):(t.classList.remove("task-complete"),e[r].complete=!1)}})),document.querySelector(".btn-create-project").addEventListener("click",s),document.querySelector(".close-proj-input").addEventListener("click",(()=>{s()})),document.querySelector(".submit-project-btn").addEventListener("click",(e=>{document.querySelector(".menu").appendChild(a(`\n  <div class="project">\n    <button type="button">${document.querySelector(".project-input").value}</button>\n    <button type="button" class="del-project"><img src="../src/images/close.svg" alt="Delete"></button>\n  </div>\n  `)),s()}))}(),n(e)})()})();