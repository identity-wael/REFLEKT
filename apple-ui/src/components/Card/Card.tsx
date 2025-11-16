import React from 'react'
import { cn } from '../../utils'
import styles from './Card.module.css'

/**
 * Card Variants
 */
export type CardVariant =
  | 'elevated'      // Subtle shadow, raised appearance
  | 'filled'        // Background fill with no shadow
  | 'outlined'      // Border with no fill
  | 'glass'         // Glassmorphism effect (backdrop blur)

/**
 * Card Padding Sizes
 */
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

/**
 * Card Border Radius
 */
export type CardRadius = 'sm' | 'md' | 'lg' | 'xl'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style variant
   * @default 'elevated'
   */
  variant?: CardVariant

  /**
   * Internal padding
   * @default 'md'
   */
  padding?: CardPadding

  /**
   * Border radius
   * @default 'lg'
   */
  radius?: CardRadius

  /**
   * Enable hover effect (subtle lift)
   * @default false
   */
  hoverable?: boolean

  /**
   * Enable press effect (scale down)
   * @default false
   */
  pressable?: boolean

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
 * Card Component
 *
 * Apple-style card container with multiple visual variants.
 * Perfect for grouping related content with visual hierarchy.
 *
 * Features:
 * - Multiple variants (elevated, filled, outlined, glass)
 * - Customizable padding and border radius
 * - Optional hover and press interactions
 * - Automatic dark mode support
 * - Glassmorphism effect for modern UI
 *
 * @example
 * ```tsx
 * <Card variant="elevated" hoverable>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * <Card variant="glass" padding="lg">
 *   <p>Glassmorphism card with backdrop blur</p>
 * </Card>
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      padding = 'md',
      radius = 'lg',
      hoverable = false,
      pressable = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.card,
          styles[`variant-${variant}`],
          styles[`padding-${padding}`],
          styles[`radius-${radius}`],
          hoverable && styles.hoverable,
          pressable && styles.pressable,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

/**
 * CardHeader Component
 *
 * Semantic header section for Card component.
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.cardHeader, className)} {...props}>
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

/**
 * CardContent Component
 *
 * Main content area for Card component.
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.cardContent, className)} {...props}>
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

/**
 * CardFooter Component
 *
 * Footer section for Card component (e.g., actions, metadata).
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.cardFooter, className)} {...props}>
        {children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter'
