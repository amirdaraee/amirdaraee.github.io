---
title: 'Pulsar: I turned this blog into an open-source Astro theme'
description: 'The theme powering this site is now a standalone open-source project: flash-free dark mode, Shiki dual-theme highlighting, RSS, tag pages, and one config file to personalize it all.'
published: true
date: 2026-07-03T14:00:00.000Z
author: amirdaraee
slug: 'astro_pulsar_theme'
photo: stock/astro-pulsar.png
keywords:
    - astro
    - blog theme
    - open source
    - tailwind css
    - typescript
language: en
slugs:
    - astro_pulsar_theme
---

# Pulsar: I turned this blog into an open-source Astro theme

The site you're reading used to be a one-off pile of Astro components,
entangled with my name, my analytics ID, and my font choices. Every
improvement died here, useful to exactly one person. So I pulled the theme
out.

It's called [Pulsar](https://github.com/amirdaraee/astro-pulsar), it's MIT
licensed, and there's a [live demo](https://amirdaraee.github.io/astro-pulsar)
if you want to click around. This blog now consumes its own theme: new
features land in Pulsar first, get released, and then get synced back here.

## What's inside

- **Flash-free dark mode.** The correct theme and toggle icon render before
  first paint. Dark is the default, and your choice persists.
- **Code blocks that follow the theme.** Shiki highlighting with GitHub Light
  and Dark palettes, plus a copy button on every block. Try it below.
- **The blog plumbing you'd build anyway.** RSS feed, tag pages, reading time,
  previous/next links, and related posts. All static, all built at deploy time.
- **SEO that's already done.** Open Graph, Twitter Cards, canonical URLs,
  JSON-LD on posts, a sitemap, and optional production-only GA4 analytics.

## One config file

Everything personal lives in `src/config.ts`:

```typescript
export const SITE_CONFIG = {
  title: "My Awesome Blog",
  description: "Thoughts on web development, design, and more",
  author: "yourname",

  socialLinks: {
    github: "yourname",
    twitter: "yourname",
    linkedin: "yourname",
    youtube: "", // Leave empty if not used
  },

  googleAnalyticsId: "", // Optional
  siteUrl: "https://yourdomain.com",
};
```

Empty social links disappear from the footer. The nav renders from an array.
You shouldn't need to touch a component to make the theme yours.

## Getting started

```bash
npm create astro@latest -- --template amirdaraee/astro-pulsar
```

Edit `src/config.ts`, drop Markdown files into `src/content/blog/`, and
deploy the static output anywhere.

If you try it and something's rough, [open an
issue](https://github.com/amirdaraee/astro-pulsar/issues). If you build
something with it, I'd genuinely like to see it.
