import React from 'react';

const CardAbout = ({ image, title, description, description2, description3, buttonText, handlerScrollSection, idRef }) => {
  const cloudinaryBase = 'https://res.cloudinary.com';
  const cloudinaryPath = image?.replace(`${cloudinaryBase}/`, '').split('/upload/')[1];

  const getCloudinaryUrl = (width) =>
    `${cloudinaryBase}/${image?.split('/upload/')[0].split(cloudinaryBase + '/')[1]}/upload/f_auto,q_auto,w_${width}/${cloudinaryPath}`;

  return (
    <article
      className="mx-auto overflow-hidden h-[50%] flex  w-[100%] flex-col 
        sm:min-h-full sm:max-h-full
        lg:mx-auto lg:overflow-hidden lg:min-h-[300px] lg:max-h-[350px] lg:flex-row lg:max-w-screen-xl lg:w-full lg:h-[300px]
        xl:mx-auto xl:overflow-hidden xl:min-h-[300px] xl:max-h-[350px] xl:flex-row xl:max-w-screen-xl xl:w-full xl:h-[300px]
        2xl:max-w-screen-2xl 2xl:min-h-[350px] 2xl:max-h-[400px]"
      itemScope itemType="https://schema.org/AboutPage"
    >
      <div
        className="w-full h-[25em] flex-shrink-0
          sm:h-[28em]
          md:h-[35em] md:mx-auto 
          lg:w-[40%] lg:h-full lg:mx-0
          xl:w-[35%]
          2xl:w-[45%]"
      >
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={getCloudinaryUrl(800)} // fallback
          srcSet={`
            ${getCloudinaryUrl(200)} 200w,
            ${getCloudinaryUrl(400)} 400w,
            ${getCloudinaryUrl(600)} 600w,
            ${getCloudinaryUrl(800)} 800w,
            ${getCloudinaryUrl(1024)} 1024w
          `}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={`${title} - Panificadora Andina`}
          itemProp="image"
          width="600"
          height="400"
          decoding="async"
        />
      </div>

      <div className="py-2 flex flex-col justify-center items-start text-start h-full
        sm:mt-2 sm:p-0
        md:mt-3 md:p-4 
        lg:w-[60%] lg:pl-4 lg:mt-0
        xl:w-[65%] xl:pl-6
        2xl:w-[55%]"
      >
        <div itemProp="mainEntity" itemScope itemType="https://schema.org/WebPageElement">
          <h2
            className="text-xl font-bold text-black dark:text-white cursor-default
              sm:text-xl 
              md:text-2xl
              lg:text-2xl 
              xl:text-xl
              2xl:text-2xl"
            itemProp="headline"
          >
            {title}
          </h2>
          <div
            className="mt-3 text-slate-600 text-[17px] dark:text-slate-400
              sm:text-lg sm:mt-1 sm:font-medium sm:text-slate-500
              md:mt-2 md:font-semibold md:text-slate-500
              lg:mt-4 lg:text-lg lg:text-slate-600
              xl:text-lg xl:mt-2
              2xl:text-xl 2xl:py-4"
            itemProp="description"
          >
            <p>{description}</p>
            {description2 && <p>{description2}</p>}
            {description3 && <p>{description3}</p>}
          </div>
        </div>

        <div className="mt-4 w-full sm:mt-3 md:mt-4 lg:mt-5 lg:w-auto">
          <button
            className="block w-full cursor-pointer rounded-md bg-indigo-500 dark:bg-indigo-600 py-2 px-3 text-center text-sm font-medium text-white transition hover:bg-indigo-700 uppercase
              sm:py-3 sm:px-4
              md:py-3.5 md:text-base
              lg:py-3 lg:px-2.5 lg:text-sm 
              xl:py-3 xl:px-3 xl:text-base 
              2xl:px-4 2xl:text-lg"
            onClick={() => handlerScrollSection(idRef)}
            aria-label={`Ir a sección ${buttonText}`}
            itemProp="potentialAction"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
};

export default React.memo(CardAbout);