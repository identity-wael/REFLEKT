import React from 'react'
import { cn } from '../../utils'
import styles from './DynamicIsland.module.css'

export interface DynamicIslandProps {
  state?: 'compact' | 'minimal' | 'expanded'
  content?: React.ReactNode
  onExpand?: () => void
  onCollapse?: () => void
  className?: string
}

/**
 * DynamicIsland component - iPhone Dynamic Island
 *
 * @example
 * ```tsx
 * <DynamicIsland
 *   state="expanded"
 *   content={<div>Now playing...</div>}
 *   onExpand={() => console.log('expanded')}
 *   onCollapse={() => console.log('collapsed')}
 * />
 * ```
 */
export function DynamicIsland({
  state = 'compact',
  content,
  onExpand,
  onCollapse,
  className,
}: DynamicIslandProps) {
  const handleClick = () => {
    if (state === 'compact' || state === 'minimal') {
      onExpand?.()
    } else {
      onCollapse?.()
    }
  }

  return (
    <div
      className={cn(
        styles.dynamicIsland,
        styles[state],
        className
      )}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={state === 'expanded' ? 'Collapse Dynamic Island' : 'Expand Dynamic Island'}
      aria-expanded={state === 'expanded'}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      <div className={styles.background} aria-hidden="true" />

      {state === 'minimal' && (
        <div className={styles.minimalDot} aria-hidden="true" />
      )}

      {(state === 'compact' || state === 'expanded') && content && (
        <div className={styles.content}>
          {content}
        </div>
      )}
    </div>
  )
}
