import React from 'react'

const CardIncentive = ({ icon, title, description, schemaType, itemProp, position }) => {
  return (
    <div
      className="lg:py-0 lg:w-1/3 lg:flex-none sm:my-5 sm:w-full md:w-full bg-transparent pb-5 mb-5"
      itemScope
      itemProp={itemProp}
      itemType="https://schema.org/ListItem"
    >
      <meta itemProp="position" content={position} />

      <div
        className="mx-auto px-4 flex items-center 
          sm:w-full sm:max-w-md
          md:px-3
          lg:max-w-none lg:px-8"
        itemProp="item"
        itemType={`https://schema.org/${schemaType}`}
      >
        <span
          className={`${icon} flex-shrink-0 h-8 w-8 text-indigo-600 dark:text-indigo-400 
            sm:w-9 sm:h-9
            md:w-7 md:h-7
            xl:w-10 xl:h-10`}
          role="img"
          aria-label={title}
          itemProp="image"
        />

        <div className="ml-4 flex-auto flex flex-col-reverse">
          <p
            className="text-[15.5px] text-gray-500 xl:text-base sm:text-[15px] 2xl:text-lg dark:text-gray-300"
            itemProp="description"
          >
            {description}
          </p>
          <h3
            className="font-medium text-gray-900 dark:text-white text-lg
              sm:text-lg 
              md:text-base 
              xl:text-lg 
              2xl:text-xl"
            itemProp="name"
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CardIncentive)