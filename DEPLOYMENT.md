# GitHub Pages Deployment Guide

## Automatic Deployment Setup ✅

Your website is now configured for automatic deployment to GitHub Pages at **glamnett.com**.

### What's Configured:

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Automatically triggers on every push to `main` branch
   - Builds the project using `npm run build`
   - Deploys to GitHub Pages

2. **Custom Domain** (`public/CNAME`)
   - Configured for `glamnett.com`
   - File will be copied to dist folder during build

3. **Vite Configuration** (`vite.config.ts`)
   - Optimized build settings for production
   - Code splitting for better performance
   - Assets properly configured

### Deployment Steps:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **GitHub Repository Settings:**
   - Go to your repository: `https://github.com/glamnetts/GLAM`
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **GitHub Actions** (already selected)
   - Under "Custom domain":
     - Enter: **glamnett.com**
     - Click **Save**
     - Wait for DNS check to complete

3. **DNS Configuration (at your domain registrar):**
   
   Add these DNS records for `glamnett.com`:
   
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: glamnetts.github.io
   ```

### How It Works:

- **Every push to `main`** automatically triggers the deployment
- Build takes ~2-3 minutes
- Changes appear on glamnett.com after successful deployment
- GitHub Actions tab shows deployment status

### Manual Deployment (Optional):

You can also trigger deployment manually:
- Go to **Actions** tab in GitHub
- Click "Deploy to GitHub Pages" workflow
- Click "Run workflow" button

### Monitoring Deployments:

- Check deployment status: `https://github.com/glamnetts/GLAM/actions`
- View deployed site: `https://glamnett.com`
- Deployment history available in Actions tab

### Troubleshooting:

If deployment fails:
1. Check Actions tab for error logs
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`
4. Verify DNS settings if domain doesn't resolve

---

**Note:** First deployment may take 10-15 minutes for DNS propagation and SSL certificate generation.
