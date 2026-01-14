import { test, expect } from '@playwright/test';
 

test('handle alert', async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
   page.on("dialog",async (d) =>{
    expect(d.type()).toContain("alert")
    expect(d.message()).toContain("I am a JS Alert")
    console.log("heelo")
    await d.accept()
   })
   await page.locator("//button[text()='Click for JS Alert']").click()
})
test('handle confirm box', async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
   page.on("dialog",async (dialogwindow) =>{
    expect(dialogwindow.type()).toContain("confirm")
    expect(dialogwindow.message()).toContain("I am a JS Confirm")
    await dialogwindow.dismiss()
     //await dialogwindow.accept()
   })
   await page.locator("//button[text()='Click for JS Confirm']").click()
})

test('handle prompt textbox', async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
   page.on("dialog",async (dialogwindow) =>{
    expect(dialogwindow.type()).toContain("prompt")
    expect(dialogwindow.message()).toContain("I am a JS prompt")
    await dialogwindow.accept("hello Ravi")
   })
   await page.locator("//button[text()='Click for JS Prompt']").click()
})