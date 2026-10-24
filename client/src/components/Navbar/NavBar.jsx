import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { samplesUrl, whatsappUrl } from '../../data/business';

const links = [
  { href: '#variedades', label: 'Variedades' },
  { href: '#quienes-somos', label: 'Quiénes somos' },
  { href: '#como-trabajamos', label: 'Cómo trabajamos' },
  { href: '#preguntas', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="badge-blur sticky top-0 z-50 border-b border-stone-200/80 bg-canvas/90" onKeyDown={(e) => e.key === 'Escape' && close()}>
      <div className="wrap flex h-20 items-center justify-between gap-4">
        <a href="#inicio" onClick={close} aria-label="Wow Bao, ir al inicio" className="group">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm font-semibold text-stone-600 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-brand-600 dark:hover:text-brand-400">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={samplesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full px-4 py-2.5 text-xs font-bold tracking-wider text-stone-700 uppercase transition hover:text-brand-600 dark:hover:text-brand-400 md:inline-flex"
          >
            Pedir muestras
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-150 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-hover active:translate-y-0 dark:hover:bg-brand-500 sm:inline-flex"
          >
            Hacer un pedido
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-stone-200 bg-surface text-stone-900 transition hover:border-stone-300 lg:hidden"
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
        <nav id="menu-movil" aria-label="Principal" className="border-t border-stone-200/80 bg-canvas lg:hidden">
          <ul className="wrap py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close} className="block rounded-xl px-3 py-3 text-lg font-semibold text-stone-900 hover:bg-stone-100">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="grid gap-3 pt-3 sm:grid-cols-2">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-bold text-white transition hover:bg-brand-700 dark:hover:bg-brand-500"
              >
                <span className="icon-[mdi--whatsapp] size-5" aria-hidden="true" />
                Hacer un pedido
              </a>
              <a
                href={samplesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-surface px-6 py-3.5 text-base font-bold text-stone-800 transition hover:bg-stone-50"
              >
                Pedir muestras
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
