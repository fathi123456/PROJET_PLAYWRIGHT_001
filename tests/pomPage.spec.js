import {test,expect} from '@playwright/test'
import PomManger from '../pages/PomManager.js';

let pm;
test.describe('Tests avec POM', () => {
  

  test.beforeEach(async ({page}) => {
    pm = new PomManger(page); // Initialisation de l'objet POM
  });
  test.afterEach(async({page})=>{
    await page.close()
  })

  test('connexion avec valid credentials', async () => {
    await pm.loginPage.navigate(); 
    await pm.loginPage.login('tomsmith', 'SuperSecretPassword!');
    await pm.securePage.assertLogedInMessage('You logged into a secure area!')


    // Assert value directly in test
    const message = await pm.securePage.getMessage()
    expect(message).toContain('You logged into a secure area!')
  });
  test('connexion avec invalide username',async()=>{
    await pm.loginPage.navigate(); 
    await pm.loginPage.login('invalidUser', 'SuperSecretPassword!');
    await pm.loginPage.assertErreorMessage('Your username is invalid!')
  })
});