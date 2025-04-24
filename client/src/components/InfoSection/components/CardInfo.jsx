import React from 'react';

const CardInfo = ({ title, description1, description2, icon, schemaType, itemProp }) => {
  return (
    <div
      className="relative overflow-hidden text-indigo-500 dark:text-indigo-400"
      itemScope
      itemType={`https://schema.org/${schemaType}`}
      itemProp={itemProp}
    >
      <div className="flex h-[180px] flex-col justify-center items-center rounded-md sm:h-[160px]">
        <p
          className={`${icon} size-10 sm:size-11 lg:size-10 lg:mb-1 2xl:size-14`}
          role="img"
          aria-label={title || 'Icon'}
          itemProp="image"
        />
        <div className="space-y-2 text-center text-black dark:text-white">
          <h3 className="font-bold text-[22px] md:text-lg lg:text-lg 2xl:text-xl" itemProp="name">
            {title}
          </h3>

          {schemaType === "ContactPoint" ? (
            <>
              <a className="text-lg text-muted-foreground font-semibold text-gray-600 dark:text-gray-300 sm:text-lg md:text-base lg:text-base 2xl:text-lg select-text">
                {description1}
              </a>
              <a
                href={`tel:${description2.replace(/\D/g, '')}`}
                className="text-lg text-muted-foreground font-semibold text-gray-600 dark:text-gray-300 sm:text-lg md:text-base lg:text-base 2xl:text-lg block hover:text-indigo-500"
                itemProp="telephone"
              >
                {description2}
              </a>
            </>
          ) : schemaType === "PostalAddress" ? (
            <>
              <p
                className="text-lg text-muted-foreground font-semibold text-gray-600 dark:text-gray-300 sm:text-lg md:text-base lg:text-base 2xl:text-lg"
                itemProp="streetAddress"
              >
                {description1}
              </p>
              <p
                className="text-lg text-muted-foreground font-semibold text-gray-600 dark:text-gray-300 sm:text-lg md:text-base lg:text-base 2xl:text-lg"
                itemProp="addressLocality"
              >
                {description2}
              </p>
            </>
          ) : (
            <>
              <p
                className="text-lg text-muted-foreground font-semibold text-gray-600 dark:text-gray-300 sm:text-lg md:text-base lg:text-base 2xl:text-lg"
                itemProp="dayOfWeek"
              >
                {description1}
              </p>
              <p
                className="text-lg text-muted-foreground font-semibold text-gray-600 dark:text-gray-300 sm:text-lg md:text-base lg:text-base 2xl:text-lg"
                itemProp="opens closes"
              >
                {description2}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardInfo);