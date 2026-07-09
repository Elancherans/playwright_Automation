const {test} = require ("@playwright/test")

test('Work with frames', async({page}) =>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

const framePage = page.frameLocator("#courses-iframe")
await framePage.locator("li a[href='lifetime-access'].new-navbar-highlighter").click()

const textOfWholeLine = await framePage.locator("div[class = 'text'] h2").textContent()

await console.log(textOfWholeLine)

const firstIndex = await textOfWholeLine.split(" ")[1]

console.log(firstIndex)

})