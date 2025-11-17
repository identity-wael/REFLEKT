import React, { useRef, useEffect, useState } from 'react'
import { cn } from '../../utils'
import styles from './Picker.module.css'

export interface PickerOption {
  value: string | number
  label: string
}

export interface PickerProps {
  options: PickerOption[]
  value?: string | number
  onChange?: (value: string | number) => void
  label?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
}

/**
 * Picker component - iOS-style picker wheel
 *
 * @example
 * ```tsx
 * <Picker
 *   options={[
 *     { value: 1, label: 'Option 1' },
 *     { value: 2, label: 'Option 2' },
 *     { value: 3, label: 'Option 3' }
 *   ]}
 *   value={2}
 *   onChange={(value) => console.log(value)}
 *   label="Choose an option"
 * />
 * ```
 */
export function Picker({
  options,
  value,
  onChange,
  label,
  size = 'md',
  disabled = false,
  className,
}: PickerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(() => {
    const index = options.findIndex(opt => opt.value === value)
    return index >= 0 ? index : 0
  })

  useEffect(() => {
    if (value !== undefined) {
      const index = options.findIndex(opt => opt.value === value)
      if (index >= 0 && index !== selectedIndex) {
        setSelectedIndex(index)
      }
    }
  }, [value, options, selectedIndex])

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (disabled) return

    const container = e.currentTarget
    const itemHeight = getItemHeight()
    const scrollTop = container.scrollTop
    const newIndex = Math.round(scrollTop / itemHeight)

    if (newIndex !== selectedIndex && newIndex >= 0 && newIndex < options.length) {
      setSelectedIndex(newIndex)
      onChange?.(options[newIndex].value)
    }
  }

  const getItemHeight = () => {
    switch (size) {
      case 'sm':
        return 32
      case 'lg':
        return 48
      default:
        return 40
    }
  }

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const itemHeight = getItemHeight()
      containerRef.current.scrollTop = index * itemHeight
    }
  }

  useEffect(() => {
    scrollToIndex(selectedIndex)
  }, [selectedIndex])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const newIndex = Math.max(0, selectedIndex - 1)
      setSelectedIndex(newIndex)
      onChange?.(options[newIndex].value)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newIndex = Math.min(options.length - 1, selectedIndex + 1)
      setSelectedIndex(newIndex)
      onChange?.(options[newIndex].value)
    }
  }

  // Create padded options array (1 item before, 1 item after for 3 visible items)
  const paddedOptions = [
    { value: '', label: '', isPadding: true },
    ...options,
    { value: '', label: '', isPadding: true },
  ]

  return (
    <div className={cn(styles.wrapper, className)}>
      {label && (
        <label className={styles.label} id="picker-label">
          {label}
        </label>
      )}

      <div
        className={cn(
          styles.picker,
          styles[size],
          disabled && styles.disabled
        )}
        role="listbox"
        aria-labelledby={label ? 'picker-label' : undefined}
        aria-disabled={disabled}
      >
        <div className={styles.highlight} aria-hidden="true" />

        <div
          ref={containerRef}
          className={styles.optionsContainer}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
        >
          {paddedOptions.map((option, index) => {
            const actualIndex = index - 1
            const isSelected = actualIndex === selectedIndex
            const isPadding = 'isPadding' in option && option.isPadding

            return (
              <div
                key={isPadding ? `padding-${index}` : option.value}
                className={cn(
                  styles.option,
                  isSelected && styles.selected,
                  isPadding && styles.padding
                )}
                role={isPadding ? 'presentation' : 'option'}
                aria-selected={isSelected}
              >
                {option.label}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
