import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, g as renderScript, a as renderComponent, h as renderHead, i as renderSlot } from './astro/server_aeNpjgWn.mjs';
/* empty css                        */
import { f as current_component, p as push, s as store_get, u as unsubscribe_stores, d as pop, e as ensure_array_like } from './_@astro-renderers_CiwgCeQP.mjs';
import { atom, computed } from 'nanostores';
import { persistentMap } from '@nanostores/persistent';

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

/** @import { Component } from '#server' */

/** @param {() => void} fn */
function onDestroy(fn) {
	var context = /** @type {Component} */ (current_component);
	(context.d ??= []).push(fn);
}

const isCartOpen = atom(false);
const cartItems = persistentMap(
  "cart",
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);
const getTotalQuantity = computed(
  cartItems,
  (items) => Object.values(items).reduce((total, item) => total + item.quantity, 0)
);

function Header($$payload, $$props) {
	push();

	var $$store_subs;

	$$payload.out += `<header class="svelte-14xozo2"><div class="nav-left flex-content svelte-14xozo2">`;

	if (store_get($$store_subs ??= {}, '$isCartOpen', isCartOpen)) {
		$$payload.out += '<!--[-->';
		$$payload.out += `<div class="cart svelte-14xozo2"><h4>Item added to your cart</h4></div>`;
	} else {
		$$payload.out += '<!--[!-->';
	}

	$$payload.out += `<!--]--></div> <div class="nav-center flex-content svelte-14xozo2"><a href="/"><svg id="a" version="1.1" viewBox="0 0 185.8 154.9" class="svelte-14xozo2"><defs><style>
            .st0,
            .st1 {
              isolation: isolate;
            }

            .st1 {
              fill: #231916;
              font-family: DarumadropOne-Regular, "Darumadrop One";
              font-size: 72px;
            }
          </style></defs><g class="st0"><text class="st1 svelte-14xozo2" transform="translate(30.9 85.2) rotate(-29.1)"><tspan x="0" y="0">F</tspan></text></g><g class="st0"><text class="st1 svelte-14xozo2" transform="translate(56.6 69.4) rotate(-10.4)"><tspan x="0" y="0">o</tspan></text></g><g class="st0"><text class="st1 svelte-14xozo2" transform="translate(86.7 62.7) rotate(8.3)"><tspan x="0" y="0">o</tspan></text></g><g class="st0"><text class="st1 svelte-14xozo2" transform="translate(117.4 66.8) rotate(24.9)"><tspan x="0" y="0">t</tspan></text></g><g class="st0"><text class="st1 svelte-14xozo2" transform="translate(34.5 137.6) rotate(-30.3)"><tspan x="0" y="0">P</tspan></text></g><g class="st0"><text class="st1 svelte-14xozo2" transform="translate(64.9 119.6) rotate(-11.9)"><tspan x="0" y="0">r</tspan></text></g><g class="st0"><text class="st1 svelte-14xozo2" transform="translate(89.7 114.4) rotate(-.2)"><tspan x="0" y="0">i</tspan></text></g><g class="st0"><text class="st1 svelte-14xozo2" transform="translate(102.3 112.8) rotate(12.4)"><tspan x="0" y="0">n</tspan></text></g><g class="st0"><text class="st1 svelte-14xozo2" transform="translate(129.7 118.2) rotate(28.2)"><tspan x="0" y="0">t</tspan></text></g></svg></a></div> <div class="nav-right flex-content svelte-14xozo2"><a href="/cart" class="shopping-cart svelte-14xozo2"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" class="svelte-14xozo2"><path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#1C274C" stroke-width="1.5"></path><path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#1C274C" stroke-width="1.5"></path><path d="M2.26121 3.09184L2.50997 2.38429H2.50997L2.26121 3.09184ZM2.24876 2.29246C1.85799 2.15507 1.42984 2.36048 1.29246 2.75124C1.15507 3.14201 1.36048 3.57016 1.75124 3.70754L2.24876 2.29246ZM4.58584 4.32298L5.20507 3.89983V3.89983L4.58584 4.32298ZM5.88772 14.5862L5.34345 15.1022H5.34345L5.88772 14.5862ZM20.6578 9.88275L21.3923 10.0342L21.3933 10.0296L20.6578 9.88275ZM20.158 12.3075L20.8926 12.4589L20.158 12.3075ZM20.7345 6.69708L20.1401 7.15439L20.7345 6.69708ZM19.1336 15.0504L18.6598 14.469L19.1336 15.0504ZM5.70808 9.76V7.03836H4.20808V9.76H5.70808ZM2.50997 2.38429L2.24876 2.29246L1.75124 3.70754L2.01245 3.79938L2.50997 2.38429ZM10.9375 16.25H16.2404V14.75H10.9375V16.25ZM5.70808 7.03836C5.70808 6.3312 5.7091 5.7411 5.65719 5.26157C5.60346 4.76519 5.48705 4.31247 5.20507 3.89983L3.96661 4.74613C4.05687 4.87822 4.12657 5.05964 4.1659 5.42299C4.20706 5.8032 4.20808 6.29841 4.20808 7.03836H5.70808ZM2.01245 3.79938C2.68006 4.0341 3.11881 4.18965 3.44166 4.34806C3.74488 4.49684 3.87855 4.61727 3.96661 4.74613L5.20507 3.89983C4.92089 3.48397 4.54304 3.21763 4.10241 3.00143C3.68139 2.79485 3.14395 2.60719 2.50997 2.38429L2.01245 3.79938ZM4.20808 9.76C4.20808 11.2125 4.22171 12.2599 4.35876 13.0601C4.50508 13.9144 4.79722 14.5261 5.34345 15.1022L6.43198 14.0702C6.11182 13.7325 5.93913 13.4018 5.83723 12.8069C5.72607 12.1578 5.70808 11.249 5.70808 9.76H4.20808ZM10.9375 14.75C9.52069 14.75 8.53763 14.7482 7.79696 14.6432C7.08215 14.5418 6.70452 14.3576 6.43198 14.0702L5.34345 15.1022C5.93731 15.7286 6.69012 16.0013 7.58636 16.1283C8.45674 16.2518 9.56535 16.25 10.9375 16.25V14.75ZM4.95808 6.87H17.0888V5.37H4.95808V6.87ZM19.9232 9.73135L19.4235 12.1561L20.8926 12.4589L21.3923 10.0342L19.9232 9.73135ZM17.0888 6.87C17.9452 6.87 18.6989 6.871 19.2937 6.93749C19.5893 6.97053 19.8105 7.01643 19.9659 7.07105C20.1273 7.12776 20.153 7.17127 20.1401 7.15439L21.329 6.23978C21.094 5.93436 20.7636 5.76145 20.4632 5.65587C20.1567 5.54818 19.8101 5.48587 19.4604 5.44678C18.7646 5.369 17.9174 5.37 17.0888 5.37V6.87ZM21.3933 10.0296C21.5625 9.18167 21.7062 8.47024 21.7414 7.90038C21.7775 7.31418 21.7108 6.73617 21.329 6.23978L20.1401 7.15439C20.2021 7.23508 20.2706 7.38037 20.2442 7.80797C20.2168 8.25191 20.1002 8.84478 19.9223 9.73595L21.3933 10.0296ZM16.2404 16.25C17.0021 16.25 17.6413 16.2513 18.1566 16.1882C18.6923 16.1227 19.1809 15.9794 19.6074 15.6318L18.6598 14.469C18.5346 14.571 18.3571 14.6525 17.9744 14.6994C17.5712 14.7487 17.0397 14.75 16.2404 14.75V16.25ZM19.4235 12.1561C19.2621 12.9389 19.1535 13.4593 19.0238 13.8442C18.9007 14.2095 18.785 14.367 18.6598 14.469L19.6074 15.6318C20.0339 15.2842 20.2729 14.8346 20.4453 14.3232C20.6111 13.8312 20.7388 13.2049 20.8926 12.4589L19.4235 12.1561Z" fill="#1C274C"></path></svg> `;

	if (store_get($$store_subs ??= {}, '$getTotalQuantity', getTotalQuantity) > 0) {
		$$payload.out += '<!--[-->';
		$$payload.out += `<span class="svelte-14xozo2">${escape_html(store_get($$store_subs ??= {}, '$getTotalQuantity', getTotalQuantity))}</span>`;
	} else {
		$$payload.out += '<!--[!-->';
	}

	$$payload.out += `<!--]--></a> <button>🗑️</button></div></header>`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
	pop();
}

function Announcement($$payload, $$props) {
	push();

	let phrases = [
		"Celebrating our new book release with a special sale!",
		"Limited time offer! Celebrate our new book with an exclusive discount"
	];

	let index = 0;

	const interval = setInterval(
		() => {
			index = (index + 1) % phrases.length; // Cambia la frase suavemente
		},
		7000
	); // Every 7 seconds

	onDestroy(() => clearInterval(interval)); // Limpia el intervalo cuando el componente se destruye

	const each_array = ensure_array_like(phrases);

	$$payload.out += `<div class="announcement-bar svelte-vlpy8i"><!--[-->`;

	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let phrase = each_array[i];

		if (i === index) {
			$$payload.out += '<!--[-->';
			$$payload.out += `<p class="message container fs-600 svelte-vlpy8i">${escape_html(phrase)}</p>`;
		} else {
			$$payload.out += '<!--[!-->';
		}

		$$payload.out += `<!--]-->`;
	}

	$$payload.out += `<!--]--></div>`;
	pop();
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <ul role="list" data-astro-cid-sz7xmlte> <li id="brand" data-astro-cid-sz7xmlte>&copy; 2025 FootPrint</li> <li data-astro-cid-sz7xmlte><a href="#" data-astro-cid-sz7xmlte>Contact Us</a></li> <li data-astro-cid-sz7xmlte><a href="#" data-astro-cid-sz7xmlte>Privacy Policy</a></li> <li data-astro-cid-sz7xmlte><a href="/commerce-disclosure" data-astro-cid-sz7xmlte>Commerce Disclosure</a></li> </ul> </footer> `;
}, "C:/Develop/mokas-astro-shop/src/components/Footer.astro", undefined);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Develop/mokas-astro-shop/node_modules/.pnpm/astro@5.2.5_@types+node@22._455e6c0a0004dd10e4941117cfa478e1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Develop/mokas-astro-shop/node_modules/.pnpm/astro@5.2.5_@types+node@22._455e6c0a0004dd10e4941117cfa478e1/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Footprint" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Announcement", Announcement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Announcement.svelte", "client:component-export": "default" })} ${renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Header.svelte", "client:component-export": "default" })} <div class="container"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Develop/mokas-astro-shop/src/layouts/Layout.astro", undefined);

export { $$Layout as $, cartItems as c, escape_html as e };
