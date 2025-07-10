import React, { useRef, useMemo, useCallback } from 'react';
import Header from '../Header/Header';
import LiContact from './components/LiContact';
import Swal from "sweetalert2";
import ContactForm from './components/ContactForm';
import { validatePhoneShow, loadingMessage, successMessage, errorMessage } from '../../utils/notifications';
import { sendEmailService } from '../../services/emailService';
import contactUsData from '../../data/contactUs/contactUsData.json';

const ContactUs = () => {
  const form = useRef();

  const validatePhone = useMemo(() => (phone) => /^\d{10}$/.test(phone), []);

  const schemaData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Panificadora Andina S.A.",
    "url": "https://www.wowbao.com.ar",
    "description": "Panadería artesanal. Calidad y sabor en cada producto. 🥖",
    "logo": {
      "@type": "ImageObject",
      "url": "https://res.cloudinary.com/.../TdesignBread_1_tggczo.png",
      "width": "128",
      "height": "128"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Milton 462",
      "addressLocality": "Villa Luro",
      "addressRegion": "CABA",
      "addressCountry": "AR",
      "postalCode": "1407"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-34.632980",
      "longitude": "-58.498931"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+54 11 6457-6321",
      "email": "panificadoraandinasa@gmail.com",
      "contactType": "customer service",
      "availableLanguage": "es"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://facebook.com/panificadoraandina",
      "https://instagram.com/panificadoraandina"
    ]
  }), []);

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();

    const phone = form.current.user_phone.value;
    if (!validatePhone(phone)) {
      validatePhoneShow();
      return;
    }

    try {
      await loadingMessage();

      await sendEmailService(
        form,
        form.current.user_email.value,
        form.current.user_name.value,
        form.current.user_phone.value
      );

      Swal.close();

      await successMessage(
        form.current.user_name.value,
        form.current.user_phone.value,
        form.current.user_email.value,
        form.current
      );

      form.current.reset();

    } catch (error) {
      console.error('Error al enviar el email:', error);
      errorMessage();
    }
  }, [validatePhone]);

  const contactList = useMemo(() => (
    contactUsData.map((item, index) => (
      <LiContact
        key={`contact-${index}`}
        icon={item.icon}
        title={item.title}
        subtitle={item.subtitle}
        optional={item.optional}
        schemaType={item.schemaType}
        itemProp={item.itemProp}
      />
    ))
  ), [contactUsData]);

  return (
    <section itemScope itemType="https://schema.org/LocalBusiness">
      <Header
        title="Contáctanos"
        description={
          <>
            ¿Tienes preguntas o necesitas más información? Estamos aquí para ayudarte. Escríbenos a través del formulario o utiliza los datos de contacto que encontrarás a continuación.
          </>
        }
      />

      <div className="flex items-stretch justify-center">
        <div className="grid md:grid-cols-2 items-end gap-5 sm:gap-4">
          <div className="h-full pr-6 text-start">
            <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400 
              sm:my-auto sm:mb-6 sm:text-[17px] sm:font-light sm:text-gray-800
              md:text-lg
              lg:text-lg
              xl:text-lg
              2xl:text-xl"
              itemProp="description"
            >
              No dudes en comunicarte con nosotros. Estamos aquí para responder tus preguntas y ayudarte en lo que necesites.
            </p>
            <ul className="mb-6  
              sm:grid sm:grid-cols-2 sm:gap-2 sm:my-auto  
              md:mb-0 md:grid-cols-1 md:gap-2
              xl:mt-10"
            >
              {contactList}
            </ul>
          </div>

          <div className="card h-fit max-w-6xl self-start" id="form">
            <h2 className="mb-4 text-2xl font-bold dark:text-white text-black
              sm:text-xl
              2xl:text-2xl">
              Envíanos un mensaje
            </h2>
            <ContactForm
              ref={form}
              onSubmit={sendEmail}
            />
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </section>
  );
};

export default React.memo(ContactUs);