/**
 * Typography Helper Utilities
 * Utility functions for text manipulation and formatting
 * Compatible with Apple's design system
 */

/**
 * Truncate text with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum character length before truncation
 * @param ellipsis - Ellipsis character(s) to append (default: '…')
 * @returns Truncated text with ellipsis
 *
 * @example
 * ```ts
 * truncateText('This is a very long text', 10)
 * // Returns: 'This is a…'
 * ```
 */
export function truncateText(
  text: string,
  maxLength: number,
  ellipsis: string = '…'
): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + ellipsis
}

/**
 * Truncate text by word boundary
 * More natural truncation that doesn't cut words in half
 *
 * @param text - Text to truncate
 * @param maxWords - Maximum number of words
 * @param ellipsis - Ellipsis character(s) to append (default: '…')
 * @returns Truncated text by word boundary
 *
 * @example
 * ```ts
 * truncateWords('This is a very long sentence', 3)
 * // Returns: 'This is a…'
 * ```
 */
export function truncateWords(
  text: string,
  maxWords: number,
  ellipsis: string = '…'
): string {
  const words = text.split(/\s+/)
  if (words.length <= maxWords) return text
  return words.slice(0, maxWords).join(' ') + ellipsis
}

/**
 * Format text for all caps with proper letter spacing
 * Apple recommends increased letter spacing for all caps
 *
 * @param text - Text to format
 * @returns Uppercase text
 *
 * @example
 * ```ts
 * formatAllCaps('Section Title')
 * // Returns: 'SECTION TITLE'
 * // Should be used with CSS: letter-spacing: 0.05em
 * ```
 */
export function formatAllCaps(text: string): string {
  return text.toUpperCase()
}

/**
 * Format number with localization
 * @param num - Number to format
 * @param locale - Locale code (default: 'en-US')
 * @param options - Intl.NumberFormat options
 * @returns Formatted number string
 *
 * @example
 * ```ts
 * formatNumber(1234.56)
 * // Returns: '1,234.56'
 *
 * formatNumber(1234.56, 'ja-JP')
 * // Returns: '1,234.56'
 * ```
 */
export function formatNumber(
  num: number,
  locale: string = 'en-US',
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(locale, options).format(num)
}

/**
 * Format currency
 * @param amount - Amount to format
 * @param currency - Currency code (default: 'USD')
 * @param locale - Locale code (default: 'en-US')
 * @returns Formatted currency string
 *
 * @example
 * ```ts
 * formatCurrency(1234.56)
 * // Returns: '$1,234.56'
 *
 * formatCurrency(1234.56, 'JPY', 'ja-JP')
 * // Returns: '¥1,235'
 * ```
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount)
}

/**
 * Format date and time
 * @param date - Date to format
 * @param locale - Locale code (default: 'en-US')
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 *
 * @example
 * ```ts
 * formatDate(new Date())
 * // Returns: '11/17/2025'
 *
 * formatDate(new Date(), 'ja-JP', { dateStyle: 'full' })
 * // Returns: '2025年11月17日月曜日'
 * ```
 */
export function formatDate(
  date: Date,
  locale: string = 'en-US',
  options?: Intl.DateTimeFormatOptions
): string {
  return new Intl.DateTimeFormat(locale, options).format(date)
}

/**
 * Convert text to title case
 * @param text - Text to convert
 * @returns Title cased text
 *
 * @example
 * ```ts
 * toTitleCase('this is a title')
 * // Returns: 'This Is A Title'
 * ```
 */
export function toTitleCase(text: string): string {
  return text.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })
}

/**
 * Convert text to sentence case
 * @param text - Text to convert
 * @returns Sentence cased text
 *
 * @example
 * ```ts
 * toSentenceCase('THIS IS A SENTENCE')
 * // Returns: 'This is a sentence'
 * ```
 */
export function toSentenceCase(text: string): string {
  const lower = text.toLowerCase()
  return lower.charAt(0).toUpperCase() + lower.slice(1)
}

/**
 * Calculate reading time estimate
 * Based on average reading speed of 200-250 words per minute
 *
 * @param text - Text to analyze
 * @param wordsPerMinute - Reading speed (default: 225)
 * @returns Reading time in minutes (rounded up)
 *
 * @example
 * ```ts
 * calculateReadingTime('This is a short text with multiple words...')
 * // Returns: 1
 * ```
 */
export function calculateReadingTime(
  text: string,
  wordsPerMinute: number = 225
): number {
  const wordCount = text.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

/**
 * Format reading time as human-readable string
 * @param minutes - Reading time in minutes
 * @param locale - Locale for formatting (default: 'en')
 * @returns Formatted reading time string
 *
 * @example
 * ```ts
 * formatReadingTime(1)
 * // Returns: '1 min read'
 *
 * formatReadingTime(5)
 * // Returns: '5 min read'
 * ```
 */
export function formatReadingTime(
  minutes: number,
  locale: string = 'en'
): string {
  if (locale === 'ja') {
    return `${minutes}分で読めます`
  }
  return `${minutes} min read`
}

/**
 * Remove extra whitespace and normalize spaces
 * @param text - Text to normalize
 * @returns Normalized text
 *
 * @example
 * ```ts
 * normalizeWhitespace('This  has   extra    spaces')
 * // Returns: 'This has extra spaces'
 * ```
 */
export function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim()
}

/**
 * Strip HTML tags from text
 * @param html - HTML string
 * @returns Plain text without HTML tags
 *
 * @example
 * ```ts
 * stripHtml('<p>This is <strong>bold</strong> text</p>')
 * // Returns: 'This is bold text'
 * ```
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

/**
 * Highlight search terms in text
 * Returns text segments with match information for custom rendering
 *
 * @param text - Text to search
 * @param searchTerm - Term to highlight
 * @param caseSensitive - Whether search is case sensitive (default: false)
 * @returns Array of text segments with match information
 *
 * @example
 * ```ts
 * highlightText('This is a test', 'test')
 * // Returns: [
 * //   { text: 'This is a ', match: false },
 * //   { text: 'test', match: true }
 * // ]
 * ```
 */
export function highlightText(
  text: string,
  searchTerm: string,
  caseSensitive: boolean = false
): Array<{ text: string; match: boolean }> {
  if (!searchTerm) return [{ text, match: false }]

  const flags = caseSensitive ? 'g' : 'gi'
  const regex = new RegExp(`(${searchTerm})`, flags)
  const parts = text.split(regex)

  return parts
    .filter((part) => part.length > 0)
    .map((part) => ({
      text: part,
      match: regex.test(part),
    }))
}

/**
 * Generate initials from name
 * @param name - Full name
 * @param maxInitials - Maximum number of initials (default: 2)
 * @returns Initials in uppercase
 *
 * @example
 * ```ts
 * getInitials('John Doe')
 * // Returns: 'JD'
 *
 * getInitials('John Michael Doe', 3)
 * // Returns: 'JMD'
 * ```
 */
export function getInitials(name: string, maxInitials: number = 2): string {
  const words = name.trim().split(/\s+/)
  const initials = words
    .slice(0, maxInitials)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
  return initials
}

/**
 * Pluralize word based on count
 * @param count - Number to check
 * @param singular - Singular form
 * @param plural - Plural form (optional, defaults to singular + 's')
 * @returns Pluralized string with count
 *
 * @example
 * ```ts
 * pluralize(1, 'item')
 * // Returns: '1 item'
 *
 * pluralize(5, 'item')
 * // Returns: '5 items'
 *
 * pluralize(2, 'person', 'people')
 * // Returns: '2 people'
 * ```
 */
export function pluralize(
  count: number,
  singular: string,
  plural?: string
): string {
  const word = count === 1 ? singular : plural ?? `${singular}s`
  return `${count} ${word}`
}
