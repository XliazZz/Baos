import React from 'react';
import Header from '../Header/Header';

const reasons = [
  {
    title: 'Abastecimiento sin cortes',
    description: 'Entregas puntuales y constantes en toda CABA, para que nunca te quedes sin stock en pleno servicio.',
  },
  {
    title: 'Precio mayorista',
    description: 'Precios por volumen pensados para que el bao deje un buen margen en tu carta.',
  },
  {
    title: 'Hechos a mano, al vapor',
    description: 'Cada pan se elabora artesanalmente en nuestra fábrica de Villa Luro, con ingredientes seleccionados.',
  },
  {
    title: 'Congelados en su punto',
    description: 'Los entregamos congelados para conservar la textura esponjosa y el sabor hasta el momento de servir.',
  },
];

const WhyUs = () => (
  <section id="por-que" className="band section">
    <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <Header eyebrow="Por qué Wow Bao" title="Un proveedor pensado para cocinas que no pueden parar">
          Más de 3.000 baos por semana salen de nuestra fábrica hacia restaurantes asiáticos de la ciudad.
        </Header>
      </div>

      <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7">
        {reasons.map((reason, index) => (
          <li key={reason.title} className="border-t border-band-line pt-6">
            <span className="font-display text-sm font-semibold text-accent-on-band" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-xl">{reason.title}</h3>
            <p className="mt-2">{reason.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default WhyUs;
