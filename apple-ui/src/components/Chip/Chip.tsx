import React from 'react'
import { cn } from '../../utils'
import styles from './Chip.module.css'

export type ChipVariant = 'filled' | 'outlined' | 'soft'
export type ChipColor = 'blue' | 'green' | 'red' | 'orange' | 'purple' | 'gray'
export type ChipSize = 'sm' | 'md' | 'lg'

export interface ChipProps {
  /**
   * Label text to display
   */
  label: string
  /**
   * Variant style of the chip
   * @default 'filled'
   */
  variant?: ChipVariant
  /**
   * Color theme of the chip
   * @default 'blue'
   */
  color?: ChipColor
  /**
   * Size of the chip
   * @default 'md'
   */
  size?: ChipSize
  /**
   * Icon element to display at the start
   */
  icon?: React.ReactNode
  /**
   * Avatar element to display at the start
   */
  avatar?: React.ReactNode
  /**
   * Callback when delete button is clicked
   */
  onDelete?: () => void
  /**
   * Whether the chip is clickable
   * @default false
   */
  clickable?: boolean
  /**
   * Whether the chip is selected
   * @default false
   */
  selected?: boolean
  /**
   * Whether the chip is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * Click handler for the chip
   */
  onClick?: () => void
  /**
   * Additional CSS class name
   */
  className?: string
}

export const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'filled',
  color = 'blue',
  size = 'md',
  icon,
  avatar,
  onDelete,
  clickable = false,
  selected = false,
  disabled = false,
  onClick,
  className,
}) => {
  const isClickable = clickable || !!onClick
  const hasStartAdornment = !!(icon || avatar)

  const handleClick = () => {
    if (!disabled && isClickable && onClick) {
      onClick()
    }
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!disabled && onDelete) {
      onDelete()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return

    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      handleClick()
    }

    if (onDelete && e.key === 'Backspace') {
      e.preventDefault()
      onDelete()
    }
  }

  return (
    <div
      className={cn(
        styles.chip,
        styles[variant],
        styles[color],
        styles[size],
        isClickable && styles.clickable,
        selected && styles.selected,
        disabled && styles.disabled,
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={isClickable ? 'button' : undefined}
      tabIndex={disabled ? -1 : isClickable || onDelete ? 0 : undefined}
      aria-disabled={disabled}
      aria-pressed={isClickable ? selected : undefined}
    >
      {/* Start Adornment */}
      {hasStartAdornment && (
        <span className={styles.startAdornment}>
          {avatar || icon}
        </span>
      )}

      {/* Label */}
      <span className={styles.label}>{label}</span>

      {/* Delete Button */}
      {onDelete && (
        <button
          className={styles.deleteButton}
          onClick={handleDelete}
          disabled={disabled}
          aria-label={`Remove ${label}`}
          type="button"
          tabIndex={-1}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 3L3 9M3 3L9 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  )
}

Chip.displayName = 'Chip'
