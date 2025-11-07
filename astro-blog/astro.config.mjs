import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://amirdaraee.com',
  outDir: '../docs',
  integrations: [sitemap()],
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
