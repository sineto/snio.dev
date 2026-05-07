// @ts-check

import qwik from "@qwik.dev/astro";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [qwik(), icon()],
  server: {
    allowedHosts: true,
  },
  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "pt-br",
    routing: {
      prefixDefaultLocale: false,
    }
    // domains: {
    //   "pt-br": "https://sn1o.dev",
    //   en: "https://sn1o.dev/en",
    // },
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
    server: {
      fs: {
        allow: ["../../packages/content", "./"],
      },
    },
  },
});
