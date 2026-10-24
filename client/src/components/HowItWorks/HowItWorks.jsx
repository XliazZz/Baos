import React from 'react';
import Header from '../Header/Header';

const steps = [
  {
    icon: 'icon-[mdi--whatsapp]',
    title: 'Escribinos',
    description: 'Contanos qué platos tenés en carta y qué volumen necesitás, por WhatsApp o con el formulario.',
  },
  {
    icon: 'icon-[mdi--truck-fast-outline]',
    title: 'Coordinamos la entrega',
    description: 'Acordamos día y horario, y te llevamos los baos congelados a tu local, en cualquier punto de CABA.',
  },
  {
    icon: 'icon-[mdi--pot-steam-outline]',
    title: 'Al vapor y a la carta',
    description: 'Los guardás en el freezer y los calentás al vapor a medida que los necesitás en el servicio.',
  },
];

const HowItWorks = () => (
  <section id="como-trabajamos" className="section">
    <div className="wrap">
      <Header eyebrow="Cómo trabajamos" title="De nuestra fábrica a tu cocina, en tres pasos" />

      <ol className="mt-12 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="reveal relative rounded-card border border-line bg-surface p-7 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="grid size-12 place-items-center rounded-full bg-accent-soft text-accent">
                <span className={`${step.icon} size-6`} aria-hidden="true" />
              </span>
              <span className="font-display text-5xl font-bold tracking-tight text-line" aria-hidden="true">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-8 text-2xl">{step.title}</h3>
            <p className="mt-3">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
