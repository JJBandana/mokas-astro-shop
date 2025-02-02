import { r as renderers } from './chunks/_@astro-renderers_Dyki14la.mjs';
import { c as createExports } from './chunks/entrypoint_BHuKXgom.mjs';
import { manifest } from './manifest_BA7D7jvU.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/commerce-disclosure.astro.mjs');
const _page2 = () => import('./pages/products/_---slug_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.9_rollup@4.32.0_typescript@5.7.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/commerce-disclosure.astro", _page1],
    ["src/pages/products/[...slug].astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "397fcd59-0dbf-49ad-a0f0-a79f6682e822",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
