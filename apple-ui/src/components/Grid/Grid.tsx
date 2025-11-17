import React from 'react'
import { cn } from '../../utils'
import styles from './Grid.module.css'

/**
 * Grid Gap Size
 */
export type GridGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number

/**
 * Responsive Column Configuration
 */
export interface ResponsiveColumns {
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns (1-12) or custom grid-template-columns string
   * Can also be a responsive object
   * @default 12
   */
  columns?: number | string | ResponsiveColumns

  /**
   * Gap between grid items
   * @default 'md'
   */
  gap?: GridGap

  /**
   * Number of rows or custom grid-template-rows string
   */
  rows?: number | string

  /**
   * Auto rows size
   */
  autoRows?: string

  /**
   * Grid auto flow
   */
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense'

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Grid content
   */
  children: React.ReactNode
}

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Column span (how many columns this item should span)
   * @default 1
   */
  colspan?: number

  /**
   * Row span (how many rows this item should span)
   * @default 1
   */
  rowspan?: number

  /**
   * Column start position
   */
  colStart?: number

  /**
   * Column end position
   */
  colEnd?: number

  /**
   * Row start position
   */
  rowStart?: number

  /**
   * Row end position
   */
  rowEnd?: number

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Item content
   */
  children: React.ReactNode
}

/**
 * Get gap value in pixels
 */
const getGap = (gap: GridGap): string => {
  if (typeof gap === 'number') {
    return `${gap}px`
  }

  const gapMap = {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
  }

  return gapMap[gap]
}

/**
 * Get columns template
 */
const getColumnsTemplate = (columns: number | string | ResponsiveColumns): string | undefined => {
  if (typeof columns === 'number') {
    return `repeat(${columns}, 1fr)`
  }

  if (typeof columns === 'string') {
    return columns
  }

  // For responsive columns, we'll handle this with CSS classes
  return undefined
}

/**
 * Grid Component
 *
 * CSS Grid layout component with responsive column support.
 *
 * @example
 * ```tsx
 * <Grid columns={3} gap="lg">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 *
 * <Grid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="md">
 *   <GridItem colspan={2}>Wide item</GridItem>
 *   <GridItem>Regular item</GridItem>
 * </Grid>
 * ```
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      columns = 12,
      gap = 'md',
      rows,
      autoRows,
      autoFlow,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const gapValue = getGap(gap)
    const columnsTemplate = getColumnsTemplate(columns)

    const customStyles: React.CSSProperties = {
      ...style,
      gap: gapValue,
    }

    if (columnsTemplate) {
      customStyles.gridTemplateColumns = columnsTemplate
    }

    if (rows) {
      if (typeof rows === 'number') {
        customStyles.gridTemplateRows = `repeat(${rows}, 1fr)`
      } else {
        customStyles.gridTemplateRows = rows
      }
    }

    if (autoRows) {
      customStyles.gridAutoRows = autoRows
    }

    if (autoFlow) {
      customStyles.gridAutoFlow = autoFlow
    }

    // Handle responsive columns
    const isResponsive = typeof columns === 'object' && !Array.isArray(columns)
    const responsiveClasses = isResponsive
      ? Object.entries(columns).map(([breakpoint, cols]) =>
          styles[`cols-${breakpoint}-${cols}`]
        )
      : []

    return (
      <div
        ref={ref}
        className={cn(styles.grid, ...responsiveClasses, className)}
        style={customStyles}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Grid.displayName = 'Grid'

/**
 * GridItem Component
 */
export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      colspan = 1,
      rowspan = 1,
      colStart,
      colEnd,
      rowStart,
      rowEnd,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const customStyles: React.CSSProperties = {
      ...style,
    }

    // Handle column span
    if (colStart !== undefined && colEnd !== undefined) {
      customStyles.gridColumn = `${colStart} / ${colEnd}`
    } else if (colStart !== undefined) {
      customStyles.gridColumnStart = colStart
    } else if (colEnd !== undefined) {
      customStyles.gridColumnEnd = colEnd
    } else if (colspan > 1) {
      customStyles.gridColumn = `span ${colspan}`
    }

    // Handle row span
    if (rowStart !== undefined && rowEnd !== undefined) {
      customStyles.gridRow = `${rowStart} / ${rowEnd}`
    } else if (rowStart !== undefined) {
      customStyles.gridRowStart = rowStart
    } else if (rowEnd !== undefined) {
      customStyles.gridRowEnd = rowEnd
    } else if (rowspan > 1) {
      customStyles.gridRow = `span ${rowspan}`
    }

    return (
      <div
        ref={ref}
        className={cn(styles.gridItem, className)}
        style={customStyles}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GridItem.displayName = 'GridItem'
