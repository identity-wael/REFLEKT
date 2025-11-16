import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { AnimationVariants, Locale } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format date for display
export function formatDate(date: string | Date, locale: Locale = 'en'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj)
}

// Format relative time
export function formatRelativeTime(date: string | Date, locale: Locale = 'en'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffMs = now.getTime() - dateObj.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return locale === 'en' ? 'Today' : '今日'
  if (diffDays === 1) return locale === 'en' ? 'Yesterday' : '昨日'
  if (diffDays < 7) return locale === 'en' ? `${diffDays} days ago` : `${diffDays}日前`
  if (diffDays < 30) return locale === 'en' ? `${Math.floor(diffDays / 7)} weeks ago` : `${Math.floor(diffDays / 7)}週間前`

  return formatDate(dateObj, locale)
}

// Debounce function for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle function for performance
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Animation variants for consistent animations
export const fadeInUp: AnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const fadeInLeft: AnimationVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const fadeInRight: AnimationVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const staggerContainer: AnimationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

// SEO utilities
export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage,
}: {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
}) {
  const siteTitle = title ? `${title} | REFLEKT` : 'REFLEKT - Innovative Solutions'
  const siteDescription = description || 'REFLEKT delivers cutting-edge solutions for modern challenges through technology and creativity.'

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: keywords.join(', '),
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      images: [{ url: ogImage || '/og-image.jpg' }],
    },
    twitter: {
      title: siteTitle,
      description: siteDescription,
      images: [ogImage || '/og-image.jpg'],
    },
  }
}

// Performance utilities
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Local storage with error handling
export function getLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue

  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error)
    return defaultValue
  }
}

export function setLocalStorage<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.warn(`Error setting localStorage key "${key}":`, error)
  }
}

// Error handling utilities
export function logError(error: Error, context?: string): void {
  console.error(`Error${context ? ` in ${context}` : ''}:`, error)

  if (process.env.NODE_ENV === 'production') {
    // In production, send to error tracking service
  }
}

// Async wrapper with error handling
export async function withErrorHandling<T>(
  promise: Promise<T>,
  context?: string
): Promise<[T | null, Error | null]> {
  try {
    const result = await promise
    return [result, null]
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error))
    logError(err, context)
    return [null, err]
  }
}
