import{p as u}from"./proxy.DdCOot8Z.js";import{aL as m,aM as y,ar as h,a1 as _,a7 as $,a3 as v,a2 as g,aN as b,aO as x,aP as k}from"./render.kpEYB8nB.js";function f(e){return(n,...i)=>{var a=e(...i),t;if(_)t=$,v();else{var d=a.render().trim(),o=m(d);t=g(o),n.before(t)}const s=a.setup?.(t);y(t,t),typeof s=="function"&&h(s)}}const p=new WeakMap,w=e=>async(n,i,a,{client:t})=>{if(!e.hasAttribute("ssr"))return;let d,o,s={};for(const[r,c]of Object.entries(a))o??={},r==="default"?(o.default=!0,d=f(()=>({render:()=>`<astro-slot>${c}</astro-slot>`}))):o[r]=f(()=>({render:()=>`<astro-slot name="${r}">${c}</astro-slot>`})),r==="default"?s.children=f(()=>({render:()=>`<astro-slot>${c}</astro-slot>`})):s[r]=f(()=>({render:()=>`<astro-slot name="${r}">${c}</astro-slot>`}));const l={...i,children:d,$$slots:o,...s};if(p.has(e))p.get(e).setProps(l);else{const r=O(n,e,l,t!=="only");p.set(e,r),e.addEventListener("astro:unmount",()=>r.destroy(),{once:!0})}};function O(e,n,i,a){let t=u(i);const o=(a?b:x)(e,{target:n,props:t});return{setProps(s){Object.assign(t,s);for(const l in t)l in s||delete t[l]},destroy(){k(o)}}}export{w as default};
