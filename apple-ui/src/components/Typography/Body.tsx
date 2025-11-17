import React from 'react'
import { Typography, type TypographyProps } from './Typography'
import { bodyPresets, type BodyPresetKey } from './utilities/typography-scales'

export interface BodyProps extends Omit<TypographyProps, 'variant'> {
  /**
   * Pre-configured body text preset
   * @default 'default'
   */
  preset?: BodyPresetKey

  /**
   * Maximum width for optimal readability
   * Set to 'readable' for ~66 characters per line
   * @default undefined (no max width)
   */
  maxWidth?: 'readable' | number

  /**
   * HTML element to render
   * @default 'p'
   */
  as?: TypographyProps['as']
}

/**
 * Body Component
 *
 * Specialized component for body text and paragraphs.
 * Provides optimal readability with configurable line lengths.
 *
 * @example
 * ```tsx
 * // Default body paragraph
 * <Body>This is standard body text for reading.</Body>
 *
 * // Emphasized body text
 * <Body preset="emphasized">
 *   This text has medium weight for emphasis.
 * </Body>
 *
 * // Strong body text
 * <Body preset="strong">
 *   This text is bold for strong emphasis.
 * </Body>
 *
 * // Secondary (less prominent) text
 * <Body preset="secondary">
 *   This is supporting or less important text.
 * </Body>
 *
 * // With readable max width (~66 characters)
 * <Body maxWidth="readable">
 *   Long form content with optimal line length for reading.
 * </Body>
 *
 * // Callout style (slightly larger)
 * <Body preset="callout">
 *   Important callout or highlighted information.
 * </Body>
 * ```
 */
export const Body = React.forwardRef<HTMLElement, BodyProps>(
  (
    {
      preset = 'default',
      maxWidth,
      weight,
      color,
      as = 'p',
      style,
      ...props
    },
    ref
  ) => {
    const presetConfig = bodyPresets[preset]

    // Calculate max width if 'readable' is specified
    const readableMaxWidth = 672 // ~66 characters at 17px
    const maxWidthStyle =
      maxWidth === 'readable'
        ? { maxWidth: `${readableMaxWidth}px` }
        : maxWidth
          ? { maxWidth: `${maxWidth}px` }
          : {}

    return (
      <Typography
        ref={ref}
        variant={presetConfig.variant}
        weight={weight ?? presetConfig.weight}
        color={color ?? presetConfig.color}
        as={as}
        style={{ ...maxWidthStyle, ...style }}
        {...props}
      />
    )
  }
)

Body.displayName = 'Body'
