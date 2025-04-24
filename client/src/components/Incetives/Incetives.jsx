import React, { useMemo } from 'react'
import CardIncentive from './components/CardIncentive'

const Incentives = () => {
  const incentiveData = useMemo(() => [
    {
      title: "Abastecimiento Sin Interrupciones",
      description: "Garantizamos entregas puntuales y consistentes para que siempre tengas stock de panes bao frescos.",
      icon: "icon-[material-symbols--inventory-2-outline]",
      schemaType: "Service",
      itemProp: "itemListElement"
    },
    {
      title: "Precios Competitivos",
      description: "Ofrecemos precios al por mayor que te permiten obtener márgenes de ganancia atractivos.",
      icon: "icon-[ri--price-tag-3-line]",
      schemaType: "Offer",
      itemProp: "itemListElement"
    },
    {
      title: "Aumentá tu Oferta Gastronómica",
      description: "Con nuestros panes bao, puedes diversificar tu menú y atraer a más clientes interesados en sabores únicos.",
      icon: "icon-[lineicons--stats-up]",
      schemaType: "BusinessFunction",
      itemProp: "itemListElement"
    }
  ], []);

  return (
    <section
      aria-labelledby="incentives-heading"
      className="mx-auto py-0 flex flex-col sm:flex-row justify-center bg-transparent border-0"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <h2 id="incentives-heading" className="sr-only">Beneficios y ventajas</h2>

      <div className="flex flex-col sm:flex-row flex-1 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 [&>*:last-child]:border-b-0 sm:[&>*:last-child]:border-b-0 sm:[&>*:last-child]:border-r-0">
        {incentiveData.map((item, index) => (
          <CardIncentive
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            schemaType={item.schemaType}
            itemProp={item.itemProp}
            position={index + 1}
          />
        ))}
      </div>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": incentiveData.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
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

export default React.memo(Incentives)