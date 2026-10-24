// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('el HTML llega prerenderizado con el contenido principal', async ({ request }) => {
  const html = await (await request.get('/')).text();
  expect(html).toContain('Pan bao mayorista');
  expect(html).toContain('Pedido mínimo');
});

test('tiene un solo h1 y el título de la marca', async ({ page }) => {
  await expect(page).toHaveTitle(/Wow Bao/);
  await expect(page.locator('h1')).toHaveCount(1);
});

test('los datos de contacto apuntan al número correcto', async ({ page }) => {
  for (const href of await page.locator('a[href*="wa.me"]').evaluateAll((links) => links.map((a) => a.getAttribute('href')))) {
    expect(href).toContain('wa.me/5491164576321');
  }
  for (const href of await page.locator('a[href^="tel:"]').evaluateAll((links) => links.map((a) => a.getAttribute('href')))) {
    expect(href).toBe('tel:+541164576321');
  }
});

test('la navegación lleva a cada sección sin quedar tapada por el header', async ({ page, isMobile }) => {
  test.skip(isMobile, 'en móvil la navegación está en el menú');
  await page.getByRole('navigation', { name: 'Principal' }).getByRole('link', { name: 'Cómo trabajamos' }).click();
  await expect(page.locator('#como-trabajamos h2')).toBeInViewport();
  const top = await page.locator('#como-trabajamos').evaluate((el) => el.getBoundingClientRect().top);
  expect(top).toBeGreaterThanOrEqual(60);
});

test('el formulario rechaza un teléfono inválido sin enviar', async ({ page }) => {
  await page.getByLabel('Nombre').fill('Ana');
  await page.getByLabel('Teléfono').fill('123');
  await page.getByLabel('Email').fill('ana@restaurante.com');
  await page.getByLabel('Mensaje').fill('Hola');
  await page.getByRole('button', { name: 'Enviar mensaje' }).click();
  await expect(page.locator('#form-status')).toContainText('Revisá el teléfono');
  await expect(page.getByLabel('Teléfono')).toHaveAttribute('aria-invalid', 'true');
});

test('en móvil el menú abre, navega y se cierra', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: 'Abrir menú' }).click();
  await expect(page.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute('aria-expanded', 'true');
  await page.locator('#menu-movil').getByRole('link', { name: 'Cómo trabajamos' }).click();
  await expect(page.locator('#menu-movil')).toBeHidden();
  await expect(page.locator('#como-trabajamos h2')).toBeInViewport();
});

test('el botón flotante de WhatsApp queda a mano al bajar', async ({ page }) => {
  const float = page.getByRole('link', { name: 'Hacer un pedido por WhatsApp' });
  await expect(float).toHaveAttribute('href', /wa\.me\/5491164576321/);
  await page.mouse.wheel(0, 3000);
  await expect(float).toBeInViewport();
});
