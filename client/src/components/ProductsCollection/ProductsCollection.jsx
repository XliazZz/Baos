import React from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'

const ProductsCollection = () => {
  const dataBao = [
    { title: "Pan Bao Tradicional", description: "Clásico pan bao al vapor, esponjoso y suave, perfecto para rellenar con tus ingredientes favoritos", id: 1, image: "https://th.bing.com/th/id/OIP.8b64JwdG0LSJbwKsoMRNRQHaFj?rs=1&pid=ImgDetMain" },
    { title: "Pan Bao Integral", description: "Pan bao al vapor hecho con harina integral, una opción más saludable y con más fibra", id: 2, image: "https://sushisesamo.cl/wp-content/uploads/2023/11/paobao-pollo.jpg" },
    { title: "Pan Bao de Sésamo", description: "Pan bao al vapor con semillas de sésamo, añadiendo un toque crujiente y un sabor único", id: 3, image: "https://www.fansdelvacuno.es/wp-content/uploads/2019/10/77A4058-RET.jpg" },
    { title: "Pan Bao de Espinaca", description: "Pan bao al vapor con espinaca, aportando un color verde vibrante y nutrientes adicionales", id: 4, image: "https://razaitaliana.com/wp-content/uploads/2021/12/Pan-arabe-1536x1008.jpg" }
  ]

  return (
    <section className='h-full w-full bg-white items-center flex justify-center'>
      <div className="max-w-screen-xl px-4 py-12 w-full
      sm:px-6 sm:py-12 
      lg:px-8 
      xl:py-24">
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
        <ul className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {
            dataBao.map((item) => (
              <li key={item.id}>
                <Card title={item.title} description={item.description} image={item.image} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default ProductsCollection
