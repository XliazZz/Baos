import React from 'react'

const LiContact = ({ icon, title, subtitle, optional, schemaType, itemProp }) => {
  return (
    <li className="flex" itemScope itemType={`https://schema.org/${schemaType}`} itemProp={itemProp}>
      <div className="flex h-10 w-10 items-center justify-center rounded text-indigo-900 dark:text-indigo-300
        sm:h-8 sm:w-8 
        md:h-10 md:w-10
        lg:h-12 lg:w-12 
        xl:w-10 xl:h-10
        2xl:w-12 2xl:h-12"
      >
        <span
          className={`${icon} h-full w-full 
            sm:w-8 sm:h-8 sm:my-auto 
            md:w-10 md:h-10 md:mt-1
            lg:w-8 lg:h-8
            xl:w-7 xl:h-7
            2xl:w-12 2xl:h-12`}
          role="img"
          aria-label={title}
          itemProp="image"
        />
      </div>

      <div className="ml-4 mb-4">
        <h3 className="mb-1 text-xl font-medium leading-6 text-gray-900 dark:text-white 
          sm:text-lg
          md:m-0
          lg:text-lg
          2xl:text-xl"
          itemProp="name"
        >
          {title}
        </h3>
        {schemaType === "PostalAddress" ? (
          <>
            <p className="text-gray-600 dark:text-slate-400 text-[17px] sm:text-base md:m-0 lg:text-base 2xl:text-lg"
              itemProp="addressLocality"
            >
              {subtitle}
            </p>
            {optional && <p className="text-gray-600 dark:text-slate-400 text-[17px] sm:text-base md:m-0 lg:text-base 2xl:text-lg"
              itemProp="addressRegion"
            >
              {optional}
            </p>}
          </>
        ) : schemaType === "ContactPoint" ? (
          <>
            <a href={`tel:${subtitle.replace(/\D/g, '')}`} className="text-gray-600 text-[17px] dark:text-slate-400 sm:text-base md:m-0 lg:text-base 2xl:text-lg block "
              itemProp="telephone"
            >
              Teléfono: <span className='hover:text-indigo-500'>+54 11 6457-6321</span>
            </a>
            {optional &&
              <a href="mailto:panificadoraandinasa@gmail.com" className="text-gray-600 dark:text-slate-400 text-[17px] sm:text-base md:m-0 lg:text-base 2xl:text-lg block"
                itemProp="email"
              >
                Email: <span className='hover:text-indigo-500'>{optional}</span>
              </a>}
          </>
        ) : (
          <>
            <p className="text-gray-600 dark:text-slate-400 text-[17px] sm:text-base md:m-0 lg:text-base 2xl:text-lg"
              itemProp="dayOfWeek"
            >
              {subtitle}
            </p>
            <p className="text-gray-600 dark:text-slate-400 text-[17px] sm:text-base md:m-0 lg:text-base 2xl:text-lg"
              itemProp="opens closes"
            >
              {optional}
            </p>
          </>
        )}
      </div>
    </li>
  )
}

export default React.memo(LiContact)