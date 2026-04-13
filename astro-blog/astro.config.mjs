import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://amirdaraee.com',
  outDir: '../docs',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
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
