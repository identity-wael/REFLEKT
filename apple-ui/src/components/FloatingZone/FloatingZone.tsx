import React from 'react'
import { cn } from '../../utils'
import styles from './FloatingZone.module.css'

/**
 * Depth Layers
 */
export type ZoneDepth = 'back' | 'mid' | 'front' | 'surface'

/**
 * Animation Presets
 */
export type ZoneAnimation =
  | 'none'
  | 'float'
  | 'pulse'
  | 'slide-in'
  | 'fade-in'
  | 'zoom-in'

export interface FloatingZoneProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Horizontal position (CSS value or percentage)
   * @default '50%'
   */
  x?: string | number

  /**
   * Vertical position (CSS value or percentage)
   * @default '50%'
   */
  y?: string | number

  /**
   * Depth layer (affects z-index and transform)
   * @default 'front'
   */
  depth?: ZoneDepth

  /**
   * Enable 3D transform
   * @default true
   */
  transform3d?: boolean

  /**
   * Z-axis translation (depth in 3D space)
   * @default based on depth prop
   */
  translateZ?: number

  /**
   * Entry animation
   * @default 'fade-in'
   */
  animation?: ZoneAnimation

  /**
   * Animation delay (ms)
   * @default 0
   */
  animationDelay?: number

  /**
   * Enable hover float effect
   * @default true
   */
  hoverFloat?: boolean

  /**
   * Width of the zone
   * @default 'auto'
   */
  width?: string | number

  /**
   * Height of the zone
   * @default 'auto'
   */
  height?: string | number

  /**
   * Anchor point for positioning
   * @default 'center'
   */
  anchor?: 'top-left' | 'top' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right'

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Zone content
   */
  children: React.ReactNode
}

const depthToTranslateZ: Record<ZoneDepth, number> = {
  back: -100,
  mid: 0,
  front: 100,
  surface: 200,
}

const anchorTransforms: Record<string, { x: string; y: string }> = {
  'top-left': { x: '0%', y: '0%' },
  'top': { x: '-50%', y: '0%' },
  'top-right': { x: '-100%', y: '0%' },
  'left': { x: '0%', y: '-50%' },
  'center': { x: '-50%', y: '-50%' },
  'right': { x: '-100%', y: '-50%' },
  'bottom-left': { x: '0%', y: '-100%' },
  'bottom': { x: '-50%', y: '-100%' },
  'bottom-right': { x: '-100%', y: '-100%' },
}

/**
 * FloatingZone Component
 *
 * Defines a floating zone on the GlassCanvas where content is positioned.
 * Supports 3D positioning, depth layers, and smooth animations.
 *
 * Features:
 * - Precise positioning (x, y, z)
 * - Depth layers with 3D transforms
 * - Multiple animation presets
 * - Hover effects
 * - Anchor points
 * - Responsive positioning
 *
 * @example
 * ```tsx
 * <GlassCanvas>
 *   <FloatingZone x="20%" y="30%" depth="front" animation="slide-in">
 *     <Widget>Content</Widget>
 *   </FloatingZone>
 *
 *   <FloatingZone x="70%" y="50%" depth="mid" animation="fade-in">
 *     <Icon>🚀</Icon>
 *   </FloatingZone>
 * </GlassCanvas>
 * ```
 */
export const FloatingZone = React.forwardRef<HTMLDivElement, FloatingZoneProps>(
  (
    {
      x = '50%',
      y = '50%',
      depth = 'front',
      transform3d = true,
      translateZ,
      animation = 'fade-in',
      animationDelay = 0,
      hoverFloat = true,
      width = 'auto',
      height = 'auto',
      anchor = 'center',
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const zTranslation = translateZ ?? depthToTranslateZ[depth]
    const anchorTransform = anchorTransforms[anchor]

    const positionStyle: React.CSSProperties = {
      left: typeof x === 'number' ? `${x}px` : x,
      top: typeof y === 'number' ? `${y}px` : y,
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      transform: transform3d
        ? `translate(${anchorTransform.x}, ${anchorTransform.y}) translateZ(${zTranslation}px)`
        : `translate(${anchorTransform.x}, ${anchorTransform.y})`,
      animationDelay: `${animationDelay}ms`,
      ...style,
    }

    return (
      <div
        ref={ref}
        className={cn(
          styles.floatingZone,
          styles[`depth-${depth}`],
          styles[`animation-${animation}`],
          hoverFloat && styles.hoverFloat,
          transform3d && styles.transform3d,
          className
        )}
        style={positionStyle}
        {...props}
      >
        {children}
      </div>
    )
  }
)

FloatingZone.displayName = 'FloatingZone'
