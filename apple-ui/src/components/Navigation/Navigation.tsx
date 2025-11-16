import React from 'react'
import { cn } from '../../utils'
import styles from './Navigation.module.css'

/**
 * Navigation Position
 */
export type NavPosition = 'static' | 'fixed' | 'sticky'

/**
 * Navigation Variant
 */
export type NavVariant = 'default' | 'glass' | 'transparent'

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Positioning style
   * @default 'sticky'
   */
  position?: NavPosition

  /**
   * Visual variant
   * @default 'default'
   */
  variant?: NavVariant

  /**
   * Blur effect when scrolled (glassmorphism)
   * @default true
   */
  blurOnScroll?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Navigation content
   */
  children: React.ReactNode
}

/**
 * Navigation Component
 *
 * Apple-style navigation bar with glassmorphism effects.
 * Perfect for top navigation with smooth blur on scroll.
 *
 * Features:
 * - Multiple positioning options (static, fixed, sticky)
 * - Glassmorphism with backdrop blur
 * - Automatic blur on scroll
 * - Dark mode support
 * - Responsive design
 *
 * @example
 * ```tsx
 * <Navigation variant="glass">
 *   <NavContent>
 *     <NavBrand>REFLEKT</NavBrand>
 *     <NavLinks>
 *       <NavLink href="/">Home</NavLink>
 *       <NavLink href="/about">About</NavLink>
 *     </NavLinks>
 *   </NavContent>
 * </Navigation>
 * ```
 */
export const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  (
    {
      position = 'sticky',
      variant = 'default',
      blurOnScroll = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
      if (!blurOnScroll) return

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [blurOnScroll])

    return (
      <nav
        ref={ref}
        className={cn(
          styles.navigation,
          styles[`position-${position}`],
          styles[`variant-${variant}`],
          isScrolled && blurOnScroll && styles.scrolled,
          className
        )}
        {...props}
      >
        {children}
      </nav>
    )
  }
)

Navigation.displayName = 'Navigation'

/**
 * NavContent Component
 *
 * Container for navigation content with max-width and padding.
 */
export interface NavContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const NavContent = React.forwardRef<HTMLDivElement, NavContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.navContent, className)} {...props}>
        {children}
      </div>
    )
  }
)

NavContent.displayName = 'NavContent'

/**
 * NavBrand Component
 *
 * Brand/logo section of navigation.
 */
export interface NavBrandProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const NavBrand = React.forwardRef<HTMLDivElement, NavBrandProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.navBrand, className)} {...props}>
        {children}
      </div>
    )
  }
)

NavBrand.displayName = 'NavBrand'

/**
 * NavLinks Component
 *
 * Container for navigation links.
 */
export interface NavLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const NavLinks = React.forwardRef<HTMLDivElement, NavLinksProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles.navLinks, className)} {...props}>
        {children}
      </div>
    )
  }
)

NavLinks.displayName = 'NavLinks'

/**
 * NavLink Component
 *
 * Individual navigation link.
 */
export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Active state
   */
  active?: boolean

  className?: string
  children: React.ReactNode
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ active, className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(styles.navLink, active && styles.navLinkActive, className)}
        {...props}
      >
        {children}
      </a>
    )
  }
)

NavLink.displayName = 'NavLink'
