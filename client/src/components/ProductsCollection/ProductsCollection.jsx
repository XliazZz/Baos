import React, { useMemo } from 'react'
import Card from './components/Card'
import Header from '../Header/Header'

const ProductsCollection = () => {
  const dataBao = useMemo(() => [
    {
      title: "Pan Bao Tradicional",
      description: "Clásico pan bao al vapor, esponjoso y suave, perfecto para rellenar con tus ingredientes favoritos",
      id: 1,
      image: "https://th.bing.com/th/id/OIP.8b64JwdG0LSJbwKsoMRNRQHaFj?rs=1&pid=ImgDetMain",
      gr: "40gr",
      size: "10cm",
      itemProp: "itemListElement",
      schemaType: "Product"
    },
    {
      title: "Pan Bao Integral",
      description: "Pan bao al vapor hecho con harina integral, una opción más saludable y con más fibra",
      id: 2,
      image: "https://sushisesamo.cl/wp-content/uploads/2023/11/paobao-pollo.jpg",
      gr: "40gr",
      size: "10cm",
      itemProp: "itemListElement",
      schemaType: "Product"
    },
    {
      title: "Pan Bao de Sésamo",
      description: "Pan bao al vapor con semillas de sésamo, añadiendo un toque crujiente y un sabor único",
      id: 3,
      image: "https://www.fansdelvacuno.es/wp-content/uploads/2019/10/77A4058-RET.jpg",
      gr: "40gr",
      size: "10cm",
      itemProp: "itemListElement",
      schemaType: "Product"
    },
    {
      title: "Pan Bao de Espinaca",
      description: "Pan bao al vapor con espinaca, aportando un color verde vibrante y nutrientes adicionales",
      id: 4,
      image: "https://razaitaliana.com/wp-content/uploads/2021/12/Pan-arabe-1536x1008.jpg",
      gr: "90gr",
      size: "20cm",
      itemProp: "itemListElement",
      schemaType: "Product"
    },
  ], []);

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
        {dataBao.map((item) => (
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
          "itemListElement": dataBao.map(item => ({
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