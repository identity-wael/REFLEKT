# REFLEKT Documentation

Official documentation site for the REFLEKT Smart Mirror, built with Nextra.

## Live Deployment

**Production**: [https://docs.reflekt.app](https://docs.reflekt.app)

## Overview

Comprehensive documentation for the REFLEKT Smart Mirror including:

- Getting started guides
- Product features and capabilities
- Dual-mode interface (Calm & Active Modes)
- AI-powered mood sensing
- AR style guidance technology
- Dementia support features
- Hardware and software architecture
- Development and deployment guides

## Tech Stack

- **Framework**: Next.js 15.5 with App Router
- **Documentation**: Nextra 3.3
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS v4
- **Search**: FlexSearch
- **Deployment**: Vercel

## Development

### Prerequisites

- Node.js 22+
- pnpm 9+ (recommended)

### Installation

```bash
# From project root (recommended)
pnpm install

# Or from docs-nextra directory
cd docs-nextra
pnpm install
```

### Running Locally

```bash
# From project root using Turborepo
pnpm turbo dev --filter=docs-nextra

# Or from docs-nextra directory
cd docs-nextra
pnpm dev

# Or run on custom port
pnpm dev -p 3001

# Runs on http://localhost:3002 by default
```

### Building for Production

```bash
# From project root
pnpm turbo build --filter=docs-nextra

# Or from docs-nextra directory
cd docs-nextra
pnpm build
```

## Project Structure

```
docs-nextra/
├── src/
│   ├── app/               # Next.js app directory
│   ├── content/           # MDX documentation files
│   │   ├── console/       # Console app documentation
│   │   ├── credit-engine/ # Credit engine docs
│   │   ├── infrastructure/# Infrastructure & deployment
│   │   └── operations/    # Operations guides
│   └── components/        # React components
├── public/                # Static assets
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## Documentation Structure

### Smart Mirror Documentation

- Getting started guide
- Prerequisites and setup
- Core features (Calm Mode, Active Mode, Mood Sensing)
- AR Style Guidance
- Dementia support capabilities
- Hardware specifications

### Product Features

- Dual-mode interface overview
- AI-powered mood sensing
- Morning wellness routines
- Daily briefings and smart scheduling
- Style recommendations and virtual try-on

### Development

- Architecture overview
- Technology stack
- Component library
- API reference
- Development guides

### Deployment

- Hardware setup
- Software installation
- Environment configuration
- Troubleshooting guides

## Key Features

- **Full-text Search**: Built-in search with FlexSearch
- **Dark Mode**: Automatic theme switching
- **MDX Support**: Rich content with React components
- **Code Highlighting**: Syntax highlighting for multiple languages
- **Copy Code**: One-click code copying
- **Navigation**: Automatic sidebar generation
- **Responsive**: Mobile-optimized documentation

## Configuration

### Port Configuration

Default port: 3002

To run on a different port:

```bash
pnpm dev -p 3001
```

### Environment Variables

No environment variables required for documentation site.

## Scripts

```bash
# Development
pnpm dev          # Start dev server on port 3002
pnpm dev -p 3001  # Start dev server on custom port

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Quality
pnpm type-check   # TypeScript type checking
pnpm lint         # ESLint checking
```

## Adding Documentation

1. Create MDX file in `src/content/`
2. Add frontmatter metadata:

```mdx
---
title: Page Title
description: Page description
---
```

3. Write content using MDX
4. Navigation automatically generated from file structure

## Contributing

See [Contributing Guidelines](../project-planning/contributing.md) for details.

## Related Links

- **Main Console**: [https://console.reflekt.app](https://console.reflekt.app)
- **Landing Page**: [https://reflekt.app](https://reflekt.app)
- **Credit Engine API**: Port 3004 (development)
- **GitHub**: [https://github.com/identity-wael/REFLEKT](https://github.com/identity-wael/REFLEKT)

## License

Copyright © 2025 REFLEKT. All rights reserved.
