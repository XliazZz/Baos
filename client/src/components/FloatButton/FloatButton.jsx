import React from 'react';

const FloatButton = () => {
  const phoneNumber = '1164576321';
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text&type=phone_number&app_absent=0`;

  return (
    <div className="fixed bottom-5 right-3 z-50 sm:bottom-5 sm:right-5 md:bottom-7 md:right-5 lg:bottom-9 lg:right-9 xl:bottom-10 xl:right-10 transition-all duration-300 ease-in-out">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
        aria-label="Contactar por WhatsApp"
      >
        <span class="icon-[logos--whatsapp-icon] size-8"></span>
      </a>
    </div>
  );
};

export default FloatButton;