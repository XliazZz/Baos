import React from 'react';

const SectionContainer = ({
  id,
  contain,
  bgColor = 'white',
  styles = '',
  ariaLabel = 'Sección de contenido',
  itemType,
  darkBg = 'gray-800'
}) => {
  // Asegurar prefijos correctos para las clases de color
  const normalizedBgColor = bgColor.startsWith('bg-') ? bgColor : `bg-${bgColor}`;
  const normalizedDarkBg = darkBg.startsWith('bg-') ? darkBg : `dark:bg-${darkBg}`;

  return (
    <section
      id={id}
      className={`h-full w-full ${normalizedBgColor} items-center flex justify-center ${normalizedDarkBg}`}
      aria-label={ariaLabel}
      {...(itemType && { itemScope: true, itemType })}
    >
      <div
        className={`max-w-screen-xl px-4 py-12 w-full
          sm:px-6 sm:py-12 
          lg:px-8 
          ${styles || 'xl:py-24'}
          2xl:max-w-screen-2xl`}
      >
        {contain}
      </div>
    </section>
  );
};

export default React.memo(SectionContainer);