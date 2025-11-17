import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'ja'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      ja: '/about'
    },
    '/services': {
      en: '/services',
      ja: '/services'
    },
    '/stories': {
      en: '/stories',
      ja: '/stories'
    },
    '/contact': {
      en: '/contact',
      ja: '/contact'
    }
  }
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);