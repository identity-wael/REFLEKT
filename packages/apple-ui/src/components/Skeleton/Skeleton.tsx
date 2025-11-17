import React from 'react'
import { cn } from '../../utils'
import styles from './Skeleton.module.css'

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded'
export type SkeletonSize = 'sm' | 'md' | 'lg'

export interface SkeletonProps {
  /**
   * Variant style of the skeleton
   * @default 'text'
   */
  variant?: SkeletonVariant
  /**
   * Width of the skeleton (CSS value)
   */
  width?: string | number
  /**
   * Height of the skeleton (CSS value)
   */
  height?: string | number
  /**
   * Size for text variant (controls height)
   * @default 'md'
   */
  size?: SkeletonSize
  /**
   * Number of lines to render (for text variant)
   * @default 1
   */
  lines?: number
  /**
   * Shorthand for circular variant
   * @default false
   */
  circle?: boolean
  /**
   * Disable shimmer animation
   * @default false
   */
  static?: boolean
  /**
   * Additional CSS class name
   */
  className?: string
  /**
   * Inline styles
   */
  style?: React.CSSProperties
}

const getTextHeight = (size: SkeletonSize): string => {
  const heights = {
    sm: '14px',
    md: '16px',
    lg: '20px',
  }
  return heights[size]
}

const formatDimension = (value: string | number | undefined): string | undefined => {
  if (value === undefined) return undefined
  return typeof value === 'number' ? `${value}px` : value
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  size = 'md',
  lines = 1,
  circle = false,
  static: isStatic = false,
  className,
  style,
}) => {
  const actualVariant = circle ? 'circular' : variant

  // For text variant with multiple lines
  if (actualVariant === 'text' && lines > 1) {
    return (
      <div className={cn(styles.textGroup, className)} style={style}>
        {Array.from({ length: lines }).map((_, index) => {
          const isLastLine = index === lines - 1
          const lineWidth = isLastLine ? '80%' : '100%'

          return (
            <span
              key={index}
              className={cn(
                styles.skeleton,
                styles.text,
                styles[size],
                isStatic && styles.static
              )}
              style={{
                width: width ? formatDimension(width) : lineWidth,
                height: height ? formatDimension(height) : getTextHeight(size),
              }}
              aria-hidden="true"
            />
          )
        })}
      </div>
    )
  }

  // Single skeleton element
  const inlineStyle: React.CSSProperties = {
    ...style,
    width: formatDimension(width),
    height: formatDimension(height),
  }

  // Set default dimensions based on variant
  if (actualVariant === 'text' && !height) {
    inlineStyle.height = getTextHeight(size)
  }

  if (actualVariant === 'circular') {
    const dimension = formatDimension(width || height || 40)
    inlineStyle.width = dimension
    inlineStyle.height = dimension
  }

  return (
    <span
      className={cn(
        styles.skeleton,
        styles[actualVariant],
        actualVariant === 'text' && styles[size],
        isStatic && styles.static,
        className
      )}
      style={inlineStyle}
      aria-hidden="true"
      aria-busy="true"
      aria-live="polite"
    />
  )
}

Skeleton.displayName = 'Skeleton'
