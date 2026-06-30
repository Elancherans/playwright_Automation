const{test,expect} = require ('@playwright/test')


test('Work with calendar', async({page}) =>{

const Date = '20'
const Month = '9'
const Year = '2024'
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")
//Calendar icon
await page.locator(".react-date-picker__inputGroup").click()
//Month selector 
await page.locator(".react-calendar__navigation__label").click()
//Year selector
await page.locator(".react-calendar__navigation__label").click()
//Select the year 
await page.getByText(Year).click()
//Select the Month 
const monthLocator = await page.locator(".react-calendar__year-view__months__month").nth(Number(Month)-1)
await monthLocator.click();
//Select the date
const day = page.locator(`//abbr[text()='${Date}']`).click();
//Verify the selected values
const selectedValues = await page.locator(".react-date-picker__inputGroup__input")

const expectedList =[Month,Date,Year]

for(let i = 0; i<expectedList.length; i++){
        await expect(selectedValues.nth(i)).toHaveValue(expectedList[i]);
    }

}) 