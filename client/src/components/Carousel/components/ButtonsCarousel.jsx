import React from 'react';

const ButtonsCarousel = ({ handle, span, direction, id, ariaLabel }) => {
  return (
    <button
      type="button"
      className={`z-30 absolute ${direction === 'left' ? 'sm:left-0 -left-5' : '-right-5 mr-0 sm:right-0 md:mr-4 sm:mr-0 xl:mr-4'} top-1/2 transform -translate-y-1/2 flex justify-center items-center px-5 h-full group sm:px-4`}
      onClick={handle}
      id={id}
      aria-label={ariaLabel}
    >
      <span className='cursor-pointer'>
        <p
          className={`icon-[ps--${direction}] w-8 h-8 text-white hover:text-indigo-300 mx-auto
            sm:w-6 sm:h-8 
            md:w-9 md:h-9
            lg:w-9 lg:h-9
            xl:w-8 xl:h-8
            2xl:w-12 2xl:h-12`}
          role="img"
          aria-hidden="true"
        />
        <span className="sr-only">{span}</span>
      </span>
    </button>
  );
};

export default React.memo(ButtonsCarousel);