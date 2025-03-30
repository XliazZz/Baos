import React from 'react';

const CardAbout = ({ image, title, description, description2, description3, buttonText, handlerScrollSection, idRef }) => {
  return (
    <div className="mx-auto overflow-hidden min-h-[300px] max-h-[400px] flex max-w-screen-xl w-full flex-col 
       sm:min-h-full sm:max-h-full
       xl:mx-auto xl:overflow-hidden xl:min-h-[300px] xl:max-h-[350px] xl:flex-row xl:max-w-screen-xl xl:w-full xl:h-[300px]"
    >
      <div className="w-full flex-shrink-0 h-40 
        sm:w-full sm:h-[12em]
        md:w-full md:h-[18em]
        lg:w-full lg:h-[22em]
        xl:w-[35%] xl:h-full"
      >
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={image}
          alt={title}
        />
      </div>

      <div className="p-4 flex flex-col justify-center items-start text-start h-full
        sm:p-0 sm:mt-3
        md:mt-4
        lg:mt-6
        xl:w-[65%] xl:pl-6 xl:h-full xl:flex xl:flex-col xl:justify-center xl:items-start xl:mt-0">
        <div>
          <h3 className="text-xl font-bold text-black cursor-default sm:text-2xl lg:text-3xl xl:text-xl">
            {title}
          </h3>
          <p className="mt-2 text-slate-600 text-base sm:text-lg sm:mt-1 md:mt-2 md:font-semibold md:text-slate-500
            lg:mt-4 lg:text-xl lg:text-slate-600
            xl:text-lg xl:mt-2">
            {description} <br /> {description2} <br /> {description3}
          </p>
        </div>

        <div className="mt-3 sm:mt-3 md:mt-4 lg:mt-5">
          <a
            className="uppercase block rounded-md bg-indigo-500 py-2 px-3 text-center text-xs font-medium text-white transition hover:bg-indigo-700 w-full cursor-pointer
            sm:py-3 sm:px-4 sm:text-sm sm:w-full
            lg:py-4 lg:px-5 lg:text-lg lg:w-full
            xl:py-3 xl:px-3 xl:text-base "
            onClick={() => handlerScrollSection(idRef)}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
