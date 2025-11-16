# Earna AI Documentation

Official documentation site for the Earna AI platform, built with Nextra.

## Live Deployment

**Production**: [https://docs.earna.sh](https://docs.earna.sh)

## Overview

Comprehensive documentation for the Earna AI platform including:

- Getting started guides
- API references
- Architecture documentation
- Credit intelligence features
- Interactive avatar integration
- Voice mode implementation
- Infrastructure and deployment

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

### Console Documentation

- Getting started guide
- Prerequisites and setup
- Core features (AI models, chat, voice)
- API reference
- Development guides

### Credit Engine

- Architecture overview
- API endpoints
- AI credit coaching
- Integration guides

### Infrastructure

- Turborepo & pnpm migration
- Monorepo best practices
- Environment variables
- Vercel deployment
- Port configuration

### Operations

- Troubleshooting guides
- Migration documentation
- Deployment procedures
- Monitoring and maintenance

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

- **Main Console**: [https://console.earna.sh](https://console.earna.sh)
- **Landing Page**: [https://earna.sh](https://earna.sh)
- **Credit Engine API**: Port 3004 (development)
- **GitHub**: [https://github.com/identity-wael/earna-ai](https://github.com/identity-wael/earna-ai)

## License

Copyright © 2025 Earna AI. All rights reserved.
