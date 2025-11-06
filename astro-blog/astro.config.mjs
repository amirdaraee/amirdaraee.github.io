import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://amirdaraee.github.io',
  outDir: '../docs',
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
