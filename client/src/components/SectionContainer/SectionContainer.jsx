import React from 'react'

const SectionContainer = ({ id, contain, bgColor, styles, ariaLabel, itemType, darkBg }) => {
  return (
    <section
      id={id}
      className={`h-full w-full bg-${bgColor} items-center flex justify-center dark:bg-${darkBg}`}
      aria-label={ariaLabel || 'Sección de contenido'}
      itemScope={itemType ? true : false}
      itemType={itemType || undefined}
    >
      <div
        className={`max-w-screen-xl px-4 py-12 w-full
          sm:px-6 sm:py-12 
          lg:px-8 
          ${styles ? styles : 'xl:py-24'}
          2xl:max-w-screen-2xl
        `}
      >
        {contain}
      </div>
    </section>
  )
}

export default React.memo(SectionContainer)