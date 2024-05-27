// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.kabum.com.br/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/KaBuM!/);
});

test('carrinho vazio', async ({ page }) => {
  await page.goto('https://www.kabum.com.br/');

  await page.getByRole('link', { name: 'Carrinho' }).click();
  const emptyCartMessageSelector = 'b:has-text("O seu carrinho está vazio.")';
  await page.waitForSelector(emptyCartMessageSelector);
  // Click the get started link.
  const emptyCartMessageText = await page.textContent(emptyCartMessageSelector);
  // Expects page to have a heading with the name of Installation.
  expect(emptyCartMessageText).toContain("O seu carrinho está vazio.");
});
