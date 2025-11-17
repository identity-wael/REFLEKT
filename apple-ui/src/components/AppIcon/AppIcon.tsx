import React from 'react'
import { cn } from '../../utils'
import styles from './AppIcon.module.css'

export interface AppIconProps {
  src: string
  alt: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  shape?: 'ios' | 'macos'
  badge?: number | boolean
  glossy?: boolean
  className?: string
  onClick?: () => void
}

/**
 * AppIcon component - iOS/macOS-style app icon
 *
 * @example
 * ```tsx
 * <AppIcon
 *   src="/app-icon.png"
 *   alt="My App"
 *   size="lg"
 *   shape="ios"
 *   badge={5}
 *   glossy
 * />
 * ```
 */
export function AppIcon({
  src,
  alt,
  size = 'md',
  shape = 'ios',
  badge,
  glossy = false,
  className,
  onClick,
}: AppIconProps) {
  const isClickable = Boolean(onClick)
  const Component = isClickable ? 'button' : 'div'

  return (
    <Component
      className={cn(
        styles.appIcon,
        styles[size],
        styles[shape],
        glossy && styles.glossy,
        isClickable && styles.clickable,
        className
      )}
      onClick={onClick}
      type={isClickable ? 'button' : undefined}
      aria-label={isClickable ? alt : undefined}
    >
      <div className={styles.iconContainer}>
        <img src={src} alt={alt} className={styles.iconImage} draggable="false" />
        {glossy && <div className={styles.gloss} aria-hidden="true" />}
      </div>

      {badge !== undefined && badge !== false && (
        <div className={styles.badge} aria-label={typeof badge === 'number' ? `${badge} notifications` : 'Has notifications'}>
          {typeof badge === 'number' && badge > 0 ? (badge > 99 ? '99+' : badge) : null}
        </div>
      )}
    </Component>
  )
}
