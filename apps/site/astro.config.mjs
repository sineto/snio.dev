// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import qwik from "@qwik.dev/astro";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations:[qwik(), icon()],
  server: {
    allowedHosts: true,
  },
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Roboto Mono",
    cssVariable: "--font-roboto-mono",
    weights: [100, 200, 300, 400, 500, 600, 700]
  }],
});
