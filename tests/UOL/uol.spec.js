
// @ts-check
const { test, expect } = require('@playwright/test');

test('click on span with class kicker, capture and compare text', async ({ page }) => {
  // Navegar para a página desejada
  await page.goto('https://uol.com.br/esporte/');

  // Seletor para o span com a classe kicker
  const spanSelector = 'span.kicker';
  
  // Capturar o texto do span com a classe kicker
  const kickerText = await page.textContent(spanSelector);

  // Seletor para o elemento h2 logo abaixo do span com a classe kicker (ajuste conforme necessário)
  const belowSpanH2Selector = `${spanSelector} + h2`;

  // Capturar o texto do elemento h2 logo abaixo do span
  const belowSpanH2Element = await page.$(belowSpanH2Selector);
  const belowSpanH2Text = belowSpanH2Element ? await belowSpanH2Element.textContent() : null;

  // Clicar no span
  await page.click(spanSelector);

  // Capturar o texto na nova página para comparação (ajuste conforme necessário)
  const newPageTextSelector = 'h1'; // Ajuste conforme necessário
  const newPageText = await page.textContent(newPageTextSelector);

  // Verificar se o texto abaixo do span foi capturado com sucesso antes de comparar
  if (belowSpanH2Text !== null) {
    // Comparar o texto do elemento h2 abaixo do span com o texto na nova página
    expect(newPageText).toContain(belowSpanH2Text.trim());
  } else {
    // Se o texto abaixo do span não foi encontrado, falhar no teste
    throw new Error('Texto abaixo do span não encontrado');
  }
});
