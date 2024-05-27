// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'GitHub repository' }).click();
  await page.goto('https://github.com/microsoft/playwright');
  await page.getByRole('button', { name: 'branch-picker-repos-header-ref-selector' }).click();
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
