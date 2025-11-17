import React from 'react'
import { cn } from '../../utils'
import styles from './Breadcrumbs.module.css'

/**
 * Breadcrumb Separator Types
 */
export type BreadcrumbSeparator = 'slash' | 'chevron' | 'dot' | 'custom'

/**
 * Breadcrumb Size
 */
export type BreadcrumbSize = 'sm' | 'md' | 'lg'

/**
 * Breadcrumb Item
 */
export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
  onClick?: () => void
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Array of breadcrumb items
   */
  items: BreadcrumbItem[]

  /**
   * Separator type
   * @default 'chevron'
   */
  separator?: BreadcrumbSeparator

  /**
   * Custom separator element (when separator is 'custom')
   */
  customSeparator?: React.ReactNode

  /**
   * Maximum number of items to show before collapsing
   */
  maxItems?: number

  /**
   * Size variant
   * @default 'md'
   */
  size?: BreadcrumbSize

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Default Separators
 */
const separators = {
  slash: <span className={styles.separator}>/</span>,
  chevron: (
    <svg
      className={styles.separator}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 3L11 8L6 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  dot: <span className={styles.separator}>•</span>,
}

/**
 * Breadcrumbs Component
 *
 * Navigation breadcrumb trail with auto-collapse and multiple separator options.
 *
 * @example
 * ```tsx
 * <Breadcrumbs
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' },
 *     { label: 'MacBook Pro' }
 *   ]}
 *   separator="chevron"
 *   maxItems={4}
 * />
 * ```
 */
export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      items,
      separator = 'chevron',
      customSeparator,
      maxItems,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    // Determine which separator to use
    const separatorElement =
      separator === 'custom' && customSeparator
        ? customSeparator
        : separators[separator as keyof typeof separators]

    // Handle collapsing logic
    const shouldCollapse = maxItems && items.length > maxItems
    let displayItems = items

    if (shouldCollapse) {
      // Show first item, ellipsis, last (maxItems - 1) items
      const itemsToShow = maxItems - 1
      const endItems = items.slice(-itemsToShow)
      displayItems = [items[0], { label: '...' }, ...endItems]
    }

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn(styles.breadcrumbs, styles[`size-${size}`], className)}
        {...props}
      >
        <ol className={styles.list}>
          {displayItems.map((item, index) => {
            const isLast = index === displayItems.length - 1
            const isEllipsis = item.label === '...'

            return (
              <li key={index} className={styles.item}>
                {isEllipsis ? (
                  <span className={styles.ellipsis} aria-hidden="true">
                    ...
                  </span>
                ) : isLast ? (
                  <span className={styles.current} aria-current="page">
                    {item.icon && (
                      <span className={styles.icon} aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </span>
                ) : item.href || item.onClick ? (
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    className={styles.link}
                  >
                    {item.icon && (
                      <span className={styles.icon} aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </a>
                ) : (
                  <span className={styles.text}>
                    {item.icon && (
                      <span className={styles.icon} aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <span className={styles.separatorWrapper} aria-hidden="true">
                    {separatorElement}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }
)

Breadcrumbs.displayName = 'Breadcrumbs'
