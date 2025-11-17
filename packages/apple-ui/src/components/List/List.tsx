import React from 'react'
import { cn } from '../../utils'
import styles from './List.module.css'

/**
 * List Variants
 */
export type ListVariant = 'default' | 'inset' | 'plain'

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant
   * @default 'default'
   */
  variant?: ListVariant

  /**
   * Show dividers between items
   * @default true
   */
  divided?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * List content
   */
  children: React.ReactNode
}

export interface ListItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Whether the item is navigable (shows chevron)
   */
  navigable?: boolean

  /**
   * Whether the item is disabled
   */
  disabled?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Item content
   */
  children: React.ReactNode

  /**
   * Render as a different element
   */
  as?: 'button' | 'div' | 'a'

  /**
   * Link href (when as="a")
   */
  href?: string
}

export interface ListItemTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Primary text
   */
  primary: React.ReactNode

  /**
   * Secondary text (description)
   */
  secondary?: React.ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}

export interface ListItemIconProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export interface ListItemActionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export interface ListSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export interface ListSectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

/**
 * List Component
 *
 * iOS Settings-style list with support for sections, icons, and actions.
 *
 * @example
 * ```tsx
 * <List variant="inset">
 *   <ListSection>
 *     <ListSectionHeader>Settings</ListSectionHeader>
 *     <ListItem navigable>
 *       <ListItemIcon><SettingsIcon /></ListItemIcon>
 *       <ListItemText
 *         primary="General"
 *         secondary="Notifications, languages, and more"
 *       />
 *     </ListItem>
 *     <ListItem>
 *       <ListItemText primary="Dark Mode" />
 *       <ListItemAction>
 *         <Switch />
 *       </ListItemAction>
 *     </ListItem>
 *   </ListSection>
 * </List>
 * ```
 */
export const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ variant = 'default', divided = true, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.list,
          styles[`variant-${variant}`],
          divided && styles.divided,
          className
        )}
        role="list"
        {...props}
      >
        {children}
      </div>
    )
  }
)

List.displayName = 'List'

/**
 * ListItem Component
 */
export const ListItem = React.forwardRef<HTMLButtonElement, ListItemProps>(
  (
    {
      navigable = false,
      disabled = false,
      className,
      children,
      as = 'button',
      href,
      ...props
    },
    ref
  ) => {
    const Component = as as any

    return (
      <Component
        ref={ref}
        className={cn(
          styles.item,
          navigable && styles.navigable,
          disabled && styles.disabled,
          className
        )}
        disabled={as === 'button' ? disabled : undefined}
        href={as === 'a' ? href : undefined}
        role={as === 'div' ? 'listitem' : undefined}
        {...props}
      >
        <div className={styles.itemContent}>{children}</div>
        {navigable && (
          <div className={styles.chevron} aria-hidden="true">
            <ChevronRightIcon />
          </div>
        )}
      </Component>
    )
  }
)

ListItem.displayName = 'ListItem'

/**
 * ListItemText Component
 */
export const ListItemText = React.forwardRef<HTMLDivElement, ListItemTextProps>(
  ({ primary, secondary, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.itemText, className)} {...props}>
        <div className={styles.itemPrimary}>{primary}</div>
        {secondary && <div className={styles.itemSecondary}>{secondary}</div>}
      </div>
    )
  }
)

ListItemText.displayName = 'ListItemText'

/**
 * ListItemIcon Component
 */
export const ListItemIcon = React.forwardRef<HTMLDivElement, ListItemIconProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.itemIcon, className)} {...props}>
        {children}
      </div>
    )
  }
)

ListItemIcon.displayName = 'ListItemIcon'

/**
 * ListItemAction Component
 */
export const ListItemAction = React.forwardRef<HTMLDivElement, ListItemActionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.itemAction, className)} {...props}>
        {children}
      </div>
    )
  }
)

ListItemAction.displayName = 'ListItemAction'

/**
 * ListSection Component
 */
export const ListSection = React.forwardRef<HTMLDivElement, ListSectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.section, className)} {...props}>
        {children}
      </div>
    )
  }
)

ListSection.displayName = 'ListSection'

/**
 * ListSectionHeader Component
 */
export const ListSectionHeader = React.forwardRef<HTMLDivElement, ListSectionHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.sectionHeader, className)} {...props}>
        {children}
      </div>
    )
  }
)

ListSectionHeader.displayName = 'ListSectionHeader'

// Chevron Icon
const ChevronRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M5 2L10 7L5 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
