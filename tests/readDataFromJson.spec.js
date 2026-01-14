import { test, expect } from '@playwright/test';
const data = JSON.parse(JSON.stringify(require('../testData.json')))
// import testdata from '../testdata.json'; alternate way
 

test('working with load State', async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("//input[@id='email1']").fill(data.username)
    await page.locator("//input[@id='password1']").fill(data.password)
    await page.waitForTimeout(2000)
    await page.locator("//button[normalize-space()='Sign in']").click()
    await page.waitForTimeout(2000) 
    /* await page.getByText("New user? Signup").click()  --.Simply to check multiple check ins
     await page.waitForLoadState("networkidle")
      const checkboxes = page.locator('//input[@type="checkbox"]');
        const count = await checkboxes.count();
        for (let i = 0; i < count; i++) {
  await checkboxes.nth(i).check();
  }*/

}) 