import { r as renderers } from './chunks/_@astro-renderers_CiwgCeQP.mjs';
import { c as createExports } from './chunks/entrypoint_BJuBSqRz.mjs';
import { manifest } from './manifest_C2DxYh8w.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/checkout.astro.mjs');
const _page2 = () => import('./pages/cart.astro.mjs');
const _page3 = () => import('./pages/commerce-disclosure.astro.mjs');
const _page4 = () => import('./pages/products/_---slug_.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.2.5_@types+node@22._455e6c0a0004dd10e4941117cfa478e1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/checkout.ts", _page1],
    ["src/pages/cart.astro", _page2],
    ["src/pages/commerce-disclosure.astro", _page3],
    ["src/pages/products/[...slug].astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a243ce9d-2757-4da6-ab8e-259f412802d2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
