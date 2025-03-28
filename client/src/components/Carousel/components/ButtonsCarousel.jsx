import React from 'react';

const ButtonsCarousel = ({ handle, span, direction, id }) => {
  return (
    <button
      type="button"
      className={`flex absolute top-0 ${direction}-0 z-30 justify-center items-center px-5 h-full group bg-white`}
      onClick={handle}
      id={id}
    >
      <span className='cursor-pointer'>
        <p className={`icon-[ps--${direction}] w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 hover:text-indigo-900 mx-auto`} role="img" aria-hidden="true" />
        <span className="hidden">{span}</span>
      </span>
    </button>
  );
};

export default ButtonsCarousel;