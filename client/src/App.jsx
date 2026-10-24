import React from 'react';
import { NavBar } from './components/Navbar';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import ProductsCollection from './components/ProductsCollection/ProductsCollection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import WhyUs from './components/WhyUs/WhyUs';
import AboutUs from './components/AboutUs/AboutUs';
import Faq from './components/Faq/Faq';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import FloatButton from './components/FloatButton/FloatButton';

function App() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas">
        Saltar al contenido
      </a>
      <NavBar />
      <main id="contenido">
        <Hero />
        <Marquee />
        <ProductsCollection />
        <HowItWorks />
        <WhyUs />
        <AboutUs />
        <Faq />
        <ContactUs />
      </main>
      <Footer />
      <FloatButton />
    </>
  );
}

export default App;
