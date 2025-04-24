import React from 'react'

const ToggleContent = ({ closeMenu, liSections, activeSection, handlerScrollSection }) => {
  return (
    <div className="md:hidden fixed inset-0 z-[60] bg-white dark:bg-gray-950 flex flex-col">
      <button
        className="absolute top-4 right-0.5 p-0  focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={closeMenu}
        aria-label="Cerrar menú"
      >
        <span className="icon-[heroicons--x-mark] size-10 text-gray-900 dark:text-gray-100"></span>
      </button>

      <div className="flex-1 flex flex-col justify-center items-center">
        <nav className="w-full max-w-xs mx-auto">
          <ul className="space-y-6 text-2xl text-center">
            {liSections.map((liSection) => (
              <li key={liSection.id}>
                <a
                  className={`block py-3 ${activeSection === liSection.id ? 'text-indigo-600 dark:text-indigo-300 font-semibold' : 'text-gray-900 dark:text-white'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handlerScrollSection(liSection.id);
                    closeMenu();
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
      </div>

      <div className="pb-10 pt-6 border-t border-gray-200 dark:border-slate-800 text-center">
        <h2 className="text-gray-900 dark:text-gray-100 font-bold text-xl mb-2">
          Contacto
        </h2>
        <a
          href="tel:+541148884304"
          className="text-indigo-600 dark:text-indigo-300 hover:underline block mb-3 text-lg"
          aria-label="Llamar al +54 11 4888 4304"
        >
          +54 11 4888 4304
        </a>
        <p className="text-gray-700 dark:text-gray-300">
          Milton 462, Villa Luro, CABA
        </p>
      </div>
    </div>
  )
}

export default ToggleContent
