import {test,expect} from '@playwright/test'
 
import PomManager from '../pages/PomManager'

let pm;
test.describe('Tester checkbox', ()=>{
   
        test.beforeEach(async ({page}) => {
            pm = new PomManager(page)
        })
    
        test.afterEach(async ({page}) =>{
            await page.close()
    })
    test('check et uncheck boxes',async({page})=>{
        await pm.checkboxesPage.navigate(); 
       
        await pm.checkboxesPage.checkCheckbox(1)
        await pm.checkboxesPage.assertCheckbox(1, true)

        await pm.checkboxesPage.navigate()
        await pm.checkboxesPage.checkCheckbox(2)
        await pm.checkboxesPage.assertCheckbox(2, false)

    })

    })