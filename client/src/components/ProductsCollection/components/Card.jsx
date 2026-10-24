import React from 'react';
import { whatsappUrl } from '../../../data/business';
import { cld, cldSrcSet } from '../../../utils/cloudinary';

const badgeStyles = {
  green: 'border border-emerald-200 bg-emerald-50 text-emerald-800',
  dark: 'bg-ink/90 text-white',
  light: 'badge-blur bg-surface/90 text-stone-800',
};

const Card = ({ image, title, description, gr, size, category, badge }) => (
  <article className="group flex h-full flex-col justify-between rounded-3xl border border-stone-200/90 bg-surface p-6 shadow-subtle transition duration-200 hover:-translate-y-1 hover:shadow-card">
    <div>
      <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
        <img
          src={cld(image, 480)}
          srcSet={cldSrcSet(image, [320, 480, 720])}
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 90vw"
          alt={title}
          width="480"
          height="360"
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition duration-300 group-hover:scale-105"
        />
        {badge && (
          <span className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase shadow-sm ${badgeStyles[badge.tone]}`}>
            {badge.label}
          </span>
        )}
      </div>
      <p className="mb-2 text-xs font-bold tracking-wider text-stone-500 uppercase">{category}</p>
      <h3 className="text-xl font-bold text-stone-900 transition group-hover:text-brand-600 dark:group-hover:text-brand-400">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
    </div>

    <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
      <ul className="flex items-center gap-2 text-xs font-bold text-stone-700 tabular-nums">
        <li className="rounded-lg bg-stone-100 px-2.5 py-1"><span className="sr-only">Peso: </span>{gr.replace('gr', ' g')}</li>
        <li className="rounded-lg bg-stone-100 px-2.5 py-1"><span className="sr-only">Tamaño: </span>{size.replace('cm', ' cm')}</li>
      </ul>
      <a
        href={whatsappUrl(`Hola, quiero consultar por el ${title} para mi restaurante.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Consultar por ${title} en WhatsApp`}
        className="grid size-9 place-items-center rounded-full bg-stone-100 text-stone-700 transition group-hover:bg-brand-600 group-hover:text-white"
      >
        <span className="icon-[heroicons--arrow-right] size-4" aria-hidden="true" />
      </a>
    </div>
  </article>
);

export default Card;
