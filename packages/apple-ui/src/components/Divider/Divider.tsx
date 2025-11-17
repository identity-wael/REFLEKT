import React from 'react'
import { cn } from '../../utils'
import styles from './Divider.module.css'

/**
 * Divider Orientation
 */
export type DividerOrientation = 'horizontal' | 'vertical'

/**
 * Divider Variant
 */
export type DividerVariant = 'solid' | 'dashed' | 'dotted'

/**
 * Divider Thickness
 */
export type DividerThickness = 'thin' | 'medium' | 'thick'

/**
 * Divider Spacing (margin around divider)
 */
export type DividerSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Divider orientation
   * @default 'horizontal'
   */
  orientation?: DividerOrientation

  /**
   * Line variant
   * @default 'solid'
   */
  variant?: DividerVariant

  /**
   * Line thickness
   * @default 'thin'
   */
  thickness?: DividerThickness

  /**
   * Spacing (margin) around the divider
   * @default 'md'
   */
  spacing?: DividerSpacing

  /**
   * Optional label text (centered in divider)
   */
  label?: string

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Divider Component
 *
 * Visual separator line with optional label support.
 *
 * @example
 * ```tsx
 * <Divider />
 *
 * <Divider orientation="vertical" />
 *
 * <Divider label="OR" spacing="lg" />
 *
 * <Divider variant="dashed" thickness="medium" />
 * ```
 */
export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      variant = 'solid',
      thickness = 'thin',
      spacing = 'md',
      label,
      className,
      ...props
    },
    ref
  ) => {
    if (label && orientation === 'horizontal') {
      return (
        <div
          ref={ref}
          className={cn(
            styles.dividerWithLabel,
            styles[`spacing-${spacing}`],
            className
          )}
          role="separator"
          {...props}
        >
          <div
            className={cn(
              styles.line,
              styles[`variant-${variant}`],
              styles[`thickness-${thickness}`]
            )}
            aria-hidden="true"
          />
          <span className={styles.label}>{label}</span>
          <div
            className={cn(
              styles.line,
              styles[`variant-${variant}`],
              styles[`thickness-${thickness}`]
            )}
            aria-hidden="true"
          />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          styles.divider,
          styles[`orientation-${orientation}`],
          styles[`variant-${variant}`],
          styles[`thickness-${thickness}`],
          styles[`spacing-${spacing}`],
          className
        )}
        role="separator"
        aria-orientation={orientation}
        {...props}
      />
    )
  }
)

Divider.displayName = 'Divider'
