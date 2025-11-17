import React from 'react'
import { cn } from '../../utils'
import styles from './Input.module.css'

/**
 * Input Variants
 */
export type InputVariant = 'outlined' | 'filled'

/**
 * Input Sizes
 */
export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Visual style variant
   * @default 'outlined'
   */
  variant?: InputVariant

  /**
   * Input size
   * @default 'md'
   */
  inputSize?: InputSize

  /**
   * Error state
   * @default false
   */
  error?: boolean

  /**
   * Error message to display
   */
  errorMessage?: string

  /**
   * Helper text to display below input
   */
  helperText?: string

  /**
   * Label text
   */
  label?: string

  /**
   * Icon to display at the start of input
   */
  startIcon?: React.ReactNode

  /**
   * Icon to display at the end of input
   */
  endIcon?: React.ReactNode

  /**
   * Full width input
   * @default false
   */
  fullWidth?: boolean

  /**
   * Additional CSS classes for container
   */
  containerClassName?: string

  /**
   * Additional CSS classes for input element
   */
  className?: string
}

/**
 * Input Component
 *
 * Apple-style input field with clean design and smooth interactions.
 * Supports labels, helper text, error states, and icons.
 *
 * Features:
 * - Clean, minimal design
 * - Smooth focus transitions
 * - Error state handling
 * - Icon support (start/end)
 * - Label and helper text
 * - Automatic dark mode support
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   helperText="We'll never share your email"
 * />
 *
 * <Input
 *   label="Password"
 *   type="password"
 *   error
 *   errorMessage="Password is required"
 * />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'outlined',
      inputSize = 'md',
      error = false,
      errorMessage,
      helperText,
      label,
      startIcon,
      endIcon,
      fullWidth = false,
      containerClassName,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId()

    return (
      <div
        className={cn(
          styles.container,
          fullWidth && styles.fullWidth,
          containerClassName
        )}
      >
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}

        <div
          className={cn(
            styles.inputWrapper,
            styles[`variant-${variant}`],
            styles[`size-${inputSize}`],
            error && styles.error,
            disabled && styles.disabled,
            startIcon && styles.hasStartIcon,
            endIcon && styles.hasEndIcon
          )}
        >
          {startIcon && (
            <span className={styles.startIcon} aria-hidden="true">
              {startIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(styles.input, className)}
            aria-invalid={error}
            aria-describedby={
              errorMessage
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            {...props}
          />

          {endIcon && (
            <span className={styles.endIcon} aria-hidden="true">
              {endIcon}
            </span>
          )}
        </div>

        {errorMessage && (
          <p id={`${inputId}-error`} className={styles.errorMessage} role="alert">
            {errorMessage}
          </p>
        )}

        {helperText && !errorMessage && (
          <p id={`${inputId}-helper`} className={styles.helperText}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
