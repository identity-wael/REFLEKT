import clsx, { type ClassValue } from 'clsx'

/**
 * Utility function for conditionally joining classNames together
 * Similar to the `cn` utility used in shadcn/ui
 *
 * @param inputs - Class values to merge
 * @returns Merged className string
 *
 * @example
 * cn('base-class', condition && 'conditional-class', { 'active': isActive })
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs)
}
