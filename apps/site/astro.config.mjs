// @ts-check

import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import qwik from "@qwik.dev/astro";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  // adapter: cloudflare({
  //   imageService: "cloudflare-binding",
  //   prerenderEnvironment: "node",
  // }),

  integrations: [qwik({ clientRouter: true }), icon(), react()],

  server: {
    allowedHosts: true,
  },

  i18n: {
    locales: ["pt-br", "en"],
    defaultLocale: "pt-br",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Roboto Mono",
      cssVariable: "--font-roboto-mono",
      weights: [100, 200, 300, 400, 500, 600, 700],
    },
  ],

  vite: {
    // optimizeDeps: {
    //   exclude: ["@qwik.dev/core", "@qwik.dev/astro"],
    // },
    // ssr: {
    //   noExternal: ["@qwik.dev/core", "@qwik.dev/astro"],
    // },
    // environments: {
    //   ssr: {
    //     optimizeDeps: {
    //       exclude: ["@qwik.dev/core", "@qwik.dev/astro", "@vitejs/plugin-react", "@babel/preset-typescript", "blake3-wasm"],
    //     },
    //   },
    //   prerender: {
    //     optimizeDeps: {
    //       exclude: ["@qwik.dev/core", "@qwik.dev/astro", "@vitejs/plugin-react", "@babel/preset-typescript", "blake3-wasm"],
    //     },
    //   },
    // },
    server: {
      fs: {
        allow: ["../../packages/content", "./"],
      },
    },
    build: {
      minify: false,
    },
  },
});
