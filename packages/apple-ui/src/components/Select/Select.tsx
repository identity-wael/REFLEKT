import React from 'react'
import { cn } from '../../utils'
import styles from './Select.module.css'

export type SelectSize = 'sm' | 'md' | 'lg'
export type SelectVariant = 'outlined' | 'filled'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Select variant
   * @default 'outlined'
   */
  variant?: SelectVariant

  /**
   * Select size
   * @default 'md'
   */
  size?: SelectSize

  /**
   * Label for the select
   */
  label?: string

  /**
   * Helper text shown below the select
   */
  helperText?: string

  /**
   * Error message
   */
  error?: string

  /**
   * Options for the select
   */
  options: SelectOption[]

  /**
   * Icon to show at the start
   */
  startIcon?: React.ReactNode

  /**
   * Full width
   * @default false
   */
   fullWidth?: boolean

  /**
   * Placeholder text
   */
  placeholder?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = 'outlined',
      size = 'md',
      label,
      helperText,
      error,
      options,
      startIcon,
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const hasError = !!error

    return (
      <div className={cn(styles.container, fullWidth && styles.fullWidth, className)}>
        {label && (
          <label className={cn(styles.label, disabled && styles.labelDisabled)}>
            {label}
          </label>
        )}
        <div className={styles.selectWrapper}>
          {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
          <select
            ref={ref}
            disabled={disabled}
            className={cn(
              styles.select,
              styles[`variant-${variant}`],
              styles[`size-${size}`],
              hasError && styles.error,
              startIcon && styles.withStartIcon,
              disabled && styles.disabled
            )}
            {...props}
          >
            {props.placeholder && (
              <option value="" disabled>
                {props.placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <span className={styles.chevron}>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        {(helperText || error) && (
          <p className={cn(styles.helperText, hasError && styles.helperError)}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
