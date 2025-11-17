import React from 'react'
import { cn } from '../../utils'
import styles from './Textarea.module.css'

export type TextareaVariant = 'outlined' | 'filled'
export type TextareaSize = 'sm' | 'md' | 'lg'
export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both'

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Visual style variant
   * @default 'outlined'
   */
  variant?: TextareaVariant

  /**
   * Textarea size
   * @default 'md'
   */
  textareaSize?: TextareaSize

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
   * Helper text to display below textarea
   */
  helperText?: string

  /**
   * Label text
   */
  label?: string

  /**
   * Number of visible text rows
   * @default 3
   */
  rows?: number

  /**
   * Maximum character length
   */
  maxLength?: number

  /**
   * Show character counter
   * @default false (true if maxLength is set)
   */
  showCount?: boolean

  /**
   * Resize behavior
   * @default 'vertical'
   */
  resize?: TextareaResize

  /**
   * Automatically grow height based on content
   * @default false
   */
  autoGrow?: boolean

  /**
   * Full width textarea
   * @default false
   */
  fullWidth?: boolean

  /**
   * Additional CSS classes for container
   */
  containerClassName?: string

  /**
   * Additional CSS classes for textarea element
   */
  className?: string
}

/**
 * Textarea Component
 *
 * Multi-line text input matching Input component style with Apple design.
 *
 * Features:
 * - Auto-growing height option
 * - Character counter
 * - Error state handling
 * - Label and helper text
 * - Multiple resize options
 * - Automatic dark mode support
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Description"
 *   placeholder="Enter your description"
 *   maxLength={500}
 *   showCount
 *   autoGrow
 * />
 * ```
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'outlined',
      textareaSize = 'md',
      error = false,
      errorMessage,
      helperText,
      label,
      rows = 3,
      maxLength,
      showCount,
      resize = 'vertical',
      autoGrow = false,
      fullWidth = false,
      containerClassName,
      className,
      disabled,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const textareaId = React.useId()
    const internalRef = React.useRef<HTMLTextAreaElement>(null)
    const textareaRef = (ref as React.RefObject<HTMLTextAreaElement>) || internalRef

    const [charCount, setCharCount] = React.useState(0)

    const shouldShowCount = showCount ?? (maxLength !== undefined)

    React.useEffect(() => {
      if (textareaRef.current) {
        const currentLength = textareaRef.current.value.length
        setCharCount(currentLength)

        if (autoGrow) {
          adjustHeight()
        }
      }
    }, [value, autoGrow])

    const adjustHeight = () => {
      if (textareaRef.current && autoGrow) {
        textareaRef.current.style.height = 'auto'
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length)

      if (autoGrow) {
        adjustHeight()
      }

      onChange?.(e)
    }

    const resizeClass = autoGrow ? 'none' : resize

    return (
      <div
        className={cn(
          styles.container,
          fullWidth && styles.fullWidth,
          containerClassName
        )}
      >
        {label && (
          <label htmlFor={textareaId} className={styles.label}>
            {label}
          </label>
        )}

        <div
          className={cn(
            styles.textareaWrapper,
            styles[`variant-${variant}`],
            styles[`size-${textareaSize}`],
            error && styles.error,
            disabled && styles.disabled
          )}
        >
          <textarea
            ref={textareaRef}
            id={textareaId}
            disabled={disabled}
            rows={rows}
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
            className={cn(
              styles.textarea,
              styles[`resize-${resizeClass}`],
              className
            )}
            aria-invalid={error}
            aria-describedby={
              errorMessage
                ? `${textareaId}-error`
                : helperText
                  ? `${textareaId}-helper`
                  : shouldShowCount
                    ? `${textareaId}-count`
                    : undefined
            }
            {...props}
          />
        </div>

        <div className={styles.footer}>
          <div className={styles.messages}>
            {errorMessage && (
              <p id={`${textareaId}-error`} className={styles.errorMessage} role="alert">
                {errorMessage}
              </p>
            )}

            {helperText && !errorMessage && (
              <p id={`${textareaId}-helper`} className={styles.helperText}>
                {helperText}
              </p>
            )}
          </div>

          {shouldShowCount && (
            <p
              id={`${textareaId}-count`}
              className={cn(
                styles.charCount,
                maxLength && charCount > maxLength && styles.charCountError
              )}
            >
              {charCount}
              {maxLength && ` / ${maxLength}`}
            </p>
          )}
        </div>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
