const {test, expect} =require('@playwright/test')

test.use({viewport:{width:1450,height:850}})
// @ts-check
test("valid login in", async function ({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   console.log( await page.viewportSize().width)
   console.log( await page.viewportSize().height)
    await page.getByPlaceholder("Username").type("Admin",{delay:200})
    await page.locator("input[name='password']").type("admin1234",{delay:200})   // css selector -->input[name='password']
    await page.locator("//button[@type='submit']").click() // xpath using selector hub --> //button[@type='submit']
   // await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/dashboard/)
    // await page.getByAltText("profile picture").first().click()  // it does the same operation as next , getbyalt text need not be unique
    await page.locator("//img[@class='oxd-userdropdown-img']").click()
    await page.locator("//a[contains(@href,'/web/index.php/auth/logout')]").click()
   // await page.getByText("Logout").click()
   // await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/login/)
    

})