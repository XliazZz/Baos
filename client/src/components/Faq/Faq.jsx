import React from 'react';
import Header from '../Header/Header';
import { business, terms, whatsappUrl } from '../../data/business';

const faqs = [
  {
    question: '¿Venden los baos rellenos?',
    answer: (
      <>
        No. Elaboramos y vendemos <strong>únicamente el pan bao al vapor</strong>, sin relleno, para que cada cocina le ponga
        sus propias recetas. Las fotos con relleno son ilustrativas.
      </>
    ),
  },
  {
    question: '¿Cómo se calientan en el servicio?',
    answer: (
      <>
        Directo del freezer, <strong>sin descongelar</strong>: en vaporera de bambú, vaporera industrial u horno mixto, durante
        unos minutos según el tamaño, hasta que estén suaves y calientes por dentro. Una vez descongelados, no se vuelven a congelar.
      </>
    ),
  },
  {
    question: '¿Envían muestras para probar en el local?',
    answer: `Sí. Te enviamos ${terms.samples} para que los pruebes en tu cocina. El envío se abona aparte.`,
  },
  {
    question: '¿Hacen envíos al interior del país?',
    answer: (
      <>
        Sí. Contratás un <strong>transporte refrigerado</strong> que salga desde Buenos Aires y nosotros llevamos los panes
        congelados hasta ese vehículo; desde ahí lo recibe tu local. Nuestra parte termina en la carga:{' '}
        <strong>el costo del transporte corre por tu cuenta</strong>.
      </>
    ),
  },
  {
    question: '¿Tienen opción apta para veganos?',
    answer: (
      <>
        Sí. El <strong>Pan Bao Vegano</strong> se elabora con ingredientes 100 % de origen vegetal y mantiene la misma textura
        suave y esponjosa que el tradicional.
      </>
    ),
  },
  {
    question: '¿Cómo hago mi primer pedido mayorista?',
    answer: (
      <>
        Escribinos por WhatsApp al <strong>{business.phone}</strong> o completá el formulario de abajo. Te pasamos la lista de
        precios vigente, tomamos tus datos de facturación y coordinamos la entrega.
      </>
    ),
  },
];

const Faq = () => (
  <section id="preguntas" className="border-t border-stone-200/80 bg-surface py-20">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="mb-14">
        <Header eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarnos los locales" chip="brand" center>
          ¿Tenés otra duda sobre tu cocina?{' '}
          <a
            href={whatsappUrl('Hola, tengo una consulta sobre los panes bao.')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand-600 dark:text-brand-400 underline decoration-brand-300 underline-offset-4 hover:text-brand-700"
          >
            Escribinos y te asesoramos
          </a>
          .
        </Header>
      </div>

      {/* name="faq": al abrir una pregunta se cierra la anterior, sin JS */}
      <div className="reveal space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} name="faq" className="group overflow-hidden rounded-2xl border border-stone-200 transition-all duration-200 hover:border-stone-300">
            <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 bg-stone-50/50 px-6 py-5 text-left hover:bg-stone-50 [&::-webkit-details-marker]:hidden">
              <span className="text-base font-bold text-stone-900">{faq.question}</span>
              <span className="shrink-0 text-2xl leading-none font-bold text-brand-600 dark:text-brand-400 transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="bg-surface px-6">
              <p className="border-t border-stone-100 py-4 text-sm leading-relaxed text-stone-600">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
