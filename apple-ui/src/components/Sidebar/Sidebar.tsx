import React from 'react'
import { cn } from '../../utils'
import styles from './Sidebar.module.css'

/**
 * Sidebar Variants
 */
export type SidebarVariant = 'default' | 'collapsible' | 'overlay'

/**
 * Sidebar Width Options
 */
export type SidebarWidth = 'sm' | 'md' | 'lg'

/**
 * Sidebar Position
 */
export type SidebarPosition = 'left' | 'right'

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant
   * @default 'default'
   */
  variant?: SidebarVariant

  /**
   * Sidebar width
   * @default 'md'
   */
  width?: SidebarWidth

  /**
   * Controlled collapsed state
   */
  collapsed?: boolean

  /**
   * Callback when sidebar is toggled
   */
  onToggle?: () => void

  /**
   * Position of the sidebar
   * @default 'left'
   */
  position?: SidebarPosition

  /**
   * Enable overlay mode (typically for mobile)
   * @default false
   */
  overlay?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Sidebar content
   */
  children: React.ReactNode
}

export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  className?: string
  children: React.ReactNode
}

export interface SidebarItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  active?: boolean
  icon?: React.ReactNode
  label: string
  href?: string
  className?: string
}

export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

/**
 * Sidebar Component
 *
 * macOS-style sidebar navigation with glass effect and smooth animations.
 *
 * @example
 * ```tsx
 * <Sidebar variant="collapsible" collapsed={isCollapsed} onToggle={handleToggle}>
 *   <SidebarHeader>
 *     <h2>Navigation</h2>
 *   </SidebarHeader>
 *   <SidebarContent>
 *     <SidebarSection title="Main">
 *       <SidebarItem icon={<HomeIcon />} label="Home" active />
 *       <SidebarItem icon={<SettingsIcon />} label="Settings" />
 *     </SidebarSection>
 *   </SidebarContent>
 *   <SidebarFooter>
 *     <SidebarItem icon={<UserIcon />} label="Profile" />
 *   </SidebarFooter>
 * </Sidebar>
 * ```
 */
export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      variant = 'default',
      width = 'md',
      collapsed = false,
      onToggle,
      position = 'left',
      overlay = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {overlay && !collapsed && (
          <div
            className={styles.overlay}
            onClick={onToggle}
            aria-hidden="true"
          />
        )}
        <aside
          ref={ref}
          className={cn(
            styles.sidebar,
            styles[`variant-${variant}`],
            styles[`width-${width}`],
            styles[`position-${position}`],
            collapsed && styles.collapsed,
            overlay && styles.overlayMode,
            className
          )}
          aria-label="Sidebar navigation"
          {...props}
        >
          <div className={styles.inner}>{children}</div>
        </aside>
      </>
    )
  }
)

Sidebar.displayName = 'Sidebar'

/**
 * SidebarHeader Component
 */
export const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.header, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

SidebarHeader.displayName = 'SidebarHeader'

/**
 * SidebarContent Component
 */
export const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.content, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

SidebarContent.displayName = 'SidebarContent'

/**
 * SidebarSection Component
 */
export const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ title, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.section, className)}
        {...props}
      >
        {title && (
          <div className={styles.sectionTitle}>
            {title}
          </div>
        )}
        <div className={styles.sectionContent}>
          {children}
        </div>
      </div>
    )
  }
)

SidebarSection.displayName = 'SidebarSection'

/**
 * SidebarItem Component
 */
export const SidebarItem = React.forwardRef<HTMLButtonElement, SidebarItemProps>(
  ({ active = false, icon, label, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          styles.item,
          active && styles.itemActive,
          className
        )}
        aria-current={active ? 'page' : undefined}
        {...props}
      >
        {icon && (
          <span className={styles.itemIcon} aria-hidden="true">
            {icon}
          </span>
        )}
        <span className={styles.itemLabel}>{label}</span>
      </button>
    )
  }
)

SidebarItem.displayName = 'SidebarItem'

/**
 * SidebarFooter Component
 */
export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.footer, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

SidebarFooter.displayName = 'SidebarFooter'
