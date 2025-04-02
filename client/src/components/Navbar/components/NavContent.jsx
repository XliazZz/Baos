import React from 'react'
import ToggleMenu from './ToggleMenu'

const NavContent = ({ liSections, activeSection, handlerScrollSection, isAtTop }) => {

  const getLinkClass = (sectionId) => {
    const baseClass = 'transition cursor-pointer'
    const activeClass = 'text-indigo-500 cursor-default font-semibold'
    const inactiveClass = isAtTop
      ? 'text-white hover:text-indigo-400'
      : 'text-gray-600 hover:text-indigo-400'

    return `${baseClass} ${activeSection === sectionId ? activeClass : inactiveClass}`
  }

  return (
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 
      sm:px-6 
      lg:px-10
      xl:px-4
      2xl:max-w-screen-2xl"
    >
      {/* Logo con enlace a inicio y texto alternativo */}
      <a
        className={`${isAtTop ? "text-indigo-200" : "text-indigo-600"} block`}
        href="/"
        aria-label="Inicio - Panificadora Andina SA"
      >
        <span className="icon-[tdesign--bread] size-9 flex justify-center" role="img" aria-label="Logo de Panificadora Andina SA" />
      </a>

      <div className="flex flex-1 items-center justify-end md:justify-between">
        {/* Navegación principal */}
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-6 text-md 
            md:text-lg 
            lg:text-lg 
            xl:text-lg
            2xl:text-xl"
          >
            {liSections.map((liSection) => (
              <li key={liSection.id}>
                <a
                  className={getLinkClass(liSection.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    handlerScrollSection(liSection.id);
                  }}
                  href={`#${liSection.id}`}
                  aria-current={activeSection === liSection.id ? 'page' : undefined}
                >
                  {liSection.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex space-x-10 flex-row'>
          <div className="my-auto">
            <h2 className={`${isAtTop ? "text-white" : "text-gray-900"} font-bold 2xl:text-lg`}>
              <span className='select-none' aria-hidden="true">LLámanos: </span>
              <a
                href="tel:+541148884304"
                className="hover:underline focus:none"
                aria-label="Llamar al +54 11 4888 4304"
              >
                +54 11 4888 4304
              </a>
            </h2>
          </div>
          <ToggleMenu aria-label="Menú de navegación móvil" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(NavContent)