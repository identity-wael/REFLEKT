import React from 'react'
import { cn } from '../../utils'
import styles from './Typography.module.css'

/**
 * Apple Text Styles
 * Based on iOS/macOS typography system
 */
export type TextStyle =
  | 'largeTitle'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'body'
  | 'callout'
  | 'subheadline'
  | 'footnote'
  | 'caption1'
  | 'caption2'

/**
 * Font Weights (SF Pro family)
 */
export type FontWeight =
  | 'ultralight'
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'heavy'
  | 'black'

/**
 * Label Color Variants (Apple's semantic colors)
 */
export type LabelColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'

export interface TypographyProps {
  /**
   * The text style following Apple's text style system
   * @default 'body'
   */
  variant?: TextStyle

  /**
   * Font weight
   * @default 'regular'
   */
  weight?: FontWeight

  /**
   * Label color (semantic color from Apple's palette)
   * @default 'primary'
   */
  color?: LabelColor

  /**
   * HTML element to render
   * @default Automatically determined based on variant
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label'

  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right'

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Content to render
   */
  children: React.ReactNode
}

/**
 * Default HTML element mapping for each variant
 */
const defaultElementMap: Record<TextStyle, TypographyProps['as']> = {
  largeTitle: 'h1',
  title1: 'h2',
  title2: 'h3',
  title3: 'h4',
  body: 'p',
  callout: 'p',
  subheadline: 'p',
  footnote: 'span',
  caption1: 'span',
  caption2: 'span',
}

/**
 * Typography Component
 *
 * Implements Apple's typography system with all standard text styles.
 * Uses SF Pro font family with optical sizing and dynamic tracking.
 *
 * @example
 * ```tsx
 * <Typography variant="largeTitle" weight="bold">
 *   Welcome to REFLEKT
 * </Typography>
 *
 * <Typography variant="body" color="secondary">
 *   Your journey begins here
 * </Typography>
 * ```
 */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'body',
      weight = 'regular',
      color = 'primary',
      as,
      align,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as ?? defaultElementMap[variant] ?? 'span'

    return React.createElement(
      Component,
      {
        ref,
        className: cn(
          styles.typography,
          styles[`variant-${variant}`],
          styles[`weight-${weight}`],
          styles[`color-${color}`],
          align && styles[`align-${align}`],
          className
        ),
        ...props,
      },
      children
    )
  }
)

Typography.displayName = 'Typography'
