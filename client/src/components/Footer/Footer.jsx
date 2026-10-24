import React from 'react';
import { business } from '../../data/business';

const links = [
  { href: '#productos', label: 'Variedades' },
  { href: '#nosotros', label: 'Quiénes somos' },
  { href: '#como-trabajamos', label: 'Cómo trabajamos' },
  { href: '#condiciones', label: 'Condiciones comerciales' },
  { href: '#preguntas', label: 'Preguntas frecuentes' },
  { href: '#contacto', label: 'Contacto' },
];

const Footer = () => (
  <footer className="border-t border-line">
    <div className="wrap grid gap-10 py-14 text-sm sm:grid-cols-2 lg:grid-cols-12">
      <div className="sm:col-span-2 lg:col-span-5">
        <p className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-ink">
          <span className="icon-[tdesign--bread] size-6 text-accent" aria-hidden="true" />
          Wow Bao
        </p>
        <p className="mt-3 max-w-xs text-base">Pan bao artesanal, hecho con amor y al vapor, para restaurantes de CABA.</p>
        <ul className="mt-6 flex gap-2">
          {business.social.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <span className={`${link.icon} size-5`} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav aria-label="Pie de página" className="lg:col-span-3">
        <h2 className="font-sans text-sm font-semibold tracking-normal">Secciones</h2>
        <ul className="mt-4 space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-ink">{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:col-span-4">
        <h2 className="font-sans text-sm font-semibold tracking-normal">Contacto</h2>
        <ul className="mt-4 space-y-2">
          <li><a href={business.phoneHref} className="hover:text-ink">{business.phone}</a></li>
          <li><a href={`mailto:${business.email}`} className="break-words hover:text-ink">{business.email}</a></li>
          <li>{business.address}</li>
          <li>{business.hours}</li>
        </ul>
      </div>
    </div>

    <div className="wrap overflow-hidden" aria-hidden="true">
      <p className="font-display text-[clamp(4.5rem,21vw,17rem)] leading-[0.75] font-extrabold tracking-[-0.06em] whitespace-nowrap text-card select-none">
        Wow Bao
      </p>
    </div>

    <div className="border-t border-line">
      <p className="wrap py-6 text-xs">
        © {new Date().getFullYear()} Wow Bao · {business.legalName}
      </p>
    </div>
  </footer>
);

export default Footer;
