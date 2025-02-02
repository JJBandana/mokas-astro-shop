import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, g as renderScript, e as createAstro, a as renderComponent, h as renderHead, i as renderSlot } from './astro/server_Ck4zW6w-.mjs';
/* empty css                                       */
import { c as current_component, p as push, e as ensure_array_like, a as pop } from './_@astro-renderers_Dyki14la.mjs';

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

function Header($$payload) {
	$$payload.out += `<header class="svelte-7eud78"><a href="/"><svg id="a" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 185.8 154.9" class="svelte-7eud78"><defs><style>
          .st0,
          .st1 {
            isolation: isolate;
          }

          .st1 {
            fill: #231916;
            font-family: DarumadropOne-Regular, "Darumadrop One";
            font-size: 72px;
          }
        </style></defs><g class="st0"><text class="st1 svelte-7eud78" transform="translate(30.9 85.2) rotate(-29.1)"><tspan x="0" y="0">F</tspan></text></g><g class="st0"><text class="st1 svelte-7eud78" transform="translate(56.6 69.4) rotate(-10.4)"><tspan x="0" y="0">o</tspan></text></g><g class="st0"><text class="st1 svelte-7eud78" transform="translate(86.7 62.7) rotate(8.3)"><tspan x="0" y="0">o</tspan></text></g><g class="st0"><text class="st1 svelte-7eud78" transform="translate(117.4 66.8) rotate(24.9)"><tspan x="0" y="0">t</tspan></text></g><g class="st0"><text class="st1 svelte-7eud78" transform="translate(34.5 137.6) rotate(-30.3)"><tspan x="0" y="0">P</tspan></text></g><g class="st0"><text class="st1 svelte-7eud78" transform="translate(64.9 119.6) rotate(-11.9)"><tspan x="0" y="0">r</tspan></text></g><g class="st0"><text class="st1 svelte-7eud78" transform="translate(89.7 114.4) rotate(-.2)"><tspan x="0" y="0">i</tspan></text></g><g class="st0"><text class="st1 svelte-7eud78" transform="translate(102.3 112.8) rotate(12.4)"><tspan x="0" y="0">n</tspan></text></g><g class="st0"><text class="st1 svelte-7eud78" transform="translate(129.7 118.2) rotate(28.2)"><tspan x="0" y="0">t</tspan></text></g></svg></a></header>`;
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
		4000
	); // Every 4 seconds

	onDestroy(() => clearInterval(interval)); // Limpia el intervalo cuando el componente se destruye

	const each_array = ensure_array_like(phrases);

	$$payload.out += `<div class="announcement-bar svelte-a8j5l0"><!--[-->`;

	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let phrase = each_array[i];

		if (i === index) {
			$$payload.out += '<!--[-->';
			$$payload.out += `<p class="message container fs-600 svelte-a8j5l0">${escape_html(phrase)}</p>`;
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
}, "C:/Users/jjbri/Desktop/tests/src/components/Footer.astro", undefined);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/jjbri/Desktop/tests/node_modules/.pnpm/astro@5.1.9_rollup@4.32.0_typescript@5.7.3/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jjbri/Desktop/tests/node_modules/.pnpm/astro@5.1.9_rollup@4.32.0_typescript@5.7.3/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Footprint" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Announcement", Announcement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Announcement.svelte", "client:component-export": "default" })} ${renderComponent($$result, "Header", Header, {})} <div class="container"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/jjbri/Desktop/tests/src/layouts/Layout.astro", undefined);

export { $$Layout as $, escape_html as e };
