import React from 'react'
import { cn } from '../../utils'
import styles from './Table.module.css'

/**
 * Column Configuration Type
 */
export interface TableColumn<T = any> {
  /**
   * Unique identifier for the column
   */
  key: string

  /**
   * Header text to display
   */
  header: string

  /**
   * Whether this column is sortable
   * @default false
   */
  sortable?: boolean

  /**
   * Custom render function for cell content
   */
  render?: (value: any, row: T, rowIndex: number) => React.ReactNode

  /**
   * Column width (CSS width value)
   */
  width?: string

  /**
   * Alignment for column content
   */
  align?: 'left' | 'center' | 'right'
}

/**
 * Table Variants
 */
export type TableVariant = 'default' | 'bordered' | 'striped'

/**
 * Table Sizes
 */
export type TableSize = 'sm' | 'md' | 'lg'

/**
 * Sort Direction
 */
export type SortDirection = 'asc' | 'desc' | null

/**
 * Pagination Configuration
 */
export interface TablePagination {
  current: number
  pageSize: number
  total: number
}

/**
 * Main Table Props
 */
export interface TableProps<T = any> extends React.HTMLAttributes<HTMLTableElement> {
  /**
   * Column configuration array
   */
  columns: TableColumn<T>[]

  /**
   * Data rows to display
   */
  data: T[]

  /**
   * Visual style variant
   * @default 'default'
   */
  variant?: TableVariant

  /**
   * Table size
   * @default 'md'
   */
  size?: TableSize

  /**
   * Enable row striping
   * @default false
   */
  striped?: boolean

  /**
   * Enable hover highlight on rows
   * @default true
   */
  hoverable?: boolean

  /**
   * Enable borders
   * @default false
   */
  bordered?: boolean

  /**
   * Enable row selection with checkboxes
   * @default false
   */
  selectable?: boolean

  /**
   * Selected row IDs
   */
  selectedRows?: string[]

  /**
   * Callback when row selection changes
   */
  onSelectionChange?: (selectedIds: string[]) => void

  /**
   * Callback when a row is clicked
   */
  onRowClick?: (row: T, rowIndex: number) => void

  /**
   * Enable column sorting
   * @default false
   */
  sortable?: boolean

  /**
   * Current sort column key
   */
  sortBy?: string

  /**
   * Current sort direction
   */
  sortDirection?: SortDirection

  /**
   * Callback when sort changes
   */
  onSort?: (columnKey: string, direction: SortDirection) => void

  /**
   * Pagination configuration
   */
  pagination?: TablePagination

  /**
   * Callback when pagination changes
   */
  onPageChange?: (page: number) => void

  /**
   * Loading state
   */
  loading?: boolean

  /**
   * Empty state message
   */
  emptyMessage?: string

  /**
   * Enable sticky header
   * @default true
   */
  stickyHeader?: boolean

  /**
   * Enable glass effect on header
   * @default false
   */
  glassHeader?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Table content
   */
  children?: React.ReactNode

  /**
   * Row identifier function (for selection)
   */
  getRowId?: (row: T, index: number) => string
}

/**
 * Sort Column Info
 */
interface SortState {
  columnKey: string | null
  direction: SortDirection
}

/**
 * Table Component
 *
 * Apple-style data table with advanced features including sorting,
 * filtering, selection, pagination, and responsive design.
 *
 * Features:
 * - Multiple variants (default, bordered, striped)
 * - Row selection with checkboxes
 * - Column sorting (ascending/descending)
 * - Hover highlight
 * - Sticky header
 * - Responsive design (horizontal scroll on mobile)
 * - Loading state with skeleton
 * - Empty state handling
 * - Pagination integration
 * - Glass effect optional for header
 * - Full keyboard accessibility
 *
 * @example
 * ```tsx
 * const columns = [
 *   { key: 'name', header: 'Name', sortable: true },
 *   { key: 'email', header: 'Email' },
 *   {
 *     key: 'status',
 *     header: 'Status',
 *     render: (value) => <Badge>{value}</Badge>
 *   }
 * ]
 *
 * <Table
 *   columns={columns}
 *   data={users}
 *   selectable
 *   sortable
 *   hoverable
 * />
 * ```
 */
export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      columns,
      data,
      variant = 'default',
      size = 'md',
      striped = false,
      hoverable = true,
      bordered = false,
      selectable = false,
      selectedRows = [],
      onSelectionChange,
      onRowClick,
      sortable = false,
      sortBy,
      sortDirection,
      onSort,
      pagination,
      onPageChange,
      loading = false,
      emptyMessage = 'No data available',
      stickyHeader = true,
      glassHeader = false,
      className,
      children,
      getRowId = (_, index) => `row-${index}`,
      ...props
    },
    ref
  ) => {
    const [internalSort, setInternalSort] = React.useState<SortState>({
      columnKey: sortBy || null,
      direction: sortDirection || null,
    })

    const [internalSelectedRows, setInternalSelectedRows] = React.useState<string[]>(selectedRows)

    // Update internal state when props change
    React.useEffect(() => {
      setInternalSelectedRows(selectedRows)
    }, [selectedRows])

    // Handle sort column click
    const handleSort = (columnKey: string) => {
      if (!sortable) return

      let newDirection: SortDirection = 'asc'
      if (internalSort.columnKey === columnKey) {
        if (internalSort.direction === 'asc') {
          newDirection = 'desc'
        } else if (internalSort.direction === 'desc') {
          newDirection = null
        }
      }

      setInternalSort({
        columnKey: newDirection ? columnKey : null,
        direction: newDirection,
      })

      onSort?.(columnKey, newDirection)
    }

    // Handle row selection
    const handleSelectRow = (rowId: string, e: React.MouseEvent) => {
      e.stopPropagation()

      const newSelected = internalSelectedRows.includes(rowId)
        ? internalSelectedRows.filter((id) => id !== rowId)
        : [...internalSelectedRows, rowId]

      setInternalSelectedRows(newSelected)
      onSelectionChange?.(newSelected)
    }

    // Handle select all rows
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
      const allRowIds = data.map((row, index) => getRowId(row, index))
      const newSelected = e.target.checked ? allRowIds : []

      setInternalSelectedRows(newSelected)
      onSelectionChange?.(newSelected)
    }

    const isAllSelected = data.length > 0 && internalSelectedRows.length === data.length
    const isSomeSelected = internalSelectedRows.length > 0 && !isAllSelected

    // Display data (apply pagination if provided)
    const displayData = pagination
      ? data.slice((pagination.current - 1) * pagination.pageSize, pagination.current * pagination.pageSize)
      : data

    return (
      <div className={cn(styles.tableContainer, className)}>
        <div className={styles.tableWrapper}>
          <table
            ref={ref}
            className={cn(
              styles.table,
              styles[`variant-${variant}`],
              styles[`size-${size}`],
              striped && styles.striped,
              hoverable && styles.hoverable,
              bordered && styles.bordered,
              stickyHeader && styles.stickyHeader,
              glassHeader && styles.glassHeader,
              loading && styles.loading
            )}
            role="table"
            {...props}
          >
            <TableHead
              columns={columns}
              selectable={selectable}
              sortable={sortable}
              sortBy={internalSort.columnKey}
              sortDirection={internalSort.direction}
              onSort={handleSort}
              isAllSelected={isAllSelected}
              isSomeSelected={isSomeSelected}
              onSelectAll={handleSelectAll}
              glassHeader={glassHeader}
            />

            <tbody className={styles.tbody} role="rowgroup">
              {loading ? (
                // Loading skeleton rows
                Array.from({ length: 5 }).map((_, index) => (
                  <tr key={`skeleton-${index}`} className={styles.skeletonRow} role="row">
                    {selectable && (
                      <td className={styles.cellCheckbox} role="cell">
                        <div className={styles.skeleton} />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td key={column.key} className={styles.cell} role="cell">
                        <div className={styles.skeleton} />
                      </td>
                    ))}
                  </tr>
                ))
              ) : displayData.length === 0 ? (
                // Empty state
                <tr className={styles.emptyRow} role="row">
                  <td
                    colSpan={columns.length + (selectable ? 1 : 0)}
                    className={styles.emptyCell}
                    role="cell"
                  >
                    <div className={styles.emptyContent}>
                      <p className={styles.emptyText}>{emptyMessage}</p>
                    </div>
                  </td>
                </tr>
              ) : (
                // Data rows
                displayData.map((row, rowIndex) => {
                  const actualIndex = pagination
                    ? (pagination.current - 1) * pagination.pageSize + rowIndex
                    : rowIndex
                  const rowId = getRowId(row, actualIndex)
                  const isSelected = internalSelectedRows.includes(rowId)

                  return (
                    <tr
                      key={rowId}
                      className={cn(styles.row, isSelected && styles.selectedRow)}
                      onClick={() => onRowClick?.(row, actualIndex)}
                      role="row"
                      aria-selected={selectable ? isSelected : undefined}
                    >
                      {selectable && (
                        <td className={styles.cellCheckbox} role="cell">
                          <input
                            type="checkbox"
                            className={styles.checkbox}
                            checked={isSelected}
                            onChange={(e) => handleSelectRow(rowId, e as any)}
                            aria-label={`Select row ${actualIndex + 1}`}
                          />
                        </td>
                      )}
                      {columns.map((column) => (
                        <td
                          key={`${rowId}-${column.key}`}
                          className={cn(
                            styles.cell,
                            column.align && styles[`align-${column.align}`]
                          )}
                          style={{ width: column.width }}
                          role="cell"
                        >
                          {column.render ? column.render(row[column.key], row, actualIndex) : row[column.key]}
                        </td>
                      ))}
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination && !loading && (
          <TablePaginationFooter
            pagination={pagination}
            onPageChange={onPageChange}
          />
        )}
      </div>
    )
  }
)

Table.displayName = 'Table'

/**
 * TableHead Component
 */
interface TableHeadProps<T = any> {
  columns: TableColumn<T>[]
  selectable: boolean
  sortable: boolean
  sortBy: string | null
  sortDirection: SortDirection
  onSort: (columnKey: string, direction: SortDirection) => void
  isAllSelected: boolean
  isSomeSelected: boolean
  onSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void
  glassHeader: boolean
}

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  (
    {
      columns,
      selectable,
      sortable,
      sortBy,
      sortDirection,
      onSort,
      isAllSelected,
      isSomeSelected,
      onSelectAll,
      glassHeader,
    },
    ref
  ) => {
    return (
      <thead
        ref={ref}
        className={cn(styles.thead, glassHeader && styles.glassHeaderContainer)}
        role="rowgroup"
      >
        <tr className={styles.headerRow} role="row">
          {selectable && (
            <th className={styles.headerCellCheckbox} role="columnheader">
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={isAllSelected}
                ref={(el) => {
                  if (el) {
                    el.indeterminate = isSomeSelected
                  }
                }}
                onChange={onSelectAll}
                aria-label="Select all rows"
              />
            </th>
          )}
          {columns.map((column) => (
            <th
              key={column.key}
              className={cn(
                styles.headerCell,
                column.sortable && sortable && styles.sortable,
                sortBy === column.key && styles.sorted
              )}
              style={{ width: column.width }}
              role="columnheader"
              aria-sort={
                sortBy === column.key
                  ? sortDirection === 'asc'
                    ? 'ascending'
                    : 'descending'
                  : 'none'
              }
              onClick={() => {
                if (column.sortable && sortable) {
                  onSort(column.key, sortDirection)
                }
              }}
            >
              <div className={styles.headerContent}>
                <span>{column.header}</span>
                {column.sortable && sortable && (
                  <span className={cn(styles.sortIcon, sortBy === column.key && styles.activeSortIcon)}>
                    {sortBy === column.key && (
                      sortDirection === 'asc' ? (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7 14l5-5 5 5z" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7 10l5 5 5-5z" />
                        </svg>
                      )
                    )}
                  </span>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
    )
  }
)

TableHead.displayName = 'TableHead'

/**
 * TableRow Component
 */
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode
}

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tr ref={ref} className={cn(styles.row, className)} role="row" {...props}>
        {children}
      </tr>
    )
  }
)

TableRow.displayName = 'TableRow'

/**
 * TableCell Component
 */
export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right'
  header?: boolean
  children: React.ReactNode
}

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, align, header = false, children, ...props }, ref) => {
    const Element = header ? 'th' : 'td'

    return (
      <Element
        ref={ref as any}
        className={cn(
          header ? styles.headerCell : styles.cell,
          align && styles[`align-${align}`],
          className
        )}
        role={header ? 'columnheader' : 'cell'}
        {...(props as any)}
      >
        {children}
      </Element>
    )
  }
)

TableCell.displayName = 'TableCell'

/**
 * TableBody Component
 */
export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode
}

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        className={cn(styles.tbody, className)}
        role="rowgroup"
        {...props}
      >
        {children}
      </tbody>
    )
  }
)

TableBody.displayName = 'TableBody'

/**
 * TableHeader Component
 */
export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode
}

export const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={cn(styles.thead, className)}
        role="rowgroup"
        {...props}
      >
        {children}
      </thead>
    )
  }
)

TableHeader.displayName = 'TableHeader'

/**
 * TableFooter Component
 */
export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode
}

export const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tfoot
        ref={ref}
        className={cn(styles.tfoot, className)}
        role="rowgroup"
        {...props}
      >
        {children}
      </tfoot>
    )
  }
)

TableFooter.displayName = 'TableFooter'

/**
 * TablePaginationFooter Component
 */
interface TablePaginationFooterProps {
  pagination: TablePagination
  onPageChange?: (page: number) => void
}

const TablePaginationFooter: React.FC<TablePaginationFooterProps> = ({
  pagination,
  onPageChange,
}) => {
  const totalPages = Math.ceil(pagination.total / pagination.pageSize)

  return (
    <div className={styles.paginationFooter}>
      <p className={styles.paginationInfo}>
        Showing {(pagination.current - 1) * pagination.pageSize + 1} to{' '}
        {Math.min(pagination.current * pagination.pageSize, pagination.total)} of{' '}
        {pagination.total} results
      </p>

      <div className={styles.paginationControls}>
        <button
          className={styles.paginationButton}
          onClick={() => onPageChange?.(pagination.current - 1)}
          disabled={pagination.current === 1}
          aria-label="Previous page"
        >
          ← Previous
        </button>

        <span className={styles.paginationPages}>
          Page {pagination.current} of {totalPages}
        </span>

        <button
          className={styles.paginationButton}
          onClick={() => onPageChange?.(pagination.current + 1)}
          disabled={pagination.current === totalPages}
          aria-label="Next page"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
