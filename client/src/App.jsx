import React, { useEffect } from 'react';
import { NavBar } from './components/Navbar';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights/Highlights';
import ProductsCollection from './components/ProductsCollection/ProductsCollection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import AboutUs from './components/AboutUs/AboutUs';
import Faq from './components/Faq/Faq';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import FloatButton from './components/FloatButton/FloatButton';
import { initReveal } from './utils/reveal';

function App() {
  // Después de que React dibuja (o hidrata) la página
  useEffect(initReveal, []);

  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Saltar al contenido
      </a>
      <NavBar />
      <main id="contenido">
        <Hero />
        <Highlights />
        <ProductsCollection />
        <AboutUs />
        <HowItWorks />
        <Faq />
        <ContactUs />
      </main>
      <Footer />
      <FloatButton />
    </>
  );
}

export default App;
