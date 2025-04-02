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
      className={`inline-block px-12 py-3 text-md font-medium transition-colors duration-200
          ${isActive
          ? 'border-b-indigo-600 text-indigo-600 border-b-2 font-bold'
          : 'text-gray-600 cursor-pointer hover:text-indigo-500/75'} 
            sm:text-base sm:px-6 
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