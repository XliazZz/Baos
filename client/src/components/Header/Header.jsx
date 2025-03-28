import React from 'react'

const Header = ({ title, subtitle, description }) => {
  return (
    <Header className="text-start">
      <h2 className="text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-purple-500 sm:text-5xl">
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-indigo-900 mt-2"></div>
      <p className="mt-5 w-[50%] text-lg sm:text-xl text-gray-700 dark:text-slate-400">
        {description}
        <br /><br />
        {subtitle ? <span className="text-indigo-800 font-semibold dark:text-indigo-300">{subtitle}</span> : null}
      </p>
    </Header>
  )
}

export default Header;