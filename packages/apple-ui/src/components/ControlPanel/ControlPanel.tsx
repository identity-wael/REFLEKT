import React from 'react'
import { cn } from '../../utils'
import styles from './ControlPanel.module.css'

export interface ControlConfig {
  id: string
  type: 'toggle' | 'slider' | 'button'
  icon?: React.ReactNode
  label: string
  value?: boolean | number
  onChange?: (value: boolean | number) => void
  size?: 'small' | 'large'
  disabled?: boolean
}

export interface ControlPanelProps {
  controls: ControlConfig[]
  columns?: number
  className?: string
}

/**
 * ControlPanel component - iOS Control Center style panel
 *
 * @example
 * ```tsx
 * <ControlPanel
 *   controls={[
 *     { id: 'wifi', type: 'toggle', label: 'Wi-Fi', value: true, onChange: () => {} },
 *     { id: 'brightness', type: 'slider', label: 'Brightness', value: 0.7, onChange: () => {} },
 *   ]}
 *   columns={4}
 * />
 * ```
 */
export function ControlPanel({
  controls,
  columns = 4,
  className,
}: ControlPanelProps) {
  const renderControl = (control: ControlConfig) => {
    const isActive = control.type === 'toggle' ? Boolean(control.value) : false

    switch (control.type) {
      case 'toggle':
        return (
          <button
            className={cn(
              styles.control,
              styles.toggle,
              control.size === 'large' && styles.large,
              isActive && styles.active,
              control.disabled && styles.disabled
            )}
            onClick={() => {
              if (!control.disabled && control.onChange) {
                control.onChange(!control.value)
              }
            }}
            disabled={control.disabled}
            aria-label={control.label}
            aria-pressed={isActive}
            type="button"
          >
            {control.icon && (
              <div className={styles.icon} aria-hidden="true">
                {control.icon}
              </div>
            )}
            <div className={styles.label}>{control.label}</div>
          </button>
        )

      case 'slider':
        return (
          <div
            className={cn(
              styles.control,
              styles.slider,
              control.size === 'large' && styles.large,
              control.disabled && styles.disabled
            )}
          >
            <div className={styles.sliderHeader}>
              {control.icon && (
                <div className={styles.icon} aria-hidden="true">
                  {control.icon}
                </div>
              )}
              <div className={styles.label}>{control.label}</div>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={typeof control.value === 'number' ? control.value : 0}
              onChange={(e) => {
                if (!control.disabled && control.onChange) {
                  control.onChange(parseFloat(e.target.value))
                }
              }}
              disabled={control.disabled}
              className={styles.sliderInput}
              aria-label={control.label}
            />
          </div>
        )

      case 'button':
        return (
          <button
            className={cn(
              styles.control,
              styles.button,
              control.size === 'large' && styles.large,
              control.disabled && styles.disabled
            )}
            onClick={() => {
              if (!control.disabled && control.onChange) {
                control.onChange(true)
              }
            }}
            disabled={control.disabled}
            aria-label={control.label}
            type="button"
          >
            {control.icon && (
              <div className={styles.icon} aria-hidden="true">
                {control.icon}
              </div>
            )}
            <div className={styles.label}>{control.label}</div>
          </button>
        )

      default:
        return null
    }
  }

  return (
    <div
      className={cn(styles.controlPanel, className)}
      style={{
        '--columns': columns,
      } as React.CSSProperties}
      role="group"
      aria-label="Control panel"
    >
      {controls.map((control) => (
        <div
          key={control.id}
          className={cn(
            styles.controlWrapper,
            control.size === 'large' && styles.largeWrapper
          )}
        >
          {renderControl(control)}
        </div>
      ))}
    </div>
  )
}
