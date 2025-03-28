import React, { useState } from 'react';
import SliderCarousel from './components/SliderCarousel';
import IndicatorCarousel from './components/IndicatorCarousel';
import ButtonsCarousel from './components/ButtonsCarousel';
import { carouselHandlers } from './logic/handlers';
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css';

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentIndex(slider.track.details.rel)
    },
    loop: true,
    created() {
      setLoaded(true)
    },
  })

  const { handlePrev, handleNext, handleIndicatorClick } = carouselHandlers(event, instanceRef);

  return (
    <div className="h-full w-full bg-white items-center flex justify-center text-black">
      <div
        id="default-carousel"
        data-carousel="static"
        className="relative flex max-w-screen-xl px-4 py-12 w-full
        sm:px-6 sm:py-12 
        lg:px-8 
        xl:pt-36 xl:pb-24"
      >

        <div className='keen-slider flex w-full' ref={sliderRef}>
          {
            data.map((item, index) => (
              <SliderCarousel
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                currentIndex={currentIndex}
              />
            )
            )
          }
        </div>

        <div className="absolute bottom-[7.5%] left-1/2 transform -translate-x-1/2 flex space-x-2 ">
          {loaded && instanceRef.current && data.map((_, index) => (
            <IndicatorCarousel
              key={index}
              index={index}
              currentIndex={currentIndex}
              handleIndicatorClick={handleIndicatorClick}
            />
          ))
          }
        </div>

        {loaded && instanceRef.current && (
          <div>
            <ButtonsCarousel handle={(e) => handlePrev(e, instanceRef)} span='Anterior' direction='left' />
            <ButtonsCarousel handle={(e) => handleNext(e, instanceRef)} span='Siguiente' direction='right' />
          </div>
        )
        }

      </div>
    </div>
  );
};

export default Carousel;
