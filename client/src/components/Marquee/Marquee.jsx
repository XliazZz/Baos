import React, { useState } from 'react';
import productsData from '../../data/products/productsData.json';

const items = [...productsData.map((product) => product.title), 'Hecho en Villa Luro'];

// Franja decorativa: los nombres ya están en la sección Variedades, por eso se oculta a lectores de pantalla
const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative border-y border-line py-5">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_88%,transparent)]" aria-hidden="true">
        <div className={`flex w-max motion-safe:animate-marquee ${isPaused ? '[animation-play-state:paused]' : ''}`}>
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-8 pr-8 font-display text-2xl font-semibold whitespace-nowrap text-ink sm:text-3xl">
                  {item}
                  <span className="icon-[tdesign--bread] size-6 text-accent" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsPaused((paused) => !paused)}
        className="absolute top-1/2 right-3 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas text-ink motion-reduce:hidden sm:right-6"
        aria-label={isPaused ? 'Reanudar animación' : 'Pausar animación'}
      >
        <span className={`${isPaused ? 'icon-[heroicons--play-20-solid]' : 'icon-[heroicons--pause-20-solid]'} size-4`} aria-hidden="true" />
      </button>
    </div>
  );
};

export default Marquee;
