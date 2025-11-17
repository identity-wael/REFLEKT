# CLAUDE.md - AI Assistant Guide for REFLEKT

**Last Updated:** 2025-11-16
**Repository:** REFLEKT
**Status:** Active Development

## Table of Contents

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [Development Workflow](#development-workflow)
4. [Git Conventions](#git-conventions)
5. [Code Standards](#code-standards)
6. [Testing Strategy](#testing-strategy)
7. [Next.js Specific Patterns](#nextjs-specific-patterns)
8. [AI Assistant Guidelines](#ai-assistant-guidelines)
9. [Common Tasks](#common-tasks)

---

## Project Overview

REFLEKT is a modern, multilingual website built with Next.js 15 and React 19, optimized for performance, accessibility, and developer experience.

### Current State
- **Phase:** Production Deployment
- **Version:** 0.1.0
- **Latest Major Changes:**
  - Supabase integration with Google OAuth authentication
  - Deployed to Vercel under Reflekt team
  - Custom domain: rēflekt.com (xn--rflekt-mva.com)
- **Deployment:** Live on Vercel (https://reflekt-website.vercel.app)

### Technology Stack
- **Framework:** Next.js 15.5.3 with App Router & Turbopack
- **UI Library:** React 19.2.0 with Server Components
- **Language:** TypeScript 5.9.3
- **Backend:** Supabase (Database, Auth, Storage)
- **Authentication:** Google OAuth via Supabase
- **Styling:** Tailwind CSS v4 with CSS variables
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion 12.23.24
- **Forms:** React Hook Form with Zod validation
- **i18n:** next-intl (English & Japanese support)
- **Testing:** Vitest (unit) + Playwright (E2E)
- **Code Quality:** ESLint 9.39.1 with Next.js config
- **Deployment:** Vercel (Production)

---

## Repository Structure

### Current Layout
```
REFLEKT/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── layout.tsx     # Locale-specific layout
│   │   │   ├── about/         # About page
│   │   │   ├── contact/       # Contact page
│   │   │   ├── dashboard/     # Protected dashboard (auth required)
│   │   │   ├── login/         # Login page with Google OAuth
│   │   │   ├── services/      # Services page
│   │   │   └── stories/       # Stories page
│   │   ├── auth/              # Authentication routes
│   │   │   ├── callback/      # OAuth callback handler
│   │   │   └── auth-code-error/ # Auth error page
│   │   ├── globals.css        # Global styles + Tailwind directives
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Root page (locale redirect)
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── auth/              # Authentication components
│   │   │   ├── login-button.tsx
│   │   │   └── user-menu.tsx
│   │   ├── __tests__/         # Component tests
│   │   ├── accessibility.tsx
│   │   ├── business-strategy-section.tsx
│   │   ├── contact-form.tsx
│   │   ├── cta-section.tsx
│   │   ├── dementia-support-section.tsx
│   │   ├── error-boundary.tsx
│   │   ├── features-section.tsx
│   │   ├── footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── loading.tsx
│   │   ├── navigation.tsx
│   │   ├── problem-opportunity-section.tsx
│   │   ├── product-ecosystem.tsx
│   │   ├── seo.tsx
│   │   ├── stats-section.tsx
│   │   ├── target-customers-section.tsx
│   │   └── testimonials-section.tsx
│   ├── i18n/
│   │   ├── request.ts         # i18n request configuration
│   │   └── routing.ts         # i18n routing configuration
│   ├── lib/
│   │   ├── supabase/          # Supabase configuration
│   │   │   ├── client.ts      # Browser client
│   │   │   ├── server.ts      # Server client
│   │   │   └── middleware.ts  # Session middleware
│   │   ├── constants.ts       # App constants
│   │   └── utils.ts           # Utility functions (cn, etc.)
│   ├── test/
│   │   ├── setup.ts           # Vitest setup
│   │   └── utils.tsx          # Test utilities
│   ├── types/
│   │   └── index.ts           # TypeScript type definitions
│   └── middleware.ts          # Next.js middleware (i18n)
├── messages/                  # i18n translation files
│   ├── en.json               # English translations
│   └── ja.json               # Japanese translations
├── public/                   # Static assets
│   ├── images/
│   │   ├── features/
│   │   ├── presentations/
│   │   └── products/
│   ├── videos/
│   └── *.svg                 # SVG icons
├── supabase/                 # Supabase project configuration
│   ├── .gitignore
│   └── config.toml           # Local Supabase config
├── components.json           # shadcn/ui configuration
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies & scripts
├── playwright.config.ts      # Playwright E2E config
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
├── vercel.json               # Vercel deployment config
├── vitest.config.ts          # Vitest configuration
├── .env.local                # Environment variables (gitignored)
├── CLAUDE.md                 # This file
├── GOOGLE_OAUTH_SETUP.md     # OAuth setup documentation
├── README.md                 # Project documentation
└── REFLEKT_BUILD_INSTRUCTIONS.md  # Build & deployment guide
```

### Key Directories

- **`src/app/`**: Next.js 15 App Router with file-based routing
- **`src/components/`**: React components (business logic + UI primitives)
- **`src/i18n/`**: Internationalization configuration
- **`messages/`**: Translation JSON files for supported locales
- **`public/`**: Static assets served from root URL

---

## Development Workflow

### Setting Up Development Environment

1. **Prerequisites**
   - Node.js 18.17+ (LTS recommended)
   - npm 9+ or pnpm 8+

2. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd REFLEKT
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   This will also run `playwright install` automatically via postinstall hook.

4. **Set up environment variables** (if needed)
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

#### Development
- `npm run dev` - Start development server with Turbopack (fast refresh)
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint on the codebase
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run type-check` - Run TypeScript type checking without emitting files
- `npm run analyze` - Build with bundle size analysis

#### Testing
- `npm run test` - Run Vitest unit tests in watch mode
- `npm run test:run` - Run Vitest tests once (CI mode)
- `npm run test:ui` - Run Vitest with UI dashboard
- `npm run test:coverage` - Run tests with coverage report
- `npm run e2e` - Run Playwright E2E tests
- `npm run e2e:ui` - Run E2E tests with Playwright UI
- `npm run e2e:headed` - Run E2E tests in headed mode (visible browser)

### Making Changes

1. **Always work on feature branches**
   - Branch naming: `claude/claude-md-<session-id>-<unique-id>`
   - Example: `claude/claude-md-mi294xv6atxbmsfv-01FkXZBNyMqdndDSZjfDAeGy`

2. **Before starting work**
   ```bash
   git fetch origin <branch-name>
   git status
   ```

3. **After making changes**
   ```bash
   git add <files>
   git commit -m "Descriptive commit message"
   git push -u origin <branch-name>
   ```

---

## Git Conventions

### Branch Naming
- **Feature branches:** Must start with `claude/` and end with matching session ID
- **Pattern:** `claude/claude-md-<identifier>-<session-id>`
- **Critical:** Branch name format is enforced; incorrect naming will result in 403 errors on push

### Commit Messages
Follow conventional commit format:
```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements

**Examples:**
```
feat(api): add user authentication endpoint
fix(parser): handle edge case in data validation
docs(readme): update installation instructions
```

### Git Operations Best Practices

#### Push Operations
```bash
# Always use -u flag for first push
git push -u origin <branch-name>

# Retry logic: If network errors occur, retry up to 4 times
# with exponential backoff (2s, 4s, 8s, 16s)
```

#### Fetch/Pull Operations
```bash
# Prefer fetching specific branches
git fetch origin <branch-name>

# For pulls
git pull origin <branch-name>

# Same retry logic applies: up to 4 retries with exponential backoff
```

### Protected Patterns
- **Never** push to `main`/`master` without explicit permission
- **Never** force push (`--force`) unless explicitly requested
- **Never** skip hooks (`--no-verify`) unless explicitly requested
- **Always** check branch name matches session ID before pushing

---

## Code Standards

### General Principles
1. **Readability:** Code should be self-documenting with clear naming
2. **Modularity:** Break down complex logic into smaller functions/components
3. **DRY:** Don't Repeat Yourself - extract reusable code
4. **Error Handling:** Always handle errors gracefully
5. **Security:** Never commit secrets, API keys, or credentials
6. **Type Safety:** Leverage TypeScript's strict mode
7. **Accessibility:** Follow WCAG 2.1 AA standards

### React/Next.js Specific Standards

#### Component Structure
```typescript
// Prefer function components with TypeScript
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant }))}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

#### File Naming Conventions
- **Components:** `kebab-case.tsx` (e.g., `hero-section.tsx`)
- **Pages:** `page.tsx` (Next.js App Router convention)
- **Layouts:** `layout.tsx` (Next.js App Router convention)
- **Utilities:** `kebab-case.ts` (e.g., `utils.ts`)
- **Types:** `index.ts` or descriptive name in `types/` directory
- **Tests:** `*.test.tsx` or `*.test.ts`

#### Component Organization
- **UI primitives:** `src/components/ui/` (shadcn/ui components)
- **Business components:** `src/components/` (feature-specific components)
- **One component per file** (except tightly coupled sub-components)
- **Maximum file length:** ~300 lines (soft limit for components)

#### Import Order
```typescript
// 1. External packages
import { useState } from 'react'
import Link from 'next/link'

// 2. Internal modules (aliased imports)
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// 3. Types
import type { ButtonProps } from '@/types'

// 4. Relative imports (if any)
import './styles.css'
```

#### Server vs Client Components
- **Default to Server Components** (Next.js 15 best practice)
- **Use Client Components only when needed:**
  - useState, useEffect, or other React hooks
  - Browser-only APIs (window, localStorage)
  - Event handlers (onClick, onChange)
  - Third-party libraries requiring client-side rendering
- **Mark Client Components explicitly:** `'use client'` directive at top of file

### TypeScript Standards
- **Enable strict mode** (already configured in tsconfig.json)
- **Avoid `any` type** - use `unknown` or proper types
- **Define interfaces for props and data structures**
- **Use type inference where obvious** (e.g., useState)
- **Leverage utility types:** `Partial<T>`, `Pick<T, K>`, `Omit<T, K>`

### Styling Standards
- **Use Tailwind CSS** for all styling
- **Use `cn()` utility** for conditional class names
- **Leverage CSS variables** for theming (Tailwind v4 approach)
- **Avoid inline styles** unless absolutely necessary
- **Use shadcn/ui components** for common UI patterns

### Comments and Documentation
```typescript
// Good: Explains WHY, not WHAT
// Use exponential backoff to handle API rate limiting
const delay = Math.pow(2, attempt) * 1000

// Bad: Redundant comment
// Set delay to 2 to the power of attempt times 1000
const delay = Math.pow(2, attempt) * 1000
```

### Environment Files
- **Development:** `.env.local` (gitignored, not committed)
- **Example template:** `.env.local.example` (committed, no secrets)
- **Next.js conventions:**
  - `NEXT_PUBLIC_*` - Exposed to browser
  - No prefix - Server-side only
- **Never commit:**
  - `.env.local`
  - `.env.development.local`
  - `.env.production.local`

---

## Testing Strategy

### Test Organization
```
src/
├── components/
│   └── __tests__/              # Component unit tests
│       ├── contact-form.test.tsx
│       └── hero-section.test.tsx
├── test/
│   ├── setup.ts                # Vitest setup & configuration
│   └── utils.tsx               # Test utilities & helpers
e2e/                            # Playwright E2E tests (to be added)
└── *.spec.ts
```

### Testing Frameworks

#### Unit Testing (Vitest)
- **Framework:** Vitest 4.0.9 with React Testing Library
- **Config:** `vitest.config.ts`
- **Setup:** `src/test/setup.ts`
- **Environment:** jsdom (browser-like environment)

#### E2E Testing (Playwright)
- **Framework:** Playwright 1.56.1
- **Config:** `playwright.config.ts`
- **Browsers:** Chromium, Firefox, WebKit
- **Auto-install:** Runs via `postinstall` hook

### Testing Commands

#### Unit Tests (Vitest)
```bash
# Watch mode (auto-rerun on changes)
npm run test

# Run once (CI mode)
npm run test:run

# With UI dashboard
npm run test:ui

# With coverage report
npm run test:coverage
```

#### E2E Tests (Playwright)
```bash
# Headless mode
npm run e2e

# With Playwright UI
npm run e2e:ui

# Headed mode (visible browser)
npm run e2e:headed
```

### Test Standards

#### General
- Write tests for all new features
- Maintain minimum 80% code coverage
- Test both success and failure cases
- Use descriptive test names that explain behavior
- Keep tests independent and isolated

#### Component Testing
```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSection } from '../hero-section'

describe('HeroSection', () => {
  it('renders the main heading', () => {
    render(<HeroSection />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('handles button click', async () => {
    const handleClick = vi.fn()
    render(<HeroSection onCtaClick={handleClick} />)

    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
```

#### What to Test
- **Components:**
  - Rendering with different props
  - User interactions (clicks, inputs)
  - Conditional rendering logic
  - Accessibility (ARIA attributes, semantic HTML)
- **Utilities:**
  - Edge cases and error handling
  - Input/output transformations
- **E2E:**
  - Critical user flows
  - Multi-page navigation
  - Form submissions

---

## Next.js Specific Patterns

### Internationalization (i18n)

This project uses `next-intl` for internationalization with English and Japanese support.

#### Routing Pattern
- **Locale prefix:** All routes are prefixed with locale (e.g., `/en/about`, `/ja/about`)
- **Default locale:** English (`en`)
- **Supported locales:** `en`, `ja`
- **Configuration:** `src/i18n/routing.ts`

#### Using Translations in Server Components
```typescript
import { getTranslations } from 'next-intl/server'

export default async function Page() {
  const t = await getTranslations('home')
  return <h1>{t('title')}</h1>
}
```

#### Using Translations in Client Components
```typescript
'use client'

import { useTranslations } from 'next-intl'

export function MyComponent() {
  const t = useTranslations('features')
  return <p>{t('description')}</p>
}
```

#### Translation File Structure
```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },
  "home": {
    "title": "Welcome to REFLEKT",
    "subtitle": "Your journey begins here"
  }
}
```

### Data Fetching Patterns

#### Server Components (Recommended)
```typescript
// Async server component with data fetching
export default async function ProductsPage() {
  const products = await fetch('https://api.example.com/products')
    .then(res => res.json())

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
```

#### Client Components (When Needed)
```typescript
'use client'

import { useState, useEffect } from 'react'

export function DynamicContent() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
  }, [])

  return <div>{/* render data */}</div>
}
```

### Metadata and SEO

#### Static Metadata
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - REFLEKT',
  description: 'Learn more about REFLEKT and our mission',
  openGraph: {
    title: 'About Us - REFLEKT',
    description: 'Learn more about REFLEKT and our mission',
    images: ['/og-image.jpg'],
  },
}
```

#### Dynamic Metadata
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}
```

### Performance Optimization

#### Image Optimization
```typescript
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority // for above-fold images
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

#### Font Optimization
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

### Error Handling

#### Error Boundaries
- Use `error.tsx` in route segments for error handling
- Use `error-boundary.tsx` component for granular error catching

#### Not Found Pages
- Use `not-found.tsx` in route segments for 404 handling

---

## AI Assistant Guidelines

### When Working on This Repository

#### 1. Always Check Current State First
```bash
git status
git log -3 --oneline
ls -la
```

#### 2. Use Task Management
- Use `TodoWrite` tool for multi-step tasks
- Break complex tasks into smaller, trackable items
- Mark tasks as `in_progress` before starting
- Mark tasks as `completed` immediately after finishing
- Keep only ONE task `in_progress` at a time

#### 3. File Operations
- **Read before writing:** Always read existing files before modifying
- **Edit over write:** Prefer editing existing files to creating new ones
- **No unnecessary files:** Only create files that are essential
- **No documentation without request:** Don't create README, CHANGELOG, etc. unless asked

#### 4. Code Quality Checks
- Scan for security vulnerabilities (XSS, SQL injection, command injection)
- Validate input data
- Handle errors properly
- Check for hardcoded secrets before committing

#### 5. Communication Style
- Be concise and direct
- Focus on technical accuracy
- Use markdown for formatting
- No emojis unless requested
- Output results, don't just echo commands

#### 6. Tool Usage Priorities
1. Use specialized tools over bash commands
   - `Read` instead of `cat`
   - `Edit` instead of `sed`
   - `Write` instead of `echo >`
   - `Grep` instead of `grep`/`rg`
   - `Glob` instead of `find`

2. Use parallel tool calls when operations are independent
3. Use `Task` tool with `subagent_type=Explore` for codebase exploration
4. Never use `gh` CLI (not available)

#### 7. Security Considerations
Files that should NEVER be committed:
- `.env` files
- `credentials.json`
- Private keys (`*.pem`, `*.key`)
- API tokens
- Database passwords
- AWS/cloud credentials

If these are staged, warn the user immediately.

#### 8. Next.js Development Guidelines
- **Default to Server Components:** Only use `'use client'` when necessary
- **Use TypeScript paths:** Import with `@/` alias (e.g., `@/components/ui/button`)
- **Follow App Router conventions:** Use `page.tsx`, `layout.tsx`, `loading.tsx`, etc.
- **Optimize images:** Always use Next.js `Image` component, not `<img>`
- **Add i18n support:** Update both `en.json` and `ja.json` for user-facing text
- **Test builds:** Run `npm run build` before committing major changes
- **Check type safety:** Run `npm run type-check` to catch TypeScript errors
- **Maintain accessibility:** Use semantic HTML and ARIA attributes where needed

---

## Common Tasks

### Adding a New Page

```bash
# 1. Create page directory in src/app/[locale]/
# Example: src/app/[locale]/pricing/page.tsx

# 2. Implement the page component
# Follow Next.js App Router conventions

# 3. Add translations to messages/en.json and messages/ja.json

# 4. Add navigation link (if needed) in src/components/navigation.tsx

# 5. Test the page
npm run dev
# Visit http://localhost:3000/en/pricing and /ja/pricing

# 6. Write tests
# Add test file in src/components/__tests__/

# 7. Commit changes
git add src/app/[locale]/pricing/ messages/*.json src/components/navigation.tsx
git commit -m "feat(pages): add pricing page with i18n support"
```

### Adding a New Component

```bash
# 1. Create component file in src/components/
# Use kebab-case naming: my-component.tsx

# 2. Implement component with TypeScript
# Define props interface and export component

# 3. Add to index (if creating component library)

# 4. Write unit tests
# Create __tests__/my-component.test.tsx

# 5. Run tests
npm run test

# 6. Commit
git add src/components/my-component.tsx src/components/__tests__/my-component.test.tsx
git commit -m "feat(components): add MyComponent with tests"
```

### Adding a shadcn/ui Component

```bash
# Use npx to add components from shadcn/ui
npx shadcn@latest add <component-name>

# Examples:
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add tabs

# This will:
# - Add component to src/components/ui/
# - Install necessary dependencies
# - Update components.json if needed
```

### Adding i18n Translations

```bash
# 1. Add keys to messages/en.json
{
  "features": {
    "title": "Our Features",
    "subtitle": "Discover what makes us unique"
  }
}

# 2. Add same keys to messages/ja.json
{
  "features": {
    "title": "私たちの機能",
    "subtitle": "私たちをユニークにするものを発見してください"
  }
}

# 3. Use in components with useTranslations hook
import { useTranslations } from 'next-intl'

export function Features() {
  const t = useTranslations('features')
  return <h2>{t('title')}</h2>
}
```

### Adding Dependencies

```bash
# Production dependency
npm install <package>

# Development dependency
npm install -D <package>

# Examples:
npm install date-fns
npm install -D @types/node
```

### Running Development Workflow

```bash
# 1. Start dev server
npm run dev

# 2. In another terminal, run tests in watch mode
npm run test

# 3. Type check (before committing)
npm run type-check

# 4. Lint and fix issues
npm run lint:fix

# 5. Build for production (test build)
npm run build

# 6. Start production server locally
npm run start
```

### Debugging Build Issues

```bash
# 1. Clear Next.js cache
rm -rf .next

# 2. Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# 3. Check TypeScript errors
npm run type-check

# 4. Check linting errors
npm run lint

# 5. Try building again
npm run build

# 6. Analyze bundle size
npm run analyze
```

---

## File Change Checklist

Before committing changes, verify:

- [ ] Code follows Next.js and React best practices
- [ ] TypeScript types are properly defined (no `any`)
- [ ] Components use proper Server/Client component patterns
- [ ] Tailwind CSS classes are used correctly with `cn()` utility
- [ ] i18n keys added to both `en.json` and `ja.json` (if applicable)
- [ ] No security vulnerabilities introduced (XSS, injection, etc.)
- [ ] No secrets or credentials in code
- [ ] No `.env.local` or similar files staged for commit
- [ ] Tests written/updated for changes
- [ ] All tests pass (`npm run test:run`)
- [ ] Type checking passes (`npm run type-check`)
- [ ] Linting passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] No unnecessary files created
- [ ] Commit message follows conventional commits format
- [ ] Branch name follows conventions
- [ ] Changes are on correct branch
- [ ] Accessibility standards followed (ARIA, semantic HTML)

---

## Getting Help

### For AI Assistants
1. Check this CLAUDE.md file first
2. Read README.md for project-specific info
3. Examine .gitignore to understand project structure
4. Use `git log` to understand recent changes
5. Ask user for clarification when requirements are ambiguous

### Resources
- Repository: REFLEKT
- Documentation: docs/ directory (when created)
- Issues: Check with user (gh CLI not available)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 3.0.0 | 2025-11-16 | Added Supabase integration, Google OAuth, and Vercel deployment |
| 2.0.0 | 2025-11-16 | Updated for Next.js 15 website structure with full tech stack documentation |
| 1.0.0 | 2025-11-16 | Initial CLAUDE.md creation for REFLEKT project |

---

## Notes for Future Updates

This file should be updated when:
- Project structure changes significantly
- New technologies/languages are added
- Development workflows are established
- Testing frameworks are implemented
- Build processes are configured
- CI/CD pipelines are added
- Coding standards are formalized

**Maintainers:** Keep this document in sync with actual project practices.
