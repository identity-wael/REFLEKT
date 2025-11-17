import React from 'react'
import { cn } from '../../utils'
import styles from './Widget.module.css'

/**
 * Widget Material Types
 */
export type WidgetMaterial =
  | 'glass'          // Classic glassmorphism
  | 'frosted'        // Frosted glass
  | 'translucent'    // Ultra-translucent
  | 'vibrant'        // Vibrant with accent color

/**
 * Widget Sizes
 */
export type WidgetSize = 'sm' | 'md' | 'lg' | 'xl'

/**
 * Widget Accent Colors
 */
export type WidgetAccent =
  | 'blue'
  | 'green'
  | 'orange'
  | 'red'
  | 'purple'
  | 'pink'
  | 'teal'

export interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Glass material variant
   * @default 'glass'
   */
  material?: WidgetMaterial

  /**
   * Widget size
   * @default 'md'
   */
  size?: WidgetSize

  /**
   * Accent color for vibrant material
   */
  accent?: WidgetAccent

  /**
   * Enable hover lift effect
   * @default true
   */
  hoverable?: boolean

  /**
   * Enable auto-refresh animation
   * @default false
   */
  refreshing?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Widget content
   */
  children: React.ReactNode
}

/**
 * Widget Component
 *
 * Modular widget with glass effects for displaying dynamic data.
 * Perfect for dashboards, stats, and real-time information.
 *
 * Features:
 * - Multiple glass materials
 * - Customizable sizes
 * - Accent colors
 * - Hover effects
 * - Loading/refreshing states
 * - Auto dark mode
 *
 * @example
 * ```tsx
 * <Widget material="frosted" size="md" accent="blue">
 *   <WidgetHeader title="Stocks" subtitle="Live" />
 *   <WidgetContent>
 *     <WidgetValue>$1,234.56</WidgetValue>
 *     <WidgetTrend direction="up">+2.5%</WidgetTrend>
 *   </WidgetContent>
 * </Widget>
 * ```
 */
export const Widget = React.forwardRef<HTMLDivElement, WidgetProps>(
  (
    {
      material = 'glass',
      size = 'md',
      accent,
      hoverable = true,
      refreshing = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.widget,
          styles[`material-${material}`],
          styles[`size-${size}`],
          accent && styles[`accent-${accent}`],
          hoverable && styles.hoverable,
          refreshing && styles.refreshing,
          className
        )}
        {...props}
      >
        {refreshing && (
          <div className={styles.refreshIndicator}>
            <div className={styles.refreshSpinner} />
          </div>
        )}
        {children}
      </div>
    )
  }
)

Widget.displayName = 'Widget'

/**
 * WidgetHeader Component
 *
 * Header section with title and subtitle.
 */
export interface WidgetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Widget title
   */
  title: string

  /**
   * Optional subtitle
   */
  subtitle?: string

  /**
   * Optional icon
   */
  icon?: React.ReactNode

  className?: string
}

export const WidgetHeader = React.forwardRef<HTMLDivElement, WidgetHeaderProps>(
  ({ title, subtitle, icon, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.widgetHeader, className)} {...props}>
        <div className={styles.widgetHeaderText}>
          <div className={styles.widgetTitle}>{title}</div>
          {subtitle && <div className={styles.widgetSubtitle}>{subtitle}</div>}
        </div>
        {icon && <div className={styles.widgetIcon}>{icon}</div>}
      </div>
    )
  }
)

WidgetHeader.displayName = 'WidgetHeader'

/**
 * WidgetContent Component
 *
 * Main content area.
 */
export interface WidgetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content alignment
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end'

  className?: string
  children: React.ReactNode
}

export const WidgetContent = React.forwardRef<HTMLDivElement, WidgetContentProps>(
  ({ align = 'start', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.widgetContent, styles[`align-${align}`], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

WidgetContent.displayName = 'WidgetContent'

/**
 * WidgetValue Component
 *
 * Large value display (numbers, stats).
 */
export interface WidgetValueProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Value color
   */
  color?: 'default' | 'positive' | 'negative' | 'neutral'

  className?: string
  children: React.ReactNode
}

export const WidgetValue = React.forwardRef<HTMLDivElement, WidgetValueProps>(
  ({ color = 'default', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.widgetValue, styles[`color-${color}`], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

WidgetValue.displayName = 'WidgetValue'

/**
 * WidgetTrend Component
 *
 * Trend indicator with direction.
 */
export interface WidgetTrendProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Trend direction
   */
  direction: 'up' | 'down' | 'neutral'

  className?: string
  children: React.ReactNode
}

export const WidgetTrend = React.forwardRef<HTMLDivElement, WidgetTrendProps>(
  ({ direction, className, children, ...props }, ref) => {
    const arrow = direction === 'up' ? '↑' : direction === 'down' ? '↓' : '→'

    return (
      <div
        ref={ref}
        className={cn(styles.widgetTrend, styles[`direction-${direction}`], className)}
        {...props}
      >
        <span className={styles.trendArrow}>{arrow}</span>
        <span className={styles.trendValue}>{children}</span>
      </div>
    )
  }
)

WidgetTrend.displayName = 'WidgetTrend'

/**
 * WidgetDivider Component
 *
 * Visual divider.
 */
export interface WidgetDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const WidgetDivider = React.forwardRef<HTMLDivElement, WidgetDividerProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn(styles.widgetDivider, className)} {...props} />
  }
)

WidgetDivider.displayName = 'WidgetDivider'

/**
 * WidgetFooter Component
 *
 * Footer section.
 */
export interface WidgetFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const WidgetFooter = React.forwardRef<HTMLDivElement, WidgetFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.widgetFooter, className)} {...props}>
        {children}
      </div>
    )
  }
)

WidgetFooter.displayName = 'WidgetFooter'
