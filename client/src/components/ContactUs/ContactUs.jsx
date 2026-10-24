import React from 'react';
import Header from '../Header/Header';
import ContactForm from './components/ContactForm';
import { business, whatsappUrl } from '../../data/business';

const channels = [
  { label: 'Teléfono', value: business.phone, href: business.phoneHref },
  { label: 'Email', value: business.email, href: `mailto:${business.email}` },
  { label: 'Fábrica', value: business.address },
  { label: 'Horario', value: business.hours },
];

const ContactUs = () => (
  <section id="contacto" className="section border-t border-line bg-paper-2">
    <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <Header eyebrow="Contacto" title="Armemos tu primer pedido">
          Escribinos por WhatsApp para una respuesta rápida, o dejanos tus datos y te contactamos dentro del horario de atención.
        </Header>

        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
          <span className="icon-[mdi--whatsapp] size-5" aria-hidden="true" />
          Escribir por WhatsApp
        </a>

        <dl className="mt-10 divide-y divide-line border-y border-line">
          {channels.map((channel) => (
            <div key={channel.label} className="grid grid-cols-[6rem_1fr] gap-4 py-4">
              <dt className="text-sm font-bold text-ink">{channel.label}</dt>
              <dd className="min-w-0 break-words">
                {channel.href ? (
                  <a href={channel.href} className="underline-offset-4 hover:text-ink hover:underline">
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

      <div className="lg:col-span-7">
        <div className="rounded-lg border border-line bg-surface p-6 sm:p-10">
          <h3 className="text-2xl">Envianos un mensaje</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
