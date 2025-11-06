# GitHub Actions Workflows

## astro-build.yml (Optional Auto-Build)

This workflow is **optional** and serves as a convenience feature. It automatically rebuilds the site when you push changes to `astro-blog/`.

### How it works:
- Triggers on push to `develop` branch
- Only runs if files in `astro-blog/` changed
- Builds the site and commits to `docs/`
- Can also be triggered manually

### Manual Build (Recommended)

You don't need to rely on this workflow. The recommended workflow is:

```bash
cd astro-blog
npm run build
cd ..
git add .
git commit -m "Your message"
git push origin develop
```

### Disable Auto-Build

If you prefer to always build manually, you can:

1. Delete `astro-build.yml`, or
2. Keep it for the manual trigger option only

### Manual Trigger

You can manually trigger the workflow from GitHub:
1. Go to Actions tab
2. Select "Build Astro Site (Optional)"
3. Click "Run workflow"
