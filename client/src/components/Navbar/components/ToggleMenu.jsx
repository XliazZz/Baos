import React from 'react'

const ToggleMenu = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="sm:flex sm:gap-4">
        <a
          className="block rounded-md bg-indigo-500 py-0.5 px-3 text-center text-2xl font-medium text-white transition hover:bg-indigo-700 "
          href="#"
        >
          <p className="icon-[tabler--sun] my-auto h-full" role="img" aria-hidden="true" title='Tema' />
        </a>
      </div>

      <button
        className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
      >
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  )
}

export default ToggleMenu
