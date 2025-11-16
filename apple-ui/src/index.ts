/**
 * @reflekt/apple-ui
 *
 * Apple-inspired UI component library for React
 * Based on Apple's Human Interface Guidelines
 *
 * @version 0.1.0
 * @author REFLEKT
 */

// === COMPONENTS ===

// Typography
export { Typography } from './components/Typography'
export type {
  TypographyProps,
  TextStyle,
  FontWeight,
  LabelColor,
} from './components/Typography'

// Button
export { Button } from './components/Button'
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button'

// Card
export {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from './components/Card'
export type {
  CardProps,
  CardHeaderProps,
  CardContentProps,
  CardFooterProps,
  CardVariant,
  CardPadding,
  CardRadius,
} from './components/Card'

// Input
export { Input } from './components/Input'
export type { InputProps, InputVariant, InputSize } from './components/Input'

// Navigation
export {
  Navigation,
  NavContent,
  NavBrand,
  NavLinks,
  NavLink,
} from './components/Navigation'
export type {
  NavigationProps,
  NavContentProps,
  NavBrandProps,
  NavLinksProps,
  NavLinkProps,
  NavPosition,
  NavVariant,
} from './components/Navigation'

// === DESIGN TOKENS ===

export {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  blur,
  transitions,
  zIndex,
  breakpoints,
} from './styles/tokens'

// === UTILITIES ===

export { cn } from './utils'
