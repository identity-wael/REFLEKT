import React from 'react'
import { cn } from '../../utils'
import styles from './Spacer.module.css'

/**
 * Spacer Size (predefined or custom number in px)
 */
export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | number

/**
 * Spacer Direction
 */
export type SpacerDirection = 'horizontal' | 'vertical' | 'both'

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Spacer size
   * @default 'md'
   */
  size?: SpacerSize

  /**
   * Direction of spacing
   * @default 'vertical'
   */
  direction?: SpacerDirection

  /**
   * Use flex: 1 to fill available space
   * @default false
   */
  flex?: boolean

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Get size value in pixels
 */
const getSize = (size: SpacerSize): string => {
  if (typeof size === 'number') {
    return `${size}px`
  }

  const sizeMap = {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '48px',
  }

  return sizeMap[size]
}

/**
 * Spacer Component
 *
 * Flexible space component for creating spacing between elements.
 *
 * @example
 * ```tsx
 * <div>
 *   <Header />
 *   <Spacer size="lg" />
 *   <Content />
 * </div>
 *
 * <HStack>
 *   <Button>Cancel</Button>
 *   <Spacer flex />
 *   <Button>Save</Button>
 * </HStack>
 *
 * <Spacer size={32} direction="both" />
 * ```
 */
export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  (
    {
      size = 'md',
      direction = 'vertical',
      flex = false,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const sizeValue = getSize(size)

    const customStyles: React.CSSProperties = {
      ...style,
    }

    if (flex) {
      customStyles.flex = '1'
    } else {
      if (direction === 'vertical' || direction === 'both') {
        customStyles.height = sizeValue
      }
      if (direction === 'horizontal' || direction === 'both') {
        customStyles.width = sizeValue
      }
    }

    return (
      <div
        ref={ref}
        className={cn(styles.spacer, className)}
        style={customStyles}
        aria-hidden="true"
        {...props}
      />
    )
  }
)

Spacer.displayName = 'Spacer'
