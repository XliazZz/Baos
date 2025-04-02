import React, { useState } from 'react';
import SliderCarousel from './components/SliderCarousel';
import ButtonsCarousel from './components/ButtonsCarousel';
import { carouselHandlers } from './logic/handlers';
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css';

const Carousel = ({ data, handlerScrollSection }) => {
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
    mode: "snap", // Mejor para SEO que free-scroll
    slides: {
      origin: "center", // Mejor visibilidad del slide actual
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

  return (
    <section
      aria-label="Carrusel de presentación"
      className="h-screen w-screen flex justify-center items-center bg-black overflow-hidden z-50"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div id="default-carousel" className="relative w-full h-full overflow-hidden" role="group">
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="keen-slider__slide w-full h-full flex-shrink-0"
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} de ${data.length}`}
            >
              <SliderCarousel
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                currentIndex={currentIndex}
                handlerScrollSection={handlerScrollSection}
                position={index + 1}
              />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div>
            <ButtonsCarousel
              handle={(e) => handlePrev(e, instanceRef)}
              span='Anterior'
              direction='left'
              aria-label="Slide anterior"
            />
            <ButtonsCarousel
              handle={(e) => handleNext(e, instanceRef)}
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