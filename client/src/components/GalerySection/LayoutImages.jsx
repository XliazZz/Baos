import React from 'react'
import Header from '../Header/Header'

const LayoutImages = ({ images }) => {
  return (
    <>
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
    </>
  )
}

export default LayoutImages

//AGREGAR MODAL PARA VER IMAGENES EN GRANDE y SOMBRA O ALGO