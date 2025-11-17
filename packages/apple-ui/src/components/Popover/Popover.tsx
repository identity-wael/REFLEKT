import React from 'react'
import { cn } from '../../utils'
import styles from './Popover.module.css'

export type PopoverPosition =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'right'

export type PopoverTrigger = 'click' | 'hover' | 'focus'

export interface PopoverProps {
  /**
   * Controlled open state
   */
  open?: boolean

  /**
   * Default open state (uncontrolled)
   */
  defaultOpen?: boolean

  /**
   * Open state change handler
   */
  onOpenChange?: (open: boolean) => void

  /**
   * Trigger type
   * @default 'click'
   */
  trigger?: PopoverTrigger

  /**
   * Position relative to trigger
   * @default 'bottom'
   */
  position?: PopoverPosition

  /**
   * Offset from trigger (in pixels)
   * @default 8
   */
  offset?: number

  /**
   * Show arrow pointing to trigger
   * @default true
   */
  showArrow?: boolean

  /**
   * Trigger element
   */
  children: React.ReactElement

  /**
   * Popover content
   */
  content: React.ReactNode

  /**
   * Close on outside click
   * @default true
   */
  closeOnOutsideClick?: boolean

  /**
   * Close on escape key
   * @default true
   */
  closeOnEscape?: boolean

  /**
   * Additional class for popover content
   */
  className?: string
}

/**
 * Popover Component
 *
 * Floating content positioned relative to trigger element with glass effect.
 *
 * Features:
 * - Multiple positioning options
 * - Auto-positioning to stay within viewport
 * - Glass effect background with backdrop blur
 * - Smooth fade + scale animation
 * - Arrow pointing to trigger
 * - Click outside and escape key to close
 *
 * @example
 * ```tsx
 * <Popover
 *   content={<div>Popover content here</div>}
 *   position="bottom"
 *   showArrow
 * >
 *   <button>Click me</button>
 * </Popover>
 * ```
 */
export const Popover: React.FC<PopoverProps> = ({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  trigger = 'click',
  position = 'bottom',
  offset = 8,
  showArrow = true,
  children,
  content,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  className,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  const triggerRef = React.useRef<HTMLElement>(null)
  const popoverRef = React.useRef<HTMLDivElement>(null)
  const [popoverStyle, setPopoverStyle] = React.useState<React.CSSProperties>({})
  const [arrowStyle, setArrowStyle] = React.useState<React.CSSProperties>({})
  const [computedPosition, setComputedPosition] = React.useState<PopoverPosition>(position)

  const setOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleToggle = () => setOpen(!open)

  // Calculate position
  const calculatePosition = React.useCallback(() => {
    if (!triggerRef.current || !popoverRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const popoverRect = popoverRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    let top = 0
    let left = 0
    let finalPosition = position
    let arrowLeft = '50%'
    let arrowTop = '50%'

    // Calculate base position
    switch (position) {
      case 'top':
      case 'top-start':
      case 'top-end':
        top = triggerRect.top - popoverRect.height - offset
        break
      case 'bottom':
      case 'bottom-start':
      case 'bottom-end':
        top = triggerRect.bottom + offset
        break
      case 'left':
        top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2
        left = triggerRect.left - popoverRect.width - offset
        break
      case 'right':
        top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2
        left = triggerRect.right + offset
        break
    }

    // Calculate horizontal alignment for top/bottom positions
    if (position.startsWith('top') || position.startsWith('bottom')) {
      if (position.endsWith('-start')) {
        left = triggerRect.left
      } else if (position.endsWith('-end')) {
        left = triggerRect.right - popoverRect.width
      } else {
        left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2
      }
    }

    // Auto-adjust if out of viewport
    if (left + popoverRect.width > viewportWidth - 16) {
      left = viewportWidth - popoverRect.width - 16
    }
    if (left < 16) {
      left = 16
    }
    if (top + popoverRect.height > viewportHeight - 16) {
      if (position.startsWith('bottom')) {
        top = triggerRect.top - popoverRect.height - offset
        finalPosition = position.replace('bottom', 'top') as PopoverPosition
      }
    }
    if (top < 16) {
      if (position.startsWith('top')) {
        top = triggerRect.bottom + offset
        finalPosition = position.replace('top', 'bottom') as PopoverPosition
      }
    }

    // Calculate arrow position
    if (finalPosition.startsWith('top') || finalPosition.startsWith('bottom')) {
      const triggerCenter = triggerRect.left + triggerRect.width / 2
      arrowLeft = `${triggerCenter - left}px`
    } else {
      const triggerCenter = triggerRect.top + triggerRect.height / 2
      arrowTop = `${triggerCenter - top}px`
    }

    setComputedPosition(finalPosition)
    setPopoverStyle({ top: `${top}px`, left: `${left}px` })
    setArrowStyle({ left: arrowLeft, top: arrowTop })
  }, [position, offset])

  // Update position when open
  React.useEffect(() => {
    if (open) {
      calculatePosition()
      window.addEventListener('resize', calculatePosition)
      window.addEventListener('scroll', calculatePosition, true)
      return () => {
        window.removeEventListener('resize', calculatePosition)
        window.removeEventListener('scroll', calculatePosition, true)
      }
    }
  }, [open, calculatePosition])

  // Handle outside click
  React.useEffect(() => {
    if (!open || !closeOnOutsideClick) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        handleClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, closeOnOutsideClick])

  // Handle escape key
  React.useEffect(() => {
    if (!open || !closeOnEscape) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, closeOnEscape])

  // Clone trigger element with event handlers
  const childProps = children.props as any
  const triggerElement = React.cloneElement(children as any, {
    ref: triggerRef,
    onClick:
      trigger === 'click'
        ? (e: React.MouseEvent) => {
            childProps.onClick?.(e)
            handleToggle()
          }
        : childProps.onClick,
    onMouseEnter:
      trigger === 'hover'
        ? (e: React.MouseEvent) => {
            childProps.onMouseEnter?.(e)
            handleOpen()
          }
        : childProps.onMouseEnter,
    onMouseLeave:
      trigger === 'hover'
        ? (e: React.MouseEvent) => {
            childProps.onMouseLeave?.(e)
            handleClose()
          }
        : childProps.onMouseLeave,
    onFocus:
      trigger === 'focus'
        ? (e: React.FocusEvent) => {
            childProps.onFocus?.(e)
            handleOpen()
          }
        : childProps.onFocus,
    onBlur:
      trigger === 'focus'
        ? (e: React.FocusEvent) => {
            childProps.onBlur?.(e)
            handleClose()
          }
        : childProps.onBlur,
    'aria-expanded': open,
    'aria-haspopup': true,
  })

  return (
    <>
      {triggerElement}
      {open && (
        <div
          ref={popoverRef}
          className={cn(styles.popover, styles[`position-${computedPosition}`], className)}
          style={popoverStyle}
          role="dialog"
          aria-modal="false"
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

Popover.displayName = 'Popover'

/**
 * PopoverTrigger - Wrapper component for trigger element
 */
export const PopoverTrigger: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return children
}

PopoverTrigger.displayName = 'PopoverTrigger'

/**
 * PopoverContent - Wrapper component for popover content
 */
export const PopoverContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>
}

PopoverContent.displayName = 'PopoverContent'
