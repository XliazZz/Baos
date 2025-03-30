import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
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
      const tolerance = 120; // Margen de tolerancia para la detección

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

  const data = [
    { title: "Pan Bao Hamburguesa", subtitle: "Pan bao adaptado para hamburguesas, ofreciendo una alternativa ligera y esponjosa al pan tradicional", id: 2, image: "https://sushisesamo.cl/wp-content/uploads/2023/11/paobao-pollo.jpg" },
    { title: "Pan Bao Tradicional", subtitle: "Clásico pan bao al vapor, esponjoso y suave, perfecto para rellenar con tus ingredientes favoritos", id: 1, image: "https://th.bing.com/th/id/OIP.8b64JwdG0LSJbwKsoMRNRQHaFj?rs=1&pid=ImgDetMain" },
    { title: "Pan Bao Vegano", subtitle: "Delicioso pan bao elaborado sin ingredientes de origen animal, ideal para opciones de relleno veganas", id: 3, image: "https://www.fansdelvacuno.es/wp-content/uploads/2019/10/77A4058-RET.jpg" }
  ];

  // const images = [
  //   { src: "https://images.prismic.io/dishcult-website-prod/b8c88329-3db7-432b-b07d-b7c780f8c2a5_66460761_864139893967510_5708116213326938112_o.jpg?auto=compress%2Cformat&fit=crop&w=1600&h=1064", alt: "Pan Bao Variado" },
  //   { src: "https://th.bing.com/th/id/OIP.3c_KkXlDZom7ZrhZjltmVwAAAA?rs=1&pid=ImgDetMain", alt: "Pan Bao" },
  //   { src: "https://th.bing.com/th/id/OIP.Qp5APaqm0GGkpLuE86rtygHaJ4?rs=1&pid=ImgDetMain", alt: "Pan Bao Variado" },
  //   { src: "https://es.cravingsjournal.com/wp-content/uploads/2022/08/bao-con-chancho-1-1170x1755.jpg", alt: "Pan Bao Variado" },
  //   { src: "https://im.whatshot.in/img/2019/Jan/baos-the-fatty-bao-photos-courtesy-kunal-chandra-4-cropped-1546580751.jpg", alt: "Pan Bao Variado" },
  //   { src: "https://i.pinimg.com/originals/5b/0f/b1/5b0fb11010e4c97f24bb65ede1090f43.jpg", alt: "Pan Bao Variado" },
  // ];

  return (
    <>
      <NavBar handlerScrollSection={handlerScrollSection} activeSection={activeSection} />

      <section id='sectionCarousel'>
        <Carousel data={data} />
      </section>

      <SectionContainer id='sectionInfo' contain={<InfoSection />} bgColor={'white'} styles={"xl:pb-0 xl:pt-24"} />

      <SectionContainer id='sectionAboutUs' contain={<AboutUs handlerScrollSection={handlerScrollSection} />} bgColor={'white'} />

      <SectionContainer contain={<FeatureSection />} bgColor={'gray-50'} />

      <SectionContainer id='sectionProductsCollection' contain={<ProductsCollection />} bgColor={'white'} />

      <SectionContainer contain={<Incetives />} bgColor={'gray-50'} />

      <SectionContainer id='sectionContactUs' contain={<ContactUs />} bgColor={'white'} />

      <Footer />

      {/* 
        <SectionContainer id='sectionTestimonials' contain={<Testimonials />} bgColor={'indigo-50'} />
        <SectionContainer id='sectionLayoutImages' contain={<LayoutImages images={images} />} bgColor={'gray-50'} /> 
      */}
    </>
  );
}

export default App;