import React from 'react';
import NavContent from '../NavContent';

export const MainHeader = ({ isScrolled, navContentProps }) => (
  <header
    className={`absolute top-0 left-0 w-full z-50 transition-opacity duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    itemScope
    itemType="https://schema.org/WPHeader"
  >
    <NavContent {...navContentProps} />
  </header>
);