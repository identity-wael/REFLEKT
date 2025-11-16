# REFLEKT – Website Build Instructions (for Claude Code)

## 🎯 Project Overview
A modern, multilingual website built with cutting-edge web technologies, optimized for performance, accessibility, and developer experience.

## 📋 Tech Stack

### Core Framework
- **Next.js 15.5+** with App Router (TypeScript, Edge-ready)
- **React 19.1** with Server Components
- **Turbopack** for blazing-fast development

### Styling & UI
- **Tailwind CSS v4** with CSS variables for theme tokens
- **shadcn/ui** (Radix UI primitives under the hood)
- **tw-animate-css** for enhanced animations
- **CSS Variables** for consistent theming

### Animation & Interactions
- **Framer Motion** (performance-optimized, subtle animations)
- **lucide-react** for consistent iconography

### Content Management
- **MDX** for Stories/Journal content with rich formatting
- **Static JSON** for product copy and structured data
- **Next.js Metadata API** for SEO optimization

### Forms & Validation
- **React Hook Form** for performant form handling
- **Zod** for runtime type validation and schema parsing

### Internationalization
- **next-intl** for robust i18n support
  - English (default locale)
  - Japanese (secondary locale)
  - Type-safe translations
  - Automatic locale routing

### SEO & Analytics
- **Next.js Metadata API** with comprehensive meta tags
- **Open Graph & Twitter Cards** for social sharing
- **@vercel/analytics** (easily swappable)
- **Structured Data** support ready

### Testing & Quality Assurance
- **Playwright** for comprehensive E2E testing
- **Vitest** with **@testing-library/react** for unit tests
- **ESLint** with Next.js config for code quality
- **TypeScript** strict mode for type safety

### Deployment
- **Vercel** (optimized for Next.js with zero config)
- **Edge Runtime** compatible
- **Progressive Web App** ready

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.17+ (LTS recommended)
- **npm** 9+ or **pnpm** 8+ (recommended)
- **Git** for version control

### Installation

1. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd reflekt-website
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.local.example .env.local
   ```

   Configure required environment variables:
   ```bash
   # .env.local
   NEXT_PUBLIC_VERCEL_ANALYTICS=true
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Development Workflow

### Available Scripts

#### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # Run TypeScript type checking
```

#### Testing
```bash
npm run test         # Run unit tests in watch mode
npm run test:run     # Run unit tests once
npm run test:ui      # Run tests with Vitest UI
npm run test:coverage # Run tests with coverage report
npm run e2e          # Run Playwright E2E tests
npm run e2e:ui       # Run E2E tests with Playwright UI
npm run e2e:headed   # Run E2E tests in headed mode
```

#### Analysis & Optimization
```bash
npm run analyze      # Analyze bundle size
npm run postinstall  # Install Playwright browsers
```

### File Structure
```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions
│   ├── utils.ts           # Tailwind utilities
│   ├── validations.ts     # Zod schemas
│   └── constants.ts       # App constants
├── i18n/                  # Internationalization
│   ├── request.ts         # next-intl config
│   └── routing.ts         # Routing configuration
├── hooks/                 # Custom React hooks
├── stores/                # State management
├── types/                 # TypeScript type definitions
└── test/                  # Test utilities and setup
content/                   # MDX content files
├── stories/               # Blog/journal entries
└── pages/                 # Static page content
messages/                  # Translation files
├── en.json                # English translations
└── ja.json                # Japanese translations
public/                    # Static assets
e2e/                       # Playwright E2E tests
```

### Component Development with shadcn/ui

Add new shadcn/ui components:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

Example component usage:
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExampleComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello REFLEKT</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

### Internationalization Workflow

1. **Add new translations** in `messages/en.json` and `messages/ja.json`
2. **Use translations** in components:
   ```tsx
   import { useTranslations } from 'next-intl'

   export function WelcomeSection() {
     const t = useTranslations('home.hero')

     return (
       <section>
         <h1>{t('title')}</h1>
         <p>{t('subtitle')}</p>
       </section>
     )
   }
   ```

3. **Navigation** with locale support:
   ```tsx
   import { Link } from '@/i18n/routing'

   <Link href="/about">{t('navigation.about')}</Link>
   ```

### MDX Content Management

1. **Create MDX files** in `content/stories/`:
   ```mdx
   ---
   title: "Welcome to REFLEKT"
   date: "2025-01-01"
   author: "REFLEKT Team"
   tags: ["announcement", "welcome"]
   ---

   # Welcome to our new website

   This is our first story using **MDX**.
   ```

2. **Import and use** in components:
   ```tsx
   import { MDXContent } from '@/components/mdx-components'

   // MDX content will be automatically processed
   ```

### Form Handling with React Hook Form + Zod

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = (data: ContactForm) => {
    console.log('Form data:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}
      {/* ... other fields */}
    </form>
  )
}
```

## 🧪 Testing Strategy

### Unit Testing with Vitest
- **Location**: `src/components/**/*.test.tsx`
- **Setup**: `src/test/setup.ts` with mocks for browser APIs
- **Coverage**: Aim for 80%+ coverage on critical paths

Example test:
```tsx
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { Button } from '@/components/ui/button'

test('renders button with correct text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByRole('button')).toHaveTextContent('Click me')
})
```

### E2E Testing with Playwright
- **Location**: `e2e/` directory
- **Browsers**: Chrome, Firefox, Safari (desktop + mobile)
- **CI/CD**: Automated runs on deployment

Example E2E test:
```ts
import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Welcome to REFLEKT' })).toBeVisible()
})
```

## 🚀 Deployment Guide

### Vercel Deployment (Recommended)

1. **Connect Repository**
   - Import project in Vercel dashboard
   - Connect GitHub/GitLab repository
   - Auto-deployment on push to `main`

2. **Environment Variables**
   ```bash
   NEXT_PUBLIC_VERCEL_ANALYTICS=true
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

3. **Build & Deploy**
   - Automatic builds with Turbopack optimization
   - Edge runtime deployment
   - Global CDN distribution

### Alternative Deployment Options

#### Docker Deployment
```dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM base AS build
RUN npm ci
COPY . .
RUN npm run build

FROM base AS runtime
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
```

#### Static Export (if needed)
```js
// next.config.ts
export default {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

## 🔧 Configuration Reference

### Next.js Configuration
Key configurations in `next.config.ts`:
- **MDX** support with experimental mdxRs
- **Internationalization** with next-intl plugin
- **Image optimization** with AVIF/WebP formats
- **Package optimization** for lucide-react and framer-motion

### Tailwind Configuration
- **CSS Variables** for theme customization
- **shadcn/ui** integration
- **Custom animations** with tw-animate-css
- **Responsive breakpoints** and utilities

### TypeScript Configuration
- **Strict mode** enabled
- **Path aliases** (`@/` → `./src/`)
- **Next.js** and **MDX** type definitions

## 🎨 Theming & Customization

### CSS Variables (in `src/app/globals.css`)
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... more theme variables */
}

[data-theme="dark"] {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark theme overrides */
}
```

### Component Customization
Modify shadcn/ui components in `src/components/ui/` to match design requirements.

## 📚 Resources & Documentation

### Official Docs
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-intl](https://next-intl-docs.vercel.app/)

### Testing Resources
- [Playwright Documentation](https://playwright.dev/)
- [Vitest Guide](https://vitest.dev/guide/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors with Turbopack**
   - Try without `--turbopack` flag: `npm run dev`
   - Clear `.next` cache: `rm -rf .next`

2. **Type Errors with next-intl**
   - Ensure message keys match translation files
   - Check `src/i18n/routing.ts` configuration

3. **MDX Processing Issues**
   - Verify MDX files have proper frontmatter
   - Check Next.js config MDX settings

4. **Playwright Tests Failing**
   - Run `npm run postinstall` to install browsers
   - Check base URL in `playwright.config.ts`

### Performance Optimization
- Use Next.js Image component for optimized loading
- Implement lazy loading with `React.lazy()`
- Monitor bundle size with `npm run analyze`
- Enable server-side rendering for critical content

## 🔄 Maintenance & Updates

### Regular Tasks
- **Dependencies**: Update monthly with `npm update`
- **Security**: Run `npm audit` and fix vulnerabilities
- **Performance**: Monitor Core Web Vitals
- **Content**: Review and update translation files
- **Testing**: Maintain high test coverage (>80%)

### Version Upgrade Strategy
1. **Patch updates**: Apply immediately
2. **Minor updates**: Test in staging environment
3. **Major updates**: Review breaking changes, update gradually

---

## 🎉 Ready to Build!

Your REFLEKT website is now configured with a modern, scalable tech stack. The foundation is set for:
- ⚡ Lightning-fast development with Turbopack
- 🌍 Global accessibility with i18n support
- 🧪 Comprehensive testing coverage
- 🎨 Flexible, maintainable styling
- 📱 Mobile-first responsive design
- 🚀 Production-ready deployment

Start developing with `npm run dev` and build something amazing!

For any questions or issues, refer to this documentation or the official docs linked above.