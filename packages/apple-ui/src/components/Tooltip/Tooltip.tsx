import React from 'react'
import { cn } from '../../utils'
import styles from './Tooltip.module.css'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  /**
   * Tooltip text content
   */
  content: React.ReactNode

  /**
   * Position relative to trigger
   * @default 'top'
   */
  position?: TooltipPosition

  /**
   * Delay before showing tooltip (ms)
   * @default 300
   */
  delay?: number

  /**
   * Trigger element
   */
  children: React.ReactElement

  /**
   * Disabled state (tooltip won't show)
   * @default false
   */
  disabled?: boolean

  /**
   * Show arrow pointing to trigger
   * @default true
   */
  showArrow?: boolean

  /**
   * Additional class for tooltip
   */
  className?: string
}

/**
 * Tooltip Component
 *
 * Simple text tooltip on hover/focus with dark glass effect.
 *
 * Features:
 * - Shows on hover and keyboard focus
 * - Configurable delay
 * - Auto-positioning to avoid viewport edges
 * - Compact glass effect design
 * - Arrow pointing to trigger
 * - Smooth fade-in animation
 * - Accessible with ARIA attributes
 *
 * @example
 * ```tsx
 * <Tooltip content="This is a helpful tip" position="top">
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  delay = 300,
  children,
  disabled = false,
  showArrow = true,
  className,
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [tooltipStyle, setTooltipStyle] = React.useState<React.CSSProperties>({})
  const [arrowStyle, setArrowStyle] = React.useState<React.CSSProperties>({})
  const [computedPosition, setComputedPosition] = React.useState<TooltipPosition>(position)

  const triggerRef = React.useRef<HTMLElement>(null)
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const tooltipId = React.useId ? React.useId() : `tooltip-${Math.random().toString(36).substring(2, 9)}`

  const calculatePosition = React.useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const offset = 8

    let top = 0
    let left = 0
    let finalPosition = position
    let arrowLeft = '50%'
    let arrowTop = '50%'

    // Calculate base position
    switch (position) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - offset
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
        break
      case 'bottom':
        top = triggerRect.bottom + offset
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
        break
      case 'left':
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
        left = triggerRect.left - tooltipRect.width - offset
        break
      case 'right':
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
        left = triggerRect.right + offset
        break
    }

    // Auto-adjust if out of viewport (horizontal)
    if (left + tooltipRect.width > viewportWidth - 16) {
      left = viewportWidth - tooltipRect.width - 16
    }
    if (left < 16) {
      left = 16
    }

    // Auto-adjust if out of viewport (vertical)
    if (top + tooltipRect.height > viewportHeight - 16) {
      if (position === 'bottom') {
        top = triggerRect.top - tooltipRect.height - offset
        finalPosition = 'top'
      }
    }
    if (top < 16) {
      if (position === 'top') {
        top = triggerRect.bottom + offset
        finalPosition = 'bottom'
      }
    }

    // Calculate arrow position
    if (finalPosition === 'top' || finalPosition === 'bottom') {
      const triggerCenter = triggerRect.left + triggerRect.width / 2
      arrowLeft = `${triggerCenter - left}px`
    } else {
      const triggerCenter = triggerRect.top + triggerRect.height / 2
      arrowTop = `${triggerCenter - top}px`
    }

    setComputedPosition(finalPosition)
    setTooltipStyle({ top: `${top}px`, left: `${left}px` })
    setArrowStyle({ left: arrowLeft, top: arrowTop })
  }, [position])

  const showTooltip = () => {
    if (disabled) return

    timeoutRef.current = setTimeout(() => {
      setIsVisible(true)
    }, delay)
  }

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsVisible(false)
  }

  // Update position when visible
  React.useEffect(() => {
    if (isVisible) {
      calculatePosition()
      window.addEventListener('resize', calculatePosition)
      window.addEventListener('scroll', calculatePosition, true)
      return () => {
        window.removeEventListener('resize', calculatePosition)
        window.removeEventListener('scroll', calculatePosition, true)
      }
    }
  }, [isVisible, calculatePosition])

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Clone trigger element with event handlers
  const childProps = children.props as any
  const triggerElement = React.cloneElement(children as any, {
    ref: triggerRef,
    onMouseEnter: (e: React.MouseEvent) => {
      childProps.onMouseEnter?.(e)
      showTooltip()
    },
    onMouseLeave: (e: React.MouseEvent) => {
      childProps.onMouseLeave?.(e)
      hideTooltip()
    },
    onFocus: (e: React.FocusEvent) => {
      childProps.onFocus?.(e)
      showTooltip()
    },
    onBlur: (e: React.FocusEvent) => {
      childProps.onBlur?.(e)
      hideTooltip()
    },
    'aria-describedby': isVisible ? tooltipId : undefined,
  })

  return (
    <>
      {triggerElement}
      {isVisible && (
        <div
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          className={cn(styles.tooltip, styles[`position-${computedPosition}`], className)}
          style={tooltipStyle}
        >
          {showArrow && (
            <div className={styles.arrow} style={arrowStyle} aria-hidden="true" />
          )}
          <div className={styles.content}>{content}</div>
        </div>
      )}
    </>
  )
}

Tooltip.displayName = 'Tooltip'
