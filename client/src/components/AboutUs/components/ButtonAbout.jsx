import React, { memo } from 'react';

const buttonStyles = {
  base: 'inline-block text-lg font-medium transition-colors duration-200 sm:text-base sm:px-6 sm:py-3 md:text-lg lg:text-lg 2xl:text-xl',
  active: 'border-b-indigo-600 text-indigo-600 border-b-2 font-bold dark:text-indigo-400 dark:border-b-indigo-400',
  inactive: 'text-gray-600 cursor-pointer hover:text-indigo-500/75 dark:hover:text-indigo-100 dark:border-b-2 dark:border-b-gray-950 dark:text-gray-400'
};

const ButtonAbout = memo(({ id, header, activeID, setActiveId }) => {
  const isActive = activeID === id;
  const buttonId = `tab-${id}`;
  const panelId = `panel-${id}`;

  return (
    <button
      id={buttonId}
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      onClick={() => setActiveId(id)}
      className={`${buttonStyles.base} ${isActive ? buttonStyles.active : buttonStyles.inactive
        }`}
    >
      <span className="sr-only">{isActive ? 'Current: ' : ''}</span>
      {header}
    </button>
  );
});

export default ButtonAbout;