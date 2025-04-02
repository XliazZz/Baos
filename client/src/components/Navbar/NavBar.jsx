import React, { useState, useEffect } from 'react';
import NavContent from './components/NavContent';

const NavBar = ({ handlerScrollSection, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const liSections = [
    { id: 'sectionAboutUs', name: 'Sobre Nosotros' },
    { id: 'sectionProductsCollection', name: 'Productos' },
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header principal (transparente en la parte superior) */}
      <header
        className={`absolute top-0 left-0 w-full z-50 transition-opacity duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        <NavContent
          liSections={liSections}
          activeSection={activeSection}
          handlerScrollSection={handlerScrollSection}
          isAtTop={isAtTop}
        />
      </header>

      {/* Header fijo que aparece al hacer scroll */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-indigo-200 shadow-sm transition-all duration-500 ease-in-out ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        itemScope
        itemType="https://schema.org/WPHeader"
        aria-label="Navegación principal"
      >
        <NavContent
          liSections={liSections}
          activeSection={activeSection}
          handlerScrollSection={handlerScrollSection}
          isAtTop={isAtTop}
        />
      </header>

      {/* Schema markup para la organización */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Panificadora Andina SA",
          "url": window.location.href,
          "logo": "https://tu-sitio.com/logo.png",
          "sameAs": [
            "https://facebook.com/tupagina",
            "https://instagram.com/tucuenta"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Milton 462",
            "addressLocality": "Villa Luro",
            "addressRegion": "CABA",
            "postalCode": "1406",
            "addressCountry": "AR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+54-11-4888-4304",
            "contactType": "customer service"
          }
        })}
      </script>
    </>
  );
};

export default React.memo(NavBar);