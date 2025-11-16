# @reflekt/apple-ui

> Apple-inspired UI component library for React, based on Apple's Human Interface Guidelines

A modern, accessible, and beautifully designed component library that brings Apple's design philosophy to your React applications.

## Features

- **Apple Design Language** - Faithful implementation of Apple's Human Interface Guidelines
- **visionOS-Inspired** - Beautiful 3D effects, glassmorphism, and smooth animations
- **TypeScript First** - Full TypeScript support with comprehensive type definitions
- **Dark Mode** - Automatic dark mode support using CSS media queries
- **Accessible** - WCAG 2.1 AA compliant with semantic HTML and ARIA attributes
- **Glassmorphism** - Beautiful blur effects and translucent surfaces
- **3D Depth Effects** - Realistic tilt, hover, and perspective transforms
- **Smooth Animations** - Spring-based animations for natural motion
- **Responsive** - Mobile-first design that works on all screen sizes
- **Zero Dependencies** - Only requires React (except for `clsx` utility)
- **Tree-shakeable** - Import only what you need

## Installation

```bash
npm install @reflekt/apple-ui
# or
yarn add @reflekt/apple-ui
# or
pnpm add @reflekt/apple-ui
```

## Quick Start

```tsx
import {
  Button,
  Card,
  Typography,
  Input,
  Navigation,
  NavContent,
  NavBrand,
  NavLinks,
  NavLink,
} from '@reflekt/apple-ui'

function App() {
  return (
    <>
      <Navigation variant="glass">
        <NavContent>
          <NavBrand>REFLEKT</NavBrand>
          <NavLinks>
            <NavLink href="/" active>Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </NavLinks>
        </NavContent>
      </Navigation>

      <Card variant="elevated" hoverable padding="lg">
        <Typography variant="title1" weight="bold">
          Welcome to Apple UI
        </Typography>
        <Typography variant="body" color="secondary">
          Build beautiful interfaces with Apple's design language
        </Typography>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Card>
    </>
  )
}
```

## Components

### Typography

Apple's typographic system with all standard text styles.

```tsx
import { Typography } from '@reflekt/apple-ui'

// Available variants
<Typography variant="largeTitle">Large Title</Typography>
<Typography variant="title1">Title 1</Typography>
<Typography variant="title2">Title 2</Typography>
<Typography variant="title3">Title 3</Typography>
<Typography variant="body">Body Text</Typography>
<Typography variant="callout">Callout</Typography>
<Typography variant="subheadline">Subheadline</Typography>
<Typography variant="footnote">Footnote</Typography>
<Typography variant="caption1">Caption 1</Typography>
<Typography variant="caption2">Caption 2</Typography>

// Font weights (SF Pro family)
<Typography weight="ultralight">Ultralight</Typography>
<Typography weight="thin">Thin</Typography>
<Typography weight="light">Light</Typography>
<Typography weight="regular">Regular</Typography>
<Typography weight="medium">Medium</Typography>
<Typography weight="semibold">Semibold</Typography>
<Typography weight="bold">Bold</Typography>
<Typography weight="heavy">Heavy</Typography>
<Typography weight="black">Black</Typography>

// Label colors
<Typography color="primary">Primary Color</Typography>
<Typography color="secondary">Secondary Color</Typography>
<Typography color="tertiary">Tertiary Color</Typography>
<Typography color="quaternary">Quaternary Color</Typography>
```

**Props:**
- `variant`: Text style (`largeTitle` | `title1` | `title2` | `title3` | `body` | `callout` | `subheadline` | `footnote` | `caption1` | `caption2`)
- `weight`: Font weight (`ultralight` | `thin` | `light` | `regular` | `medium` | `semibold` | `bold` | `heavy` | `black`)
- `color`: Label color (`primary` | `secondary` | `tertiary` | `quaternary`)
- `as`: HTML element to render
- `align`: Text alignment (`left` | `center` | `right`)

### Button

Apple-style buttons with multiple variants and states.

```tsx
import { Button } from '@reflekt/apple-ui'

// Variants
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="tertiary">Tertiary Button</Button>
<Button variant="destructive">Delete</Button>
<Button variant="plain">Plain Button</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>

// With icons
<Button startIcon={<Icon />}>With Start Icon</Button>
<Button endIcon={<Icon />}>With End Icon</Button>

// Full width
<Button fullWidth>Full Width Button</Button>
```

**Props:**
- `variant`: Visual style (`primary` | `secondary` | `tertiary` | `destructive` | `plain`)
- `size`: Button size (`sm` | `md` | `lg`)
- `loading`: Show loading spinner
- `disabled`: Disabled state
- `startIcon`: Icon before text
- `endIcon`: Icon after text
- `fullWidth`: Full width button

### Card

Versatile card component with multiple variants.

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@reflekt/apple-ui'

// Variants
<Card variant="elevated">Elevated Card</Card>
<Card variant="filled">Filled Card</Card>
<Card variant="outlined">Outlined Card</Card>
<Card variant="glass">Glassmorphism Card</Card>

// Interactive
<Card hoverable>Hoverable Card</Card>
<Card pressable>Pressable Card</Card>

// Structured content
<Card variant="elevated" padding="lg">
  <CardHeader>
    <Typography variant="title2">Card Title</Typography>
  </CardHeader>
  <CardContent>
    <Typography variant="body">Card content goes here</Typography>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Action</Button>
  </CardFooter>
</Card>
```

**Props:**
- `variant`: Visual style (`elevated` | `filled` | `outlined` | `glass`)
- `padding`: Internal padding (`none` | `sm` | `md` | `lg`)
- `radius`: Border radius (`sm` | `md` | `lg` | `xl`)
- `hoverable`: Enable hover effect
- `pressable`: Enable press effect

### Input

Clean, accessible input fields.

```tsx
import { Input } from '@reflekt/apple-ui'

// Basic input
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
/>

// With helper text
<Input
  label="Password"
  type="password"
  helperText="Must be at least 8 characters"
/>

// Error state
<Input
  label="Username"
  error
  errorMessage="Username is required"
/>

// With icons
<Input
  label="Search"
  startIcon={<SearchIcon />}
  placeholder="Search..."
/>

// Variants and sizes
<Input variant="outlined" inputSize="md" />
<Input variant="filled" inputSize="lg" />
```

**Props:**
- `variant`: Visual style (`outlined` | `filled`)
- `inputSize`: Input size (`sm` | `md` | `lg`)
- `label`: Label text
- `helperText`: Helper text below input
- `error`: Error state
- `errorMessage`: Error message
- `startIcon`: Icon at start
- `endIcon`: Icon at end
- `fullWidth`: Full width input

### Navigation

Apple-style navigation bar with glassmorphism.

```tsx
import {
  Navigation,
  NavContent,
  NavBrand,
  NavLinks,
  NavLink,
} from '@reflekt/apple-ui'

<Navigation variant="glass" position="sticky">
  <NavContent>
    <NavBrand>
      <img src="/logo.svg" alt="Logo" />
      REFLEKT
    </NavBrand>
    <NavLinks>
      <NavLink href="/" active>Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/services">Services</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </NavLinks>
  </NavContent>
</Navigation>
```

**Props:**
- `variant`: Visual style (`default` | `glass` | `transparent`)
- `position`: Positioning (`static` | `fixed` | `sticky`)
- `blurOnScroll`: Enable blur effect on scroll

### Icon (visionOS-inspired)

Beautiful animated icons with smooth hover effects and depth.

```tsx
import { Icon, IconGrid } from '@reflekt/apple-ui'

// Basic icon with lift effect
<Icon hoverEffect="lift" size="lg">
  🚀
</Icon>

// Icon with glass background and tilt
<Icon
  background="glass"
  hoverEffect="tilt"
  animation="bounce"
  size="xl"
>
  🎨
</Icon>

// Entry animations
<Icon animation="float">🌟</Icon>
<Icon animation="bounce">⚡</Icon>
<Icon animation="scale">💎</Icon>
<Icon animation="rotate">🔮</Icon>

// Hover effects
<Icon hoverEffect="lift">📱</Icon>   {/* Lift with shadow */}
<Icon hoverEffect="tilt">🎯</Icon>   {/* 3D tilt */}
<Icon hoverEffect="glow">✨</Icon>   {/* Glowing effect */}
<Icon hoverEffect="float">☁️</Icon>  {/* Continuous float */}
<Icon hoverEffect="pulse">❤️</Icon>  {/* Pulsing scale */}

// Icon grid with staggered animations
<IconGrid columns={3} gap="lg" staggerDelay={100}>
  <Icon animation="bounce" hoverEffect="tilt">🚀</Icon>
  <Icon animation="bounce" hoverEffect="tilt">⚡</Icon>
  <Icon animation="bounce" hoverEffect="tilt">🎨</Icon>
</IconGrid>
```

**Props:**
- `size`: Icon size (`xs` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl`)
- `animation`: Entry animation (`none` | `float` | `bounce` | `scale` | `rotate` | `slide-up` | `slide-down` | `fade`)
- `animationDelay`: Animation delay in milliseconds
- `hoverEffect`: Hover effect (`none` | `lift` | `tilt` | `rotate` | `scale` | `glow` | `float` | `pulse`)
- `background`: Background variant (`none` | `filled` | `glass` | `gradient`)
- `color`: Custom background color
- `interactive`: Enable interactive state
- `disableHover`: Disable hover effects

### VisionCard (visionOS-inspired)

Glass cards with depth, 3D tilt effects, and smooth animations.

```tsx
import { VisionCard, VisionCardGrid } from '@reflekt/apple-ui'

// Basic glass card
<VisionCard material="glass" depth="medium">
  <h3>Beautiful Glass Effect</h3>
  <p>With backdrop blur and depth</p>
</VisionCard>

// Interactive card with tilt and glow
<VisionCard
  material="frosted"
  depth="deep"
  tiltOnHover
  glowOnHover
  radius="xl"
  padding="lg"
>
  <Icon size="xl">🚀</Icon>
  <Typography variant="title2">Amazing Card</Typography>
</VisionCard>

// Floating card
<VisionCard
  material="crystal"
  floating
  depth="medium"
>
  <p>Gently floating in space</p>
</VisionCard>

// Card grid
<VisionCardGrid columns={3} gap="lg">
  <VisionCard material="glass">Card 1</VisionCard>
  <VisionCard material="frosted">Card 2</VisionCard>
  <VisionCard material="crystal">Card 3</VisionCard>
</VisionCardGrid>
```

**Props:**
- `material`: Glass material (`glass` | `frosted` | `crystal` | `dark-glass`)
- `depth`: Depth level (`flat` | `shallow` | `medium` | `deep`)
- `tiltOnHover`: Enable 3D tilt effect on hover
- `glowOnHover`: Enable glow effect on hover
- `floating`: Enable floating animation
- `radius`: Border radius (`sm` | `md` | `lg` | `xl` | `2xl`)
- `padding`: Internal padding (`none` | `sm` | `md` | `lg` | `xl`)

**See [VISIONOS_EXAMPLES.md](./VISIONOS_EXAMPLES.md) for detailed visionOS component examples.**

## Design Tokens

Access Apple's design tokens for custom styling:

```tsx
import {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  blur,
  transitions,
  zIndex,
  breakpoints,
} from '@reflekt/apple-ui'

// Use tokens in your custom components
const customStyles = {
  color: colors.system.blue,
  fontSize: typography.fontSize.body,
  padding: spacing[4],
  borderRadius: borderRadius.lg,
  boxShadow: shadows.md,
  transition: `all ${transitions.duration.DEFAULT} ${transitions.timing.DEFAULT}`,
}
```

### Available Tokens

- **colors**: Primary, gray scale, system colors, backgrounds, labels, fills
- **typography**: Font families, sizes, weights, line heights, letter spacing
- **spacing**: Consistent spacing scale (0-24)
- **borderRadius**: Corner radius values
- **shadows**: Elevation shadows for light and dark modes
- **blur**: Backdrop blur values for glassmorphism
- **transitions**: Duration and easing curves
- **zIndex**: Layering system
- **breakpoints**: Responsive breakpoints

## Design Principles

This library follows Apple's core design principles:

1. **Clarity** - Clear typography, ample white space, minimal visual noise
2. **Deference** - Content takes priority over chrome
3. **Depth** - Subtle shadows and layering create visual hierarchy
4. **Consistency** - Familiar patterns and predictable interactions
5. **Accessibility** - WCAG compliant with semantic HTML

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari (latest)
- Chrome for Android (latest)

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Type check
npm run type-check

# Lint
npm run lint
```

## Contributing

Contributions are welcome! Please ensure your PR:

1. Follows Apple's Human Interface Guidelines
2. Includes TypeScript types
3. Supports dark mode
4. Is accessible (WCAG 2.1 AA)
5. Includes documentation

## Resources

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)
- [Apple Design Resources](https://developer.apple.com/design/resources/)
- [SF Pro Font Family](https://developer.apple.com/fonts/)
- [SF Symbols](https://developer.apple.com/sf-symbols/)

## License

MIT © REFLEKT

## Acknowledgments

- Inspired by [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)
- Typography system based on SF Pro specifications
- Design tokens derived from iOS/macOS design system
