import React, { useMemo } from 'react';
import CardIncentive from './components/CardIncentive';
import incentiveData from '../../data/incentives/incentivesData.json';

const Incentives = () => {
  const schemaMarkup = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Beneficios y Ventajas de Wow Bao",
    "description": "Descubre las ventajas exclusivas de nuestros productos y servicios",
    "url": "https://www.wowbao.com.ar",
    "logo": {
      "@type": "ImageObject",
      "url": "https://res.cloudinary.com/.../TdesignBread_1_tggczo.png",
      "width": "128",
      "height": "128"
    },
    "itemListElement": incentiveData.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.title,
      "description": item.description,
      "image": item.image || "https://www.wowbao.com.ar/logo.png",
      "item": {
        "@type": item.schemaType || "Intangible",
        "name": item.title,
        "description": item.description,
        "image": item.image,
        "recognizingAuthority": {
          "@type": "Organization",
          "name": "Wow Bao"
        },
        "category": item.category || "FoodService"
      }
    }))
  }), [incentiveData]);

  const incentivesList = useMemo(() => (
    incentiveData.map((item, index) => (
      <CardIncentive
        key={`incentive-${index}`}
        icon={item.icon}
        title={item.title}
        description={item.description}
        schemaType={item.schemaType}
        itemProp={item.itemProp}
        position={index + 1}
      />
    ))
  ), [incentiveData]);

  return (
    <section
      aria-labelledby="incentives-heading"
      className="mx-auto py-0 flex flex-col sm:flex-row justify-center bg-transparent border-0"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <h2 id="incentives-heading" className="sr-only">
        Beneficios y ventajas
      </h2>

      <div className="flex flex-col flex-1 divide-y divide-gray-200 dark:divide-gray-950 [&>*:last-child]:border-b- [&>*:last-child]:mb-0 [&>*:last-child]:pb-0
        sm:flex-row sm:divide-y-0 sm:divide-x sm:[&>*:last-child]:border-b-0 sm:[&>*:last-child]:border-r-0"
      >
        {incentivesList}
      </div>

      {/* Schema Markup optimizado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </section>
  );
};

export default React.memo(Incentives);