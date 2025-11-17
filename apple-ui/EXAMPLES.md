# Usage Examples

Complete examples for common use cases with @reflekt/apple-ui.

## Table of Contents

- [Landing Page Hero](#landing-page-hero)
- [Form with Validation](#form-with-validation)
- [Product Card Grid](#product-card-grid)
- [Navigation with Authentication](#navigation-with-authentication)
- [Glassmorphism Panel](#glassmorphism-panel)
- [Feature Section](#feature-section)

---

## Landing Page Hero

```tsx
import { Typography, Button, Card } from '@reflekt/apple-ui'

function Hero() {
  return (
    <section style={{ padding: '80px 24px', textAlign: 'center' }}>
      <Typography variant="largeTitle" weight="bold" align="center">
        Welcome to REFLEKT
      </Typography>

      <Typography
        variant="title3"
        color="secondary"
        align="center"
        style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}
      >
        Build beautiful interfaces with Apple's design language
      </Typography>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px' }}>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
        <Button variant="secondary" size="lg">
          Learn More
        </Button>
      </div>

      <Card
        variant="glass"
        padding="lg"
        radius="xl"
        style={{ maxWidth: '800px', margin: '60px auto' }}
      >
        <img
          src="/demo.png"
          alt="Product Demo"
          style={{ width: '100%', borderRadius: '12px' }}
        />
      </Card>
    </section>
  )
}
```

---

## Form with Validation

```tsx
import { useState } from 'react'
import { Input, Button, Card, Typography } from '@reflekt/apple-ui'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.message) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setLoading(true)

    try {
      // Submit form data
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      })

      // Reset form
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card variant="elevated" padding="lg" radius="lg" style={{ maxWidth: '500px' }}>
      <Typography variant="title2" weight="semibold">
        Contact Us
      </Typography>

      <form onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Input
            label="Name"
            placeholder="Enter your name"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={!!errors.name}
            errorMessage={errors.name}
          />

          <Input
            label="Email"
            type="email"
            placeholder="your.email@example.com"
            fullWidth
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={!!errors.email}
            errorMessage={errors.email}
          />

          <div>
            <label
              htmlFor="message"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                display: 'block',
                marginBottom: '6px',
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 16px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                fontSize: '17px',
                borderRadius: '10px',
                border: errors.message
                  ? '1px solid #ff3b30'
                  : '1px solid rgba(0, 0, 0, 0.1)',
                outline: 'none',
                resize: 'vertical',
              }}
            />
            {errors.message && (
              <Typography variant="footnote" style={{ color: '#ff3b30', marginTop: '6px' }}>
                {errors.message}
              </Typography>
            )}
          </div>

          <Button variant="primary" size="lg" fullWidth loading={loading}>
            Send Message
          </Button>
        </div>
      </form>
    </Card>
  )
}
```

---

## Product Card Grid

```tsx
import { Card, CardHeader, CardContent, CardFooter, Typography, Button } from '@reflekt/apple-ui'

const products = [
  { id: 1, name: 'Product One', price: '$99', image: '/product1.jpg' },
  { id: 2, name: 'Product Two', price: '$149', image: '/product2.jpg' },
  { id: 3, name: 'Product Three', price: '$199', image: '/product3.jpg' },
]

function ProductGrid() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px',
        padding: '40px 24px',
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          variant="elevated"
          hoverable
          pressable
          padding="none"
          radius="lg"
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '16px 16px 0 0',
            }}
          />

          <div style={{ padding: '20px' }}>
            <CardHeader>
              <Typography variant="title3" weight="semibold">
                {product.name}
              </Typography>
              <Typography variant="title2" weight="bold" style={{ marginTop: '4px' }}>
                {product.price}
              </Typography>
            </CardHeader>

            <CardContent style={{ marginTop: '12px' }}>
              <Typography variant="body" color="secondary">
                High-quality product with amazing features and excellent value.
              </Typography>
            </CardContent>

            <CardFooter>
              <Button variant="primary" fullWidth>
                Add to Cart
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  )
}
```

---

## Navigation with Authentication

```tsx
import { useState } from 'react'
import {
  Navigation,
  NavContent,
  NavBrand,
  NavLinks,
  NavLink,
  Button,
} from '@reflekt/apple-ui'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Navigation variant="glass" position="sticky">
      <NavContent>
        <NavBrand>
          <img
            src="/logo.svg"
            alt="REFLEKT"
            style={{ width: '32px', height: '32px', marginRight: '8px' }}
          />
          REFLEKT
        </NavBrand>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <NavLinks>
            <NavLink href="/" active>
              Home
            </NavLink>
            <NavLink href="/products">
              Products
            </NavLink>
            <NavLink href="/about">
              About
            </NavLink>
            <NavLink href="/contact">
              Contact
            </NavLink>
          </NavLinks>

          <div style={{ marginLeft: '16px', display: 'flex', gap: '8px' }}>
            {isLoggedIn ? (
              <>
                <Button variant="tertiary" size="sm">
                  Profile
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="tertiary"
                  size="sm"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Login
                </Button>
                <Button variant="primary" size="sm">
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </NavContent>
    </Navigation>
  )
}
```

---

## Glassmorphism Panel

```tsx
import { Card, Typography, Button } from '@reflekt/apple-ui'

function GlassPanel() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <Card
        variant="glass"
        padding="lg"
        radius="xl"
        style={{ maxWidth: '600px' }}
      >
        <Typography variant="title1" weight="bold">
          Glassmorphism Effect
        </Typography>

        <Typography variant="body" color="secondary" style={{ marginTop: '16px' }}>
          This card uses backdrop blur to create the beautiful glassmorphism effect,
          making content stand out while maintaining visual harmony with the background.
        </Typography>

        <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
          <Button variant="primary">
            Primary Action
          </Button>
          <Button variant="tertiary">
            Secondary Action
          </Button>
        </div>

        <Card
          variant="filled"
          padding="md"
          radius="md"
          style={{ marginTop: '24px' }}
        >
          <Typography variant="callout" weight="medium">
            💡 Pro Tip
          </Typography>
          <Typography variant="body" color="secondary" style={{ marginTop: '8px' }}>
            Glassmorphism works best over colorful or image backgrounds.
          </Typography>
        </Card>
      </Card>
    </div>
  )
}
```

---

## Feature Section

```tsx
import { Card, Typography } from '@reflekt/apple-ui'

const features = [
  {
    icon: '🚀',
    title: 'Fast Performance',
    description: 'Optimized for speed with minimal bundle size and zero dependencies.',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Faithful implementation of Apple\'s design language and principles.',
  },
  {
    icon: '♿',
    title: 'Accessible',
    description: 'WCAG 2.1 AA compliant with semantic HTML and ARIA attributes.',
  },
  {
    icon: '🌙',
    title: 'Dark Mode',
    description: 'Automatic dark mode support with beautiful color transitions.',
  },
  {
    icon: '📱',
    title: 'Responsive',
    description: 'Mobile-first design that works perfectly on all screen sizes.',
  },
  {
    icon: '🔧',
    title: 'Customizable',
    description: 'Access design tokens for complete control over styling.',
  },
]

function Features() {
  return (
    <section style={{ padding: '80px 24px' }}>
      <Typography variant="largeTitle" weight="bold" align="center">
        Features
      </Typography>

      <Typography
        variant="title3"
        color="secondary"
        align="center"
        style={{ marginTop: '16px' }}
      >
        Everything you need to build beautiful interfaces
      </Typography>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginTop: '60px',
          maxWidth: '1200px',
          margin: '60px auto 0',
        }}
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            variant="filled"
            hoverable
            padding="lg"
            radius="lg"
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>
              {feature.icon}
            </div>

            <Typography variant="title3" weight="semibold">
              {feature.title}
            </Typography>

            <Typography
              variant="body"
              color="secondary"
              style={{ marginTop: '8px' }}
            >
              {feature.description}
            </Typography>
          </Card>
        ))}
      </div>
    </section>
  )
}
```

---

## Best Practices

### 1. Use Semantic HTML

Always use appropriate HTML elements for better accessibility:

```tsx
// Good
<Typography as="h1" variant="largeTitle">Page Title</Typography>

// Avoid
<Typography as="div" variant="largeTitle">Page Title</Typography>
```

### 2. Leverage Design Tokens

Use design tokens for consistency:

```tsx
import { spacing, colors, borderRadius } from '@reflekt/apple-ui'

const customCard = {
  padding: spacing[4],
  backgroundColor: colors.background.primary,
  borderRadius: borderRadius.lg,
}
```

### 3. Dark Mode Considerations

The library handles dark mode automatically, but test your custom styles:

```css
/* This will work automatically */
@media (prefers-color-scheme: dark) {
  /* dark mode styles */
}
```

### 4. Responsive Design

Use the provided breakpoints for responsive layouts:

```tsx
import { breakpoints } from '@reflekt/apple-ui'

const responsiveGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  [`@media (min-width: ${breakpoints.md})`]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [`@media (min-width: ${breakpoints.lg})`]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}
```

### 5. Accessibility

Always provide proper labels and ARIA attributes:

```tsx
<Input
  label="Email Address"
  type="email"
  helperText="We'll never share your email"
  aria-required="true"
/>

<Button aria-label="Close modal">
  ✕
</Button>
```

---

For more examples and documentation, visit the [README](./README.md).
