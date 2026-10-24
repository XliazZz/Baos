import React, { useState } from 'react';
import { whatsappUrl } from '../../data/business';

const links = [
  { href: '#productos', label: 'Variedades' },
  { href: '#por-que', label: 'Por qué Wow Bao' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header
      className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur"
      onKeyDown={(e) => e.key === 'Escape' && close()}
    >
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <a href="#inicio" onClick={close} className="flex items-center gap-2 font-display text-xl font-semibold text-ink">
          <span className="icon-[tdesign--bread] size-6 text-accent" aria-hidden="true" />
          Wow Bao
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-sm font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ink-soft transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden py-2.5 sm:inline-flex">
            Hacer un pedido
          </a>
          <button
            type="button"
            className="-mr-2 grid size-10 place-items-center text-ink md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="menu-movil"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className={`${isOpen ? 'icon-[heroicons--x-mark]' : 'icon-[heroicons--bars-3]'} size-6`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="menu-movil" aria-label="Principal" className="border-t border-line md:hidden">
          <ul className="wrap py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close} className="block py-3 text-lg font-semibold text-ink">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-2 sm:hidden">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                Hacer un pedido por WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
