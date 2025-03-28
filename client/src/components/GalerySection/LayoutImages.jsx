import React from 'react'
import Header from '../Header/Header'

const LayoutImages = ({ images }) => {
  return (
    <div className="h-full w-full bg-white items-center flex justify-center">
      <div className="max-w-screen-xl px-4 py-12  w-full
      sm:px-6 sm:py-12 
      lg:px-8 
      xl:py-24">

        <Header
          title={"Galería de Fotos"}
          description={
            <>
              Explora nuestra <span className='font-semibold'>galería exclusiva</span> con imágenes de alta calidad que capturan la esencia de nuestros deliciosos panes bao. Cada foto refleja la <span className='font-semibold'>textura suave</span> y <span className='font-semibold'>autenticidad</span> de nuestros productos.
            </>
          }
          subtitle={"¡Descubre más sobre nuestros panes bao!"}
        />


        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full ${index === 0 ? 'h-full' : 'h-48'
                  } object-cover`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LayoutImages

//AGREGAR MODAL PARA VER IMAGENES EN GRANDE y SOMBRA O ALGO