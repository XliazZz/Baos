import React from 'react';
import Header from '../Header/Header';
import { business } from '../../data/business';
import { cld, cldSrcSet } from '../../utils/cloudinary';

const productionImage = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1745620672/89e45d6b-6754-4d9f-90d6-866ccccf77de_n8tlqj.jpg';
const varietiesImage = 'https://res.cloudinary.com/do5ubt5g0/image/upload/v1745621315/IMG_5532_cg2uwn.jpg';

const AboutUs = () => (
  <section id="nosotros" className="section">
    <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
      <div className="lg:col-span-6">
        <Header eyebrow="Nosotros" title="Una fábrica dedicada a un solo producto: el pan bao" />
        <div className="reveal mt-6 space-y-4 text-lg">
          <p>
            Somos {business.legalName}, la fábrica detrás de Wow Bao. Nos especializamos en el gua bao,
            el pan al vapor que en Asia se usa para envolver todo tipo de rellenos.
          </p>
          <p>
            Lo elaboramos artesanalmente en nuestra planta de {business.address}, y lo entregamos congelado
            para que conserve su textura suave y esponjosa hasta llegar a tu cocina.
          </p>
        </div>
      </div>

      <div className="reveal grid grid-cols-5 gap-3 sm:gap-4 lg:col-span-6">
        <img
          src={cld(productionImage, 800)}
          srcSet={cldSrcSet(productionImage, [480, 800, 1200])}
          sizes="(min-width: 1024px) 360px, 60vw"
          alt="Panes bao armados en bandejas de producción, antes de la cocción al vapor"
          width="800"
          height="1000"
          loading="lazy"
          decoding="async"
          className="col-span-3 aspect-[4/5] w-full rounded-panel object-cover"
        />
        <img
          src={cld(varietiesImage, 600)}
          srcSet={cldSrcSet(varietiesImage, [320, 600, 900])}
          sizes="(min-width: 1024px) 240px, 40vw"
          alt="Panes bao tradicionales junto a un bao con semillas"
          width="600"
          height="800"
          loading="lazy"
          decoding="async"
          className="col-span-2 mt-16 aspect-[3/4] w-full self-start rounded-panel object-cover"
        />
      </div>
    </div>
  </section>
);

export default AboutUs;
