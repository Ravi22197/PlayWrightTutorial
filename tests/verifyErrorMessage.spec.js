import {test,expect} from '@playwright/test'


test("verify error message", async function ({page}) {
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").type("Admin")
    await page.getByPlaceholder("Password").type("Admin123")
    await page.locator("//button[@type='submit']").click()
    const errorMesage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()
    console.log("Error message is "+ errorMesage)
     expect(errorMesage.includes("Invalid")).toBeTruthy()
     expect(errorMesage === "Invalid credentials").toBeTruthy()
})