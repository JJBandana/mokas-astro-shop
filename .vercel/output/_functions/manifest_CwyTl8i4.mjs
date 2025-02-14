import { f as decodeKey } from './chunks/astro/server_D_R5ONS9.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_UKZAwZea.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Develop/mokas-astro-shop/","cacheDir":"file:///C:/Develop/mokas-astro-shop/node_modules/.astro/","outDir":"file:///C:/Develop/mokas-astro-shop/dist/","srcDir":"file:///C:/Develop/mokas-astro-shop/src/","publicDir":"file:///C:/Develop/mokas-astro-shop/public/","buildClientDir":"file:///C:/Develop/mokas-astro-shop/dist/client/","buildServerDir":"file:///C:/Develop/mokas-astro-shop/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"commerce-disclosure/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/commerce-disclosure","isIndex":false,"type":"page","pattern":"^\\/commerce-disclosure\\/?$","segments":[[{"content":"commerce-disclosure","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/commerce-disclosure.astro","pathname":"/commerce-disclosure","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.2.5_@types+node@22._455e6c0a0004dd10e4941117cfa478e1/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/checkout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/checkout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"checkout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/checkout.ts","pathname":"/api/checkout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/cart.qxv2eydy.css"},{"type":"inline","content":".stepper.svelte-68l2ec{display:inline-flex;justify-content:center;align-items:center;width:fit-content;border:var(--clr-accent-800) 1px solid;border-radius:.5rem;background-color:var(--clr-accent-100);button:where(.svelte-68l2ec){background-color:inherit;padding:8px;height:40px;width:40px;min-height:40px;min-width:40px;cursor:pointer;overflow:hidden;border:none;border-radius:.5rem}svg:where(.svelte-68l2ec){color:var(--clr-accent-800)}input:where(.svelte-68l2ec){display:none}}.number.svelte-68l2ec{padding-inline:.5rem;padding-block:1.05rem;color:var(--clr-primary-500);font-weight:800}.title.svelte-1m0ee1l{display:flex;flex-direction:row;align-items:center;justify-content:space-between;a:where(.svelte-1m0ee1l){font-weight:500;font-size:1.25rem;text-decoration:underline;color:inherit}}table.svelte-1m0ee1l{width:100%;border-collapse:collapse;margin:25px 0;table-layout:fixed}thead.svelte-1m0ee1l tr:where(.svelte-1m0ee1l){border-bottom:2px solid var(--clr-primary-400);vertical-align:top;color:var(--clr-accent-400)}th.svelte-1m0ee1l,td.svelte-1m0ee1l{padding:12px;vertical-align:middle}.product-col.svelte-1m0ee1l{width:20%;text-align:left}.details-col.svelte-1m0ee1l{width:40%}.quantity-col.svelte-1m0ee1l{width:20%;text-align:left}.total-col.svelte-1m0ee1l{width:20%;text-align:right}.item-description.svelte-1m0ee1l{width:100%;height:100%;display:flex;flex-direction:column;padding-top:1rem;align-items:start}\n"}],"routeData":{"route":"/cart","isIndex":false,"type":"page","pattern":"^\\/cart\\/?$","segments":[[{"content":"cart","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cart.astro","pathname":"/cart","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Develop/mokas-astro-shop/src/components/Carousel.astro",{"propagation":"in-tree","containsHead":false}],["C:/Develop/mokas-astro-shop/src/components/ProductSection.astro",{"propagation":"in-tree","containsHead":false}],["C:/Develop/mokas-astro-shop/src/pages/products/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/products/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Develop/mokas-astro-shop/src/components/ProductInfo.astro",{"propagation":"in-tree","containsHead":false}],["C:/Develop/mokas-astro-shop/src/components/ProductCard.astro",{"propagation":"in-tree","containsHead":false}],["C:/Develop/mokas-astro-shop/src/components/Catalog.astro",{"propagation":"in-tree","containsHead":false}],["C:/Develop/mokas-astro-shop/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Develop/mokas-astro-shop/src/pages/cart.astro",{"propagation":"none","containsHead":true}],["C:/Develop/mokas-astro-shop/src/pages/commerce-disclosure.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/commerce-disclosure@_@astro":"pages/commerce-disclosure.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/cart@_@astro":"pages/cart.astro.mjs","\u0000@astro-page:src/pages/api/checkout@_@ts":"pages/api/checkout.astro.mjs","\u0000@astro-page:src/pages/products/[...slug]@_@astro":"pages/products/_---slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.2.5_@types+node@22._455e6c0a0004dd10e4941117cfa478e1/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Develop/mokas-astro-shop/node_modules/.pnpm/astro@5.2.5_@types+node@22._455e6c0a0004dd10e4941117cfa478e1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_xUjSAG28.mjs","\u0000@astrojs-manifest":"manifest_CwyTl8i4.mjs","@/components/CartTable.svelte":"_astro/CartTable.CI_YC_2Y.js","@/components/Announcement.svelte":"_astro/Announcement.ws2nbol2.js","@/components/Header.svelte":"_astro/Header.anypYuBz.js","@/components/BuyForm.svelte":"_astro/BuyForm.BJRaYhQ_.js","@astrojs/svelte/client.js":"_astro/client.svelte.jIQrdPWt.js","C:/Develop/mokas-astro-shop/node_modules/.pnpm/astro@5.2.5_@types+node@22._455e6c0a0004dd10e4941117cfa478e1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/cart.qxv2eydy.css","/1.jpg","/3.jpg","/8.jpg","/favicon.svg","/logo.svg","/black/black1.jpeg","/black/black1.webp","/black/black2.jpeg","/black/black3.jpeg","/red/red1.jpeg","/red/red2.jpeg","/red/red3.jpeg","/blue/blue1.jpeg","/blue/blue2.jpeg","/blue/blue3.jpeg","/blue/blue4.jpeg","/shared/shared1.jpeg","/shared/shared2.jpeg","/shared/shared3.jpeg","/shared/shared4.jpeg","/shared/shared5.jpeg","/shared/shared6.jpeg","/_astro/Announcement.ws2nbol2.js","/_astro/BuyForm.BJRaYhQ_.js","/_astro/cart.3Z7MHHZi.css","/_astro/cart.Bxq2mFzT.css","/_astro/CartTable.CI_YC_2Y.js","/_astro/client.svelte.jIQrdPWt.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/_astro/disclose-version.BDr9Qe-U.js","/_astro/each.CIj6NuSL.js","/_astro/Header.anypYuBz.js","/_astro/input.DSiXecgl.js","/_astro/lifecycle.DINW8IH3.js","/_astro/proxy.DdCOot8Z.js","/_astro/render.kpEYB8nB.js","/_astro/state.M9ceUbY8.js","/_astro/store.Cbcu9xv3.js","/_astro/_slug_.BKSpQ9_x.css","/commerce-disclosure/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"d73u8kKiyB2BaOil798FYHZr841Vf7gG3PVoFMkIYtc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
