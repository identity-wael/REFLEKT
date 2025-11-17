import React from 'react'
import { cn } from '../../utils'
import styles from './Ornament.module.css'

export interface OrnamentProps {
  position?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  offset?: number
  content: React.ReactNode
  glass?: boolean
  depth?: number
  className?: string
  children?: React.ReactNode
}

/**
 * Ornament component - visionOS ornament (floating UI element)
 *
 * @example
 * ```tsx
 * <Ornament
 *   position="top"
 *   glass
 *   content={<div>Toolbar</div>}
 * >
 *   <div>Main content</div>
 * </Ornament>
 * ```
 */
export function Ornament({
  position = 'top',
  offset = 16,
  content,
  glass = true,
  depth = 0,
  className,
  children,
}: OrnamentProps) {
  return (
    <div className={cn(styles.ornamentContainer, className)}>
      {children && (
        <div className={styles.mainContent}>
          {children}
        </div>
      )}

      <div
        className={cn(
          styles.ornament,
          styles[position],
          glass && styles.glass
        )}
        style={{
          '--ornament-offset': `${offset}px`,
          '--ornament-depth': `${depth}px`,
        } as React.CSSProperties}
        role="complementary"
      >
        {content}
      </div>
    </div>
  )
}
