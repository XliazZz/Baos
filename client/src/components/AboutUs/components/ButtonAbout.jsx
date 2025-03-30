import React from 'react';

const ButtonAbout = ({ id, header, activeID, setActiveId }) => {
  return (
    <button
      onClick={() => setActiveId(id)}
      className={`inline-block px-12 py-3 text-md font-medium
          ${activeID === id
          ? 'border-b-indigo-600 text-indigo-600 border-b-2 font-bold'
          : 'text-gray-600 cursor-pointer hover:text-indigo-500/75'} sm:text-lg sm:px-6 md:text-lg lg:text-xl`}
    >
      {header}
    </button>
  );
};

export default ButtonAbout;
