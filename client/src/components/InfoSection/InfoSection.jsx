import React, { useMemo } from 'react';
import CardInfo from './components/CardInfo';
import infoData from '../../data/infoSection/infoData.json';

const InfoSection = () => {
  const schemaMarkup = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Panificadora Andina SA",
    "image": "", // Agrega URL de tu logo
    "email": "panificadoraandinasa@gmail.com",
    "telephone": "+54 11 4888-4304",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Milton 409",
      "addressLocality": "Villa Luro",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "url": typeof window !== 'undefined' ? window.location.href : ''
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