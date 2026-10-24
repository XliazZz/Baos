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
      <Header eyebrow="Variedades" title="Cinco formatos para armar tu carta">
        Todos se elaboran al vapor y se entregan congelados. Elegí según el plato: del bao clásico
        de 10 cm al XL de 20 cm.
      </Header>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {productsData.map((item) => (
          <li key={item.id}>
            <Card {...item} />
          </li>
        ))}
        <li className="flex flex-col justify-between gap-6 rounded-lg border border-dashed border-muted/50 p-6 sm:p-8">
          <div>
            <h3 className="text-2xl">¿Querés probarlos en tu cocina?</h3>
            <p className="mt-3">
              Contanos qué platos hacés y qué volumen necesitás, y te ayudamos a armar el primer pedido.
            </p>
          </div>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary self-start">
            Escribinos por WhatsApp
          </a>
        </li>
      </ul>
    </div>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
  </section>
);

export default ProductsCollection;
