import React from 'react';
import { whatsappUrl } from '../../data/business';
import { cld, cldSrcSet } from '../../utils/cloudinary';

const heroImage = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1745620672/9a5da060-6d18-4ea7-a0f9-d82d3ebef3c7_fq1lnr.jpg';

const facts = [
  { value: '+3.000', label: 'baos por semana' },
  { value: '5', label: 'variedades' },
  { value: 'CABA', label: 'entrega en toda la ciudad' },
];

const Hero = () => (
  <section id="inicio" className="border-b border-line">
    <div className="wrap grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-20">
      <div className="lg:col-span-6">
        <p className="eyebrow">Fábrica de pan bao · Villa Luro</p>
        <h1 className="mt-5 text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl">
          Pan bao al vapor para la carta de tu restaurante
        </h1>
        <p className="mt-6 max-w-xl text-lg">
          Elaboramos baos artesanales en nuestra fábrica y los entregamos congelados en toda CABA,
          para que lleguen a tu cocina con la textura y el sabor intactos.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <span className="icon-[mdi--whatsapp] size-5" aria-hidden="true" />
            Hacer un pedido
          </a>
          <a href="#productos" className="btn btn-secondary">
            Ver variedades
          </a>
        </div>

        <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse justify-end gap-1">
              <dt className="text-sm leading-snug text-muted">{fact.label}</dt>
              <dd className="font-display text-2xl font-semibold text-ink sm:text-3xl">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="lg:col-span-6">
        <img
          src={cld(heroImage, 1200)}
          srcSet={cldSrcSet(heroImage, [640, 960, 1200, 1600])}
          sizes="(min-width: 1024px) 560px, 100vw"
          alt="Bandejas de producción con panes bao en la fábrica"
          width="1200"
          height="1500"
          fetchPriority="high"
          className="aspect-[4/3] w-full rounded-lg object-cover lg:aspect-[4/5]"
        />
      </div>
    </div>
  </section>
);

export default Hero;
