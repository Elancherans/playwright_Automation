const {test, expect} = require ('@playwright/test')

test('Child Page Validation', async({browser})=>
{

    const context = await browser.newContext()
    const page = await context.newPage()

    //Locators 
    const childPageHyperLink = page.locator("div a[href ='https://rahulshettyacademy.com/documents-request']")


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")


   const [childPage] = await Promise.all([
    context.waitForEvent('page'),
    childPageHyperLink.click(),
])

//Page 2 locator 

const redLineText = childPage.locator("div p[class ='im-para red']")

const message = await redLineText.textContent()
const emailMessage = message.split("@")[1]
const email = emailMessage.split(" ")[0]
console.log(email)
//To enter the value taken from child page to main page 
await page.locator("input[name ='username']").fill(email)
await page.pause()

})