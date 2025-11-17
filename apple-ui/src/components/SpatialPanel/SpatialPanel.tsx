import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../../utils'
import styles from './SpatialPanel.module.css'

export interface SpatialPanelProps {
  depth?: number
  tilt?: boolean
  hover3D?: boolean
  glass?: boolean
  className?: string
  children: React.ReactNode
}

/**
 * SpatialPanel component - visionOS spatial panel with 3D effects
 *
 * @example
 * ```tsx
 * <SpatialPanel
 *   depth={50}
 *   tilt
 *   hover3D
 *   glass
 * >
 *   <div>Panel content</div>
 * </SpatialPanel>
 * ```
 */
export function SpatialPanel({
  depth = 0,
  tilt = false,
  hover3D = false,
  glass = true,
  className,
  children,
}: SpatialPanelProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!tilt || !panelRef.current) return

    const panel = panelRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = panel.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      const rotateX = -(mouseY / rect.height) * 10 // Max 10deg rotation
      const rotateY = (mouseX / rect.width) * 10

      setRotation({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 })
    }

    panel.addEventListener('mousemove', handleMouseMove)
    panel.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      panel.removeEventListener('mousemove', handleMouseMove)
      panel.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [tilt])

  return (
    <div
      ref={panelRef}
      className={cn(
        styles.spatialPanel,
        glass && styles.glass,
        hover3D && styles.hover3D,
        tilt && styles.tilt,
        className
      )}
      style={{
        '--panel-depth': `${depth}px`,
        '--rotate-x': `${rotation.x}deg`,
        '--rotate-y': `${rotation.y}deg`,
      } as React.CSSProperties}
    >
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
