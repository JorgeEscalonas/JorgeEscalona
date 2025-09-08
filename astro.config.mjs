// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/static'; // Adaptador para modo estático

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({
      compat: true
    })
  ],
  output: 'server',
  adapter: vercel({})
});