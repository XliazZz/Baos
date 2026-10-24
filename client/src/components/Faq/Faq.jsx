import React from 'react';
import Header from '../Header/Header';
import { business, whatsappUrl } from '../../data/business';

const faqs = [
  {
    question: '¿Hacen entregas en toda CABA?',
    answer: 'Sí. Entregamos en cualquier barrio de la Ciudad de Buenos Aires y coordinamos con vos el día y el horario.',
  },
  {
    question: '¿Cómo llegan los baos y cómo se conservan?',
    answer: 'Llegan congelados, para mantener la textura y el sabor. Guardalos en el freezer y calentalos al vapor antes de servir.',
  },
  {
    question: '¿Tienen una opción vegana?',
    answer: 'Sí. El Pan Bao Vegano está elaborado con ingredientes 100 % de origen vegetal y es igual de esponjoso que el tradicional.',
  },
  {
    question: '¿Cómo hago mi primer pedido?',
    answer: `Escribinos por WhatsApp al ${business.phone} o completá el formulario de contacto. Respondemos de ${business.hours.toLowerCase()}.`,
  },
];

const Faq = () => (
  <section id="preguntas" className="section">
    <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <Header eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarnos">
          ¿Tenés otra duda?{' '}
          <a href={whatsappUrl('Hola, tengo una consulta sobre los panes bao.')} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline underline-offset-4">
            Escribinos
          </a>
          .
        </Header>
      </div>

      <div className="reveal divide-y divide-line border-y border-line lg:col-span-7">
        {faqs.map((faq) => (
          <details key={faq.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl font-semibold tracking-tight text-ink [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line transition-transform group-open:rotate-45">
                <span className="icon-[heroicons--plus-20-solid] size-5" aria-hidden="true" />
              </span>
            </summary>
            <p className="-mt-2 max-w-2xl pb-6">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
