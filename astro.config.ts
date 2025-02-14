// @ts-check
import {type ViteUserConfig } from 'astro';
import { defineConfig } from 'astro/config';

import qwikdev from '@qwikdev/astro';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev()],

  markdown: {
      gfm: true,
      syntaxHighlight: "shiki"
  },

  vite: {
    plugins: [tailwindcss() as ViteUserConfig['plugins']]
  }
});