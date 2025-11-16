'use client';

import { TabNavigation } from './TabNavigation';
import { useState, useEffect } from 'react';

export function LayoutWithTabs({ children }) {
  const [selectedVersion, setSelectedVersion] = useState('v1.0.0');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const versions = [
    { value: 'v1.0.0', label: 'v1.0.0 (Latest)' },
    { value: 'v0.9.0', label: 'v0.9.0' },
    { value: 'v0.8.0', label: 'v0.8.0' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`tab-nav-container ${isScrolled ? 'scrolled' : ''}`}>
        <TabNavigation />
        <div className="version-control">
          <select 
            value={selectedVersion} 
            onChange={(e) => setSelectedVersion(e.target.value)}
            className="version-select"
          >
            {versions.map(version => (
              <option key={version.value} value={version.value}>
                {version.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div style={{ paddingTop: '48px' }}>
        {children}
      </div>
      <style jsx>{`
        .tab-nav-container {
          position: sticky;
          top: 64px;
          left: 0;
          right: 0;
          height: 48px;
          background: rgb(0, 0, 0);
          border-bottom: 1px solid rgb(38, 38, 38);
          z-index: 40;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.2s ease, backdrop-filter 0.2s ease;
        }
        
        .tab-nav-container.scrolled {
          background: rgba(9, 9, 11, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        
        .version-control {
          position: absolute;
          right: 320px; /* Align with search bar position */
          display: flex;
          align-items: center;
        }
        
        @media (min-width: 768px) {
          .version-control {
            right: 320px; /* Match search bar alignment */
          }
        }
        
        .version-select {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.9);
          padding: 0.4rem 0.8rem;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
          outline: none;
        }
        
        .version-select:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .version-select:focus {
          border-color: var(--nextra-primary-hue, rgb(79, 70, 229));
        }
        
        .version-select option {
          background: rgb(17, 17, 17);
          color: rgb(255, 255, 255);
        }
        
        :global(.dark) .tab-nav-container {
          background: rgb(0, 0, 0);
          border-bottom: 1px solid rgb(38, 38, 38);
        }
      `}</style>
    </>
  );
}