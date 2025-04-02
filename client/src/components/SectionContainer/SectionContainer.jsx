import React from 'react'

const SectionContainer = ({ id, contain, bgColor, styles, ariaLabel, itemType }) => {
  // Mapeo de colores de fondo a clases CSS para evitar problemas con PurgeCSS
  const bgColorClasses = {
    white: 'bg-white',
    gray: 'bg-gray-100',
    dark: 'bg-gray-900',
    indigo: 'bg-indigo-600',
    // Agrega más colores según necesites
  }

  // Selecciona la clase de color o usa el valor por defecto (white)
  const selectedBgColor = bgColorClasses[bgColor] || bgColorClasses.white

  return (
    <section
      id={id}
      className={`h-full w-full ${selectedBgColor} items-center flex justify-center dark:bg-gray-900`}
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