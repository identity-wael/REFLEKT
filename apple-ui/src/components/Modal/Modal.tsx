import React from 'react'
import { cn } from '../../utils'
import styles from './Modal.module.css'

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ModalProps {
  /**
   * Whether the modal is open
   */
  open: boolean

  /**
   * Callback when modal should close
   */
  onClose: () => void

  /**
   * Modal size
   * @default 'md'
   */
  size?: ModalSize

  /**
   * Enable glass backdrop blur
   * @default true
   */
  glassBackdrop?: boolean

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
   * Show close button
   * @default true
   */
  showCloseButton?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Modal content
   */
  children: React.ReactNode
}

/**
 * Modal Component
 *
 * Apple-style modal dialog with glassmorphism backdrop.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false)
 *
 * <Modal open={open} onClose={() => setOpen(false)} size="md">
 *   <ModalHeader>Title</ModalHeader>
 *   <ModalContent>Content here</ModalContent>
 *   <ModalFooter>
 *     <Button onClick={() => setOpen(false)}>Close</Button>
 *   </ModalFooter>
 * </Modal>
 * ```
 */
export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  size = 'md',
  glassBackdrop = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
  showCloseButton = true,
  className,
  children,
}) => {
  React.useEffect(() => {
    if (!open || !closeOnEscape) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, closeOnEscape, onClose])

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className={styles.modalOverlay}>
      <div
        className={cn(
          styles.modalBackdrop,
          glassBackdrop && styles.glassBackdrop
        )}
        onClick={closeOnBackdrop ? onClose : undefined}
      />

      <div className={styles.modalContainer}>
        <div
          className={cn(
            styles.modal,
            styles[`size-${size}`],
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {showCloseButton && (
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

Modal.displayName = 'Modal'

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.modalHeader, className)} {...props}>
      {children}
    </div>
  )
}

ModalHeader.displayName = 'ModalHeader'

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const ModalContent: React.FC<ModalContentProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.modalContent, className)} {...props}>
      {children}
    </div>
  )
}

ModalContent.displayName = 'ModalContent'

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.modalFooter, className)} {...props}>
      {children}
    </div>
  )
}

ModalFooter.displayName = 'ModalFooter'
