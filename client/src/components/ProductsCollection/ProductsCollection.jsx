import React from 'react';
import Card from './components/Card';
import Header from '../Header/Header';
import productsData from '../../data/products/productsData.json';
import { whatsappUrl } from '../../data/business';

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Variedades de pan bao Wow Bao",
  "url": "https://baos.vercel.app/",
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
        Todos se elaboran al vapor y se entregan congelados. Del bao clásico de 10 cm al XL de 20 cm.
      </Header>

      {/* En móvil, carrusel horizontal con scroll-snap; desde sm, grilla.
          contain:paint evita que Chrome móvil ensanche la página con el contenido del carrusel */}
      <ul className="-mx-5 mt-12 flex snap-x max-sm:[contain:paint] snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
        {productsData.map((item) => (
          <li key={item.id} className="reveal w-[82%] shrink-0 snap-start sm:w-auto">
            <Card {...item} />
          </li>
        ))}
        <li className="reveal w-[82%] shrink-0 snap-start sm:w-auto">
          <div className="panel flex h-full flex-col justify-between gap-8 rounded-card p-7 sm:p-8">
            <span className="icon-[mdi--pot-steam-outline] size-10 text-accent-on-panel" aria-hidden="true" />
            <div>
              <h3 className="text-2xl sm:text-3xl">¿Querés probarlos en tu cocina?</h3>
              <p className="mt-3">Contanos qué platos hacés y qué volumen necesitás, y armamos juntos el primer pedido.</p>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6">
                Escribinos por WhatsApp
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
