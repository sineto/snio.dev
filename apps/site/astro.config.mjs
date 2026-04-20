// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations:[icon()],
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Roboto Mono",
    cssVariable: "--font-roboto-mono",
    weights: [100, 200, 300, 400, 500, 600, 700]
  }],
});
