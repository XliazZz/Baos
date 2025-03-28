import React from 'react';

const IndicatorCarousel = ({ index, currentIndex, handleIndicatorClick }) => {
  return (
    <button
      type="button"
      className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-indigo-400' : 'bg-gray-400'}`}
      aria-current={index === currentIndex}
      aria-label={`Slide ${index + 1}`}
      data-carousel-slide-to={index}
      onClick={() => handleIndicatorClick(index)}
    ></button>
  );
};

export default IndicatorCarousel;