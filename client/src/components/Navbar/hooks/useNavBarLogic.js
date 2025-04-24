import { useState, useEffect, useCallback } from 'react';

export const useNavBarLogic = (handlerScrollSection, activeSection) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const liSections = [
    { id: 'sectionAboutUs', name: 'Sobre Nosotros' },
    { id: 'sectionProductsCollection', name: 'Productos' },
    { id: 'sectionContactUs', name: 'Contacto' }
  ];

  const handleScrollLock = useCallback((shouldLock) => {
    document.body.style.overflow = shouldLock ? 'hidden' : '';
    document.documentElement.style.overflow = shouldLock ? 'hidden' : '';
  }, []);

  useEffect(() => {
    handleScrollLock(isMenuOpen);
    return () => handleScrollLock(false);
  }, [isMenuOpen, handleScrollLock]);

  const handleScroll = useCallback(() => {
    if (isMenuOpen) return;

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
  }, [isMenuOpen]);

  useEffect(() => {
    const options = { passive: true };
    window.addEventListener('scroll', handleScroll, options);
    return () => window.removeEventListener('scroll', handleScroll, options);
  }, [handleScroll]);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return {
    isScrolled,
    isAtTop,
    isMenuOpen,
    liSections,
    navContentProps: {
      liSections,
      activeSection,
      handlerScrollSection,
      isAtTop,
      toggleMenu,
      isMenuOpen
    },
    toggleMenu,
    closeMenu
  };
};