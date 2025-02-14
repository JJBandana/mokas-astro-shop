import Stripe from 'stripe';
import { c as createInvalidVariablesError, g as getEnv$1, s as setOnSetGetEnv } from '../../chunks/runtime_ArhQOHAw.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CiwgCeQP.mjs';

const schema = {"STRIPE_SECRET_KEY":{"context":"server","access":"secret","type":"string"},"STRIPE_PUBLISHABLE_KEY":{"context":"server","access":"public","type":"string"}};

function getEnvFieldType(options) {
  const optional = options.optional ? options.default !== undefined ? false : true : false;
  let type;
  if (options.type === "enum") {
    type = options.values.map((v) => `'${v}'`).join(" | ");
  } else {
    type = options.type;
  }
  return `${type}${optional ? " | undefined" : ""}`;
}
const stringValidator = ({ max, min, length, url, includes, startsWith, endsWith }) => (input) => {
  if (typeof input !== "string") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (max !== undefined && !(input.length <= max)) {
    errors.push("max");
  }
  if (min !== undefined && !(input.length >= min)) {
    errors.push("min");
  }
  if (length !== undefined && !(input.length === length)) {
    errors.push("length");
  }
  if (url !== undefined && !URL.canParse(input)) {
    errors.push("url");
  }
  if (includes !== undefined && !input.includes(includes)) {
    errors.push("includes");
  }
  if (startsWith !== undefined && !input.startsWith(startsWith)) {
    errors.push("startsWith");
  }
  if (endsWith !== undefined && !input.endsWith(endsWith)) {
    errors.push("endsWith");
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: input
  };
};
const numberValidator = ({ gt, min, lt, max, int }) => (input) => {
  const num = parseFloat(input ?? "");
  if (isNaN(num)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (gt !== undefined && !(num > gt)) {
    errors.push("gt");
  }
  if (min !== undefined && !(num >= min)) {
    errors.push("min");
  }
  if (lt !== undefined && !(num < lt)) {
    errors.push("lt");
  }
  if (max !== undefined && !(num <= max)) {
    errors.push("max");
  }
  if (int !== undefined) {
    const isInt = Number.isInteger(num);
    if (!(int ? isInt : !isInt)) {
      errors.push("int");
    }
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: num
  };
};
const booleanValidator = (input) => {
  const bool = input === "true" ? true : input === "false" ? false : undefined;
  if (typeof bool !== "boolean") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: bool
  };
};
const enumValidator = ({ values }) => (input) => {
  if (!(typeof input === "string" ? values.includes(input) : false)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: input
  };
};
function selectValidator(options) {
  switch (options.type) {
    case "string":
      return stringValidator(options);
    case "number":
      return numberValidator(options);
    case "boolean":
      return booleanValidator;
    case "enum":
      return enumValidator(options);
  }
}
function validateEnvVariable(value, options) {
  const isOptional = options.optional || options.default !== undefined;
  if (isOptional && value === undefined) {
    return {
      ok: true,
      value: options.default
    };
  }
  if (!isOptional && value === undefined) {
    return {
      ok: false,
      errors: ["missing"]
    };
  }
  return selectValidator(options)(value);
}

// @ts-check

// @ts-expect-error
/** @returns {string} */
// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `key` is used by the generated code
// biome-ignore lint/correctness/noUnusedVariables: `key` is used by the generated code
const getEnv = (key) => {
	return getEnv$1(key);
};

const _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === '' ? undefined : rawVariable;
	const options = schema[key];

	const result = validateEnvVariable(variable, options);
	if (result.ok) {
		return result.value;
	}
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};

setOnSetGetEnv(() => {
	STRIPE_SECRET_KEY = _internalGetSecret("STRIPE_SECRET_KEY");

});
let STRIPE_SECRET_KEY = _internalGetSecret("STRIPE_SECRET_KEY");

const prerender = false;
const stripe = new Stripe(STRIPE_SECRET_KEY);
const POST = async ({ request }) => {
  try {
    const { line_items } = await request.json();
    console.log("Checkout:", line_items);
    if (!line_items || line_items.length === 0) {
      return new Response(JSON.stringify({ error: "Cart is empty" }), {
        status: 400
      });
    }
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: "http://localhost:4321/"
    });
    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
