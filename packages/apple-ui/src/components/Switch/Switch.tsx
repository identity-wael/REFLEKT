import React from 'react'
import { cn } from '../../utils'
import styles from './Switch.module.css'

export type SwitchSize = 'sm' | 'md' | 'lg'

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * Checked state
   */
  checked?: boolean

  /**
   * Default checked state (uncontrolled)
   */
  defaultChecked?: boolean

  /**
   * Change handler
   */
  onChange?: (checked: boolean) => void

  /**
   * Switch size
   * @default 'md'
   */
  switchSize?: SwitchSize

  /**
   * Disabled state
   */
  disabled?: boolean

  /**
   * Label text
   */
  label?: string

  /**
   * Label position
   * @default 'right'
   */
  labelPosition?: 'left' | 'right'

  /**
   * Color when checked (iOS style)
   * @default 'green'
   */
  color?: 'green' | 'blue' | 'red' | 'orange' | 'purple'

  className?: string
}

/**
 * Switch Component
 *
 * iOS-style toggle switch with smooth animation.
 *
 * @example
 * ```tsx
 * <Switch
 *   checked={enabled}
 *   onChange={setEnabled}
 *   label="Enable notifications"
 * />
 * ```
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked,
      onChange,
      switchSize = 'md',
      disabled = false,
      label,
      labelPosition = 'right',
      color = 'green',
      className,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? false)
    const isControlled = controlledChecked !== undefined
    const checked = isControlled ? controlledChecked : internalChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked
      if (!isControlled) {
        setInternalChecked(newChecked)
      }
      onChange?.(newChecked)
    }

    const switchElement = (
      <label
        className={cn(
          styles.switch,
          styles[`size-${switchSize}`],
          styles[`color-${color}`],
          checked && styles.checked,
          disabled && styles.disabled,
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          className={styles.input}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        <span className={styles.slider}>
          <span className={styles.thumb} />
        </span>
      </label>
    )

    if (label) {
      return (
        <div className={cn(styles.switchWithLabel, styles[`label-${labelPosition}`])}>
          {labelPosition === 'left' && <span className={styles.labelText}>{label}</span>}
          {switchElement}
          {labelPosition === 'right' && <span className={styles.labelText}>{label}</span>}
        </div>
      )
    }

    return switchElement
  }
)

Switch.displayName = 'Switch'
