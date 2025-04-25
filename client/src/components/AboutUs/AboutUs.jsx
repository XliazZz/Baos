import React from 'react'
import CardAbout from './components/CardAbout'
import ButtonAbout from './components/ButtonAbout';
import Header from '../Header/Header';
import aboutData from '../../data/about/aboutData.json';

const AboutUs = ({ handlerScrollSection }) => {
  const [activeId, setActiveId] = React.useState(0);

  return (
    <main>
      <Header
        title="Sobre Nosotros"
        description={
          <>
            Sumérgete en el mundo de los auténticos <span className="font-semibold">Baos al vapor</span>. Hechos con los <span className="font-semibold">mejores ingredientes</span>, su suavidad y sabor te transportarán a <span className="font-semibold">Tailandia</span> con cada bocado.
          </>
        }
      />

      <section aria-labelledby="about-tabs-title">
        <h2 id="about-tabs-title" className="sr-only">Secciones sobre nuestros Baos</h2>

        <div role="tablist" aria-label="Secciones de información sobre la empresa">
          <div className='flex justify-center space-x-10 mt-0 sm:mt-0 sm:space-x-0'>
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
        </div>

        {aboutData
          .filter((item) => item.id === activeId)
          .map((item) => (
            <div
              key={item.id}
              role="tabpanel"
              id={`panel-${item.id}`}
              aria-labelledby={`tab-${item.id}`}
              tabIndex="0"
              className='mt-5 sm:mt-8'
            >
              <CardAbout
                image={item.image}
                title={item.title}
                description={item.description}
                description2={item.description2}
                description3={item.description3}
                buttonText={item.buttonText}
                handlerScrollSection={handlerScrollSection}
                idRef={item.idRef}
              />
            </div>
          ))}
      </section>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Panificadora Andina SA",
          "description": "Fabricantes especializados en panes Bao artesanales",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Milton 462",
            "addressLocality": "Villa Luro",
            "addressRegion": "CABA",
            "addressCountry": "AR"
          },
          "image": aboutData[0].image,
          "url": window.location.href
        })}
      </script>
    </main>
  )
}

export default AboutUs