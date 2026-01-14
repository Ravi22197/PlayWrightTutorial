import {test,expect} from '@playwright/test'

test("select values from dropdown", async ({page}) => {
   await page.goto("https://freelance-learn-automation.vercel.app/login")
    // await page.goto("https://www.ebay.com/")
    await page.getByPlaceholder("Enter Email").type("raviranjan22197@gmail.com",{delay:100})
    await page.getByPlaceholder("Enter Password").type("Ravi@22197",{delay:100})
   // await page.locator("//body/div[@id='mainContent']/div[@class='page-grid-container hp-grid-container']/div[@class='page-grid hp-grid']/div[@id='vl-flyout-nav']/ul[@class='vl-flyout-nav__container']/li[1]/a[1]").hover()
   // await page.locator("//a[normalize-space()='Watersports']").click()
   await page.getByRole("button",{name:"Sign in"}).click()
   await page.locator("//span[test()='Manage']").hover()   //.hover({force:true})
   await page.locator("//a[normalize-space()='Manage Courses']").click()
})