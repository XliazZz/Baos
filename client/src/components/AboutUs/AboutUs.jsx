import React from 'react';
import Header from '../Header/Header';
import { business } from '../../data/business';
import { cld, cldSrcSet } from '../../utils/cloudinary';

const productionImage = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1745620672/89e45d6b-6754-4d9f-90d6-866ccccf77de_n8tlqj.jpg';
const varietiesImage = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1745621315/IMG_5532_cg2uwn.jpg';

const AboutUs = () => (
  <section id="nosotros" className="section">
    <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
      <div className="grid grid-cols-5 gap-4 lg:col-span-6">
        <img
          src={cld(productionImage, 800)}
          srcSet={cldSrcSet(productionImage, [480, 800, 1200])}
          sizes="(min-width: 1024px) 340px, 60vw"
          alt="Panes bao armados en bandejas de producción, antes de la cocción al vapor"
          width="800"
          height="1000"
          loading="lazy"
          decoding="async"
          className="col-span-3 aspect-[4/5] h-full w-full rounded-lg object-cover"
        />
        <img
          src={cld(varietiesImage, 600)}
          srcSet={cldSrcSet(varietiesImage, [320, 600, 900])}
          sizes="(min-width: 1024px) 220px, 40vw"
          alt="Panes bao tradicionales junto a un bao con semillas"
          width="600"
          height="800"
          loading="lazy"
          decoding="async"
          className="col-span-2 mt-12 aspect-[3/4] w-full self-start rounded-lg object-cover"
        />
      </div>

      <div className="lg:col-span-6">
        <Header eyebrow="Nosotros" title="Una fábrica dedicada a un solo producto: el pan bao" />
        <div className="mt-5 space-y-4 text-lg">
          <p>
            Somos {business.legalName}, la fábrica detrás de Wow Bao. Nos especializamos en el gua bao,
            el pan al vapor que en Asia se usa para envolver todo tipo de rellenos.
          </p>
          <p>
            Lo elaboramos artesanalmente en nuestra planta de {business.address}, y lo entregamos congelado
            para que conserve su textura suave y esponjosa hasta llegar a tu cocina.
          </p>
        </div>
        <a href="#contacto" className="mt-8 inline-block font-bold text-accent underline-offset-4 hover:underline">
          Coordiná una entrega →
        </a>
      </div>
    </div>
  </section>
);

export default AboutUs;
