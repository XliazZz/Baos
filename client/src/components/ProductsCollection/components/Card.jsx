import React, { useMemo } from 'react';
import IconCard from './IconCard';

const Card = ({ image, title, description, gr, size, schemaType = "Product" }) => {
  // Memoizar las clases de iconos y estilos para evitar recreación en cada render
  const iconClass = useMemo(() => ["icon-[ri--scales-2-line]", "icon-[ion--resize-sharp]"], []);

  const cardStyles = useMemo(() => ({
    container: "bg-white rounded-lg overflow-hidden shadow-md shadow-blue-500/20 max-w-sm flex flex-col h-full dark:bg-slate-800",
    imageContainer: "relative h-56 rounded-lg sm:h-72 md:h-60 lg:h-[20.5rem] xl:h-64 2xl:h-80",
    content: "p-2 sm:p-4 flex flex-col flex-grow sm:w-full",
    title: "text-[16px] font-medium mb-0 text-black dark:text-white sm:text-lg sm:mb-2 lg:text-xl xl:text-lg 2xl:text-xl",
    description: "text-gray-600 text-[14.5px] mb-2 dark:text-gray-200 sm:text-base sm:w-full sm:mb-4 md:text-[15px] lg:text-[17px] xl:text-base xl:text-gray-700 2xl:text-lg",
    specs: "flex items-start justify-between mt-auto text-gray-500 dark:text-gray-400 sm:mt-auto"
  }), []);

  return (
    <div
      className={cardStyles.container}
      itemScope
      itemType={`https://schema.org/${schemaType}`}
      aria-labelledby={`card-${title.replace(/\s+/g, '-').toLowerCase()}-heading`}
    >
      <div className={cardStyles.imageContainer}>
        <img
          className="w-full block h-full object-cover"
          src={image}
          alt={`Imagen de ${title}`}
          itemProp="image"
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
        />
      </div>

      <div className={cardStyles.content}>
        <h3
          id={`card-${title.replace(/\s+/g, '-').toLowerCase()}-heading`}
          className={cardStyles.title}
          itemProp="name"
        >
          {title}
        </h3>
        <p
          className={cardStyles.description}
          itemProp="description"
        >
          {description}
        </p>

        <div className={cardStyles.specs}>
          <IconCard
            icon={iconClass[0]}
            unit={gr}
            itemProp="weight"
            aria-label={`Peso: ${gr}`}
          />
          <IconCard
            icon={iconClass[1]}
            unit={size}
            itemProp="size"
            aria-label={`Tamaño: ${size}`}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);