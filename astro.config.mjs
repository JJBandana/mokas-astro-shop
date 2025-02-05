// @ts-check
import { defineConfig, envField } from "astro/config";

import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  output: "server",
  adapter: vercel(),
  env: {
    schema: {
      STRIPE_SECRET_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
      STRIPE_PUBLISHABLE_KEY: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },
});
