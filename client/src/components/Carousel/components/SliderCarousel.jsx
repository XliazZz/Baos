import React from 'react';

const SliderCarousel = ({ title, subtitle, image, handlerScrollSection, position }) => {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      itemProp="item"
      itemScope
      itemType="https://schema.org/ImageObject"
    >
      <div className="absolute inset-0 bg-black opacity-60 z-40 xl:opacity-75"></div>

      <img
        src={image}
        className="w-full h-full object-cover"
        alt={title}
        itemProp="contentUrl"
        loading={position > 1 ? "lazy" : "eager"}
        fetchpriority={position === 1 ? "high" : "low"}
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-50"
        itemProp="description"
      >
        <h1
          className="text-3xl font-bold 
            sm:text-[2.7rem]
            md:text-[3.5rem]
            lg:text-[4rem]
            xl:text-[3.8rem]
            2xl:text-[5rem]"
          itemProp="name"
        >
          {title}
        </h1>
        <p
          className="text-xl text-gray-300 italic mt-4 w-[98%]
            sm:text-lg sm:w-[80%] sm:mt-4
            md:text-2xl
            lg:text-2xl lg:mt-6 lg:w-[60%]
            xl:text-2xl xl:mt-4 xl:w-[60%]
            2xl:text-3xl 2xl:mt-6 2xl:w-[40%]"
          itemProp="caption"
        >
          {subtitle}
        </p>
        <button
          className="mt-10 border-2 cursor-pointer border-indigo-500 hover:border-white hover:text-white text-white text-lg font-semibold px-4.5 py-2.5 rounded-sm transition
            sm:px-6 sm:py-2 sm:mt-6 sm:text-lg
            md:px-8 md:py-2.5 md:text-lg md:mt-7 md:bg-indigo-900/30
            lg:px-7 lg:py-2 lg:text-lg lg:mt-6
            xl:px-8 xl:py-2.5 xl:text-base xl:mt-8 xl:bg-indigo-900/20
            2xl:px-12 2xl:py-3 2xl:text-xl 2xl:mt-8 2xl:bg-indigo-900/20"
          onClick={() => handlerScrollSection('sectionProductsCollection')}
          aria-label={`Ver menú de ${title}`}
        >
          Ver Menú
        </button>
      </div>
    </div>
  );
};

export default React.memo(SliderCarousel);