// Common types used across the application

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  timeline: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image?: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: 'general' | 'technical' | 'partnership' | 'other';
  budget: 'under-5k' | '5k-15k' | '15k-50k' | '50k-plus' | 'not-sure';
  timeline: 'asap' | '1-month' | '2-3-months' | '6-months' | 'flexible';
  message: string;
  newsletter: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

export type Locale = 'en' | 'ja';

export interface PageProps {
  params: Promise<{ locale: Locale }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
      staggerChildren?: number;
    };
  };
}

// Error boundary types
export interface ErrorInfo {
  componentStack: string;
  errorBoundary?: string;
  eventId?: string;
}