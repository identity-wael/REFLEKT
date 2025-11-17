import React from 'react'
import { cn } from '../../utils'
import styles from './Slider.module.css'

export type SliderSize = 'sm' | 'md' | 'lg'
export type SliderColor = 'blue' | 'green' | 'orange' | 'red' | 'purple'

export interface SliderMark {
  value: number
  label?: string
}

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * Current value
   */
  value?: number

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: number

  /**
   * Change handler
   */
  onChange?: (value: number) => void

  /**
   * Minimum value
   * @default 0
   */
  min?: number

  /**
   * Maximum value
   * @default 100
   */
  max?: number

  /**
   * Step increment
   * @default 1
   */
  step?: number

  /**
   * Slider size
   * @default 'md'
   */
  sliderSize?: SliderSize

  /**
   * Accent color
   * @default 'blue'
   */
  color?: SliderColor

  /**
   * Disabled state
   */
  disabled?: boolean

  /**
   * Show value label above thumb when dragging
   * @default false
   */
  showValue?: boolean

  /**
   * Label text
   */
  label?: string

  /**
   * Tick marks for stepped values
   */
  marks?: SliderMark[]

  className?: string
}

/**
 * Slider Component
 *
 * iOS-style range slider with smooth thumb and animations.
 *
 * @example
 * ```tsx
 * <Slider
 *   value={volume}
 *   onChange={setVolume}
 *   min={0}
 *   max={100}
 *   label="Volume"
 *   showValue
 * />
 * ```
 */
export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      value: controlledValue,
      defaultValue = 50,
      onChange,
      min = 0,
      max = 100,
      step = 1,
      sliderSize = 'md',
      color = 'blue',
      disabled = false,
      showValue = false,
      label,
      marks,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const [isDragging, setIsDragging] = React.useState(false)
    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(e.target.value)
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)
    }

    const handleMouseDown = () => setIsDragging(true)
    const handleMouseUp = () => setIsDragging(false)

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return

      let newValue = value
      const largeStep = (max - min) / 10

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          e.preventDefault()
          newValue = Math.min(max, value + step)
          break
        case 'ArrowLeft':
        case 'ArrowDown':
          e.preventDefault()
          newValue = Math.max(min, value - step)
          break
        case 'PageUp':
          e.preventDefault()
          newValue = Math.min(max, value + largeStep)
          break
        case 'PageDown':
          e.preventDefault()
          newValue = Math.max(min, value - largeStep)
          break
        case 'Home':
          e.preventDefault()
          newValue = min
          break
        case 'End':
          e.preventDefault()
          newValue = max
          break
        default:
          return
      }

      if (!isControlled) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)
    }

    const percentage = ((value - min) / (max - min)) * 100
    const sliderId = React.useId()

    React.useEffect(() => {
      if (isDragging) {
        const handleGlobalMouseUp = () => setIsDragging(false)
        window.addEventListener('mouseup', handleGlobalMouseUp)
        window.addEventListener('touchend', handleGlobalMouseUp)
        return () => {
          window.removeEventListener('mouseup', handleGlobalMouseUp)
          window.removeEventListener('touchend', handleGlobalMouseUp)
        }
      }
    }, [isDragging])

    return (
      <div className={cn(styles.container, className)}>
        {label && (
          <label htmlFor={sliderId} className={styles.label}>
            {label}
          </label>
        )}

        <div className={styles.sliderWrapper}>
          <div
            className={cn(
              styles.slider,
              styles[`size-${sliderSize}`],
              styles[`color-${color}`],
              disabled && styles.disabled
            )}
          >
            <div className={styles.track}>
              <div
                className={styles.trackFilled}
                style={{ width: `${percentage}%` }}
              />
            </div>

            {marks && marks.length > 0 && (
              <div className={styles.marks}>
                {marks.map((mark) => {
                  const markPercentage = ((mark.value - min) / (max - min)) * 100
                  return (
                    <div
                      key={mark.value}
                      className={styles.mark}
                      style={{ left: `${markPercentage}%` }}
                    >
                      <div className={styles.markTick} />
                      {mark.label && (
                        <div className={styles.markLabel}>{mark.label}</div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            <input
              ref={ref}
              id={sliderId}
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={handleChange}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              className={styles.input}
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={value}
              aria-label={label || 'Slider'}
              {...props}
            />

            <div
              className={styles.thumb}
              style={{ left: `${percentage}%` }}
              aria-hidden="true"
            >
              {showValue && isDragging && (
                <div className={styles.valueLabel}>{value}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
)

Slider.displayName = 'Slider'
