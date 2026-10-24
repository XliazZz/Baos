import React from 'react';
import { whatsappUrl } from '../../data/business';

const FloatButton = () => (
  <a
    href={whatsappUrl()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-[#128c7e] text-white transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    aria-label="Hacer un pedido por WhatsApp"
  >
    <span className="icon-[mdi--whatsapp] size-8" aria-hidden="true" />
  </a>
);

export default FloatButton;
