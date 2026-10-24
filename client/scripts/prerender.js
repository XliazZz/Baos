// Inserta el HTML de la app en dist/index.html: buscadores y vistas previas ven el contenido sin ejecutar JS
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { render } from '../dist-ssr/entry-server.js';

const page = new URL('../dist/index.html', import.meta.url);
const marker = '<div id="root"></div>';
const html = readFileSync(page, 'utf8');

if (!html.includes(marker)) throw new Error(`prerender: no se encontró ${marker} en dist/index.html`);

writeFileSync(page, html.replace(marker, `<div id="root">${render()}</div>`));
rmSync(new URL('../dist-ssr', import.meta.url), { recursive: true });
console.log('prerender: dist/index.html generado con el contenido de la página');
