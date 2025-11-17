import React from 'react'
import { cn } from '../../utils'
import styles from './Section.module.css'

/**
 * Section Variants
 */
export type SectionVariant = 'default' | 'card' | 'bordered'

/**
 * Section Padding
 */
export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Visual variant
   * @default 'default'
   */
  variant?: SectionVariant

  /**
   * Section title
   */
  title?: string

  /**
   * Section subtitle
   */
  subtitle?: string

  /**
   * Action element for header (e.g., button, link)
   */
  headerAction?: React.ReactNode

  /**
   * Footer content
   */
  footerContent?: React.ReactNode

  /**
   * Padding size
   * @default 'md'
   */
  padding?: SectionPadding

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Section content
   */
  children: React.ReactNode
}

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export interface SectionFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

/**
 * Section Component
 *
 * Content section with optional header, footer, and multiple styling variants.
 *
 * @example
 * ```tsx
 * <Section
 *   variant="card"
 *   title="Features"
 *   subtitle="Discover what makes us unique"
 *   headerAction={<Button>View All</Button>}
 * >
 *   <p>Section content goes here</p>
 * </Section>
 *
 * <Section variant="bordered">
 *   <SectionHeader>
 *     <h2>Custom Header</h2>
 *   </SectionHeader>
 *   <SectionContent>
 *     <p>Content</p>
 *   </SectionContent>
 *   <SectionFooter>
 *     <p>Footer text</p>
 *   </SectionFooter>
 * </Section>
 * ```
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      variant = 'default',
      title,
      subtitle,
      headerAction,
      footerContent,
      padding = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const hasHeader = title || subtitle || headerAction
    const hasFooter = footerContent

    return (
      <section
        ref={ref}
        className={cn(
          styles.section,
          styles[`variant-${variant}`],
          styles[`padding-${padding}`],
          className
        )}
        {...props}
      >
        {hasHeader && (
          <div className={styles.header}>
            <div className={styles.headerText}>
              {title && <h2 className={styles.title}>{title}</h2>}
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
            {headerAction && (
              <div className={styles.headerAction}>{headerAction}</div>
            )}
          </div>
        )}

        <div className={styles.content}>{children}</div>

        {hasFooter && <div className={styles.footer}>{footerContent}</div>}
      </section>
    )
  }
)

Section.displayName = 'Section'

/**
 * SectionHeader Component
 */
export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.header, className)} {...props}>
        {children}
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'

/**
 * SectionContent Component
 */
export const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.content, className)} {...props}>
        {children}
      </div>
    )
  }
)

SectionContent.displayName = 'SectionContent'

/**
 * SectionFooter Component
 */
export const SectionFooter = React.forwardRef<HTMLDivElement, SectionFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.footer, className)} {...props}>
        {children}
      </div>
    )
  }
)

SectionFooter.displayName = 'SectionFooter'
