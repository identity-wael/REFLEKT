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
- **Icon** (visionOS-inspired) - Animated icon component with 8 entry animations (float, bounce, scale, rotate, slide-up, slide-down, fade, none) and 7 hover effects (lift, tilt, rotate, scale, glow, float, pulse)
- **IconGrid** - Grid layout for icons with automatic staggered animations
- **VisionCard** (visionOS-inspired) - Glass card component with 4 material variants (glass, frosted, crystal, dark-glass), 3D tilt on hover, glow effects, and floating animations
- **VisionCardGrid** - Grid layout for VisionCards with responsive columns
- **MenuBar** (macOS Sonoma/visionOS-inspired) - Advanced menu bar with 4 glass materials (glass, frosted-heavy, translucent, vibrant), dynamic blur on scroll, and menu items with indicators
- **MenuItem, MenuBarDivider** - Menu bar sub-components for building navigation
- **Widget** - Modular dashboard widget system with 4 materials, 4 sizes, 7 accent colors, and support for dynamic data display
- **WidgetHeader, WidgetContent, WidgetValue, WidgetTrend, WidgetFooter** - Widget sub-components for structured content
- **GlassCanvas** (visionOS/tvOS-inspired) - Two-way mirror/screen surface for floating interfaces with 4 variants, background video/image support, parallax on mouse movement, and ambient lighting effects
- **FloatingZone** (visionOS/tvOS-inspired) - Positioning zones for floating content on GlassCanvas with 4 depth layers, 5 entry animations, 3D transforms, and 9 anchor points

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
- **visionOS-inspired 3D effects** - Realistic tilt, perspective transforms, and depth
- **Smooth spring-based animations** - Natural motion with cubic-bezier easing
- **Multiple entry animations** - Float, bounce, scale, rotate, slide, and fade
- **Rich hover interactions** - Lift, tilt, glow, pulse, and float effects
- **Two-way mirror/screen interfaces** - visionOS/tvOS-style floating content with GlassCanvas
- **Advanced glass materials** - Heavy frosted (macOS Sonoma), ultra-translucent (visionOS), vibrant
- **Parallax effects** - Mouse-tracking parallax on GlassCanvas backgrounds
- **Dashboard widgets** - Modular system for stocks, health vitals, weather, and custom data
- **Dynamic blur** - Blur intensity increases on scroll for menu bars
- Zero dependencies (except clsx utility)
- Tree-shakeable exports
- CSS Modules for scoped styling
- **Prefers-reduced-motion support** - Automatic animation disabling for accessibility

#### Documentation
- Comprehensive README with component examples
- EXAMPLES.md with real-world usage patterns
- **VISIONOS_EXAMPLES.md** - Dedicated visionOS component examples and patterns
- **WIDGETS_AND_INTERFACES.md** - Complete guide for widgets, MenuBar, GlassCanvas, and FloatingZone
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
