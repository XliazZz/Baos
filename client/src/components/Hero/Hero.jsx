import React from 'react';
import { samplesUrl, whatsappUrl } from '../../data/business';
import { cld, cldSrcSet } from '../../utils/cloudinary';

const productImage = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1745619779/IMG_5521_jgidge.jpg';


const Hero = () => (
  <section id="inicio" className="pt-10 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
    <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
      <div className="lg:col-span-6">
        <p className="chip">Fábrica y venta mayorista de pan bao</p>
        <h1 className="mt-6 text-5xl sm:text-6xl xl:text-7xl">
          Pan bao mayorista, <span className="text-accent">listo</span> para tu carta
        </h1>
        <p className="mt-6 max-w-lg text-lg">
          Somos proveedores de pan bao al vapor para restaurantes y locales gastronómicos de CABA.
          Lo entregamos congelado: vos lo calentás y le ponés tu relleno.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <span className="icon-[mdi--whatsapp] size-5" aria-hidden="true" />
            Hacer un pedido
          </a>
          <a href={samplesUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Pedir muestras
          </a>
        </div>

      </div>

      <div className="grid grid-cols-5 gap-3 sm:gap-4 lg:col-span-6">
        <figure className="relative col-span-3 row-span-2">
          {/* Foto: Sandie Clarke en Unsplash (licencia Unsplash) */}
          <img
            src="/images/bao-relleno-800.webp"
            srcSet="/images/bao-relleno-480.webp 480w, /images/bao-relleno-800.webp 800w, /images/bao-relleno-1200.webp 1200w"
            sizes="(min-width: 1024px) 380px, 60vw"
            alt="Pan bao relleno con carne braseada y cilantro"
            width="800"
            height="1200"
            fetchPriority="high"
            className="absolute inset-0 size-full rounded-panel object-cover"
          />
          <figcaption className="absolute right-3 bottom-3 left-3 rounded-2xl bg-canvas/90 px-3 py-2 text-xs leading-snug text-ink backdrop-blur sm:right-auto sm:bottom-4 sm:left-4 sm:rounded-full sm:py-1.5">
            <strong>Imagen ilustrativa:</strong> vendemos solo el pan, sin relleno
          </figcaption>
        </figure>

        <div className="col-span-2 flex flex-col justify-between gap-6 rounded-panel bg-accent p-4 text-on-accent sm:p-6">
          <span className="icon-[mdi--truck-fast-outline] size-7" aria-hidden="true" />
          <p>
            <span className="block font-display text-[clamp(1.125rem,6vw,2.25rem)] font-bold tracking-tight whitespace-nowrap">Lun–Sáb</span>
            <span className="mt-1 block text-sm leading-snug font-medium">entregas en toda CABA</span>
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
