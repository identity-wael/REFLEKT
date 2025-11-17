import React, { useState, useEffect, useRef, useMemo } from 'react'
import { cn } from '../../utils'
import styles from './CommandPalette.module.css'

export interface Command {
  id: string
  label: string
  icon?: React.ReactNode
  onSelect: () => void
  keywords?: string[]
  category?: string
}

export interface CommandPaletteProps {
  open: boolean
  onClose: () => void
  commands: Command[]
  placeholder?: string
  className?: string
  recentCommands?: string[]
  onRecentUpdate?: (commandId: string) => void
}

/**
 * CommandPalette component - Spotlight-style command palette
 *
 * @example
 * ```tsx
 * <CommandPalette
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   commands={[
 *     { id: 'new', label: 'New Document', onSelect: () => {} },
 *     { id: 'open', label: 'Open File', onSelect: () => {} },
 *   ]}
 * />
 * ```
 */
export function CommandPalette({
  open,
  onClose,
  commands,
  placeholder = 'Search commands...',
  className,
  recentCommands = [],
  onRecentUpdate,
}: CommandPaletteProps) {
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
      setSearch('')
      setSelectedIndex(0)
    }
  }, [open])

  // Fuzzy search filter
  const filteredCommands = useMemo(() => {
    if (!search) {
      // Show recent commands first when no search
      const recentCmds = commands.filter(cmd => recentCommands.includes(cmd.id))
      const otherCmds = commands.filter(cmd => !recentCommands.includes(cmd.id))
      return [...recentCmds, ...otherCmds]
    }

    const searchLower = search.toLowerCase()
    return commands.filter(cmd => {
      const labelMatch = cmd.label.toLowerCase().includes(searchLower)
      const keywordMatch = cmd.keywords?.some(kw => kw.toLowerCase().includes(searchLower))
      return labelMatch || keywordMatch
    })
  }, [search, commands, recentCommands])

  // Group by category
  const groupedCommands = useMemo(() => {
    const groups: Record<string, Command[]> = {}

    filteredCommands.forEach(cmd => {
      const category = cmd.category || 'Commands'
      if (!groups[category]) {
        groups[category] = []
      }
      groups[category].push(cmd)
    })

    return groups
  }, [filteredCommands])

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => Math.min(prev + 1, filteredCommands.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => Math.max(prev - 1, 0))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const cmd = filteredCommands[selectedIndex]
        if (cmd) {
          handleSelectCommand(cmd)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, selectedIndex, filteredCommands])

  // Close on click outside
  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(`.${styles.palette}`) === null) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, onClose])

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const selected = listRef.current.querySelector(`.${styles.selected}`)
      selected?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [selectedIndex])

  const handleSelectCommand = (cmd: Command) => {
    cmd.onSelect()
    onRecentUpdate?.(cmd.id)
    onClose()
  }

  if (!open) return null

  let commandIndex = 0

  return (
    <div className={cn(styles.overlay, className)}>
      <div className={styles.palette} role="dialog" aria-modal="true" aria-label="Command palette">
        <div className={styles.searchContainer}>
          <svg
            className={styles.searchIcon}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12.5 12.5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder={placeholder}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setSelectedIndex(0)
            }}
            aria-label="Search commands"
            autoComplete="off"
            spellCheck="false"
          />
          {search && (
            <button
              className={styles.clearButton}
              onClick={() => {
                setSearch('')
                setSelectedIndex(0)
                inputRef.current?.focus()
              }}
              aria-label="Clear search"
              type="button"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="7" fill="currentColor" opacity="0.3" />
                <path d="M4.5 4.5l5 5m0-5l-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>

        <div ref={listRef} className={styles.commandList} role="listbox">
          {Object.entries(groupedCommands).length === 0 ? (
            <div className={styles.empty}>No commands found</div>
          ) : (
            Object.entries(groupedCommands).map(([category, cmds]) => (
              <div key={category} className={styles.category}>
                <div className={styles.categoryLabel}>{category}</div>
                {cmds.map((cmd) => {
                  const currentIndex = commandIndex++
                  const isSelected = currentIndex === selectedIndex
                  const isRecent = recentCommands.includes(cmd.id)

                  return (
                    <button
                      key={cmd.id}
                      className={cn(
                        styles.commandItem,
                        isSelected && styles.selected
                      )}
                      onClick={() => handleSelectCommand(cmd)}
                      role="option"
                      aria-selected={isSelected}
                      type="button"
                    >
                      {cmd.icon && (
                        <span className={styles.commandIcon} aria-hidden="true">
                          {cmd.icon}
                        </span>
                      )}
                      <span className={styles.commandLabel}>{cmd.label}</span>
                      {isRecent && !search && (
                        <span className={styles.recentBadge} aria-label="Recent command">
                          Recent
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            ))
          )}
        </div>

        <div className={styles.footer}>
          <span className={styles.footerHint}>
            <kbd>↑↓</kbd> Navigate
            <kbd>⏎</kbd> Select
            <kbd>Esc</kbd> Close
          </span>
        </div>
      </div>
    </div>
  )
}
