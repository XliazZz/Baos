import React from 'react'

const Header = ({ title, subtitle, description }) => {
  return (
    <header className="text-start" role="banner">
      <h2 className="text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-purple-500 
      dark:from-purple-300 dark:to-indigo-50000 dark:bg-gradient-to-r dark:bg-clip-text
        sm:text-2xl 
        md:text-3xl
        lg:text-3xl 
        xl:text-3xl
        2xl:text-4xl"
      >
        {title}
      </h2>

      <div className="w-16 h-0.5 bg-indigo-900 dark:bg-indigo-400 mt-2" aria-hidden="true"></div>

      <div
        className="mt-5 w-[60%] text-lg text-gray-700 dark:text-gray-300 
        sm:text-lg sm:w-full 
        md:text-xl
        lg:text-xl lg:w-[65%]
        xl:text-xl xl:w-[60%]
        2xl:text-2xl xl:w[50%]"
        itemProp="description"
      >
        {description}
        <br /><br />
        {subtitle && (
          <strong className="text-indigo-800 font-semibold dark:text-indigo-300" itemProp="alternativeHeadline">
            {subtitle}
          </strong>
        )}
      </div>
    </header>
  )
}

export default Header;