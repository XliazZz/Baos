import React from 'react'

const CardIncentive = ({ icon, title, description, schemaType, itemProp, position }) => {
  return (
    <div
      className="lg:py-0 lg:w-1/3 lg:flex-none sm:my-5 sm:w-full md:w-full"
      itemScope
      itemProp={itemProp}
      itemType="https://schema.org/ListItem"
    >
      <meta itemProp="position" content={position} />

      <div
        className="max-w-xs mx-auto px-4 flex items-center 
          sm:w-full sm:max-w-md
          md:px-3
          lg:max-w-none lg:px-8"
        itemProp="item"
        itemType={`https://schema.org/${schemaType}`}
      >
        <span
          className={`${icon} flex-shrink-0 h-8 w-8 text-indigo-600 
            sm:w-9 sm:h-9
            md:w-7 md:h-7
            xl:w-10 xl:h-10`}
          role="img"
          aria-label={title}
          itemProp="image"
        />

        <div className="ml-4 flex-auto flex flex-col-reverse">
          <p
            className="text-sm text-gray-500 xl:text-base sm:text-[15px] 2xl:text-lg"
            itemProp="description"
          >
            {description}
          </p>
          <h3
            className="font-medium text-gray-900 
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