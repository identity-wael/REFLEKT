import React from 'react'
import { cn } from '../../utils'
import styles from './Progress.module.css'

export type ProgressVariant = 'linear' | 'circular'
export type ProgressSize = 'sm' | 'md' | 'lg'
export type ProgressColor = 'blue' | 'green' | 'orange' | 'red' | 'purple'

export interface ProgressProps {
  /**
   * Progress variant
   * @default 'linear'
   */
  variant?: ProgressVariant

  /**
   * Progress value (0-100)
   * @default 0
   */
  value?: number

  /**
   * Indeterminate state (loading animation)
   * @default false
   */
  indeterminate?: boolean

  /**
   * Progress size
   * @default 'md'
   */
  size?: ProgressSize

  /**
   * Progress color
   * @default 'blue'
   */
  color?: ProgressColor

  /**
   * Show value label
   * @default false
   */
  showValue?: boolean

  /**
   * Label text
   */
  label?: string

  /**
   * Additional className
   */
  className?: string
}

export const Progress: React.FC<ProgressProps> = ({
  variant = 'linear',
  value = 0,
  indeterminate = false,
  size = 'md',
  color = 'blue',
  showValue = false,
  label,
  className,
}) => {
  const clampedValue = Math.min(Math.max(value, 0), 100)

  if (variant === 'circular') {
    return (
      <CircularProgress
        value={clampedValue}
        indeterminate={indeterminate}
        size={size}
        color={color}
        showValue={showValue}
        className={className}
      />
    )
  }

  return (
    <div className={cn(styles.container, className)}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={cn(styles.linear, styles[`size-${size}`])}>
        <div
          className={cn(
            styles.linearTrack,
            styles[`color-${color}`],
            indeterminate && styles.indeterminate
          )}
          style={!indeterminate ? { width: `${clampedValue}%` } : undefined}
        />
      </div>
      {showValue && !indeterminate && (
        <div className={styles.valueLabel}>{Math.round(clampedValue)}%</div>
      )}
    </div>
  )
}

interface CircularProgressProps {
  value: number
  indeterminate: boolean
  size: ProgressSize
  color: ProgressColor
  showValue: boolean
  className?: string
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  indeterminate,
  size,
  color,
  showValue,
  className,
}) => {
  const sizes = {
    sm: { size: 32, strokeWidth: 3 },
    md: { size: 48, strokeWidth: 4 },
    lg: { size: 64, strokeWidth: 5 },
  }

  const { size: circleSize, strokeWidth } = sizes[size]
  const center = circleSize / 2
  const radius = center - strokeWidth
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div
      className={cn(styles.circular, styles[`circular-${size}`], className)}
      style={{ width: circleSize, height: circleSize }}
    >
      <svg width={circleSize} height={circleSize}>
        {/* Background circle */}
        <circle
          className={styles.circularBackground}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          className={cn(
            styles.circularTrack,
            styles[`color-${color}`],
            indeterminate && styles.circularIndeterminate
          )}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={indeterminate ? circumference * 0.25 : offset}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      {showValue && !indeterminate && (
        <div className={styles.circularValue}>{Math.round(value)}%</div>
      )}
    </div>
  )
}
