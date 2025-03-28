import React from 'react'

const Card = ({ image, title, description, id }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md shadow-blue-500/20 max-w-sm flex flex-col h-full">
      <div className="relative h-72 rounded-lg sm:h-64 xl:h-80 2xl:h-56">
        <img className="w-full block h-full object-cover" src={image} alt="Product Image" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-medium mb-2 text-black">{title}</h3>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        <div className="flex items-center justify-center mt-auto">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded uppercase text-sm cursor-pointer">
            Ver Mas
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
