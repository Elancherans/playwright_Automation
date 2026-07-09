const {test,expect} = require('@playwright/test')


test('Popup Validations', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
   //To get the java button we are clicking on the button
    await page.locator("input[id = 'confirmbtn']").click()
    //To handle the java alert
    await page.on('dialog',dialog=>dialog.dismiss)

    await page.locator("#mousehover").hover()


    // await page.locator("input[id = 'confirmbtn']").click()
    // page.on('dialog',dialog=>dialog.accept)


    


})