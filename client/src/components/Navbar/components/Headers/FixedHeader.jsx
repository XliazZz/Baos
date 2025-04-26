import React from 'react';
import NavContent from '../NavContent';

export const FixedHeader = ({ isScrolled, navContentProps }) => (
  <header
    className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-indigo-200 dark:bg-slate-950 dark:border-slate-800 shadow-sm transition-all duration-500 ease-in-out ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    itemScope
    itemType="https://schema.org/WPHeader"
    aria-label="Navegación principal"
  >
    <NavContent {...navContentProps} />
  </header>
);