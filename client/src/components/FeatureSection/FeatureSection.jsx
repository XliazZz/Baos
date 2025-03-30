import React from 'react'
import CardSection from './components/CardSection'

const FeatureSection = () => {

  const featureData = [
    { title: 'Calidad', description: 'Elaborados con los mejores ingredientes, garantizando una textura suave y un sabor auténtico en cada bocado.', icon: 'icon-[prime--star]' },
    { title: 'Artesanal', description: 'Cada pan bao es hecho a mano, con dedicación y pasión, asegurando un producto único que destaca por su sabor y calidad.', icon: 'icon-[solar--chef-hat-outline]' },
    { title: 'Confianza', description: 'Nuestros clientes confían en la calidad y frescura de nuestros productos, elaborados con pasión y dedicación.', icon: 'icon-[ph--handshake-light]' },
    { title: 'Vendidos', description: 'Mas de 1000 panes bao vendidos a la semana, siendo el favorito de la comunidad local y visitantes.', icon: 'icon-[bx--bar-chart]' }
  ]

  return (
    <div
      className="grid items-center
        lg:grid lg:grid-cols-4 lg:gap-16
        xl:gap-24">
      <div className="col-span-2 mb-8">
        <p className="text-lg font-medium text-indigo-500 dark:text-indigo-500 
        sm:text-xl 
        md:text-xl
        lg:text-2xl">
          El Sabor que Te Encantará
        </p>

        <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white 
          sm:text-3xl
          md:text-3xl 
          lg:font-extrabold">
          Esponjosidad, frescura y tradición en cada bocado
        </h2>

        <p className="font-light text-gray-500 dark:text-gray-400 
          sm:text-xl sm:font-medium 
          md:w-[95%] md:mx-auto md:font-normal
          lg:w-full lg:font-light
          xl:font-normal xl:w-full xl:text-lg xl:text-gray-600"
        >
          Nuestros panes bao son el favorito de la comunidad, con una textura suave y un sabor auténtico que te transporta a la esencia de nuestra cocina. Hechos con pasión y los mejores ingredientes, cada bocado es una experiencia única.
        </p>
      </div>

      <div className="col-span-2 space-y-8 text-start 
        sm:space-y-5
        md:grid md:grid-cols-2 md:gap-14 md:space-y-0 md:mt-5
        lg:gap-x-16">
        {featureData.map((feature, index) => (
          <CardSection key={index} title={feature.title} description={feature.description} icon={feature.icon} />
        ))}
      </div>
    </div>
  )
}

export default FeatureSection;