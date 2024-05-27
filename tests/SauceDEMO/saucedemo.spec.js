// @ts-check
const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test('has title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com//');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
});

test('Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    var users = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
    var password = ['secret_sauce'];
    function sorteiaUsuario() {
        var sorteio = Math.floor(users.length * Math.random());
        return users[sorteio];
    }
    await page.fill('input[id="user-name"]', 'standard_user');

    // Preencher a senha
    await page.fill('input[id="password"]', password[0]);

    // Clicar no botão de login
    await page.click('input[id="login-button"]');

  // Click the get started link.
//   await page.getByLabel('Username').fill('standard_user');
//   await page.getByLabel('Password').fill('secret_sauce');
//   await page.getByRole('button', { name: 'Login' }).click();
  // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();



    //add no carrinho o 1 item
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.click('button[id="add-to-cart-sauce-labs-backpack"]');

    //verifica se o item foi adicionado e eh igual a 1
    await page.click('span[class="shopping_cart_badge"]');

    await page.goto('https://www.saucedemo.com/cart.html');

    const cartQuantity = await page.textContent('div[class="cart_quantity"]');

    if (cartQuantity && cartQuantity.trim() === '1') {
        console.log('Item adicionado com sucesso');
    } else {
        console.log('Item não adicionado');
    }
});

test('Login_Cart_Logout', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    
    var users = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
    var password = ['secret_sauce'];
    function sorteiaUsuario() {
        var sorteio = Math.floor(users.length * Math.random());
        return users[sorteio];
    }
    await page.fill('input[id="user-name"]', 'standard_user');

    // Preencher a senha
    await page.fill('input[id="password"]', password[0]);

    // Clicar no botão de login
    await page.click('input[id="login-button"]');

    //add no carrinho o 1 item
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.click('button[id="add-to-cart-sauce-labs-backpack"]');

    //verifica se o item foi adicionado e eh igual a 1
    await page.click('span[class="shopping_cart_badge"]');

    await page.goto('https://www.saucedemo.com/cart.html');

    const cartQuantity = await page.textContent('div[class="cart_quantity"]');

    if (cartQuantity && cartQuantity.trim() === '1') {
        console.log('Item adicionado com sucesso');
    } else {
        console.log('Item não adicionado');
    }


    await page.goto('https://www.saucedemo.com/inventory.html');

    await page.click('button[id="react-burger-menu-btn"]');
    await page.click('a[data-test="logout-sidebar-link"]');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
});