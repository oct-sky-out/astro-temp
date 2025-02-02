// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vue from "@astrojs/vue";

import { createMarkdownProcessor, rehypeShiki } from '@astrojs/markdown-remark'

// https://astro.build/config
export default defineConfig({
  markdown: {

  },
  integrations: [
    tailwind(),
    react({
      include: ["**/react/*"],
      experimentalReactChildren: true,
    }),
    vue(),
  ],
  vite: {
    resolve: {
      alias: {
        "@/": "/src",
      },
    },
    appType: "mpa",
  },
});
