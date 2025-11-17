// Application constants

export const SITE_CONFIG = {
  name: 'REFLEKT',
  title: 'REFLEKT - Innovative Solutions',
  description: 'REFLEKT delivers cutting-edge solutions for modern challenges through technology and creativity.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://reflekt.com',
  ogImage: '/og-image.jpg',
  author: 'REFLEKT Team',
  keywords: ['innovation', 'technology', 'solutions', 'consulting', 'web development'],
} as const;

export const CONTACT_INFO = {
  email: 'hello@reflekt.com',
  phone: '+1 (555) 123-4567',
  address: 'San Francisco, CA',
  addressFull: '123 Innovation Drive, Suite 100, San Francisco, CA 94105',
  hours: 'Mon-Fri from 8am to 6pm PST',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/reflekt',
  linkedin: 'https://linkedin.com/company/reflekt',
  twitter: 'https://twitter.com/reflekt',
  email: `mailto:${CONTACT_INFO.email}`,
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'services', href: '/services' },
  { name: 'stories', href: '/stories' },
  { name: 'contact', href: '/contact' },
] as const;

export const LOCALES = ['en', 'ja'] as const;
export const DEFAULT_LOCALE = 'en' as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const STATS = {
  projects: '150+',
  satisfaction: '98%',
  clients: '50+',
  experience: '5',
} as const;

export const FORM_VALIDATION = {
  name: {
    minLength: 2,
    maxLength: 50,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
} as const;

export const RATE_LIMITS = {
  contact: {
    maxRequests: 5,
    windowMs: 15 * 60 * 1000, // 15 minutes
  },
} as const;