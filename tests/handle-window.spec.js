import { test, expect } from '@playwright/test';
 

test('handle windows', async ({browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newPage] = await Promise.all
    (
        [
             context.waitForEvent('page'),
             page.locator("(//a[contains(@href ,'facebook')])[1]").click()
        ]
    )
    await newPage.waitForTimeout(2000)
   // await newPage.waitForLoadState('domcontentloaded');
   await newPage.locator("(//input[@name='email'])[2]").fill("raviranjan22197@gmail.com")
   await newPage.waitForTimeout(2000)
    await newPage.close()
    await page.locator("//input[@name='email1']").fill("Admin@123")
    await page.waitForTimeout(2000)

})