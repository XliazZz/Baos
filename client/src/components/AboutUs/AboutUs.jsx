import React, { useMemo } from 'react';
import CardAbout from './components/CardAbout';
import ButtonAbout from './components/ButtonAbout';
import Header from '../Header/Header';
import aboutData from '../../data/about/aboutData.json';

const AboutUs = ({ handlerScrollSection }) => {
  const [activeId, setActiveId] = React.useState(0);

  const activeContent = useMemo(() =>
    aboutData.find(item => item.id === activeId),
    [activeId]
  );

  const organizationSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Panificadora Andina SA",
    "description": "Fabricantes especializados en panes Bao artesanales tailandeses",
    "url": "https://www.wowbao.com.ar",
    "logo": {
      "@type": "ImageObject",
      "url": "https://res.cloudinary.com/.../TdesignBread_1_tggczo.png",
      "width": "128",
      "height": "128"
    },
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
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+54 11 6457-6321",
      "contactType": "customer service",
      "email": "panificadoraandinasa@gmail.com.ar",
      "availableLanguage": "es"
    },
    "foundingDate": "2023",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61577301479995",
      "https://www.instagram.com/panificadora_andina/",
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  }), []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header
        title="Sobre Nosotros"
        description={
          <>
            Sumérgete en el mundo de los auténticos <span className="font-semibold">Baos al vapor</span>. Hechos con los <span className="font-semibold">mejores ingredientes</span>, su suavidad y sabor te transportarán a <span className="font-semibold">Tailandia</span> con cada bocado.
          </>
        }
      />

      <section aria-labelledby="about-tabs-title" className="mt-8">
        <h2 id="about-tabs-title" className="sr-only">Secciones sobre nuestros Baos</h2>

        <div
          role="tablist"
          aria-label="Secciones de información sobre la empresa"
          className="flex flex-wrap justify-center gap-4 mt-0 sm:mt-0"
        >
          {aboutData.map((item) => (
            <ButtonAbout
              key={item.id}
              header={item.header}
              id={item.id}
              activeID={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>

        {activeContent && (
          <div
            key={activeContent.id}
            role="tabpanel"
            id={`panel-${activeContent.id}`}
            aria-labelledby={`tab-${activeContent.id}`}
            tabIndex="0"
            className="mt-8 animate-fadeIn"
          >
            <CardAbout
              {...activeContent}
              handlerScrollSection={handlerScrollSection}
            />
          </div>
        )}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </main>
  );
};

export default React.memo(AboutUs);