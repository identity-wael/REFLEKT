import React from 'react'
import { Typography, type TypographyProps, type TextStyle, type FontWeight } from './Typography'
import { headingPresets, type HeadingPresetKey } from './utilities/typography-scales'

/**
 * Heading Levels
 * Semantic HTML heading levels
 */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

/**
 * Heading Level to Text Style Mapping
 * Maps semantic HTML levels to Apple text styles
 */
const headingLevelMap: Record<HeadingLevel, TextStyle> = {
  1: 'largeTitle',
  2: 'title1',
  3: 'title2',
  4: 'title3',
  5: 'title3',
  6: 'title3',
}

/**
 * Heading Level to HTML Element Mapping
 */
const headingElementMap: Record<HeadingLevel, TypographyProps['as']> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
}

export interface HeadingProps extends Omit<TypographyProps, 'variant' | 'as'> {
  /**
   * Semantic heading level (1-6)
   * Automatically maps to appropriate text style and HTML element
   * @default 2
   */
  level?: HeadingLevel

  /**
   * Pre-configured heading style preset
   * Overrides level-based styling if provided
   */
  preset?: HeadingPresetKey

  /**
   * Custom text style
   * Overrides both level and preset if provided
   */
  variant?: TextStyle

  /**
   * Custom HTML element
   * Overrides automatic element mapping if provided
   */
  as?: TypographyProps['as']
}

/**
 * Heading Component
 *
 * Specialized component for headings with semantic HTML and Apple typography.
 * Provides convenient presets and automatic level-to-style mapping.
 *
 * @example
 * ```tsx
 * // Semantic heading with automatic styling
 * <Heading level={1}>Welcome to REFLEKT</Heading>
 *
 * // With preset
 * <Heading preset="hero">Hero Title</Heading>
 *
 * // With custom variant
 * <Heading level={2} variant="title2" weight="bold">
 *   Section Title
 * </Heading>
 * ```
 */
export const Heading = React.forwardRef<HTMLElement, HeadingProps>(
  (
    {
      level = 2,
      preset,
      variant,
      weight,
      color,
      as,
      ...props
    },
    ref
  ) => {
    // Determine styles based on preset, variant, or level
    let finalVariant: TextStyle
    let finalWeight: FontWeight | undefined
    let finalColor = color

    if (preset) {
      // Use preset configuration
      const presetConfig = headingPresets[preset]
      finalVariant = presetConfig.variant
      finalWeight = weight ?? presetConfig.weight
      finalColor = color ?? presetConfig.color
    } else if (variant) {
      // Use custom variant
      finalVariant = variant
      finalWeight = weight
    } else {
      // Use level-based mapping with semibold default
      finalVariant = headingLevelMap[level]
      finalWeight = weight ?? 'semibold'
    }

    // Determine HTML element
    const element = as ?? headingElementMap[level]

    return (
      <Typography
        ref={ref}
        variant={finalVariant}
        weight={finalWeight}
        color={finalColor}
        as={element}
        {...props}
      />
    )
  }
)

Heading.displayName = 'Heading'
