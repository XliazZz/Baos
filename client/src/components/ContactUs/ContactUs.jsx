import React from 'react'
import Header from '../Header/Header'
import LiContact from './components/LiContact'
import FormInput from './components/FormInput'

const ContactUs = () => {

  const liData = [
    { icon: "location", title: "Ubicación", subtitle: "Villa Luro", optional: "Buenos Aires, Argentina" },
    { icon: "telephone", title: "Contáctanos", subtitle: "Teléfono: +1 (123) 456-7890", optional: "Correo: tailnext@gmail.com" },
    { icon: "clock-circle", title: "Horario de Atención", subtitle: "Lunes a Viernes: 08:00 - 17:00" },
  ]

  return (
    <section className="h-full w-full bg-indigo-50 items-center flex justify-center" id="contact">
      <div className="max-w-screen-xl px-4 py-12 w-full
      sm:px-6 sm:py-12 
      lg:px-8 
      xl:py-24">
        <Header
          title={"Contáctanos"}
          description={
            <>
              ¿Tienes preguntas o necesitas más información? Estamos aquí para ayudarte. Escríbenos a través del formulario o utiliza los datos de contacto que encontrarás a continuación.
            </>
          }
        />

        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 items-end gap-20">
            <div className="h-full pr-6 text-start">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                No dudes en comunicarte con nosotros. Estamos aquí para responder tus preguntas y ayudarte en lo que necesites.
              </p>
              <ul className="mb-6 md:mb-0 ">
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

            <div className="card h-fit max-w-6xl self-end" id="form">
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
                  <button type="submit" className="w-full bg-indigo-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Enviar mensaje</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactUs
