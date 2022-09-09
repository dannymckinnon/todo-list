(()=>{"use strict";var e={890:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n  border-style: border-box;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader,\nfooter {\n  background-color: #2b6777;\n  color: #f2f2f2f2;\n  padding: 1rem;\n}\n\nmain {\n  display: flex;\n  flex-grow: 1;\n}\n\nfooter {\n  margin-top: auto;\n  text-align: center;\n}\n\nbutton {\n  display: flex;\n  background: none;\n  border-style: none;\n  border-radius: 0.6rem;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  width: 20rem;\n  padding: 3rem;\n  background-color: #f2f2f2f2;\n}\n\n.menu button,\n.menu h3 {\n  font-size: 18px;\n}\n\n.menu button:hover {\n  background-color: rgb(231, 231, 231) !important;\n}\n\n.menu h3 {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  border-bottom: 1px solid rgb(203, 203, 203);\n}\n\n.icon {\n  height: 25px;\n  width: 25px;\n  margin-right: 5px;\n}\n\n.project {\n  display: flex;\n  border-radius: 0.6rem;\n  align-items: center;\n  margin: 0rem 1.5rem;\n}\n\n.menu button {\n  display: flex;\n  align-items: flex-end;\n  background-color: transparent;\n}\n\n.project img {\n  width: 0.8rem;\n  height: 0.8rem;\n}\n\n.project:hover {\n  background-color: rgb(231, 231, 231) !important;\n  border-radius: 0.6rem;\n}\n\n.project button:first-child {\n  font-size: 14px;\n  flex-grow: 1;\n}\n\n.task-container {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 3rem;\n}\n\n.btn-new-task {\n  margin-bottom: 1.5rem;\n}\n\n\n.task {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 0.5rem;\n  width: 70%;\n  padding-left: 0.5rem;\n  border-bottom: 1px dotted lightgray;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.title input,\n.title label {\n  cursor: pointer;\n}\n\n.date {\n  text-align: center;\n  margin-left: 1rem;\n}\n\n.del-edit-task {\n  display: flex;\n  flex-grow: 0;\n  margin-left: auto;\n  gap: 1rem;\n}\n\n.del-edit-task button,\n.close-modal {\n  padding: 0;\n  margin: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\n.description {\n  grid-row-start: 2;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  margin: 0px 27px 10px;\n  font-size: 14px;\n  font-weight: lighter;\n  min-width: 200px;\n  max-width: 400px;\n}\n\n\n.task-modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.182);\n  height: 100%;\n  width: 100%;\n  display: none;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 0.8rem;\n  width: 375px;\n  height: 475px;\n  margin: 100px auto;\n}\n\n.form-container h1 {\n  text-align: center;\n  margin: 0 30px;\n  border-bottom: 1px solid #2b67776a;\n}\n\n.task-form {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.task-form div {\n  width: 85%;\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n}\n\n.close-modal {\n  align-self: flex-end;\n  margin: 5px 5px 0 0;\n}\n\n.modal-input,\n.create-proj-input input {\n  border-style: none;\n  background-color: #f2f2f2f2;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  font-size: 14px;\n}\n\n.create-proj-input input {\n  background-color: white;\n  border: 1px solid rgb(214, 214, 214);\n  padding: 0.4rem;\n  border-radius: 0.3rem;\n}\n\n.modal-input:focus,\n.create-proj-input input:focus {\n  outline: none;\n}\n\n#description {\n  resize: none;\n}\n\n.btn-create-project {\n  margin: 0.2rem 0;\n}\n\n.task-complete {\n  text-decoration: line-through;\n  color: rgb(174, 174, 174);\n}\n\n.create-proj-input {\n  margin: 0.3rem 1.6rem 0.7rem;\n  justify-content: space-between;\n  align-items: center;\n  height: 1.5rem;\n}\n\n.create-proj-btns {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 0.8rem;\n  width: 0.8rem;\n}\n\n.create-proj-btns img {\n  height: 0.8rem;\n  width: 0.8rem;\n}\n\n",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=[],t=[],r=(e,t,n,r)=>({title:e,dueDate:t,priorityToColor:e=>"low"===e?"#069C56":"medium"===e?"#FF980E":"high"===e?"#D3212C":void 0,description:r,complete:!1,priority:n});function o(t){const n=document.querySelector("#title").value,o=document.querySelector("#due-date").value,i=document.querySelector("#priority").value,a=document.querySelector("#description").value,c=r(n,o,i,a);0===arguments.length?e.push(c):t.push(c)}function i(e,t){const n=e.target.closest(".task").getAttribute("data-index");t.splice(n,1)}function a(e,t,n){const r=document.querySelector(".task-modal"),o=e.target.closest(".task").getAttribute("data-index"),i=t[o];r.style.display="block";const a=document.querySelector("#title"),c=document.querySelector("#priority"),s=document.querySelector("#due-date"),l=document.querySelector("#description");a.value=i.title,s.value=i.dueDate,l.value=i.description,"low"===i.priority?c.selectedIndex=0:"medium"===i.priority?c.selectedIndex=1:c.selectedIndex=2;const d=document.querySelector(".submit-task-btn");d.innerHTML="+ Edit task",d.classList.add("submit-edit-task"),d.setAttribute("data-index",o),d.setAttribute("data-proj-index",n),document.querySelector(".form-title").innerHTML="Edit Task"}function c(e,t){const n=e.target.getAttribute("data-index"),r=document.querySelector("#title"),o=document.querySelector("#priority"),i=document.querySelector("#due-date"),a=document.querySelector("#description");t[n].title=r.value,t[n].priority=o.value,t[n].dueDate=i.value,t[n].description=a.value,e.target.classList.remove("submit-edit-task"),document.querySelector(".task-modal").style.display="none"}const s=(new Date).toLocaleDateString();function l(t){const n=document.querySelector(".task-container");document.querySelectorAll(".task").forEach((e=>e.remove()));for(let r=0;r<t.length;r++)for(let o=0;o<e.length;o++)if(t[r]===e[o]){const e=d(t[r],o,!1);n.appendChild(e)}}function d(e,t,n){const r=n?"proj-del-task":"del-task",o=n?"proj-edit-task":"edit-task",i=e.complete?"checked":"unchecked";return u(`\n    <div class="task ${e.complete?"task-complete":""}" data-index="${t}" style="border-left: 4px solid ${e.priorityToColor(e.priority)}">\n      <div class="title">\n        <input id="status${t}" type="checkbox" ${i}>\n        <label for="status${t}">${e.title}</label>\n      </div>\n      <div class="date">${e.dueDate}</div>\n      <div class="del-edit-task">\n        <button type="button"><img class="${o}" src="../src/images/edit.svg" alt="Edit"></button>\n        <button type="button"><img class="${r}" src="../src/images/close.svg" alt="Delete"></button>\n      </div>\n      <p class="description">${e.description}</p>\n    </div>\n  `)}function u(e){const t=document.createElement("template");return t.innerHTML=e.trim(),t.content.firstElementChild}function p(e){document.querySelectorAll(".menu-btn").forEach((e=>e.style.backgroundColor="transparent")),e.style.backgroundColor="rgb(231, 231, 231)"}function m(){const t=[...document.querySelectorAll(".menu-btn")].filter((e=>"transparent"!==e.style.backgroundColor)),n=e.filter((e=>e.dueDate===s)),r=e.filter((e=>e.dueDate!==s));0===t.length?l(e):t[0].classList.contains("today")?l(n):t[0].classList.contains("upcoming")?l(r):t[0].classList.contains("all")&&l(e)}function f(){document.querySelectorAll(".modal-input").forEach((e=>e.value="")),document.querySelector("#priority").selectedIndex=0,document.querySelector("#due-date").value=s}function g(){const e=document.querySelector(".create-proj-input");"none"===e.style.display?e.style.display="flex":e.style.display="none",e.firstElementChild.value=""}function y(e){document.querySelectorAll(".project").forEach((e=>e.remove()));for(let t=0;t<e.length;t++){const n=u(`\n    <div class="project menu-btn" data-index="${t}">\n      <button class="project-btn" type="button">${e[t].title}</button>\n      <button type="button" class="del-project"><img class="del-project" src="../src/images/close.svg" alt="Delete"></button>\n    </div>\n    `);document.querySelector(".menu").appendChild(n)}}function b(e){const t=document.querySelector(".task-container");document.querySelectorAll(".task").forEach((e=>e.remove()));for(let n=0;n<e.length;n++){const r=d(e[n],n,!0);t.appendChild(r)}}var h=n(379),v=n.n(h),x=n(795),k=n.n(x),S=n(569),j=n.n(S),q=n(565),A=n.n(q),L=n(216),w=n.n(L),E=n(589),C=n.n(E),T=n(890),D={};D.styleTagTransform=C(),D.setAttributes=A(),D.insert=j().bind(null,"head"),D.domAPI=k(),D.insertStyleElement=w(),v()(T.Z,D),T.Z&&T.Z.locals&&T.Z.locals,function(){const n=document.querySelector(".task-modal"),r=document.querySelector(".submit-task-btn");document.addEventListener("click",(n=>{if(n.target.classList.contains("del-project"))!function(e){const n=e.target.closest(".project").getAttribute("data-index");t.splice(n,1)}(n),n.target.closest(".project").remove(),b([]),document.querySelectorAll(".menu-btn").forEach((e=>e.style.backgroundColor="transparent")),y(t);else if(n.target.classList.contains("project-btn")){p(n.target.closest(".project"));const e=n.target.closest(".project").getAttribute("data-index");b(t[e].todoArray),r.classList.add("submit-proj-btn"),r.setAttribute("data-index",e)}else if(n.target.classList.contains("del-task"))i(n,e),m();else if(n.target.classList.contains("edit-task"))a(n,e);else if(n.target.classList.contains("proj-del-task")){const e=document.querySelector(".submit-task-btn").getAttribute("data-index");i(n,t[e].todoArray),b(t[e].todoArray)}else if(n.target.classList.contains("proj-edit-task")){const e=[...document.querySelectorAll(".project")].filter((e=>"rgb(231, 231, 231)"===e.style.backgroundColor))[0].getAttribute("data-index");a(n,t[e].todoArray,e)}})),document.addEventListener("change",(n=>{const r=[...document.querySelectorAll(".project")].filter((e=>"rgb(231, 231, 231)"===e.style.backgroundColor)),o=n.target.closest(".task");if("checkbox"===n.target.getAttribute("type")&&0===r.length){const t=o.getAttribute("data-index");n.target.checked?(o.classList.add("task-complete"),e[t].complete=!0):(o.classList.remove("task-complete"),e[t].complete=!1)}else if("checkbox"===n.target.getAttribute("type")&&0!==r.length){const e=o.getAttribute("data-index"),i=r[0].getAttribute("data-index");n.target.checked?(o.classList.add("task-complete"),t[i].todoArray[e].complete=!0):(o.classList.remove("task-complete"),t[i].todoArray[e].complete=!1)}})),n.addEventListener("click",(()=>{n.style.display="none",f()})),document.querySelector(".btn-new-task").addEventListener("click",(()=>{n.style.display="block",document.querySelector(".form-title").innerHTML="New Task",r.innerHTML="+ Add Task",r.classList.remove("submit-edit-task"),document.querySelector("#due-date").setAttribute("min",s),f()})),document.querySelector(".close-modal").addEventListener("click",(()=>{n.style.display="none",f()})),document.querySelector(".form-container").addEventListener("click",(e=>{e.stopPropagation()})),r.addEventListener("click",(i=>{const a=r.getAttribute("data-index"),s=r.getAttribute("data-proj-index"),l=i.target.classList;l.contains("submit-proj-btn")&&l.contains("submit-edit-task")?(c(i,t[s].todoArray),b(t[s].todoArray)):l.contains("submit-edit-task")?(c(i,e),m()):l.contains("submit-proj-btn")?(o(t[a].todoArray),b(t[a].todoArray),f(),n.style.display="none"):(n.style.display="none",o(),m(),f())})),document.querySelectorAll(".menu-btn").forEach((t=>{t.addEventListener("click",(t=>{t.target.classList.contains("all")?l(e):t.target.classList.contains("today")?l(e.filter((e=>e.dueDate===s))):t.target.classList.contains("upcoming")&&l(e.filter((e=>e.dueDate!==s))),p(t.target),r.classList.remove("submit-proj-btn")}))})),document.querySelector(".btn-create-project").addEventListener("click",g),document.querySelector(".close-proj-input").addEventListener("click",(()=>{g()})),document.querySelector(".submit-project-btn").addEventListener("click",(e=>{var n;n=document.querySelector(".project-input").value,t.push((e=>({title:e,todoArray:[]}))(n)),y(t),g()}))}(),document.querySelector(".all").style.backgroundColor="rgb(231, 231, 231)",l(e)})()})();