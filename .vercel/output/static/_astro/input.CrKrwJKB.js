import{aD as u,aE as i,a2 as v,aF as h,aG as y,aH as g,aI as k,aJ as A,u as m,aK as N}from"./render.BwN2KGBy.js";function I(e){if(v){var r=!1,a=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var _=e.value;n(e,"value",null),e.value=_}if(e.hasAttribute("checked")){var s=e.checked;n(e,"checked",null),e.checked=s}}};e.__on_r=a,y(a),g()}}function n(e,r,a,_){var s=e.__attributes??={};v&&(s[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||s[r]!==(s[r]=a)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[u]=a),a==null?e.removeAttribute(r):typeof a!="string"&&E(e).includes(r)?e[r]=a:e.setAttribute(r,a))}var t=new Map;function E(e){var r=t.get(e.nodeName);if(r)return r;t.set(e.nodeName,r=[]);for(var a,_=e,s=Element.prototype;s!==_;){a=h(_);for(var l in a)a[l].set&&r.push(l);_=i(_)}return r}function L(e,r,a=r){var _=k();A(e,"input",s=>{var l=s?e.defaultValue:e.value;if(l=f(e)?o(l):l,a(l),_&&l!==(l=r())){var d=e.selectionStart,c=e.selectionEnd;e.value=l??"",c!==null&&(e.selectionStart=d,e.selectionEnd=Math.min(c,e.value.length))}}),(v&&e.defaultValue!==e.value||m(r)==null&&e.value)&&a(f(e)?o(e.value):e.value),N(()=>{var s=r();f(e)&&s===o(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function f(e){var r=e.type;return r==="number"||r==="range"}function o(e){return e===""?null:+e}export{L as b,I as r,n as s};
