# Amirdaraee Blog - Astro

This is the modernized version of the blog, built with Astro.

## 🚀 Project Structure

```
/
├── public/           # Static assets (images, fonts, etc.)
├── src/
│   ├── components/   # Astro components (Header, Footer)
│   ├── content/      # Content collections
│   │   └── blog/     # Blog posts (Markdown)
│   ├── layouts/      # Layout components
│   ├── pages/        # Page routes
│   └── styles/       # Global styles
└── astro.config.mjs  # Astro configuration
```

## 🧞 Commands

All commands are run from the `astro-blog` directory:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `../docs/`              |
| `npm run preview`         | Preview build locally before deploying           |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Adding New Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Your Post Title"
   description: "Post description"
   published: true
   date: 2024-01-01
   author: amirdaraee
   keywords:
     - tag1
     - tag2
   ---
   ```
3. Write your content in Markdown
4. Build and deploy

## 🔧 Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **Bootstrap 5** - Styling
- **Prism** - Syntax highlighting for code blocks

## 📦 Build Output

The site builds to the `../docs/` folder, which is configured for GitHub Pages deployment.
