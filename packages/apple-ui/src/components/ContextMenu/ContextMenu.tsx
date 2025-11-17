import React, { useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '../../utils'
import styles from './ContextMenu.module.css'

export interface ContextMenuItem {
  label: string
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean
  divider?: boolean
  items?: ContextMenuItem[] // For sub-menus
  shortcut?: string
}

export interface ContextMenuProps {
  items: ContextMenuItem[]
  trigger: React.ReactNode
  className?: string
}

/**
 * ContextMenu component - Right-click context menu with Apple design
 *
 * @example
 * ```tsx
 * <ContextMenu
 *   items={[
 *     { label: 'Copy', onClick: () => {}, shortcut: '⌘C' },
 *     { label: 'Paste', onClick: () => {}, shortcut: '⌘V' },
 *     { divider: true },
 *     { label: 'Delete', onClick: () => {} }
 *   ]}
 *   trigger={<div>Right click me</div>}
 * />
 * ```
 */
export function ContextMenu({ items, trigger, className }: ContextMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [submenuState, setSubmenuState] = useState<Record<number, boolean>>({})
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const { clientX, clientY } = e

    setPosition({ x: clientX, y: clientY })
    setIsOpen(true)
    setSubmenuState({})
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setSubmenuState({})
  }, [])

  const handleItemClick = useCallback((item: ContextMenuItem) => {
    if (!item.disabled && item.onClick && !item.items) {
      item.onClick()
      handleClose()
    }
  }, [handleClose])

  const handleMouseEnterItem = useCallback((index: number, hasSubmenu: boolean) => {
    if (hasSubmenu) {
      setSubmenuState(prev => ({ ...prev, [index]: true }))
    } else {
      setSubmenuState({})
    }
  }, [])

  // Position menu within viewport
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const menu = menuRef.current
      const rect = menu.getBoundingClientRect()
      const { x, y } = position

      let adjustedX = x
      let adjustedY = y

      // Adjust if menu goes off right edge
      if (x + rect.width > window.innerWidth) {
        adjustedX = window.innerWidth - rect.width - 10
      }

      // Adjust if menu goes off bottom edge
      if (y + rect.height > window.innerHeight) {
        adjustedY = window.innerHeight - rect.height - 10
      }

      if (adjustedX !== x || adjustedY !== y) {
        setPosition({ x: adjustedX, y: adjustedY })
      }
    }
  }, [isOpen, position])

  // Close on click outside or Escape
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        handleClose()
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, handleClose])

  const renderMenuItem = (item: ContextMenuItem, index: number) => {
    if (item.divider) {
      return <div key={`divider-${index}`} className={styles.divider} role="separator" />
    }

    const hasSubmenu = Boolean(item.items && item.items.length > 0)
    const isSubmenuOpen = submenuState[index]

    return (
      <div
        key={index}
        className={styles.menuItemWrapper}
        onMouseEnter={() => handleMouseEnterItem(index, hasSubmenu)}
      >
        <button
          className={cn(
            styles.menuItem,
            item.disabled && styles.disabled,
            hasSubmenu && styles.hasSubmenu
          )}
          onClick={() => handleItemClick(item)}
          disabled={item.disabled}
          role="menuitem"
          aria-haspopup={hasSubmenu}
          aria-expanded={hasSubmenu ? isSubmenuOpen : undefined}
        >
          {item.icon && (
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
          )}
          <span className={styles.label}>{item.label}</span>
          {item.shortcut && (
            <span className={styles.shortcut} aria-label={`Keyboard shortcut: ${item.shortcut}`}>
              {item.shortcut}
            </span>
          )}
          {hasSubmenu && (
            <svg
              className={styles.submenuArrow}
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              aria-hidden="true"
            >
              <path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        {hasSubmenu && isSubmenuOpen && item.items && (
          <div className={styles.submenu} role="menu">
            {item.items.map((subItem, subIndex) => renderMenuItem(subItem, subIndex))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={triggerRef} onContextMenu={handleContextMenu} className={className}>
      {trigger}

      {isOpen && (
        <div
          ref={menuRef}
          className={styles.menu}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          role="menu"
          aria-orientation="vertical"
        >
          {items.map((item, index) => renderMenuItem(item, index))}
        </div>
      )}
    </div>
  )
}
