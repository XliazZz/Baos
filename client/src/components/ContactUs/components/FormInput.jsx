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
          rows="5"
          placeholder={placeholder}
          className="mb-2 w-full placeholder-indigo-950 rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 text-black bg-white"
        />
      ) : (
        <input
          type={type}
          id={id}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="mb-2 w-full placeholder-indigo-950 rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 text-black bg-white" name={id}
        />
      )}

    </div>
  )
}

export default FormInput
