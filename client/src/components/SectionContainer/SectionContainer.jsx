import React from 'react'

const SectionContainer = ({ id, contain, bgColor, styles }) => {
  return (
    <section id={id}
      className={`h-full w-full bg-${bgColor} items-center flex justify-center `}
    >
      <div className={`max-w-screen-xl px-4 py-12 w-full
        sm:px-6 sm:py-12 
        lg:px-8 
        ${styles ? styles : 'xl:py-24'}
      `}
      >
        {contain}
      </div>
    </section>
  )
}

export default SectionContainer;