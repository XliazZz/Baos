import React, { useEffect, useState, useCallback, useMemo } from 'react';
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

function App() {
  const [activeSection, setActiveSection] = useState('sectionCarousel');

  const sections = useMemo(() => [
    'sectionCarousel',
    'sectionAboutUs',
    'sectionProductsCollection',
    'sectionContactUs'
  ], []);

  const handlerScrollSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top + window.pageYOffset;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      const scrollPosition = sectionTop - (windowHeight / 2) + (sectionHeight / 2);

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });

      setActiveSection(sectionId);
    }
  }, []);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const windowCenter = window.innerHeight / 3;
        let currentSection = activeSection;

        sections.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (section) {
            const { offsetTop, offsetHeight } = section;
            const sectionCenter = offsetTop + offsetHeight / 2;
            const distance = Math.abs(sectionCenter - (window.scrollY + windowCenter));

            if (distance < 300) {
              currentSection = sectionId;
            }
          }
        });

        setActiveSection(prev => prev !== currentSection ? currentSection : prev);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, sections]);

  return (
    <div className="app-container">
      <NavBar
        handlerScrollSection={handlerScrollSection}
        activeSection={activeSection}
      />

      <div id='sectionCarousel'>
        <Carousel handlerScrollSection={handlerScrollSection} />
      </div>

      <SectionContainer
        id='sectionInfo'
        contain={<InfoSection />}
        bgColor={'white'}
        darkBg={'gray-950'}
        styles="xl:pb-0 xl:pt-24 sm:pb-0 pb-0"
      />

      <SectionContainer
        id='sectionAboutUs'
        contain={<AboutUs handlerScrollSection={handlerScrollSection} />}
        bgColor={'white'}
        darkBg={'gray-950'}
      />

      <SectionContainer
        contain={<FeatureSection />}
        bgColor={'indigo-50'}
        darkBg={'slate-900'}
      />

      <SectionContainer
        id='sectionProductsCollection'
        contain={<ProductsCollection />}
        bgColor={'white'}
        darkBg={'gray-950'}
      />

      <SectionContainer
        contain={<Incetives />}
        bgColor={'white'}
        darkBg={'slate-900'}
      />

      <SectionContainer
        id='sectionContactUs'
        contain={<ContactUs />}
        bgColor={'gray-50'}
        darkBg={'gray-950'}
      />

      <Footer />
    </div>
  );
}

export default App;