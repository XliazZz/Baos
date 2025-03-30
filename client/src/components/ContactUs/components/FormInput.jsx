import React from 'react'

const FormInput = ({ id, type, autoComplete, placeholder, textarea }) => {
  return (
    <div className="mx-0 mb-1 sm:mb-4">
      <label htmlFor={id} className="pb-1 text-xs uppercase tracking-wider"></label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          cols="30"
          rows="4"
          placeholder={placeholder}
          className="mb-2 w-full placeholder-indigo-950 rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 text-black bg-white
          sm:mb-0 sm:text-lg
          md:text-base
          lg:text-lg
          xl:text-base"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="mb-2 w-full placeholder-indigo-950 rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300  text-black bg-white
          sm:mb-0 sm:text-lg
          md:text-base
          lg:text-lg
          xl:text-base"
        />
      )}

    </div>
  )
}

export default FormInput
