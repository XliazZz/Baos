import React from 'react';
import { whatsappUrl } from '../../../data/business';
import { cld, cldSrcSet } from '../../../utils/cloudinary';

const Card = ({ image, title, description, gr, size }) => (
  <article className="group flex h-full flex-col rounded-card bg-card p-2">
    <div className="overflow-hidden rounded-[0.875rem]">
      <img
        src={cld(image, 480)}
        srcSet={cldSrcSet(image, [320, 480, 720])}
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 82vw"
        alt={title}
        width="480"
        height="360"
        loading="lazy"
        decoding="async"
        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
      <h3 className="text-xl">{title}</h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed">{description}</p>

      <div className="mt-auto flex items-center justify-between gap-4 pt-5">
        <ul className="flex gap-2 text-xs font-semibold text-ink tabular-nums">
          <li className="rounded-full bg-surface px-3 py-1.5"><span className="sr-only">Peso: </span>{gr.replace('gr', ' g')}</li>
          <li className="rounded-full bg-surface px-3 py-1.5"><span className="sr-only">Tamaño: </span>{size.replace('cm', ' cm')}</li>
        </ul>
        <a
          href={whatsappUrl(`Hola, quiero consultar por el ${title} para mi restaurante.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Consultar por ${title} en WhatsApp`}
          className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-canvas transition-colors group-hover:bg-accent group-hover:text-on-accent"
        >
          <span className="icon-[heroicons--arrow-up-right-20-solid] size-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  </article>
);

export default Card;
