import { useState, useEffect, useRef } from 'react'
import { cn } from '../../utils'
import styles from './Image.module.css'

export interface ImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  loading?: 'lazy' | 'eager'
  placeholder?: string
  onLoad?: () => void
  onError?: () => void
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'full'
  className?: string
}

/**
 * Image component - Enhanced image with lazy loading and placeholder
 *
 * @example
 * ```tsx
 * <Image
 *   src="/photo.jpg"
 *   alt="Photo"
 *   width={400}
 *   height={300}
 *   objectFit="cover"
 *   loading="lazy"
 *   rounded="md"
 * />
 * ```
 */
export function Image({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
  loading = 'lazy',
  placeholder,
  onLoad,
  onError,
  rounded = false,
  className,
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(loading === 'eager')
  const imgRef = useRef<HTMLImageElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager' || !imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' }
    )

    observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [loading])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  const getRoundedClass = () => {
    if (!rounded) return ''
    if (rounded === true) return styles.rounded
    return styles[`rounded-${rounded}`]
  }

  return (
    <div
      className={cn(
        styles.imageContainer,
        getRoundedClass(),
        className
      )}
      style={{
        width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
        height: height ? (typeof height === 'number' ? `${height}px` : height) : 'auto',
      }}
    >
      {!isLoaded && !hasError && (
        <div className={styles.skeleton} aria-hidden="true">
          {placeholder && (
            <img
              src={placeholder}
              alt=""
              className={styles.placeholder}
              aria-hidden="true"
            />
          )}
        </div>
      )}

      {hasError ? (
        <div className={styles.errorState} role="img" aria-label={alt}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <rect width="48" height="48" rx="8" fill="currentColor" opacity="0.1" />
            <path
              d="M20 18l8 8m0-8l-8 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className={styles.errorText}>Failed to load image</span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={isInView ? src : undefined}
          alt={alt}
          className={cn(
            styles.image,
            isLoaded && styles.loaded
          )}
          style={{
            objectFit,
          }}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
        />
      )}
    </div>
  )
}
