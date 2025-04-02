import React from 'react'

const CardSection = ({ title, description, icon, itemProp, schemaType, position }) => {
  return (
    <div
      className='md:w-[85%] md:mx-auto 2xl:w-full'
      itemScope
      itemProp={itemProp}
      itemType="https://schema.org/ListItem"
    >
      <meta itemProp="position" content={position} />

      <div className='sm:flex sm:items-center 
        md:justify-center
        lg:justify-center'
        itemProp="item"
        itemType={`https://schema.org/${schemaType}`}
      >
        <span
          className={`${icon} w-10 h-10 mb-0 text-indigo-500 dark:text-indigo-500
          sm:w-10 sm:h-10
          md:w-12 md:h-12
          lg:w-11 lg:h-11
          xl:w-10 xl:h-10
          2xl:w-12 2xl:h-12`}
          role="img"
          aria-label={title}
          itemProp="image"
        />
        <h3
          className="mb-2 text-2xl font-bold dark:text-white text-black 
          sm:mb-0 sm:text-center sm:text-xl sm:text-gray-800
          md:text-gray-900 md:font-semibold md:text-center
          lg:font-bold lg:text-2xl 
          xl:text-2xl
          2xl:text-3xl"
          itemProp="name"
        >
          {title}
        </h3>
      </div>
      <p
        className="font-light text-gray-500 dark:text-gray-400 
        sm:text-lg sm:font-medium 
        md:text-center md:text-lg
        lg:font-light lg:text-lg lg:text-gray-600
        xl:text-lg xl:text-center xl:text-gray-700
        2xl:text-xl"
        itemProp="description"
      >
        {description}
      </p>
    </div>
  )
}

export default React.memo(CardSection)