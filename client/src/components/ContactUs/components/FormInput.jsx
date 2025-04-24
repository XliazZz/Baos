import React from 'react';
const FormInput = ({ id, type, autoComplete, placeholder, textarea, itemProp, name, required }) => {
  const commonClasses = `mb-2 w-full placeholder-indigo-950 rounded-sm border border-indigo-400 py-2 pl-2 pr-4 shadow-md text-black bg-white 
  dark:text-white dark:bg-gray-900 dark:placeholder-indigo-50 dark:border-none dark:shadow-sm 
  focus:border-indigo-200 dark:focus:border-indigo-200 
  sm:mb-0 sm:text-base 
  md:text-base 
  lg:text-base 
  xl:text-base 
  2xl:text-lg`;

  return (
    <div className="mx-0 mb-1 sm:mb-4">
      <label htmlFor={id} className="pb-1 text-xs uppercase tracking-wider sr-only">
        {placeholder}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name || id}
          cols="30"
          rows="4"
          placeholder={placeholder}
          className={commonClasses}
          itemProp={itemProp}
          required={required}
        />
      ) : (
        <input
          id={id}
          name={name || id}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={commonClasses}
          itemProp={itemProp}
          required={required}
        />
      )}
    </div>
  );
};

export default React.memo(FormInput);