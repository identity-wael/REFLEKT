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

// Typography (Complete Typography System)
export {
  Typography,
  Heading,
  Body,
  Caption,
  Label,
  // Typography Utilities
  typographyScales,
  headingPresets,
  bodyPresets,
  captionPresets,
  linkPresets,
  buttonPresets,
  formPresets,
  // Text Helpers
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
  // Font Metrics
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
} from './components/Typography'

export type {
  TypographyProps,
  TextStyle,
  FontWeight,
  LabelColor,
  HeadingProps,
  HeadingLevel,
  BodyProps,
  CaptionProps,
  LabelProps,
  TypographyPreset,
  TypographyScaleKey,
  HeadingPresetKey,
  BodyPresetKey,
  CaptionPresetKey,
  LinkPresetKey,
  ButtonPresetKey,
  FormPresetKey,
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

// Select
export { Select } from './components/Select'
export type { SelectProps, SelectOption, SelectSize, SelectVariant } from './components/Select'

// Tabs
export { Tabs, TabPanel } from './components/Tabs'
export type { TabsProps, TabPanelProps, TabItem, TabsVariant, TabsSize } from './components/Tabs'

// Checkbox
export { Checkbox } from './components/Checkbox'
export type { CheckboxProps, CheckboxSize } from './components/Checkbox'

// Radio
export { Radio, RadioGroup } from './components/Radio'
export type { RadioProps, RadioGroupProps, RadioSize } from './components/Radio'

// Sheet (iOS bottom sheet)
export { Sheet, SheetHeader, SheetTitle, SheetBody, SheetFooter } from './components/Sheet'
export type {
  SheetProps,
  SheetHeaderProps,
  SheetTitleProps,
  SheetBodyProps,
  SheetFooterProps,
  SheetSize,
  SheetPosition,
} from './components/Sheet'

// Progress
export { Progress } from './components/Progress'
export type { ProgressProps, ProgressVariant, ProgressSize, ProgressColor } from './components/Progress'

// Badge
export { Badge } from './components/Badge'
export type { BadgeProps, BadgeVariant, BadgeColor, BadgeSize, BadgePosition } from './components/Badge'

// Avatar
export { Avatar } from './components/Avatar'
export type { AvatarProps, AvatarSize, AvatarShape, AvatarStatus } from './components/Avatar'

// Chip
export { Chip } from './components/Chip'
export type { ChipProps, ChipVariant, ChipColor, ChipSize } from './components/Chip'

// Skeleton
export { Skeleton } from './components/Skeleton'
export type { SkeletonProps, SkeletonVariant, SkeletonSize } from './components/Skeleton'

// Slider
export { Slider } from './components/Slider'
export type { SliderProps, SliderSize, SliderColor, SliderMark } from './components/Slider'

// Textarea
export { Textarea } from './components/Textarea'
export type { TextareaProps, TextareaVariant, TextareaSize, TextareaResize } from './components/Textarea'

// Popover
export { Popover, PopoverTrigger, PopoverContent } from './components/Popover'
export type { PopoverProps, PopoverTriggerProps, PopoverContentProps, PopoverPosition, PopoverTriggerType } from './components/Popover'

// Tooltip
export { Tooltip } from './components/Tooltip'
export type { TooltipProps, TooltipPosition } from './components/Tooltip'

// Sidebar
export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarSection,
  SidebarItem,
  SidebarFooter,
} from './components/Sidebar'
export type {
  SidebarProps,
  SidebarHeaderProps,
  SidebarContentProps,
  SidebarSectionProps,
  SidebarItemProps,
  SidebarFooterProps,
  SidebarVariant,
  SidebarWidth,
  SidebarPosition,
} from './components/Sidebar'

// Breadcrumbs
export { Breadcrumbs } from './components/Breadcrumbs'
export type {
  BreadcrumbsProps,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbSize,
} from './components/Breadcrumbs'

// Pagination
export { Pagination } from './components/Pagination'
export type {
  PaginationProps,
  PaginationVariant,
  PaginationSize,
} from './components/Pagination'

// List (iOS Settings style)
export {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAction,
  ListSection,
  ListSectionHeader,
} from './components/List'
export type {
  ListProps,
  ListItemProps,
  ListItemTextProps,
  ListItemIconProps,
  ListItemActionProps,
  ListSectionProps,
  ListSectionHeaderProps,
  ListVariant,
} from './components/List'

// Stack (VStack/HStack)
export { Stack, VStack, HStack } from './components/Stack'
export type {
  StackProps,
  StackDirection,
  StackSpacing,
  StackAlign,
} from './components/Stack'

// Divider
export { Divider } from './components/Divider'
export type {
  DividerProps,
  DividerOrientation,
  DividerVariant,
  DividerThickness,
} from './components/Divider'

// Spacer
export { Spacer } from './components/Spacer'
export type {
  SpacerProps,
  SpacerSize,
  SpacerDirection,
} from './components/Spacer'

// Grid
export { Grid, GridItem } from './components/Grid'
export type {
  GridProps,
  GridItemProps,
  GridColumns,
  GridGap,
  GridAutoFlow,
} from './components/Grid'

// Section
export {
  Section,
  SectionHeader,
  SectionContent,
  SectionFooter,
} from './components/Section'
export type {
  SectionProps,
  SectionHeaderProps,
  SectionContentProps,
  SectionFooterProps,
  SectionVariant,
  SectionPadding,
} from './components/Section'

// Table
export {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
  TableFooter,
} from './components/Table'
export type {
  TableProps,
  TableRowProps,
  TableCellProps,
  TableBodyProps,
  TableHeaderProps,
  TableFooterProps,
  TableColumn,
  TableVariant,
  TableSize,
  SortDirection,
  TablePagination,
} from './components/Table'

// Alert
export { Alert } from './components/Alert'
export type { AlertProps, AlertVariant } from './components/Alert'

// ContextMenu
export { ContextMenu } from './components/ContextMenu'
export type { ContextMenuProps, ContextMenuItem } from './components/ContextMenu'

// Picker
export { Picker } from './components/Picker'
export type { PickerProps, PickerOption, PickerSize } from './components/Picker'

// CommandPalette
export { CommandPalette } from './components/CommandPalette'
export type { CommandPaletteProps, Command, CommandCategory } from './components/CommandPalette'

// AppIcon
export { AppIcon } from './components/AppIcon'
export type { AppIconProps, AppIconSize, AppIconShape } from './components/AppIcon'

// LiveActivity
export { LiveActivity } from './components/LiveActivity'
export type { LiveActivityProps } from './components/LiveActivity'

// Dock
export { Dock } from './components/Dock'
export type { DockProps, DockItem, DockPosition, DockSize } from './components/Dock'

// DynamicIsland
export { DynamicIsland } from './components/DynamicIsland'
export type { DynamicIslandProps, DynamicIslandState } from './components/DynamicIsland'

// ControlPanel
export { ControlPanel } from './components/ControlPanel'
export type { ControlPanelProps, ControlItem, ControlType } from './components/ControlPanel'

// Ornament
export { Ornament } from './components/Ornament'
export type { OrnamentProps, OrnamentPosition } from './components/Ornament'

// VisionWindow
export { VisionWindow } from './components/VisionWindow'
export type { VisionWindowProps, VisionWindowMaterial } from './components/VisionWindow'

// SpatialPanel
export { SpatialPanel } from './components/SpatialPanel'
export type { SpatialPanelProps } from './components/SpatialPanel'

// ImmersiveSpace
export { ImmersiveSpace } from './components/ImmersiveSpace'
export type { ImmersiveSpaceProps } from './components/ImmersiveSpace'

// Image (Enhanced)
export { Image } from './components/Image'
export type { ImageProps, ImageObjectFit, ImageLoading, ImageRounded } from './components/Image'

// VideoPlayer
export { VideoPlayer } from './components/VideoPlayer'
export type { VideoPlayerProps } from './components/VideoPlayer'

// AudioPlayer
export { AudioPlayer } from './components/AudioPlayer'
export type { AudioPlayerProps } from './components/AudioPlayer'

// Gallery
export { Gallery } from './components/Gallery'
export type { GalleryProps, GalleryImage, GalleryLayout, GalleryAspectRatio } from './components/Gallery'

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
