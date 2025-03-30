import React from 'react'
import ToggleMenu from './ToggleMenu'

const NavContent = ({ liSections, activeSection, handlerScrollSection, isAtTop }) => {

  const getLinkClass = (sectionId) => {
    const baseClass = 'transition cursor-pointer'
    const activeClass = 'text-indigo-500 cursor-default'
    const inactiveClass = isAtTop
      ? 'text-white hover:text-indigo-400'
      : 'text-gray-600 hover:text-indigo-400'

    return `${baseClass} ${activeSection === sectionId ? activeClass : inactiveClass}`
  }

  return (
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 
    sm:px-6 
    lg:px-8
    xl:px-4">
      <a className={`${isAtTop ? "text-indigo-200" : "text-indigo-600"} block`} href="#">
        <p className="icon-[tdesign--bread] size-9 flex justify-center" role="img" aria-hidden="true" />
      </a>

      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-md md:text-lg lg:text-xl xl:text-lg">
            {liSections.map((liSection) => (
              <li key={liSection.id}>
                <a
                  className={getLinkClass(liSection.id)}
                  onClick={() => handlerScrollSection(liSection.id)}
                >
                  {liSection.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex space-x-10 flex-row'>
          <h2 className={`${isAtTop ? "text-white" : "text-gray-900"} font-bold my-auto`}> <span className='select-none'>LLámanos:</span> +54 11 4888 4304</h2>
          <ToggleMenu />
        </div>
      </div>
    </div>
  )
}

export default React.memo(NavContent)