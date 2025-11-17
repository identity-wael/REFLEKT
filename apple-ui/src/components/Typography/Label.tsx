import React from 'react'
import { Typography, type TypographyProps } from './Typography'
import { formPresets } from './utilities/typography-scales'

export interface LabelProps extends Omit<TypographyProps, 'variant' | 'as'> {
  /**
   * Label style variant
   * @default 'default'
   */
  variant?: 'default' | 'helper' | 'error'

  /**
   * ID of the input element this label is for
   * Sets the htmlFor attribute
   */
  htmlFor?: string

  /**
   * Whether label is required
   * Adds visual indicator
   */
  required?: boolean
}

/**
 * Label Component
 *
 * Specialized component for form labels and input descriptions.
 * Follows Apple's form design patterns.
 *
 * @example
 * ```tsx
 * // Standard form label
 * <Label htmlFor="email">Email Address</Label>
 *
 * // Required field
 * <Label htmlFor="name" required>Full Name</Label>
 *
 * // Helper text
 * <Label variant="helper">
 *   Password must be at least 8 characters
 * </Label>
 *
 * // Error message
 * <Label variant="error">
 *   Please enter a valid email address
 * </Label>
 * ```
 */
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      variant = 'default',
      htmlFor,
      required,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const presetConfig = formPresets[variant === 'default' ? 'label' : variant]

    return (
      <Typography
        ref={ref as React.Ref<HTMLElement>}
        variant={presetConfig.variant}
        weight={props.weight ?? presetConfig.weight}
        color={props.color ?? presetConfig.color}
        as="label"
        className={className}
        {...(htmlFor && { htmlFor })}
        {...props}
      >
        {children}
        {required && variant === 'default' && (
          <span
            style={{
              color: '#FF3B30',
              marginLeft: '4px',
            }}
            aria-label="required"
          >
            *
          </span>
        )}
      </Typography>
    )
  }
)

Label.displayName = 'Label'
