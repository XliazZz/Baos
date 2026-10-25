import React from 'react';
import Header from '../Header/Header';
import { terms } from '../../data/business';

const steps = [
  {
    icon: 'icon-[heroicons--chat-bubble-oval-left-ellipsis]',
    title: 'Escribinos',
    description: 'Contanos sobre tu local, qué platos tenés en carta y qué volumen necesitás por semana. Si querés, primero te mandamos muestras.',
    note: 'Por WhatsApp o formulario',
  },
  {
    icon: 'icon-[heroicons--calendar]',
    title: 'Coordinamos la entrega',
    description: 'Acordamos día y horario, y te llevamos los panes congelados hasta la puerta de tu local en CABA. Para el interior, los cargamos en tu transporte refrigerado.',
    note: terms.deliveryDays,
  },
  {
    icon: 'icon-[lucide--cooking-pot]',
    title: 'Al vapor y a la carta',
    description: 'Los guardás en el freezer y, al momento del servicio, los calentás al vapor sin descongelar.',
    note: terms.shelfLife,
    positive: true,
  },
];

const conditions = [
  { label: 'Pedido mínimo', value: terms.minimumOrder },
  { label: 'Entregas', value: terms.deliveryDays },
  { label: 'Interior del país', value: terms.interior },
  { label: 'Medios de pago', value: terms.payment },
  { label: 'Facturación', value: terms.invoice },
  { label: 'Vida útil', value: terms.shelfLife },
];

const HowItWorks = () => (
  <section id="como-trabajamos" className="py-20 lg:py-24">
    <div className="wrap">
      <div className="mb-16">
        <Header eyebrow="Cómo trabajamos" title="Empezar a trabajar con nosotros es simple" center>
          Un circuito ágil, pensado para el ritmo de una cocina profesional.
        </Header>
      </div>

      <ol className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="reveal relative flex flex-col justify-between rounded-3xl border border-stone-200 bg-surface p-8 shadow-subtle">
            {/* Número decorativo dibujado con CSS: no cuenta como texto */}
            <span
              data-step={`0${index + 1}`}
              className="pointer-events-none absolute top-4 right-6 text-6xl font-black text-stone-100 select-none before:content-[attr(data-step)]"
              aria-hidden="true"
            />
            <div>
              <span className="relative mb-6 grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 dark:text-brand-400">
                <span className={`${step.icon} size-6`} aria-hidden="true" />
              </span>
              <h3 className="relative text-xl font-bold text-stone-900">{step.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-stone-600">{step.description}</p>
            </div>
            <p className={`mt-6 flex items-center gap-1.5 border-t border-stone-100 pt-4 text-xs font-semibold ${step.positive ? 'text-emerald-700' : 'text-brand-600 dark:text-brand-400'}`}>
              {step.positive && <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />}
              {step.note}
            </p>
          </li>
        ))}
      </ol>

      <div id="condiciones" className="reveal mt-12 rounded-3xl border border-stone-200 bg-surface p-6 shadow-subtle sm:p-8">
        <h3 className="mb-6 text-center text-xs font-extrabold tracking-wider text-stone-500 uppercase sm:text-left">
          Condiciones comerciales claras
        </h3>
        <dl className="grid grid-cols-2 gap-6 text-stone-800 md:grid-cols-3 lg:grid-cols-6">
          {conditions.map((item) => (
            <div key={item.label}>
              <dt className="block text-xs font-semibold text-stone-500 uppercase">{item.label}</dt>
              <dd className="mt-1 block text-sm font-bold text-balance text-stone-900 sm:text-base">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default HowItWorks;
