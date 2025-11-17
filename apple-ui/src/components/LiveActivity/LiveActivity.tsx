import React from 'react'
import { cn } from '../../utils'
import styles from './LiveActivity.module.css'

export interface LiveActivityProps {
  title: string
  subtitle?: string
  content?: React.ReactNode
  progress?: number
  compact?: boolean
  timestamp?: Date | string
  className?: string
  onClick?: () => void
}

/**
 * LiveActivity component - iOS Live Activities widget
 *
 * @example
 * ```tsx
 * <LiveActivity
 *   title="Delivery in Progress"
 *   subtitle="Arriving in 15 minutes"
 *   progress={0.6}
 *   content={<div>Custom content</div>}
 * />
 * ```
 */
export function LiveActivity({
  title,
  subtitle,
  content,
  progress,
  compact = false,
  timestamp,
  className,
  onClick,
}: LiveActivityProps) {
  const isClickable = Boolean(onClick)
  const Component = isClickable ? 'button' : 'div'

  const formatTimestamp = (ts: Date | string) => {
    const date = typeof ts === 'string' ? new Date(ts) : ts
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)

    if (seconds < 60) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return date.toLocaleDateString()
  }

  return (
    <Component
      className={cn(
        styles.liveActivity,
        compact && styles.compact,
        isClickable && styles.clickable,
        className
      )}
      onClick={onClick}
      type={isClickable ? 'button' : undefined}
      role={isClickable ? 'button' : undefined}
    >
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.title}>{title}</div>
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
        {timestamp && (
          <div className={styles.timestamp}>
            {formatTimestamp(timestamp)}
          </div>
        )}
      </div>

      {!compact && content && (
        <div className={styles.content}>
          {content}
        </div>
      )}

      {progress !== undefined && (
        <div className={styles.progressContainer} role="progressbar" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100}>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
            />
          </div>
          <div className={styles.progressLabel}>
            {Math.round(progress * 100)}%
          </div>
        </div>
      )}

      <div className={styles.pulse} aria-hidden="true" />
    </Component>
  )
}
