# Typography System

Complete Apple-compatible typography system for the REFLEKT apple-ui library. Implements Apple's Human Interface Guidelines typography specifications with comprehensive utilities and helper components.

## Table of Contents

- [Overview](#overview)
- [Components](#components)
- [Utilities](#utilities)
- [Font Metrics](#font-metrics)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)

---

## Overview

The typography system provides:

- **Core Component**: `Typography` - Base component with full Apple text style system
- **Specialized Components**: `Heading`, `Body`, `Caption`, `Label` - Purpose-built components
- **Typography Presets**: Pre-configured style combinations for common use cases
- **Text Helpers**: Utility functions for text manipulation and formatting
- **Font Metrics**: Constants and calculations for Apple's typography specifications

### Text Styles

10 text styles following Apple's HIG:

| Style | Size | Use Case |
|-------|------|----------|
| `largeTitle` | 34px | Main page titles (max one per screen) |
| `title1` | 28px | Primary sections |
| `title2` | 22px | Secondary sections |
| `title3` | 20px | Tertiary sections, card titles |
| `body` | 17px | Main content, paragraphs |
| `callout` | 16px | Emphasized content |
| `subheadline` | 15px | Less prominent content |
| `footnote` | 13px | Captions, descriptions |
| `caption1` | 12px | Labels, timestamps |
| `caption2` | 11px | Smallest text, fine print |

### Font Weights

9 weights from SF Pro family:

`ultralight` (100) | `thin` (200) | `light` (300) | `regular` (400) | `medium` (500) | `semibold` (600) | `bold` (700) | `heavy` (800) | `black` (900)

### Semantic Colors

4 semantic color variants with automatic dark mode:

- `primary` - Primary text (100% opacity)
- `secondary` - Secondary text (60% opacity)
- `tertiary` - Tertiary text (30% opacity)
- `quaternary` - Quaternary text (18% opacity)

---

## Components

### Typography (Base Component)

The foundation component providing full control over text styling.

```tsx
import { Typography } from '@reflekt/apple-ui'

// Basic usage
<Typography>Default body text</Typography>

// With variant and weight
<Typography variant="title1" weight="bold">
  Bold Title
</Typography>

// With semantic color
<Typography variant="body" color="secondary">
  Secondary text
</Typography>

// Custom HTML element
<Typography variant="title2" as="h2">
  Heading 2
</Typography>

// Text alignment
<Typography align="center">
  Centered text
</Typography>
```

**Props:**
- `variant?: TextStyle` - Text style (default: `'body'`)
- `weight?: FontWeight` - Font weight (default: `'regular'`)
- `color?: LabelColor` - Semantic color (default: `'primary'`)
- `as?: HTMLElement` - HTML element to render
- `align?: 'left' | 'center' | 'right'` - Text alignment
- `className?: string` - Additional CSS classes

---

### Heading

Specialized component for headings with semantic HTML.

```tsx
import { Heading } from '@reflekt/apple-ui'

// Semantic heading (automatically maps to h2 + title1)
<Heading level={2}>Section Title</Heading>

// Using presets
<Heading preset="hero">Hero Title</Heading>
<Heading preset="section">Section Title</Heading>
<Heading preset="card">Card Title</Heading>

// Custom styling
<Heading level={1} variant="largeTitle" weight="black">
  Custom Hero
</Heading>
```

**Props:**
- `level?: 1 | 2 | 3 | 4 | 5 | 6` - Semantic heading level (default: `2`)
- `preset?: HeadingPresetKey` - Pre-configured style preset
- `variant?: TextStyle` - Custom text style override
- `weight?: FontWeight` - Font weight
- `color?: LabelColor` - Semantic color
- `as?: HTMLElement` - Custom HTML element override

**Available Presets:**
- `hero` - Large, bold (largeTitle + bold)
- `section` - Medium, semibold (title1 + semibold)
- `subsection` - Smaller, semibold (title2 + semibold)
- `card` - Component title (title3 + semibold)
- `subtle` - Less prominent (title3 + medium + secondary)

---

### Body

Specialized component for body text and paragraphs with readability features.

```tsx
import { Body } from '@reflekt/apple-ui'

// Standard paragraph
<Body>This is body text optimized for reading.</Body>

// With readable max width (~66 characters)
<Body maxWidth="readable">
  Long form content with optimal line length for readability.
  Automatically constrains to ~672px for best reading experience.
</Body>

// Using presets
<Body preset="emphasized">Medium weight for emphasis</Body>
<Body preset="strong">Bold for strong emphasis</Body>
<Body preset="secondary">Less prominent supporting text</Body>
<Body preset="callout">Slightly larger callout text</Body>
```

**Props:**
- `preset?: BodyPresetKey` - Pre-configured body text preset (default: `'default'`)
- `maxWidth?: 'readable' | number` - Maximum width in pixels or 'readable' for ~66 chars
- `weight?: FontWeight` - Font weight
- `color?: LabelColor` - Semantic color
- `as?: HTMLElement` - HTML element (default: `'p'`)

**Available Presets:**
- `default` - Standard body (body + regular + primary)
- `emphasized` - Medium weight (body + medium + primary)
- `strong` - Bold weight (body + semibold + primary)
- `secondary` - Less prominent (body + regular + secondary)
- `callout` - Larger text (callout + regular + primary)
- `subheadline` - Smaller text (subheadline + regular + primary)

---

### Caption

Specialized component for captions, labels, and small supporting text.

```tsx
import { Caption } from '@reflekt/apple-ui'

// Standard caption
<Caption>Image caption or description</Caption>

// Small caption for timestamps
<Caption preset="small">2 min ago</Caption>

// Tiny caption for metadata
<Caption preset="tiny">Last updated: Nov 17, 2025</Caption>

// Emphasized caption
<Caption preset="emphasized">Important note</Caption>

// All caps label
<Caption preset="label">SECTION TITLE</Caption>
```

**Props:**
- `preset?: CaptionPresetKey` - Pre-configured caption preset (default: `'default'`)
- `weight?: FontWeight` - Font weight
- `color?: LabelColor` - Semantic color
- `as?: HTMLElement` - HTML element (default: `'span'`)

**Available Presets:**
- `default` - Standard caption (footnote + regular + secondary)
- `small` - Smaller caption (caption1 + regular + secondary)
- `tiny` - Smallest caption (caption2 + regular + tertiary)
- `emphasized` - Medium weight (footnote + medium + secondary)
- `label` - For labels/metadata (caption1 + semibold + secondary)

---

### Label

Specialized component for form labels with required field support.

```tsx
import { Label } from '@reflekt/apple-ui'

// Standard form label
<Label htmlFor="email">Email Address</Label>

// Required field (adds red asterisk)
<Label htmlFor="name" required>Full Name</Label>

// Helper text
<Label variant="helper">
  Password must be at least 8 characters
</Label>

// Error message
<Label variant="error">
  Please enter a valid email address
</Label>
```

**Props:**
- `variant?: 'default' | 'helper' | 'error'` - Label style variant
- `htmlFor?: string` - ID of the associated input element
- `required?: boolean` - Shows required indicator (*)
- `weight?: FontWeight` - Font weight
- `color?: LabelColor` - Semantic color

---

## Utilities

### Typography Presets

Pre-configured style combinations for common use cases.

```tsx
import { typographyScales, headingPresets, bodyPresets } from '@reflekt/apple-ui'

// Access all presets
const allScales = typographyScales
// {
//   heading: { hero, section, subsection, card, subtle },
//   body: { default, emphasized, strong, secondary, callout, subheadline },
//   caption: { default, small, tiny, emphasized, label },
//   link: { default, emphasized, small, large },
//   button: { default, large, small },
//   form: { label, helper, error, placeholder }
// }

// Use individual preset categories
const heroConfig = headingPresets.hero
// { variant: 'largeTitle', weight: 'bold', color: 'primary' }

// Apply to Typography component
<Typography {...bodyPresets.emphasized}>
  This uses the emphasized body preset
</Typography>
```

**Available Preset Categories:**
- `headingPresets` - hero, section, subsection, card, subtle
- `bodyPresets` - default, emphasized, strong, secondary, callout, subheadline
- `captionPresets` - default, small, tiny, emphasized, label
- `linkPresets` - default, emphasized, small, large
- `buttonPresets` - default, large, small
- `formPresets` - label, helper, error, placeholder

---

### Text Helper Functions

Utility functions for text manipulation and formatting.

```tsx
import {
  truncateText,
  truncateWords,
  formatNumber,
  formatCurrency,
  formatDate,
  toTitleCase,
  calculateReadingTime,
  getInitials,
  pluralize,
} from '@reflekt/apple-ui'

// Truncate text
truncateText('This is a very long text', 10)
// → 'This is a…'

truncateWords('This is a very long sentence', 3)
// → 'This is a…'

// Format numbers
formatNumber(1234.56)
// → '1,234.56'

formatCurrency(1234.56, 'USD', 'en-US')
// → '$1,234.56'

formatCurrency(1234.56, 'JPY', 'ja-JP')
// → '¥1,235'

// Format dates
formatDate(new Date(), 'en-US', { dateStyle: 'medium' })
// → 'Nov 17, 2025'

// Text case conversion
toTitleCase('this is a title')
// → 'This Is A Title'

// Reading time
calculateReadingTime('Your article text here...')
// → 3 (minutes)

// Initials
getInitials('John Doe')
// → 'JD'

// Pluralization
pluralize(1, 'item')
// → '1 item'

pluralize(5, 'item')
// → '5 items'

pluralize(2, 'person', 'people')
// → '2 people'
```

**Available Functions:**
- `truncateText(text, maxLength, ellipsis?)` - Truncate by character count
- `truncateWords(text, maxWords, ellipsis?)` - Truncate by word boundary
- `formatAllCaps(text)` - Convert to uppercase
- `formatNumber(num, locale?, options?)` - Format numbers with localization
- `formatCurrency(amount, currency?, locale?)` - Format currency
- `formatDate(date, locale?, options?)` - Format dates
- `toTitleCase(text)` - Convert to title case
- `toSentenceCase(text)` - Convert to sentence case
- `calculateReadingTime(text, wordsPerMinute?)` - Estimate reading time
- `formatReadingTime(minutes, locale?)` - Format as human-readable string
- `normalizeWhitespace(text)` - Remove extra whitespace
- `stripHtml(html)` - Remove HTML tags
- `highlightText(text, searchTerm, caseSensitive?)` - Split text for highlighting
- `getInitials(name, maxInitials?)` - Generate initials from name
- `pluralize(count, singular, plural?)` - Pluralize words

---

## Font Metrics

Constants and calculations for Apple's typography specifications.

```tsx
import {
  FONT_SIZES,
  LINE_HEIGHTS,
  LETTER_SPACING,
  FONT_WEIGHTS,
  TYPOGRAPHY_METRICS,
  calculateOptimalWidth,
  getFontVariant,
} from '@reflekt/apple-ui'

// Font size constants
FONT_SIZES.LARGE_TITLE // → 34
FONT_SIZES.BODY // → 17

// Line height constants
LINE_HEIGHTS.BODY // → 22

// Letter spacing (tracking) constants
LETTER_SPACING.BODY // → -0.43

// Font weight constants
FONT_WEIGHTS.SEMIBOLD // → 600

// Complete metrics for each style
TYPOGRAPHY_METRICS.body
// {
//   fontSize: 17,
//   lineHeight: 22,
//   letterSpacing: -0.43,
//   lineHeightRatio: 1.29,
//   variant: 'text',
//   maxWidth: 672
// }

// Calculate optimal width for readability
calculateOptimalWidth(17, 66)
// → 672 (pixels for ~66 characters)

// Get recommended SF Pro variant
getFontVariant(17) // → 'text' (SF Pro Text)
getFontVariant(28) // → 'display' (SF Pro Display)
```

**Available Constants:**
- `SF_PRO_FONT_STACK` - SF Pro font stack with fallbacks
- `SF_MONO_FONT_STACK` - SF Mono font stack for code
- `FONT_SIZES` - Size in pixels for each text style
- `LINE_HEIGHTS` - Line height for each text style
- `LETTER_SPACING` - Tracking values for each text style
- `FONT_WEIGHTS` - Numeric weight values
- `OPTICAL_SIZE_THRESHOLD` - 20px threshold for Text vs Display
- `LABEL_OPACITY` - Opacity values for semantic colors
- `OPTIMAL_LINE_LENGTH` - Min/ideal/max character counts
- `MAX_TEXT_WIDTH` - Recommended max widths per style
- `VERTICAL_RHYTHM` - 4px baseline grid scale
- `HEADING_SCALE` - Size ratios between heading levels
- `ACCESSIBILITY` - WCAG compliant minimum sizes
- `USAGE_GUIDELINES` - When to use each text style
- `TYPOGRAPHY_METRICS` - Complete metrics for all styles

**Available Functions:**
- `calculateLineHeightRatio(fontSize, lineHeight)` - Get line height ratio
- `calculateOptimalWidth(fontSize, characterCount?)` - Calculate optimal width
- `getFontVariant(fontSize)` - Get 'text' or 'display' variant
- `trackingToEm(trackingPx, fontSize)` - Convert tracking to em units
- `getRequiredContrast(fontSize, fontWeight)` - Get WCAG contrast requirement

---

## Usage Examples

### Complete Page Example

```tsx
import { Heading, Body, Caption } from '@reflekt/apple-ui'

export function ArticlePage() {
  return (
    <article>
      {/* Hero title */}
      <Heading preset="hero">
        The Future of Design
      </Heading>

      {/* Metadata */}
      <Caption preset="tiny">
        Published Nov 17, 2025 • 5 min read
      </Caption>

      {/* Introduction */}
      <Body preset="callout" maxWidth="readable">
        Discover how Apple's design principles are shaping
        the future of digital experiences.
      </Body>

      {/* Section */}
      <Heading preset="section">
        Human Interface Guidelines
      </Heading>

      {/* Body content */}
      <Body maxWidth="readable">
        Apple's Human Interface Guidelines provide a comprehensive
        framework for creating intuitive, accessible interfaces...
      </Body>

      {/* Subsection */}
      <Heading preset="subsection">
        Typography System
      </Heading>

      <Body maxWidth="readable">
        The SF Pro font family offers 9 weights and optical sizing
        for optimal readability at any size...
      </Body>
    </article>
  )
}
```

### Form Example

```tsx
import { Label, Body } from '@reflekt/apple-ui'

export function ContactForm() {
  return (
    <form>
      <div>
        <Label htmlFor="name" required>
          Full Name
        </Label>
        <input id="name" type="text" />
      </div>

      <div>
        <Label htmlFor="email" required>
          Email Address
        </Label>
        <input id="email" type="email" />
        <Label variant="helper">
          We'll never share your email address
        </Label>
      </div>

      <div>
        <Label htmlFor="message" required>
          Message
        </Label>
        <textarea id="message" />
      </div>
    </form>
  )
}
```

### Card Example

```tsx
import { Heading, Body, Caption } from '@reflekt/apple-ui'

export function ProductCard({ product }) {
  return (
    <div>
      <Heading preset="card">
        {product.name}
      </Heading>

      <Body preset="secondary">
        {product.description}
      </Body>

      <Caption preset="emphasized">
        ${product.price}
      </Caption>

      <Caption preset="small" color="tertiary">
        {product.availability}
      </Caption>
    </div>
  )
}
```

---

## Best Practices

### 1. **Use Semantic HTML**
```tsx
// ✅ Good - Semantic HTML
<Heading level={1}>Page Title</Heading>
<Heading level={2}>Section Title</Heading>

// ❌ Bad - Wrong semantic structure
<Heading level={1}>Section Title</Heading>
```

### 2. **Limit Large Titles**
```tsx
// ✅ Good - One largeTitle per screen
<Heading preset="hero">Main Page Title</Heading>
<Heading preset="section">Section</Heading>

// ❌ Bad - Multiple largeTitles
<Heading preset="hero">Title 1</Heading>
<Heading preset="hero">Title 2</Heading>
```

### 3. **Optimize Readability**
```tsx
// ✅ Good - Constrained line length
<Body maxWidth="readable">
  Long form content...
</Body>

// ❌ Bad - Text too wide
<Body style={{ width: '100%' }}>
  Long form content...
</Body>
```

### 4. **Use Presets for Consistency**
```tsx
// ✅ Good - Using presets
<Heading preset="section">Title</Heading>
<Body preset="emphasized">Important text</Body>

// ⚠️ Okay but less consistent
<Heading level={2} weight="semibold">Title</Heading>
<Body weight="medium">Important text</Body>
```

### 5. **Proper Color Hierarchy**
```tsx
// ✅ Good - Proper hierarchy
<Body color="primary">Main content</Body>
<Body color="secondary">Supporting text</Body>
<Caption color="tertiary">Metadata</Caption>

// ❌ Bad - Everything primary
<Body color="primary">Main content</Body>
<Body color="primary">Supporting text</Body>
<Caption color="primary">Metadata</Caption>
```

### 6. **Accessibility**
```tsx
// ✅ Good - Required fields marked
<Label htmlFor="email" required>
  Email Address
</Label>

// ✅ Good - Error messages
<Label variant="error">
  Please enter a valid email
</Label>

// ❌ Bad - No labels
<input type="email" placeholder="Email" />
```

### 7. **Responsive Text**
```tsx
// ✅ Good - Appropriate sizes for mobile
<Heading preset="section">Mobile-Friendly</Heading>

// ⚠️ Careful - Very large text on small screens
<Heading preset="hero">Might be too large on mobile</Heading>
```

---

## Dark Mode

All typography components automatically support dark mode via CSS media queries. Colors adjust automatically based on `prefers-color-scheme`.

```tsx
// Automatically adjusts for dark mode
<Body color="secondary">
  This text will be 60% white in dark mode,
  60% black in light mode
</Body>
```

---

## Migration from Typography Component

If you're using the base `Typography` component, you can easily migrate to specialized components:

```tsx
// Before
<Typography variant="title1" weight="semibold" as="h2">
  Section Title
</Typography>

// After
<Heading preset="section">
  Section Title
</Heading>

// Before
<Typography variant="footnote" color="secondary">
  Image caption
</Typography>

// After
<Caption>
  Image caption
</Caption>
```

---

## TypeScript Support

All components are fully typed with TypeScript:

```tsx
import type {
  TextStyle,
  FontWeight,
  LabelColor,
  HeadingPresetKey,
  BodyPresetKey,
} from '@reflekt/apple-ui'

const variant: TextStyle = 'title1'
const weight: FontWeight = 'semibold'
const preset: HeadingPresetKey = 'hero'
```

---

## Contributing

When adding new typography features:

1. Follow Apple's Human Interface Guidelines
2. Maintain consistency with existing patterns
3. Add comprehensive TypeScript types
4. Update this documentation
5. Add usage examples
6. Test in both light and dark modes
7. Verify accessibility with screen readers

---

## Resources

- [Apple Human Interface Guidelines - Typography](https://developer.apple.com/design/human-interface-guidelines/typography)
- [SF Pro Font Family](https://developer.apple.com/fonts/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Version**: 1.0.0
**Last Updated**: November 17, 2025
**Maintainer**: REFLEKT
