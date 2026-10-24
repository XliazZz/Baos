import React from 'react';
import ContactForm from './components/ContactForm';
import { business, whatsappUrl } from '../../data/business';

const channels = [
  { label: 'Teléfono', value: business.phone, href: business.phoneHref },
  { label: 'Email', value: business.email, href: `mailto:${business.email}` },
  { label: 'Fábrica', value: business.address },
  { label: 'Horario', value: business.hours },
];

const ContactUs = () => (
  <section id="contacto" className="pb-20 lg:pb-28">
    <div className="wrap">
      <div className="panel reveal grid gap-12 rounded-panel px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-12 lg:gap-16 lg:p-16">
        <div className="lg:col-span-5">
          <p className="chip">Contacto</p>
          <h2 className="mt-5 text-4xl sm:text-5xl">Armemos tu primer pedido</h2>
          <p className="mt-5 text-lg">
            Escribinos por WhatsApp para una respuesta rápida, o dejanos tus datos y te contactamos dentro del horario de atención.
          </p>

          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
            <span className="icon-[mdi--whatsapp] size-5" aria-hidden="true" />
            Escribir por WhatsApp
          </a>

          <dl className="mt-10 divide-y divide-panel-line border-y border-panel-line">
            {channels.map((channel) => (
              <div key={channel.label} className="grid gap-1 py-4 text-sm sm:grid-cols-[5.5rem_1fr] sm:gap-4">
                <dt className="font-semibold text-on-panel">{channel.label}</dt>
                <dd className="min-w-0 break-words">
                  {channel.href ? (
                    <a href={channel.href} className="underline-offset-4 hover:text-on-panel hover:underline">
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

        <div className="rounded-card bg-surface p-6 text-ink-soft sm:p-8 lg:col-span-7">
          <h3 className="text-2xl text-ink">Envianos un mensaje</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
