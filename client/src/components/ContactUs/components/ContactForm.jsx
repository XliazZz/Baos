import React, { useRef, useState } from 'react';
import FormInput from './FormInput';
import { sendEmailService } from '../../../services/emailService';
import { business } from '../../../data/business';

// 10 dígitos (11 6457-6321) hasta 13 (+54 9 11 ... / 011 15 ...); se ignoran espacios, guiones y "+"
const isValidPhone = (phone) => /^\d{10,13}$/.test(phone.replace(/\D/g, ''));

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user_name, user_phone } = form.current;

    if (!isValidPhone(user_phone.value)) {
      setStatus({ type: 'error', field: 'phone', message: 'Revisá el teléfono: ingresalo con código de área, por ejemplo 11 1234-5678.' });
      user_phone.focus();
      return;
    }

    setStatus({ type: 'sending', message: 'Enviando…' });
    try {
      await sendEmailService(form.current);
      setStatus({ type: 'success', message: `¡Gracias, ${user_name.value}! Recibimos tu mensaje y te contactamos pronto.` });
      form.current.reset();
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setStatus({ type: 'error', message: `No pudimos enviar el mensaje. Escribinos a ${business.email} o por WhatsApp.` });
    }
  };

  const isSending = status.type === 'sending';

  return (
    <form ref={form} onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
      <FormInput id="name" name="user_name" label="Nombre" autoComplete="name" required />
      <FormInput
        id="phone"
        name="user_phone"
        label="Teléfono"
        type="tel"
        autoComplete="tel"
        placeholder="11 1234-5678"
        aria-invalid={status.field === 'phone'}
        aria-describedby="form-status"
        required
      />
      <FormInput id="email" name="user_email" label="Email" type="email" autoComplete="email" className="sm:col-span-2" required />
      <FormInput
        id="message"
        name="message"
        label="Mensaje"
        textarea
        rows="5"
        placeholder="Contanos sobre tu restaurante, qué variedades te interesan y qué volumen necesitás."
        className="sm:col-span-2"
        required
      />

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary disabled:opacity-60" disabled={isSending}>
          {isSending ? 'Enviando…' : 'Enviar mensaje'}
        </button>
        <p
          id="form-status"
          role="status"
          className={`text-sm font-semibold ${status.type === 'error' ? 'text-accent' : 'text-ink'}`}
        >
          {status.type === 'sending' ? '' : status.message}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
