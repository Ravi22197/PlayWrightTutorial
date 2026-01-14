import {test,expect} from '@playwright/test'

test("verify file upload", async ({page}) => {
 await page.goto("https://the-internet.herokuapp.com/upload")
 //await page.locator("#file-upload").setInputFiles("/Users/Ranja/Desktop/JavaScriptExamples/hello.js")
 await page.locator("#file-upload").setInputFiles("./upload/hello.txt")
 await page.locator("#file-submit").click()
 await expect(page.locator("//h3")).toHaveText("File Uploaded!")
})