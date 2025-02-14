// @ts-check
import { defineConfig, envField } from "astro/config";

import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  output: "server",
  // adapter: node({
  //   mode: "standalone",
  // }),
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
