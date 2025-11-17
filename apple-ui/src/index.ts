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

// Icon (visionOS-inspired)
export { Icon, IconGrid } from './components/Icon'
export type {
  IconProps,
  IconGridProps,
  IconAnimation,
  IconSize,
  IconHoverEffect,
} from './components/Icon'

// VisionCard (visionOS-inspired)
export { VisionCard, VisionCardGrid } from './components/VisionCard'
export type {
  VisionCardProps,
  VisionCardGridProps,
  VisionMaterial,
  VisionDepth,
} from './components/VisionCard'

// MenuBar (macOS/visionOS-inspired)
export {
  MenuBar,
  MenuBarContent,
  MenuBarBrand,
  MenuBarSection,
  MenuItem,
  MenuBarDivider,
} from './components/MenuBar'
export type {
  MenuBarProps,
  MenuBarContentProps,
  MenuBarBrandProps,
  MenuBarSectionProps,
  MenuItemProps,
  MenuBarDividerProps,
  MenuBarMaterial,
  MenuBarPosition,
} from './components/MenuBar'

// Widget (Dashboard widgets)
export {
  Widget,
  WidgetHeader,
  WidgetContent,
  WidgetValue,
  WidgetTrend,
  WidgetDivider,
  WidgetFooter,
} from './components/Widget'
export type {
  WidgetProps,
  WidgetHeaderProps,
  WidgetContentProps,
  WidgetValueProps,
  WidgetTrendProps,
  WidgetDividerProps,
  WidgetFooterProps,
  WidgetMaterial,
  WidgetSize,
  WidgetAccent,
} from './components/Widget'

// GlassCanvas (visionOS/tvOS-inspired)
export { GlassCanvas } from './components/GlassCanvas'
export type {
  GlassCanvasProps,
  GlassCanvasVariant,
  CanvasDepth,
} from './components/GlassCanvas'

// FloatingZone (visionOS/tvOS-inspired)
export { FloatingZone } from './components/FloatingZone'
export type {
  FloatingZoneProps,
  ZoneDepth,
  ZoneAnimation,
} from './components/FloatingZone'

// Modal
export { Modal, ModalHeader, ModalContent, ModalFooter } from './components/Modal'
export type {
  ModalProps,
  ModalHeaderProps,
  ModalContentProps,
  ModalFooterProps,
  ModalSize,
} from './components/Modal'

// Switch (iOS-style toggle)
export { Switch } from './components/Switch'
export type { SwitchProps, SwitchSize, SwitchColor } from './components/Switch'

// Toast (Notifications)
export { ToastProvider, useToast, toast } from './components/Toast'
export type { ToastProps, Toast, ToastVariant, ToastPosition } from './components/Toast'

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
