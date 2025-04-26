import React, { useMemo } from 'react';

const ToggleButton = ({ toggleMenu, isMenuOpen, isAtTop }) => {
  const baseClasses = useMemo(() => (
    `block w-6 h-0.5 transition-all duration-300 ${isAtTop ? 'bg-white' : 'bg-gray-900 dark:bg-gray-100'
    }`
  ), [isAtTop]);

  const lineConfig = useMemo(() => [
    {
      classes: `${baseClasses} ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`
    },
    {
      classes: `${baseClasses} ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`
    },
    {
      classes: `${baseClasses} ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`
    }
  ], [baseClasses, isMenuOpen]);

  return (
    <button
      className="md:hidden p-1.7 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-red-900 pr-0.5"
      onClick={toggleMenu}
      aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
    >
      {lineConfig.map((line, index) => (
        <span
          key={`toggle-line-${index}`}
          className={line.classes}
          aria-hidden="true"
        />
      ))}
    </button>
  );
};

export default React.memo(ToggleButton);