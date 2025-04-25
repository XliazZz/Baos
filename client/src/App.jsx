import React, { useEffect, useState } from 'react';
import './App.css';
import { NavBar } from './components/Navbar';
import Carousel from './components/Carousel/Carousel';
import FeatureSection from './components/FeatureSection/FeatureSection';
import ProductsCollection from './components/ProductsCollection/ProductsCollection';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import SectionContainer from './components/SectionContainer/SectionContainer';
import InfoSection from './components/InfoSection/InfoSection';
import Incetives from './components/Incetives/Incetives';

import Testimonials from './components/Testimonials/Testimonials';
import LayoutImages from './components/GalerySection/LayoutImages';

function App() {
  const [activeSection, setActiveSection] = useState('sectionCarousel'); // Inicialmente en Carousel

  const handlerScrollSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para detectar la sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'sectionCarousel',
        'sectionAboutUs',
        'sectionProductsCollection',
        'sectionTestimonials',
        'sectionLayoutImages',
        'sectionContactUs',
      ];

      let currentSection = 'sectionCarousel'; // Por defecto
      const windowCenter = window.innerHeight / 2; // Centro de la ventana gráfica
      const tolerance = 300; // Margen de tolerancia para la detección

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionCenter = sectionTop + sectionHeight / 2; // Centro de la sección

          // Verificar si el centro de la sección está cerca del centro de la ventana
          if (
            Math.abs(sectionCenter - (window.scrollY + windowCenter)) <= tolerance
          ) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavBar handlerScrollSection={handlerScrollSection} activeSection={activeSection} />

      <section id='sectionCarousel'>
        <Carousel handlerScrollSection={handlerScrollSection} />
      </section>

      <SectionContainer
        id='sectionInfo'
        contain={<InfoSection />}
        bgColor={'white'}
        darkBg={'gray-950'}
        styles={"xl:pb-0 xl:pt-24 sm:pb-0 pb-0"}
        ariaLabel="Información sobre nuestros productos"
        itemType="https://schema.org/ItemList"
      />

      <SectionContainer
        id='sectionAboutUs'
        contain={<AboutUs handlerScrollSection={handlerScrollSection} />}
        bgColor={'white'}
        darkBg={'gray-950'}
        ariaLabel="Sobre nuestra empresa"
        itemType="https://schema.org/AboutPage"
      />

      <SectionContainer
        contain={<FeatureSection />}
        bgColor={'indigo-50'}
        darkBg={'slate-900'}
        ariaLabel="Nuestras características destacadas"
        itemType="https://schema.org/ItemList"
      />

      <SectionContainer
        id='sectionProductsCollection'
        contain={<ProductsCollection />}
        bgColor={'white'}
        darkBg={'gray-950'}
        ariaLabel="Nuestra colección de productos"
        itemType="https://schema.org/ProductCollection"
      />

      <SectionContainer
        contain={<Incetives />}
        bgColor={'white'}
        darkBg={'slate-900'}
        ariaLabel="Nuestros beneficios y ventajas"
        itemType="https://schema.org/ItemList"
      />

      <SectionContainer
        id='sectionContactUs'
        contain={<ContactUs />}
        bgColor={'gray-50'}
        darkBg={'gray-950'}

        ariaLabel="Información de contacto"
        itemType="https://schema.org/ContactPage"
      />

      <Footer />
    </>
  );
}

export default App;