import React from 'react';
import Card from './components/Card';
import Header from '../Header/Header';
import productsData from '../../data/products/productsData.json';
import { samplesUrl, terms, whatsappUrl } from '../../data/business';

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Variedades de pan bao Wow Bao",
  "url": "https://www.wowbao.com.ar/",
  "numberOfItems": productsData.length,
  "itemListElement": productsData.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": item.title,
      "description": item.description,
      "image": item.image,
      "sku": `WB-${item.id}`,
      "brand": { "@type": "Brand", "name": "Wow Bao" },
    },
  })),
};

const highlights = [
  { icon: 'icon-[mdi--bread-slice-outline]', title: 'Solo el pan', detail: 'Sin relleno: le ponés tu receta' },
  { icon: 'icon-[mdi--pot-steam-outline]', title: 'Al vapor', detail: 'Elaborado de forma artesanal' },
  { icon: 'icon-[mdi--snowflake]', title: 'Congelado', detail: terms.shelfLife },
  { icon: 'icon-[mdi--package-variant-closed]', title: 'Desde 25 unidades', detail: 'por variedad' },
];

const ProductsCollection = () => (
  <section id="productos" className="section">
    <div className="wrap">
      <Header
        eyebrow="Variedades"
        title="Cinco formatos para armar tu carta"
        action={
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-secondary self-start md:self-auto">
            Consultar por WhatsApp
            <span className="icon-[heroicons--arrow-up-right-20-solid] size-4" aria-hidden="true" />
          </a>
        }
      >
        Pan bao artesanal en cinco formatos, del clásico de 10 cm al XL de 20 cm.
      </Header>

      <ul className="reveal mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-4">
        {highlights.map((item) => (
          <li key={item.title} className="flex items-start gap-3 bg-surface p-4 sm:items-center sm:gap-4 sm:p-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft text-accent sm:size-12">
              <span className={`${item.icon} size-5 sm:size-6`} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-base font-semibold tracking-tight text-ink sm:text-lg">{item.title}</span>
              <span className="block text-xs leading-snug sm:text-sm">{item.detail}</span>
            </span>
          </li>
        ))}
      </ul>

      {/* En móvil, carrusel horizontal con scroll-snap; desde sm, grilla.
          contain:paint evita que Chrome móvil ensanche la página con el contenido del carrusel */}
      <ul className="-mx-5 mt-6 flex snap-x max-sm:[contain:paint] snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
        {productsData.map((item) => (
          <li key={item.id} className="reveal w-[82%] shrink-0 snap-start sm:w-auto">
            <Card {...item} />
          </li>
        ))}
        <li className="reveal w-[82%] shrink-0 snap-start sm:w-auto">
          <div className="flex h-full flex-col justify-between gap-8 rounded-card bg-accent-soft p-7 sm:p-8">
            <span className="icon-[mdi--gift-outline] size-10 text-accent" aria-hidden="true" />
            <div>
              <h3 className="text-2xl sm:text-3xl">¿Querés probarlos primero?</h3>
              <p className="mt-3">Te enviamos {terms.samples} a tu cocina. El envío se abona aparte.</p>
              <a href={samplesUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6">
                Pedir muestras
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
  </section>
);

export default ProductsCollection;
