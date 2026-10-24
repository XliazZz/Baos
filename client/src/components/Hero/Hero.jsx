import React from 'react';
import { whatsappUrl } from '../../data/business';
import { cld, cldSrcSet } from '../../utils/cloudinary';

const productionImage = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1745620672/9a5da060-6d18-4ea7-a0f9-d82d3ebef3c7_fq1lnr.jpg';
const productImage = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1745619779/IMG_5521_jgidge.jpg';

const highlights = ['Hechos a mano', 'Congelados en su punto', 'Entrega en toda CABA'];

const Hero = () => (
  <section id="inicio" className="pt-10 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
    <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
      <div className="lg:col-span-6">
        <p className="chip">Fábrica de pan bao en Villa Luro</p>
        <h1 className="mt-6 text-5xl sm:text-6xl xl:text-7xl">
          Pan bao al vapor, <span className="text-accent">listo</span> para tu carta
        </h1>
        <p className="mt-6 max-w-lg text-lg">
          Elaboramos baos artesanales y los entregamos congelados a restaurantes de toda CABA.
          Vos solo los calentás al vapor y servís.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <span className="icon-[mdi--whatsapp] size-5" aria-hidden="true" />
            Hacer un pedido
          </a>
          <a href="#productos" className="btn btn-secondary">
            Ver variedades
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="icon-[heroicons--check-circle-20-solid] size-5 text-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-5 gap-3 sm:gap-4 lg:col-span-6">
        <div className="relative col-span-3 row-span-2">
          <img
            src={cld(productionImage, 900)}
            srcSet={cldSrcSet(productionImage, [480, 720, 900, 1200])}
            sizes="(min-width: 1024px) 380px, 60vw"
            alt="Bandejas de producción con panes bao en la fábrica"
            width="900"
            height="1200"
            fetchPriority="high"
            className="absolute inset-0 size-full rounded-panel object-cover"
          />
          <p className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-canvas/85 px-3 py-1.5 text-xs font-semibold text-ink backdrop-blur sm:bottom-4 sm:left-4 sm:text-sm">
            <span className="icon-[mdi--snowflake] size-4 text-accent" aria-hidden="true" />
            Se entregan congelados
          </p>
        </div>

        <div className="col-span-2 flex flex-col justify-between gap-6 rounded-panel bg-accent p-5 text-on-accent sm:p-6">
          <span className="icon-[tdesign--bread] size-7" aria-hidden="true" />
          <p>
            <span className="block font-display text-4xl font-bold tracking-tight sm:text-5xl">5</span>
            <span className="mt-1 block text-sm leading-snug font-medium">variedades, de 10 a 20 cm</span>
          </p>
        </div>

        <img
          src={cld(productImage, 480)}
          srcSet={cldSrcSet(productImage, [240, 480, 720])}
          sizes="(min-width: 1024px) 250px, 40vw"
          alt="Pan bao tradicional abierto"
          width="480"
          height="480"
          className="col-span-2 aspect-square w-full rounded-panel object-cover"
        />
      </div>
    </div>
  </section>
);

export default Hero;
