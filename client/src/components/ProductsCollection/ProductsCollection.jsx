import React from 'react';
import Card from './components/Card';
import Header from '../Header/Header';
import productsData from '../../data/products/productsData.json';
import { samplesUrl, terms, whatsappUrl } from '../../data/business';

const ProductsCollection = () => (
  <section id="variedades" className="py-20 lg:py-24">
    <div className="wrap">
      <Header
        eyebrow="Variedades"
        title="Pan bao por mayor, en cinco formatos"
        action={
          <a
            href={whatsappUrl('Hola, quisiera consultar la lista de precios mayorista de pan bao.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 self-start rounded-xl border border-stone-300 bg-surface px-5 py-3 text-sm font-semibold text-stone-700 shadow-subtle transition hover:border-emerald-500 hover:text-emerald-700 hover:shadow-md md:self-auto"
          >
            <span className="icon-[mdi--whatsapp] size-5 text-emerald-500" aria-hidden="true" />
            Consultar por WhatsApp
            <span className="text-stone-400" aria-hidden="true">→</span>
          </a>
        }
      >
        Pan bao artesanal elaborado en nuestra planta de Villa Luro, del clásico de 10 cm al XL de 20 cm.
      </Header>

      {/* En móvil, carrusel horizontal con scroll-snap; desde md, grilla.
          contain:paint evita que Chrome móvil ensanche la página con el contenido del carrusel */}
      <ul className="-mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 max-md:[contain:paint] sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-8">
        {productsData.map((item) => (
          <li key={item.id} className="reveal w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto">
            <Card {...item} />
          </li>
        ))}

        <li className="reveal w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto">
          <aside className="flex h-full flex-col justify-between rounded-3xl border-2 border-dashed border-brand-300 bg-gradient-to-br from-brand-50 to-brand-100/70 p-8">
            <div>
              <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-md shadow-brand-600/30">
                <span className="icon-[heroicons--cube] size-7" aria-hidden="true" />
              </span>
              <p className="text-xs font-extrabold tracking-wider text-brand-700 uppercase">Para probar en tu cocina</p>
              <h3 className="mt-1 text-2xl font-black text-stone-900">¿Querés probarlos primero en tu cocina?</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                Antes de sumar un producto a tu carta, necesitás ver cómo responde al vapor y cómo combina con tu propuesta.
                Te enviamos {terms.samples}. El envío se abona aparte.
              </p>
            </div>
            <div className="mt-8">
              <a
                href={samplesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-brand-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-brand-700 dark:hover:bg-brand-500 hover:shadow-lg"
              >
                Pedir muestras para mi local
              </a>
              <p className="mt-2.5 text-center text-xs text-stone-600">Coordinamos por WhatsApp o formulario</p>
            </div>
          </aside>
        </li>
      </ul>
    </div>
  </section>
);

export default ProductsCollection;
