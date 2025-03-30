import React from 'react'

const Header = ({ title, subtitle, description }) => {
  return (
    <header className="text-start">
      <h2 className="text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-purple-500 sm:text-3xl lg:text-4xl xl:text-3xl">
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-indigo-900 mt-2"></div>
      <p className="mt-5 w-[60%] text-lg sm:text-xl sm:w-full text-gray-700 dark:text-slate-400 lg:text-2xl xl:text-xl xl:w-[60%]">
        {description}
        <br /><br />
        {subtitle ? <span className="text-indigo-800 font-semibold dark:text-indigo-300">{subtitle}</span> : null}
      </p>
    </header>
  )
}

export default Header;