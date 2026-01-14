import { test, expect } from '@playwright/test';
 

test('keyboard events in playwright', async ({ page }) => {
 await page.goto("https://www.google.com/")
 await page.locator("textarea[name='q']").type("Mukesh Otwani",{delay:200})

 await page.waitForSelector("//div[@id='ERWdKc']")
 await page.keyboard.press("ArrowDown")
 await page.keyboard.press("ArrowDown")
 await page.keyboard.press("ArrowDown")
 //await page.mouse.move(300, 400);
//await page.waitForTimeout(500);

 //await page.waitForTimeout(2000)
 await page.keyboard.press("Enter")
 
})

test('keyboard events in playwright using loop', async ({ page }) => {
 await page.goto("https://www.google.com/")
 await page.locator("textarea[name='q']").type("Mukesh Otwani")
 
 await page.waitForSelector("//li[@data-attrid='AutocompletePrediction']")
  
 const elements = await page.$$("//li[@data-attrid='AutocompletePrediction']")
for (let i =0 ;i<elements.length;i++){
  const element = await elements[i].textContent()
   if (element.includes('youtube')){
    await elements[i].click()
    break
  }
 }
  
 
})