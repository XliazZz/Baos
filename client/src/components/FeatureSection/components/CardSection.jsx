import React from 'react'

const CardSection = ({ title, description, icon }) => {
  return (
    <div>
      <div className='sm:flex sm:items-center 
      md:justify-center
      lg:justify-start'>
        <p className={`${icon} w-10 h-10 mb-0 text-indigo-500 dark:text-indigo-500
          sm:w-12 sm:h-12
          md:w-10 md:h-10
          lg:w-12 lg:h-12
          xl:w-10 xl:h-10`}
          role="img"
          aria-hidden="true"
        />
        <h3 className="mb-2 text-2xl font-bold dark:text-white text-black 
        sm:mb-0 sm:text-center 
        md:text-gray-900 md:font-semibold
        lg:font-bold lg:text-3xl
        xl:text-2xl">{title}</h3>
      </div>
      <p className="font-light text-gray-500 dark:text-gray-400 
      sm:text-lg sm:font-medium 
      md:text-center md:text-base
      lg:font-light lg:text-xl lg:text-gray-600
      xl:text-lg xl:text-start xl:text-gray-700">{description}</p>
    </div>
  )
}

export default CardSection;