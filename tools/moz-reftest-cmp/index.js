!function e(t,n,o){function r(c,i){if(!n[c]){if(!t[c]){var l="function"==typeof require&&require;if(!i&&l)return l(c,!0);if(a)return a(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var d=n[c]={exports:{}};t[c][0].call(d.exports,(function(e){return r(t[c][1][e]||e)}),d,d.exports,e,t,n,o)}return n[c].exports}for(var a="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,t,n){"use strict";function o(e,t,n,a,c,i){for(var l,s,d,u,h=Math.max(t-1,0),f=Math.max(n-1,0),m=Math.min(t+1,a-1),g=Math.min(n+1,c-1),E=4*(n*a+t),p=0,v=0,y=0,T=0,I=0,x=h;x<=m;x++)for(var S=f;S<=g;S++)if(x!==t||S!==n){var w=r(e,e,E,4*(S*a+x),!0);if(0===w?p++:w<0?y++:w>0&&v++,p>2)return!1;i&&(w<T&&(T=w,l=x,s=S),w>I&&(I=w,d=x,u=S))}return!i||0!==y&&0!==v&&(!o(e,l,s,a,c)&&!o(i,l,s,a,c)||!o(e,d,u,a,c)&&!o(i,d,u,a,c))}function r(e,t,n,o,r){var s=e[n+3]/255,d=t[o+3]/255,u=l(e[n+0],s),h=l(e[n+1],s),f=l(e[n+2],s),m=l(t[o+0],d),g=l(t[o+1],d),E=l(t[o+2],d),p=a(u,h,f)-a(m,g,E);if(r)return p;var v=c(u,h,f)-c(m,g,E),y=i(u,h,f)-i(m,g,E);return.5053*p*p+.299*v*v+.1957*y*y}function a(e,t,n){return.29889531*e+.58662247*t+.11448223*n}function c(e,t,n){return.59597799*e-.2741761*t-.32180189*n}function i(e,t,n){return.21147017*e-.52261711*t+.31114694*n}function l(e,t){return 255+(e-255)*t}function s(e,t,n,o,r){e[t+0]=n,e[t+1]=o,e[t+2]=r,e[t+3]=255}t.exports=function(e,t,n,c,i,d){d||(d={});for(var u=void 0===d.threshold?.1:d.threshold,h=35215*u*u,f=0,m=0;m<i;m++)for(var g=0;g<c;g++){var E=4*(m*c+g);if(r(e,t,E,E)>h)d.includeAA||!o(e,g,m,c,i,t)&&!o(t,g,m,c,i,e)?(n&&s(n,E,255,0,0),f++):n&&s(n,E,255,255,0);else if(n){var p=l((T=void 0,I=void 0,x=void 0,S=void 0,T=(v=e)[(y=E)+3]/255,I=l(v[y+0],T),x=l(v[y+1],T),S=l(v[y+2],T),a(I,x,S)),.1);s(n,E,p,p,p)}}var v,y,T,I,x,S;return f}},{}],2:[function(e,t,n){const o=e("pixelmatch");let r=[],a=[],c=0;function i(){if(!a.length)return;const e=this.dataset.test_id,t=a[e];this.src=t.actual,document.querySelectorAll("#footer span").forEach(e=>e.classList.remove("current")),document.querySelector("#footer span:nth-child(2)").classList.add("current")}function l(){if(!a.length)return;const e=this.dataset.test_id,t=a[e];this.src=t.expected,document.querySelectorAll("#footer span").forEach(e=>e.classList.remove("current")),document.querySelector("#footer span:nth-child(1)").classList.add("current")}function s(){if(!a.length)return;const e=this.dataset.test_id,t=a[e];this.src=t.diff,document.querySelectorAll("#footer span").forEach(e=>e.classList.remove("current")),document.querySelector("#footer span:nth-child(3)").classList.add("current")}function d(){document.querySelectorAll("#navbar li").forEach(e=>e.classList.remove("current")),this.classList.add("current");const e=this.dataset.test_id,t=a[e];document.getElementById("testinfo").innerText="#"+e+" | "+t.head;const n=document.getElementById("compare");n.dataset.test_id=e,n.onmouseout.apply(n)}function u(){document.getElementById("page-input").classList.add("hidden"),document.getElementById("page-view").classList.remove("hidden");const e=document.getElementById("navbar");for(let t=0;t<a.length;t++){const n=document.createElement("li");n.dataset.test_id=t,n.appendChild(document.createTextNode(t)),n.onclick=d,e.appendChild(n)}}function h(e){return e.sort((function(e,t){return e.condition.localeCompare(t.condition)})).filter((e,t,n)=>!t||e.condition!=n[t-1].condition)}function f(e){const t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d");return n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,t.width,t.height),n.drawImage(e,0,0),n.getImageData(0,0,t.width,t.height)}function m(){const e=c+1,t=a[c];document.getElementById("load-status").innerHTML=e+" / "+a.length;const n=new Image;n.onload=()=>{const r=new Image;r.onload=()=>{const i=n.naturalWidth,l=n.naturalHeight;i==r.naturalWidth&&l==r.naturalHeight||console.warn("#"+e+" A/B differs in width/height");const s=document.createElement("canvas");s.width=i,s.height=l;const d=s.getContext("2d"),h=f(n),g=f(r),E=d.createImageData(i,l);o(h.data,g.data,E.data,i,l,{threshold:0,includeAA:!0}),d.putImageData(E,0,0),t.diff=s.toDataURL(),++c==a.length?u():setTimeout(m,0)},r.src=t.actual},n.src=t.expected}function g(e){const t=[];let n={};const o=/^(REFTEST )?TEST-UNEXPECTED-PASS \| /,r=/^(REFTEST )?TEST-(UNEXPECTED-)?FAIL \| /;return e.forEach(e=>{const a=e.match(o)||e.match(r);if(a&&a.length)return n.head&&(n.actual&&n.expected?t.push(n):console.log("Missing actual/expected for "+n.head)),(n={}).head=e,void(n.condition=e.substring(a[0].length,e.indexOf(" | ",a[0].length)));e.startsWith("REFTEST   IMAGE 1 (TEST): ")?n.actual=e.substring("REFTEST   IMAGE 1 (TEST): ".length):e.startsWith("REFTEST   IMAGE 2 (REFERENCE): ")&&(n.expected=e.substring("REFTEST   IMAGE 2 (REFERENCE): ".length))}),n.head&&n.actual&&n.expected&&t.push(n),t}function E(){const e=document.getElementById("file-base").files,t=document.getElementById("file-dev").files;if(!t.length)return;let n=new FileReader;n.onerror=e=>{alert(e.target.error.name)},n.onload=e=>{const t=e.target.result.split("\n");r=g(t)},e.length&&n.readAsText(e[0]),(n=new FileReader).onerror=e=>{alert(e.target.error.name)},n.onload=e=>{const t=e.target.result.split("\n");a=g(t),function(){r=h(r);const e=a.length;a=h(a),console.log("Removed "+(e-a.length)+" duplicates");let t=0,n=0;r.forEach(e=>{for(let n=0;n<a.length;n++)if(e.condition==a[n].condition)return a.splice(n,1),console.log("Removed baseline match: "+e.head),void t++;console.log("Only in baseline: "+e.head),n++}),console.log("Removed "+t+" baseline match"),console.log("Only in baseline: "+n)}(),document.getElementById("load-status").classList.remove("hidden"),document.getElementById("file-ok").classList.add("hidden"),a.length?m():u()},n.readAsText(t[0])}window.onload=()=>{document.getElementById("file-ok").onclick=E,document.getElementById("file-base-reset").onclick=()=>{document.getElementById("file-base").value=null},document.getElementById("file-dev-reset").onclick=()=>{document.getElementById("file-dev").value=null};const e=document.getElementById("compare");e.onmouseover=i,e.onmouseout=l,e.onmousedown=s,e.onmouseup=i}},{pixelmatch:1}]},{},[2]);