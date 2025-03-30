import React, { useState } from 'react';
import SliderCarousel from './components/SliderCarousel';
import ButtonsCarousel from './components/ButtonsCarousel';
import { carouselHandlers } from './logic/handlers';
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css';

const Carousel = ({ data }) => {
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
    <div className="h-screen w-screen flex justify-center items-center bg-black overflow-hidden z-50">
      <div id="default-carousel" className="relative w-full h-full overflow-hidden">
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {data.map((item, index) => (
            <div key={index} className="keen-slider__slide w-full h-full flex-shrink-0">
              <SliderCarousel
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                currentIndex={currentIndex}
              />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div>
            <ButtonsCarousel handle={(e) => handlePrev(e, instanceRef)} span='Anterior' direction='left' />
            <ButtonsCarousel handle={(e) => handleNext(e, instanceRef)} span='Siguiente' direction='right' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
