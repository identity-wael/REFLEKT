'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const tabs = [
  { id: 'console', label: 'Console', href: '/' },
  { id: 'credit-engine', label: 'Credit Engine', href: '/credit-engine' }
];

export function TabNavigation() {
  const pathname = usePathname();
  const activeTab = pathname.startsWith('/credit-engine') ? 'credit-engine' : 'console';

  return (
    <div className="tab-navigation">
      <div className="tab-container">
        <div className="tabs-wrapper">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span className="tab-label">{tab.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .tab-navigation {
          height: 100%;
          width: 100%;
        }

        .tab-container {
          display: flex;
          height: 100%;
          padding-left: 2rem;
        }

        .tabs-wrapper {
          display: flex;
          gap: 2rem;
          height: 100%;
          align-items: center;
        }
        
        @media (min-width: 768px) {
          .tab-container {
            padding-left: calc(16rem + 2rem); /* Sidebar width + padding to align with Introduction */
          }
        }
        
        @media (min-width: 1024px) {
          .tab-container {
            padding-left: calc(16rem + 2rem); /* Keep consistent alignment */
          }
        }

        :global(.tab-item) {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
          white-space: nowrap;
          height: 100%;
        }
        
        :global(.tab-item:first-child) {
          padding-left: 0; /* Remove extra padding for first tab to align text */
        }
        
        :global(.tab-item:not(:first-child)) {
          padding-left: 2rem; /* Space between tabs */
        }

        :global(.tab-item:hover) {
          color: rgba(255, 255, 255, 0.9);
        }

        :global(.tab-item.active) {
          color: rgb(255, 255, 255);
        }

        :global(.tab-item.active)::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--nextra-primary-hue, rgb(79, 70, 229));
        }

        @media (max-width: 768px) {
          .tab-container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}