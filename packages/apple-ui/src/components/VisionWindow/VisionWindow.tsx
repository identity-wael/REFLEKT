import React from 'react'
import { cn } from '../../utils'
import styles from './VisionWindow.module.css'

export interface VisionWindowProps {
  title?: string
  material?: 'glass' | 'frosted' | 'vibrant'
  depth?: number
  floating?: boolean
  resizable?: boolean
  closable?: boolean
  onClose?: () => void
  className?: string
  children: React.ReactNode
}

/**
 * VisionWindow component - visionOS-style window
 *
 * @example
 * ```tsx
 * <VisionWindow
 *   title="My Window"
 *   material="glass"
 *   depth={50}
 *   floating
 *   closable
 *   onClose={() => console.log('close')}
 * >
 *   <div>Window content</div>
 * </VisionWindow>
 * ```
 */
export function VisionWindow({
  title,
  material = 'glass',
  depth = 0,
  floating = false,
  resizable = false,
  closable = false,
  onClose,
  className,
  children,
}: VisionWindowProps) {
  return (
    <div
      className={cn(
        styles.visionWindow,
        styles[material],
        floating && styles.floating,
        resizable && styles.resizable,
        className
      )}
      style={{
        '--window-depth': `${depth}px`,
      } as React.CSSProperties}
      role="dialog"
      aria-label={title}
    >
      {title && (
        <div className={styles.titleBar}>
          <div className={styles.title}>{title}</div>
          {closable && (
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close window"
              type="button"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M1 1l10 10m0-10L1 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}

      <div className={styles.content}>
        {children}
      </div>

      {resizable && (
        <div className={styles.resizeHandle} aria-label="Resize window" />
      )}
    </div>
  )
}
