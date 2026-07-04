import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';
import { unified } from '@astrojs/markdown-remark';

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
    // Open external links in a new tab; internal links stay in the same tab.
    // Plugins need the unified processor from @astrojs/markdown-remark on Astro 7.
    processor: unified({
      rehypePlugins: [
        [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
      ]
    }),
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
