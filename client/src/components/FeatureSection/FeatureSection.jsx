import React from 'react'

const FeatureSection = () => {
  return (
    <div className="h-full w-full bg-indigo-50 dark:bg-gray-800">
      <div
        className="max-w-screen-xl items-center mx-auto px-4 py-12 w-full
        sm:px-6 sm:py-12 
        lg:grid lg:grid-cols-4 lg:gap-16 lg:py-10 lg:px-8
        xl:gap-24 xl:py-24">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-indigo-500 dark:text-indigo-500">El Sabor Local que Te Encantará</p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            Esponjosidad, frescura y tradición en cada bocado
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Nuestros panes bao son el favorito de la comunidad local, con una textura suave y un sabor auténtico que te transporta a la esencia de nuestra cocina. Hechos con pasión y los mejores ingredientes, cada bocado es una experiencia única.</p>

        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 text-start">
          <div>
            <p className="icon-[prime--star] w-10 h-10 mb-0 text-indigo-500 md:w-12 md:h-12 dark:text-indigo-500" role="img" aria-hidden="true" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white text-black">Calidad</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">Elaborados con los mejores ingredientes, garantizando una textura suave y un sabor auténtico en cada bocado.</p>
          </div>
          <div>
            <p className="icon-[solar--chef-hat-outline] w-10 h-10 mb-0 text-indigo-500 md:w-12 md:h-12 dark:text-indigo-500" role="img" aria-hidden="true" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white text-black">Artesanal</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">Cada pan bao es hecho a mano, con dedicación y pasión, asegurando un producto único que destaca por su sabor y calidad.</p>
          </div>
          <div>
            <p className="icon-[ph--handshake-light] w-10 h-10 mb-0 text-indigo-500 md:w-12 md:h-12 dark:text-indigo-500" role="img" aria-hidden="true" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white text-black">Confianza</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">Nuestros clientes confían en la calidad y frescura de nuestros productos, elaborados con pasión y dedicación.
            </p>
          </div>
          <div>
            <p className="icon-[bx--bar-chart] w-10 h-10 mb-0 text-indigo-500 md:w-12 md:h-12 dark:text-indigo-500" role="img" aria-hidden="true" />
            <h3 className="mb-2 text-2xl font-bold dark:text-white text-black">Vendidos</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">Mas de 1000 panes bao vendidos a la semana, siendo el favorito de la comunidad local y visitantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
