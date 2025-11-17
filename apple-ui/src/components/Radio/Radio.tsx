import React from 'react'
import { cn } from '../../utils'
import styles from './Radio.module.css'

export type RadioSize = 'sm' | 'md' | 'lg'

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Radio size
   * @default 'md'
   */
  size?: RadioSize

  /**
   * Label for the radio
   */
  label?: string

  /**
   * Description text shown below the label
   */
  description?: string

  /**
   * Error state
   */
  error?: boolean

  /**
   * Additional className for the container
   */
  containerClassName?: string
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = 'md',
      label,
      description,
      error = false,
      containerClassName,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={cn(
          styles.container,
          disabled && styles.containerDisabled,
          containerClassName
        )}
      >
        <div className={styles.radioWrapper}>
          <input
            ref={ref}
            type="radio"
            disabled={disabled}
            className={cn(
              styles.radio,
              styles[`size-${size}`],
              error && styles.error,
              className
            )}
            {...props}
          />
          <div
            className={cn(
              styles.radioVisual,
              styles[`size-${size}`],
              error && styles.visualError,
              disabled && styles.visualDisabled
            )}
          >
            <div className={styles.radioDot} />
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

Radio.displayName = 'Radio'

export interface RadioGroupProps {
  /**
   * Radio group name
   */
  name: string

  /**
   * Currently selected value
   */
  value?: string

  /**
   * Change handler
   */
  onChange?: (value: string) => void

  /**
   * Radio options
   */
  options: Array<{
    value: string
    label: string
    description?: string
    disabled?: boolean
  }>

  /**
   * Radio size
   * @default 'md'
   */
  size?: RadioSize

  /**
   * Error state for all radios
   */
  error?: boolean

  /**
   * Additional className
   */
  className?: string

  /**
   * Orientation
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical'
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  onChange,
  options,
  size = 'md',
  error = false,
  className,
  orientation = 'vertical',
}) => {
  return (
    <div
      className={cn(
        styles.radioGroup,
        styles[`orientation-${orientation}`],
        className
      )}
      role="radiogroup"
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={() => onChange?.(option.value)}
          label={option.label}
          description={option.description}
          disabled={option.disabled}
          size={size}
          error={error}
        />
      ))}
    </div>
  )
}
