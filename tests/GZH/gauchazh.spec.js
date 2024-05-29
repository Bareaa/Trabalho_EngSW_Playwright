// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://gauchazh.clicrbs.com.br/esportes/ultimas-noticias/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Esportes: Futebol, Vôlei, Futsal, Basquete e Mais | GZH/);
});

test('Clica na manchete e faz login com o google', async ({ page }) => {
  await page.goto('https://gauchazh.clicrbs.com.br/esportes/ultimas-noticias/');

  // Click the get started link.
  await page.click('div[class="card-highlight__wrapper"]');
  function conta3segundos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 3000);
    });
  }
  conta3segundos();

  await page.locator('a[class="gzh-header-top-nav-item home-link"]').click();
  //clica em pesquisar
  await page.locator('button[class="search-box-btn"]').click()
  //preenche o campo pesquisar com o texto ai de baixo
  await page.fill('input[placeholder="Pesquisar por ..."]', 'Dia Nacional do Fusca: história e curiosidades de um modelo que marcou gerações').then(() => {
    //aperta enter pra pesquisar :)
    page.locator('input[placeholder="Pesquisar por ..."]').press('Enter');
  });
  //espera que o link seja esse
  await expect(page).toHaveURL('https://gauchazh.clicrbs.com.br/search/?q=Dia%20Nacional%20do%20Fusca%3A%20hist%C3%B3ria%20e%20curiosidades%20de%20um%20modelo%20que%20marcou%20gera%C3%A7%C3%B5es');
  
  await page.click('h2[class="m-crd-pt__headline"]');
  await page.click('path[data-name="Icon material-attach-money"]');

  await expect(page).toHaveURL('https://gauchazh.clicrbs.com.br/gzh-ofertas/');

  await expect(page.getByRole('heading', { name: 'Recentes' })).toBeVisible();
});
