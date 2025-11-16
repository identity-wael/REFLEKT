## Widgets & visionOS/tvOS Interfaces

Complete guide for creating dashboard widgets and visionOS/tvOS-style interfaces with glass effects and floating components.

## Table of Contents

- [MenuBar Component](#menubar-component)
- [Widget System](#widget-system)
- [GlassCanvas & FloatingZone](#glasscanvas--floatingzone)
- [Complete Examples](#complete-examples)
- [Best Practices](#best-practices)

---

## MenuBar Component

Apple-style menu bar with advanced glassmorphism effects (macOS Sonoma / visionOS style).

### Basic MenuBar

```tsx
import {
  MenuBar,
  MenuBarContent,
  MenuBarBrand,
  MenuBarSection,
  MenuItem,
  MenuBarDivider,
} from '@reflekt/apple-ui'

function Header() {
  return (
    <MenuBar material="frosted-heavy" position="fixed">
      <MenuBarContent>
        <MenuBarBrand>REFLEKT</MenuBarBrand>

        <MenuBarSection align="start">
          <MenuItem active>File</MenuItem>
          <MenuItem>Edit</MenuItem>
          <MenuItem>View</MenuItem>
          <MenuItem>Window</MenuItem>
        </MenuBarSection>

        <MenuBarSection align="end">
          <MenuItem icon="🔍">Search</MenuItem>
          <MenuBarDivider />
          <MenuItem icon="👤">Profile</MenuItem>
        </MenuBarSection>
      </MenuBarContent>
    </MenuBar>
  )
}
```

### Material Variants

```tsx
// Classic glass
<MenuBar material="glass">...</MenuBar>

// Heavy frosted (macOS Sonoma style) - DEFAULT
<MenuBar material="frosted-heavy">...</MenuBar>

// Ultra-translucent (visionOS style)
<MenuBar material="translucent">...</MenuBar>

// Vibrant with color tint
<MenuBar material="vibrant">...</MenuBar>
```

### Interactive Menu Items

```tsx
<MenuBar>
  <MenuBarContent>
    <MenuBarSection>
      {/* Active state */}
      <MenuItem active>Home</MenuItem>

      {/* With icon */}
      <MenuItem icon="⚙️">Settings</MenuItem>

      {/* With indicator dot */}
      <MenuItem showIndicator>Notifications</MenuItem>

      {/* With click handler */}
      <MenuItem onClick={() => console.log('clicked')}>
        Action
      </MenuItem>
    </MenuBarSection>
  </MenuBarContent>
</MenuBar>
```

**Props:**
- `material`: Glass material (`'glass'` | `'frosted-heavy'` | `'translucent'` | `'vibrant'`)
- `position`: Position type (`'fixed'` | `'sticky'` | `'static'`)
- `blurOnScroll`: Dynamic blur on scroll (default: `true`)
- `showBorder`: Show border bottom (default: `true`)

---

## Widget System

Modular widgets with glass effects for displaying dynamic data.

### Basic Widget

```tsx
import {
  Widget,
  WidgetHeader,
  WidgetContent,
  WidgetValue,
  WidgetTrend,
  WidgetFooter,
} from '@reflekt/apple-ui'

function StockWidget() {
  return (
    <Widget material="frosted" size="md" accent="blue">
      <WidgetHeader title="AAPL" subtitle="Apple Inc." icon="📈" />

      <WidgetContent>
        <WidgetValue color="positive">$174.23</WidgetValue>
        <WidgetTrend direction="up">+2.45%</WidgetTrend>
      </WidgetContent>

      <WidgetFooter>
        <span>Last updated: 2 min ago</span>
      </WidgetFooter>
    </Widget>
  )
}
```

### Widget Materials

```tsx
// Glass (70% opacity, 40px blur)
<Widget material="glass">...</Widget>

// Frosted (50% opacity, 60px blur)
<Widget material="frosted">...</Widget>

// Translucent (30% opacity, 80px blur)
<Widget material="translucent">...</Widget>

// Vibrant with accent color
<Widget material="vibrant" accent="blue">...</Widget>
<Widget material="vibrant" accent="green">...</Widget>
<Widget material="vibrant" accent="red">...</Widget>
```

### Widget Sizes

```tsx
<Widget size="sm">...</Widget>  {/* 120px min-height */}
<Widget size="md">...</Widget>  {/* 160px min-height */}
<Widget size="lg">...</Widget>  {/* 200px min-height */}
<Widget size="xl">...</Widget>  {/* 280px min-height */}
```

### Complete Stock Widget Example

```tsx
function StockDashboard() {
  const [refreshing, setRefreshing] = React.useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    // Fetch data...
    setTimeout(() => setRefreshing(false), 2000)
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
      <Widget
        material="frosted"
        size="md"
        hoverable
        refreshing={refreshing}
      >
        <WidgetHeader
          title="AAPL"
          subtitle="Apple Inc."
          icon="📈"
        />

        <WidgetContent align="start">
          <WidgetValue color="positive">$174.23</WidgetValue>
          <WidgetTrend direction="up">+$4.32 (+2.45%)</WidgetTrend>
        </WidgetContent>

        <WidgetDivider />

        <WidgetFooter>
          <span>NASDAQ</span>
          <button onClick={handleRefresh}>Refresh</button>
        </WidgetFooter>
      </Widget>

      {/* More widgets... */}
    </div>
  )
}
```

### Health/Vitals Widget

```tsx
function HealthWidget() {
  return (
    <Widget material="vibrant" accent="red" size="lg">
      <WidgetHeader title="Heart Rate" subtitle="Live" icon="❤️" />

      <WidgetContent align="center">
        <WidgetValue color="default">72</WidgetValue>
        <Typography variant="caption1" color="secondary">
          BPM
        </Typography>

        <div style={{ marginTop: '16px' }}>
          {/* Heart rate chart or visualization */}
          <svg width="100%" height="60">
            {/* ECG line */}
          </svg>
        </div>
      </WidgetContent>

      <WidgetFooter>
        <span>Normal range</span>
        <WidgetTrend direction="neutral">Stable</WidgetTrend>
      </WidgetFooter>
    </Widget>
  )
}
```

**Widget Props:**
- `material`: Glass material (`'glass'` | `'frosted'` | `'translucent'` | `'vibrant'`)
- `size`: Widget size (`'sm'` | `'md'` | `'lg'` | `'xl'`)
- `accent`: Accent color for vibrant material (`'blue'` | `'green'` | `'orange'` | `'red'` | `'purple'` | `'pink'` | `'teal'`)
- `hoverable`: Enable hover lift effect (default: `true`)
- `refreshing`: Show loading state (default: `false`)

---

## GlassCanvas & FloatingZone

Create visionOS/tvOS-style interfaces where components float in front of a background surface.

### Basic Setup

```tsx
import { GlassCanvas, FloatingZone, Widget } from '@reflekt/apple-ui'

function VisionOSInterface() {
  return (
    <GlassCanvas
      variant="mirror"
      background="/path/to/background.mp4"
      backgroundType="video"
      parallax
      depth="deep"
    >
      <FloatingZone x="25%" y="30%" depth="front" animation="fade-in">
        <Widget material="frosted">
          <WidgetHeader title="Stocks" />
          <WidgetValue>$1,234.56</WidgetValue>
        </Widget>
      </FloatingZone>

      <FloatingZone x="75%" y="50%" depth="surface" animation="slide-in" animationDelay={200}>
        <Icon size="2xl" background="glass" hoverEffect="tilt">
          🚀
        </Icon>
      </FloatingZone>
    </GlassCanvas>
  )
}
```

### GlassCanvas Variants

```tsx
// Two-way mirror effect (DEFAULT)
<GlassCanvas variant="mirror">...</GlassCanvas>

// Screen-like surface
<GlassCanvas variant="screen">...</GlassCanvas>

// Infinite depth effect with grid
<GlassCanvas variant="infinity">...</GlassCanvas>

// Ambient environment
<GlassCanvas variant="ambient">...</GlassCanvas>
```

### Background Types

```tsx
// Video background
<GlassCanvas
  background="/videos/space.mp4"
  backgroundType="video"
  blurIntensity={30}
>
  ...
</GlassCanvas>

// Image background
<GlassCanvas
  background="/images/wallpaper.jpg"
  backgroundType="image"
  blurIntensity={20}
>
  ...
</GlassCanvas>

// Gradient background
<GlassCanvas
  background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  backgroundType="gradient"
>
  ...
</GlassCanvas>
```

### FloatingZone Positioning

```tsx
// Percentage positioning
<FloatingZone x="50%" y="50%" anchor="center">
  ...
</FloatingZone>

// Pixel positioning
<FloatingZone x={200} y={100} anchor="top-left">
  ...
</FloatingZone>

// Anchor points
<FloatingZone x="20%" y="20%" anchor="top-left">...</FloatingZone>
<FloatingZone x="50%" y="20%" anchor="top">...</FloatingZone>
<FloatingZone x="80%" y="20%" anchor="top-right">...</FloatingZone>
<FloatingZone x="20%" y="50%" anchor="left">...</FloatingZone>
<FloatingZone x="50%" y="50%" anchor="center">...</FloatingZone>
```

### Depth Layers

```tsx
// Back layer (blurred, -100px Z)
<FloatingZone depth="back">...</FloatingZone>

// Mid layer (0px Z)
<FloatingZone depth="mid">...</FloatingZone>

// Front layer (100px Z) - DEFAULT
<FloatingZone depth="front">...</FloatingZone>

// Surface layer (200px Z, bright)
<FloatingZone depth="surface">...</FloatingZone>
```

### Animations

```tsx
<FloatingZone animation="float">...</FloatingZone>       {/* Slide up with fade */}
<FloatingZone animation="pulse">...</FloatingZone>       {/* Scale pulse */}
<FloatingZone animation="slide-in">...</FloatingZone>    {/* Slide from left */}
<FloatingZone animation="fade-in">...</FloatingZone>     {/* Simple fade */}
<FloatingZone animation="zoom-in">...</FloatingZone>     {/* Zoom from small */}
```

**GlassCanvas Props:**
- `variant`: Canvas variant (`'mirror'` | `'screen'` | `'infinity'` | `'ambient'`)
- `background`: Background image/video URL or gradient
- `backgroundType`: Background type (`'image'` | `'video'` | `'gradient'` | `'none'`)
- `depth`: Depth perception (`'shallow'` | `'medium'` | `'deep'` | `'infinite'`)
- `parallax`: Enable parallax on mouse move (default: `true`)
- `parallaxIntensity`: Parallax intensity 0-1 (default: `0.3`)
- `ambientLight`: Enable ambient lighting (default: `true`)
- `blurIntensity`: Blur amount in pixels (default: `20`)

**FloatingZone Props:**
- `x`, `y`: Position (string or number)
- `depth`: Depth layer (`'back'` | `'mid'` | `'front'` | `'surface'`)
- `translateZ`: Custom Z translation in pixels
- `animation`: Entry animation
- `animationDelay`: Animation delay in ms
- `hoverFloat`: Enable hover float effect (default: `true`)
- `anchor`: Anchor point for positioning
- `width`, `height`: Zone dimensions

---

## Complete Examples

### tvOS-Style Dashboard

```tsx
function TVOSDashboard() {
  return (
    <GlassCanvas
      variant="screen"
      background="/videos/clouds.mp4"
      backgroundType="video"
      depth="deep"
      parallax
    >
      {/* Top menu bar */}
      <FloatingZone
        x="50%"
        y="5%"
        anchor="top"
        depth="surface"
        animation="slide-in"
        width="90%"
      >
        <MenuBar material="translucent" position="static">
          <MenuBarContent>
            <MenuItem active>Home</MenuItem>
            <MenuItem>Movies</MenuItem>
            <MenuItem>TV Shows</MenuItem>
            <MenuItem>Sports</MenuItem>
          </MenuBarContent>
        </MenuBar>
      </FloatingZone>

      {/* Featured content */}
      <FloatingZone
        x="50%"
        y="40%"
        anchor="center"
        depth="front"
        animation="zoom-in"
        animationDelay={200}
      >
        <VisionCard
          material="glass"
          tiltOnHover
          glowOnHover
          padding="xl"
          radius="2xl"
        >
          <Typography variant="largeTitle" weight="bold">
            Featured Show
          </Typography>
          <Typography variant="body" color="secondary" style={{ marginTop: '12px' }}>
            Watch now in 4K HDR
          </Typography>
          <Button variant="primary" size="lg" style={{ marginTop: '24px' }}>
            Play
          </Button>
        </VisionCard>
      </FloatingZone>

      {/* Side widgets */}
      <FloatingZone x="10%" y="70%" depth="mid" animation="float" animationDelay={400}>
        <Widget material="frosted" size="sm">
          <WidgetHeader title="Weather" icon="☀️" />
          <WidgetValue>72°F</WidgetValue>
        </Widget>
      </FloatingZone>

      <FloatingZone x="90%" y="70%" depth="mid" animation="float" animationDelay={600}>
        <Widget material="frosted" size="sm">
          <WidgetHeader title="Time" icon="🕐" />
          <WidgetValue>2:45 PM</WidgetValue>
        </Widget>
      </FloatingZone>
    </GlassCanvas>
  )
}
```

### Dashboard with Multiple Widgets

```tsx
function SmartHome() {
  return (
    <GlassCanvas
      variant="mirror"
      background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      backgroundType="gradient"
      depth="medium"
    >
      {/* Grid of widgets */}
      <FloatingZone x="20%" y="20%" depth="front" animation="fade-in">
        <Widget material="vibrant" accent="blue" size="md">
          <WidgetHeader title="Temperature" icon="🌡️" />
          <WidgetValue>72°F</WidgetValue>
          <WidgetTrend direction="up">+2°</WidgetTrend>
        </Widget>
      </FloatingZone>

      <FloatingZone x="50%" y="20%" depth="front" animation="fade-in" animationDelay={100}>
        <Widget material="vibrant" accent="green" size="md">
          <WidgetHeader title="Energy" icon="⚡" />
          <WidgetValue color="positive">1.2 kW</WidgetValue>
          <WidgetTrend direction="down">-15%</WidgetTrend>
        </Widget>
      </FloatingZone>

      <FloatingZone x="80%" y="20%" depth="front" animation="fade-in" animationDelay={200}>
        <Widget material="vibrant" accent="purple" size="md">
          <WidgetHeader title="Security" icon="🔒" />
          <WidgetValue color="default">Armed</WidgetValue>
        </Widget>
      </FloatingZone>

      {/* Large widget at bottom */}
      <FloatingZone x="50%" y="60%" anchor="center" depth="surface" animation="zoom-in" animationDelay={300}>
        <Widget material="frosted" size="xl" hoverable>
          <WidgetHeader title="Living Room" subtitle="Now Playing" icon="📺" />
          <WidgetContent align="center">
            <Typography variant="title1" weight="bold">
              Interstellar
            </Typography>
            <Typography variant="body" color="secondary">
              2h 49m • 4K HDR
            </Typography>
          </WidgetContent>
        </Widget>
      </FloatingZone>
    </GlassCanvas>
  )
}
```

---

## Best Practices

### Performance

1. **Limit FloatingZones**: Keep under 20 zones per canvas for smooth performance
2. **Use `transform3d={false}` on mobile** to disable 3D transforms
3. **Optimize background media**: Use compressed videos (<5MB) and optimized images
4. **Disable parallax on mobile** for better performance

```tsx
const isMobile = window.innerWidth < 768

<GlassCanvas parallax={!isMobile}>
  <FloatingZone transform3d={!isMobile}>
    ...
  </FloatingZone>
</GlassCanvas>
```

### Accessibility

1. **Respect reduced motion**:
   All components automatically disable animations when `prefers-reduced-motion` is set

2. **Provide fallbacks**:
   ```tsx
   <GlassCanvas
     background="/video.mp4"
     backgroundType="video"
     style={{
       backgroundColor: '#667eea', // Fallback color
     }}
   >
     ...
   </GlassCanvas>
   ```

3. **Use semantic HTML**:
   ```tsx
   <Widget as="article" aria-label="Stock widget">
     ...
   </Widget>
   ```

### Design Guidelines

1. **Depth hierarchy**: Place important content on `surface` or `front` layers
2. **Animation timing**: Stagger animations by 100-200ms for smooth sequences
3. **Material consistency**: Use same material variant across related widgets
4. **Contrast**: Ensure sufficient contrast between floating content and background

---

For more examples, see [VISIONOS_EXAMPLES.md](./VISIONOS_EXAMPLES.md) and [EXAMPLES.md](./EXAMPLES.md).
