import React from 'react'

const LiContact = ({ icon, title, subtitle, optional }) => {
  return (
    <li className="flex">
      <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-900 text-gray-50 ">
        <p className={`icon-[mynaui--${icon}] h-6 w-6`} role="img" aria-hidden="true" />
      </div>

      <div className="ml-4 mb-4">
        <h3 className="mb-1 text-lg font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-slate-400">{subtitle}</p>
        {optional && <p className="text-gray-600 dark:text-slate-400">{optional}</p>}
      </div>
    </li>
  )
}

export default LiContact
