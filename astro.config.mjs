import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: nodejs({mode: "standalone"}),
  integrations: [vue()]
});