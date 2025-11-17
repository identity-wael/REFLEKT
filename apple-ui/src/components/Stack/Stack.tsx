import React from 'react'
import { cn } from '../../utils'
import styles from './Stack.module.css'

/**
 * Stack Direction
 */
export type StackDirection = 'vertical' | 'horizontal'

/**
 * Stack Spacing (predefined or custom number)
 */
export type StackSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number

/**
 * Stack Alignment
 */
export type StackAlign = 'start' | 'center' | 'end' | 'stretch'

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Stack direction
   * @default 'vertical'
   */
  direction?: StackDirection

  /**
   * Spacing between children
   * @default 'md'
   */
  spacing?: StackSpacing

  /**
   * Alignment of children
   * @default 'stretch'
   */
  align?: StackAlign

  /**
   * Allow wrapping
   * @default false
   */
  wrap?: boolean

  /**
   * Full width
   * @default false
   */
  fullWidth?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Stack content
   */
  children: React.ReactNode
}

/**
 * Get spacing value in pixels
 */
const getSpacing = (spacing: StackSpacing): string => {
  if (typeof spacing === 'number') {
    return `${spacing}px`
  }

  const spacingMap = {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
  }

  return spacingMap[spacing]
}

/**
 * Stack Component
 *
 * SwiftUI-style stack layout for arranging children vertically or horizontally.
 *
 * @example
 * ```tsx
 * <Stack direction="vertical" spacing="md" align="start">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Stack>
 *
 * <Stack direction="horizontal" spacing={16}>
 *   <Button>Cancel</Button>
 *   <Button>Save</Button>
 * </Stack>
 * ```
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = 'vertical',
      spacing = 'md',
      align = 'stretch',
      wrap = false,
      fullWidth = false,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const spacingValue = getSpacing(spacing)

    const customStyles = {
      ...style,
      '--stack-spacing': spacingValue,
    } as React.CSSProperties

    return (
      <div
        ref={ref}
        className={cn(
          styles.stack,
          styles[`direction-${direction}`],
          styles[`align-${align}`],
          wrap && styles.wrap,
          fullWidth && styles.fullWidth,
          className
        )}
        style={customStyles}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Stack.displayName = 'Stack'

/**
 * VStack Component
 *
 * Convenience component for vertical stacks.
 *
 * @example
 * ```tsx
 * <VStack spacing="lg">
 *   <Heading>Title</Heading>
 *   <Text>Description</Text>
 * </VStack>
 * ```
 */
export const VStack = React.forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  (props, ref) => {
    return <Stack ref={ref} direction="vertical" {...props} />
  }
)

VStack.displayName = 'VStack'

/**
 * HStack Component
 *
 * Convenience component for horizontal stacks.
 *
 * @example
 * ```tsx
 * <HStack spacing="md" align="center">
 *   <Icon />
 *   <Text>Label</Text>
 * </HStack>
 * ```
 */
export const HStack = React.forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  (props, ref) => {
    return <Stack ref={ref} direction="horizontal" {...props} />
  }
)

HStack.displayName = 'HStack'
