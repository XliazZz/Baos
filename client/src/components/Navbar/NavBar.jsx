import React from 'react'

const NavBar = ({ handlerScrollSection, activeSection }) => {
  const liSections = [
    { id: 'sectionAboutUs', name: 'Sobre Nosotros' },
    { id: 'sectionProductsCollection', name: 'Productos' },
    { id: 'sectionTestimonials', name: 'Opiniones' },
    { id: 'sectionLayoutImages', name: 'Galeria' },
    { id: 'sectionContactUs', name: 'Contacto' }
  ];

  return (
    <header className="bg-white border-b border-indigo-200 fixed top-0 left-0 w-full z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-indigo-600" href="#">
          <p className="icon-[tdesign--bread] size-9 flex justify-center" role="img" aria-hidden="true" />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-md">
              {liSections.map((liSection, index) => (
                <li key={index}>
                  <a
                    className={`${activeSection === liSection.id ? 'text-indigo-500 cursor-default' : 'text-gray-600  cursor-pointer hover:text-indigo-500/75 transition'} `}
                    onClick={() => activeSection !== liSection.id && handlerScrollSection(liSection.id)}
                    disabled={activeSection === liSection.id}
                  >
                    {liSection.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-indigo-500 py-0.5 px-3 text-center text-2xl font-medium text-white transition hover:bg-indigo-700 "
                href="#"
              >
                <p className="icon-[tabler--sun] my-auto h-full" role="img" aria-hidden="true" title='Tema' />
              </a>
            </div>

            <button
              className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;