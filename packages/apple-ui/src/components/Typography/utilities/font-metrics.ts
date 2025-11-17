/**
 * Typography Font Metrics
 * Constants and utilities for Apple's typography system
 * Based on SF Pro font family specifications
 */

/**
 * SF Pro Font Stack
 * Apple's San Francisco font with system fallbacks
 */
export const SF_PRO_FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif'

/**
 * SF Mono Font Stack
 * Apple's monospace font for code and technical content
 */
export const SF_MONO_FONT_STACK =
  'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace'

/**
 * Typography Size Constants
 * Pixel values for each text style
 */
export const FONT_SIZES = {
  LARGE_TITLE: 34,
  TITLE_1: 28,
  TITLE_2: 22,
  TITLE_3: 20,
  BODY: 17,
  CALLOUT: 16,
  SUBHEADLINE: 15,
  FOOTNOTE: 13,
  CAPTION_1: 12,
  CAPTION_2: 11,
} as const

/**
 * Line Height Constants
 * Pixel values for line heights corresponding to each text style
 */
export const LINE_HEIGHTS = {
  LARGE_TITLE: 41,
  TITLE_1: 34,
  TITLE_2: 28,
  TITLE_3: 25,
  BODY: 22,
  CALLOUT: 21,
  SUBHEADLINE: 20,
  FOOTNOTE: 18,
  CAPTION_1: 16,
  CAPTION_2: 13,
} as const

/**
 * Letter Spacing (Tracking) Constants
 * Pixel values for letter spacing per Apple HIG
 * Positive values = looser, negative values = tighter
 */
export const LETTER_SPACING = {
  LARGE_TITLE: 0.37,
  TITLE_1: 0.36,
  TITLE_2: 0.35,
  TITLE_3: 0.38,
  BODY: -0.43,
  CALLOUT: -0.32,
  SUBHEADLINE: -0.24,
  FOOTNOTE: -0.08,
  CAPTION_1: 0,
  CAPTION_2: 0.06,
} as const

/**
 * Font Weight Values
 * Numeric values for SF Pro font weights
 */
export const FONT_WEIGHTS = {
  ULTRALIGHT: 100,
  THIN: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
  HEAVY: 800,
  BLACK: 900,
} as const

/**
 * Optical Size Threshold
 * SF Pro uses different optical sizes:
 * - SF Pro Text: < 20pt (better for small text)
 * - SF Pro Display: >= 20pt (better for large text)
 */
export const OPTICAL_SIZE_THRESHOLD = 20

/**
 * Label Opacity Values
 * Opacity values for semantic text colors
 */
export const LABEL_OPACITY = {
  PRIMARY: 1.0,
  SECONDARY: 0.6,
  TERTIARY: 0.3,
  QUATERNARY: 0.18,
} as const

/**
 * Recommended Line Length
 * Optimal character count per line for readability
 * Apple recommends 50-75 characters for body text
 */
export const OPTIMAL_LINE_LENGTH = {
  MIN: 50,
  IDEAL: 66, // Considered most readable
  MAX: 75,
} as const

/**
 * Text Container Max Widths
 * Recommended maximum widths for different text styles
 * to maintain optimal readability
 */
export const MAX_TEXT_WIDTH = {
  BODY: 672, // ~66 characters at 17px
  CALLOUT: 640,
  SUBHEADLINE: 600,
  FOOTNOTE: 520,
} as const

/**
 * Vertical Rhythm Scale
 * Spacing multipliers for consistent vertical rhythm
 * Based on 4px baseline grid
 */
export const VERTICAL_RHYTHM = {
  UNIT: 4, // Base unit in pixels
  SCALE: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24], // Multipliers
} as const

/**
 * Heading Scale Ratios
 * Recommended size ratios between heading levels
 * Following Apple's modular scale
 */
export const HEADING_SCALE = {
  H1_TO_H2: FONT_SIZES.LARGE_TITLE / FONT_SIZES.TITLE_1, // ~1.21
  H2_TO_H3: FONT_SIZES.TITLE_1 / FONT_SIZES.TITLE_2, // ~1.27
  H3_TO_H4: FONT_SIZES.TITLE_2 / FONT_SIZES.TITLE_3, // ~1.10
  H4_TO_BODY: FONT_SIZES.TITLE_3 / FONT_SIZES.BODY, // ~1.18
} as const

/**
 * Accessibility Minimum Sizes
 * WCAG 2.1 compliant minimum font sizes
 */
export const ACCESSIBILITY = {
  MIN_BODY_SIZE: 16, // WCAG AA minimum
  MIN_LARGE_TEXT_SIZE: 18, // For text that can use lower contrast
  MIN_TOUCH_TARGET: 44, // iOS minimum touch target (pt)
  MIN_LINE_HEIGHT_RATIO: 1.5, // WCAG minimum line height
} as const

/**
 * Text Style Usage Recommendations
 * When to use each text style according to Apple HIG
 */
export const USAGE_GUIDELINES = {
  largeTitle: 'Use for page titles and main headings. Maximum one per screen.',
  title1: 'Use for primary sections and important content hierarchy.',
  title2: 'Use for secondary sections and subsections.',
  title3: 'Use for tertiary sections, card titles, and groupings.',
  body: 'Use for main content, paragraphs, and readable text.',
  callout: 'Use for emphasized content that needs more prominence than body.',
  subheadline: 'Use for less prominent content or supporting information.',
  footnote: 'Use for captions, descriptions, and supplementary text.',
  caption1: 'Use for labels, timestamps, and metadata.',
  caption2: 'Use for the smallest text, like fine print.',
} as const

/**
 * Calculate line height ratio
 * Returns the ratio of line height to font size
 *
 * @param fontSize - Font size in pixels
 * @param lineHeight - Line height in pixels
 * @returns Line height ratio
 *
 * @example
 * ```ts
 * calculateLineHeightRatio(17, 22)
 * // Returns: 1.29
 * ```
 */
export function calculateLineHeightRatio(
  fontSize: number,
  lineHeight: number
): number {
  return Math.round((lineHeight / fontSize) * 100) / 100
}

/**
 * Calculate optimal line length in pixels
 * Based on average character width for a given font size
 *
 * @param fontSize - Font size in pixels
 * @param characterCount - Desired character count (default: 66)
 * @returns Width in pixels
 *
 * @example
 * ```ts
 * calculateOptimalWidth(17, 66)
 * // Returns: ~672px (17px * 0.6 * 66 chars)
 * ```
 */
export function calculateOptimalWidth(
  fontSize: number,
  characterCount: number = OPTIMAL_LINE_LENGTH.IDEAL
): number {
  // Average character width is ~0.6 times the font size for SF Pro
  const avgCharWidth = fontSize * 0.6
  return Math.round(avgCharWidth * characterCount)
}

/**
 * Get recommended font variant (Text vs Display)
 * SF Pro Text for < 20pt, SF Pro Display for >= 20pt
 *
 * @param fontSize - Font size in points or pixels
 * @returns 'text' or 'display'
 *
 * @example
 * ```ts
 * getFontVariant(17)
 * // Returns: 'text'
 *
 * getFontVariant(28)
 * // Returns: 'display'
 * ```
 */
export function getFontVariant(fontSize: number): 'text' | 'display' {
  return fontSize < OPTICAL_SIZE_THRESHOLD ? 'text' : 'display'
}

/**
 * Convert tracking (letter spacing) to em units
 * Apple specs use pixel values, but em is more responsive
 *
 * @param trackingPx - Tracking in pixels
 * @param fontSize - Font size in pixels
 * @returns Tracking in em units
 *
 * @example
 * ```ts
 * trackingToEm(-0.43, 17)
 * // Returns: -0.025em
 * ```
 */
export function trackingToEm(trackingPx: number, fontSize: number): number {
  return Math.round((trackingPx / fontSize) * 1000) / 1000
}

/**
 * Check if text meets WCAG contrast requirements
 * This is a helper to remind developers to check contrast
 *
 * @param fontSize - Font size in pixels
 * @param fontWeight - Font weight (100-900)
 * @returns Minimum contrast ratio required
 *
 * @example
 * ```ts
 * getRequiredContrast(17, 400)
 * // Returns: 4.5 (WCAG AA for normal text)
 *
 * getRequiredContrast(24, 700)
 * // Returns: 3 (WCAG AA for large text)
 * ```
 */
export function getRequiredContrast(
  fontSize: number,
  fontWeight: number
): number {
  // Large text: 18pt+ or 14pt+ bold
  const isLargeText =
    fontSize >= 18 || (fontSize >= 14 && fontWeight >= FONT_WEIGHTS.BOLD)

  // WCAG AA: 4.5:1 for normal text, 3:1 for large text
  return isLargeText ? 3 : 4.5
}

/**
 * Typography Metrics Summary
 * Complete metrics for all text styles
 */
export const TYPOGRAPHY_METRICS = {
  largeTitle: {
    fontSize: FONT_SIZES.LARGE_TITLE,
    lineHeight: LINE_HEIGHTS.LARGE_TITLE,
    letterSpacing: LETTER_SPACING.LARGE_TITLE,
    lineHeightRatio: calculateLineHeightRatio(
      FONT_SIZES.LARGE_TITLE,
      LINE_HEIGHTS.LARGE_TITLE
    ),
    variant: getFontVariant(FONT_SIZES.LARGE_TITLE),
  },
  title1: {
    fontSize: FONT_SIZES.TITLE_1,
    lineHeight: LINE_HEIGHTS.TITLE_1,
    letterSpacing: LETTER_SPACING.TITLE_1,
    lineHeightRatio: calculateLineHeightRatio(
      FONT_SIZES.TITLE_1,
      LINE_HEIGHTS.TITLE_1
    ),
    variant: getFontVariant(FONT_SIZES.TITLE_1),
  },
  title2: {
    fontSize: FONT_SIZES.TITLE_2,
    lineHeight: LINE_HEIGHTS.TITLE_2,
    letterSpacing: LETTER_SPACING.TITLE_2,
    lineHeightRatio: calculateLineHeightRatio(
      FONT_SIZES.TITLE_2,
      LINE_HEIGHTS.TITLE_2
    ),
    variant: getFontVariant(FONT_SIZES.TITLE_2),
  },
  title3: {
    fontSize: FONT_SIZES.TITLE_3,
    lineHeight: LINE_HEIGHTS.TITLE_3,
    letterSpacing: LETTER_SPACING.TITLE_3,
    lineHeightRatio: calculateLineHeightRatio(
      FONT_SIZES.TITLE_3,
      LINE_HEIGHTS.TITLE_3
    ),
    variant: getFontVariant(FONT_SIZES.TITLE_3),
  },
  body: {
    fontSize: FONT_SIZES.BODY,
    lineHeight: LINE_HEIGHTS.BODY,
    letterSpacing: LETTER_SPACING.BODY,
    lineHeightRatio: calculateLineHeightRatio(
      FONT_SIZES.BODY,
      LINE_HEIGHTS.BODY
    ),
    variant: getFontVariant(FONT_SIZES.BODY),
    maxWidth: MAX_TEXT_WIDTH.BODY,
  },
  callout: {
    fontSize: FONT_SIZES.CALLOUT,
    lineHeight: LINE_HEIGHTS.CALLOUT,
    letterSpacing: LETTER_SPACING.CALLOUT,
    lineHeightRatio: calculateLineHeightRatio(
      FONT_SIZES.CALLOUT,
      LINE_HEIGHTS.CALLOUT
    ),
    variant: getFontVariant(FONT_SIZES.CALLOUT),
    maxWidth: MAX_TEXT_WIDTH.CALLOUT,
  },
  subheadline: {
    fontSize: FONT_SIZES.SUBHEADLINE,
    lineHeight: LINE_HEIGHTS.SUBHEADLINE,
    letterSpacing: LETTER_SPACING.SUBHEADLINE,
    lineHeightRatio: calculateLineHeightRatio(
      FONT_SIZES.SUBHEADLINE,
      LINE_HEIGHTS.SUBHEADLINE
    ),
    variant: getFontVariant(FONT_SIZES.SUBHEADLINE),
    maxWidth: MAX_TEXT_WIDTH.SUBHEADLINE,
  },
  footnote: {
    fontSize: FONT_SIZES.FOOTNOTE,
    lineHeight: LINE_HEIGHTS.FOOTNOTE,
    letterSpacing: LETTER_SPACING.FOOTNOTE,
    lineHeightRatio: calculateLineHeightRatio(
      FONT_SIZES.FOOTNOTE,
      LINE_HEIGHTS.FOOTNOTE
    ),
    variant: getFontVariant(FONT_SIZES.FOOTNOTE),
    maxWidth: MAX_TEXT_WIDTH.FOOTNOTE,
  },
  caption1: {
    fontSize: FONT_SIZES.CAPTION_1,
    lineHeight: LINE_HEIGHTS.CAPTION_1,
    letterSpacing: LETTER_SPACING.CAPTION_1,
    lineHeightRatio: calculateLineHeightRatio(
      FONT_SIZES.CAPTION_1,
      LINE_HEIGHTS.CAPTION_1
    ),
    variant: getFontVariant(FONT_SIZES.CAPTION_1),
  },
  caption2: {
    fontSize: FONT_SIZES.CAPTION_2,
    lineHeight: LINE_HEIGHTS.CAPTION_2,
    letterSpacing: LETTER_SPACING.CAPTION_2,
    lineHeightRatio: calculateLineHeightRatio(
      FONT_SIZES.CAPTION_2,
      LINE_HEIGHTS.CAPTION_2
    ),
    variant: getFontVariant(FONT_SIZES.CAPTION_2),
  },
} as const
