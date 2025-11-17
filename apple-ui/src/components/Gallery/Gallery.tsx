import React, { useState } from 'react'
import { cn } from '../../utils'
import styles from './Gallery.module.css'

export interface GalleryImage {
  src: string
  alt: string
  thumbnail?: string
}

export interface GalleryProps {
  images: GalleryImage[]
  selectedIndex?: number
  onSelect?: (index: number) => void
  layout?: 'grid' | 'carousel'
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:2'
  gap?: number
  columns?: number
  className?: string
}

/**
 * Gallery component - Image gallery/carousel with lightbox
 *
 * @example
 * ```tsx
 * <Gallery
 *   images={[
 *     { src: '/photo1.jpg', alt: 'Photo 1' },
 *     { src: '/photo2.jpg', alt: 'Photo 2' },
 *   ]}
 *   layout="grid"
 *   columns={3}
 *   aspectRatio="16:9"
 * />
 * ```
 */
export function Gallery({
  images,
  selectedIndex,
  onSelect,
  layout = 'grid',
  aspectRatio = '16:9',
  gap = 16,
  columns = 3,
  className,
}: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(selectedIndex ?? 0)

  const handleImageClick = (index: number) => {
    setLightboxIndex(index)
    setCurrentIndex(index)
    onSelect?.(index)
  }

  const handleCloseLightbox = () => {
    setLightboxIndex(null)
  }

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    setCurrentIndex(newIndex)
    setLightboxIndex(newIndex)
    onSelect?.(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setLightboxIndex(newIndex)
    onSelect?.(newIndex)
  }

  const getAspectRatioValue = () => {
    switch (aspectRatio) {
      case '1:1':
        return '100%'
      case '4:3':
        return '75%'
      case '16:9':
        return '56.25%'
      case '3:2':
        return '66.67%'
      default:
        return '56.25%'
    }
  }

  return (
    <>
      <div
        className={cn(
          styles.gallery,
          styles[layout],
          className
        )}
        style={{
          '--gap': `${gap}px`,
          '--columns': columns,
          '--aspect-ratio': getAspectRatioValue(),
        } as React.CSSProperties}
      >
        {images.map((image, index) => (
          <button
            key={index}
            className={styles.imageWrapper}
            onClick={() => handleImageClick(index)}
            type="button"
            aria-label={`View ${image.alt}`}
          >
            <div className={styles.imageContainer}>
              <img
                src={image.thumbnail || image.src}
                alt={image.alt}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.imageOverlay} aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="rgba(0, 0, 0, 0.5)" />
                  <path d="M12 12l8 8m0-8l-8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          onClick={handleCloseLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className={styles.closeButton}
            onClick={handleCloseLightbox}
            aria-label="Close lightbox"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12m0-12L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            className={cn(styles.navButton, styles.prevButton)}
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            aria-label="Previous image"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxCaption}>
              {images[lightboxIndex].alt}
            </div>
          </div>

          <button
            className={cn(styles.navButton, styles.nextButton)}
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            aria-label="Next image"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className={styles.lightboxCounter}>
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
