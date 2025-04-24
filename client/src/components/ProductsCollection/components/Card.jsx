import React from 'react'
import IconCard from './IconCard';

const Card = ({ image, title, description, gr, size, schemaType }) => {
  const iconClass = React.useMemo(() => ["icon-[ri--scales-2-line]", "icon-[ion--resize-sharp]"], []);

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md shadow-blue-500/20 max-w-sm flex flex-col h-full
        sm:shadow-sm sm:shadow-black/20
        md:shadow-md md:shadow-black/20
        lg:shadow-lg lg:shadow-black/20
        xl:shadow-lg xl:shadow-black/20
        dark:bg-slate-800"
      itemScope
      itemType={`https://schema.org/${schemaType}`}
    >
      <div className="relative h-56 rounded-lg 
        sm:h-52
        md:h-48 
        lg:h-[15.5rem]
        xl:h-64
        2xl:h-80"
      >
        <img
          className="w-full block h-full object-cover"
          src={image}
          alt={title}
          itemProp="image"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="p-2 sm:p-4 flex flex-col flex-grow sm:w-full">
        <h3
          className="text-[16px] font-medium mb-0 text-black dark:text-white
            sm:text-lg sm:mb-2
            lg:text-xl 
            xl:text-lg
            2xl:text-xl"
          itemProp="name"
        >
          {title}
        </h3>
        <p
          className="text-gray-600 text-[14.5px] mb-2 dark:text-gray-200
            sm:text-base sm:w-full sm:mb-4
            md:text-[15px] 
            lg:text-[17px] 
            xl:text-base xl:text-gray-700
            2xl:text-lg"
          itemProp="description"
        >
          {description}
        </p>

        <div className="flex items-start justify-between mt-auto text-gray-500 dark:text-gray-400 sm:mt-auto">
          <IconCard icon={iconClass[0]} unit={gr} itemProp="weight" />
          <IconCard icon={iconClass[1]} unit={size} itemProp="size" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Card);