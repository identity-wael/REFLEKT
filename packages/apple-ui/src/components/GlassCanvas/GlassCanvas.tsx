import React from 'react'
import { cn } from '../../utils'
import styles from './GlassCanvas.module.css'

/**
 * Glass Canvas Variants (visionOS/tvOS-inspired)
 */
export type GlassCanvasVariant =
  | 'mirror'           // Two-way mirror effect
  | 'screen'           // Screen-like surface
  | 'infinity'         // Infinite depth effect
  | 'ambient'          // Ambient environment

/**
 * Depth Levels
 */
export type CanvasDepth = 'shallow' | 'medium' | 'deep' | 'infinite'

export interface GlassCanvasProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Canvas variant
   * @default 'mirror'
   */
  variant?: GlassCanvasVariant

  /**
   * Background image or video URL
   */
  background?: string

  /**
   * Background type
   * @default 'image'
   */
  backgroundType?: 'image' | 'video' | 'gradient' | 'none'

  /**
   * Depth perception level
   * @default 'medium'
   */
  depth?: CanvasDepth

  /**
   * Enable parallax effect on mouse move
   * @default true
   */
  parallax?: boolean

  /**
   * Parallax intensity (0-1)
   * @default 0.3
   */
  parallaxIntensity?: number

  /**
   * Enable ambient lighting effect
   * @default true
   */
  ambientLight?: boolean

  /**
   * Blur intensity (px)
   * @default 20
   */
  blurIntensity?: number

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Content (FloatingZones)
   */
  children: React.ReactNode
}

/**
 * GlassCanvas Component
 *
 * visionOS/tvOS-inspired canvas that acts as a two-way mirror or screen.
 * Components float in front of the background with depth and parallax.
 *
 * Features:
 * - Two-way mirror effect
 * - Background video/image support
 * - Parallax on mouse movement
 * - Depth perception with layers
 * - Ambient lighting
 * - Infinite depth effect
 *
 * @example
 * ```tsx
 * <GlassCanvas
 *   variant="mirror"
 *   background="/bg.mp4"
 *   backgroundType="video"
 *   parallax
 * >
 *   <FloatingZone x="20%" y="30%" depth="front">
 *     <Widget>Content here</Widget>
 *   </FloatingZone>
 * </GlassCanvas>
 * ```
 */
export const GlassCanvas = React.forwardRef<HTMLDivElement, GlassCanvasProps>(
  (
    {
      variant = 'mirror',
      background,
      backgroundType = 'image',
      depth = 'medium',
      parallax = true,
      parallaxIntensity = 0.3,
      ambientLight = true,
      blurIntensity = 20,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const canvasRef = React.useRef<HTMLDivElement>(null)
    const [parallaxOffset, setParallaxOffset] = React.useState({ x: 0, y: 0 })

    React.useImperativeHandle(ref, () => canvasRef.current as HTMLDivElement)

    const handleMouseMove = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!parallax || !canvasRef.current) return

        const rect = canvasRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5

        setParallaxOffset({
          x: x * parallaxIntensity * 50,
          y: y * parallaxIntensity * 50,
        })
      },
      [parallax, parallaxIntensity]
    )

    const handleMouseLeave = React.useCallback(() => {
      setParallaxOffset({ x: 0, y: 0 })
    }, [])

    return (
      <div
        ref={canvasRef}
        className={cn(
          styles.glassCanvas,
          styles[`variant-${variant}`],
          styles[`depth-${depth}`],
          parallax && styles.parallaxEnabled,
          ambientLight && styles.ambientLight,
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        {...props}
      >
        {/* Background Layer */}
        {background && (
          <div
            className={styles.backgroundLayer}
            style={{
              transform: parallax
                ? `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px) scale(1.1)`
                : undefined,
              filter: `blur(${blurIntensity}px)`,
            }}
          >
            {backgroundType === 'video' ? (
              <video
                className={styles.backgroundMedia}
                src={background}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : backgroundType === 'image' ? (
              <img
                className={styles.backgroundMedia}
                src={background}
                alt="Background"
              />
            ) : null}
          </div>
        )}

        {/* Gradient Overlay */}
        {backgroundType === 'gradient' && (
          <div
            className={styles.gradientOverlay}
            style={{ background }}
          />
        )}

        {/* Glass Layer (two-way mirror effect) */}
        <div className={styles.glassLayer} />

        {/* Ambient Light Effect */}
        {ambientLight && <div className={styles.ambientLightEffect} />}

        {/* Content Layer (FloatingZones) */}
        <div className={styles.contentLayer}>{children}</div>

        {/* Depth Grid (visual guide) */}
        {depth === 'infinite' && (
          <div className={styles.depthGrid}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={styles.gridLine}
                style={{
                  transform: `translateZ(${-i * 100}px)`,
                  opacity: 1 - i * 0.05,
                }}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
)

GlassCanvas.displayName = 'GlassCanvas'
