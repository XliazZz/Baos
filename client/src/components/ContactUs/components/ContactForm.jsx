import React from "react";
import FormInput from './FormInput'

const ContactForm = React.memo(({ onSubmit, ref }) => (
  <form
    ref={ref}
    id="contactForm"
    onSubmit={onSubmit}
    itemScope
    itemType="https://schema.org/ContactPage"
  >
    <div className="mb-6 sm:mb-2">
      <div className="mx-0 mb-1 sm:mb-4">
        <div className='flex flex-col sm:flex-row gap-2'>
          <div className='w-full sm:w-1/"'>
            <FormInput
              id="name"
              type="text"
              name="user_name"
              autoComplete="name"
              placeholder="Tu nombre completo"
              itemProp="name"
              required
            />
          </div>
          <div className='w-full sm:w-1/"'>
            <FormInput
              id="phone"
              type="tel"
              name="user_phone"
              autoComplete="tel"
              placeholder="Tu número de teléfono (10 dígitos)"
              itemProp="telephone"
              pattern="[0-9]{10}"
              title="Por favor ingresa exactamente 10 dígitos numéricos"
              required
            />
          </div>
        </div>
        <FormInput
          id="email"
          type="email"
          name="user_email"
          autoComplete="email"
          placeholder="Tu correo electrónico"
          itemProp="email"
          required
        />
      </div>
      <FormInput
        id="message"
        name="message"
        type="textarea"
        placeholder="Escribe tu mensaje aquí..."
        textarea={true}
        itemProp="description"
        required
      />
    </div>
    <div className="text-center">
      <button
        type="submit"
        className="w-full bg-indigo-800 text-white px-6 py-3 font-xl rounded-sm font-semibold border border-indigo-800 cursor-pointer
          hover:bg-white hover:text-indigo-800 hover:border-indigo-800 transition-all duration-500 ease-in-out
          dark:hover:bg-gray-900 dark:hover:text-indigo-50 
          sm:mb-0 sm:text-base sm:py-3 sm:px-4
          md:text-base 
          lg:text-lg lg:py-2 
          xl:text-base
          2xl:text-lg 2xl:py-3 2xl:px-6"
        itemProp="potentialAction"
      >
        Enviar mensaje
      </button>
    </div>
  </form>
))

export default ContactForm;