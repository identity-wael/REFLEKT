/**
 * Typography Scale Presets
 * Pre-configured combinations of variant, weight, and color for common use cases
 * Compatible with Apple's Human Interface Guidelines
 */

import type { TextStyle, FontWeight, LabelColor } from '../Typography'

export interface TypographyPreset {
  variant: TextStyle
  weight?: FontWeight
  color?: LabelColor
}

/**
 * Heading Presets
 * Pre-configured styles for various heading levels
 */
export const headingPresets = {
  /**
   * Hero/Page Title
   * Large, bold heading for main page titles
   */
  hero: {
    variant: 'largeTitle' as TextStyle,
    weight: 'bold' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Section Title
   * Medium heading for major page sections
   */
  section: {
    variant: 'title1' as TextStyle,
    weight: 'semibold' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Subsection Title
   * Smaller heading for subsections
   */
  subsection: {
    variant: 'title2' as TextStyle,
    weight: 'semibold' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Card/Component Title
   * Heading for cards and smaller components
   */
  card: {
    variant: 'title3' as TextStyle,
    weight: 'semibold' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Subtle Heading
   * Less prominent heading with lighter weight
   */
  subtle: {
    variant: 'title3' as TextStyle,
    weight: 'medium' as FontWeight,
    color: 'secondary' as LabelColor,
  },
} as const

/**
 * Body Text Presets
 * Pre-configured styles for body content
 */
export const bodyPresets = {
  /**
   * Primary Body Text
   * Standard body copy for main content
   */
  default: {
    variant: 'body' as TextStyle,
    weight: 'regular' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Emphasized Body Text
   * Body text with medium weight for emphasis
   */
  emphasized: {
    variant: 'body' as TextStyle,
    weight: 'medium' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Strong Body Text
   * Body text with bold weight for strong emphasis
   */
  strong: {
    variant: 'body' as TextStyle,
    weight: 'semibold' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Secondary Body Text
   * Less prominent body text for supporting content
   */
  secondary: {
    variant: 'body' as TextStyle,
    weight: 'regular' as FontWeight,
    color: 'secondary' as LabelColor,
  },

  /**
   * Callout Text
   * Slightly larger than body, for callouts and highlights
   */
  callout: {
    variant: 'callout' as TextStyle,
    weight: 'regular' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Subheadline Text
   * Smaller than body, for subheadings within content
   */
  subheadline: {
    variant: 'subheadline' as TextStyle,
    weight: 'regular' as FontWeight,
    color: 'primary' as LabelColor,
  },
} as const

/**
 * Caption Presets
 * Pre-configured styles for captions, labels, and small text
 */
export const captionPresets = {
  /**
   * Standard Caption
   * Footnote-sized caption for images, tables, etc.
   */
  default: {
    variant: 'footnote' as TextStyle,
    weight: 'regular' as FontWeight,
    color: 'secondary' as LabelColor,
  },

  /**
   * Small Caption
   * Smaller caption for minimal supporting text
   */
  small: {
    variant: 'caption1' as TextStyle,
    weight: 'regular' as FontWeight,
    color: 'secondary' as LabelColor,
  },

  /**
   * Tiny Caption
   * Smallest caption for timestamps, metadata, etc.
   */
  tiny: {
    variant: 'caption2' as TextStyle,
    weight: 'regular' as FontWeight,
    color: 'tertiary' as LabelColor,
  },

  /**
   * Emphasized Caption
   * Medium weight caption for emphasis
   */
  emphasized: {
    variant: 'footnote' as TextStyle,
    weight: 'medium' as FontWeight,
    color: 'secondary' as LabelColor,
  },

  /**
   * All Caps Caption
   * For labels and metadata (apply text-transform separately)
   */
  label: {
    variant: 'caption1' as TextStyle,
    weight: 'semibold' as FontWeight,
    color: 'secondary' as LabelColor,
  },
} as const

/**
 * Link Presets
 * Pre-configured styles for interactive text links
 */
export const linkPresets = {
  /**
   * Standard Link
   * Body-sized link for inline text
   */
  default: {
    variant: 'body' as TextStyle,
    weight: 'regular' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Emphasized Link
   * Medium weight link for prominence
   */
  emphasized: {
    variant: 'body' as TextStyle,
    weight: 'medium' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Small Link
   * Footnote-sized link for footer, captions, etc.
   */
  small: {
    variant: 'footnote' as TextStyle,
    weight: 'regular' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Large Link
   * Callout-sized link for CTAs
   */
  large: {
    variant: 'callout' as TextStyle,
    weight: 'medium' as FontWeight,
    color: 'primary' as LabelColor,
  },
} as const

/**
 * Button Text Presets
 * Pre-configured styles for button labels
 */
export const buttonPresets = {
  /**
   * Standard Button
   * Default button text style
   */
  default: {
    variant: 'body' as TextStyle,
    weight: 'semibold' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Large Button
   * For prominent CTAs
   */
  large: {
    variant: 'callout' as TextStyle,
    weight: 'semibold' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Small Button
   * For compact buttons
   */
  small: {
    variant: 'subheadline' as TextStyle,
    weight: 'semibold' as FontWeight,
    color: 'primary' as LabelColor,
  },
} as const

/**
 * Form Element Presets
 * Pre-configured styles for form labels and inputs
 */
export const formPresets = {
  /**
   * Form Label
   * Label for form inputs
   */
  label: {
    variant: 'subheadline' as TextStyle,
    weight: 'medium' as FontWeight,
    color: 'primary' as LabelColor,
  },

  /**
   * Helper Text
   * Supporting text for form fields
   */
  helper: {
    variant: 'footnote' as TextStyle,
    weight: 'regular' as FontWeight,
    color: 'secondary' as LabelColor,
  },

  /**
   * Error Text
   * Error messages for validation
   */
  error: {
    variant: 'footnote' as TextStyle,
    weight: 'regular' as FontWeight,
    color: 'primary' as LabelColor, // Color should be overridden with system red
  },

  /**
   * Input Placeholder
   * Placeholder text style
   */
  placeholder: {
    variant: 'body' as TextStyle,
    weight: 'regular' as FontWeight,
    color: 'tertiary' as LabelColor,
  },
} as const

/**
 * Combined Typography Scale
 * All presets in a single object for easy access
 */
export const typographyScales = {
  heading: headingPresets,
  body: bodyPresets,
  caption: captionPresets,
  link: linkPresets,
  button: buttonPresets,
  form: formPresets,
} as const

/**
 * Type for all available presets
 */
export type TypographyScaleKey = keyof typeof typographyScales
export type HeadingPresetKey = keyof typeof headingPresets
export type BodyPresetKey = keyof typeof bodyPresets
export type CaptionPresetKey = keyof typeof captionPresets
export type LinkPresetKey = keyof typeof linkPresets
export type ButtonPresetKey = keyof typeof buttonPresets
export type FormPresetKey = keyof typeof formPresets
