import React, { useState, useRef } from 'react'
import { cn } from '../../utils'
import styles from './Dock.module.css'

export interface DockItem {
  icon: React.ReactNode | string
  label: string
  onClick?: () => void
  active?: boolean
}

export interface DockProps {
  items: DockItem[]
  position?: 'bottom' | 'left' | 'right'
  size?: number
  magnify?: boolean
  className?: string
}

/**
 * Dock component - macOS-style dock with magnification
 *
 * @example
 * ```tsx
 * <Dock
 *   items={[
 *     { icon: '📁', label: 'Finder', onClick: () => {} },
 *     { icon: '🌐', label: 'Safari', onClick: () => {}, active: true },
 *   ]}
 *   position="bottom"
 *   magnify
 * />
 * ```
 */
export function Dock({
  items,
  position = 'bottom',
  size = 56,
  magnify = true,
  className,
}: DockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const dockRef = useRef<HTMLDivElement>(null)

  const getItemScale = (index: number) => {
    if (!magnify || hoveredIndex === null) return 1

    const distance = Math.abs(index - hoveredIndex)
    if (distance === 0) return 1.5
    if (distance === 1) return 1.25
    if (distance === 2) return 1.1
    return 1
  }

  const getItemTranslate = (index: number) => {
    if (!magnify || hoveredIndex === null) return 0

    const distance = Math.abs(index - hoveredIndex)
    if (distance === 0) return -8
    if (distance === 1) return -4
    return 0
  }

  return (
    <div
      ref={dockRef}
      className={cn(
        styles.dock,
        styles[position],
        className
      )}
      role="toolbar"
      aria-label="Application dock"
    >
      <div className={styles.dockBackground} aria-hidden="true" />

      <div className={styles.itemsContainer}>
        {items.map((item, index) => {
          const scale = getItemScale(index)
          const translate = getItemTranslate(index)

          return (
            <button
              key={index}
              className={cn(
                styles.dockItem,
                item.active && styles.active
              )}
              onClick={item.onClick}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                '--item-size': `${size}px`,
                '--item-scale': scale,
                '--item-translate': `${translate}px`,
              } as React.CSSProperties}
              aria-label={item.label}
              type="button"
            >
              <div className={styles.iconWrapper}>
                {typeof item.icon === 'string' ? (
                  <span className={styles.iconText}>{item.icon}</span>
                ) : (
                  item.icon
                )}
              </div>

              {item.active && (
                <div className={styles.activeIndicator} aria-hidden="true" />
              )}

              <div className={styles.tooltip} role="tooltip">
                {item.label}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
