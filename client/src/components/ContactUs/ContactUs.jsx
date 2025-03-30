import React from 'react'
import Header from '../Header/Header'
import LiContact from './components/LiContact'
import FormInput from './components/FormInput'

const ContactUs = () => {

  const liData = [
    { icon: "icon-[mynaui--location]", title: "Ubicación", subtitle: "Villa Luro", optional: "Buenos Aires, Argentina" },
    { icon: "icon-[mynaui--telephone]", title: "Contáctanos", subtitle: "Teléfono: +1 (123) 456-7890", optional: "Correo: tailnext@gmail.com" },
    { icon: "icon-[mynaui--clock-circle]", title: "Horario de Atención", subtitle: "Lunes a Viernes: 08:00 - 17:00" },
  ]

  return (
    <>
      <Header
        title={"Contáctanos"}
        description={
          <>
            ¿Tienes preguntas o necesitas más información? Estamos aquí para ayudarte. Escríbenos a través del formulario o utiliza los datos de contacto que encontrarás a continuación.
          </>
        }
      />

      <div className="flex items-stretch justify-center">
        <div className="grid md:grid-cols-2 items-end gap-20 sm:gap-4">
          <div className="h-full pr-6 text-start">
            <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400 
            sm:mt-0 sm:mb-6
            lg:text-xl
            xl:text-lg">
              No dudes en comunicarte con nosotros. Estamos aquí para responder tus preguntas y ayudarte en lo que necesites.
            </p>
            <ul className="mb-6  
              sm:grid sm:grid-cols-2 sm:gap-2 sm:my-auto sm:mt-7 
              md:mb-0 md:grid-cols-1 md:gap-2
              xl:mt-10"
            >
              {liData.map((item, index) => (
                <LiContact
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  optional={item.optional}
                />
              ))}
            </ul>
          </div>

          <div className="card h-fit max-w-6xl self-start" id="form">
            <h2 className="mb-4 text-2xl font-bold dark:text-white text-black">
              Envíanos un mensaje
            </h2>

            <form id="contactForm">
              <div className="mb-6">
                <div className="mx-0 mb-1 sm:mb-4">
                  <FormInput id={"name"} type="text" autoComplete="name" placeholder="Tu nombre completo" />
                  <FormInput id={"email"} type="email" autoComplete="email" placeholder="Tu correo electrónico" />
                </div>
                <FormInput id={"textarea"} type={"textarea"} placeholder="Escribe tu mensaje aquí..." textarea={true} />
              </div>
              <div className="text-center">
                <button type="submit" className="w-full bg-indigo-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0 sm:text-lg md:text-base lg:text-xl xl:text-base">Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default ContactUs
