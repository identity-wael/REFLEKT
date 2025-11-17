import React from 'react'
import { cn } from '../../utils'
import styles from './Toast.module.css'

export type ToastVariant = 'info' | 'success' | 'warning' | 'error'
export type ToastPosition =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right'

export interface Toast {
  id: string
  message: string
  variant?: ToastVariant
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

export interface ToastProps {
  /**
   * Toast position
   * @default 'top-right'
   */
  position?: ToastPosition

  /**
   * Maximum number of toasts to show
   * @default 3
   */
  maxToasts?: number
}

const ToastContext = React.createContext<{
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => string
  removeToast: (id: string) => void
} | null>(null)

export const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

export const ToastProvider: React.FC<ToastProps & { children: React.ReactNode }> = ({
  position = 'top-right',
  maxToasts = 3,
  children,
}) => {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const addToast = React.useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = Math.random().toString(36).substr(2, 9)
      const newToast: Toast = { ...toast, id }

      setToasts((prev) => {
        const updated = [...prev, newToast]
        return updated.slice(-maxToasts)
      })

      if (toast.duration !== 0) {
        setTimeout(() => {
          removeToast(id)
        }, toast.duration || 5000)
      }

      return id
    },
    [maxToasts]
  )

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className={cn(styles.toastContainer, styles[`position-${position}`])}>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

const ToastItem: React.FC<{ toast: Toast; onClose: () => void }> = ({ toast, onClose }) => {
  const variant = toast.variant || 'info'

  const icons = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌',
  }

  return (
    <div className={cn(styles.toast, styles[`variant-${variant}`])}>
      <div className={styles.toastIcon}>{icons[variant]}</div>
      <div className={styles.toastContent}>
        <p className={styles.toastMessage}>{toast.message}</p>
        {toast.action && (
          <button className={styles.toastAction} onClick={toast.action.onClick}>
            {toast.action.label}
          </button>
        )}
      </div>
      <button className={styles.toastClose} onClick={onClose} aria-label="Close">
        ✕
      </button>
    </div>
  )
}

export const toast = {
  info: (message: string, options?: Partial<Omit<Toast, 'id' | 'message' | 'variant'>>) => ({
    message,
    variant: 'info' as const,
    ...options,
  }),
  success: (message: string, options?: Partial<Omit<Toast, 'id' | 'message' | 'variant'>>) => ({
    message,
    variant: 'success' as const,
    ...options,
  }),
  warning: (message: string, options?: Partial<Omit<Toast, 'id' | 'message' | 'variant'>>) => ({
    message,
    variant: 'warning' as const,
    ...options,
  }),
  error: (message: string, options?: Partial<Omit<Toast, 'id' | 'message' | 'variant'>>) => ({
    message,
    variant: 'error' as const,
    ...options,
  }),
}
