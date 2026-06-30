const {test, expect} = require ('@playwright/test');

test('Playwright special locators', async ({page}) =>{

await page.goto("https://rahulshettyacademy.com/angularpractice/")

await page.getByLabel("Check me out if you Love IceCreams!").check()
await page.getByLabel("Student").check()
await page.getByLabel("Gender").selectOption("Male")
await page.getByPlaceholder("Password").fill("Pas1234")
await page.getByRole("button",{name:'submit'}).click()

const successValidation = await page.getByRole("alert",{name:'Success! The Form has been submitted successfully!.'}).isVisible
expect(successValidation).toBeTruthy()
await page.pause()

await page.getByRole('link',{name:'shop'}).click()
await page.locator('.card').filter({hasText:'Nokia Edge'}).getByRole('button').click()
await page.locator("a[class = 'nav-link btn btn-primary']").click()

}
)