import React from 'react'

const SliderCarousel = ({ title, subtitle, image, currentIndex }) => {
  return (
    <div className='w-full keen-slider__slide flex'>
      <div className="w-1/2 flex flex-col justify-center items-center p-4 px-5">
        <h1 className="text-[4.5rem] font-bold" style={{ lineHeight: '1' }}>{title}</h1>
        <p className='text-xl text-gray-400 italic my-8 '>{subtitle}</p>

        <div className="sm:flex sm:gap-4">
          <a
            className="uppercase block rounded-md bg-indigo-500 py-2 px-4 text-center text-sm font-medium text-white transition hover:bg-indigo-700 "
            href="#"
          >
            Ver Menú
          </a>
        </div>
      </div>

      <div className="w-1/2 relative h-72 rounded-lg sm:h-64 xl:h-96 2xl:h-96 pb-5">
        <div
          className="duration-700 ease-in-out h-full px-14 "
          data-carousel-item
        >
          <img
            src={image}
            className="block w-full h-full object-cover shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md"
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
      </div>
    </div>
  )
}

export default SliderCarousel
