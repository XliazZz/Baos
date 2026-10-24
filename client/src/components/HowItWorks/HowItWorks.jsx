import React from 'react';
import Header from '../Header/Header';
import { samplesUrl, terms } from '../../data/business';

const steps = [
  {
    icon: 'icon-[mdi--whatsapp]',
    title: 'Escribinos',
    description: 'Contanos qué platos tenés en carta y qué volumen necesitás. Si querés, primero te mandamos muestras.',
  },
  {
    icon: 'icon-[mdi--truck-fast-outline]',
    title: 'Coordinamos la entrega',
    description: 'Acordamos día y horario, y te llevamos los panes congelados a tu local, en cualquier punto de CABA.',
  },
  {
    icon: 'icon-[mdi--pot-steam-outline]',
    title: 'Al vapor y a la carta',
    description: 'Los guardás en el freezer y los calentás al vapor, sin descongelar, a medida que los necesitás.',
  },
];

const conditions = [
  { icon: 'icon-[mdi--package-variant-closed]', label: 'Pedido mínimo', value: terms.minimumOrder },
  { icon: 'icon-[mdi--truck-outline]', label: 'Entregas', value: terms.deliveryDays },
  { icon: 'icon-[mdi--cash-multiple]', label: 'Pago', value: terms.payment },
  { icon: 'icon-[mdi--file-document-outline]', label: 'Facturación', value: terms.invoice },
  { icon: 'icon-[mdi--snowflake]', label: 'Vida útil', value: terms.shelfLife },
];

const HowItWorks = () => (
  <section id="como-trabajamos" className="section">
    <div className="wrap">
      <Header
        eyebrow="Cómo trabajamos"
        title="Empezar a trabajar con nosotros es simple"
        action={
          <a href={samplesUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary self-start md:self-auto">
            <span className="icon-[mdi--gift-outline] size-4" aria-hidden="true" />
            Pedir muestras
          </a>
        }
      />

      <ol className="mt-12 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="reveal rounded-card border border-line bg-surface p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-full bg-accent-soft text-accent sm:size-12">
                <span className={`${step.icon} size-6`} aria-hidden="true" />
              </span>
              <span className="font-display text-4xl font-bold tracking-tight text-line sm:text-5xl" aria-hidden="true">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-5 text-xl sm:mt-8 sm:text-2xl">{step.title}</h3>
            <p className="mt-2 sm:mt-3">{step.description}</p>
          </li>
        ))}
      </ol>

      {/* Condiciones: misma sección, porque responden la misma pregunta ("¿cómo empiezo?") */}
      <div id="condiciones" className="reveal mt-4 rounded-card bg-card p-6 sm:p-8">
        <h3 className="font-sans text-sm font-semibold tracking-normal text-muted">Condiciones comerciales</h3>
        <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-3 lg:grid-cols-5">
          {conditions.map((item) => (
            <div key={item.label}>
              <dt className="flex items-center gap-2 text-sm">
                <span className={`${item.icon} size-4 text-accent`} aria-hidden="true" />
                {item.label}
              </dt>
              <dd className="mt-1.5 font-display text-lg leading-snug font-semibold tracking-tight text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default HowItWorks;
