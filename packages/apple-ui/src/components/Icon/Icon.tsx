import React from 'react'
import { cn } from '../../utils'
import styles from './Icon.module.css'

/**
 * Icon Animation Variants (visionOS-inspired)
 */
export type IconAnimation =
  | 'none'
  | 'float'        // Gentle floating effect
  | 'bounce'       // Subtle bounce on appear
  | 'scale'        // Scale in
  | 'rotate'       // Rotate in
  | 'slide-up'     // Slide from bottom
  | 'slide-down'   // Slide from top
  | 'fade'         // Fade in

/**
 * Icon Sizes
 */
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

/**
 * Icon Hover Effects (visionOS-style)
 */
export type IconHoverEffect =
  | 'none'
  | 'lift'         // Lift up with shadow
  | 'tilt'         // 3D tilt effect
  | 'rotate'       // Rotate on hover
  | 'scale'        // Scale up
  | 'glow'         // Glowing effect
  | 'float'        // Float up smoothly
  | 'pulse'        // Pulsing scale

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon content (SVG, emoji, or component)
   */
  children: React.ReactNode

  /**
   * Icon size
   * @default 'md'
   */
  size?: IconSize

  /**
   * Entry animation
   * @default 'scale'
   */
  animation?: IconAnimation

  /**
   * Animation delay (ms)
   * @default 0
   */
  animationDelay?: number

  /**
   * Hover effect (visionOS-style)
   * @default 'lift'
   */
  hoverEffect?: IconHoverEffect

  /**
   * Background variant
   * @default 'none'
   */
  background?: 'none' | 'filled' | 'glass' | 'gradient'

  /**
   * Icon color (for filled background)
   */
  color?: string

  /**
   * Enable interactive state
   * @default true
   */
  interactive?: boolean

  /**
   * Disable hover effects
   * @default false
   */
  disableHover?: boolean

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Icon Component (visionOS-inspired)
 *
 * Beautiful icon component with smooth animations and depth effects.
 * Inspired by Apple's visionOS design language with floating, tilting,
 * and glowing interactions.
 *
 * Features:
 * - Multiple entry animations (float, bounce, scale, rotate, slide, fade)
 * - Rich hover effects (lift, tilt, rotate, scale, glow, float, pulse)
 * - Spring-based animations for natural motion
 * - 3D transforms with depth
 * - Glassmorphism backgrounds
 * - Customizable sizes and colors
 *
 * @example
 * ```tsx
 * // Simple icon with lift effect
 * <Icon hoverEffect="lift" size="lg">
 *   🚀
 * </Icon>
 *
 * // Icon with glass background and tilt effect
 * <Icon
 *   background="glass"
 *   hoverEffect="tilt"
 *   animation="float"
 * >
 *   <svg>...</svg>
 * </Icon>
 *
 * // Icon grid with staggered animations
 * {icons.map((icon, i) => (
 *   <Icon
 *     key={i}
 *     animation="bounce"
 *     animationDelay={i * 100}
 *     hoverEffect="glow"
 *   >
 *     {icon}
 *   </Icon>
 * ))}
 * ```
 */
export const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  (
    {
      children,
      size = 'md',
      animation = 'scale',
      animationDelay = 0,
      hoverEffect = 'lift',
      background = 'none',
      color,
      interactive = true,
      disableHover = false,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.icon,
          styles[`size-${size}`],
          styles[`animation-${animation}`],
          !disableHover && styles[`hover-${hoverEffect}`],
          styles[`background-${background}`],
          interactive && styles.interactive,
          className
        )}
        style={{
          ...style,
          animationDelay: `${animationDelay}ms`,
          ...(color && background !== 'none' && { backgroundColor: color }),
        }}
        {...props}
      >
        <div className={styles.iconContent}>{children}</div>
      </div>
    )
  }
)

Icon.displayName = 'Icon'

/**
 * IconGrid Component
 *
 * Grid layout for icons with automatic staggered animations.
 */
export interface IconGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns
   * @default 'auto'
   */
  columns?: number | 'auto'

  /**
   * Gap between icons
   * @default 'md'
   */
  gap?: 'sm' | 'md' | 'lg'

  /**
   * Stagger delay between animations (ms)
   * @default 100
   */
  staggerDelay?: number

  /**
   * Children (Icon components)
   */
  children: React.ReactNode

  className?: string
}

export const IconGrid = React.forwardRef<HTMLDivElement, IconGridProps>(
  (
    {
      columns = 'auto',
      gap = 'md',
      staggerDelay = 100,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(styles.iconGrid, styles[`gap-${gap}`], className)}
        style={{
          ...style,
          gridTemplateColumns:
            columns === 'auto'
              ? 'repeat(auto-fit, minmax(80px, 1fr))'
              : `repeat(${columns}, 1fr)`,
        }}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === Icon) {
            return React.cloneElement(child as React.ReactElement<IconProps>, {
              animationDelay: index * staggerDelay,
            })
          }
          return child
        })}
      </div>
    )
  }
)

IconGrid.displayName = 'IconGrid'
