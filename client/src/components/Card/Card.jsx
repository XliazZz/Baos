import React from 'react'

const Card = ({ image, title, description, gr, size }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md shadow-blue-500/20 max-w-sm flex flex-col h-full
      sm:shadow-sm sm:shadow-indigo-500
      md:shadow-md md:shadow-indigo-500/20
      lg:shadow-lg lg:shadow-indigo-500/10
      xl:shadow-lg xl:shadow-indigo-300/40"
    >
      <div className="relative h-72 rounded-lg 
        sm:h-60
        md:h-60 
        lg:h-[18.3rem]
        xl:h-64
        2xl:h-52"
      >
        <img className="w-full block h-full object-cover" src={image} alt="Product Image" />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-medium mb-2 text-black sm:text-xl lg:text-2xl xl:text-lg">{title}</h3>
        <p className="text-gray-600 text-base mb-4 sm:text-lg md:text-[16px] lg:text-[19px] xl:text-base xl:text-gray-700">{description}</p>

        <div className="flex items-start justify-between mt-4 text-gray-500 sm:mt-auto">
          <div className='flex'>
            <p className="icon-[ri--scales-2-line] my-auto size-6 sm:size-8 md:size-7 lg:size-9 xl:size-6" role="img" aria-hidden="true" />
            <p className='text-gray-500 my-auto font-semibold sm:text-lg lg:text-xl xl:text-base'>{gr}</p>
          </div>

          <div className='flex'>
            <p className="icon-[ion--resize-sharp] my-auto size-6 sm:size-8 md:size-7 lg:size-9 xl:size-6" role="img" aria-hidden="true" />
            <p className='text-gray-500 my-auto font-semibold sm:text-lg lg:text-xl xl:text-base'>{size}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;