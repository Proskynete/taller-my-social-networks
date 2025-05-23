// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  site: isProd ? "https://Proskynete.github.io" : undefined,
  base: isProd ? "taller-my-social-networks" : undefined,
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
