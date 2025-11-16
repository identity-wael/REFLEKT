'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Skip to content link for keyboard navigation
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className={cn(
        'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4',
        'bg-primary text-primary-foreground px-4 py-2 rounded-md',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'z-50 font-medium'
      )}
    >
      Skip to main content
    </a>
  );
}

// Visually hidden text for screen readers
interface VisuallyHiddenProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function VisuallyHidden({ children, asChild = false }: VisuallyHiddenProps) {
  const Comp = asChild ? 'span' : 'div';

  return (
    <Comp className="sr-only">
      {children}
    </Comp>
  );
}

// Focus trap for modals and dialogs
interface FocusTrapProps {
  children: React.ReactNode;
  active?: boolean;
}

export function FocusTrap({ children, active = true }: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }, [active]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}

// Live region for announcing dynamic content changes
interface LiveRegionProps {
  children: React.ReactNode;
  politeness?: 'polite' | 'assertive' | 'off';
  atomic?: boolean;
}

export function LiveRegion({
  children,
  politeness = 'polite',
  atomic = false
}: LiveRegionProps) {
  return (
    <div
      aria-live={politeness}
      aria-atomic={atomic}
      className="sr-only"
    >
      {children}
    </div>
  );
}

// Accessible heading component with proper hierarchy
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Heading({ level, children, className, id }: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const defaultClasses = {
    1: 'text-4xl md:text-5xl font-bold',
    2: 'text-3xl md:text-4xl font-bold',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-medium',
    6: 'text-base md:text-lg font-medium',
  };

  return (
    <Tag
      className={cn(defaultClasses[level], className)}
      id={id}
    >
      {children}
    </Tag>
  );
}

// Accessible form field wrapper
interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  error?: string;
  description?: string;
  required?: boolean;
  id: string;
}

export function FormField({
  label,
  children,
  error,
  description,
  required,
  id
}: FormFieldProps) {
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="required">
            *
          </span>
        )}
      </label>

      {description && (
        <p id={descriptionId} className="text-sm text-muted-foreground">
          {description}
        </p>
      )}

      <div>
        {children}
      </div>

      {error && (
        <p
          id={errorId}
          className="text-sm text-red-500"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
}

// Accessible button with loading state
interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function AccessibleButton({
  children,
  isLoading = false,
  loadingText = 'Loading...',
  className,
  disabled,
  ...props
}: AccessibleButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      aria-live="polite"
      {...props}
    >
      {isLoading ? loadingText : children}
    </button>
  );
}

// High contrast mode detection
export function useHighContrast() {
  const preferHighContrast =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-contrast: high)').matches;

  return preferHighContrast;
}

// Reduced motion detection
export function useReducedMotion() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return prefersReducedMotion;
}