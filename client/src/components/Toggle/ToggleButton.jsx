import React from 'react'

const ToggleButton = ({ toggleMenu, isMenuOpen, isAtTop }) => {
  return (
    <button
      className="md:hidden p-1.7 rounded-md focus:outline-none  text-red-900 pr-0.5"
      onClick={toggleMenu}
      aria-label="Menú de navegación"
      aria-expanded={isMenuOpen}
    >
      <span className={`block w-6 h-0.5 ${isAtTop ? 'bg-white' : 'bg-gray-900 dark:bg-gray-100'} transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
      <span className={`block w-6 h-0.5 ${isAtTop ? 'bg-white' : 'bg-gray-900 dark:bg-gray-100'} transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
      <span className={`block w-6 h-0.5 ${isAtTop ? 'bg-white' : 'bg-gray-900 dark:bg-gray-100'} transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
    </button>
  )
}

export default ToggleButton
