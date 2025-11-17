import React from 'react'
import { cn } from '../../utils'
import styles from './ImmersiveSpace.module.css'

export interface ImmersiveSpaceProps {
  background?: string | { type: 'gradient' | 'image'; value: string }
  depth?: number
  perspective?: number
  className?: string
  children: React.ReactNode
}

/**
 * ImmersiveSpace component - visionOS immersive environment container
 *
 * @example
 * ```tsx
 * <ImmersiveSpace
 *   background={{ type: 'gradient', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
 *   perspective={2000}
 *   depth={100}
 * >
 *   <div>Immersive content</div>
 * </ImmersiveSpace>
 * ```
 */
export function ImmersiveSpace({
  background,
  depth = 0,
  perspective = 1000,
  className,
  children,
}: ImmersiveSpaceProps) {
  const getBackgroundStyle = () => {
    if (!background) return {}

    if (typeof background === 'string') {
      return { background }
    }

    if (background.type === 'gradient') {
      return { background: background.value }
    }

    if (background.type === 'image') {
      return {
        backgroundImage: `url(${background.value})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    }

    return {}
  }

  return (
    <div
      className={cn(styles.immersiveSpace, className)}
      style={{
        ...getBackgroundStyle(),
        '--space-perspective': `${perspective}px`,
        '--space-depth': `${depth}px`,
      } as React.CSSProperties}
    >
      <div className={styles.ambientLight} aria-hidden="true" />

      <div className={styles.contentWrapper}>
        {children}
      </div>

      <div className={styles.depthBlur} aria-hidden="true" />
    </div>
  )
}
