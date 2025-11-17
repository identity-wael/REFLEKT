import React from 'react'
import { cn } from '../../utils'
import styles from './Button.module.css'

/**
 * Button Variants (Apple Design System)
 */
export type ButtonVariant =
  | 'primary'      // Filled blue button (default action)
  | 'secondary'    // Subtle gray background
  | 'tertiary'     // Text-only button
  | 'destructive'  // Red for destructive actions
  | 'plain'        // Minimal styling

/**
 * Button Sizes
 */
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: ButtonVariant

  /**
   * Button size
   * @default 'md'
   */
  size?: ButtonSize

  /**
   * Full width button
   * @default false
   */
  fullWidth?: boolean

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean

  /**
   * Loading state (shows spinner)
   * @default false
   */
  loading?: boolean

  /**
   * Icon to display before text
   */
  startIcon?: React.ReactNode

  /**
   * Icon to display after text
   */
  endIcon?: React.ReactNode

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Button content
   */
  children: React.ReactNode
}

/**
 * Button Component
 *
 * Apple-style button with multiple variants and sizes.
 * Follows Apple's Human Interface Guidelines for interactive elements.
 *
 * Features:
 * - Smooth transitions and hover effects
 * - Accessibility-first design
 * - Support for icons and loading states
 * - Automatic dark mode support
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">
 *   Get Started
 * </Button>
 *
 * <Button variant="secondary" startIcon={<Icon />}>
 *   Learn More
 * </Button>
 *
 * <Button variant="destructive" loading>
 *   Delete
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      disabled = false,
      loading = false,
      startIcon,
      endIcon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          styles.button,
          styles[`variant-${variant}`],
          styles[`size-${size}`],
          fullWidth && styles.fullWidth,
          loading && styles.loading,
          className
        )}
        {...props}
      >
        {loading && (
          <span className={styles.spinner} aria-hidden="true">
            <svg className={styles.spinnerSvg} viewBox="0 0 24 24">
              <circle
                className={styles.spinnerCircle}
                cx="12"
                cy="12"
                r="10"
                fill="none"
                strokeWidth="3"
              />
            </svg>
          </span>
        )}
        {!loading && startIcon && (
          <span className={styles.startIcon} aria-hidden="true">
            {startIcon}
          </span>
        )}
        <span className={styles.content}>{children}</span>
        {!loading && endIcon && (
          <span className={styles.endIcon} aria-hidden="true">
            {endIcon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
