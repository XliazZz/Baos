import React from 'react'
import CardAbout from './components/CardAbout'
import ButtonAbout from './components/ButtonAbout';
import Header from '../Header/Header';

const AboutUs = ({ handlerScrollSection }) => {
  const [activeId, setActiveId] = React.useState(0);

  const dataAbout = [
    {
      header: "La Magia de Nuestros Baos",
      image: "https://i.pinimg.com/originals/5b/0f/b1/5b0fb11010e4c97f24bb65ede1090f43.jpg",
      title: "Baos Artesanales - Tailandeses Gua Bao (กัวเปา)",
      description: "Panecillos tailandeses Gua Bao, también conocidos simplemente como Bao ('envolver').",
      description2: "Un pan suave y esponjoso diseñado para abrazar una infinidad de sabores, transportándote con cada bocado hasta Tailandia.",
      description3: "Elaborados artesanalmente y cocinados al vapor con ingredientes de alta calidad. ¡Una vez que los pruebes, te encantarán!",
      id: 0,
      buttonText: "Ver Productos",
      idRef: 'sectionProductsCollection'
    },
    {
      header: "Conócenos",
      image: "https://th.bing.com/th/id/OIP.1YHv4mQVThAYbW0ih787tQHaD0?rs=1&pid=ImgDetMain",
      title: "Panificadora Andina SA",
      description: "Somos los únicos fabricantes especializados en panes Bao, combinando tradición y calidad en cada uno de nuestros productos.",
      description2: "Nuestra fábrica, ubicada en Milton 462, Villa Luro, CABA, nos permite garantizar la frescura y excelencia de nuestros baos.",
      description3: "Los entregamos congelados para conservar su textura y sabor, con servicio de delivery disponible en toda CABA.",
      id: 1,
      buttonText: "Contáctanos",
      idRef: 'sectionContactUs'
    }
  ];

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
            {dataAbout.map((item) => (
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

        {dataAbout
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
          "image": dataAbout[0].image,
          "url": window.location.href
        })}
      </script>
    </main>
  )
}

export default AboutUs