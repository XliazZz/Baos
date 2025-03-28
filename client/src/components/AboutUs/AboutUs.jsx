import React from 'react'
import CardAbout from './CardAbout'
import ButtonAbout from './ButtonAbout';
import Header from '../Header/Header';

const AboutUs = ({ handlerScrollSection }) => {
  const [activeId, setActiveId] = React.useState(0);

  const dataAbout = [
    {
      header: "Descubre la Magia de Nuestros Baos",
      image: "https://i.pinimg.com/originals/5b/0f/b1/5b0fb11010e4c97f24bb65ede1090f43.jpg",
      title: "Baos Artesanales - Tailandeses Gua Bao (กัวเปา)",
      description: "Panecillos tailandeses Gua Bao, también conocidos simplemente como Bao (‘envolver’).",
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
    <section className='h-full w-full bg-gray-50 items-center flex justify-center'>
      <div className="max-w-screen-xl px-4 py-12 w-full
      sm:px-6 sm:py-12 
      lg:px-8 
      xl:py-24">
        <Header
          title={"Sobre Nosotros"}
          description={
            <>
              Sumérgete en el mundo de los auténticos <span className="font-semibold">Baos al vapor</span>. Hechos con los <span className="font-semibold">mejores ingredientes</span>, su suavidad y sabor te transportarán a <span className="font-semibold">Tailandia</span> con cada bocado.
            </>
          }
        />

        <div>
          <div className='flex justify-center space-x-10 mt-10'>
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

          <div className='mt-16'>
            {dataAbout
              .filter((item) => item.id === activeId)
              .map((item) => (
                <CardAbout
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  description2={item.description2}
                  description3={item.description3}
                  buttonText={item.buttonText}
                  handlerScrollSection={handlerScrollSection}
                  idRef={item.idRef}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
