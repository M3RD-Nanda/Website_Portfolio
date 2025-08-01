# Deployment Guide

This guide covers various deployment options for the Muhammad Trinanda 3D Portfolio website.

## 🚀 Quick Deployment Options

### 1. Netlify (Recommended)

**Drag & Drop Method:**
1. Build the project: `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag the `dist` folder to the deploy area
4. Your site is live!

**Git Integration:**
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables in Netlify dashboard

### 2. Vercel

**CLI Method:**
```bash
npm install -g vercel
npm run build
vercel --prod
```

**Git Integration:**
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add environment variables

### 3. GitHub Pages

**Using gh-pages branch:**
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

**GitHub Actions (Automated):**
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm install
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🔧 Environment Variables Setup

### Required Variables
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Platform-Specific Setup

**Netlify:**
1. Go to Site Settings → Environment Variables
2. Add each variable with its value

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add variables for Production environment

**GitHub Pages:**
1. Go to Repository Settings → Secrets and Variables → Actions
2. Add secrets for GitHub Actions workflow

## 🌐 Custom Domain Setup

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS records:
   - Type: CNAME
   - Name: www (or @)
   - Value: your-site.netlify.app

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

### GitHub Pages
1. Go to Repository Settings → Pages
2. Add custom domain
3. Configure DNS:
   - Type: CNAME
   - Name: www
   - Value: username.github.io

## 📊 Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm run build -- --analyze

# Enable gzip compression
# (Most hosting platforms enable this automatically)
```

### CDN Configuration
- Enable CDN on your hosting platform
- Configure caching headers for static assets
- Use WebP images where supported

## 🔍 Monitoring & Analytics

### Google Analytics Setup
1. Create GA4 property
2. Add tracking ID to environment variables:
   ```env
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
3. Implement tracking in your app

### Error Monitoring
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior analytics

## 🛡️ Security Considerations

### Environment Variables
- Never commit `.env` files
- Use different values for development/production
- Rotate API keys regularly

### Content Security Policy
Add CSP headers for enhanced security:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; img-src 'self' data:;
```

## 🚨 Troubleshooting

### Common Issues

**Build Fails:**
- Check Node.js version (16+ required)
- Clear node_modules and reinstall
- Verify all dependencies are installed

**3D Model Not Loading:**
- Ensure model files are in `public/models/`
- Check file paths are correct
- Verify WebGL support in target browsers

**Contact Form Not Working:**
- Verify EmailJS credentials
- Check CORS settings
- Test with different email providers

**Performance Issues:**
- Enable gzip compression
- Optimize images (use WebP)
- Implement lazy loading
- Consider code splitting

### Debug Commands
```bash
# Check build output
npm run build -- --debug

# Analyze bundle
npm run build -- --analyze

# Test production build locally
npm run preview
```

## 📞 Support

If you encounter issues during deployment:

1. Check the [Issues](https://github.com/your-repo/issues) section
2. Review platform-specific documentation
3. Contact the hosting provider support
4. Reach out to the project maintainer

---

**Happy Deploying! 🚀**
