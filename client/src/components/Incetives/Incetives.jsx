import React from 'react'
import CardIncentive from './components/CardIncentive'
import incentiveData from '../../data/incentives/incentivesData.json';

const Incentives = () => {
  return (
    <section
      aria-labelledby="incentives-heading"
      className="mx-auto py-0 flex flex-col sm:flex-row justify-center bg-transparent border-0"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <h2 id="incentives-heading" className="sr-only">Beneficios y ventajas</h2>

      <div className="flex flex-col flex-1 divide-y divide-gray-200 dark:divide-gray-950 [&>*:last-child]:border-b- [&>*:last-child]:mb-0 [&>*:last-child]:pb-0
        sm:flex-row sm:divide-y-0 sm:divide-x sm:[&>*:last-child]:border-b-0 sm:[&>*:last-child]:border-r-0"
      >
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