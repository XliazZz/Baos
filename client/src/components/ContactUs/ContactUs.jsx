import React from 'react';
import ContactForm from './components/ContactForm';
import { business, whatsappUrl } from '../../data/business';

const channels = [
  { label: 'Teléfono / WhatsApp', value: business.phone, href: business.phoneHref },
  { label: 'Email comercial', value: business.email, href: `mailto:${business.email}` },
  { label: 'Fábrica', value: business.address },
  { label: 'Horario de atención', value: business.hours },
];

const ContactUs = () => (
  <section id="contacto" className="relative overflow-hidden bg-ink py-20 text-white lg:py-24">
    <div className="pointer-events-none absolute -right-24 -bottom-24 size-96 rounded-full bg-brand-600/20 blur-3xl" aria-hidden="true" />

    <div className="wrap relative z-10">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal flex flex-col justify-between lg:col-span-5">
          <div>
            <p className="chip chip-dark mb-4">Contacto directo</p>
            <h2 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl">Armemos tu primer pedido</h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              Escribinos por WhatsApp para una respuesta rápida, o dejanos tus datos y te contactamos dentro del horario de atención.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 sm:w-auto"
            >
              <span className="icon-[mdi--whatsapp] size-6" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          </div>

          <dl className="mt-12 space-y-4 border-t border-white/10 pt-8 text-sm">
            {channels.map((channel, index) => (
              <div
                key={channel.label}
                className={`flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${index < channels.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <dt className="text-white/60">{channel.label}</dt>
                <dd className="font-bold break-words text-white sm:text-right">
                  {channel.href ? (
                    <a href={channel.href} className="transition hover:text-brand-400">
                      {channel.value}
                    </a>
                  ) : (
                    channel.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal lg:col-span-7">
          <div className="rounded-3xl border border-stone-200 bg-surface p-8 text-stone-900 shadow-2xl sm:p-10">
            <h3 className="text-2xl font-black text-stone-900">Envianos un mensaje</h3>
            <p className="mt-1 mb-6 text-sm text-stone-500">Completá tus datos y te contactamos con la lista de precios.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
