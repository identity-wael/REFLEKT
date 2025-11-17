import React from 'react'
import { Typography, type TypographyProps } from './Typography'
import { captionPresets, type CaptionPresetKey } from './utilities/typography-scales'

export interface CaptionProps extends Omit<TypographyProps, 'variant' | 'as'> {
  /**
   * Pre-configured caption style preset
   */
  preset?: CaptionPresetKey

  /**
   * Custom HTML element
   * @default 'span'
   */
  as?: TypographyProps['as']
}

/**
 * Caption Component
 *
 * Specialized component for captions, labels, and small supporting text.
 * Uses Apple's caption typography styles optimized for metadata and annotations.
 *
 * @example
 * ```tsx
 * // Default caption
 * <Caption>Image caption or description</Caption>
 *
 * // Small caption for timestamps
 * <Caption preset="small">2 min ago</Caption>
 *
 * // Tiny caption for metadata
 * <Caption preset="tiny">Last updated: Nov 17, 2025</Caption>
 *
 * // Emphasized caption
 * <Caption preset="emphasized">Important note</Caption>
 *
 * // All caps label
 * <Caption preset="label">SECTION TITLE</Caption>
 * ```
 */
export const Caption = React.forwardRef<HTMLElement, CaptionProps>(
  (
    {
      preset = 'default',
      weight,
      color,
      as = 'span',
      ...props
    },
    ref
  ) => {
    const presetConfig = captionPresets[preset]

    return (
      <Typography
        ref={ref}
        variant={presetConfig.variant}
        weight={weight ?? presetConfig.weight}
        color={color ?? presetConfig.color}
        as={as}
        {...props}
      />
    )
  }
)

Caption.displayName = 'Caption'
