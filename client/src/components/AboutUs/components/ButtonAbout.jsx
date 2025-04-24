import React from 'react';

const ButtonAbout = ({ id, header, activeID, setActiveId }) => {
  const isActive = activeID === id;

  return (
    <button
      id={`tab-${id}`}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      onClick={() => setActiveId(id)}
      className={`inline-block text-lg font-medium transition-colors duration-200
          ${isActive
          ? 'border-b-indigo-600 text-indigo-600 border-b-2 font-bold dark:text-indigo-400 dark:border-b-indigo-400'
          : 'text-gray-600 cursor-pointer hover:text-indigo-500/75 dark:hover:text-indigo-100 dark:border-b-2 dark:border-b-gray-950 dark:text-gray-400'} 
            sm:text-base sm:px-6  sm:py-3 sm:text-md
            md:text-lg 
            lg:text-lg
            2xl:text-xl`}
    >
      <span className="sr-only">{isActive ? 'Current: ' : ''}</span>
      {header}
    </button>
  );
};

export default ButtonAbout;