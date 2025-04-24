import React from 'react'
import CardSection from './components/CardSection'

const FeatureSection = () => {
  const featureData = [
    {
      title: 'Calidad',
      description: 'Elaborados con los mejores ingredientes, garantizando una textura suave y un sabor auténtico en cada bocado.',
      icon: 'icon-[prime--star]',
      itemProp: "itemListElement",
      schemaType: "Quality"
    },
    {
      title: 'Artesanal',
      description: 'Cada pan bao es hecho a mano, con dedicación y pasión, asegurando un producto único que destaca por su sabor y calidad.',
      icon: 'icon-[solar--chef-hat-outline]',
      itemProp: "itemListElement",
      schemaType: "Handmade"
    },
    {
      title: 'Confianza',
      description: 'Nuestros clientes confían en la calidad y frescura de nuestros productos, elaborados con pasión y dedicación.',
      icon: 'icon-[ph--handshake-light]',
      itemProp: "itemListElement",
      schemaType: "Trust"
    },
    {
      title: 'Vendidos',
      description: 'Mas de 1000 panes bao vendidos a la semana, siendo el favorito de la comunidad local y visitantes.',
      icon: 'icon-[bx--bar-chart]',
      itemProp: "itemListElement",
      schemaType: "Sales"
    }
  ]

  return (
    <section
      aria-labelledby="features-heading"
      className="grid items-center
        lg:grid lg:grid-cols-4 lg:gap-16
        xl:gap-24"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="col-span-2 mb-8">
        <p className="text-lg font-medium text-indigo-500 dark:text-indigo-300 
          sm:text-xl 
          md:text-xl
          lg:text-xl
          2xl:text-2xl"
          itemProp="description"
        >
          El Sabor que Te Encantará
        </p>

        <h2
          id="features-heading"
          className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white 
          sm:text-2xl
          md:text-3xl 
          lg:font-extrabold lg:text-2xl
          2xl:text-4xl"
          itemProp="name"
        >
          Esponjosidad, frescura y tradición en cada bocado
        </h2>

        <p className="font-light text-gray-500 dark:text-gray-300 
          sm:text-lg sm:font-light sm:text-gray-800 
          md:w-[95%] md:mx-auto md:font-light md:text-gray-800 
          lg:w-full lg:font-light
          xl:font-light xl:w-full xl:text-lg xl:text-gray-600
          2xl:text-xl"
          itemProp="disambiguatingDescription"
        >
          Nuestros panes bao son el favorito de la comunidad, con una textura suave y un sabor auténtico que te transporta a la esencia de nuestra cocina. Hechos con pasión y los mejores ingredientes, cada bocado es una experiencia única.
        </p>
      </div>

      <div className="col-span-2 space-y-8 text-start 
        sm:space-y-5
        md:grid md:grid-cols-2 md:gap-y-10 md:space-y-0 md:mt-5 md:text-center
        lg:gap-x-2
        2xl:gap-10"
        itemProp="mainEntity"
      >
        {featureData.map((feature, index) => (
          <CardSection
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            itemProp={feature.itemProp}
            schemaType={feature.schemaType}
            position={index + 1}
          />
        ))}
      </div>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": featureData.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.title,
            "description": item.description,
            "item": {
              "@type": item.schemaType,
              "name": item.title,
              "description": item.description
            }
          }))
        })}
      </script>
    </section>
  )
}

export default React.memo(FeatureSection)