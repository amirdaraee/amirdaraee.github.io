# Amirdaraee Blog - Astro

Personal blog powered by [Astro](https://astro.build) - A modern static site generator focused on speed and simplicity.

🌐 **Live:** [amirdaraee.com](https://amirdaraee.com)

---

## 📖 Table of Contents

- [Quick Start](#-quick-start)
- [Adding Blog Posts](#-adding-blog-posts)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Building & Deployment](#-building--deployment)
- [Customization](#-customization)
- [Tech Stack](#-tech-stack)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** (check with `node --version`)
- **npm** or **yarn**

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:4321
```

---

## 📝 Adding Blog Posts

### 1. Create Markdown File

Create a new `.md` file in `src/content/blog/`:

```bash
src/content/blog/my-awesome-post.md
```

### 2. Add Frontmatter

Every blog post needs frontmatter at the top:

```markdown
---
title: "Your Post Title"
description: "A brief description that appears in previews"
published: true
date: 2024-11-06
author: amirdaraee
keywords:
  - javascript
  - webdev
  - tutorial
photo: stock/cover-image.jpg  # Optional
imgCredit: unsplash.com        # Optional
---

# Your Content Here

Write your blog post content using Markdown...
```

### 3. Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Post title |
| `description` | string | Short description |
| `published` | boolean | Set to `false` to hide |
| `date` | date | Publication date |
| `author` | string | Author name |

### 4. Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `keywords` | array | Tags/keywords |
| `photo` | string | Cover image path (relative to `public/`) |
| `imgCredit` | string | Image attribution |

### 5. Adding Images

**For blog post images:**

1. Add images to `public/stock/`:
   ```
   public/stock/my-image.jpg
   ```

2. Reference in frontmatter (without `/` prefix):
   ```yaml
   photo: stock/my-image.jpg
   ```

**For inline images in content:**

1. Add to `public/`:
   ```
   public/images/diagram.png
   ```

2. Reference in markdown:
   ```markdown
   ![Diagram](/images/diagram.png)
   ```

---

## 📁 Project Structure

```
astro-blog/
├── src/
│   ├── pages/              # Routes (becomes URLs)
│   │   ├── index.astro     # Homepage (/)
│   │   ├── about.astro     # About page (/about)
│   │   ├── contact.astro   # Contact page (/contact)
│   │   ├── uses.astro      # Uses page (/uses)
│   │   ├── portfolio.astro # Portfolio (/portfolio)
│   │   └── blog/
│   │       ├── index.astro      # Blog list (/blog)
│   │       └── [slug].astro     # Blog post (/blog/post-slug)
│   │
│   ├── content/
│   │   ├── config.ts       # Content collections config
│   │   └── blog/           # Blog posts (Markdown)
│   │       ├── post-1.md
│   │       └── post-2.md
│   │
│   ├── layouts/
│   │   └── Layout.astro    # Main layout (Header + Footer)
│   │
│   ├── components/
│   │   ├── Header.astro    # Site header/navigation
│   │   └── Footer.astro    # Site footer
│   │
│   └── env.d.ts            # TypeScript definitions
│
├── public/                 # Static assets (copied as-is)
│   ├── stock/              # Blog post images
│   ├── fonts/              # Custom fonts
│   ├── logo.png
│   ├── CNAME
│   └── ...
│
├── astro.config.mjs        # Astro configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

---

## 💻 Development

### Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `../docs/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

### Development Workflow

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Edit files:**
   - Pages: `src/pages/`
   - Blog posts: `src/content/blog/`
   - Components: `src/components/`
   - Styles: `src/layouts/Layout.astro`

3. **Hot reload** works automatically - just save and refresh!

### TypeScript Checking

```bash
npm run astro check
```

---

## 🏗️ Building & Deployment

### Local Build

```bash
# Build the site
npm run build

# Output goes to ../docs/
# Ready for GitHub Pages!
```

### Deploy to GitHub Pages

```bash
# From project root
cd astro-blog
npm run build
cd ..

# Commit and push
git add .
git commit -m "Update blog"
git push origin develop
```

### Auto-Deploy (Optional)

GitHub Actions will automatically build when you push changes to `astro-blog/`.

See `.github/workflows/astro-build.yml`

---

## 🎨 Customization

### Update Site Info

**`src/layouts/Layout.astro`:**
```astro
const { title, description = "Your default description here" } = Astro.props;
```

### Update Navigation

**`src/components/Header.astro`:**
```html
<ul class="navbar-nav">
  <li><a href="/blog">Blog</a></li>
  <li><a href="/about">About</a></li>
  <!-- Add more links -->
</ul>
```

### Update Social Links

**`src/components/Footer.astro`:**
```html
<a href="https://github.com/yourusername">
  <i class="fa fa-github fa-2x"></i>
</a>
```

### Change Styles

**Global styles:**
- Edit `src/layouts/Layout.astro` in the `<style is:global>` section

**Component styles:**
- Each `.astro` file can have its own `<style>` section

### Add Custom Fonts

1. Add font files to `public/fonts/`
2. Create CSS file in `public/fonts/your-font.css`
3. Import in `Layout.astro`:
   ```html
   <link rel="stylesheet" href="/fonts/your-font.css" />
   ```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Astro 4.x** | Static site generator |
| **TypeScript** | Type safety |
| **Markdown** | Blog content format |
| **Bootstrap 5** | CSS framework |
| **Prism** | Code syntax highlighting |
| **Font Awesome** | Icons |

### Why Astro?

- ⚡ **Fast:** Minimal JavaScript, near-instant page loads
- 🎯 **Simple:** Easy to learn, similar to HTML
- 📦 **Portable:** Content in Markdown, easy to migrate
- 🚀 **Modern:** Latest web standards and best practices
- 🔧 **Flexible:** Use any UI framework (React, Vue, etc.) if needed

---

## 📚 Learn More

### Astro Documentation
- [Official Docs](https://docs.astro.build)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Markdown Guide](https://docs.astro.build/en/guides/markdown-content/)

### Useful Commands

```bash
# Add integration (e.g., React, Tailwind)
npx astro add react

# Create new page
# Just add a .astro file in src/pages/

# View build output
ls -la ../docs/
```

---

## 🐛 Troubleshooting

### Images not loading?

- Check that images are in `public/` folder
- Use paths without `assets/` prefix (e.g., `/logo.png` not `/assets/logo.png`)
- For blog posts, use relative paths: `photo: stock/image.jpg`

### Build errors?

```bash
# Clear cache and rebuild
rm -rf .astro ../docs
npm run build
```

### Dev server not updating?

- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Restart dev server: `Ctrl+C` then `npm run dev`

---

## 📄 License

Personal blog - All rights reserved.

---

## 🔗 Links

- **Website:** [amirdaraee.com](https://amirdaraee.com)
- **GitHub:** [@amirdaraee](https://github.com/amirdaraee)
- **LinkedIn:** [amirdaraee](https://linkedin.com/in/amirdaraee)
- **Twitter:** [@amirdaraee](https://twitter.com/amirdaraee)

---

**Built with ❤️ using Astro**
