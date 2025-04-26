import React, { useMemo } from 'react';

const Header = ({ title, subtitle, description }) => {
  const subtitleContent = useMemo(() => {
    if (!subtitle) return null;

    return (
      <>
        <br /><br />
        <strong
          className="text-indigo-800 font-semibold dark:text-indigo-300"
          itemProp="alternativeHeadline"
        >
          {subtitle}
        </strong>
      </>
    );
  }, [subtitle]);

  const descriptionContent = useMemo(() => (
    <>
      {description}
      {subtitleContent}
    </>
  ), [description, subtitleContent]);

  return (
    <header
      className="text-start"
      role="banner"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <h1
        className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-purple-500 
        dark:from-purple-300 dark:to-indigo-500 dark:bg-gradient-to-r dark:bg-clip-text
          sm:text-2xl 
          md:text-3xl
          lg:text-3xl 
          xl:text-3xl
          2xl:text-4xl"
        itemProp="headline"
      >
        {title}
      </h1>

      <div
        className="w-16 h-0.5 bg-indigo-900 dark:bg-indigo-400 mt-2"
        aria-hidden="true"
      />

      <div
        className="mt-5 w-full text-lg text-gray-700 dark:text-gray-300 
          sm:text-lg sm:w-full 
          md:text-xl
          lg:text-xl lg:w-[65%]
          xl:text-xl xl:w-[60%]
          2xl:text-2xl 2xl:w-[50%]"
        itemProp="description"
      >
        {descriptionContent}
      </div>
    </header>
  );
};

export default React.memo(Header);