import React from 'react';
import { samplesUrl, terms, whatsappUrl } from '../../data/business';

const trust = [`Entregas ${terms.deliveryDays.toLowerCase()} en toda CABA`, 'Envíos al interior del país', terms.shelfLife];

const Hero = () => (
  <section id="inicio" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
    <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/40 blur-3xl" aria-hidden="true" />

    <div className="wrap">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col items-start space-y-6 lg:col-span-7">
          <p className="rise inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-brand-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-brand-700 uppercase">
            <span className="size-2 rounded-full bg-brand-500 motion-safe:animate-pulse" aria-hidden="true" />
            Fábrica y venta mayorista de pan bao
          </p>

          <h1 className="rise text-4xl leading-[1.08] font-black tracking-tight text-stone-900 [--delay:80ms] sm:text-5xl lg:text-6xl">
            Pan bao mayorista,{' '}
            <span className="relative inline-block text-brand-600 dark:text-brand-400">
              listo
              <span className="absolute bottom-1.5 left-0 -z-10 h-3 w-full rounded bg-brand-100" aria-hidden="true" />
            </span>{' '}
            para tu carta
          </h1>

          <p className="rise max-w-2xl text-lg leading-relaxed text-stone-600 [--delay:160ms] sm:text-xl">
            Somos proveedores de pan bao al vapor para restaurantes y locales gastronómicos de CABA y del interior del país. Te lo entregamos
            congelado: vos lo calentás en minutos y le ponés tu propio relleno.
          </p>

          <div className="rise flex w-full flex-wrap items-center gap-4 pt-2 [--delay:240ms] sm:w-auto">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-brand-600 px-8 py-4 text-center text-base font-bold text-white shadow-lg shadow-brand-600/25 transition duration-150 hover:-translate-y-0.5 hover:bg-brand-700 dark:hover:bg-brand-500 hover:shadow-hover sm:w-auto"
            >
              Hacer un pedido
            </a>
            <a
              href={samplesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl border border-stone-300 bg-surface px-8 py-4 text-center text-base font-bold text-stone-800 shadow-subtle transition duration-150 hover:border-stone-400 hover:bg-stone-50 sm:w-auto"
            >
              Pedir muestras
            </a>
          </div>

          <ul className="rise flex w-full flex-wrap items-center gap-x-6 gap-y-3 border-t border-stone-200/80 pt-6 text-sm text-stone-500 [--delay:320ms]">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="icon-[heroicons--check-20-solid] size-5 text-emerald-600" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rise relative [--delay:200ms] lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-surface bg-stone-100 shadow-2xl">
              {/* Foto: Sandie Clarke en Unsplash (licencia Unsplash) */}
              <img
                src="/images/bao-relleno-800.webp"
                srcSet="/images/bao-relleno-480.webp 480w, /images/bao-relleno-800.webp 800w, /images/bao-relleno-1200.webp 1200w"
                sizes="(min-width: 1024px) 460px, (min-width: 448px) 448px, 100vw"
                alt="Pan bao relleno con carne braseada y cilantro"
                width="800"
                height="1200"
                fetchPriority="high"
                className="size-full object-cover object-center transition duration-500 ease-out group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-4 bottom-4">
                <span className="badge-blur block rounded-xl border border-white/20 bg-black/60 px-3.5 py-2 text-center text-xs font-medium text-white/85">
                  <strong className="text-white">Imagen ilustrativa:</strong> vendemos solo el pan; el relleno lo ponés vos.
                </span>
              </figcaption>
            </figure>

            <div className="absolute -top-6 -right-4 max-w-[190px] rotate-1 rounded-2xl border-2 border-surface bg-brand-600 p-4 text-white shadow-xl transition hover:rotate-0 sm:-right-6 sm:p-5">
              <p className="mb-1 flex items-center gap-2 text-xs font-bold tracking-wider text-white uppercase">
                <span className="icon-[heroicons--truck] size-4" aria-hidden="true" />
                Logística
              </p>
              <p className="text-2xl leading-tight font-black">Lun–Sáb</p>
              <p className="mt-1 text-xs font-medium text-white">Entregas en todos los barrios de CABA</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
