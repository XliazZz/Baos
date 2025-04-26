import React, { useState, useCallback } from 'react';
import SliderCarousel from './components/SliderCarousel';
import ButtonsCarousel from './components/ButtonsCarousel';
import { carouselHandlers } from './logic/handlers';
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css';
import carouselData from '../../data/carousel/carouselData.json'

const Carousel = ({ handlerScrollSection }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentIndex(slider.track.details.rel);
    },
    loop: true,
    created() {
      setLoaded(true);
    },
    mode: "snap",
    slides: {
      origin: "center",
      perView: 1,
      spacing: 0,
    },
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current && instanceRef.current.track.details.slides.length > 0) {
        instanceRef.current.next();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, instanceRef]);

  const { handlePrev, handleNext } = carouselHandlers(event, instanceRef);

  const renderSlides = useCallback(() => (
    carouselData.map((item, index) => (
      <div
        key={`carousel-item-${index}`}
        className="keen-slider__slide w-full h-full flex-shrink-0"
        itemScope
        itemProp="itemListElement"
        itemType="https://schema.org/ListItem"
        role="group"
        aria-roledescription="slide"
        aria-label={`Slide ${index + 1} de ${carouselData.length}`}
        aria-hidden={currentIndex !== index}
      >
        <SliderCarousel
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          currentIndex={currentIndex}
          handlerScrollSection={handlerScrollSection}
          position={index + 1}
          loading={index === 0 ? 'eager' : 'lazy'} // Optimización de carga de imágenes
        />
      </div>
    ))
  ), [carouselData, currentIndex, handlerScrollSection]);

  return (
    <section
      aria-label="Carrusel de presentación"
      className="h-screen w-screen flex justify-center items-center bg-black overflow-hidden z-50"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div
        id="default-carousel"
        className="relative w-full h-full overflow-hidden"
        role="group"
        itemProp="mainEntity"
      >
        <div
          ref={sliderRef}
          className="keen-slider w-full h-full"
          aria-live="polite"
        >
          {renderSlides()}
        </div>

        {loaded && instanceRef.current && (
          <div aria-controls="default-carousel">
            <ButtonsCarousel
              handle={handlePrev}
              span='Anterior'
              direction='left'
              aria-label="Slide anterior"
            />
            <ButtonsCarousel
              handle={handleNext}
              span='Siguiente'
              direction='right'
              aria-label="Slide siguiente"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(Carousel);