const {test, expect} = require ('@playwright/test');


test('Test assignment login page', async ({page}) => 
{ 

  //Locators 
  const userEmailInput = page.locator("div [id='userEmail']")
  const userPassword = page.locator("div input[id = 'userPassword']")
  const loginButton = page.locator("div input[id = 'login']")
  const productName = page.locator("div h5[style = 'text-transform: uppercase;']")

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
  await userEmailInput.fill("cheran5482@gmail.com")
  await userPassword.fill("Cheran@5482")
  await loginButton.click()
  // console.log(await productName.nth(0).textContent())
  // console.log(await productName.nth(1).textContent())
  // This help for waiting dynamically untill the network call loads for mordern service based applications
  //await page.waitForLoadState("networkidle")
  //This wait dynamically until it finds the locator 
  await productName.last().waitFor()
  console.log(await productName.allTextContents())
}


);



