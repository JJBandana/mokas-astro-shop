import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Ck4zW6w-.mjs';
import { $ as $$Layout } from '../chunks/Layout_g0wJTfZz.mjs';
/* empty css                                               */
export { r as renderers } from '../chunks/_@astro-renderers_Dyki14la.mjs';

const $$CommerceDisclosure = createComponent(($$result, $$props, $$slots) => {
  const data = {
    legal_name: "Footprint",
    addres: "**-**12 Nagatacho, Chiyoda-ku, Tokyo \u3012100-6178",
    phone: "We will disclose without delay if requested",
    email: "contact@example.jp",
    head_operations: "Yano Moka",
    additional_fees: "A flat-rate shipping consts: 1000 per box",
    returns: "\uFF1CReturns and exchanges requested by customers\uFF1E\nItems before shipping: You can cancel your order by pressing the cancel button on the website.\nItems after shipping: Unopened items can be refunded or exchanged for items of equal or lesser value only if you contact the customer support center (insert phone number) within 10 days of the arrival of the item. We do not accept returns or exchanges of items after opening.\n\n\uFF1CReturns and exchanges for defective goods and services\uFF1E\nPlease contact the customer support center (*insert phone number*). We will refund or exchange with new products at our shipping cost.",
    delivery_times: "Orders will be processed within 3-5 business days.\nProducts should be received within 14 days and are available as soon as you place your order.",
    payment_methods: "Credit cards or via local bank transfer",
    payment_period: "Credit card payments are processed immediately, while local bank transfers must be sent within 3 days of the date of order.",
    price: "4000 Yen. Amounts listed on each product page"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-75yba7td": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container" data-astro-cid-75yba7td> <section data-astro-cid-75yba7td> <h1 class="fs-800 text-neutral-900" data-astro-cid-75yba7td>Commerce Disclosure</h1> <h3 class="fs-300" data-astro-cid-75yba7td>Last updated: February 1, 2025</h3> <p data-astro-cid-75yba7td>
This notation is based on the Specified Commercial Transaction Law of
        Japan
</p> <p data-astro-cid-75yba7td>
By using our website or purchasing our products and services, you
        acknowledge and agree the following:
</p> </section> <table class="content-table" data-astro-cid-75yba7td> <tbody data-astro-cid-75yba7td> ${Object.entries(data).map(([key, value]) => {
    key = key[0].toUpperCase() + key.substring(1);
    return renderTemplate`<tr data-astro-cid-75yba7td> <td class="heading" data-astro-cid-75yba7td>${key.split("_").join(" ")}</td> <td class="value" data-astro-cid-75yba7td>${value}</td> </tr>`;
  })} </tbody> </table> </main> ` })} `;
}, "C:/Users/jjbri/Desktop/tests/src/pages/commerce-disclosure.astro", undefined);

const $$file = "C:/Users/jjbri/Desktop/tests/src/pages/commerce-disclosure.astro";
const $$url = "/commerce-disclosure";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CommerceDisclosure,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
