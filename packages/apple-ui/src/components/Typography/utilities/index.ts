/**
 * Typography Utilities Index
 * Exports all typography utilities for easy importing
 */

// Typography Scales and Presets
export {
  typographyScales,
  headingPresets,
  bodyPresets,
  captionPresets,
  linkPresets,
  buttonPresets,
  formPresets,
} from './typography-scales'

export type {
  TypographyPreset,
  TypographyScaleKey,
  HeadingPresetKey,
  BodyPresetKey,
  CaptionPresetKey,
  LinkPresetKey,
  ButtonPresetKey,
  FormPresetKey,
} from './typography-scales'

// Text Helper Functions
export {
  truncateText,
  truncateWords,
  formatAllCaps,
  formatNumber,
  formatCurrency,
  formatDate,
  toTitleCase,
  toSentenceCase,
  calculateReadingTime,
  formatReadingTime,
  normalizeWhitespace,
  stripHtml,
  highlightText,
  getInitials,
  pluralize,
} from './text-helpers'

// Font Metrics and Constants
export {
  SF_PRO_FONT_STACK,
  SF_MONO_FONT_STACK,
  FONT_SIZES,
  LINE_HEIGHTS,
  LETTER_SPACING,
  FONT_WEIGHTS,
  OPTICAL_SIZE_THRESHOLD,
  LABEL_OPACITY,
  OPTIMAL_LINE_LENGTH,
  MAX_TEXT_WIDTH,
  VERTICAL_RHYTHM,
  HEADING_SCALE,
  ACCESSIBILITY,
  USAGE_GUIDELINES,
  TYPOGRAPHY_METRICS,
  calculateLineHeightRatio,
  calculateOptimalWidth,
  getFontVariant,
  trackingToEm,
  getRequiredContrast,
} from './font-metrics'
