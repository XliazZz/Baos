import emailjs from '@emailjs/browser';

export const sendEmailService = async (form, userEmail, userName, userPhone) => {
  return emailjs.sendForm(
    import.meta.env.VITE_SERVICEID,
    import.meta.env.VITE_TEMPLATEID,
    form.current,
    import.meta.env.VITE_PUBLICKEY,
    {
      reply_to: userEmail,
      from_name: userName,
      user_phone: userPhone
    }
  );
}