import React from 'react';
/**
 * MenuBar Material Types (latest Apple design)
 */
export type MenuBarMaterial = 'glass' | 'frosted-heavy' | 'translucent' | 'vibrant';
/**
 * MenuBar Position
 */
export type MenuBarPosition = 'fixed' | 'sticky' | 'static';
export interface MenuBarProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Glass material variant
     * @default 'frosted-heavy'
     */
    material?: MenuBarMaterial;
    /**
     * Position type
     * @default 'fixed'
     */
    position?: MenuBarPosition;
    /**
     * Enable dynamic blur on scroll
     * @default true
     */
    blurOnScroll?: boolean;
    /**
     * Show border bottom
     * @default true
     */
    showBorder?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * MenuBar content
     */
    children: React.ReactNode;
}
/**
 * MenuBar Component
 *
 * Apple-style menu bar with advanced glassmorphism effects.
 * Inspired by macOS Sonoma and visionOS design language.
 *
 * Features:
 * - Ultra-heavy frosted glass effect
 * - Dynamic blur intensity on scroll
 * - Multiple material variants
 * - Vibrant color tinting
 * - Auto dark mode support
 * - Smooth transitions
 *
 * @example
 * ```tsx
 * <MenuBar material="frosted-heavy" position="fixed">
 *   <MenuBarContent>
 *     <MenuBarBrand>REFLEKT</MenuBarBrand>
 *     <MenuBarSection>
 *       <MenuItem>File</MenuItem>
 *       <MenuItem>Edit</MenuItem>
 *       <MenuItem>View</MenuItem>
 *     </MenuBarSection>
 *   </MenuBarContent>
 * </MenuBar>
 * ```
 */
export declare const MenuBar: React.ForwardRefExoticComponent<MenuBarProps & React.RefAttributes<HTMLElement>>;
/**
 * MenuBarContent Component
 *
 * Container for menu bar content.
 */
export interface MenuBarContentProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}
export declare const MenuBarContent: React.ForwardRefExoticComponent<MenuBarContentProps & React.RefAttributes<HTMLDivElement>>;
/**
 * MenuBarBrand Component
 *
 * Brand/logo section.
 */
export interface MenuBarBrandProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}
export declare const MenuBarBrand: React.ForwardRefExoticComponent<MenuBarBrandProps & React.RefAttributes<HTMLDivElement>>;
/**
 * MenuBarSection Component
 *
 * Section for grouping menu items.
 */
export interface MenuBarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Alignment
     * @default 'start'
     */
    align?: 'start' | 'center' | 'end';
    className?: string;
    children: React.ReactNode;
}
export declare const MenuBarSection: React.ForwardRefExoticComponent<MenuBarSectionProps & React.RefAttributes<HTMLDivElement>>;
/**
 * MenuItem Component
 *
 * Individual menu item.
 */
export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Active/selected state
     */
    active?: boolean;
    /**
     * Show indicator dot
     */
    showIndicator?: boolean;
    /**
     * Icon before text
     */
    icon?: React.ReactNode;
    className?: string;
    children: React.ReactNode;
}
export declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLButtonElement>>;
/**
 * MenuBarDivider Component
 *
 * Visual divider between menu sections.
 */
export interface MenuBarDividerProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}
export declare const MenuBarDivider: React.ForwardRefExoticComponent<MenuBarDividerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MenuBar.d.ts.map