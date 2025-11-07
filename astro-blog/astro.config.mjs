import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://amirdaraee.com',
  outDir: '../docs',
  integrations: [sitemap(), tailwind()],
  build: {
    assets: 'assets'
  },
  markdown: {
    syntaxHighlight: 'prism',
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
