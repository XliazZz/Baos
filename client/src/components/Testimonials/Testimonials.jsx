import React, { useEffect, useRef } from 'react';
import CardTestimonial from './CardTestimonial';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import Header from '../Header/Header';

const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });

      const keenSliderPrevious = document.getElementById('keen-slider-previous');
      const keenSliderNext = document.getElementById('keen-slider-next');

      keenSliderPrevious.addEventListener('click', () => slider.prev());
      keenSliderNext.addEventListener('click', () => slider.next());

      return () => {
        slider.destroy();
      };
    }
  }, []);

  const testimonials = [
    { title: 'Esta bueno', comment: 'Muy bueno, me encantó el servicio y la atención al cliente fue excelente.', byName: 'Juan', stars: 4 },
    { title: 'Esta malo', comment: 'Muy malo, no cumplió con mis expectativas y el producto llegó dañado.', byName: 'Pedro', stars: 1 },
    { title: 'Esta regular', comment: 'Muy regular, el producto es aceptable pero podría mejorar en varios aspectos.', byName: 'Maria', stars: 3 },
    { title: 'Esta excelente', comment: 'Muy excelente, superó todas mis expectativas y lo recomendaría a todos.', byName: 'Jose', stars: 5 },
    { title: 'Esta horrible', comment: 'Muy horrible, la experiencia fue terrible y no volveré a comprar aquí.', byName: 'Ana', stars: 1 },
    { title: 'Esta genial', comment: 'Muy genial, nunca probé algo igual, la calidad es insuperable y el diseño es único.', byName: 'Luis', stars: 5 },
    { title: 'Increible', comment: 'Muy increíble, el producto es de alta calidad y el envío fue rápido y eficiente.', byName: 'Carlos', stars: 5 },
  ]

  return (
    <>
      <div className="items-end justify-between sm:flex">
        <Header
          title={"Opiniones de Clientes"}
          description={
            <>
              Conoce las <span className='font-semibold'>experiencias reales</span> de quienes han probado nuestros Baos.
              Sus opiniones reflejan la <span className='font-semibold'>pasión</span> y <span className='font-semibold'>calidad</span> que ponemos en cada bocado.
            </>
          }
        />

        <div className="mt-8 flex gap-4 lg:mt-0 space-x-9">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className='cursor-pointer'
          >
            <p className="icon-[ps--left] w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 hover:text-indigo-900 mx-auto" role="img" aria-hidden="true" />
          </button>

          <button
            aria-label="Next slide"
            id="keen-slider-next"
            className='cursor-pointer'
          >
            <p className="icon-[ps--right] w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 hover:text-indigo-900 mx-auto" role="img" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
        <div id="keen-slider" ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <CardTestimonial key={index} title={testimonial.title} comment={testimonial.comment} byName={testimonial.byName} stars={testimonial.stars} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Testimonials
