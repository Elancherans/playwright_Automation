const{test,expect} = require ('@playwright/test')


test('Work with calendar', async({page}) =>{

    const Date = '20'
    const Month = '9'
    const Year = '2024'

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")
    //Calendar icon
    await page.locator(".react-date-picker__calendar-button__icon").click()
    //Month selector 
    await page.locator(".react-calendar__navigation__label").click()
    //Year selector
    await page.locator("button[class='react-calendar__navigation__label']").click()
    //Select the year 
    await page.getByText(Year).click()
    //Select the Month 
    await page.locator(".react-calendar__year-view__months__month").nth(Number(Month)-1).click()
    //Select the date 
    await page.locator("//abbr[text()='"+Date+"']").click()



}) 