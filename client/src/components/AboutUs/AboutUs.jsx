import React from 'react';
import { business } from '../../data/business';
import { cld, cldSrcSet } from '../../utils/cloudinary';

const productionImage = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1745620672/89e45d6b-6754-4d9f-90d6-866ccccf77de_n8tlqj.jpg';
const doughImage = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1745620672/9a5da060-6d18-4ea7-a0f9-d82d3ebef3c7_fq1lnr.jpg';

const pillars = [
  { icon: 'icon-[heroicons--shield-check]', title: 'Abastecimiento sin cortes', description: 'Entregas programadas para que nunca te falte pan en pleno servicio.' },
  { icon: 'icon-[heroicons--currency-dollar]', title: 'Precio de fábrica directo', description: 'Precios por volumen que te dejan margen en cada plato de tu carta.' },
  { icon: 'icon-[heroicons--hand-raised]', title: 'Hecho a mano', description: 'Cuidado en el plegado y la cocción para que cada pan salga parejo y esponjoso.' },
  { icon: 'icon-[heroicons--user-group]', title: 'Trato directo con la fábrica', description: 'Hablás de cocinero a panadero, sin intermediarios ni sobrecostos.' },
];

const AboutUs = () => (
  <section id="quienes-somos" className="border-t border-stone-200/80 bg-surface py-20">
    <div className="wrap">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal order-2 lg:order-1 lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={cld(productionImage, 600)}
                srcSet={cldSrcSet(productionImage, [320, 600, 900])}
                sizes="(min-width: 1024px) 230px, 45vw"
                alt="Panes bao armados en bandejas de producción, antes de la cocción al vapor"
                width="600"
                height="512"
                loading="lazy"
                decoding="async"
                className="h-64 w-full rounded-2xl border border-stone-200 object-cover shadow-card"
              />
              <p className="rounded-2xl bg-ink p-5 text-white shadow-xl">
                <span className="block text-3xl font-black text-brand-500">+3.000</span>
                <span className="mt-1 block text-sm font-semibold text-white/85">baos semanales</span>
                <span className="mt-0.5 block text-xs text-white/60">para restaurantes de CABA</span>
              </p>
            </div>
            <div className="pt-8">
              <img
                src={cld(doughImage, 600)}
                srcSet={cldSrcSet(doughImage, [320, 600, 900])}
                sizes="(min-width: 1024px) 230px, 45vw"
                alt="Cajones con bollos de masa de pan bao en la fábrica"
                width="600"
                height="640"
                loading="lazy"
                decoding="async"
                className="h-80 w-full rounded-2xl border border-stone-200 object-cover shadow-card"
              />
            </div>
          </div>
        </div>

        <div className="reveal order-1 lg:order-2 lg:col-span-7">
          <p className="chip chip-brand mb-4">Quiénes somos</p>
          <h2 className="text-3xl leading-tight font-black tracking-tight text-stone-900 sm:text-4xl">
            Una fábrica dedicada solo al pan bao
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
            Somos <strong>{business.legalName}</strong>, la fábrica detrás de Wow Bao. Desde nuestra planta en{' '}
            <strong>Villa Luro</strong> elaboramos pan bao al vapor de forma artesanal y lo llevamos congelado a
            restaurantes de toda la ciudad.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="rounded-2xl border border-stone-200/70 bg-stone-50 p-5 transition hover:border-brand-200">
                <span className="mb-3 grid size-9 place-items-center rounded-lg bg-brand-100 text-brand-700">
                  <span className={`${pillar.icon} size-5`} aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold text-stone-900">{pillar.title}</h3>
                <p className="mt-1 text-xs leading-normal text-stone-600">{pillar.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
