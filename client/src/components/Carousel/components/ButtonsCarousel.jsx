import React from 'react';

const ButtonsCarousel = ({ handle, span, direction, id }) => {
  return (
    <button
      type="button"
      className={`z-30 absolute ${direction === 'left' ? 'left-0' : 'right-0 mr-4 sm:mr-0 xl:mr-4'} top-1/2 transform -translate-y-1/2 flex justify-center items-center px-5 h-full group sm:px-4`}
      onClick={handle}
      id={id}
    >
      <span className='cursor-pointer'>
        <p className={`icon-[ps--${direction}] w-10 h-10 text-white hover:text-indigo-300 mx-auto
          sm:w-6 sm:h-8 
          md:w-9 md:h-9
          lg:w-10 lg:h-10
          xl:w-8 xl:h-8`}
          role="img"
          aria-hidden="true"
        />
        <span className="hidden">{span}</span>
      </span>
    </button>
  );
};

export default ButtonsCarousel;
