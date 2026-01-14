import { test, expect } from '@playwright/test';
const LoginPage = require("../pages/loginpage")
 import HomePage from '../pages/homepage'

test('Log in using Pom', async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login")
     const loginPage = new LoginPage(page)
     await loginPage.loginToApplication()   // pass parameter loginToApplication("admin@email.com","admin@123")
     const homePage = new HomePage(page)
     await homePage.verifyManageOption()
     await homePage.logOutFromApplication()
     await loginPage.verifySignIn()
     
})
