import React from 'react'

const Footer = () => {
  return (
    <footer className="h-full w-full bg-gray-100 items-center flex justify-center dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-12 w-full
      sm:px-6 sm:py-12 
      lg:px-8 
      xl:py-24">
        <div className="flex justify-center text-indigo-600 dark:text-indigo-300">
          <p className="icon-[tdesign--bread] size-9 flex justify-center" role="img" aria-hidden="true" />
          <h3 className='my-auto font-bold'>EL BAO BAILARIN</h3>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 
          sm:text-lg 
          lg:text-xl lg:max-w-lg"
        >
          Hechos con amor y al vapor 🥢 ¡Disfruta cada bocado!
        </p>

        <ul className="mt-5 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 
              sm:text-lg
              lg:text-xl"
              href="#"
            >
              Preguntas frecuentes
            </a>
          </li>
        </ul>

        <ul className="mt-5 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              <p className="icon-[mdi--facebook] size-8" role="img" aria-hidden="true" title='Facebook' />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              <p className="icon-[mdi--instagram] size-8" role="img" aria-hidden="true" title='Instagram' />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              <p className="icon-[ant-design--tik-tok-filled] size-8" role="img" aria-hidden="true" title='TikTok' />
            </a>
          </li>
        </ul>

        <div className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base lg:text-lg">
              <span className="block sm:inline">Todos los derechos reservados</span>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400 sm:text-base lg:text-lg">
              &copy; 2025 Nombre
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
