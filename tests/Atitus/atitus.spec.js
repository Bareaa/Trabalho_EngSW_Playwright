// @ts-check
const { test, expect } = require('@playwright/test');

test('Acesso ao site', async ({ page }) => {
  await page.goto('https://atitus.edu.br');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Atitus/);
});

test('Teste', async ({ page }) => {
  await page.goto('https://atitus.edu.br');

  // Click the get started link.
  await page.locator('text=Cursos').click();

});
