// Google Analytics 4: solo se carga si VITE_GA_ID está definido (en Vercel: Settings → Environment Variables)
const measurementId = import.meta.env.VITE_GA_ID;

export const track = (name, params) => window.gtag?.('event', name, params);

const contactMethod = (href) => {
  if (href.includes('wa.me')) return 'whatsapp';
  if (href.startsWith('tel:')) return 'phone';
  if (href.startsWith('mailto:')) return 'email';
  return null;
};

export const initAnalytics = () => {
  if (!measurementId) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.append(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag necesita el objeto arguments, no un array
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  // Cada clic en WhatsApp, teléfono o email cuenta como intención de contacto
  document.addEventListener('click', (e) => {
    const link = e.target.closest?.('a[href]');
    const method = link && contactMethod(link.getAttribute('href'));
    if (method) track('contact_click', { method, link_text: link.textContent.trim().slice(0, 60) });
  });
};
