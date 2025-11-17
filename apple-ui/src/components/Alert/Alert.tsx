import React, { useState, useEffect } from 'react'
import { cn } from '../../utils'
import styles from './Alert.module.css'

export interface AlertAction {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  message: string
  icon?: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  action?: AlertAction
  className?: string
  autoHide?: boolean
  autoHideDuration?: number
}

/**
 * Alert component - System alert/notification with Apple design
 *
 * @example
 * ```tsx
 * <Alert
 *   variant="success"
 *   title="Success"
 *   message="Your changes have been saved."
 *   dismissible
 *   onDismiss={() => console.log('dismissed')}
 * />
 * ```
 */
export function Alert({
  variant = 'info',
  title,
  message,
  icon,
  dismissible = false,
  onDismiss,
  action,
  className,
  autoHide = false,
  autoHideDuration = 5000,
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (autoHide && autoHideDuration > 0) {
      const timer = setTimeout(() => {
        handleDismiss()
      }, autoHideDuration)

      return () => clearTimeout(timer)
    }
  }, [autoHide, autoHideDuration])

  const handleDismiss = () => {
    setIsExiting(true)
    setTimeout(() => {
      setIsVisible(false)
      onDismiss?.()
    }, 300) // Match animation duration
  }

  if (!isVisible) {
    return null
  }

  const getDefaultIcon = () => {
    switch (variant) {
      case 'info':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 6v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      case 'success':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )
      case 'warning':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 2L2 17h16L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M10 8v4m0 3h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      case 'error':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 7l6 6m0-6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
    }
  }

  const displayIcon = icon !== undefined ? icon : getDefaultIcon()

  return (
    <div
      className={cn(
        styles.alert,
        styles[variant],
        isExiting && styles.exiting,
        className
      )}
      role="alert"
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
    >
      {displayIcon && (
        <div className={styles.icon} aria-hidden="true">
          {displayIcon}
        </div>
      )}

      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.message}>{message}</div>
      </div>

      {action && (
        <button
          className={cn(
            styles.actionButton,
            action.variant === 'primary' && styles.primaryAction
          )}
          onClick={action.onClick}
          type="button"
        >
          {action.label}
        </button>
      )}

      {dismissible && (
        <button
          className={styles.dismissButton}
          onClick={handleDismiss}
          aria-label="Dismiss alert"
          type="button"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M1 1l12 12m0-12L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
