import React from 'react';
import Logo from '../Logo/Logo';
import { business } from '../../data/business';

const links = [
  { href: '#variedades', label: 'Variedades y formatos' },
  { href: '#quienes-somos', label: 'Quiénes somos' },
  { href: '#como-trabajamos', label: 'Cómo trabajamos' },
  { href: '#condiciones', label: 'Condiciones comerciales' },
  { href: '#preguntas', label: 'Preguntas frecuentes' },
  { href: '#contacto', label: 'Contacto y pedidos' },
];

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-stone-200 bg-stone-100 pt-16 pb-12">
    <div className="wrap relative z-10">
      <div className="grid grid-cols-1 gap-10 border-b border-stone-200 pb-12 md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <Logo compact />
          <p className="max-w-sm text-sm text-stone-600">
            Pan bao artesanal, hecho con amor y al vapor, para locales gastronómicos y restaurantes de la Ciudad de Buenos Aires.
          </p>
          <ul className="flex items-center gap-3 pt-2">
            {business.social.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="grid size-9 place-items-center rounded-full bg-stone-200 text-stone-700 transition hover:bg-brand-600 hover:text-white"
                >
                  <span className={`${link.icon} size-4`} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="mb-4 text-xs font-bold tracking-wider text-stone-900 uppercase">Secciones</h2>
          <ul className="space-y-2.5 text-sm font-medium text-stone-600">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-brand-600 dark:hover:text-brand-400">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-xs font-bold tracking-wider text-stone-900 uppercase">Información legal</h2>
          <p className="text-xs leading-relaxed text-stone-600">
            <strong>{business.legalName}</strong>
            <br />
            Planta de elaboración: {business.address}.
            <br />
            Atención: {business.hours.toLowerCase()}.
          </p>
        </div>
      </div>

      <div className="pt-8 text-center text-xs text-stone-600 sm:flex sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Wow Bao · {business.legalName}. Todos los derechos reservados.</p>
        <p className="mt-2 font-medium sm:mt-0">Hecho para la gastronomía de Buenos Aires</p>
      </div>
    </div>

    {/* Marca de agua decorativa: se dibuja con CSS para que no cuente como texto */}
    <div
      data-text="Wow Bao"
      aria-hidden="true"
      className="watermark pointer-events-none absolute -bottom-[1.5vw] left-1/2 z-0 -translate-x-1/2 text-[7vw] leading-none font-black whitespace-nowrap text-stone-200/60 select-none"
    />
  </footer>
);

export default Footer;
