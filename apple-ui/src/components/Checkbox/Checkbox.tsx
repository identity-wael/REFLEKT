import React from 'react'
import { cn } from '../../utils'
import styles from './Checkbox.module.css'

export type CheckboxSize = 'sm' | 'md' | 'lg'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Checkbox size
   * @default 'md'
   */
  size?: CheckboxSize

  /**
   * Label for the checkbox
   */
  label?: string

  /**
   * Description text shown below the label
   */
  description?: string

  /**
   * Indeterminate state (partially checked)
   */
  indeterminate?: boolean

  /**
   * Error state
   */
  error?: boolean

  /**
   * Additional className for the container
   */
  containerClassName?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'md',
      label,
      description,
      indeterminate = false,
      error = false,
      containerClassName,
      className,
      disabled,
      checked,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useImperativeHandle(ref, () => inputRef.current!)

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate
      }
    }, [indeterminate])

    return (
      <label
        className={cn(
          styles.container,
          disabled && styles.containerDisabled,
          containerClassName
        )}
      >
        <div className={styles.checkboxWrapper}>
          <input
            ref={inputRef}
            type="checkbox"
            disabled={disabled}
            checked={checked}
            className={cn(
              styles.checkbox,
              styles[`size-${size}`],
              error && styles.error,
              className
            )}
            {...props}
          />
          <div
            className={cn(
              styles.checkboxVisual,
              styles[`size-${size}`],
              error && styles.visualError,
              disabled && styles.visualDisabled
            )}
          >
            <svg
              className={styles.checkmark}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {indeterminate ? (
                <path
                  d="M4 8H12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3.5 8L6.5 11L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </div>
        </div>
        {(label || description) && (
          <div className={styles.labelWrapper}>
            {label && <span className={styles.label}>{label}</span>}
            {description && <span className={styles.description}>{description}</span>}
          </div>
        )}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
