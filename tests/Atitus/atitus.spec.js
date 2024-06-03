// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Acesso ao site', async ({ page }) => {
  await page.goto('https://atitus.edu.br');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Atitus Educação/);
});

test('Teste', async ({ page }) => {
  await page.goto('https://atitus.edu.br');

  // Click the get started link.
  await page.click('a[href="https://atitus.edu.br/ingresso"]');
  await page.locator('input[placeholder="Nome completo"]').fill('nome do joão');
  await page.locator('input[placeholder="WhatsApp*"]').fill('(54) 99999-9999');
  await page.locator('input[placeholder="E-mail"]').fill('abcdefgh@gmail.com');

  await page.locator('select[class="chakra-select css-aqbqgh select2-hidden-accessible"]').selectOption({ label: 'Engenharia Civil' });
  // await page.locator('text=Engenharia Civil').click();
  await page.locator('select[class="chakra-select css-16mijvn"]').selectOption({ label: 'Passo Fundo' });
  await page.locator('select[name="assunto"]').selectOption({ label: 'Quero Informações' });
  await page.locator('button[class="chakra-button css-1euf7xx"]').click();

});

