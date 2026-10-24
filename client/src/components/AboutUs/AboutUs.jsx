import React from 'react';
import Header from '../Header/Header';
import { business } from '../../data/business';
import { cld, cldSrcSet } from '../../utils/cloudinary';

const productionImage = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1745620672/89e45d6b-6754-4d9f-90d6-866ccccf77de_n8tlqj.jpg';
const traysImage = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1745620672/9a5da060-6d18-4ea7-a0f9-d82d3ebef3c7_fq1lnr.jpg';

const reasons = [
  { icon: 'icon-[mdi--calendar-sync-outline]', title: 'Abastecimiento sin cortes', description: 'Entregas puntuales para que nunca te falte stock.' },
  { icon: 'icon-[mdi--cash-multiple]', title: 'Precio de fábrica', description: 'Precios por volumen que dejan margen en tu carta.' },
  { icon: 'icon-[mdi--hand-heart-outline]', title: 'Hecho a mano', description: 'Elaboración artesanal con ingredientes seleccionados.' },
  { icon: 'icon-[mdi--account-voice]', title: 'Trato directo', description: 'Hablás con la fábrica, sin intermediarios.' },
];

const AboutUs = () => (
  <section id="nosotros" className="section">
    <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
      <div className="reveal grid grid-cols-5 gap-3 sm:gap-4 lg:col-span-6">
        <div className="relative col-span-3">
          <img
            src={cld(productionImage, 800)}
            srcSet={cldSrcSet(productionImage, [480, 800, 1200])}
            sizes="(min-width: 1024px) 360px, 60vw"
            alt="Panes bao armados en bandejas de producción, antes de la cocción al vapor"
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-panel object-cover"
          />
          <p className="absolute right-3 bottom-3 left-3 rounded-2xl bg-canvas/90 p-4 backdrop-blur sm:right-auto">
            <span className="block font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">+3.000</span>
            <span className="block text-xs leading-snug sm:text-sm">baos por semana a restaurantes de CABA</span>
          </p>
        </div>
        <img
          src={cld(traysImage, 600)}
          srcSet={cldSrcSet(traysImage, [320, 600, 900])}
          sizes="(min-width: 1024px) 240px, 40vw"
          alt="Cajones con bollos de masa de pan bao en la fábrica"
          width="600"
          height="800"
          loading="lazy"
          decoding="async"
          className="col-span-2 mt-16 aspect-[3/4] w-full self-start rounded-panel object-cover"
        />
      </div>

      <div className="lg:col-span-6">
        <Header eyebrow="Quiénes somos" title="Una fábrica dedicada solo al pan bao">
          Somos {business.legalName}, la fábrica detrás de Wow Bao. Elaboramos el gua bao en nuestra planta de Villa Luro
          y lo llevamos directo a tu cocina.
        </Header>

        <ul className="reveal mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {reasons.map((reason) => (
            <li key={reason.title} className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                <span className={`${reason.icon} size-5`} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg">{reason.title}</h3>
                <p className="mt-1 text-[0.9375rem] leading-relaxed">{reason.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutUs;
