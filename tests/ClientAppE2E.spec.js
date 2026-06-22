const{test,expect} = require ('@playwright/test')

test.only('Client app E2E validation' , async({browser}) =>
{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")

    const name = "iphone 13 pro"

    await page.locator("input[id ='userEmail']").fill("cheran5482@gmail.com")
    await page.locator("input[id ='userPassword']").fill("Cheran@5482")
    await page.locator("input[id ='login']").click()
    const products = page.locator(".card-body")
    await page.waitForLoadState('networkidle')
    const titles = await products.allTextContents()
    const count = await products.count()
    console.log(count)
    for(let i=0;i<count;i++){
        if(await products.nth(i).locator("b").textContent()===name){
            await products.nth(i).locator("text = Add To cart").click()
            break
        }
    }
    //locator that works with a partial text using *
    await page.locator("[routerlink*='cart']").click()
    //wait for the locator to be visible (to make sure the presence and proceed further)
    await page.locator("div li").first().waitFor()
    //Tag based locator with text
    const bool = await page.locator("h3:has-text('iphone 13 pro')").isVisible()
    expect(bool).toBeTruthy()

    //Ceckout page
    await page.locator("text=Checkout").click()
    await page.locator("div.field:has-text('Credit Card Number') input").fill(" ")
    await page.locator("div.field:has-text('Credit Card Number') input").fill("4542 9931 9292 2293")
    await page.locator("input[class = 'input txt']").first().fill("1234")
    await page.locator("input[class = 'input txt']").last().fill("Elancheran S")
    await page.locator("input[name='coupon']").fill("CCOOPON")
    await page.locator("button[type='submit']").click()

    //Shipping info
    const email = "cheran5482@gmail.com"
    await expect(page.locator("div[class = 'user__name mt-5'] label")).toHaveText(email)

    await page.locator("input[placeholder ='Select Country']").click()
    await page.waitForTimeout(500)
    await page.pause()

    await page.locator("input[placeholder ='Select Country']").pressSequentially("ind",{delay: 500})
    await page.waitForTimeout(500)
    await page.locator("button[class*='list-group-item']").first().waitFor()
    const dropdown = await page.locator("button[class*='list-group-item']")
    const count1 = await dropdown.count()
    for(let i = 0; i<count1; i++){
        const contry = await page.locator("span[class='ng-star-inserted']").nth(i).textContent()
        if(contry === " India"){
            await page.locator("span[class='ng-star-inserted']").nth(i).click()
            break
        }
    }
    
    await page.locator("a[class='btnn action__submit ng-star-inserted']").click()

    await page.waitForTimeout(500)

    await expect(page.locator(".line-item div[class ='title']").first()).toHaveText("iphone 13 pro")

    const orderId = (await page.locator("label[class ='ng-star-inserted']").textContent()).trim().replaceAll("|","").trim()

    console.log(orderId)

    //order page

    await page.locator("i[class = 'fa fa-handshake-o']").click()

await page.locator("tbody").waitFor()

const orderRow = page.locator("tbody tr")  // no await
const orderCount = await orderRow.count()  // await here, once before loop

console.log("Order count:", orderCount)    // check how many rows found
console.log("Looking for orderId:", orderId) // check orderId value

for(let i = 0; i < orderCount; i++){
    const orderPageId = await orderRow.nth(i).locator("th").textContent()
    console.log("Row text:", orderPageId)  // check what each row contains
    if(orderPageId.includes(orderId)){
        await orderRow.nth(i).locator("button").first().click()
        console.log("Clicked view for order:", orderId)
        break
    }
    }

    const rowIdDetailed = await page.locator("div[class ='col-text -main']").textContent()

    await expect(rowIdDetailed.includes(orderId)).toBeTruthy()
}
)

