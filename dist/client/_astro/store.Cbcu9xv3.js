import{U as t,u as b,ar as f,as as l,m as _,a as d,b as p}from"./render.kpEYB8nB.js";function c(e,u,s){if(e==null)return u(void 0),t;const n=b(()=>e.subscribe(u,s));return n.unsubscribe?()=>n.unsubscribe():n}function v(e){let u;return c(e,s=>u=s)(),u}let r=!1,i=Symbol();function m(e,u,s){const n=s[u]??={store:null,source:_(void 0),unsubscribe:t};if(n.store!==e&&!(i in s))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=t;else{var a=!0;n.unsubscribe=c(e,o=>{a?n.source.v=o:p(n.source,o)}),a=!1}return e&&i in s?v(e):d(n.source)}function y(){const e={};function u(){f(()=>{for(var s in e)e[s].unsubscribe();l(e,i,{enumerable:!1,value:!0})})}return[e,u]}function U(e){var u=r;try{return r=!1,[e(),r]}finally{r=u}}export{m as a,U as c,y as s};
