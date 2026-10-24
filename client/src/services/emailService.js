import emailjs from '@emailjs/browser';

// El template de EmailJS usa los "name" del formulario: user_name, user_phone, user_email, message
export const sendEmailService = (formElement) =>
  emailjs.sendForm(
    import.meta.env.VITE_SERVICEID,
    import.meta.env.VITE_TEMPLATEID,
    formElement,
    { publicKey: import.meta.env.VITE_PUBLICKEY }
  );
