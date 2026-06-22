const {test, expect} = require ('@playwright/test');


test('Browser Playwright test', async ({browser}) =>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.google.com");

}
);


test('Page Playwright test', async ({page}) =>
{
    //Locators 
    const userNameField = page.locator("#username");
    const signInButton = page.locator("#signInBtn");
    const cardTile = page.locator(".card-title a");

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
await userNameField.fill("rahulshetty"); //wrong name to check the error message 
await page.locator("[type='password']").fill('Learning@830$3mK2');
await signInButton.click();
 // To print the error message in the console
console.log(await page.locator("[style*='block']").textContent()); 
await expect(page.locator("[style*='block']")).toContainText("Incorrect"); 
//To clear a value from any input we can use fill("")
await userNameField.fill("");
await userNameField.fill("rahulshettyacademy");
await signInButton.click();
console.log(await cardTile.nth(0).textContent());
const titleCards = await cardTile.allTextContents();
console.log(titleCards);


}

);

test('Rahu shetty login page practise', async({page})=> 
{
    const userNameField = page.locator("#username");
    const signInButton = page.locator("#signInBtn");
    const cardTile = page.locator(".card-title a");
    const dropdown = page.locator("div select[class = 'form-control']")
    const radioButton = page.locator("span[class = 'checkmark']")
    const okButton = page.locator("button[id = 'okayBtn']")
    const checkBox = page.locator("input[id = 'terms']")
    const blinkingText = page.locator("div a[class = 'blinkingText']")

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
await userNameField.fill("rahulshettyacademy"); 
await page.locator("[type='password']").fill('Learning@830$3mK2');
//Radio button value selection 
await radioButton.nth(1).click()
await okButton.click()
//Assertion to make use the expected radio button is checked
await expect(radioButton.nth(1)).toBeChecked()
//Dropdown value selection
await dropdown.selectOption("teach")
//Assersion for dropdown value validation 
await expect(dropdown).toHaveValue("teach")
await checkBox.click()
//Assersion for checkbox 
await expect(checkBox).toBeChecked()
//To uncheck the box 
await checkBox.uncheck()
//Custom Assertion for uncheck since we don't have any ready made asserstion for uncheck 
await expect(await checkBox.isChecked()).toBeFalsy()
//To verify the text is blinking by the the attribute has the blinkingText value 
//Assertion to check a blinking text 
await expect(blinkingText.nth(0)).toHaveAttribute('class', 'blinkingText')
await signInButton.click();


    




}
)




