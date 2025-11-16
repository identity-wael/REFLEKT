# Changelog

All notable changes to the @reflekt/apple-ui library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-11-16

### Added

#### Components
- **Typography** - Complete Apple typography system with all text styles (largeTitle, title1-3, body, callout, subheadline, footnote, caption1-2)
- **Button** - Five variants (primary, secondary, tertiary, destructive, plain) with loading and icon support
- **Card** - Four variants (elevated, filled, outlined, glass) with CardHeader, CardContent, and CardFooter sub-components
- **Input** - Two variants (outlined, filled) with label, helper text, error states, and icon support
- **Navigation** - Complete navigation system with NavContent, NavBrand, NavLinks, and NavLink components

#### Design Tokens
- **Colors** - Complete Apple color system including primary, grays, system colors, backgrounds, labels, and fills
- **Typography** - SF Pro font family specifications with sizes, weights, line heights, and letter spacing
- **Spacing** - Consistent spacing scale (0-24)
- **Border Radius** - Corner radius values from sm to 3xl
- **Shadows** - Elevation shadows for both light and dark modes
- **Blur** - Backdrop blur values for glassmorphism effects
- **Transitions** - Duration and easing curves following Apple's motion design
- **Z-Index** - Layering system for overlays and modals
- **Breakpoints** - Responsive design breakpoints

#### Features
- Full TypeScript support with comprehensive type definitions
- Automatic dark mode support using CSS media queries
- WCAG 2.1 AA accessibility compliance
- Glassmorphism effects with backdrop blur
- Zero dependencies (except clsx utility)
- Tree-shakeable exports
- CSS Modules for scoped styling

#### Documentation
- Comprehensive README with component examples
- EXAMPLES.md with real-world usage patterns
- TypeScript documentation with JSDoc comments
- Design principles and best practices

### Technical Details
- Built with TypeScript 5.9.3
- React 19 peer dependency
- ES2022 target
- CommonJS and ESM module outputs
- CSS Modules for component styling

---

## Future Releases

### Planned for 0.2.0
- Modal/Dialog component
- Dropdown/Select component
- Checkbox and Radio components
- Switch/Toggle component
- Badge component
- Progress indicators
- Toast/Notification system

### Planned for 0.3.0
- Table component
- Tabs component
- Accordion component
- Popover component
- Tooltip component
- Avatar component
- Skeleton loaders

### Planned for 1.0.0
- Complete test coverage
- Storybook documentation
- Animation library integration
- Form validation utilities
- Advanced theming system
- RTL support
