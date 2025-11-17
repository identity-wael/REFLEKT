import React from 'react'
import { cn } from '../../utils'
import styles from './Sheet.module.css'

export type SheetSize = 'sm' | 'md' | 'lg' | 'full'
export type SheetPosition = 'bottom' | 'top' | 'left' | 'right'

export interface SheetProps {
  /**
   * Whether the sheet is open
   */
  open: boolean

  /**
   * Callback when sheet should close
   */
  onClose: () => void

  /**
   * Sheet size (height for bottom/top, width for left/right)
   * @default 'md'
   */
  size?: SheetSize

  /**
   * Sheet position
   * @default 'bottom'
   */
  position?: SheetPosition

  /**
   * Sheet content
   */
  children: React.ReactNode

  /**
   * Close on backdrop click
   * @default true
   */
  closeOnBackdrop?: boolean

  /**
   * Close on escape key
   * @default true
   */
  closeOnEscape?: boolean

  /**
   * Show drag handle
   * @default true
   */
  showHandle?: boolean

  /**
   * Additional className
   */
  className?: string
}

export const Sheet: React.FC<SheetProps> = ({
  open,
  onClose,
  size = 'md',
  position = 'bottom',
  children,
  closeOnBackdrop = true,
  closeOnEscape = true,
  showHandle = true,
  className,
}) => {
  const [isDragging, setIsDragging] = React.useState(false)
  const [dragOffset, setDragOffset] = React.useState(0)
  const sheetRef = React.useRef<HTMLDivElement>(null)
  const startY = React.useRef(0)

  React.useEffect(() => {
    if (!open) return

    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [open, closeOnEscape, onClose])

  const handleDragStart = (clientY: number) => {
    if (position !== 'bottom') return
    setIsDragging(true)
    startY.current = clientY
  }

  const handleDragMove = (clientY: number) => {
    if (!isDragging || position !== 'bottom') return
    const diff = clientY - startY.current
    if (diff > 0) {
      setDragOffset(diff)
    }
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    // Close if dragged down more than 100px
    if (dragOffset > 100) {
      onClose()
    }

    setDragOffset(0)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientY)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientY)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientY)
  }

  if (!open) return null

  return (
    <div className={styles.overlay}>
      <div
        className={styles.backdrop}
        onClick={closeOnBackdrop ? onClose : undefined}
      />
      <div
        ref={sheetRef}
        className={cn(
          styles.sheet,
          styles[`position-${position}`],
          styles[`size-${size}`],
          isDragging && styles.dragging,
          className
        )}
        style={{
          transform:
            position === 'bottom' && dragOffset > 0
              ? `translateY(${dragOffset}px)`
              : undefined,
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {showHandle && (position === 'bottom' || position === 'top') && (
          <div
            className={styles.handleWrapper}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className={styles.handle} />
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export interface SheetHeaderProps {
  children: React.ReactNode
  className?: string
}

export const SheetHeader: React.FC<SheetHeaderProps> = ({ children, className }) => {
  return <div className={cn(styles.header, className)}>{children}</div>
}

export interface SheetTitleProps {
  children: React.ReactNode
  className?: string
}

export const SheetTitle: React.FC<SheetTitleProps> = ({ children, className }) => {
  return <h2 className={cn(styles.title, className)}>{children}</h2>
}

export interface SheetBodyProps {
  children: React.ReactNode
  className?: string
}

export const SheetBody: React.FC<SheetBodyProps> = ({ children, className }) => {
  return <div className={cn(styles.body, className)}>{children}</div>
}

export interface SheetFooterProps {
  children: React.ReactNode
  className?: string
}

export const SheetFooter: React.FC<SheetFooterProps> = ({ children, className }) => {
  return <div className={cn(styles.footer, className)}>{children}</div>
}
