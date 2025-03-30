import React, { useState, useEffect } from 'react';
import NavContent from './components/NavContent';

const NavBar = ({ handlerScrollSection, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const liSections = [
    { id: 'sectionAboutUs', name: 'Sobre Nosotros' },
    { id: 'sectionProductsCollection', name: 'Productos' },
    // { id: 'sectionTestimonials', name: 'Opiniones' },
    // { id: 'sectionLayoutImages', name: 'Galeria' },
    { id: 'sectionContactUs', name: 'Contacto' }
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollPosition === 0) {
      setIsAtTop(true);
      setIsScrolled(false);
    } else if (scrollPosition > viewportHeight * 0.3) {
      setIsAtTop(false);
      setIsScrolled(true);
    } else {
      setIsAtTop(false);
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`absolute top-0 left-0 w-full z-50 transition-opacity duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <NavContent liSections={liSections} activeSection={activeSection} handlerScrollSection={handlerScrollSection} isAtTop={isAtTop} />
      </header>

      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-indigo-200 shadow-sm transition-all duration-500 ease-in-out ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        <NavContent liSections={liSections} activeSection={activeSection} handlerScrollSection={handlerScrollSection} isAtTop={isAtTop} />

      </header>
    </>
  );
};

export default NavBar;