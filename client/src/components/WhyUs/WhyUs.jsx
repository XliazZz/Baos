import React from 'react';
import Header from '../Header/Header';

const reasons = [
  {
    icon: 'icon-[mdi--calendar-sync-outline]',
    title: 'Abastecimiento sin cortes',
    description: 'Entregas puntuales y constantes, para que nunca te quedes sin stock en pleno servicio.',
  },
  {
    icon: 'icon-[mdi--cash-multiple]',
    title: 'Precio mayorista',
    description: 'Precios por volumen pensados para que el bao deje un buen margen en tu carta.',
  },
  {
    icon: 'icon-[mdi--hand-heart-outline]',
    title: 'Hechos a mano, al vapor',
    description: 'Cada pan se elabora artesanalmente en nuestra fábrica, con ingredientes seleccionados.',
  },
  {
    icon: 'icon-[mdi--snowflake]',
    title: 'Congelados en su punto',
    description: 'Conservan la textura esponjosa y el sabor hasta el momento de servir.',
  },
];

const ReasonCard = ({ icon, title, description }) => (
  <li className="reveal rounded-card bg-card p-7 sm:p-8">
    <span className={`${icon} size-7 text-accent`} aria-hidden="true" />
    <h3 className="mt-6 text-xl">{title}</h3>
    <p className="mt-2">{description}</p>
  </li>
);

const WhyUs = () => (
  <section id="por-que" className="section">
    <div className="wrap">
      <Header eyebrow="Por qué Wow Bao" title="Un proveedor pensado para cocinas que no pueden parar" />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li className="panel reveal flex flex-col justify-between gap-10 rounded-card p-8 sm:col-span-2 sm:p-10">
          <span className="icon-[tdesign--bread] size-9 text-accent-on-panel" aria-hidden="true" />
          <p className="max-w-md">
            <span className="block font-display text-6xl font-bold tracking-tight text-on-panel sm:text-7xl">+3.000</span>
            <span className="mt-3 block text-lg">
              baos por semana salen de nuestra fábrica hacia restaurantes asiáticos de la ciudad.
            </span>
          </p>
        </li>
        {reasons.map((reason) => (
          <ReasonCard key={reason.title} {...reason} />
        ))}
      </ul>
    </div>
  </section>
);

export default WhyUs;
