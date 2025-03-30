import React from 'react'

const LiContact = ({ icon, title, subtitle, optional }) => {
  return (
    <li className="flex">
      <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-900 text-gray-50 lg:h-12 lg:w-12 xl:w-10 xl:h-10">
        <p className={`${icon} h-6 w-6 
          sm:w-8 sm:h-8 
          md:w-6 md:h-6
          lg:w-8 lg:h-8
          xl:w-7 xl:h-7`
        }
          role="img"
          aria-hidden="true"
        />
      </div>

      <div className="ml-4 mb-4">
        <h3 className="mb-1 text-lg font-medium leading-6 text-gray-900 dark:text-white 
        md:m-0
        lg:text-xl">{title}</h3>
        <p className="text-gray-600 dark:text-slate-400 
          sm:text-lg 
          md:text-base md:m-0
          lg:text-lg">{subtitle}</p>
        {optional && <p className="text-gray-600 dark:text-slate-400 sm:text-lg md:text-base md:m-0 lg:text-lg">{optional}</p>}
      </div>
    </li>
  )
}

export default LiContact
