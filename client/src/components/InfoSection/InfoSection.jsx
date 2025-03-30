import React from 'react'
import CardInfo from './components/CardInfo'

const InfoSection = () => {
  const infoData = [
    { title: "Contacto", description1: "panificadoraandinasa@gmail.com", description2: "+54 11 4888-4304", icon: "icon-[carbon--email]" },
    { title: "Horarios de Atención", description1: "Lunes a Viernes", description2: "De 8:00 a 17:00 horas", icon: "icon-[carbon--time]" },
    { title: "Ubicación", description1: "Villa Luro, Calle Milton 409", description2: "Buenos Aires, Argentina", icon: "icon-[carbon--location]" },
  ]

  return (
    <section id="features" class="px-2 space-y-6 max-w-5xl mx-auto 
      sm:space-y-0 sm:p-0
      xl:pt-0 xl:space-y-0 indigo-100">
      <div class="mx-auto grid justify-center 
      sm:grid-cols-1 
      md:max-w-[64rem] md:grid-cols-3">
        {infoData.map((item, index) => (
          <CardInfo
            key={index}
            title={item.title}
            description1={item.description1}
            description2={item.description2}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  )
}

export default InfoSection
