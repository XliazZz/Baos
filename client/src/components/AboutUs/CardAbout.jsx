import React from 'react';

const CardAbout = ({ image, title, description, description2, description3, buttonText, handlerScrollSection, idRef }) => {
  return (
    <div className="mx-auto overflow-hidden min-h-[350px] max-h-[450px] flex max-w-screen-xl w-full">
      <div className="md:w-96 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={image}
          alt={title}
        />
      </div>

      <div className="p-7 flex flex-col justify-between flex-grow text-start">
        <div>
          <h3 className="text-2xl font-bold text-black cursor-default">{title}</h3>
          <p className="mt-4 text-slate-600 text-lg">
            {description} <br /> {description2} <br /> {description3}
          </p>
        </div>

        <div className="mt-auto">
          <a
            className="uppercase block rounded-md bg-indigo-500 py-3 px-4 text-center text-sm font-medium text-white transition hover:bg-indigo-700 w-[25%] cursor-pointer"
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
