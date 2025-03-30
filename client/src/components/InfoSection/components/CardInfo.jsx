import React from 'react';

const CardInfo = ({ title, description1, description2, icon }) => {
  return (
    <div className="relative overflow-hidden  text-indigo-500 ">
      <div className="flex h-[180px] flex-col justify-center items-center rounded-md sm:h-[160px]">
        <p
          className={`${icon} size-10 sm:size-11 lg:size-12 lg:mb-1`}
          role="img"
          aria-label={title || 'Icon'}
        />
        <div className="space-y-2 text-center text-black">
          <h2 className="font-bold text-xl md:text-lg lg:text-xl">{title}</h2>
          <p className="text-md text-muted-foreground font-semibold text-gray-600 sm:text-lg md:text-base lg:text-lg">{description1}</p>
          <p className="text-md text-muted-foreground font-semibold text-gray-600 sm:text-lg md:text-base lg:text-lg">{description2}</p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;