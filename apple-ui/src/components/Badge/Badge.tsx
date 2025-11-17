import React from 'react'
import { cn } from '../../utils'
import styles from './Badge.module.css'

export type BadgeVariant = 'dot' | 'number' | 'icon'
export type BadgeColor = 'blue' | 'green' | 'red' | 'orange' | 'purple' | 'gray'
export type BadgeSize = 'sm' | 'md' | 'lg'
export type BadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface BadgeProps {
  /**
   * Variant of the badge
   * @default 'number'
   */
  variant?: BadgeVariant
  /**
   * Color theme of the badge
   * @default 'blue'
   */
  color?: BadgeColor
  /**
   * Size of the badge
   * @default 'md'
   */
  size?: BadgeSize
  /**
   * Content to display (number or text)
   */
  content?: number | string
  /**
   * Maximum number to display before showing +
   * @default 99
   */
  max?: number
  /**
   * Show badge even when content is 0
   * @default false
   */
  showZero?: boolean
  /**
   * Position of badge when used as wrapper
   * @default 'top-right'
   */
  position?: BadgePosition
  /**
   * Icon element to display (for icon variant)
   */
  icon?: React.ReactNode
  /**
   * Enable glass effect
   * @default false
   */
  glass?: boolean
  /**
   * Child elements to wrap (badge will be positioned relative to children)
   */
  children?: React.ReactNode
  /**
   * Additional CSS class name
   */
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'number',
  color = 'blue',
  size = 'md',
  content,
  max = 99,
  showZero = false,
  position = 'top-right',
  icon,
  glass = false,
  children,
  className,
}) => {
  // Don't show badge if content is 0 and showZero is false
  const shouldShow = showZero || (content !== 0 && content !== undefined) || variant === 'dot' || icon

  if (!shouldShow && !children) {
    return null
  }

  // Format content for number variant
  const displayContent = React.useMemo(() => {
    if (variant === 'dot' || variant === 'icon') return null
    if (typeof content === 'number' && content > max) {
      return `${max}+`
    }
    return content
  }, [variant, content, max])

  const badgeElement = (
    <span
      className={cn(
        styles.badge,
        styles[variant],
        styles[color],
        styles[size],
        glass && styles.glass,
        !children && className
      )}
      role={variant === 'dot' ? 'status' : undefined}
      aria-label={
        variant === 'number' && content !== undefined
          ? `${content} notifications`
          : variant === 'dot'
          ? 'Active status'
          : undefined
      }
    >
      {variant === 'icon' && icon ? icon : displayContent}
    </span>
  )

  // If no children, return badge standalone
  if (!children) {
    return badgeElement
  }

  // If children exist, wrap them with positioned badge
  return (
    <span className={cn(styles.wrapper, className)}>
      {children}
      {shouldShow && (
        <span className={cn(styles.positioned, styles[position])}>
          {badgeElement}
        </span>
      )}
    </span>
  )
}

Badge.displayName = 'Badge'
