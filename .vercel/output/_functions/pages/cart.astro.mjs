import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_D_R5ONS9.mjs';
import { e as escape_html, c as cartItems, r as removeCartItem, u as updateQuantity, $ as $$Layout } from '../chunks/Layout_CAhmaF8p.mjs';
import { b as bind_props, p as push, c as copy_payload, a as assign_payload, u as unsubscribe_stores, d as pop, s as store_get, e as ensure_array_like } from '../chunks/_@astro-renderers_CiwgCeQP.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CiwgCeQP.mjs';
/* empty css                                */
import { a as attr } from '../chunks/attributes_GcH0ZnsA.mjs';

function Stepper($$payload, $$props) {
	let {
		quantity = 1,
		minValue = 1,
		maxValue = 10,
		decrement,
		increment
	} = $$props;

	$$payload.out += `<div class="stepper svelte-68l2ec"><button aria-label="increment" class="svelte-68l2ec"><svg width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor" class="svelte-68l2ec"><path d="M5 11h14v2H5z"></path></svg></button> <input type="number" name="quantity" id="quantity"${attr('min', minValue)}${attr('max', maxValue)}${attr('value', quantity)} class="svelte-68l2ec"> <div class="number svelte-68l2ec">${escape_html(quantity)}</div> <button aria-label="decrement" class="svelte-68l2ec"><svg width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor" class="svelte-68l2ec"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button></div>`;
	bind_props($$props, { quantity });
}

function CartTable($$payload, $$props) {
	push();

	var $$store_subs;

	const increment = (id, quantity) => {
		if (quantity < 10) {
			updateQuantity(id, quantity + 1);
		}
	};

	const decrement = (id, quantity) => {
		if (quantity <= 1) {
			removeCartItem(id);
		} else {
			updateQuantity(id, quantity - 1);
		}
	};

	let $$settled = true;
	let $$inner_payload;

	function $$render_inner($$payload) {
		if (Object.keys(store_get($$store_subs ??= {}, '$cartItems', cartItems)).length > 0) {
			$$payload.out += '<!--[-->';

			const each_array = ensure_array_like(Object.values(store_get($$store_subs ??= {}, '$cartItems', cartItems)));

			$$payload.out += `<div class="title svelte-1c25pzb"><h1 class="fs-900">Your cart</h1> <a href="/" class="svelte-1c25pzb"><h2>Continue Shopping</h2></a></div> <table class="svelte-1c25pzb"><thead class="svelte-1c25pzb"><tr class="svelte-1c25pzb"><th class="product-col svelte-1c25pzb">PRODUCT</th><th class="details-col svelte-1c25pzb"></th><th class="quantity-col svelte-1c25pzb">QUANTITY</th><th class="total-col svelte-1c25pzb">TOTAL</th></tr></thead><tbody><!--[-->`;

			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let cartItem = each_array[$$index];

				$$payload.out += `<tr><td class="svelte-1c25pzb"><img${attr('src', cartItem.imageSrc)}${attr('alt', cartItem.name)} width="100"></td><td class="svelte-1c25pzb"><div class="item-description svelte-1c25pzb"><h2>${escape_html(cartItem.name)}</h2> <p>${escape_html(cartItem.price)}</p></div></td><td class="svelte-1c25pzb"><div class="quantity-cell">`;

				Stepper($$payload, {
					increment: () => increment(cartItem.id, cartItem.quantity),
					decrement: () => decrement(cartItem.id, cartItem.quantity),
					get quantity() {
						return cartItem.quantity;
					},
					set quantity($$value) {
						cartItem.quantity = $$value;
						$$settled = false;
					}
				});

				$$payload.out += `<!----></div></td><td class="svelte-1c25pzb">${escape_html((cartItem.quantity * cartItem.price).toFixed(2))}</td></tr>`;
			}

			$$payload.out += `<!--]--></tbody></table> <button class="button">Checkout</button>`;
		} else {
			$$payload.out += '<!--[!-->';
			$$payload.out += `<section class="empty svelte-1c25pzb"><h1 class="fs-900">Your Cart is Empty</h1> <a class="button" href="/">Continue Shopping</a></section>`;
		}

		$$payload.out += `<!--]-->`;
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

const prerender = false;
const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Your Shopping Cart" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CartTable", CartTable, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/CartTable.svelte", "client:component-export": "default" })} ` })}`;
}, "C:/Develop/mokas-astro-shop/src/pages/cart.astro", undefined);

const $$file = "C:/Develop/mokas-astro-shop/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
