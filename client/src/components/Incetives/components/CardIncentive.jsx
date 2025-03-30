import React from 'react'

const CardIncentive = ({ icon, title, description }) => {
  return (
    <div className="lg:py-0 lg:w-1/3 lg:flex-none">
      <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
        <p className={`${icon} flex-shrink-0 h-8 w-8 text-indigo-600 xl:w-10 xl:h-10`} role="img" aria-hidden="true" />
        <div className="ml-4 flex-auto flex flex-col-reverse">
          <p className="text-sm text-gray-500 xl:text-base">{description}</p>
          <h3 className="font-medium text-gray-900 xl:text-lg">{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default CardIncentive
