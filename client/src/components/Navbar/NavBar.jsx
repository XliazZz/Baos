import React, { useState } from 'react';
import { whatsappUrl } from '../../data/business';

const links = [
  { href: '#productos', label: 'Variedades' },
  { href: '#como-trabajamos', label: 'Cómo trabajamos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#preguntas', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-3 z-40 px-3 sm:top-4" onKeyDown={(e) => e.key === 'Escape' && close()}>
      <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-line bg-canvas/80 shadow-[0_8px_30px_-12px_rgb(22_19_15/0.18)] backdrop-blur-md">
        <div className="flex h-14 items-center justify-between gap-4 pr-2 pl-5">
          <a href="#inicio" onClick={close} className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink">
            <span className="icon-[tdesign--bread] size-6 text-accent" aria-hidden="true" />
            Wow Bao
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex gap-7 text-sm font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ink-soft transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden px-5 py-2.5 whitespace-nowrap sm:inline-flex">
              Hacer un pedido
            </a>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full text-ink hover:bg-card lg:hidden"
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
          <nav id="menu-movil" aria-label="Principal" className="border-t border-line px-3 pt-2 pb-3 lg:hidden">
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={close} className="block rounded-xl px-3 py-3 text-lg font-medium text-ink hover:bg-card">
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                  <span className="icon-[mdi--whatsapp] size-5" aria-hidden="true" />
                  Hacer un pedido por WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
