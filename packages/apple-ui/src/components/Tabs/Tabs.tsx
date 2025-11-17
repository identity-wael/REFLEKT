import React from 'react'
import { cn } from '../../utils'
import styles from './Tabs.module.css'

export type TabsVariant = 'default' | 'segmented' | 'pills'
export type TabsSize = 'sm' | 'md' | 'lg'

export interface TabItem {
  value: string
  label: string
  disabled?: boolean
  icon?: React.ReactNode
}

export interface TabsProps {
  /**
   * Tabs variant
   * @default 'default'
   */
  variant?: TabsVariant

  /**
   * Tabs size
   * @default 'md'
   */
  size?: TabsSize

  /**
   * Tab items
   */
  items: TabItem[]

  /**
   * Current active tab value
   */
  value: string

  /**
   * Change handler
   */
  onChange: (value: string) => void

  /**
   * Full width tabs
   * @default false
   */
  fullWidth?: boolean

  /**
   * Additional className
   */
  className?: string
}

export const Tabs: React.FC<TabsProps> = ({
  variant = 'default',
  size = 'md',
  items,
  value,
  onChange,
  fullWidth = false,
  className,
}) => {
  const [indicatorStyle, setIndicatorStyle] = React.useState<React.CSSProperties>({})
  const tabsRef = React.useRef<HTMLDivElement>(null)
  const activeIndex = items.findIndex((item) => item.value === value)

  React.useEffect(() => {
    if (tabsRef.current && activeIndex !== -1) {
      const activeTab = tabsRef.current.children[activeIndex] as HTMLElement
      if (activeTab) {
        setIndicatorStyle({
          width: `${activeTab.offsetWidth}px`,
          transform: `translateX(${activeTab.offsetLeft}px)`,
        })
      }
    }
  }, [activeIndex, items])

  return (
    <div
      className={cn(
        styles.tabs,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        fullWidth && styles.fullWidth,
        className
      )}
    >
      <div className={styles.tabsList} ref={tabsRef} role="tablist">
        {items.map((item) => {
          const isActive = item.value === value
          return (
            <button
              key={item.value}
              role="tab"
              aria-selected={isActive}
              aria-disabled={item.disabled}
              disabled={item.disabled}
              className={cn(
                styles.tab,
                isActive && styles.active,
                item.disabled && styles.disabled
              )}
              onClick={() => !item.disabled && onChange(item.value)}
            >
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              <span className={styles.label}>{item.label}</span>
            </button>
          )
        })}
        {variant === 'default' && (
          <div className={styles.indicator} style={indicatorStyle} />
        )}
        {variant === 'segmented' && (
          <div className={styles.segmentedIndicator} style={indicatorStyle} />
        )}
      </div>
    </div>
  )
}

export interface TabPanelProps {
  /**
   * Tab value this panel corresponds to
   */
  value: string

  /**
   * Current active tab value
   */
  activeValue: string

  /**
   * Panel content
   */
  children: React.ReactNode

  /**
   * Additional className
   */
  className?: string

  /**
   * Keep mounted when inactive
   * @default false
   */
  keepMounted?: boolean
}

export const TabPanel: React.FC<TabPanelProps> = ({
  value,
  activeValue,
  children,
  className,
  keepMounted = false,
}) => {
  const isActive = value === activeValue

  if (!isActive && !keepMounted) {
    return null
  }

  return (
    <div
      role="tabpanel"
      hidden={!isActive}
      className={cn(styles.panel, !isActive && styles.panelHidden, className)}
    >
      {children}
    </div>
  )
}
