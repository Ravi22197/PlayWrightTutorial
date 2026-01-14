import { test, expect } from '@playwright/test';
const datas = JSON.parse(JSON.stringify(require('../testLogin.json')))
// import testdata from '../testdata.json'; alternate way
test.describe("Data driven test", () => {
    for (const data of datas) {
        test.describe(`Login user tests ${data.Id}`, () => {
            test('Application Login', async ({ page }) => {
                await page.goto("https://freelance-learn-automation.vercel.app/login")
                await page.locator("//input[@id='email1']").fill(data.username)
                await page.locator("//input[@id='password1']").fill(data.password)
                await page.waitForTimeout(2000)
                await page.locator("//button[normalize-space()='Sign in']").click()
                await page.waitForTimeout(2000)
                 

            })
        })
    }
})

