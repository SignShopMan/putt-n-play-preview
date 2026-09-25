// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Preview builds (GitHub Pages) override these via env; production uses the real domain.
  site: process.env.SITE_URL ?? "https://www.puttplaygolfcenter.com",
  base: process.env.BASE_PATH ?? "/",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
