import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_aeNpjgWn.mjs';
import { e as escape_html, c as cartItems, $ as $$Layout } from '../chunks/Layout_23uLymRJ.mjs';
import { b as bind_props, p as push, c as copy_payload, a as assign_payload, u as unsubscribe_stores, d as pop, e as ensure_array_like, s as store_get } from '../chunks/_@astro-renderers_CiwgCeQP.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CiwgCeQP.mjs';
/* empty css                                */
import { a as attr } from '../chunks/attributes_ZE8oa0AH.mjs';

function Stepper($$payload, $$props) {
	let { quantity = 1, minValue = 1, maxValue = 10 } = $$props;

	$$payload.out += `<div class="stepper svelte-68l2ec"><button aria-label="increment" class="svelte-68l2ec"><svg width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor" class="svelte-68l2ec"><path d="M5 11h14v2H5z"></path></svg></button> <input type="number" name="quantity" id="quantity"${attr('min', minValue)}${attr('max', maxValue)}${attr('value', quantity)} class="svelte-68l2ec"> <div class="number svelte-68l2ec">${escape_html(quantity)}</div> <button aria-label="decrement" class="svelte-68l2ec"><svg width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor" class="svelte-68l2ec"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button></div>`;
	bind_props($$props, { quantity });
}

function CartTable($$payload, $$props) {
	push();

	var $$store_subs;
	let $$settled = true;
	let $$inner_payload;

	function $$render_inner($$payload) {
		const each_array = ensure_array_like(Object.values(store_get($$store_subs ??= {}, '$cartItems', cartItems)));

		$$payload.out += `<table class="svelte-1kb1ix6"><thead class="svelte-1kb1ix6"><tr class="svelte-1kb1ix6"><th class="product-col svelte-1kb1ix6">PRODUCT</th><th class="details-col svelte-1kb1ix6"></th><th class="quantity-col svelte-1kb1ix6">QUANTITY</th><th class="total-col svelte-1kb1ix6">TOTAL</th></tr></thead><tbody><!--[-->`;

		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let cartItem = each_array[$$index];

			$$payload.out += `<tr><td class="svelte-1kb1ix6"><img${attr('src', cartItem.imageSrc)}${attr('alt', cartItem.name)} width="100"></td><td class="svelte-1kb1ix6"><div class="item-description svelte-1kb1ix6"><h2>${escape_html(cartItem.name)}</h2> <p>${escape_html(cartItem.price)}</p></div></td><td class="svelte-1kb1ix6"><div class="quantity-cell">`;

			Stepper($$payload, {
				get value() {
					return cartItem.quantity;
				},
				set value($$value) {
					cartItem.quantity = $$value;
					$$settled = false;
				}
			});

			$$payload.out += `<!----></div></td><td class="svelte-1kb1ix6">${escape_html((cartItem.quantity * cartItem.price).toFixed(2))}</td></tr>`;
		}

		$$payload.out += `<!--]--></tbody></table>`;
	}
	do {
		$$settled = true;
		$$inner_payload = copy_payload($$payload);
		$$render_inner($$inner_payload);
	} while (!$$settled);

	assign_payload($$payload, $$inner_payload);
	if ($$store_subs) unsubscribe_stores($$store_subs);
	pop();
}

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Your Shopping Cart", "data-astro-cid-h3zw4u6d": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container" data-astro-cid-h3zw4u6d> <div class="title" data-astro-cid-h3zw4u6d> <h1 class="fs-900" data-astro-cid-h3zw4u6d>Your cart</h1> <a href="/" data-astro-cid-h3zw4u6d><h2 data-astro-cid-h3zw4u6d>Continue Shopping</h2></a> </div> ${renderComponent($$result2, "CartTable", CartTable, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/CartTable.svelte", "client:component-export": "default", "data-astro-cid-h3zw4u6d": true })} </main> ` })} `;
}, "C:/Develop/mokas-astro-shop/src/pages/cart.astro", undefined);

const $$file = "C:/Develop/mokas-astro-shop/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
