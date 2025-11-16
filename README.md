# REFLEKT

A modern, multilingual website built with cutting-edge web technologies, optimized for performance, accessibility, and developer experience.

## Tech Stack

- **Next.js 15.5+** with App Router (TypeScript, Edge-ready)
- **React 19.1** with Server Components
- **Turbopack** for blazing-fast development
- **Tailwind CSS v4** with CSS variables for theme tokens
- **shadcn/ui** components
- **Framer Motion** for animations
- **next-intl** for internationalization (English & Japanese)

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
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

### Testing
- `npm run test` - Run unit tests in watch mode
- `npm run test:run` - Run unit tests once
- `npm run test:coverage` - Run tests with coverage
- `npm run e2e` - Run Playwright E2E tests
- `npm run e2e:ui` - Run E2E tests with UI

## Project Structure

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
├── i18n/                  # Internationalization
├── hooks/                 # Custom React hooks
├── stores/                # State management
├── types/                 # TypeScript definitions
└── test/                  # Test utilities
messages/                  # Translation files
├── en.json                # English translations
└── ja.json                # Japanese translations
public/                    # Static assets
e2e/                       # Playwright E2E tests
```

## Deployment

The application is optimized for deployment on Vercel. For detailed deployment instructions, see [REFLEKT_BUILD_INSTRUCTIONS.md](./REFLEKT_BUILD_INSTRUCTIONS.md).

## License

TBD