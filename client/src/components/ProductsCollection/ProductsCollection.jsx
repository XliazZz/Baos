import React from 'react'
import Card from './components/Card'
import Header from '../Header/Header'
import productsData from '../../data/products/productsData.json'

const ProductsCollection = () => {
  return (
    <section itemScope itemType="https://schema.org/ItemList">
      <Header
        title="Menú de Panes"
        description={
          <>
            Explora nuestra selección de panes bao al vapor, hechos con ingredientes de la más alta calidad.
            Su <span className="font-semibold">textura esponjosa</span> y su <span className="font-semibold">sabor auténtico</span> te transportarán con cada bocado.
          </>
        }
        subtitle="¡Descubre tu favorito y disfruta la experiencia!"
      />
      <ul className='mt-5 sm:mt-10 grid gap-4 grid-cols-2
        sm:grid-cols-2 sm:gap-9 
        md:mt-8 md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-4 xl:gap-6
        2xl:gap-10'
      >
        {productsData.map((item) => (
          <li
            key={item.id}
            className='mx-auto'
            itemProp={item.itemProp}
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={item.id} />
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
              gr={item.gr}
              size={item.size}
              schemaType={item.schemaType}
            />
          </li>
        ))}
      </ul>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": productsData.map(item => ({
            "@type": "ListItem",
            "position": item.id,
            "item": {
              "@type": "Product",
              "name": item.title,
              "description": item.description,
              "image": item.image,
              "weight": item.gr,
              "size": item.size
            }
          }))
        })}
      </script>
    </section>
  )
}

export default React.memo(ProductsCollection)