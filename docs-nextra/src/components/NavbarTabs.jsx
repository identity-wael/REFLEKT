'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function NavbarTabs() {
  const pathname = usePathname();
  const isConsole = !pathname.startsWith('/credit-engine');
  const isCreditEngine = pathname.startsWith('/credit-engine');

  return (
    <div style={{ 
      display: 'flex', 
      gap: '8px',
      alignItems: 'center',
      marginLeft: '24px'
    }}>
      <Link 
        href="/"
        style={{
          padding: '6px 12px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
          color: isConsole ? 'var(--nextra-primary-hue)' : 'inherit',
          backgroundColor: isConsole ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
          border: isConsole ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid transparent',
          transition: 'all 0.2s ease',
          cursor: 'pointer'
        }}
      >
        Console
      </Link>
      <Link 
        href="/credit-engine"
        style={{
          padding: '6px 12px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
          color: isCreditEngine ? 'var(--nextra-primary-hue)' : 'inherit',
          backgroundColor: isCreditEngine ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
          border: isCreditEngine ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid transparent',
          transition: 'all 0.2s ease',
          cursor: 'pointer'
        }}
      >
        Credit Engine
      </Link>
    </div>
  );
}