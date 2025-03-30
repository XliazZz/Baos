import React from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'

const ProductsCollection = () => {
  const dataBao = [
    { title: "Pan Bao Tradicional", description: "Clásico pan bao al vapor, esponjoso y suave, perfecto para rellenar con tus ingredientes favoritos", id: 1, image: "https://th.bing.com/th/id/OIP.8b64JwdG0LSJbwKsoMRNRQHaFj?rs=1&pid=ImgDetMain", gr: "40gr", size: "10cm" },
    { title: "Pan Bao Integral", description: "Pan bao al vapor hecho con harina integral, una opción más saludable y con más fibra", id: 2, image: "https://sushisesamo.cl/wp-content/uploads/2023/11/paobao-pollo.jpg", gr: "40gr", size: "10cm" },
    { title: "Pan Bao de Sésamo", description: "Pan bao al vapor con semillas de sésamo, añadiendo un toque crujiente y un sabor único", id: 3, image: "https://www.fansdelvacuno.es/wp-content/uploads/2019/10/77A4058-RET.jpg", gr: "40gr", size: "10cm" },
    { title: "Pan Bao de Espinaca", description: "Pan bao al vapor con espinaca, aportando un color verde vibrante y nutrientes adicionales", id: 4, image: "https://razaitaliana.com/wp-content/uploads/2021/12/Pan-arabe-1536x1008.jpg", gr: "90gr", size: "20cm" },
  ]

  return (
    <>
      <Header
        title={"Menú de Panes"}
        description={
          <>
            Explora nuestra selección de panes bao al vapor, hechos con ingredientes de la más alta calidad.
            Su <span className="font-semibold">textura esponjosa</span> y su <span className="font-semibold">sabor auténtico</span> te transportarán con cada bocado.
          </>
        }
        subtitle={"¡Descubre tu favorito y disfruta la experiencia!"}
      />
      <ul className='mt-10 grid gap-4 
        sm:grid-cols-2 sm:gap-6  
        md:mt-8
        lg:grid-cols-3
        xl:grid-cols-4 xl:gap-6'
      >
        {
          dataBao.map((item) => (
            <li key={item.id}>
              <Card title={item.title} description={item.description} image={item.image} gr={item.gr} size={item.size} />
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default ProductsCollection
