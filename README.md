# QARINE LIMITED - Business Supplies Website

A modern, professional website for QARINE LIMITED - your trusted supplier of construction materials, stationary supplies, furniture, and business supplies in GilGil, Kenya.

## 🌟 Features

### Product Showcase
- **Construction Materials** - Quality cement, bricks, steel, and building supplies
- **Stationary Supplies** - Complete range of office supplies
- **Furniture** - Modern ergonomic office furniture
- **General Supplies** - Diverse business necessities

### Key Sections
- **Hero Section** - Eye-catching banner with call-to-action
- **Products** - Showcase of all product categories with images
- **Services** - Why choose QARINE (Fast Delivery, Support, Quality Assurance, Expert Team)
- **About** - Company information and highlights
- **Contact** - Multiple ways to reach out (Phone, Email, WhatsApp, Contact Form)
- **Footer** - Comprehensive site navigation and information

### Contact Methods
- 📞 **Phone**: +254 701 234 567
- 📧 **Email**: qarinelimited1@gmail.com
- 💬 **WhatsApp**: Direct messaging for quick response
- 📝 **Contact Form**: Secure form that sends via WhatsApp

## 🎨 Design

### Color Scheme
- **Primary**: Sky Blue (#0099d8) - Professional and trustworthy
- **Secondary**: Medium Blue - Accent color
- **Neutral**: White and light grays - Clean and modern
- **Text**: Dark blue - High contrast and readability

### Responsive Design
- Mobile-first approach
- Fully responsive on all devices
- Desktop (1920px), Tablet (768px), Mobile (375px) tested and optimized
- Smooth animations and transitions

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Screen reader friendly
- Keyboard navigation support
- High contrast for readability

## 🔒 Security Features

✅ **Input Validation** - All form data validated before processing
✅ **Email Validation** - RFC-compliant email checking
✅ **Phone Validation** - Proper phone number format verification
✅ **No Data Storage** - User data processed client-side only
✅ **Secure Links** - All external links have security attributes
✅ **URL Encoding** - Proper encoding for WhatsApp messages
✅ **Privacy Protected** - Clear privacy notice on contact form
✅ **HTTPS Ready** - Built for secure HTTPS deployment

See [SECURITY.md](./SECURITY.md) for detailed security information.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open in browser
# http://localhost:3000
```

### Production Build

```bash
# Build optimized version
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and theme
│   └── favicon.ico
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero section
│   ├── products.tsx        # Product showcase
│   ├── services.tsx        # Services section
│   ├── about.tsx           # About company
│   ├── contact.tsx         # Contact form and info
│   └── footer.tsx          # Footer
├── public/
│   ├── construction-materials.png
│   ├── stationary-materials.png
│   ├── furniture.png
│   └── general-supplies.png
├── lib/
│   └── utils.ts            # Utility functions
├── SECURITY.md             # Security documentation
├── DEPLOYMENT.md           # Deployment guide
└── README.md               # This file
```

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js 16](https://nextjs.org/) - React 19 with App Router
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful SVG icons
- **UI Components**: Custom React components with Tailwind
- **Deployment**: Optimized for Vercel, AWS, Google Cloud, and more

## 📊 Page Sections Breakdown

### Header
- Sticky navigation with QARINE branding
- Menu links to all main sections
- Mobile-responsive hamburger menu
- Active link highlighting

### Hero
- Large background gradient
- Compelling headline
- Descriptive text
- Dual CTAs (Get in Touch, Explore Products)

### Products
- 4 product category cards
- Product images with hover effects
- Category descriptions
- Icon representation

### Services
- Why Choose QARINE section
- 4 service highlights:
  - Fast Delivery
  - 24/7 Support
  - Quality Assured
  - Expert Team
- Icon and description for each

### About
- Company background
- Mission statement
- 6 key highlights with checkmarks
- Location information
- Commitment statement

### Contact
- 3 direct contact cards:
  - Call Us (Phone link)
  - Email Us (Email link)
  - WhatsApp (WhatsApp link)
- Contact form with fields:
  - Name (required, max 100 chars)
  - Email (required, validated)
  - Phone (required, validated)
  - Message (required, max 1000 chars)
- Form validation and security
- Success message on submission

### Footer
- Company information
- Quick links to all sections
- Contact information
- Product categories
- Social media links
- Copyright notice
- Security/Privacy notice

## 🔧 Customization

### Change Company Info
Edit contact details in:
- `components/header.tsx` - Logo and branding
- `components/contact.tsx` - Contact links and form
- `components/footer.tsx` - Footer information
- `app/layout.tsx` - SEO metadata

### Update Colors
Edit theme in `app/globals.css`:
```css
:root {
  --primary: oklch(0.52 0.22 252.3);      /* Sky blue */
  --secondary: oklch(0.68 0.15 250.8);    /* Medium blue */
  /* ... other colors */
}
```

### Add/Remove Sections
- Modify `app/page.tsx` to add/remove component imports
- Create new component in `components/` folder
- Style with Tailwind CSS classes

### Update Images
Replace in `public/` folder:
- `construction-materials.png`
- `stationary-materials.png`
- `furniture.png`
- `general-supplies.png`

## 📱 Responsive Breakpoints

- **Mobile**: 375px and up
- **Tablet**: 768px (md) and up
- **Desktop**: 1024px (lg) and up
- **Large Desktop**: 1920px and up

## ⚡ Performance

- Optimized images with Next.js Image component
- Lazy loading for images
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind (zero runtime)
- Server-side rendering for SEO
- Automatic code splitting

## 🌍 SEO

- Semantic HTML structure
- Meta tags (title, description, keywords)
- Open Graph metadata
- Mobile-friendly design
- Fast page load times
- Structured for search engines

## 📞 Contact & Support

**QARINE LIMITED**
- Location: GilGil, Kenya
- Phone: +254 701 234 567
- Email: qarinelimited1@gmail.com
- WhatsApp: +254 701 234 567

## 📄 Documentation

- [SECURITY.md](./SECURITY.md) - Security features and best practices
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions for various platforms

## 🤝 Contributing

This is a custom website for QARINE LIMITED. For changes or improvements:
1. Test locally: `pnpm dev`
2. Build: `pnpm build`
3. Deploy using your hosting provider

## 📜 License

This website is private and owned by QARINE LIMITED.
© 2026 QARINE LIMITED. All rights reserved.

---

**Version**: 1.0.0  
**Last Updated**: July 2026  
**Built with**: Next.js 16, React 19, Tailwind CSS, Lucide Icons
