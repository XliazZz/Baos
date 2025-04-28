import React, { useCallback } from 'react';

const ToggleContent = ({
  closeMenu,
  liSections,
  activeSection,
  handlerScrollSection
}) => {
  const handleItemClick = useCallback((id) => {
    handlerScrollSection(id);
    closeMenu();
  }, [handlerScrollSection, closeMenu]);

  return (
    <div
      className="md:hidden fixed inset-0 z-[60] bg-white dark:bg-gray-950 flex flex-col"
      role="dialog"
      aria-modal="true"
    >
      <button
        className="absolute top-4 right-0.5 p-0 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={closeMenu}
        aria-label="Cerrar menú"
      >
        <span
          className="icon-[heroicons--x-mark] size-10 text-gray-900 dark:text-gray-100"
          aria-hidden="true"
        />
      </button>

      <div className="flex-1 flex flex-col justify-center items-center">
        <nav
          className="w-full max-w-xs mx-auto"
          aria-label="Menú principal"
        >
          <ul className="space-y-6 text-2xl text-center">
            {liSections.map((liSection) => (
              <li key={liSection.id}>
                <a
                  className={`block py-3 transition-colors ${activeSection === liSection.id
                    ? 'text-indigo-600 dark:text-indigo-300 font-semibold'
                    : 'text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400'
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(liSection.id);
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
          className="text-indigo-600 dark:text-indigo-300 hover:underline block mb-3 text-lg transition-colors"
          aria-label="Llamar al +54 11 6457-6321"
        >
          +54 11 6457-6321
        </a>
        <p
          className="text-gray-700 dark:text-gray-300"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">Milton 462</span>,{' '}
          <span itemProp="addressLocality">Villa Luro</span>,{' '}
          <span itemProp="addressRegion">CABA</span>
        </p>
      </div>
    </div>
  );
};

export default React.memo(ToggleContent);