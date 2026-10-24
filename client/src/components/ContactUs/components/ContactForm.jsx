import React, { useRef, useState } from 'react';
import FormInput from './FormInput';
import { sendEmailService } from '../../../services/emailService';
import { business } from '../../../data/business';
import { track } from '../../../utils/analytics';

// 10 dígitos (11 6457-6321) hasta 13 (+54 9 11 ... / 011 15 ...); se ignoran espacios, guiones y "+"
const isValidPhone = (phone) => /^\d{10,13}$/.test(phone.replace(/\D/g, ''));

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user_name, user_phone, website } = form.current;

    // Trampa para bots: el campo "website" es invisible para personas; si viene completo, se descarta en silencio
    if (website.value) {
      setStatus({ type: 'success', message: '¡Gracias! Recibimos tu mensaje.' });
      form.current.reset();
      return;
    }

    if (!isValidPhone(user_phone.value)) {
      setStatus({ type: 'error', field: 'phone', message: 'Revisá el teléfono: ingresalo con código de área, por ejemplo 11 1234-5678.' });
      user_phone.focus();
      return;
    }

    setStatus({ type: 'sending', message: 'Enviando…' });
    try {
      await sendEmailService(form.current);
      track('generate_lead', { method: 'form' });
      setStatus({ type: 'success', message: `¡Gracias, ${user_name.value}! Recibimos tu mensaje y te contactamos pronto.` });
      form.current.reset();
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setStatus({ type: 'error', message: `No pudimos enviar el mensaje. Escribinos a ${business.email} o por WhatsApp.` });
    }
  };

  const isSending = status.type === 'sending';

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
      <div className="absolute -left-[9999px] size-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Sitio web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput id="name" name="user_name" label="Nombre y apellido" autoComplete="name" placeholder="Ej: Juan Pérez" required />
        <FormInput
          id="phone"
          name="user_phone"
          label="Teléfono (WhatsApp)"
          type="tel"
          autoComplete="tel"
          placeholder="11 1234-5678"
          aria-invalid={status.field === 'phone'}
          aria-describedby="form-status"
          required
        />
      </div>
      <FormInput id="email" name="user_email" label="Email" type="email" autoComplete="email" placeholder="tu-email@restaurante.com" required />
      <FormInput
        id="message"
        name="message"
        label="Mensaje sobre tu restaurante o local"
        textarea
        rows="4"
        placeholder="Contanos qué local tenés, en qué barrio estás y qué variedades te gustaría probar..."
        required
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-brand-600 py-4 text-base font-bold text-white shadow-md transition hover:bg-brand-700 dark:hover:bg-brand-500 hover:shadow-lg disabled:opacity-60"
        disabled={isSending}
      >
        {isSending ? 'Enviando…' : 'Enviar mensaje a la fábrica'}
      </button>
      <p
        id="form-status"
        role="status"
        className={`text-center text-sm font-semibold empty:hidden ${status.type === 'error' ? 'text-brand-700' : 'text-emerald-700'}`}
      >
        {status.type === 'sending' ? '' : status.message}
      </p>
      <p className="mt-2 text-center text-[11px] text-stone-500">Usamos tus datos solo para responder tu consulta. No hacemos spam.</p>
    </form>
  );
};

export default ContactForm;
