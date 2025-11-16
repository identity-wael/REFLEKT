import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { vi } from 'vitest';

// Mock messages for testing
const messages = {
  navigation: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    stories: 'Stories',
    contact: 'Contact',
  },
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    submit: 'Submit',
  },
  home: {
    hero: {
      title: 'Welcome to REFLEKT',
      subtitle: 'Innovative solutions for modern challenges',
      cta: 'Learn More',
    },
  },
  contact: {
    title: 'Get in Touch',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send Message',
    },
  },
};

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextIntlClientProvider locale="en" messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };

// Mock functions for common use cases
export const mockRouterPush = vi.fn();
export const mockRouterReplace = vi.fn();

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: mockRouterPush,
      replace: mockRouterReplace,
      pathname: '/',
      query: {},
      asPath: '/',
    };
  },
  usePathname() {
    return '/';
  },
}));

// Mock framer-motion for tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation((callback) => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation((callback) => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Test utilities
export const createMockRouter = (props: Partial<any> = {}) => ({
  push: vi.fn(),
  replace: vi.fn(),
  pathname: '/',
  query: {},
  asPath: '/',
  ...props,
});

export const waitForElementToBeRemoved = async (element: HTMLElement) => {
  return new Promise<void>((resolve) => {
    const observer = new MutationObserver(() => {
      if (!document.contains(element)) {
        observer.disconnect();
        resolve();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
};