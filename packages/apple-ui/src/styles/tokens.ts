/**
 * Apple Design System Tokens
 * Based on Apple Human Interface Guidelines (2025)
 * https://developer.apple.com/design/human-interface-guidelines
 */

/**
 * Color System
 * Apple's refined color palette for modern interfaces
 * Supports both light and dark modes
 */
export const colors = {
  // Primary Colors - Apple Blue
  primary: {
    DEFAULT: '#007AFF',
    light: '#5AC8FA',
    dark: '#0A84FF',
  },

  // System Grays (Light Mode)
  gray: {
    50: '#F9F9F9',
    100: '#F2F2F7',
    200: '#E5E5EA',
    300: '#D1D1D6',
    400: '#C7C7CC',
    500: '#AEAEB2',
    600: '#8E8E93',
    700: '#636366',
    800: '#48484A',
    900: '#3A3A3C',
  },

  // System Colors
  system: {
    red: '#FF3B30',
    orange: '#FF9500',
    yellow: '#FFCC00',
    green: '#34C759',
    mint: '#00C7BE',
    teal: '#30B0C7',
    cyan: '#32ADE6',
    blue: '#007AFF',
    indigo: '#5856D6',
    purple: '#AF52DE',
    pink: '#FF2D55',
    brown: '#A2845E',
  },

  // Dark Mode Variants
  systemDark: {
    red: '#FF453A',
    orange: '#FF9F0A',
    yellow: '#FFD60A',
    green: '#32D74B',
    mint: '#63E6E2',
    teal: '#40CBE0',
    cyan: '#64D2FF',
    blue: '#0A84FF',
    indigo: '#5E5CE6',
    purple: '#BF5AF2',
    pink: '#FF375F',
    brown: '#AC8E68',
  },

  // Background Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F2F2F7',
    tertiary: '#FFFFFF',
    grouped: {
      primary: '#F2F2F7',
      secondary: '#FFFFFF',
      tertiary: '#F2F2F7',
    },
  },

  // Background Colors (Dark Mode)
  backgroundDark: {
    primary: '#000000',
    secondary: '#1C1C1E',
    tertiary: '#2C2C2E',
    grouped: {
      primary: '#000000',
      secondary: '#1C1C1E',
      tertiary: '#2C2C2E',
    },
  },

  // Label Colors
  label: {
    primary: '#000000',
    secondary: 'rgba(60, 60, 67, 0.6)',
    tertiary: 'rgba(60, 60, 67, 0.3)',
    quaternary: 'rgba(60, 60, 67, 0.18)',
  },

  // Label Colors (Dark Mode)
  labelDark: {
    primary: '#FFFFFF',
    secondary: 'rgba(235, 235, 245, 0.6)',
    tertiary: 'rgba(235, 235, 245, 0.3)',
    quaternary: 'rgba(235, 235, 245, 0.18)',
  },

  // Fill Colors (for buttons, controls)
  fill: {
    primary: 'rgba(120, 120, 128, 0.2)',
    secondary: 'rgba(120, 120, 128, 0.16)',
    tertiary: 'rgba(118, 118, 128, 0.12)',
    quaternary: 'rgba(116, 116, 128, 0.08)',
  },

  // Fill Colors (Dark Mode)
  fillDark: {
    primary: 'rgba(120, 120, 128, 0.36)',
    secondary: 'rgba(120, 120, 128, 0.32)',
    tertiary: 'rgba(118, 118, 128, 0.24)',
    quaternary: 'rgba(118, 118, 128, 0.18)',
  },
} as const

/**
 * Typography System
 * Based on SF Pro font family with Apple's typographic scale
 * Follows optical sizing principles (SF Text <20pt, SF Display >=20pt)
 */
export const typography = {
  // Font Families
  fontFamily: {
    // Fallback to system fonts when SF Pro is not available
    system: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
    mono: 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
  },

  // Font Sizes (iOS/macOS Text Styles)
  fontSize: {
    // Large Titles
    largeTitle: '34px',
    // Titles
    title1: '28px',
    title2: '22px',
    title3: '20px',
    // Body
    body: '17px',
    callout: '16px',
    subheadline: '15px',
    footnote: '13px',
    caption1: '12px',
    caption2: '11px',
  },

  // Font Weights (SF Pro 9 weights)
  fontWeight: {
    ultralight: 100,
    thin: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800,
    black: 900,
  },

  // Line Heights (based on Apple HIG)
  lineHeight: {
    largeTitle: '41px',
    title1: '34px',
    title2: '28px',
    title3: '25px',
    body: '22px',
    callout: '21px',
    subheadline: '20px',
    footnote: '18px',
    caption1: '16px',
    caption2: '13px',
  },

  // Letter Spacing (tracking values from Apple HIG)
  letterSpacing: {
    largeTitle: '0.37px',
    title1: '0.36px',
    title2: '0.35px',
    title3: '0.38px',
    body: '-0.43px',
    callout: '-0.32px',
    subheadline: '-0.24px',
    footnote: '-0.08px',
    caption1: '0px',
    caption2: '0.06px',
  },
} as const

/**
 * Spacing System
 * Apple's spacing scale for consistent layouts
 */
export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const

/**
 * Border Radius
 * Apple's corner radius system
 */
export const borderRadius = {
  none: '0px',
  sm: '4px',
  DEFAULT: '8px',
  md: '10px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '24px',
  full: '9999px',
} as const

/**
 * Shadows & Elevation
 * Apple's depth and layering system with subtle shadows
 */
export const shadows = {
  // Light Mode Shadows
  sm: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
  DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06)',
  md: '0 10px 15px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.05)',
  lg: '0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.04)',
  xl: '0 25px 50px rgba(0, 0, 0, 0.08)',

  // Dark Mode Shadows (more pronounced)
  dark: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)',
    DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.5)',
    md: '0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3)',
    lg: '0 20px 25px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.4)',
    xl: '0 25px 50px rgba(0, 0, 0, 0.6)',
  },

  // Inner Shadow (for inset effects)
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
} as const

/**
 * Blur Effects
 * Apple's glassmorphism and backdrop blur values
 */
export const blur = {
  none: '0',
  sm: '4px',
  DEFAULT: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '64px',
} as const

/**
 * Transitions & Animations
 * Apple's smooth, natural motion design
 */
export const transitions = {
  duration: {
    fast: '150ms',
    DEFAULT: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  timing: {
    // Apple's signature easing curve
    DEFAULT: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0.0, 1, 1)',
    out: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    // Apple's spring-like easing
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
} as const

/**
 * Z-Index Scale
 * Consistent layering system
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const

/**
 * Breakpoints
 * Responsive design breakpoints
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const
