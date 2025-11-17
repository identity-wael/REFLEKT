import React from 'react'
import { cn } from '../../utils'
import styles from './VisionCard.module.css'

/**
 * VisionCard Material Types
 */
export type VisionMaterial =
  | 'glass'        // Glassmorphism with blur
  | 'frosted'      // Heavy frosted glass
  | 'crystal'      // Clear glass with subtle tint
  | 'dark-glass'   // Dark tinted glass

/**
 * VisionCard Depth Levels
 */
export type VisionDepth = 'flat' | 'shallow' | 'medium' | 'deep'

export interface VisionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Glass material variant
   * @default 'glass'
   */
  material?: VisionMaterial

  /**
   * Depth level (3D transform intensity)
   * @default 'medium'
   */
  depth?: VisionDepth

  /**
   * Enable hover tilt effect (3D perspective)
   * @default true
   */
  tiltOnHover?: boolean

  /**
   * Enable glow effect on hover
   * @default false
   */
  glowOnHover?: boolean

  /**
   * Enable float animation
   * @default false
   */
  floating?: boolean

  /**
   * Border radius
   * @default 'lg'
   */
  radius?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'

  /**
   * Internal padding
   * @default 'md'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Card content
   */
  children: React.ReactNode
}

/**
 * VisionCard Component
 *
 * visionOS-inspired card with depth, glassmorphism, and 3D effects.
 * Features smooth animations and interactive hover states.
 *
 * Features:
 * - Glassmorphism with backdrop blur
 * - 3D tilt effect on hover
 * - Multiple material variants
 * - Depth-based shadows
 * - Glow effects
 * - Floating animation
 * - Spring-based transitions
 *
 * @example
 * ```tsx
 * <VisionCard material="glass" depth="deep" tiltOnHover>
 *   <h3>visionOS Card</h3>
 *   <p>Beautiful glass effect with depth</p>
 * </VisionCard>
 *
 * <VisionCard
 *   material="frosted"
 *   glowOnHover
 *   floating
 * >
 *   <Icon size="xl">🚀</Icon>
 *   <Typography variant="title2">Launch</Typography>
 * </VisionCard>
 * ```
 */
export const VisionCard = React.forwardRef<HTMLDivElement, VisionCardProps>(
  (
    {
      material = 'glass',
      depth = 'medium',
      tiltOnHover = true,
      glowOnHover = false,
      floating = false,
      radius = 'lg',
      padding = 'md',
      className,
      children,
      onMouseMove,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const cardRef = React.useRef<HTMLDivElement>(null)
    const [tilt, setTilt] = React.useState({ x: 0, y: 0 })

    const handleMouseMove = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!tiltOnHover || !cardRef.current) return

        const card = cardRef.current
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        // Calculate tilt angles (-10 to 10 degrees)
        const tiltX = ((y - centerY) / centerY) * -10
        const tiltY = ((x - centerX) / centerX) * 10

        setTilt({ x: tiltX, y: tiltY })

        if (onMouseMove) {
          onMouseMove(e)
        }
      },
      [tiltOnHover, onMouseMove]
    )

    const handleMouseLeave = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        setTilt({ x: 0, y: 0 })

        if (onMouseLeave) {
          onMouseLeave(e)
        }
      },
      [onMouseLeave]
    )

    React.useImperativeHandle(ref, () => cardRef.current as HTMLDivElement)

    return (
      <div
        ref={cardRef}
        className={cn(
          styles.visionCard,
          styles[`material-${material}`],
          styles[`depth-${depth}`],
          styles[`radius-${radius}`],
          styles[`padding-${padding}`],
          tiltOnHover && styles.tiltable,
          glowOnHover && styles.glowable,
          floating && styles.floating,
          className
        )}
        style={{
          transform: tiltOnHover
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            : undefined,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className={styles.visionCardContent}>{children}</div>
        {glowOnHover && <div className={styles.glowOverlay} />}
      </div>
    )
  }
)

VisionCard.displayName = 'VisionCard'

/**
 * VisionCardGrid Component
 *
 * Grid layout for VisionCards with staggered animations.
 */
export interface VisionCardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns
   * @default 'auto'
   */
  columns?: number | 'auto'

  /**
   * Gap between cards
   * @default 'lg'
   */
  gap?: 'sm' | 'md' | 'lg' | 'xl'

  children: React.ReactNode
  className?: string
}

export const VisionCardGrid = React.forwardRef<HTMLDivElement, VisionCardGridProps>(
  ({ columns = 'auto', gap = 'lg', children, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.visionCardGrid, styles[`gap-${gap}`], className)}
        style={{
          ...style,
          gridTemplateColumns:
            columns === 'auto'
              ? 'repeat(auto-fit, minmax(280px, 1fr))'
              : `repeat(${columns}, 1fr)`,
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)

VisionCardGrid.displayName = 'VisionCardGrid'
