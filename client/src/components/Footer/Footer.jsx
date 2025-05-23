import React, { useMemo } from 'react';

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const schemaMarkup = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "El Bao Bailarín",
    "url": typeof window !== 'undefined' ? window.location.href : '',
    "logo": "URL_DEL_LOGO",
    "sameAs": [
      "https://facebook.com/tupagina",
      "https://instagram.com/tucuenta",
      "https://tiktok.com/@tucuenta"
    ],
    "description": "Hechos con amor y al vapor 🥢 ¡Disfruta cada bocado!"
  }), []);

  const socialLinks = useMemo(() => [
    {
      href: "https://facebook.com/tupagina",
      icon: "icon-[mdi--facebook] size-8",
      label: "Facebook"
    },
    {
      href: "https://instagram.com/tucuenta",
      icon: "icon-[mdi--instagram] size-8",
      label: "Instagram"
    },
    {
      href: "https://tiktok.com/@tucuenta",
      icon: "icon-[ant-design--tik-tok-filled] size-8",
      label: "TikTok"
    }
  ], []);

  return (
    <footer
      className="h-full w-full bg-gray-100 items-center flex justify-center dark:bg-gray-800"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-12 w-full
        sm:px-6 sm:py-12 
        lg:px-8 
        xl:py-24
        2xl:max-w-screen-2xl"
      >
        <div className="flex justify-center text-indigo-600 dark:text-indigo-300">
          <span
            className="icon-[tdesign--bread] size-9 flex justify-center"
            role="img"
            aria-label="Logo El Bao Bailarín"
            itemProp="logo"
          />
          <h3 className='my-auto font-bold 2xl:text-2xl text-xl' itemProp="name">Wow Bao</h3>
        </div>

        <p
          className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 text-lg
            sm:text-base 
            lg:text-lg lg:max-w-lg
            2xl:text-xl"
          itemProp="description"
        >
          Hechos con amor y al vapor 🥢 ¡Disfruta cada bocado!
        </p>

        {/* <nav aria-label="Enlaces secundarios">
          <ul className="mt-5 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 text-lg
                  sm:text-base
                  lg:text-lg
                  2xl:text-xl"
                href="/preguntas-frecuentes"
                itemProp="significantLink"
              >
                Preguntas frecuentes
              </a>
            </li>
          </ul>
        </nav> */}

        <nav aria-label="Redes sociales">
          <ul className="mt-5 flex justify-center gap-6 md:gap-8">
            {socialLinks.map((link, index) => (
              <li key={`social-${index}`}>
                <a
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  aria-label={link.label}
                  itemProp="sameAs"
                >
                  <span className={link.icon} role="img" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-800"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400 lg:text-base 2xl:text-lg">
              <span className="block sm:inline">Todos los derechos reservados</span>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400 lg:text-base 2xl:text-lg">
              &copy; {currentYear} <span itemProp="name">Wow Bao</span>
            </p>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </div>
    </footer>
  );
};

export default React.memo(Footer);