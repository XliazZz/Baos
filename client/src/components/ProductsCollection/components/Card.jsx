import React from 'react';
import { whatsappUrl } from '../../../data/business';
import { cld, cldSrcSet } from '../../../utils/cloudinary';

const Card = ({ image, title, description, gr, size }) => (
  <article className="flex h-full overflow-hidden rounded-lg border border-line bg-surface sm:flex-col">
    <img
      src={cld(image, 480)}
      srcSet={cldSrcSet(image, [240, 480, 720])}
      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 112px"
      alt={title}
      width="480"
      height="360"
      loading="lazy"
      decoding="async"
      className="w-28 shrink-0 object-cover sm:aspect-[4/3] sm:w-full"
    />

    <div className="flex flex-1 flex-col p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl">{title}</h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed">{description}</p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-4">
        <dl className="flex gap-4 text-sm tabular-nums">
          <div className="flex gap-1">
            <dt className="text-muted">Peso</dt>
            <dd className="font-bold text-ink">{gr.replace('gr', ' g')}</dd>
          </div>
          <div className="flex gap-1">
            <dt className="text-muted">Tamaño</dt>
            <dd className="font-bold text-ink">{size.replace('cm', ' cm')}</dd>
          </div>
        </dl>
        <a
          href={whatsappUrl(`Hola, quiero consultar por el ${title} para mi restaurante.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-accent underline-offset-4 hover:underline"
        >
          Consultar<span className="sr-only"> por {title}</span> →
        </a>
      </div>
    </div>
  </article>
);

export default Card;
