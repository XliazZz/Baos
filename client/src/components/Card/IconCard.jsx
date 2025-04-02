import React from 'react'

const IconCard = ({ icon, unit, itemProp }) => {
  return (
    <div className='flex' itemProp={itemProp}>
      <p
        className={`${icon} my-auto size-6 
        sm:size-6 
        md:size-6 
        lg:size-7 
        xl:size-6
        2xl:size-8`}
        role="img"
        aria-hidden="true"
      />
      <span className='text-gray-500 my-auto font-semibold 
        sm:text-base 
        lg:text-lg 
        xl:text-base
        2xl:text-lg'
      >
        {unit}
      </span>
    </div>
  )
}

export default React.memo(IconCard);