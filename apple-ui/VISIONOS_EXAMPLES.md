# visionOS Components - Usage Examples

Complete examples for visionOS-inspired Icon and VisionCard components with smooth animations and depth effects.

## Table of Contents

- [Icon Component](#icon-component)
- [VisionCard Component](#visioncard-component)
- [Combined Examples](#combined-examples)
- [Advanced Patterns](#advanced-patterns)

---

## Icon Component

### Basic Icons with Hover Effects

```tsx
import { Icon } from '@reflekt/apple-ui'

function IconShowcase() {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      {/* Lift effect (default) */}
      <Icon hoverEffect="lift" size="lg">
        🚀
      </Icon>

      {/* 3D Tilt effect */}
      <Icon hoverEffect="tilt" size="lg">
        🎨
      </Icon>

      {/* Rotate effect */}
      <Icon hoverEffect="rotate" size="lg">
        ⚡
      </Icon>

      {/* Scale effect */}
      <Icon hoverEffect="scale" size="lg">
        🌟
      </Icon>

      {/* Glow effect */}
      <Icon hoverEffect="glow" size="lg">
        💎
      </Icon>
    </div>
  )
}
```

### Icons with Entry Animations

```tsx
import { Icon } from '@reflekt/apple-ui'

function AnimatedIcons() {
  return (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <Icon animation="float" hoverEffect="lift">
        🎯
      </Icon>

      <Icon animation="bounce" hoverEffect="scale">
        🎪
      </Icon>

      <Icon animation="scale" hoverEffect="glow">
        ✨
      </Icon>

      <Icon animation="rotate" hoverEffect="tilt">
        🔮
      </Icon>

      <Icon animation="slide-up" hoverEffect="float">
        🎭
      </Icon>
    </div>
  )
}
```

### Icon Sizes

```tsx
import { Icon } from '@reflekt/apple-ui'

function IconSizes() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon size="xs">🎨</Icon>
      <Icon size="sm">🎨</Icon>
      <Icon size="md">🎨</Icon>
      <Icon size="lg">🎨</Icon>
      <Icon size="xl">🎨</Icon>
      <Icon size="2xl">🎨</Icon>
      <Icon size="3xl">🎨</Icon>
    </div>
  )
}
```

### Icons with Backgrounds

```tsx
import { Icon } from '@reflekt/apple-ui'

function IconBackgrounds() {
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      {/* Filled background */}
      <Icon
        background="filled"
        hoverEffect="lift"
        size="xl"
      >
        📱
      </Icon>

      {/* Glass background */}
      <Icon
        background="glass"
        hoverEffect="tilt"
        size="xl"
      >
        🌐
      </Icon>

      {/* Gradient background */}
      <Icon
        background="gradient"
        hoverEffect="glow"
        size="xl"
      >
        🎨
      </Icon>

      {/* Custom color */}
      <Icon
        background="filled"
        color="#007AFF"
        hoverEffect="scale"
        size="xl"
        style={{ color: 'white' }}
      >
        💙
      </Icon>
    </div>
  )
}
```

### Continuous Animations

```tsx
import { Icon } from '@reflekt/apple-ui'

function ContinuousAnimations() {
  return (
    <div style={{ display: 'flex', gap: '32px' }}>
      {/* Floating icon */}
      <Icon
        hoverEffect="float"
        background="glass"
        size="xl"
      >
        ☁️
      </Icon>

      {/* Pulsing icon */}
      <Icon
        hoverEffect="pulse"
        background="gradient"
        size="xl"
      >
        ❤️
      </Icon>
    </div>
  )
}
```

### Icon Grid with Staggered Animations

```tsx
import { Icon, IconGrid } from '@reflekt/apple-ui'

const features = [
  { icon: '🚀', label: 'Launch' },
  { icon: '⚡', label: 'Fast' },
  { icon: '🎨', label: 'Beautiful' },
  { icon: '♿', label: 'Accessible' },
  { icon: '🌙', label: 'Dark Mode' },
  { icon: '📱', label: 'Responsive' },
]

function FeatureGrid() {
  return (
    <IconGrid
      columns={3}
      gap="lg"
      staggerDelay={100}
    >
      {features.map((feature, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <Icon
            animation="bounce"
            hoverEffect="tilt"
            background="glass"
            size="xl"
          >
            {feature.icon}
          </Icon>
          <p style={{ marginTop: '12px', fontSize: '14px' }}>
            {feature.label}
          </p>
        </div>
      ))}
    </IconGrid>
  )
}
```

---

## VisionCard Component

### Basic VisionCards

```tsx
import { VisionCard, Typography } from '@reflekt/apple-ui'

function BasicVisionCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
      {/* Glass material */}
      <VisionCard material="glass" depth="medium">
        <Typography variant="title2" weight="semibold">
          Glass Card
        </Typography>
        <Typography variant="body" color="secondary" style={{ marginTop: '8px' }}>
          Beautiful glassmorphism effect with backdrop blur
        </Typography>
      </VisionCard>

      {/* Frosted material */}
      <VisionCard material="frosted" depth="deep">
        <Typography variant="title2" weight="semibold">
          Frosted Card
        </Typography>
        <Typography variant="body" color="secondary" style={{ marginTop: '8px' }}>
          Heavy frosted glass with enhanced blur
        </Typography>
      </VisionCard>

      {/* Crystal material */}
      <VisionCard material="crystal" depth="medium">
        <Typography variant="title2" weight="semibold">
          Crystal Card
        </Typography>
        <Typography variant="body" color="secondary" style={{ marginTop: '8px' }}>
          Clear glass with subtle tint
        </Typography>
      </VisionCard>

      {/* Dark glass material */}
      <VisionCard material="dark-glass" depth="deep">
        <Typography variant="title2" weight="semibold">
          Dark Glass
        </Typography>
        <Typography variant="body" color="secondary" style={{ marginTop: '8px' }}>
          Dark tinted glass for contrast
        </Typography>
      </VisionCard>
    </div>
  )
}
```

### Interactive VisionCards

```tsx
import { VisionCard, Icon, Typography, Button } from '@reflekt/apple-ui'

function InteractiveCards() {
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      {/* Tilt on hover */}
      <VisionCard
        material="glass"
        depth="medium"
        tiltOnHover
        radius="xl"
      >
        <Icon size="xl" hoverEffect="none">🎯</Icon>
        <Typography variant="title3" weight="semibold" style={{ marginTop: '16px' }}>
          Hover to Tilt
        </Typography>
        <Typography variant="body" color="secondary" style={{ marginTop: '8px' }}>
          3D perspective tilt effect
        </Typography>
      </VisionCard>

      {/* Glow on hover */}
      <VisionCard
        material="frosted"
        depth="deep"
        tiltOnHover
        glowOnHover
        radius="xl"
      >
        <Icon size="xl" hoverEffect="none">✨</Icon>
        <Typography variant="title3" weight="semibold" style={{ marginTop: '16px' }}>
          Hover to Glow
        </Typography>
        <Typography variant="body" color="secondary" style={{ marginTop: '8px' }}>
          Beautiful glow effect
        </Typography>
      </VisionCard>

      {/* Floating card */}
      <VisionCard
        material="glass"
        depth="medium"
        floating
        radius="xl"
      >
        <Icon size="xl" hoverEffect="none">☁️</Icon>
        <Typography variant="title3" weight="semibold" style={{ marginTop: '16px' }}>
          Floating
        </Typography>
        <Typography variant="body" color="secondary" style={{ marginTop: '8px' }}>
          Gentle floating animation
        </Typography>
      </VisionCard>
    </div>
  )
}
```

### VisionCard Product Cards

```tsx
import { VisionCard, Typography, Button, Icon } from '@reflekt/apple-ui'

const products = [
  {
    id: 1,
    name: 'Pro Plan',
    price: '$29/mo',
    icon: '🚀',
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics'],
  },
  {
    id: 2,
    name: 'Enterprise',
    price: '$99/mo',
    icon: '💎',
    features: ['Custom integrations', '24/7 support', 'Dedicated manager'],
  },
]

function ProductCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
      {products.map((product) => (
        <VisionCard
          key={product.id}
          material="glass"
          depth="deep"
          tiltOnHover
          glowOnHover
          padding="lg"
          radius="xl"
        >
          <Icon
            size="2xl"
            background="gradient"
            hoverEffect="none"
          >
            {product.icon}
          </Icon>

          <Typography variant="title2" weight="bold" style={{ marginTop: '24px' }}>
            {product.name}
          </Typography>

          <Typography variant="largeTitle" weight="heavy" style={{ marginTop: '8px' }}>
            {product.price}
          </Typography>

          <div style={{ marginTop: '24px' }}>
            {product.features.map((feature, i) => (
              <Typography
                key={i}
                variant="body"
                color="secondary"
                style={{ marginTop: i > 0 ? '8px' : 0 }}
              >
                ✓ {feature}
              </Typography>
            ))}
          </div>

          <Button
            variant="primary"
            fullWidth
            size="lg"
            style={{ marginTop: '32px' }}
          >
            Get Started
          </Button>
        </VisionCard>
      ))}
    </div>
  )
}
```

### VisionCard Grid

```tsx
import { VisionCard, VisionCardGrid, Icon, Typography } from '@reflekt/apple-ui'

const apps = [
  { icon: '📧', name: 'Mail', color: '#007AFF' },
  { icon: '📅', name: 'Calendar', color: '#FF3B30' },
  { icon: '📝', name: 'Notes', color: '#FFCC00' },
  { icon: '🎵', name: 'Music', color: '#FF2D55' },
  { icon: '📷', name: 'Photos', color: '#5856D6' },
  { icon: '⚙️', name: 'Settings', color: '#8E8E93' },
]

function AppGrid() {
  return (
    <VisionCardGrid columns={3} gap="lg">
      {apps.map((app, i) => (
        <VisionCard
          key={i}
          material="glass"
          depth="medium"
          tiltOnHover
          glowOnHover
          padding="lg"
          radius="xl"
        >
          <Icon
            size="3xl"
            background="filled"
            color={app.color}
            animation="bounce"
            animationDelay={i * 100}
            hoverEffect="none"
            style={{ color: 'white' }}
          >
            {app.icon}
          </Icon>
          <Typography
            variant="callout"
            weight="medium"
            align="center"
            style={{ marginTop: '16px' }}
          >
            {app.name}
          </Typography>
        </VisionCard>
      ))}
    </VisionCardGrid>
  )
}
```

---

## Combined Examples

### Hero Section with visionOS Design

```tsx
import { VisionCard, Icon, Typography, Button } from '@reflekt/apple-ui'

function VisionOSHero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
      }}
    >
      <VisionCard
        material="glass"
        depth="deep"
        tiltOnHover
        glowOnHover
        padding="xl"
        radius="2xl"
        style={{ maxWidth: '800px' }}
      >
        <div style={{ textAlign: 'center' }}>
          <Icon
            size="3xl"
            background="gradient"
            animation="bounce"
            hoverEffect="float"
          >
            🚀
          </Icon>

          <Typography
            variant="largeTitle"
            weight="bold"
            align="center"
            style={{ marginTop: '32px' }}
          >
            Welcome to the Future
          </Typography>

          <Typography
            variant="title3"
            color="secondary"
            align="center"
            style={{ marginTop: '16px' }}
          >
            Experience beautiful visionOS-inspired design with smooth animations
            and depth effects
          </Typography>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              marginTop: '40px',
            }}
          >
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </VisionCard>
    </section>
  )
}
```

### Feature Cards with Icons

```tsx
import { VisionCard, Icon, Typography, IconGrid } from '@reflekt/apple-ui'

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized performance with smooth 60fps animations',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'visionOS-inspired glassmorphism and depth effects',
  },
  {
    icon: '🔮',
    title: '3D Effects',
    description: 'Realistic tilt and perspective transforms',
  },
  {
    icon: '✨',
    title: 'Smooth Animations',
    description: 'Spring-based animations for natural motion',
  },
]

function FeatureSection() {
  return (
    <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="largeTitle" weight="bold" align="center">
        Amazing Features
      </Typography>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          marginTop: '60px',
        }}
      >
        {features.map((feature, i) => (
          <VisionCard
            key={i}
            material="frosted"
            depth="medium"
            tiltOnHover
            padding="lg"
            radius="xl"
          >
            <Icon
              size="2xl"
              background="gradient"
              animation="scale"
              animationDelay={i * 150}
              hoverEffect="glow"
            >
              {feature.icon}
            </Icon>

            <Typography
              variant="title3"
              weight="semibold"
              style={{ marginTop: '24px' }}
            >
              {feature.title}
            </Typography>

            <Typography
              variant="body"
              color="secondary"
              style={{ marginTop: '12px' }}
            >
              {feature.description}
            </Typography>
          </VisionCard>
        ))}
      </div>
    </section>
  )
}
```

---

## Advanced Patterns

### Icon Button with Hover Effects

```tsx
import { Icon } from '@reflekt/apple-ui'

function IconButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Icon
        size="lg"
        background="glass"
        hoverEffect="tilt"
        animation="scale"
      >
        {icon}
      </Icon>
      <span style={{ fontSize: '14px' }}>{label}</span>
    </button>
  )
}

// Usage
<div style={{ display: 'flex', gap: '24px' }}>
  <IconButton icon="🏠" label="Home" onClick={() => {}} />
  <IconButton icon="🔍" label="Search" onClick={() => {}} />
  <IconButton icon="👤" label="Profile" onClick={() => {}} />
  <IconButton icon="⚙️" label="Settings" onClick={() => {}} />
</div>
```

### Animated Loading State

```tsx
import { Icon } from '@reflekt/apple-ui'

function LoadingState() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Icon
        size="3xl"
        hoverEffect="pulse"
        background="gradient"
        disableHover={false}
      >
        ⏳
      </Icon>
      <p style={{ marginTop: '16px' }}>Loading...</p>
    </div>
  )
}
```

### Social Media Icons

```tsx
import { Icon, IconGrid } from '@reflekt/apple-ui'

const socialMedia = [
  { icon: '𝕏', color: '#000000', label: 'Twitter' },
  { icon: '🔗', color: '#0A66C2', label: 'LinkedIn' },
  { icon: '📸', color: '#E4405F', label: 'Instagram' },
  { icon: '📘', color: '#1877F2', label: 'Facebook' },
]

function SocialLinks() {
  return (
    <IconGrid columns={4} gap="md">
      {socialMedia.map((social, i) => (
        <Icon
          key={i}
          size="lg"
          background="filled"
          color={social.color}
          animation="bounce"
          animationDelay={i * 100}
          hoverEffect="lift"
          style={{ color: 'white' }}
        >
          {social.icon}
        </Icon>
      ))}
    </IconGrid>
  )
}
```

---

## Best Practices

### Performance Tips

1. **Use `disableHover` for non-interactive icons:**
   ```tsx
   <Icon hoverEffect="none" disableHover>📄</Icon>
   ```

2. **Reduce animations on mobile:**
   ```tsx
   const isMobile = window.innerWidth < 768
   <Icon animation={isMobile ? 'none' : 'bounce'}>🚀</Icon>
   ```

3. **Stagger animations in grids:**
   ```tsx
   <IconGrid staggerDelay={100}>
     {/* Icons will animate sequentially */}
   </IconGrid>
   ```

### Accessibility

1. **Add ARIA labels for icon buttons:**
   ```tsx
   <Icon role="button" aria-label="Settings">⚙️</Icon>
   ```

2. **Respect reduced motion preferences:**
   The components automatically disable animations when `prefers-reduced-motion` is set.

3. **Provide text alternatives:**
   ```tsx
   <Icon aria-hidden="true">🚀</Icon>
   <span className="sr-only">Launch</span>
   ```

---

For more information, see the main [README](./README.md) and [EXAMPLES](./EXAMPLES.md).
