import React, { useState, useRef, useEffect } from 'react'
import { cn } from '../../utils'
import styles from './AudioPlayer.module.css'

export interface AudioPlayerProps {
  src: string
  title: string
  artist?: string
  artwork?: string
  autoplay?: boolean
  loop?: boolean
  onPlay?: () => void
  onPause?: () => void
  onEnded?: () => void
  className?: string
}

/**
 * AudioPlayer component - Audio player with Apple Music styling
 *
 * @example
 * ```tsx
 * <AudioPlayer
 *   src="/audio.mp3"
 *   title="Song Title"
 *   artist="Artist Name"
 *   artwork="/artwork.jpg"
 * />
 * ```
 */
export function AudioPlayer({
  src,
  title,
  artist,
  artwork,
  autoplay = false,
  loop = false,
  onPlay,
  onPause,
  onEnded,
  className,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handlePlay = () => {
      setIsPlaying(true)
      onPlay?.()
    }
    const handlePause = () => {
      setIsPlaying(false)
      onPause?.()
    }
    const handleEnded = () => {
      setIsPlaying(false)
      onEnded?.()
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [onPlay, onPause, onEnded])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
  }

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const time = parseFloat(e.target.value)
    audio.currentTime = time
    setCurrentTime(time)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const vol = parseFloat(e.target.value)
    audio.volume = vol
    setVolume(vol)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className={cn(styles.audioPlayer, className)}>
      <audio
        ref={audioRef}
        src={src}
        autoPlay={autoplay}
        loop={loop}
      />

      {artwork && (
        <div className={styles.artwork}>
          <img src={artwork} alt={`${title} artwork`} className={styles.artworkImage} />
          <div className={styles.artworkOverlay} />
        </div>
      )}

      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        {artist && <div className={styles.artist}>{artist}</div>}
      </div>

      <div className={styles.controls}>
        <button
          className={styles.playButton}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          type="button"
        >
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="7" y="5" width="3" height="14" fill="currentColor" rx="1.5" />
              <rect x="14" y="5" width="3" height="14" fill="currentColor" rx="1.5" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M8 5l11 7-11 7V5z" fill="currentColor" />
            </svg>
          )}
        </button>

        <div className={styles.progressContainer}>
          <div className={styles.progressBackground}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
            <div
              className={styles.progressThumb}
              style={{ left: `${progress}%` }}
            />
          </div>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleTimeChange}
            className={styles.progressSlider}
            aria-label="Audio timeline"
          />
        </div>

        <div className={styles.timeDisplay}>
          <span className={styles.currentTime}>{formatTime(currentTime)}</span>
          <span className={styles.separator}>/</span>
          <span className={styles.totalTime}>{formatTime(duration)}</span>
        </div>
      </div>

      <div className={styles.volumeControl}>
        <svg
          className={styles.volumeIcon}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 6v4h3l4 4V2L5 6H2z"
            fill="currentColor"
          />
          {volume > 0 && (
            <path
              d="M11 4c1 1 1 3 1 4s0 3-1 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )}
        </svg>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className={styles.volumeSlider}
          aria-label="Volume"
        />
      </div>
    </div>
  )
}
