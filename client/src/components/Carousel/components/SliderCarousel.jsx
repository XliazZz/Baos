import React from 'react';

const SliderCarousel = ({ title, subtitle, image }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60 z-40 xl:opacity-75"></div>

      <img
        src={image}
        className="w-full h-full object-cover"
        alt={title}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-50">
        <h1 className="text-6xl font-bold 
          sm:text-[2.7rem]
          md:text-[3.5rem]
          lg:text-[4.5rem]
          xl:text-[3.8rem]"
        >{title}</h1>
        <p className="text-xl  text-gray-300 italic mt-4 w-[30%]
          sm:text-lg sm:w-[80%] sm:mt-4
          md:text-2xl
          lg:text-3xl lg:mt-6
          xl:text-2xl xl:mt-4 xl:w-[60%]"
        >{subtitle}</p>
        <a
          className="mt-8 border-2 border-indigo-500 hover:border-white hover:text-white text-white text-lg font-semibold px-6 py-3 rounded-sm transition
          sm:px-6 sm:py-2 sm:mt-6 sm:text-lg
          md:px-8 md:py-2.5 md:text-lg md:mt-7 md:bg-indigo-900/30
          lg:px-10 lg:py-3 lg:text-lg lg:mt-10
          xl:px-8 xl:py-2.5 xl:text-base xl:mt-8 xl:bg-indigo-900/20"
          href="#"
        >
          Ver Menú
        </a>
      </div>
    </div>
  );
};

export default SliderCarousel;

//EL BOTON TIENE QUE MANDAR A LA SECCION DE PRODUCTOS !!!!!!!!!!!!!°°°AGREGAR°°°!!!!!!!!!!!