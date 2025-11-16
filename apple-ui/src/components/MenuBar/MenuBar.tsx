import React from 'react'
import { cn } from '../../utils'
import styles from './MenuBar.module.css'

/**
 * MenuBar Material Types (latest Apple design)
 */
export type MenuBarMaterial =
  | 'glass'          // Classic glassmorphism
  | 'frosted-heavy'  // Heavy frosted glass (macOS Sonoma style)
  | 'translucent'    // Ultra-translucent (visionOS style)
  | 'vibrant'        // Vibrant with color tint

/**
 * MenuBar Position
 */
export type MenuBarPosition = 'fixed' | 'sticky' | 'static'

export interface MenuBarProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Glass material variant
   * @default 'frosted-heavy'
   */
  material?: MenuBarMaterial

  /**
   * Position type
   * @default 'fixed'
   */
  position?: MenuBarPosition

  /**
   * Enable dynamic blur on scroll
   * @default true
   */
  blurOnScroll?: boolean

  /**
   * Show border bottom
   * @default true
   */
  showBorder?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * MenuBar content
   */
  children: React.ReactNode
}

/**
 * MenuBar Component
 *
 * Apple-style menu bar with advanced glassmorphism effects.
 * Inspired by macOS Sonoma and visionOS design language.
 *
 * Features:
 * - Ultra-heavy frosted glass effect
 * - Dynamic blur intensity on scroll
 * - Multiple material variants
 * - Vibrant color tinting
 * - Auto dark mode support
 * - Smooth transitions
 *
 * @example
 * ```tsx
 * <MenuBar material="frosted-heavy" position="fixed">
 *   <MenuBarContent>
 *     <MenuBarBrand>REFLEKT</MenuBarBrand>
 *     <MenuBarSection>
 *       <MenuItem>File</MenuItem>
 *       <MenuItem>Edit</MenuItem>
 *       <MenuItem>View</MenuItem>
 *     </MenuBarSection>
 *   </MenuBarContent>
 * </MenuBar>
 * ```
 */
export const MenuBar = React.forwardRef<HTMLElement, MenuBarProps>(
  (
    {
      material = 'frosted-heavy',
      position = 'fixed',
      blurOnScroll = true,
      showBorder = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
      if (!blurOnScroll) return

      const handleScroll = () => {
        setScrolled(window.scrollY > 0)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }, [blurOnScroll])

    return (
      <nav
        ref={ref}
        className={cn(
          styles.menuBar,
          styles[`material-${material}`],
          styles[`position-${position}`],
          scrolled && styles.scrolled,
          showBorder && styles.bordered,
          className
        )}
        {...props}
      >
        {children}
      </nav>
    )
  }
)

MenuBar.displayName = 'MenuBar'

/**
 * MenuBarContent Component
 *
 * Container for menu bar content.
 */
export interface MenuBarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const MenuBarContent = React.forwardRef<HTMLDivElement, MenuBarContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.menuBarContent, className)} {...props}>
        {children}
      </div>
    )
  }
)

MenuBarContent.displayName = 'MenuBarContent'

/**
 * MenuBarBrand Component
 *
 * Brand/logo section.
 */
export interface MenuBarBrandProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const MenuBarBrand = React.forwardRef<HTMLDivElement, MenuBarBrandProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.menuBarBrand, className)} {...props}>
        {children}
      </div>
    )
  }
)

MenuBarBrand.displayName = 'MenuBarBrand'

/**
 * MenuBarSection Component
 *
 * Section for grouping menu items.
 */
export interface MenuBarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Alignment
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end'

  className?: string
  children: React.ReactNode
}

export const MenuBarSection = React.forwardRef<HTMLDivElement, MenuBarSectionProps>(
  ({ align = 'start', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.menuBarSection, styles[`align-${align}`], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

MenuBarSection.displayName = 'MenuBarSection'

/**
 * MenuItem Component
 *
 * Individual menu item.
 */
export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Active/selected state
   */
  active?: boolean

  /**
   * Show indicator dot
   */
  showIndicator?: boolean

  /**
   * Icon before text
   */
  icon?: React.ReactNode

  className?: string
  children: React.ReactNode
}

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ active, showIndicator, icon, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          styles.menuItem,
          active && styles.menuItemActive,
          className
        )}
        {...props}
      >
        {icon && <span className={styles.menuItemIcon}>{icon}</span>}
        <span className={styles.menuItemText}>{children}</span>
        {showIndicator && <span className={styles.menuItemIndicator} />}
      </button>
    )
  }
)

MenuItem.displayName = 'MenuItem'

/**
 * MenuBarDivider Component
 *
 * Visual divider between menu sections.
 */
export interface MenuBarDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const MenuBarDivider = React.forwardRef<HTMLDivElement, MenuBarDividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.menuBarDivider, className)} {...props} />
    )
  }
)

MenuBarDivider.displayName = 'MenuBarDivider'
