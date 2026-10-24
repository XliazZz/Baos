// Muestra cada .reveal cuando entra en pantalla (funciona en todos los navegadores, Firefox incluido)
export const initReveal = () => {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

  const observer = new IntersectionObserver(
    (entries) => {
      // Los que entran juntos (tarjetas de una grilla) aparecen escalonados
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry, index) => {
          entry.target.style.transitionDelay = `${index * 90}ms`;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
    },
    { rootMargin: '0px 0px -12% 0px' },
  );

  // Lo que ya está a la vista al cargar se marca visible antes de activar el efecto: así no parpadea
  document.querySelectorAll('.reveal').forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) element.classList.add('is-visible');
    else observer.observe(element);
  });

  document.documentElement.classList.add('reveal-on');
  return () => observer.disconnect();
};
