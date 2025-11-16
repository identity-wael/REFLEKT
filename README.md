# REFLEKT

**Your Mindful Partner** - A smart mirror that reflects not just how you look, but how you feel.

REFLEKT is an AI-powered wellness technology product featuring a modern, multilingual marketing website built with cutting-edge web technologies. The website showcases our smart mirror solution that transforms daily routines into mindful wellness rituals through dual-mode interfaces (Calm Mode & Active Mode), mood sensing, and personalized experiences.

## Tech Stack

### Core Framework
- **Next.js 15.5.3** with App Router & Turbopack
- **React 19.2.0** with Server Components
- **TypeScript 5.9.3** for type safety

### Styling & UI
- **Tailwind CSS v4** with CSS variables & PostCSS
- **shadcn/ui** components (Radix UI primitives)
- **Framer Motion 12.23.24** for smooth animations
- **Lucide React** for icons
- **class-variance-authority** for component variants

### Forms & Validation
- **React Hook Form 7.66** for form management
- **Zod 4.1.12** for schema validation
- **@hookform/resolvers** for integration

### Internationalization
- **next-intl 4.5.3** for i18n (English & Japanese support)

### Testing & Quality
- **Vitest 4.0.9** with React Testing Library for unit tests
- **Playwright 1.56.1** for E2E testing
- **ESLint 9.39.1** with Next.js configuration

### Analytics & Performance
- **Vercel Analytics** for web analytics
- **@next/mdx** for MDX content support

## Product Features

REFLEKT is a smart mirror wellness technology with the following core capabilities:

### Dual-Mode Interface
- **Calm Mode**: Guided breathing exercises and mindfulness moments to center your morning and reduce anxiety
- **Active Mode**: Personalized morning dashboard with smart scheduling, daily briefings, and curated content

### AI-Powered Intelligence
- **Mood Sensing**: AI-powered emotional awareness with personalized responses
- **AR Style Guidance**: Virtual try-on experiences and personalized style recommendations
- **Smart Briefings**: Context-aware information delivery based on your schedule and preferences

### Target Applications
- Morning wellness routines for busy professionals
- Anxiety and stress management
- Dementia support and cognitive assistance
- Daily preparation and organization
- Mindfulness practice integration

## Website Pages

The marketing website includes the following sections:

- **Home (`/`)**: Comprehensive landing page featuring:
  - Hero section with product introduction
  - Problem & opportunity overview
  - Features showcase with interface deep dive
  - Product ecosystem visualization
  - Target customer profiles
  - Dementia support capabilities
  - Business strategy & market positioning
  - Testimonials
  - Call-to-action for waitlist

- **About (`/about`)**: Company story and mission
- **Services (`/services`)**: REFLEKT service offerings
- **Stories (`/stories`)**: User stories and case studies
- **Contact (`/contact`)**: Contact form with validation

All pages are available in **English** and **Japanese** via the `/[locale]/` routing pattern.

## Getting Started

### Prerequisites

- Node.js 18.17+ (LTS recommended)
- npm 9+ or pnpm 8+

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

### Development
- `npm run dev` - Start development server with Turbopack (fast refresh enabled)
- `npm run build` - Build for production with Turbopack optimization
- `npm run start` - Start production server (run after `build`)
- `npm run lint` - Run ESLint on codebase
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run type-check` - Run TypeScript compiler without emitting files
- `npm run analyze` - Build with bundle size analysis (requires ANALYZE=true)

### Testing
- `npm run test` - Run Vitest unit tests in watch mode
- `npm run test:run` - Run Vitest tests once (CI mode)
- `npm run test:ui` - Run tests with Vitest UI dashboard
- `npm run test:coverage` - Run tests with coverage report
- `npm run e2e` - Run Playwright E2E tests (headless)
- `npm run e2e:ui` - Run E2E tests with Playwright UI
- `npm run e2e:headed` - Run E2E tests in headed mode (visible browser)

## Project Structure

```
REFLEKT/
├── src/
│   ├── app/                              # Next.js 15 App Router
│   │   ├── [locale]/                    # Internationalized routes (en, ja)
│   │   │   ├── page.tsx                 # Home page with all sections
│   │   │   ├── layout.tsx               # Locale-specific layout
│   │   │   ├── about/                   # About page
│   │   │   ├── contact/                 # Contact page
│   │   │   ├── services/                # Services page
│   │   │   └── stories/                 # Stories page
│   │   ├── globals.css                  # Global styles + Tailwind directives
│   │   ├── layout.tsx                   # Root layout
│   │   ├── page.tsx                     # Root page (locale redirect)
│   │   └── favicon.ico                  # Favicon
│   ├── components/
│   │   ├── ui/                          # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── select.tsx
│   │   │   └── textarea.tsx
│   │   ├── __tests__/                   # Component tests
│   │   ├── accessibility.tsx            # Accessibility utilities
│   │   ├── business-strategy-section.tsx # Business strategy component
│   │   ├── contact-form.tsx             # Contact form with validation
│   │   ├── cta-section.tsx              # Call-to-action section
│   │   ├── dementia-support-section.tsx # Dementia support features
│   │   ├── error-boundary.tsx           # Error boundary component
│   │   ├── features-section.tsx         # Product features showcase
│   │   ├── footer.tsx                   # Site footer
│   │   ├── hero-section.tsx             # Hero section with animations
│   │   ├── loading.tsx                  # Loading states
│   │   ├── navigation.tsx               # Main navigation
│   │   ├── problem-opportunity-section.tsx # Problem & opportunity
│   │   ├── product-ecosystem.tsx        # Product ecosystem visualization
│   │   ├── seo.tsx                      # SEO component
│   │   ├── stats-section.tsx            # Statistics section
│   │   ├── target-customers-section.tsx # Target customers
│   │   └── testimonials-section.tsx     # Testimonials
│   ├── i18n/
│   │   ├── request.ts                   # i18n request configuration
│   │   └── routing.ts                   # i18n routing configuration
│   ├── lib/
│   │   ├── constants.ts                 # Application constants
│   │   └── utils.ts                     # Utility functions (cn, etc.)
│   ├── test/
│   │   ├── setup.ts                     # Vitest setup
│   │   └── utils.tsx                    # Test utilities
│   ├── types/
│   │   └── index.ts                     # TypeScript type definitions
│   └── middleware.ts                    # Next.js middleware (i18n)
├── messages/                            # i18n translation files
│   ├── en.json                          # English translations
│   └── ja.json                          # Japanese translations
├── public/                              # Static assets
│   ├── images/
│   │   ├── features/                    # Feature images
│   │   ├── presentations/               # Presentation images
│   │   └── products/                    # Product images
│   ├── videos/                          # Video assets
│   └── *.svg                            # SVG icons
├── components.json                      # shadcn/ui configuration
├── eslint.config.mjs                    # ESLint 9 configuration
├── next.config.ts                       # Next.js configuration
├── package.json                         # Dependencies & scripts
├── playwright.config.ts                 # Playwright E2E config
├── postcss.config.mjs                   # PostCSS configuration
├── tsconfig.json                        # TypeScript configuration
├── vitest.config.ts                     # Vitest test configuration
├── CLAUDE.md                            # AI assistant guide
├── README.md                            # This file
└── REFLEKT_BUILD_INSTRUCTIONS.md        # Build & deployment guide
```

### Key Directories

- **`src/app/`**: Next.js 15 App Router with file-based routing and i18n support
- **`src/components/`**: React components (17 custom components + shadcn/ui library)
- **`src/i18n/`**: next-intl configuration for English/Japanese support
- **`messages/`**: JSON translation files for all user-facing content
- **`public/`**: Static assets (images, videos, SVGs) served from root URL

## Component Architecture

### Page Components (Home Page Sections)
The home page (`src/app/[locale]/page.tsx`) is composed of modular sections:

1. **HeroSection** - Animated hero with product introduction, dual-mode preview
2. **ProblemOpportunitySection** - Market problem and solution positioning
3. **FeaturesSection** - Product features with interactive deep dive
4. **ProductEcosystem** - Visual representation of REFLEKT ecosystem
5. **TargetCustomersSection** - Customer personas and use cases
6. **DementiaSupportSection** - Specialized dementia care features
7. **BusinessStrategySection** - Go-to-market and business model
8. **TestimonialsSection** - User testimonials and social proof
9. **CTASection** - Waitlist signup and call-to-action

### UI Components (shadcn/ui)
Pre-built, accessible components from shadcn/ui:
- **Forms**: Input, Label, Textarea, Select with React Hook Form integration
- **Layout**: Card, CardHeader, CardContent, CardDescription
- **Interactive**: Button with variants, Dialog

### Shared Components
- **Navigation** - Responsive nav with language switcher
- **Footer** - Site footer with links and info
- **ContactForm** - Form with Zod validation and i18n error messages
- **ErrorBoundary** - Error handling wrapper
- **SEO** - Metadata and Open Graph tags
- **Accessibility** - Skip links and ARIA utilities
- **Loading** - Loading states and skeletons

### Design Patterns
- **Server Components by default** - Most components are server-rendered for performance
- **Client Components marked with `'use client'`** - Only used for interactivity (forms, animations)
- **i18n integration** - All user-facing text uses `useTranslations()` hook
- **Type safety** - Strict TypeScript with interfaces for all props
- **Tailwind CSS** - Utility-first styling with `cn()` helper for class merging
- **Framer Motion** - Smooth animations and transitions

## Development Workflow

### Code Quality Standards
- **TypeScript strict mode** enabled
- **ESLint** with Next.js recommended config
- **Type checking** before commits (`npm run type-check`)
- **Accessibility** - WCAG 2.1 AA compliance
- **No secrets in code** - Environment variables for sensitive data

### Testing Strategy
- **Unit tests** with Vitest for component logic
- **E2E tests** with Playwright for critical user flows
- **Test coverage** tracked with Vitest coverage reports
- **CI/CD ready** with test:run command

### Internationalization (i18n)
All routes follow the pattern: `/[locale]/[page]`
- English: `/en/about`, `/en/contact`
- Japanese: `/ja/about`, `/ja/contact`

Translation keys are organized by section in `messages/*.json`:
```typescript
// In components
const t = useTranslations('home.hero')
return <h1>{t('title')}</h1>
```

## Deployment

### Vercel Deployment (Recommended)
The application is optimized for Vercel with:
- **Edge Runtime** ready
- **Vercel Analytics** integrated
- **Automatic i18n routing** configured
- **Image optimization** via Next.js Image component
- **Bundle analysis** available via `npm run analyze`

### Build Process
```bash
npm run build        # Production build with Turbopack
npm run start        # Start production server
```

For detailed deployment instructions and environment setup, see [REFLEKT_BUILD_INSTRUCTIONS.md](./REFLEKT_BUILD_INSTRUCTIONS.md).

## Contributing

This is a private project for REFLEKT smart mirror marketing website. For development guidelines and AI assistant instructions, see [CLAUDE.md](./CLAUDE.md).

## License

TBD