import React from 'react';

const CardAbout = ({ image, title, description, description2, description3, buttonText, handlerScrollSection, idRef }) => {
  return (
    <article className="mx-auto overflow-hidden h-full flex max-w-screen-xl w-full flex-col 
      sm:min-h-full sm:max-h-full
      lg:mx-auto lg:overflow-hidden lg:min-h-[300px] lg:max-h-[350px] lg:flex-row lg:max-w-screen-xl lg:w-full lg:h-[300px]
      xl:mx-auto xl:overflow-hidden xl:min-h-[300px] xl:max-h-[350px] xl:flex-row xl:max-w-screen-xl xl:w-full xl:h-[300px]
      2xl:max-w-screen-2xl 2xl:min-h-[350px] 2xl:max-h-[400px]"
      itemScope itemType="https://schema.org/Thing"
    >
      <div className="w-full flex-shrink-0 h-[25em] 
        sm:w-full sm:h-[28em]
        md:w-full md:h-[35em] md:mx-auto 
        lg:w-[40%] lg:h-full lg:mx-0    
        xl:w-[35%] xl:h-full
        2xl:w-[45%] 2xl:h-full"
      >
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={image}
          alt={title}
          itemProp="image"
          loading="lazy"
        />
      </div>

      <div className="py-2 flex flex-col justify-center items-start text-start h-full
        sm:p-0 sm:mt-2
        md:mt-3 md:p-4 
        lg:w-[60%] lg:pl-4 lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-start lg:mt-0
        xl:w-[65%] xl:pl-6 xl:h-full xl:flex xl:flex-col xl:justify-center xl:items-start xl:mt-0
        2xl:w-[55%]"
        itemProp="description"
      >
        <div>
          <h2 className="text-xl font-bold text-black cursor-default dark:text-white
            sm:text-xl 
            md:text-2xl
            lg:text-2xl 
            xl:text-xl
            2xl:text-2xl"
            itemProp="name"
          >
            {title}
          </h2>
          <div className="mt-3 text-slate-600 text-[17px] dark:text-slate-400
            sm:text-lg sm:mt-1 sm:font-medium sm:text-slate-500
            md:mt-2 md:font-semibold md:text-slate-500
            lg:mt-4 lg:text-lg lg:text-slate-600
            xl:text-lg xl:mt-2
            2xl:text-xl 2xl:py-4"
          >
            <p itemProp="description">{description}</p>
            {description2 && <p itemProp="description">{description2}</p>}
            {description3 && <p itemProp="description">{description3}</p>}
          </div>
        </div>

        <div className="mt-4 sm:mt-3 sm:w-full md:mt-4 lg:mt-5 lg:w-auto">
          <button
            className="uppercase block rounded-md bg-indigo-500 dark:bg-indigo-600 py-2 px-3 text-center text-sm font-medium text-white transition hover:bg-indigo-700 w-full cursor-pointer
            sm:py-3 sm:px-4 sm:text-sm sm:w-full
            md:py-3.5 md:text-base
            lg:py-3 lg:px-2.5 lg:text-sm 
            xl:py-3 xl:px-3 xl:text-base 
            2xl:px-4 2xl:text-lg"
            onClick={() => handlerScrollSection(idRef)}
            aria-label={`Ir a ${buttonText}`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardAbout;