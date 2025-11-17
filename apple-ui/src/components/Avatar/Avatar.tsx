import React, { useState } from 'react'
import { cn } from '../../utils'
import styles from './Avatar.module.css'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type AvatarShape = 'circle' | 'rounded'
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy'
export type AvatarStatusPosition = 'top-right' | 'bottom-right'

export interface AvatarProps {
  /**
   * Image source URL
   */
  src?: string
  /**
   * Alt text for image
   */
  alt?: string
  /**
   * Name for generating initials fallback
   */
  name?: string
  /**
   * Size of the avatar
   * @default 'md'
   */
  size?: AvatarSize
  /**
   * Shape of the avatar
   * @default 'circle'
   */
  shape?: AvatarShape
  /**
   * Status indicator
   */
  status?: AvatarStatus
  /**
   * Position of status indicator
   * @default 'bottom-right'
   */
  statusPosition?: AvatarStatusPosition
  /**
   * Custom fallback icon
   */
  icon?: React.ReactNode
  /**
   * Additional CSS class name
   */
  className?: string
  /**
   * Click handler
   */
  onClick?: () => void
}

/**
 * Generate initials from name
 */
const getInitials = (name: string): string => {
  const parts = name.trim().split(' ').filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

/**
 * Generate a consistent color based on name
 */
const getColorFromName = (name: string): string => {
  const colors = [
    'hsl(210, 100%, 56%)', // blue
    'hsl(142, 71%, 45%)',  // green
    'hsl(4, 90%, 58%)',    // red
    'hsl(32, 100%, 50%)',  // orange
    'hsl(281, 68%, 60%)',  // purple
    'hsl(291, 47%, 51%)',  // pink
  ]

  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  return colors[Math.abs(hash) % colors.length]
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  name,
  size = 'md',
  shape = 'circle',
  status,
  statusPosition = 'bottom-right',
  icon,
  className,
  onClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const initials = name ? getInitials(name) : null
  const backgroundColor = name ? getColorFromName(name) : '#8E8E93'

  const handleImageLoad = () => {
    setImageLoaded(true)
    setImageError(false)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(false)
  }

  const showImage = src && !imageError
  const showInitials = !showImage && initials
  const showIcon = !showImage && !showInitials && icon
  const showFallback = !showImage && !showInitials && !showIcon

  return (
    <div
      className={cn(
        styles.avatar,
        styles[size],
        styles[shape],
        onClick && styles.clickable,
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick()
              }
            }
          : undefined
      }
    >
      <div className={styles.container}>
        {/* Image */}
        {showImage && (
          <>
            {!imageLoaded && (
              <div className={styles.skeleton} aria-hidden="true" />
            )}
            <img
              src={src}
              alt={alt}
              className={cn(styles.image, imageLoaded && styles.loaded)}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
          </>
        )}

        {/* Initials */}
        {showInitials && (
          <div
            className={styles.initials}
            style={{ backgroundColor }}
            aria-label={`Avatar for ${name}`}
          >
            {initials}
          </div>
        )}

        {/* Icon */}
        {showIcon && (
          <div className={styles.icon} aria-label="Avatar icon">
            {icon}
          </div>
        )}

        {/* Fallback */}
        {showFallback && (
          <div className={styles.fallback} aria-label="Default avatar">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                fill="currentColor"
              />
            </svg>
          </div>
        )}

        {/* Status Indicator */}
        {status && (
          <span
            className={cn(
              styles.status,
              styles[`status-${status}`],
              styles[`status-${statusPosition}`]
            )}
            role="status"
            aria-label={`${status} status`}
          />
        )}
      </div>
    </div>
  )
}

Avatar.displayName = 'Avatar'
