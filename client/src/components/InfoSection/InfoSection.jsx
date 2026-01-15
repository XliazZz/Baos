import React, { useMemo } from 'react';
import CardInfo from './components/CardInfo';
import infoData from '../../data/infoSection/infoData.json';

const InfoSection = () => {
  const schemaMarkup = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Panificadora Andina SA",
    "description": "Fabricantes especializados en panes Gua Bao artesanales",
    "logo": {
      "@type": "ImageObject",
      "url": "https://res.cloudinary.com/.../TdesignBread_1_tggczo.png",
      "width": "128",
      "height": "128"
    },
    "url": "https://www.wowbao.com.ar",
    "priceRange": "$$",
    "telephone": "+54 11 6457-6321",
    "email": "panificadoraandinasa@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Milton 462",
      "addressLocality": "Villa Luro",
      "addressRegion": "CABA",
      "addressCountry": "AR",
      "postalCode": "1407"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-34.632980",
      "longitude": "-58.498931"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61577301479995",
      "https://www.instagram.com/panificadora_andina/",
    ]
  }), []);

  const infoCards = useMemo(() => (
    infoData.map((item, index) => (
      <CardInfo
        key={`info-${index}`}
        title={item.title}
        description1={item.description1}
        description2={item.description2}
        icon={item.icon}
        schemaType={item.schemaType}
        itemProp={item.itemProp}
      />
    ))
  ), [infoData]);

  return (
    <section
      id="contact-info"
      className="px-2 space-y-6 max-w-5xl mx-auto 
        sm:space-y-0 sm:p-0
        xl:pt-0 xl:space-y-0 indigo-100"
      itemScope
      itemType="https://schema.org/LocalBusiness"
      aria-labelledby="contact-info-heading"
    >
      <h2 id="contact-info-heading" className="sr-only">
        Información de contacto y ubicación
      </h2>

      <div className="mx-auto grid justify-center 
        sm:grid-cols-1 
        md:max-w-[64rem] md:grid-cols-3"
      >
        {infoCards}
      </div>

      {/* Schema Markup optimizado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    </section>
  );
};

export default React.memo(InfoSection);