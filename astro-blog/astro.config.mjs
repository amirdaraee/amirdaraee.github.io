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
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // Dual themes follow the site's dark mode (see global.css)
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    }
  }
});
