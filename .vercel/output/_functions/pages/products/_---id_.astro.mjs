import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderTransition, f as createAstro, a as renderComponent } from '../../chunks/astro/server_xZ2levgr.mjs';
import { a as $$Layout, p as products, $ as $$Catalog } from '../../chunks/Catalog_SVb1ffua.mjs';
/* empty css                                   */
/* empty css                                   */
import { p as push, a as pop } from '../../chunks/_@astro-renderers_HEXNp3S5.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_HEXNp3S5.mjs';

const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * @template V
 * @param {V} value
 * @param {boolean} [is_attr]
 */
function escape_html(value, is_attr) {
	const str = String(value ?? '');

	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;

	let escaped = '';
	let last = 0;

	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}

	return escaped + str.substring(last);
}

/**
 * `<div translate={false}>` should be rendered as `<div translate="no">` and _not_
 * `<div translate="false">`, which is equivalent to `<div translate="yes">`. There
 * may be other odd cases that need to be added to this list in future
 * @type {Record<string, Map<any, string>>}
 */
const replacements = {
	translate: new Map([
		[true, 'yes'],
		[false, 'no']
	])
};

/**
 * @template V
 * @param {string} name
 * @param {V} value
 * @param {boolean} [is_boolean]
 * @returns {string}
 */
function attr(name, value, is_boolean = false) {
	if (value == null || (!value && is_boolean) || (value === '' && name === 'class')) return '';
	const normalized = (name in replacements && replacements[name].get(value)) || value;
	const assignment = is_boolean ? '' : `="${escape_html(normalized, true)}"`;
	return ` ${name}${assignment}`;
}

const $$Astro$3 = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { images, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carousel" data-astro-cid-wfe7xcno> <img class="grid-item"${addAttribute(images[0], "src")}${addAttribute(name, "alt")} width="600" data-astro-cid-wfe7xcno${addAttribute(renderTransition($$result, "pdeiyswn", "", name), "data-astro-transition-scope")}> ${images.map((image, index) => {
    if (index !== 0) {
      return renderTemplate`<img class="grid-item"${addAttribute(image, "src")} width="600" data-astro-cid-wfe7xcno>`;
    }
  })} </div> `;
}, "C:/Users/jjbri/Desktop/tests/src/components/Carousel.astro", "self");

function BuyForm($$payload, $$props) {
	push();

	let quantity = 1;
	const minValue = 1;
	const maxValue = 10;

	$$payload.out += `<form><div class="details svelte-1atg4w9"><label for="variation" class="svelte-1atg4w9">Variation <select name="variation" id="variation" class="svelte-1atg4w9"><option value="0">Red</option><option value="1">Blue</option><option value="2">Black</option></select></label> <label for="quantity" class="svelte-1atg4w9">Quantity <div class="stepper svelte-1atg4w9"><button aria-label="increment" class="svelte-1atg4w9"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;" class="svelte-1atg4w9"><path d="M5 11h14v2H5z" class="svelte-1atg4w9"></path></svg></button> <input type="number" name="quantity" id="quantity"${attr('min', minValue)}${attr('max', maxValue)}${attr('value', quantity)} class="svelte-1atg4w9"> <div class="number">${escape_html(quantity)}</div> <button aria-label="decrement" class="svelte-1atg4w9"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;" class="svelte-1atg4w9"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" class="svelte-1atg4w9"></path></svg></button></div></label></div> <button class="button svelte-1atg4w9" type="submit">Add to the cart</button></form>`;
	pop();
}

const $$Astro$2 = createAstro();
const $$ProductInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductInfo;
  const { name, description, price } = Astro2.props;
  const features = ["Feature 1", "Feature 2", "Feature 3"];
  const anim = {
    old: {
      name: "appear",
      duration: "0.5s",
      easing: "ease-in",
      direction: "reverse"
    },
    new: {
      name: "appear",
      duration: "0.5s",
      easing: "ease-in-out"
    }
  };
  const customTransition = {
    forwards: anim,
    backwards: anim
  };
  return renderTemplate`${maybeRenderHead()}<div class="product-info" data-astro-cid-lse7m7nh${addAttribute(renderTransition($$result, "35rbjg6y", customTransition, ""), "data-astro-transition-scope")}> <h1 class="product-title" data-astro-cid-lse7m7nh>${name}</h1> <div class="price-container" data-astro-cid-lse7m7nh> <p class="price" data-astro-cid-lse7m7nh>${price}</p> <p class="compare-price" data-astro-cid-lse7m7nh>${price * 2}</p> </div> <div data-astro-cid-lse7m7nh> <div data-astro-cid-lse7m7nh> <p class="description" data-astro-cid-lse7m7nh> ${description} </p> </div> </div> <ul class="features" role="list" data-astro-cid-lse7m7nh> ${features.map((feature) => renderTemplate`<li data-astro-cid-lse7m7nh> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill:#000" data-astro-cid-lse7m7nh> <path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z" data-astro-cid-lse7m7nh></path> </svg> <p data-astro-cid-lse7m7nh>${feature}</p> </li>`)} </ul> ${renderComponent($$result, "BuyForm", BuyForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/BuyForm.svelte", "client:component-export": "default", "data-astro-cid-lse7m7nh": true })} </div> `;
}, "C:/Users/jjbri/Desktop/tests/src/components/ProductInfo.astro", "self");

const $$Astro$1 = createAstro();
const $$ProductSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductSection;
  const { product } = Astro2.props;
  const { id, name, images, description, price } = product;
  return renderTemplate`${maybeRenderHead()}<section class="product-section" data-astro-cid-ww43nytm> <div class="grid-container" data-astro-cid-ww43nytm> ${renderComponent($$result, "Carousel", $$Carousel, { "images": images, "name": name, "data-astro-cid-ww43nytm": true })} ${renderComponent($$result, "ProductInfo", $$ProductInfo, { "name": name, "description": description, "price": price, "data-astro-cid-ww43nytm": true })} </div> </section> `;
}, "C:/Users/jjbri/Desktop/tests/src/components/ProductSection.astro", undefined);

const $$Astro = createAstro();
const getStaticPaths = () => {
  return products.map((product) => {
    return {
      params: { id: product.id },
      props: { product }
    };
  });
};
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  Astro2.params;
  const { product } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": product.name }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProductSection", $$ProductSection, { "product": product })} ${maybeRenderHead()}<h2>Related Products</h2> ${renderComponent($$result2, "Catalog", $$Catalog, { "products": products, "excludeId": product.id })} ` })}`;
}, "C:/Users/jjbri/Desktop/tests/src/pages/products/[...id].astro", undefined);

const $$file = "C:/Users/jjbri/Desktop/tests/src/pages/products/[...id].astro";
const $$url = "/products/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
