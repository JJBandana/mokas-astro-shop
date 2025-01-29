import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Cv9Tq_Qa.mjs';
import { d as decodeKey } from './chunks/astro/server_xZ2levgr.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/jjbri/Desktop/tests/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.1.9_rollup@4.32.0_typescript@5.7.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.5VP9Ktej.css"},{"type":"inline","content":".carousel[data-astro-cid-wfe7xcno]{display:grid;grid-template-columns:1fr;width:100%;scroll-snap-type:x mandatory;gap:.5rem}.grid-item[data-astro-cid-wfe7xcno]{scroll-snap-align:center;aspect-ratio:1;width:100%;border-radius:15px}@media (max-width: 990px){.carousel[data-astro-cid-wfe7xcno]{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:96%;overflow-x:auto;height:auto;gap:.25rem}}button.svelte-1atg4w9,select.svelte-1atg4w9{border:black 1px solid}label.svelte-1atg4w9{display:flex;flex-direction:column}select#variation.svelte-1atg4w9{border-radius:30px;min-height:40px;padding:8px}.details.svelte-1atg4w9{display:inline-flex;flex-direction:row;gap:20px;margin-bottom:16px}.stepper.svelte-1atg4w9{display:inline-flex;justify-content:center;align-items:center;width:fit-content;border:black 1px solid;border-radius:30px;button:where(.svelte-1atg4w9){padding:8px;height:40px;width:40px;min-height:40px;min-width:40px;cursor:pointer;overflow:hidden;border:none;border-radius:30px;:where(.svelte-1atg4w9):hover{background-color:var(--color-primary-600)}}input:where(.svelte-1atg4w9){display:none}}.product-title[data-astro-cid-lse7m7nh]{font-size:3.5rem;text-wrap:balance;line-height:1}.features[data-astro-cid-lse7m7nh]{padding-block:10px}li[data-astro-cid-lse7m7nh]{display:flex;align-items:center;gap:8px;padding-block:4px;p{font-weight:500;font-size:1.25rem}}.price-container[data-astro-cid-lse7m7nh]{display:flex;align-items:baseline;gap:8px}.price[data-astro-cid-lse7m7nh]{color:var(--color-surface-200);font-size:1.5rem;font-weight:600;line-height:1.5rem}.compare-price[data-astro-cid-lse7m7nh]{color:var(--color-surface-500);font-weight:400;text-decoration:line-through}.product-info[data-astro-cid-lse7m7nh]{display:flex;flex-flow:column nowrap;position:sticky;top:6rem;max-height:fit-content}.product-section[data-astro-cid-ww43nytm]{max-width:90%;margin:0 auto}.grid-container[data-astro-cid-ww43nytm]{max-width:100%;margin:0 auto;display:grid;gap:5rem;grid-template-columns:60fr 40fr;padding-bottom:3rem;position:relative}@media (max-width: 990px){.grid-container[data-astro-cid-ww43nytm]{grid-template-columns:1fr;grid-template-rows:1fr;grid-auto-rows:auto;gap:1.5rem}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/products/[...id]","isIndex":false,"type":"page","pattern":"^\\/products(?:\\/(.*?))?\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}],[{"content":"...id","dynamic":true,"spread":true}]],"params":["...id"],"component":"src/pages/products/[...id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.5VP9Ktej.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/jjbri/Desktop/tests/src/components/Carousel.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jjbri/Desktop/tests/src/components/ProductSection.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jjbri/Desktop/tests/src/pages/products/[...id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/products/[...id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/jjbri/Desktop/tests/src/components/ProductInfo.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jjbri/Desktop/tests/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/jjbri/Desktop/tests/src/components/ProductCard.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jjbri/Desktop/tests/src/components/Catalog.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/products/[...id]@_@astro":"pages/products/_---id_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.1.9_rollup@4.32.0_typescript@5.7.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/jjbri/Desktop/tests/node_modules/.pnpm/astro@5.1.9_rollup@4.32.0_typescript@5.7.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CIuA_WHq.mjs","\u0000@astrojs-manifest":"manifest_DpJlyTAX.mjs","@/components/BuyForm.svelte":"_astro/BuyForm.CZzq4o_L.js","@astrojs/svelte/client.js":"_astro/client.svelte.DaECDulQ.js","C:/Users/jjbri/Desktop/tests/node_modules/.pnpm/astro@5.1.9_rollup@4.32.0_typescript@5.7.3/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.5VP9Ktej.css","/books1.jpeg","/books2.jpeg","/books3.jpeg","/books4.jpeg","/books5.jpeg","/books6.jpeg","/books7.jpeg","/favicon.svg","/_astro/BuyForm.CZzq4o_L.js","/_astro/client.svelte.DaECDulQ.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/_astro/render.BpbAiuxV.js","/_astro/_id_.CNkqkDoc.css"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"zg3dqlYXOIzfdF7OEhlvUvWu1bLvST/tdVK0OoVVoEk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
