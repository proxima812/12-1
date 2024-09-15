import markdoc from "@astrojs/markdoc"
import mdx from "@astrojs/mdx"
import partytown from "@astrojs/partytown"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import keystatic from "@keystatic/astro"
import compress from "astro-compress"
import { defineConfig } from "astro/config"
import { manifest } from "/src/manifest"
import { config } from "/src/settings"
import { VitePWA } from "vite-plugin-pwa"

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: `${config.site.base.url}`,

  prefetch: {
      prefetchAll: true,
      defaultStrategy: "viewport",
	},

  integrations: [
      keystatic(),
      sitemap({
          filter: page => page !== `${config.site.base.url}/test-page`,
      }),
      tailwind({
          applyBaseStyles: false,
      }),
      compress(),
      mdx(),
      react(),
      markdoc(),
      partytown(),
	],

  vite: {
      plugins: [
          VitePWA({
              registerType: "autoUpdate",
              manifest,
              workbox: {
                  globDirectory: "dist",
                  globPatterns: [
                      "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
                  ],
                  navigateFallback: null,
              },
          }),
      ],
	},

  output: "hybrid",
  adapter: netlify(),
})