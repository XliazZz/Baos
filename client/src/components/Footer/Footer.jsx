import React from 'react';
import { business } from '../../data/business';

const Footer = () => (
  <footer className="band">
    <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
      <div className="lg:col-span-2">
        <p className="flex items-center gap-2 font-display text-2xl font-semibold text-on-band">
          <span className="icon-[tdesign--bread] size-7 text-accent-on-band" aria-hidden="true" />
          Wow Bao
        </p>
        <p className="mt-3 max-w-xs">Pan bao artesanal, hecho con amor y al vapor, para restaurantes de CABA.</p>
      </div>

      <div className="text-sm leading-relaxed">
        <h2 className="font-sans text-sm font-bold tracking-normal">Contacto</h2>
        <ul className="mt-3 space-y-1">
          <li><a href={business.phoneHref} className="hover:text-on-band hover:underline">{business.phone}</a></li>
          <li><a href={`mailto:${business.email}`} className="break-words hover:text-on-band hover:underline">{business.email}</a></li>
          <li>{business.address}</li>
          <li>{business.hours}</li>
        </ul>
      </div>

      <div className="text-sm">
        <h2 className="font-sans text-sm font-bold tracking-normal">Seguinos</h2>
        <ul className="mt-3 flex gap-4">
          {business.social.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="hover:text-on-band">
                <span className={`${link.icon} size-7`} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-band-line">
      <p className="wrap py-6 text-xs">
        © {new Date().getFullYear()} Wow Bao · {business.legalName}
      </p>
    </div>
  </footer>
);

export default Footer;
