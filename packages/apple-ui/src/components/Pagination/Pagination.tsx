import React from 'react'
import { cn } from '../../utils'
import styles from './Pagination.module.css'

/**
 * Pagination Variants
 */
export type PaginationVariant = 'default' | 'simple' | 'compact'

/**
 * Pagination Size
 */
export type PaginationSize = 'sm' | 'md' | 'lg'

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Current active page (1-indexed)
   */
  currentPage: number

  /**
   * Total number of pages
   */
  totalPages: number

  /**
   * Callback when page changes
   */
  onPageChange: (page: number) => void

  /**
   * Variant type
   * @default 'default'
   */
  variant?: PaginationVariant

  /**
   * Show first/last page buttons
   * @default true
   */
  showFirstLast?: boolean

  /**
   * Show previous/next buttons
   * @default true
   */
  showPrevNext?: boolean

  /**
   * Number of page buttons to show on each side of current page
   * @default 1
   */
  siblingCount?: number

  /**
   * Size variant
   * @default 'md'
   */
  size?: PaginationSize

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Generate page numbers with ellipsis
 */
const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
  siblingCount: number
): (number | string)[] => {
  const totalNumbers = siblingCount * 2 + 3 // siblings + current + first + last
  const totalBlocks = totalNumbers + 2 // + 2 ellipsis

  if (totalPages <= totalBlocks) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

  const showLeftEllipsis = leftSiblingIndex > 2
  const showRightEllipsis = rightSiblingIndex < totalPages - 1

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
    return [...leftRange, '...', totalPages]
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1
    )
    return [1, '...', ...rightRange]
  }

  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i
  )
  return [1, '...', ...middleRange, '...', totalPages]
}

/**
 * Pagination Component
 *
 * Page navigation with multiple variants and customization options.
 *
 * @example
 * ```tsx
 * <Pagination
 *   currentPage={currentPage}
 *   totalPages={10}
 *   onPageChange={setCurrentPage}
 *   variant="default"
 *   siblingCount={1}
 * />
 *
 * <Pagination
 *   currentPage={currentPage}
 *   totalPages={10}
 *   onPageChange={setCurrentPage}
 *   variant="compact"
 * />
 * ```
 */
export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      variant = 'default',
      showFirstLast = true,
      showPrevNext = true,
      siblingCount = 1,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange(page)
      }
    }

    // Simple variant: just prev/next
    if (variant === 'simple') {
      return (
        <nav
          ref={ref}
          aria-label="Pagination"
          className={cn(
            styles.pagination,
            styles[`variant-${variant}`],
            styles[`size-${size}`],
            className
          )}
          {...props}
        >
          <button
            className={cn(styles.button, styles.prevButton)}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
            aria-label="Previous page"
          >
            <ChevronLeftIcon />
            <span>Previous</span>
          </button>
          <button
            className={cn(styles.button, styles.nextButton)}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
            aria-label="Next page"
          >
            <span>Next</span>
            <ChevronRightIcon />
          </button>
        </nav>
      )
    }

    // Compact variant: "Page X of Y"
    if (variant === 'compact') {
      return (
        <nav
          ref={ref}
          aria-label="Pagination"
          className={cn(
            styles.pagination,
            styles[`variant-${variant}`],
            styles[`size-${size}`],
            className
          )}
          {...props}
        >
          {showPrevNext && (
            <button
              className={cn(styles.button, styles.iconButton)}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
              aria-label="Previous page"
            >
              <ChevronLeftIcon />
            </button>
          )}
          <span className={styles.compactText}>
            Page {currentPage} of {totalPages}
          </span>
          {showPrevNext && (
            <button
              className={cn(styles.button, styles.iconButton)}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
              aria-label="Next page"
            >
              <ChevronRightIcon />
            </button>
          )}
        </nav>
      )
    }

    // Default variant: numbered pages with ellipsis
    const pageNumbers = generatePageNumbers(currentPage, totalPages, siblingCount)

    return (
      <nav
        ref={ref}
        aria-label="Pagination"
        className={cn(
          styles.pagination,
          styles[`variant-${variant}`],
          styles[`size-${size}`],
          className
        )}
        {...props}
      >
        {showFirstLast && (
          <button
            className={cn(styles.button, styles.iconButton)}
            onClick={() => handlePageChange(1)}
            disabled={isFirstPage}
            aria-label="First page"
          >
            <ChevronDoubleLeftIcon />
          </button>
        )}

        {showPrevNext && (
          <button
            className={cn(styles.button, styles.iconButton)}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
            aria-label="Previous page"
          >
            <ChevronLeftIcon />
          </button>
        )}

        <div className={styles.pages}>
          {pageNumbers.map((pageNumber, index) => {
            if (pageNumber === '...') {
              return (
                <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                  ...
                </span>
              )
            }

            const page = pageNumber as number
            const isActive = page === currentPage

            return (
              <button
                key={page}
                className={cn(
                  styles.button,
                  styles.pageButton,
                  isActive && styles.active
                )}
                onClick={() => handlePageChange(page)}
                disabled={isActive}
                aria-label={`Page ${page}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {page}
              </button>
            )
          })}
        </div>

        {showPrevNext && (
          <button
            className={cn(styles.button, styles.iconButton)}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
            aria-label="Next page"
          >
            <ChevronRightIcon />
          </button>
        )}

        {showFirstLast && (
          <button
            className={cn(styles.button, styles.iconButton)}
            onClick={() => handlePageChange(totalPages)}
            disabled={isLastPage}
            aria-label="Last page"
          >
            <ChevronDoubleRightIcon />
          </button>
        )}
      </nav>
    )
  }
)

Pagination.displayName = 'Pagination'

// Icon components
const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M10 3L5 8L10 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M6 3L11 8L6 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ChevronDoubleLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M11 3L6 8L11 13M6 3L1 8L6 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ChevronDoubleRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M5 3L10 8L5 13M10 3L15 8L10 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
