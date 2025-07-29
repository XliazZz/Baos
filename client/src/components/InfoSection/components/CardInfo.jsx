import React, { useMemo } from 'react';

const CardInfo = ({
  title,
  description1,
  description2,
  icon,
  schemaType,
  itemProp
}) => {
  // Memoizar el contenido basado en el tipo de schema
  const renderContent = useMemo(() => {
    switch (schemaType) {
      case "ContactPoint":
        return (
          <>
            <a
              href="mailto:panificadoraandinasa@gmail.com"
              className="text-lg text-muted-foreground font-semibold text-gray-600 dark:text-gray-300 sm:text-lg md:text-base lg:text-base 2xl:text-lg select-text"
              itemProp="email"
            >
              {description1}
            </a>
            <a
              href={`tel:${description2?.replace(/\D/g, '')}`}
              className="text-lg text-muted-foreground font-semibold text-gray-600 dark:text-gray-300 sm:text-lg md:text-base lg:text-base 2xl:text-lg block hover:text-indigo-500 transition-colors"
              itemProp="telephone"
            >
              {description2}
            </a>
          </>
        );
      case "PostalAddress":
        return (
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
        );
      default:
        return (
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
        );
    }
  }, [schemaType, description1, description2]);

  return (
    <div
      className="relative overflow-hidden text-indigo-500 dark:text-indigo-400"
      itemScope
      itemType={`https://schema.org/${schemaType}`}
      itemProp={itemProp}
      aria-labelledby={`card-${title?.replace(/\s+/g, '-').toLowerCase()}-heading`}
    >
      <div className="flex h-[180px] flex-col justify-center items-center rounded-md sm:h-[160px]">
        <span
          className={`${icon} size-10 sm:size-11 lg:size-10 lg:mb-1 2xl:size-14`}
          role="img"
          aria-label={title ? `Icono de ${title}` : 'Icono informativo'}
          itemProp="image"
        />
        <div className="space-y-2 text-center text-black dark:text-white">
          <h3
            id={`card-${title?.replace(/\s+/g, '-').toLowerCase()}-heading`}
            className="font-bold text-[22px] md:text-lg lg:text-lg 2xl:text-xl"
            itemProp="name"
          >
            {title}
          </h3>
          {renderContent}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardInfo);