// Única fuente de los datos de contacto: si cambian, se cambian acá
export const business = {
  phone: '+54 11 6457-6321',
  phoneHref: 'tel:+541164576321',
  email: 'panificadoraandinasa@gmail.com',
  address: 'Milton 462, Villa Luro, CABA',
  hours: 'Lunes a viernes, de 8 a 17 h',
  legalName: 'Panificadora Andina S.A.',
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577301479995', icon: 'icon-[mdi--facebook]' },
    { label: 'Instagram', href: 'https://www.instagram.com/panificadora_andina/', icon: 'icon-[mdi--instagram]' },
  ],
};

// 549 = Argentina + prefijo de celular que WhatsApp exige
export const whatsappUrl = (text = 'Hola, quiero hacer un pedido de pan bao para mi restaurante.') =>
  `https://wa.me/5491164576321?text=${encodeURIComponent(text)}`;

export const samplesUrl = whatsappUrl('Hola, quiero pedir muestras de pan bao para mi restaurante.');

// Condiciones comerciales: se muestran en la sección Condiciones y se repiten en Preguntas frecuentes
export const terms = {
  minimumOrder: '25 unidades por variedad',
  deliveryDays: 'De lunes a sábado',
  payment: 'Efectivo o transferencia',
  invoice: 'Emitimos factura A',
  shelfLife: 'Hasta 6 meses en freezer',
  samples: '1 o 2 panes de cada variedad',
};
