import React from 'react';
import { terms } from '../../data/business';

const items = [
  { icon: 'icon-[heroicons--rectangle-stack]', title: 'Solo el pan', description: 'Sin relleno: le ponés tu receta y tu sello.' },
  { icon: 'icon-[heroicons--fire]', title: 'Al vapor', description: 'Elaboración artesanal, suave y esponjosa.' },
  { icon: 'icon-[lucide--snowflake]', title: 'Congelado', description: `${terms.shelfLife}.` },
  { icon: 'icon-[heroicons--cube]', title: 'Desde 25 unidades', description: 'Pedido mínimo por variedad.' },
];

const Highlights = () => (
  <section aria-label="Lo esencial" className="border-y border-stone-200/80 bg-surface py-6">
    <ul className="wrap grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
      {items.map((item) => (
        <li key={item.title} className="flex items-start gap-3.5 p-2">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:text-brand-400">
            <span className={`${item.icon} size-6`} aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm leading-snug font-bold text-stone-900">{item.title}</p>
            <p className="mt-0.5 text-xs text-stone-500">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Highlights;
