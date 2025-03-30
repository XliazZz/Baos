import React from 'react'
import CardIncentive from './components/CardIncentive'

const Incetives = () => {
  const incetiveData = [
    { title: "Abastecimiento Sin Interrupciones", description: "Garantizamos entregas puntuales y consistentes para que siempre tengas stock de panes bao frescos.", icon: "icon-[material-symbols--inventory-2-outline]" },
    { title: "Precios Competitivos", description: "Ofrecemos precios al por mayor que te permiten obtener márgenes de ganancia atractivos.", icon: "icon-[ri--price-tag-3-line]" },
    { title: "Aumenta tu Oferta Gastronómica", description: "Con nuestros panes bao, puedes diversificar tu menú y atraer a más clientes interesados en sabores únicos.", icon: "icon-[lineicons--stats-up]" }

  ]

  return (
    <div className="mx-auto divide-y divide-gray-200 lg:py-0 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x">
      {incetiveData.map((item, index) => (
        <CardIncentive
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
      )
    </div>
  )
}

export default Incetives
