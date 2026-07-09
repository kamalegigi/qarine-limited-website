# QARINE LIMITED Website - Deployment Guide

## Quick Start

This is a Next.js 16 application built with React 19, Tailwind CSS, and Lucide React icons.

### Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser
# http://localhost:3000
```

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## Deployment Options

### Option 1: Deploy to Vercel (Recommended)

Vercel is the creators of Next.js and provides the best integration:

1. **Connect GitHub Repository**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect this is a Next.js app

2. **Configure Environment**
   - No environment variables needed for this project
   - All settings are in the code

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes
   - HTTPS is automatic

### Option 2: Deploy to Other Platforms

#### AWS Amplify
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Deploy
amplify publish
```

#### Google Cloud Run
```bash
# Build Docker image
docker build -t qarine-website .

# Deploy
gcloud run deploy qarine-website --image qarine-website
```

#### Railway
1. Connect GitHub repository
2. Railway auto-detects Node.js/Next.js
3. Auto-deploys on push

#### DigitalOcean
1. Create App Platform project
2. Connect GitHub
3. Select your repository
4. Auto-configures Next.js deployment

## Post-Deployment

### 1. Configure Custom Domain
- Purchase domain from registrar (GoDaddy, Namecheap, etc.)
- Point nameservers to your hosting provider
- Update DNS records

### 2. Enable HTTPS
- Most platforms (Vercel, Netlify, Amplify) provide free SSL
- Enable automatic certificate renewal

### 3. Set Up Email
- Ensure +254 701 234 567 WhatsApp number is active
- Test contact form submission
- Verify qarinelimited1@gmail.com receives messages

### 4. Monitor Performance
- Set up error tracking (Sentry, LogRocket)
- Monitor Core Web Vitals
- Set up uptime monitoring

### 5. Backup & Version Control
- Always use version control (Git/GitHub)
- Keep production deployments tagged
- Maintain changelog

## Troubleshooting

### Contact Form Not Working
1. Verify WhatsApp number +254 701 234 567 is correct
2. Test WhatsApp Web: https://web.whatsapp.com
3. Check browser console for errors
4. Ensure HTTPS is enabled

### Images Not Loading
1. Verify `/public` folder has images:
   - construction-materials.png
   - stationary-materials.png
   - furniture.png
   - general-supplies.png
2. Check image paths in code
3. Clear browser cache

### Performance Issues
1. Run: `npm run build` to check build size
2. Optimize images with tools like ImageOptim
3. Enable caching on your hosting provider
4. Use CDN for static assets

## Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers set (X-Frame-Options, X-Content-Type-Options)
- [ ] CSP (Content Security Policy) configured
- [ ] Rate limiting on contact form (if using backend)
- [ ] Email domain verified for sending
- [ ] Regular dependency updates (`npm update`)
- [ ] Monitor for vulnerabilities (`npm audit`)

## Environment Variables (if extending)

If you add backend features, create `.env.local`:

```bash
# Example (not currently used)
NEXT_PUBLIC_API_URL=https://api.example.com
WHATSAPP_API_KEY=your_key_here
```

## Scaling

### For Higher Traffic
1. Enable caching on images
2. Use CDN (Cloudflare, Cloudfront)
3. Enable automatic scaling (available on most platforms)
4. Consider API rate limiting

### Adding Database (Future)
1. Choose: Neon, Supabase, or MongoDB
2. Add migration scripts
3. Update environment variables
4. Redeploy

## Performance Optimization

Current optimizations:
- Image lazy loading
- Semantic HTML for fast rendering
- Tailwind CSS minification
- Next.js automatic code splitting
- Responsive design (mobile-first)

## Maintenance

### Regular Updates
- Check for dependency updates monthly
- Test updates in development first
- Deploy in production after testing

### Monitoring
- Check error logs weekly
- Monitor form submissions
- Track page performance
- Monitor uptime

## Support

For issues:
1. Check deployment provider logs
2. Review SECURITY.md for best practices
3. Test locally: `pnpm dev`
4. Check browser console for errors
5. Contact hosting provider support

## Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

**Website Version**: 1.0.0
**Last Updated**: July 2026
**License**: Private - QARINE LIMITED
