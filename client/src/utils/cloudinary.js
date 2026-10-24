// Inserta formato, calidad y ancho automáticos en una URL de Cloudinary sin transformaciones
export const cld = (url, width) => url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);

export const cldSrcSet = (url, widths) => widths.map((w) => `${cld(url, w)} ${w}w`).join(', ');
