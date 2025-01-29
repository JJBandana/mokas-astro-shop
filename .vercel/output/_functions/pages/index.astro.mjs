import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_xZ2levgr.mjs';
import { $ as $$Catalog, p as products, a as $$Layout } from '../chunks/Catalog_SVb1ffua.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_HEXNp3S5.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Catalog", $$Catalog, { "products": products })} ` })}`;
}, "C:/Users/jjbri/Desktop/tests/src/pages/index.astro", undefined);

const $$file = "C:/Users/jjbri/Desktop/tests/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
